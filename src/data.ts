import { Project, WorkExperience, Education, CertificateCategory, SkillCategory, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cyber-academy-ai',
    title: 'Cyber Academy AI',
    category: 'Pengembangan Web',
    badgeText: 'AI Cyber Learning',
    completionDate: 'Agustus 2026',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Gemini AI'],
    description: 'Platform belajar keamanan siber interaktif yang memadukan jalur belajar terstruktur, simulasi aman, gamifikasi, sertifikat, dan AI Tutor untuk membantu pemula belajar secara bertahap.',
    image: '/projects/cyber-academy-cover.webp',
    client: 'Proyek Pribadi',
    visitUrl: 'https://siberaga.web.id/',
    sourceUrl: 'https://github.com/salmanfidinillah/cyber-academy',
    challenge: 'Materi keamanan siber sering terasa rumit bagi pemula karena istilah teknis, alur belajar yang tersebar, dan minimnya ruang praktik yang aman.',
    solution: 'Cyber Academy AI menyatukan materi, kuis, simulasi phishing, pelacakan progres, serta AI Tutor dalam satu pengalaman belajar responsif yang dapat diakses melalui desktop maupun ponsel.',
    businessImpact: 'Menghasilkan pengalaman belajar siber yang lebih terarah dan mudah dipantau, sekaligus menunjukkan implementasi AI, gamifikasi, autentikasi, dan sertifikasi dalam satu produk web.',
    features: [
      'Jalur belajar dan lesson yang tersusun bertahap',
      'Kuis serta simulasi keamanan siber yang aman',
      'AI Tutor untuk membantu memahami materi',
      'Progres, XP, level, streak, dan badge pencapaian',
      'Sertifikat kelulusan dengan kode verifikasi'
    ],
    highlights: [
      'Next.js dan TypeScript untuk antarmuka aplikasi',
      'Firebase Authentication dan penyimpanan progres',
      'Integrasi Gemini AI pada fitur AI Tutor',
      'Dashboard responsif untuk desktop dan perangkat mobile'
    ],
    gallery: [
      '/projects/cyber-academy-cover.webp',
      '/projects/cyber-academy-home-mobile.webp',
      '/projects/cyber-academy-dashboard.webp',
      '/projects/cyber-academy-dashboard-mobile.webp',
      '/projects/cyber-academy-progress-mobile.webp',
      '/projects/cyber-academy-ai-tutor.webp',
      '/projects/cyber-academy-lesson.webp',
      '/projects/cyber-academy-certificate.webp'
    ]
  },
  {
    id: 'invitalab',
    title: 'InvitaLab',
    category: 'Pengembangan Web',
    badgeText: 'Digital Invitation',
    completionDate: 'Januari 2025',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    description: 'Website layanan undangan digital yang menampilkan katalog tema, pilihan harga, fitur layanan, dan alur pemesanan praktis untuk momen spesial.',
    image: '/projects/invitalab-cover.webp',
    client: 'InvitaLab',
    visitUrl: 'https://invitation.avilab.my.id/',
    sourceUrl: 'https://github.com/salmansegf',
    challenge: 'Calon pengguna membutuhkan cara yang cepat untuk memahami layanan undangan digital, membandingkan tema, dan menghubungi penyedia tanpa proses yang membingungkan.',
    solution: 'Merancang landing page responsif dengan penjelasan layanan yang ringkas, katalog tema visual, daftar keunggulan, informasi harga, FAQ, serta tombol pemesanan melalui WhatsApp.',
    businessImpact: 'Membuat penawaran layanan lebih jelas, memudahkan calon pelanggan menemukan tema yang sesuai, dan memperpendek alur dari eksplorasi menuju konsultasi atau pemesanan.',
    features: [
      'Katalog tema undangan digital',
      'Preview desain sebelum melakukan pemesanan',
      'Halaman harga, fitur, dan FAQ yang terstruktur',
      'Tampilan responsif untuk desktop dan perangkat mobile',
      'Tombol konsultasi dan pemesanan melalui WhatsApp'
    ],
    highlights: [
      'Struktur landing page yang berorientasi konversi',
      'Katalog visual dengan pilihan beberapa tema',
      'Navigasi ringkas ke Harga, Fitur, dan FAQ',
      'Antarmuka ringan dan konsisten di berbagai layar'
    ],
    gallery: [
      '/projects/invitalab-cover.webp',
      '/projects/invitalab-about.webp',
      '/projects/invitalab-features.webp',
      '/projects/invitalab-catalog.webp'
    ]
  },
  {
    id: 'kangen-haramain',
    title: 'Kangen Haramain',
    category: 'Pengembangan Web',
    badgeText: 'Umrah Backpacker',
    completionDate: 'Juni 2026',
    tech: ['Tailwind CSS', 'Alpine.js', 'Laravel', 'MySQL'],
    description: 'Website informasi dan layanan perjalanan Umrah yang menyatukan konsultasi, kebutuhan land arrangement, panduan praktis, artikel, dan galeri dalam satu tempat.',
    image: '/projects/kangen-haramain-cover.webp',
    client: 'Kangen Haramain',
    visitUrl: 'https://kangenharamain.my.id/',
    sourceUrl: 'https://github.com/salmansegf',
    challenge: 'Informasi layanan Umrah mandiri sering tersebar, sehingga calon jamaah kesulitan memahami pilihan visa, transportasi, hotel, pendampingan, dan persiapan perjalanan secara utuh.',
    solution: 'Membangun website informatif dengan ringkasan layanan land arrangement, konsultasi, artikel edukasi, galeri, dan navigasi yang membantu pengguna menemukan informasi perjalanan dengan lebih cepat.',
    businessImpact: 'Memusatkan informasi penting perjalanan Umrah dalam pengalaman yang lebih rapi, memperjelas layanan yang tersedia, dan menyediakan jalur konsultasi yang mudah ditemukan.',
    features: [
      'Informasi visa Umrah dan administrasi perjalanan',
      'Layanan transportasi, hotel, muthawwif, dan pendampingan',
      'Artikel edukasi serta tips persiapan Umrah',
      'Galeri dokumentasi perjalanan',
      'Akses konsultasi gratis yang mudah ditemukan'
    ],
    highlights: [
      'Navigasi layanan yang terstruktur dan mudah dipindai',
      'Artikel perjalanan dalam format kartu yang responsif',
      'CTA konsultasi yang konsisten di seluruh halaman',
      'Tampilan ringan untuk desktop dan perangkat mobile'
    ],
    gallery: [
      '/projects/kangen-haramain-cover.webp',
      '/projects/kangen-haramain-services.webp',
      '/projects/kangen-haramain-articles.webp'
    ]
  },
  {
    id: 'scanmed-ai',
    title: 'ScanMed AI',
    category: 'Sumber Terbuka',
    badgeText: 'Emergency AI',
    completionDate: 'April 2026',
    tech: ['React', 'TypeScript', 'Firebase', 'Gemini AI'],
    description: 'Prototipe asisten kondisi darurat berbasis AI yang membantu pengguna menjelaskan gejala, melihat klasifikasi tingkat urgensi, dan mengakses panduan awal dengan antarmuka mobile-first.',
    image: '/projects/scanmed-ai-cover.webp',
    client: 'Microsoft Elevate AI Challenge',
    sourceUrl: 'https://github.com/salmansegf',
    challenge: 'Dalam situasi darurat, pengguna dapat kesulitan menyampaikan kondisi dengan runtut dan menemukan informasi awal yang mudah dipahami sebelum menghubungi tenaga medis.',
    solution: 'ScanMed AI dirancang sebagai prototipe asistif dengan input kondisi, hasil klasifikasi urgensi, percakapan AI, dan tombol akses cepat ke fasilitas kesehatan. Aplikasi ini bukan pengganti diagnosis atau layanan tenaga medis profesional.',
    businessImpact: 'Mendemonstrasikan bagaimana AI dan desain mobile-first dapat menyajikan informasi awal secara terstruktur sambil tetap mengarahkan pengguna kepada bantuan medis profesional.',
    features: [
      'Input kondisi melalui deskripsi dan foto',
      'Klasifikasi tingkat urgensi dengan tampilan berwarna',
      'AI Consultant untuk pertanyaan kesehatan umum',
      'Tombol cepat menghubungi fasilitas kesehatan',
      'Antarmuka mobile-first dengan hierarki informasi yang jelas'
    ],
    highlights: [
      'Integrasi Gemini AI untuk pengalaman percakapan',
      'Alur hasil klasifikasi yang mudah dipindai',
      'Desain kontras tinggi untuk konteks darurat',
      'Komponen React dan TypeScript yang responsif'
    ],
    gallery: [
      '/projects/scanmed-ai-cover.webp',
      '/projects/scanmed-ai-home-mobile.webp',
      '/projects/scanmed-ai-triage-mobile.webp',
      '/projects/scanmed-ai-chat-mobile.webp'
    ]
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp1',
    role: 'Fullstack Developer',
    type: 'Paruh Waktu',
    company: 'InvintaLab – Undangan Digital',
    duration: 'Jan 2025 – Sekarang',
    location: 'Remote',
    description: 'Mengembangkan dan memelihara aplikasi web undangan digital modern menggunakan teknologi front-end dan back-end. Berkolaborasi dalam pengembangan fitur, optimasi performa aplikasi, serta memastikan pengalaman pengguna yang responsif dan andal.'
  },
  {
    id: 'exp2',
    role: 'Microsoft Elevate Training Center',
    type: 'Pelatihan',
    company: 'Microsoft Elevate',
    duration: 'Nov 2025 – Jun 2026',
    location: 'Online',
    description: 'Mengikuti program pelatihan intensif yang berfokus pada pengembangan keterampilan teknologi dan Artificial Intelligence melalui pembelajaran terstruktur, praktik langsung, serta penyelesaian berbagai studi kasus dan proyek.'
  },
  {
    id: 'exp3',
    role: 'AI Mini Camp',
    type: 'Bootcamp',
    company: 'Dicoding Indonesia',
    duration: 'Apr 2026 – Sekarang',
    location: 'Online',
    description: 'Mengikuti program AI Mini Camp untuk mempelajari dasar hingga penerapan Artificial Intelligence, Machine Learning, Prompt Engineering, dan pembangunan aplikasi AI melalui proyek berbasis studi kasus.'
  },
  {
    id: 'exp4',
    role: 'AI Impact Challenge – Hackathon',
    type: 'Hackathon',
    company: 'Microsoft Elevate',
    duration: 'Apr 2026',
    location: 'Online',
    description: 'Berpartisipasi dalam hackathon AI selama satu bulan dengan mengembangkan solusi berbasis Artificial Intelligence untuk menyelesaikan permasalahan nyata melalui kolaborasi tim dan implementasi teknologi modern.'
  },
  {
    id: 'exp5',
    role: 'AI Impact Challenge – Datathon',
    type: 'Datathon',
    company: 'Microsoft Elevate',
    duration: 'Apr 2026',
    location: 'Online',
    description: 'Mengikuti kompetisi Datathon yang berfokus pada analisis data, pemecahan masalah berbasis data, serta penyusunan insight menggunakan pendekatan Data Analytics dan Artificial Intelligence.'
  },
  {
    id: 'exp6',
    role: '☁️ AWS AI Academy 2026',
    type: 'Akademi',
    company: 'Amazon Web Services (AWS)',
    duration: 'Mei 2026 – Sekarang',
    location: 'Online',
    description: 'Mengikuti program AI Academy untuk mempelajari dasar-dasar Artificial Intelligence, Generative AI, serta implementasi layanan AI berbasis cloud menggunakan ekosistem AWS.'
  },
  {
    id: 'exp7',
    role: 'Flash Class AI',
    type: 'Kelas',
    company: 'PIJAK × IBM SkillsBuild',
    duration: 'Mei 2026 – Sekarang',
    location: 'Online',
    description: 'Mengikuti Flash Class yang membahas pemanfaatan Artificial Intelligence, pengembangan keterampilan digital, serta penerapan AI dalam penyelesaian tantangan dunia nyata bersama IBM SkillsBuild.'
  },
  {
    id: 'exp8',
    role: 'Juara Vibe Coding',
    type: 'Event',
    company: 'Google for Developers',
    duration: 'Mei 2026',
    location: 'Online',
    description: 'Mengikuti event Vibe Coding yang diselenggarakan oleh Google for Developers untuk mempelajari teknik pengembangan aplikasi modern menggunakan AI, workflow pengembangan yang efisien, serta praktik terbaik dalam membangun produk digital.'
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu1',
    institution: 'Universitas Sahid Surakarta',
    degree: 'Teknik Informatika (S1)',
    status: 'Sedang Berjalan',
    duration: 'Okt 2024 - Sekarang',
    description: 'Kuliah aktif di Fakultas Sains, Teknologi, dan Kesehatan. Mengambil spesialisasi rekayasa perangkat lunak dan arsitektur data.',
    highlights: ['Web Development', 'Computer Networks', 'Algorithms', 'Databases']
  },
  {
    id: 'edu2',
    institution: 'Pondok Salman Alfarisi',
    degree: 'Pendidikan Islam & Pengembangan Ilmu',
    status: 'Santri',
    duration: 'Jul 2021 - Mei 2024',
    description: 'Menimba ilmu agama dan memperdalam pemahaman Al-Qur’an, bahasa Arab, fikih, serta kitab kuning. Membentuk karakter islami, disiplin, dan berakhlak mulia dalam kehidupan sehari-hari.',
    highlights: ['Bahasa Arab', 'Al-Qur’an', 'Fikih', 'Kitab Kuning']
  }
];

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  {
    id: 'cat_dicoding',
    name: 'Dicoding & AI Mini Camp',
    emoji: '🟥',
    colorClass: 'border-red-500/20 hover:border-red-500/40 text-red-400',
    logoName: 'dicoding',
    descriptionID: 'Sertifikat kelas dan program AI Mini Camp dari Dicoding yang mencakup AI, machine learning, Python, data science, dan pengembangan perangkat lunak.',
    descriptionEN: 'Course and AI Mini Camp certificates from Dicoding covering AI, machine learning, Python, data science, and software development.',
    badgeGradient: 'from-red-500/10 via-rose-600/10 to-transparent',
    certificates: [
      {
        id: 'd-cert1',
        title: 'AI Mini Camp Led by Dicoding',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-red-500 to-rose-600',
        url: '/certificates/ai-mini-camp-dicoding-2026.webp'
      },
      {
        id: 'd-cert2',
        title: 'Prompt Engineering untuk Software Developer',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-fuchsia-500 to-purple-600',
        url: '/certificates/dicoding-prompt-engineering-software-developer-2026.webp'
      },
      {
        id: 'd-cert3',
        title: 'Membangun Sistem Machine Learning',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-indigo-500 to-blue-600',
        url: '/certificates/dicoding-membangun-sistem-machine-learning-2026.webp'
      },
      {
        id: 'd-cert4',
        title: 'Spec-Driven Development dengan Kiro',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-purple-500 to-indigo-600',
        url: '/certificates/dicoding-spec-driven-development-kiro-2026.webp'
      },
      {
        id: 'd-cert5',
        title: 'AI Praktis untuk Produktivitas',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-cyan-500 to-blue-600',
        url: '/certificates/dicoding-ai-praktis-produktivitas-2026.webp'
      },
      {
        id: 'd-cert6',
        title: 'Belajar Penggunaan Generative AI',
        issuer: 'Dicoding Indonesia',
        year: '2026',
        badgeGradient: 'from-sky-500 to-indigo-600',
        url: '/certificates/dicoding-generative-ai-2026.webp'
      },
      {
        id: 'd-cert7',
        title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        badgeGradient: 'from-blue-500 to-cyan-500',
        url: '/certificates/dicoding-gen-ai-microsoft-azure-2025.webp'
      },
      {
        id: 'd-cert8',
        title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        badgeGradient: 'from-amber-500 to-orange-500',
        url: '/certificates/dicoding-data-science-microsoft-fabric-2025.webp'
      },
      {
        id: 'd-cert9',
        title: 'Belajar Dasar AI',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        badgeGradient: 'from-red-600 to-orange-500',
        url: '/certificates/dicoding-belajar-dasar-ai-2025.webp'
      },
      {
        id: 'd-cert10',
        title: 'Memulai Pemrograman dengan Python',
        issuer: 'Dicoding Indonesia',
        year: '2025',
        badgeGradient: 'from-blue-600 to-yellow-500',
        url: '/certificates/dicoding-python-2025.webp'
      }
    ]
  },
  {
    id: 'cat_microsoft',
    name: 'Microsoft Elevate',
    emoji: '🟦',
    colorClass: 'border-blue-500/20 hover:border-blue-500/40 text-blue-400',
    logoName: 'microsoft',
    descriptionID: 'Sertifikat pembelajaran Microsoft Elevate Training Center yang benar-benar tersedia pada arsip sertifikat.',
    descriptionEN: 'Microsoft Elevate Training Center learning certificate available in the certificate archive.',
    badgeGradient: 'from-blue-600/10 via-indigo-600/10 to-transparent',
    certificates: [
      {
        id: 'm-cert1',
        title: 'Menciptakan Copilot Pribadi dengan Azure AI Foundry',
        issuer: 'Microsoft Elevate Training Center',
        year: '2025',
        badgeGradient: 'from-blue-600 to-indigo-600',
        url: '/certificates/microsoft-elevate-copilot-azure-ai-2025.webp'
      }
    ]
  },
  {
    id: 'cat_google',
    name: 'Google Developer Groups',
    emoji: '🟨',
    colorClass: 'border-yellow-400/20 hover:border-yellow-400/40 text-yellow-400',
    logoName: 'google',
    descriptionID: 'Bukti partisipasi dalam kegiatan #JuaraVibeCoding yang diselenggarakan bersama komunitas Google Developer Groups.',
    descriptionEN: 'Participation certificate for the #JuaraVibeCoding event held with the Google Developer Groups community.',
    badgeGradient: 'from-yellow-400/10 via-amber-500/10 to-transparent',
    certificates: [
      {
        id: 'g-cert1',
        title: '#JuaraVibeCoding Participant',
        issuer: 'Google Developer Groups',
        year: '2026',
        badgeGradient: 'from-yellow-400 to-blue-500',
        url: '/certificates/google-developer-groups-juara-vibe-coding-2026.webp'
      }
    ]
  },
  {
    id: 'cat_workshop',
    name: 'Professional Learning & Events',
    emoji: '🎯',
    colorClass: 'border-pink-500/20 hover:border-pink-500/40 text-pink-400',
    logoName: 'workshop',
    descriptionID: 'Sertifikat pembelajaran profesional, seminar internasional, kelas singkat, dan workshop kampus yang telah diikuti.',
    descriptionEN: 'Certificates from professional learning, an international seminar, a short class, and a university workshop.',
    badgeGradient: 'from-pink-600/10 via-rose-500/10 to-transparent',
    certificates: [
      {
        id: 'w-cert1',
        title: 'Social Media Certified',
        issuer: 'HubSpot Academy',
        year: '2026',
        badgeGradient: 'from-blue-600 to-indigo-600',
        url: '/certificates/hubspot-social-media-certified-2026.webp'
      },
      {
        id: 'w-cert2',
        title: 'Workshop Excel, Word & Graphic Design',
        issuer: 'HMTI Universitas Sahid Surakarta',
        year: '2026',
        badgeGradient: 'from-emerald-500 to-cyan-600',
        url: '/certificates/workshop-excel-word-graphic-design-2026.webp'
      },
      {
        id: 'w-cert3',
        title: 'International Seminar: AI and Optimization in Service Delivery',
        issuer: 'Universitas Sahid Surakarta × INTI International University',
        year: '2025',
        badgeGradient: 'from-cyan-500 to-indigo-600',
        url: '/certificates/international-seminar-ai-service-delivery-2025.webp'
      },
      {
        id: 'w-cert4',
        title: 'AI for Productivity',
        issuer: 'MySkill Short Class',
        year: '2025',
        badgeGradient: 'from-purple-600 to-pink-600',
        url: '/certificates/myskill-ai-for-productivity-2025.webp'
      }
    ]
  },
  {
    id: 'cat_islamic',
    name: 'Al-Qur’an & Islamic Studies',
    emoji: '🟩',
    colorClass: 'border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400',
    logoName: 'salman',
    descriptionID: 'Dokumen capaian Al-Qur’an, ijazah, dan sanad keilmuan Islam yang terdapat dalam arsip pribadi.',
    descriptionEN: 'Qur’an achievement documents, ijazah, and Islamic scholarly certificates from the personal archive.',
    badgeGradient: 'from-emerald-500/10 via-teal-600/10 to-transparent',
    certificates: [
      {
        id: 'islamic-cert1',
        title: 'Ijazah Kitab Al-Jazariyah (Tajwid)',
        issuer: 'Ijazah & Sanad Keilmuan',
        year: '2025',
        badgeGradient: 'from-emerald-500 to-teal-600',
        url: '/certificates/ijazah-kitab-al-jazariyah-tajwid.webp'
      },
      {
        id: 'islamic-cert2',
        title: 'Syarah Al-Jazariyah',
        issuer: 'Pondok Pesantren Salman Al-Farisi',
        year: '2025',
        badgeGradient: 'from-teal-500 to-cyan-600',
        url: '/certificates/syarrah-jazari.webp'
      },
      {
        id: 'islamic-cert3',
        title: 'Sanad Kitab & Aqidah',
        issuer: 'Ijazah & Sanad Keilmuan',
        year: '2025',
        badgeGradient: 'from-green-500 to-emerald-600',
        url: '/certificates/sanad-kitab-dan-aqidah.webp'
      },
      {
        id: 'islamic-cert4',
        title: 'Sertifikat Capaian Al-Qur’an',
        issuer: 'Pondok Pesantren Islam Salman Al-Farisi',
        year: '2023',
        badgeGradient: 'from-lime-500 to-emerald-600',
        url: '/certificates/capaian-al-quran.webp'
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    stackNumber: 1,
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'Svelte', color: '#FF3E00' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'Shadcn UI', color: '#ffffff' },
      { name: 'Quasar', color: '#1976D2' },
      { name: 'Redux', color: '#764ABC' },
      { name: 'Framer Motion', color: '#E10098' }
    ]
  },
  {
    title: 'Backend',
    stackNumber: 2,
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#ffffff' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Go', color: '#00ADD8' },
      { name: 'Laravel', color: '#FF2E21' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'tRPC', color: '#3975C6' },
      { name: 'GraphQL', color: '#E10098' }
    ]
  },
  {
    title: 'Database & ORM',
    stackNumber: 3,
    skills: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'MariaDB', color: '#003545' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'SQLite', color: '#003B57' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Drizzle ORM', color: '#C5F11C' },
      { name: 'Prisma', color: '#2D3748' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'SurrealDB', color: '#FF00A0' },
      { name: 'TypeORM', color: '#E53E3E' },
      { name: 'Redis', color: '#DC382D' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    stackNumber: 4,
    skills: [
      { name: 'OpenAI', color: '#412991' },
      { name: 'Hugging Face', color: '#FFD21E' },
      { name: 'TensorFlow', color: '#FF6F00' },
      { name: 'PyTorch', color: '#EE4C2C' },
      { name: 'Python', color: '#3776AB' },
      { name: 'ChatGPT', color: '#10A37F' },
      { name: 'Claude Code', color: '#D97706' },
      { name: 'Codex', color: '#000000' },
      { name: 'Kimi', color: '#4F46E5' },
      { name: 'Kiro', color: '#EC4899' },
      { name: 'Antigravity', color: '#2563EB' }
    ]
  },
  {
    title: 'Tools & DevOps',
    stackNumber: 5,
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#ffffff' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Kubernetes', color: '#326CE5' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Vercel', color: '#ffffff' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'Turborepo', color: '#EF4444' },
      { name: 'Postman', color: '#FF6C37' },
      { name: 'Bun', color: '#FBF0E9' },
      { name: 'pnpm', color: '#F69220' },
      { name: 'Yarn', color: '#2C8EBB' },
      { name: 'Rust', color: '#DEA584' }
    ]
  },
  {
    title: 'Desain',
    stackNumber: 6,
    skills: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Framer Motion', color: '#E10098' },
      { name: 'Google Stitch', color: '#4285F4' },
      { name: 'Sketch', color: '#FDB300' },
      { name: 'Canva', color: '#00C4CC' },
      { name: 'Penpot', color: '#000000' },
      { name: 'Blender', color: '#E87D0D' }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/salmansegf', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/salman-fidinillah', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/salmansegf', icon: 'instagram' },
  { name: 'Email', url: 'mailto:salmansegaf52@gmail.com', icon: 'mail' }
];
