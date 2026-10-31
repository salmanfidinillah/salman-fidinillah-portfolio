export interface TranslationDict {
  heroTagline: string;
  roleTitle: string;
  locationTitle: string;
  viewProjects: string;
  downloadCV: string;
  findMeOn: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  completedProjects: string;
  satisfiedClients: string;
  yearsExp: string;
  commitsThisYear: string;
  whatIDo: string;
  whatIDoSubtitle: string;
  services: {
    webDev: { title: string; desc: string };
    uiux: { title: string; desc: string };
    api: { title: string; desc: string };
    audit: { title: string; desc: string };
  };
  journeyTitle: string;
  journeySubtitle: string;
  workTimeline: string;
  education: string;
  certificates: string;
  readMore: string;
  readLess: string;
  educationLevel: string;
  toolboxTitle: string;
  toolboxSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  searchPlaceholder: string;
  allProjects: string;
  categories: {
    all: string;
    web: string;
    mobile: string;
    uiux: string;
    openSource: string;
  };
  visitSite: string;
  viewCode: string;
  challenge: string;
  solution: string;
  businessImpact: string;
  keyFeatures: string;
  coreHighlights: string;
  backToProjects: string;
  projectGallery: string;
  contactTitle: string;
  contactSubtitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSend: string;
  directContact: string;
  responseBadge: string;
  contactSuccess: string;
  footerTagline: string;
  footerNavigate: string;
  footerContact: string;
  footerStack: string;
  footerCopyright: string;
  footerMadeWith: string;
  blogTitle: string;
  blogSubtitle: string;
  searchBlog: string;
  allCategories: string;
  sortBy: string;
  newest: string;
  oldest: string;
  readMoreBtn: string;
  backToBlog: string;
  shareArticle: string;
  copied: string;
  noArticles: string;
}

