import { PassThrough } from 'node:stream';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import App from './App';
export { getPageSEO, getSiteRoutes, SITE_URL } from './seo';

export function render(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let failure: unknown;
    output.resume();
    output.on('error', reject);
    output.on('end', () => {
      clearTimeout(timeout);
      if (failure) { reject(failure); return; }
      // All lazy route modules are now ready. Static markup avoids streaming
      // placeholders that would otherwise require JavaScript to reveal content.
      try { resolve(renderToStaticMarkup(<App initialPath={path} />)); } catch (error) { reject(error); }
    });
    const stream = renderToPipeableStream(<App initialPath={path} />, {
      onAllReady() { stream.pipe(output); },
      onShellError(error) { clearTimeout(timeout); reject(error); },
      onError(error) { failure = error; },
    });
    const timeout = setTimeout(() => { stream.abort(); reject(new Error(`Rendering timed out: ${path}`)); }, 30000);
  });
}
