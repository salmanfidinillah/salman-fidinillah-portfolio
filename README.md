# Portfolio Salman Fidinillah

Website portofolio pribadi Salman Fidinillah yang menampilkan profil, pengalaman, keahlian, proyek, sertifikat, blog, dan informasi kontak.

## Teknologi

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

Project ini adalah website statis. Tidak membutuhkan database, server Express, API key, atau environment variable.

## Menjalankan di VS Code

Persyaratan:

- Node.js 20 LTS atau lebih baru
- npm

Langkah:

1. Ekstrak ZIP project.
2. Buka folder project melalui **File → Open Folder** di VS Code.
3. Buka terminal VS Code melalui **Terminal → New Terminal**.
4. Instal dependency:

   ```bash
   npm install
   ```

5. Periksa TypeScript:

   ```bash
   npm run lint
   ```

6. Jalankan development server:

   ```bash
   npm run dev
   ```

7. Buka alamat yang ditampilkan terminal, biasanya `http://localhost:3000`.

## Pengujian Mandiri

Periksa halaman berikut pada ukuran desktop, tablet, dan ponsel:

- `/` — beranda dan tiga proyek unggulan;
- `/journey` — pengalaman, pendidikan, dan sertifikat;
- `/skills` — daftar keahlian;
- `/projects` — empat proyek dan galeri masing-masing;
- `/blog` — daftar artikel, gambar, pencarian, filter, dan detail artikel;
- `/contact` — formulir, WhatsApp, serta tautan email;
- mode gelap/terang, pilihan bahasa, menu mobile, seluruh tombol eksternal, dan tombol kembali browser.

Uji production build:

```bash
npm run build
npm run preview
```

Folder hasil build berada di `dist/`.

## Deploy Gratis ke Cloudflare Pages

Gunakan konfigurasi berikut:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20`
- Environment variables: tidak ada

File `public/_redirects` sudah disiapkan agar route aplikasi tetap dapat dibuka langsung setelah deployment.

## SEO

Metadata, canonical URL, Open Graph, Twitter Card, JSON-LD, `robots.txt`, dan `sitemap.xml` sudah tersedia. Jika domain deployment berbeda dari `salmanbuilds.web.id`, ubah domain tersebut pada `index.html`, `src/App.tsx`, `src/components/Blog.tsx`, `public/robots.txt`, dan `public/sitemap.xml` sebelum mendaftarkan website ke Google Search Console.