export const TRANSLATIONS: Record<'ID' | 'EN', TranslationDict> = {
  ID: {
    heroTagline: 'Merancang & membangun pengalaman web modern, responsif, dan scalable melalui kode yang rapi, desain yang terarah, serta performa yang andal.',
    roleTitle: 'Fullstack Developer',
    locationTitle: 'Berbasis di Indonesia',
    viewProjects: 'Lihat Proyek →',
    downloadCV: 'Unduh CV',
    findMeOn: 'TEMUKAN SAYA DI',
    aboutTitle: 'Tentang Saya',
    aboutSubtitle: 'Saya seorang Fullstack Developer yang berfokus pada penciptaan aplikasi web berkinerja tinggi, berestetika tinggi, serta dirancang dengan kode yang bersih dan terstruktur.',
    aboutText1: 'Saya seorang Fullstack Developer yang berfokus pada penciptaan aplikasi web berkinerja tinggi, berestetika tinggi, serta dirancang dengan kode yang bersih dan terstruktur.',
    aboutText2: 'Berbekal kecintaan mendalam pada rekayasa perangkat lunak, saya mendedikasikan waktu saya untuk memecahkan masalah kompleks dan mengubahnya menjadi solusi digital yang intuitif dan interaktif bagi pengguna.',
    completedProjects: 'Proyek Selesai',
    satisfiedClients: 'Klien Puas',
    yearsExp: 'Tahun Pengalaman',
    commitsThisYear: 'Tools Andalan',
    whatIDo: 'Yang Saya Lakukan',
    whatIDoSubtitle: 'Kemampuan yang saya bawa ke setiap kolaborasi',
    services: {
      webDev: {
        title: 'Pengembangan Web',
        desc: 'Aplikasi web siap produksi dengan stack modern dan praktik terbaik.'
      },
      uiux: {
        title: 'Rekayasa UI/UX',
        desc: 'Antarmuka rapi, motion design, dan design system terarah.'
      },
      api: {
        title: 'API & Backend',
        desc: 'API andal, database, dan integrasi yang skalabel.'
      },
      audit: {
        title: 'Audit Performa',
        desc: 'Optimasi Lighthouse, Core Web Vitals, dan SEO.'
      }
    },
    journeyTitle: 'Pengalaman & Perjalanan',
    journeySubtitle: 'Lini masa peran, pendidikan, dan sertifikasi yang membentuk keahlian saya.',
    workTimeline: 'Lini Masa Pekerjaan',
    education: 'Pendidikan',
    certificates: 'Sertifikat',
    readMore: 'Baca selengkapnya',
    readLess: 'Tutup',
    educationLevel: 'Teknik Informatika (Fakultas Sains, Teknologi, dan Kesehatan)',
    toolboxTitle: 'Teknologi & Ekosistem',
    toolboxSubtitle: 'Kumpulan framework, infrastruktur, dan kecerdasan buatan (AI) yang saya gunakan untuk menciptakan masa depan.',
    projectsTitle: 'Proyek Pilihan',
    projectsSubtitle: 'Arsip terpilih dari produk, eksperimen, dan kontribusi open-source.',
    searchPlaceholder: 'Cari proyek, tag, teknologi...',
    allProjects: 'Semua',
    categories: {
      all: 'Semua',
      web: 'Pengembangan Web',
      mobile: 'Aplikasi Seluler',
      uiux: 'Desain UI/UX',
      openSource: 'Sumber Terbuka'
    },
    visitSite: 'Kunjungi Situs',
    viewCode: 'Kode Sumber',
    challenge: 'Tantangan',
    solution: 'Solusi',
    businessImpact: 'Dampak Bisnis',
    keyFeatures: 'Fitur Utama',
    coreHighlights: 'Sistem Unggulan',
    backToProjects: '← Kembali ke Proyek',
    projectGallery: 'Galeri Proyek',
    contactTitle: 'Mari bangun sesuatu yang hebat',
    contactSubtitle: 'Punya proyek? Kirim pesan - saya akan segera membalasnya secepat mungkin.',
    formName: 'NAMA ANDA',
    formEmail: 'ALAMAT EMAIL',
    formMessage: 'CERITAKAN TENTANG PROYEK ANDA',
    formMessagePlaceholder: 'Halo Salman, saya memiliki ide proyek menarik mengenai...',
    formSend: 'Kirim pesan',
    directContact: 'ATAU HUBUNGI LANGSUNG',
    responseBadge: 'Respon Cepat',
    contactSuccess: 'Pesan Anda berhasil dikirim! Salman akan segera menghubungi Anda.',
    footerTagline: 'Merancang & membangun pengalaman web modern.',
    footerNavigate: 'NAVIGATE',
    footerContact: 'CONTACT',
    footerStack: 'STACK',
    footerCopyright: 'Hak cipta dilindungi.',
    footerMadeWith: 'Dibuat dengan 💜 di Indonesia',
    blogTitle: 'Blog & Insights',
    blogSubtitle: 'Artikel, panduan praktis, dan catatan perjalanan saya seputar rekayasa perangkat lunak, kecerdasan buatan, dan pembelajaran teknologi.',
    searchBlog: 'Cari artikel, tag, teknologi...',
    allCategories: 'Semua Kategori',
    sortBy: 'Urutkan',
    newest: 'Terbaru',
    oldest: 'Terlama',
    readMoreBtn: 'Baca Selengkapnya →',
    backToBlog: '← Kembali ke Blog',
    shareArticle: 'Bagikan Artikel',
    copied: 'Tautan Tersalin!',
    noArticles: 'Tidak ada artikel yang cocok dengan pencarian Anda.'
  },
  EN: {
    heroTagline: 'Designing & building modern, responsive, and scalable web experiences through clean code, structured design, and reliable performance.',
    roleTitle: 'Fullstack Developer',
    locationTitle: 'Based in Indonesia',
    viewProjects: 'See Projects →',
    downloadCV: 'Download CV',
    findMeOn: 'FIND ME ON',
    aboutTitle: 'About Me',
    aboutSubtitle: 'I am a Fullstack Developer focused on crafting high-performance, high-aesthetic web applications designed with clean, structured code.',
    aboutText1: 'I am a Fullstack Developer focused on crafting high-performance, high-aesthetic web applications designed with clean, structured code.',
    aboutText2: 'Driven by a deep passion for software engineering, I dedicate myself to solving complex problems and turning them into intuitive, interactive digital solutions for users.',
    completedProjects: 'Completed Projects',
    satisfiedClients: 'Satisfied Clients',
    yearsExp: 'Years Experience',
    commitsThisYear: 'Tools Mastered',
    whatIDo: 'What I Do',
    whatIDoSubtitle: 'Skills and value I bring to every collaboration',
    services: {
      webDev: {
        title: 'Web Development',
        desc: 'Production-ready web apps with modern stacks and engineering best practices.'
      },
      uiux: {
        title: 'UI/UX Engineering',
        desc: 'Sleek user interfaces, beautiful motion design, and purposeful design systems.'
      },
      api: {
        title: 'API & Backend',
        desc: 'Robust APIs, secure database structures, and highly scalable integrations.'
      },
      audit: {
        title: 'Performance Audit',
        desc: 'Lighthouse optimizations, core web vitals, and search engine optimization (SEO).'
      }
    },
    journeyTitle: 'Journey & Experience',
    journeySubtitle: 'The professional timeline, academic background, and certifications shaping my expertise.',
    workTimeline: 'Work Timeline',
    education: 'Education',
    certificates: 'Certificates',
    readMore: 'Read more',
    readLess: 'Collapse',
    educationLevel: 'Computer Science (Faculty of Science, Technology, and Health)',
    toolboxTitle: 'Tech Stack & Ecosystem',
    toolboxSubtitle: 'A collection of frameworks, cloud infrastructure, and artificial intelligence models I leverage to engineer the future.',
    projectsTitle: 'Selected Projects',
    projectsSubtitle: 'A curated list of products, custom experiments, and open-source contributions.',
    searchPlaceholder: 'Search projects, tags, tech...',
    allProjects: 'All',
    categories: {
      all: 'All',
      web: 'Web Development',
      mobile: 'Mobile Apps',
      uiux: 'UI/UX Design',
      openSource: 'Open Source'
    },
    visitSite: 'Visit Live Site',
    viewCode: 'Source Code',
    challenge: 'Challenge',
    solution: 'Solution',
    businessImpact: 'Business Impact',
    keyFeatures: 'Key Features',
    coreHighlights: 'Core Highlights',
    backToProjects: '← Back to Projects',
    projectGallery: 'Project Gallery',
    contactTitle: 'Let’s build something amazing',
    contactSubtitle: 'Got a project or an idea? Send a message - I will get back to you as soon as possible.',
    formName: 'YOUR NAME',
    formEmail: 'EMAIL ADDRESS',
    formMessage: 'TELL ME ABOUT YOUR PROJECT',
    formMessagePlaceholder: 'Hi Salman, I have an interesting project idea about...',
    formSend: 'Send Message',
    directContact: 'OR DIRECT CONTACT',
    responseBadge: 'Fast Response',
    contactSuccess: 'Your message has been sent successfully! Salman will contact you shortly.',
    footerTagline: 'Designing & building modern web experiences.',
    footerNavigate: 'NAVIGATE',
    footerContact: 'CONTACT',
    footerStack: 'STACK',
    footerCopyright: 'All rights reserved.',
    footerMadeWith: 'Made with 💜 in Indonesia',
    blogTitle: 'Blog & Insights',
    blogSubtitle: 'Articles, practical tutorials, and journey notes about software engineering, artificial intelligence, and learning technology.',
    searchBlog: 'Search articles, tags, tech...',
    allCategories: 'All Categories',
    sortBy: 'Sort By',
    newest: 'Newest',
    oldest: 'Oldest',
    readMoreBtn: 'Read More →',
    backToBlog: '← Back to Blog',
    shareArticle: 'Share Article',
    copied: 'Link Copied!',
    noArticles: 'No articles matched your search query.'
  }
};
