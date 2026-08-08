import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'membangun-portfolio-fullstack-modern-nextjs-tailwind',
    titleID: 'Membangun Portfolio Fullstack Modern dengan Next.js dan Tailwind CSS',
    titleEN: 'Building a Modern Fullstack Portfolio with Next.js and Tailwind CSS',
    summaryID: 'Bagaimana saya membangun website portfolio berkinerja tinggi, responsif, dan terstruktur menggunakan teknologi modern untuk mendokumentasikan perjalanan belajar saya.',
    summaryEN: 'How I built a high-performance, responsive, and well-structured portfolio website using modern technologies to document my learning journey.',
    category: 'Web Development',
    date: '2026-02-18',
    readTimeID: '8 Menit Membaca',
    readTimeEN: '8 Min Read',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['NextJS', 'React', 'TypeScript', 'TailwindCSS'],
    metaTitleID: 'Membangun Portfolio Fullstack Modern dengan Next.js dan Tailwind CSS | Salman Portfolio',
    metaTitleEN: 'Building a Modern Fullstack Portfolio with Next.js and Tailwind CSS | Salman Portfolio',
    metaDescriptionID: 'Pelajari proses di balik layar pembuatan portfolio modern saya menggunakan Next.js, TypeScript, dan Tailwind CSS.',
    metaDescriptionEN: 'Learn the behind-the-scenes process of building my modern portfolio using Next.js, TypeScript, and Tailwind CSS.',
    author: {
      name: 'Salman Fidinillah',
      avatar: '/images/salman-fidinillah-profile.webp',
      role: 'Fullstack Developer'
    },
    contentID: `### Awal Mula Membangun Portfolio

Sebagai seseorang yang sedang menekuni dunia Fullstack Development, saya menyadari bahwa kemampuan teknis saja tidak cukup untuk menunjukkan kualitas diri kepada recruiter maupun calon klien. Saya membutuhkan sebuah media yang mampu memperlihatkan hasil belajar, proyek yang telah dikerjakan, pengalaman mengikuti berbagai program teknologi, serta perjalanan saya dalam mengembangkan kemampuan sebagai developer.

Dari situlah ide untuk membangun portfolio pribadi muncul. Saya tidak ingin sekadar membuat website yang berisi biodata dan daftar proyek. Saya ingin menciptakan sebuah website yang mampu mencerminkan bagaimana saya membangun aplikasi modern, memperhatikan pengalaman pengguna, serta menerapkan praktik pengembangan perangkat lunak yang baik.

Saya memilih menggunakan Next.js, React, TypeScript, dan Tailwind CSS sebagai teknologi utama karena kombinasi tersebut banyak digunakan dalam pengembangan aplikasi web modern.

### Menentukan Konsep Desain

Sebelum mulai menulis kode, saya terlebih dahulu membuat gambaran mengenai tampilan yang ingin saya bangun.

Saya memilih konsep dark mode dengan kombinasi warna biru dan ungu yang memberikan kesan modern, profesional, dan futuristik. Selain itu saya menambahkan elemen grid background, animasi ringan, efek glow, serta transisi yang halus agar website terasa lebih hidup namun tetap nyaman digunakan.

Saya juga berusaha menjaga konsistensi desain di setiap halaman agar pengguna merasa sedang menggunakan satu produk yang utuh, bukan sekadar kumpulan halaman yang berbeda.

### Struktur yang Mudah Dikembangkan

Sejak awal saya memutuskan untuk tidak menulis seluruh kode dalam satu file. Saya membagi aplikasi menjadi berbagai komponen kecil seperti Navbar, Hero Section, Project Card, Experience Card, Certificate Card, Footer, hingga berbagai komponen pendukung lainnya.

Dengan pendekatan ini proses pengembangan menjadi jauh lebih mudah. Ketika saya ingin mengubah satu bagian, saya tidak perlu mengubah keseluruhan halaman.

Selain itu saya juga membuat data proyek, pengalaman, sertifikat, serta blog dalam bentuk array sehingga seluruh konten dapat dikelola dari satu tempat tanpa harus mengubah tampilan antarmuka.

### Pentingnya Responsive Design

Sebagian besar pengguna saat ini mengakses website melalui smartphone. Oleh karena itu saya memastikan seluruh halaman tetap nyaman digunakan pada berbagai ukuran layar.

Beberapa penyesuaian yang saya lakukan antara lain mengubah navbar menjadi hamburger menu pada perangkat mobile, mengatur ulang tata letak beberapa section, memperbesar area sentuh tombol, serta mengoptimalkan ukuran gambar agar tetap ringan ketika dibuka menggunakan koneksi internet yang terbatas.

Bagi saya, responsive design bukan hanya soal tampilan, tetapi juga bentuk penghargaan terhadap pengalaman pengguna.

### Memanfaatkan Artificial Intelligence

Dalam proses pembangunan portfolio ini saya juga mulai memanfaatkan berbagai tools berbasis Artificial Intelligence.

AI saya gunakan sebagai partner belajar untuk berdiskusi mengenai arsitektur aplikasi, mempercepat eksplorasi ide desain, membantu memahami error, hingga memberikan alternatif implementasi suatu fitur.

Namun saya tetap berusaha memahami setiap solusi yang diberikan. Tujuan utama saya bukan hanya menghasilkan website yang selesai, tetapi juga meningkatkan pemahaman terhadap teknologi yang saya gunakan.

### Penutup

Portfolio ini masih akan terus berkembang seiring bertambahnya pengalaman belajar, proyek, serta berbagai sertifikat yang saya peroleh. Saya berharap website ini dapat menjadi dokumentasi perjalanan saya sebagai seorang Fullstack Developer sekaligus menjadi motivasi untuk terus belajar dan berkembang di dunia teknologi.`,
    contentEN: `### The Inception of Building a Portfolio

As someone currently diving deep into the world of Fullstack Development, I realize that technical skills alone are not enough to showcase my quality to recruiters or potential clients. I need a medium that can clearly demonstrate my learning outcomes, the projects I have crafted, my experiences participating in various tech programs, and my overall evolution as a developer.

From that realization, the idea of building a personal portfolio was born. I did not want to just create a plain website showing a bio and a list of projects. I wanted to design a website that reflects how I build modern applications, pay attention to user experience, and apply good software development practices.

I chose to use Next.js, React, TypeScript, and Tailwind CSS as the primary tech stack because this combination is widely adopted in developing modern web applications.

### Determining the Design Concept

Before writing any line of code, I first conceptualized the overall design aesthetic.

I decided on a dark mode concept with a combination of blue and purple accents, which gives a modern, professional, and futuristic vibe. Additionally, I added subtle grid backgrounds, light animations, glow effects, and smooth transitions to make the website feel interactive and alive while staying clean and comfortable to navigate.

I also aimed to maintain design consistency across all pages, ensuring users feel like they are interacting with a single, cohesive digital product rather than disconnected pages.

### Scalable and Maintainable Structure

From the very beginning, I decided against writing all the code inside a single monolithic file. I structured the application by dividing it into small, reusable components like Navbar, Hero Section, Project Card, Experience Card, Certificate Card, Footer, and other supporting elements.

With this modular approach, development became significantly easier. Whenever I need to modify a specific section, I only need to touch that component without worrying about breaking the entire page.

Furthermore, I organized the projects, work experiences, certifications, and blog posts into structured arrays, enabling seamless content management in one centralized location.

### The Power of Responsive Design

Since the majority of web users access sites via mobile devices, I made sure that every page scales beautifully across different screen dimensions.

Some optimizations I made include collapsing the desktop navigation into a responsive hamburger menu on smaller screens, rearranging multi-column layouts into stackable elements, scaling touch targets for easier tapping, and compressing imagery to load efficiently even on limited mobile data connections.

To me, responsive design is not just a layout adjustment; it is a fundamental sign of respect for the user experience.

### Leveraging Artificial Intelligence

During the building process of this portfolio, I also began leveraging various Artificial Intelligence tools as a valuable learning companion.

I used AI to brainstorm application architecture, speed up design explorations, debug cryptic error messages, and review alternative feature implementations.

However, I always make sure to thoroughly comprehend every suggestion provided. My ultimate goal is not just to deliver a finished website, but to elevate my mastery over the technologies I utilize.

### Conclusion

This portfolio is a living project that will continue to grow as I gain more knowledge, deliver more projects, and acquire new certifications. I hope this website serves as a great chronicle of my journey as a Fullstack Developer and inspires me to keep learning, adapting, and growing in the technology space.`
  },
  {
    slug: 'pelajaran-berharga-microsoft-elevate-ai-minicamp-dicoding',
    titleID: 'Pelajaran Berharga Mengikuti Microsoft Elevate dan AI Mini Camp Dicoding',
    titleEN: 'Valuable Lessons from Microsoft Elevate and Dicoding AI Mini Camp',
    summaryID: 'Mengulas pengalaman belajar kecerdasan buatan secara terstruktur, memahami esensi Prompt Engineering, dan memposisikan AI sebagai rekan kolaborasi yang andal.',
    summaryEN: 'Reviewing the experience of structured AI learning, understanding the essence of Prompt Engineering, and positioning AI as an effective collaborative partner.',
    category: 'Artificial Intelligence',
    date: '2026-04-27',
    readTimeID: '9 Menit Membaca',
    readTimeEN: '9 Min Read',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Dicoding', 'MicrosoftElevate', 'PromptEngineering', 'GenerativeAI'],
    metaTitleID: 'Pelajaran Berharga Mengikuti Microsoft Elevate dan AI Mini Camp Dicoding | Salman Portfolio',
    metaTitleEN: 'Valuable Lessons from Microsoft Elevate and Dicoding AI Mini Camp | Salman Portfolio',
    metaDescriptionID: 'Cerita perjalanan saya belajar kecerdasan buatan terstruktur melalui program Microsoft Elevate dan AI Mini Camp di Dicoding.',
    metaDescriptionEN: 'The story of my structured AI learning journey through Microsoft Elevate and AI Mini Camp programs by Dicoding.',
    author: {
      name: 'Salman Fidinillah',
      avatar: '/images/salman-fidinillah-profile.webp',
      role: 'Fullstack Developer'
    },
    contentID: `### Belajar AI Secara Terstruktur

Tahun 2026 menjadi salah satu periode yang paling berharga dalam perjalanan belajar saya. Saya berkesempatan mengikuti Microsoft Elevate Training Center serta AI Mini Camp yang diselenggarakan oleh Dicoding.

Melalui kedua program tersebut saya mulai memahami bahwa Artificial Intelligence bukan hanya tentang membuat chatbot atau menghasilkan gambar. AI merupakan bidang yang sangat luas dan memiliki banyak penerapan dalam kehidupan sehari-hari maupun dunia industri.

Saya mempelajari berbagai konsep mulai dari dasar-dasar AI, Generative AI, Prompt Engineering, etika penggunaan AI, hingga bagaimana AI dapat diintegrasikan ke dalam proses pengembangan perangkat lunak modern.

### Tidak Hanya Belajar Teori

Salah satu hal yang paling saya sukai dari kedua program tersebut adalah pendekatan pembelajarannya.

Saya tidak hanya membaca materi, tetapi juga mengerjakan latihan, studi kasus, mini project, serta berdiskusi dengan peserta lain mengenai berbagai solusi yang mungkin digunakan untuk menyelesaikan sebuah permasalahan.

Pendekatan tersebut membuat proses belajar terasa jauh lebih menarik dibandingkan hanya membaca dokumentasi.

### Mengenal Prompt Engineering

Salah satu materi yang paling menarik bagi saya adalah Prompt Engineering.

Saya mulai memahami bahwa kualitas hasil AI sangat bergantung pada bagaimana kita memberikan instruksi. Dari sini saya belajar membuat prompt yang lebih jelas, terstruktur, serta mampu menghasilkan output yang sesuai dengan kebutuhan.

Kemampuan ini ternyata sangat membantu ketika saya mulai membangun berbagai proyek menggunakan bantuan AI.

### AI Sebagai Partner Belajar

Saya percaya bahwa AI bukan pengganti developer, melainkan alat bantu yang dapat mempercepat proses belajar dan pengembangan.

Saya menggunakan AI untuk berdiskusi mengenai konsep pemrograman, memperbaiki bug, mengevaluasi struktur kode, hingga mencari inspirasi desain antarmuka.

Namun saya tetap memastikan setiap solusi yang saya gunakan benar-benar saya pahami agar kemampuan saya terus berkembang.

### Penutup

Mengikuti Microsoft Elevate dan AI Mini Camp memberikan pengalaman belajar yang sangat berharga bagi saya.

Saya memperoleh pengetahuan teknis, cara berpikir yang lebih sistematis, serta motivasi untuk terus mengembangkan kemampuan di bidang Artificial Intelligence dan Software Development.`,
    contentEN: `### Structured AI Learning Journey

The year 2026 became one of the most rewarding chapters in my learning journey. I had the privilege of participating in the Microsoft Elevate Training Center and the AI Mini Camp organized by Dicoding.

Through both of these intensive programs, I began to realize that Artificial Intelligence is far more than just constructing chatbots or generating synthetic images. AI is an incredibly vast discipline with massive applicability in everyday routines and global industries alike.

I explored a wide array of concepts starting from the fundamentals of AI, Generative AI, Prompt Engineering, ethics of AI integration, to how machine intelligence can be integrated seamlessly into modern software development workflows.

### Hands-on Learning over Mere Theory

One aspect I enjoyed most about both training programs was the highly hands-on approach.

Instead of just passively absorbing articles, we actively solved practical assignments, dove into challenging case studies, built miniature projects, and brainstormed with peers regarding optimal configurations to resolve real-world problems.

This interactive pedagogy made the educational experience much more engaging and effective compared to reading static documentation.

### The Craft of Prompt Engineering

One of the most eye-opening subjects for me was Prompt Engineering.

I learned that the quality of AI-generated responses is strictly determined by how we structure our inputs and context. From this, I practiced building highly clear, contextual, and structured prompts that yield predictable and reliable outcomes.

This skill has proven extremely helpful in boosting my daily productivity and assisting me in coding complex components.

### AI as a Co-Pilot, Not a Replacement

I firmly believe that AI is not a developer replacement, but rather an incredibly powerful co-pilot that accelerates coding and thinking.

I frequently consult AI to discuss sophisticated architectural patterns, decipher cryptic bugs, audit my code efficiency, and gather UI design inspirations.

However, I always make sure to critically analyze and understand every suggestion, ensuring my personal skills grow continuously.

### Conclusion

Taking part in Microsoft Elevate and the Dicoding AI Mini Camp has provided me with invaluable experiences.

I walked away with strong technical insights, a more systematic thinking process, and massive motivation to keep refining my capabilities in Artificial Intelligence and Software Engineering.`
  },
  {
    slug: 'pengalaman-hackathon-ai-kolaborasi-sangat-penting',
    titleID: 'Pengalaman Mengikuti Hackathon AI dan Mengapa Kolaborasi Sangat Penting',
    titleEN: 'My AI Hackathon Experience and Why Collaboration is Critical',
    summaryID: 'Bagaimana berkompetisi di AI Impact Challenge melatih kemampuan bekerja di bawah tekanan, berkomunikasi secara asertif, dan mendesain solusi bernilai guna.',
    summaryEN: 'How competing in the AI Impact Challenge taught me to work under pressure, communicate assertively, and design valuable solutions.',
    category: 'Hackathon & Experience',
    date: '2026-06-12',
    readTimeID: '10 Menit Membaca',
    readTimeEN: '10 Min Read',
    thumbnail: '/images/salman-fidinillah-developer-blog-cover.webp',
    tags: ['Hackathon', 'Collaboration', 'ProductDevelopment', 'Teamwork', 'AIImpact'],
    metaTitleID: 'Pengalaman Mengikuti Hackathon AI dan Mengapa Kolaborasi Sangat Penting | Salman Portfolio',
    metaTitleEN: 'My AI Hackathon Experience and Why Collaboration is Critical | Salman Portfolio',
    metaDescriptionID: 'Refleksi pengalaman saya mengikuti AI Impact Challenge Hackathon, belajar kolaborasi tim, dan memanajemen produk digital dengan cepat.',
    metaDescriptionEN: 'Reflections on my experience in the AI Impact Challenge Hackathon, learning teamwork, and rapid digital product development.',
    author: {
      name: 'Salman Fidinillah',
      avatar: '/images/salman-fidinillah-profile.webp',
      role: 'Fullstack Developer'
    },
    contentID: `### Keluar dari Zona Nyaman

Mengikuti hackathon merupakan pengalaman yang sangat berbeda dibandingkan belajar secara mandiri.

Dalam waktu yang terbatas saya harus memahami permasalahan, menyusun ide solusi, membangun prototype, memperbaiki bug, hingga mempresentasikan hasil yang telah dibuat.

Semua proses tersebut harus dilakukan dengan cepat namun tetap memperhatikan kualitas aplikasi.

### AI Impact Challenge

Melalui AI Impact Challenge Hackathon saya belajar bahwa membangun solusi bukan hanya soal kemampuan menulis kode.

Kami harus memahami kebutuhan pengguna, menentukan prioritas fitur, mengelola waktu, serta memastikan seluruh anggota tim memiliki tujuan yang sama.

Pengalaman ini memberikan gambaran nyata mengenai bagaimana sebuah produk digital dikembangkan dalam dunia kerja.

### Pentingnya Komunikasi

Saya juga belajar bahwa komunikasi merupakan salah satu kemampuan yang sangat penting.

Ketika bekerja dalam tim, kemampuan menjelaskan ide, menerima masukan, serta berdiskusi mengenai solusi sering kali lebih menentukan dibandingkan kemampuan teknis semata.

Hackathon mengajarkan saya bahwa keberhasilan sebuah tim berasal dari kolaborasi yang baik.

### Menghadapi Tekanan

Deadline yang singkat membuat saya belajar mengambil keputusan dengan cepat.

Saya mulai memahami kapan harus mengejar kesempurnaan dan kapan harus fokus menyelesaikan fitur yang benar-benar penting.

Pengalaman tersebut sangat membantu ketika saya mengerjakan berbagai proyek pribadi setelah hackathon selesai.

### Penutup

Hackathon bukan hanya kompetisi, tetapi juga tempat belajar yang luar biasa.

Saya memperoleh banyak pengalaman mengenai kerja sama tim, manajemen waktu, komunikasi, hingga penyelesaian masalah secara cepat.

Ke depan saya berharap dapat mengikuti lebih banyak kompetisi teknologi agar kemampuan saya sebagai Fullstack Developer terus berkembang.`,
    contentEN: `### Stepping Out of the Comfort Zone

Participating in a hackathon is an entirely different ball game compared to self-paced individual learning.

Within a very narrow timeframe, my team and I had to break down a complex problem, brainstorm a viable solution, build a working prototype, resolve blocking bugs, and present our final pitch to the judges.

This whole cycle requires high agility and velocity while maintaining solid code quality and design standards.

### AI Impact Challenge

Through the AI Impact Challenge Hackathon, I learned that delivering a solution is not solely about writing elegant algorithms.

We had to empathize with actual user needs, prioritize features strategically, manage tight schedules, and ensure all team members were completely aligned on the vision.

This high-intensity environment gave me a realistic taste of how digital products are built in highly competitive tech teams.

### The Critical Role of Communication

I also learned that communication is arguably one of the most vital engineering skills.

When working inside a multidisciplinary team, the ability to clearly articulate ideas, receive constructive feedback, and debate technical trade-offs respectfully plays a far more significant role in success than raw technical prowess alone.

The hackathon proved that team triumph lies in outstanding collaboration.

### Thriving Under High Pressure

The extremely tight deadlines trained my ability to make decisions swiftly.

I learned to distinguish between chasing perfection and focusing on delivering core value first (the Minimal Viable Product).

This mental shift has greatly aided my personal project planning, making my development workflow far more practical and structured.

### Conclusion

A hackathon is not merely a contest; it is a phenomenal learning ecosystem.

I returned home with rich insights into teamwork, project management, assertiveness, and rapid problem-solving.

I look forward to competing in more hackathons to continue stretching my capabilities as a versatile Fullstack Developer.`
  }
];
