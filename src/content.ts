
import type { Content, Language } from './types';

// ===================================================================================
// KONFIGURASI ASET & HELPER GALERI
// ===================================================================================

// Helper untuk generate URL galeri secara otomatis
// Struktur: assets/about/foto/fotoXX.jpg
const galleryBaseUrl = 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/about/foto/';
const galleryImageCount = 16; // Jumlah foto saat ini (bisa diubah maksimal 20 nanti)

const galleryImages = Array.from({ length: galleryImageCount }, (_, i) => {
  // Menghasilkan angka dengan padding 0 (contoh: 1 -> 01, 10 -> 10)
  const num = String(i + 1).padStart(2, '0');
  // Menambahkan ?v=1 untuk cache busting agar update gambar di GitHub terbaca cepat
  return `${galleryBaseUrl}foto${num}.jpg?v=1`;
});


const contentData: Record<Language, Content> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      products: 'Produk',
      blog: 'Blog',
      contact: 'Kontak',
    },
    hero: {
      seo: {
        title: 'KAMI SPICES - Distributor Rempah Premium Khas Nusantara',
        description: 'Temukan esensi kekayaan Nusantara. KAMI SPICES menghadirkan rempah-rempah premium Indonesia berkualitas ekspor ke panggung dunia. Jelajahi produk kami.',
      },
      title: 'Esensi Kekayaan Nusantara',
      subtitle: 'Menghadirkan rempah-rempah premium Indonesia ke panggung dunia.',
      tagline: 'Warisan Aroma Rempah Khas Nusantara dan kemewahan rasa.',
      cta: 'Jelajahi Produk Kami',
      ctaContact: 'Hubungi Kami',
    },
    productsPage: {
      seo: {
        title: 'Katalog Produk Rempah Premium - KAMI SPICES',
        description: 'Jelajahi katalog lengkap rempah-rempah premium kami, dari cengkeh Maluku hingga lada Muntok. Kualitas terbaik untuk kebutuhan kuliner dan industri Anda.',
      },
      title: 'Katalog Produk Premium',
      description: 'Temukan rempah-rempah terbaik dari kepulauan Indonesia, dipilih dengan cermat untuk kualitas dan rasa yang tak tertandingi.',
      searchPlaceholder: 'Cari rempah...',
      filterAll: 'Semua Kategori',
      viewDetails: 'Lihat Detail',
      contactUs: 'Hubungi Kami',
    },
    blogPage: {
        seo: {
            title: 'Blog & Wawasan Dunia Rempah - KAMI SPICES',
            description: 'Baca artikel terbaru, resep, dan wawasan mendalam dari dunia rempah-rempah Indonesia. Jelajahi cerita di balik setiap aroma dan rasa.',
        },
        title: 'Wawasan dari Dunia Rempah',
        description: 'Jelajahi cerita, resep, dan tradisi di balik rempah-rempah kami yang berharga.',
        searchPlaceholder: 'Cari artikel...',
        filterCategoryAll: 'Semua Kategori',
        filterTagAll: 'Semua Tag',
    },
    aboutPage: {
        seo: {
            title: 'Tentang Kami - Visi & Misi KAMI SPICES',
            description: 'Kenali cerita di balik KAMI SPICES. Visi kami adalah menjadi tolok ukur kualitas rempah mewah Indonesia, menjalin kemitraan yang adil dengan petani lokal.',
        },
        section1: {
            title: "Galeri Rempah Pilihan",
            p1: "Selamat datang di KAMI SPICES, sebuah galeri di mana aroma dan rasa terbaik Indonesia dikurasi secara ahli. Perjalanan kami adalah sebuah pencarian tanpa henti akan kesempurnaan. Dari tanah subur vulkanik, kami menyeleksi rempah-rempah dengan karakter unik dan potensi rasa yang luar biasa.",
            p2: "Kami bukan sekadar perusahaan, kami adalah kurator pengalaman rasa, membawa kemewahan otentik dari warisan agung Indonesia untuk Anda. Di KAMI SPICES, setiap produk adalah cerminan dari janji kami akan keunggulan.",
            listTitle: "Filosofi kami bertumpu pada tiga pilar utama:",
            listItem1: "Integritas dalam Setiap Butir: Dari benih hingga tiba di tangan Anda, setiap proses kami lalui dengan standar tertinggi, memastikan kemurnian yang tak tertandingi.",
            listItem2: "Kualitas Tanpa Kompromi: Kami mendedikasikan diri untuk memilih hanya hasil panen terbaik, yang diproses dengan metode warisan untuk mengunci kekayaan rasa dan aroma.",
            listItem3: "Penghormatan terhadap Alam dan Manusia: Kami membangun kemitraan yang adil dengan para petani lokal, menjaga kelestarian alam, dan merayakan komunitas yang menjadi tulang punggung warisan ini.",
            image: "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/about/about.png?v=1"
        },
        section2: {
            visionTitle: "Visi Kami",
            visionText: "Menjadi tolok ukur kemewahan dan kualitas rempah di Indonesia, serta melestarikan dan mengangkat warisan cita rasa Nusantara ke panggung dunia dan menginspirasi dunia kuliner dengan warisan terbaik dari tanah air.",
            missionTitle: "Misi Kami",
            missions: [
                { icon: "award", title: "Menghadirkan Kualitas Terbaik", text: "Secara konsisten menyeleksi dan mempersembahkan hanya rempah-rempah dengan kualitas tertinggi dari sumber terbaik di seluruh kepulauan Indonesia." },
                { icon: "seedling", title: "Menjaga Kemurnian dan Tradisi", text: "Menggabungkan kearifan metode pengolahan tradisional dengan standar modern yang ketat untuk mengunci kemurnian aroma dan cita rasa autentik." },
                { icon: "handshake", title: "Membangun Kemitraan Berintegritas", text: "Menjalin hubungan yang adil, berkelanjutan, dan saling menghormati dengan para petani lokal sebagai mitra utama kami." },
                { icon: "star", title: "Memberikan Pengalaman Eksklusif", text: "Menciptakan pengalaman yang tak terlupakan bagi setiap pelanggan, dari kemasan yang mewah hingga pelayanan yang personal." }
            ]
        },
        gallerySection: {
            title: "Galeri Foto KAMI SPICES",
            images: galleryImages
        },
        section3: {
            title: "Mengapa Memilih Kami?",
            subtitle: "Kami percaya kualitas terbaik lahir dari ketulusan dan dedikasi dalam setiap proses.",
            pillars: [
                { icon: "gem", title: "Kualitas Premium", text: "Kami hanya memilih bahan terbaik yang diproses dengan standar tinggi untuk menjaga rasa dan aroma alami." },
                { icon: "globe", title: "Asli dari Indonesia", text: "Sumber kami berasal langsung dari petani lokal di berbagai daerah nusantara, mendukung produk lokal dan keberlanjutan." },
                { icon: "shield-check", title: "Bersertifikat & Terjamin", text: "Produk kami telah melalui uji mutu dan memiliki sertifikasi halal serta standar internasional." },
                { icon: "truck", title: "Pengiriman Cepat & Aman", text: "Didukung sistem distribusi efisien dan kemasan modern agar produk tiba dengan kualitas sempurna ke seluruh dunia." }
            ]
        },
        section4: {
            title: "Apa Kata Mereka",
            testimonials: [
                { name: "Andrian Ishak", position: "Executive Chef, Namaaz Dining", quote: "Kualitas rempah dari KAMI SPICES tak tertandingi. Konsistensi aroma dan rasanya mengangkat setiap hidangan yang kami sajikan ke level berikutnya. Mereka adalah mitra yang sangat kami andalkan.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=60" },
                { name: "Isabelle Dubois", position: "Purchasing Manager, European Gourmet Foods", quote: "Sebagai importir, kami membutuhkan keandalan dan kualitas premium. KAMI SPICES tidak pernah mengecewakan. Proses sertifikasi dan pengiriman mereka sangat profesional.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60" },
                { name: "Kenji Tanaka", position: "Founder, Spice Artisan Tokyo", quote: "Saya telah mencari pala dan cengkeh kualitas terbaik dari Indonesia selama bertahun-tahun. Pencarian saya berakhir di KAMI SPICES. Produk mereka benar-benar autentik.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=60" },
            ]
        },
        section5: {
            title: "Tim Kami",
            team: [
                { name: "Arya Wijaya", role: "Founder & CEO", bio: "Dengan hasrat mendalam terhadap warisan agraris Indonesia, Arya mendirikan KAMI SPICES untuk berbagi kekayaan rempah nusantara dengan dunia.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=60" },
                { name: "Siti Rahayu", role: "Head of Sourcing & Quality", bio: "Seorang ahli botani, Siti memastikan setiap rempah yang kami peroleh memenuhi standar kemurnian, aroma, dan rasa yang ketat.", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=500&q=60" },
                { name: "Budi Santoso", role: "Director of Global Partnerships", bio: "Budi menjembatani hubungan antara kekayaan alam Indonesia dan pasar global, memastikan kemitraan yang adil dan distribusi yang efisien.", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=500&q=60" }
            ]
        }
    },
    contactPage: {
        seo: {
            title: 'Hubungi Kami - Kemitraan & Informasi Produk KAMI SPICES',
            description: 'Hubungi tim ahli kami untuk informasi produk, pemesanan B2B, atau kemitraan. Kami siap membantu Anda memulai perjalanan rasa bersama KAMI SPICES.',
        },
        title: "Hubungi Tim Ahli Kami",
        intro: "Di KAMI SPICES, setiap pertanyaan adalah awal dari sebuah kemitraan yang berharga. Tim kami yang berdedikasi siap memberikan informasi mendalam, solusi yang disesuaikan, dan layanan yang melampaui ekspektasi. Hubungi kami untuk memulai perjalanan rasa Anda.",
        contactInfo: [
            { icon: "map-pin", title: "Alamat Kantor", text: "Menara Cakrawala, Lt.10\nJl. M.H. Thamrin No.9\nJakarta 10340, Indonesia", link: "https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala,+Jl.+MH.+Thamrin+No.9" },
            { icon: "mail", title: "Alamat Email", text: "info@kamispices.co.id", subtext: "Kami merespon dalam 24 jam", link: "mailto:info@kamispices.co.id?subject=Permintaan Informasi Produk dari Website KAMI SPICES" },
            { icon: "phone", title: "Telepon / WhatsApp", text: "+62 812 8629 6432", subtext: "Hubungi untuk respons cepat", link: "https://api.whatsapp.com/send?phone=6281286296432&text=Halo%20KAMI%20SPICES" },
            { icon: "clock", title: "Jam Operasional", text: "Senin – Jumat: 08.00 – 17.00\nSabtu: 08.00 – 12.00", subtext: "Minggu: Tutup", link: "#" }
        ],
        socialMediaTitle: "Terhubung Dengan Kami",
        socialMediaLinks: [
            { platform: 'instagram', url: 'https://instagram.com/kamispices.indonesia' },
            { platform: 'tiktok', url: 'https://tiktok.com/@kamispices.indonesia' },
            { platform: 'twitter', url: 'https://x.com/kamispices.indonesia' },
            { platform: 'facebook', url: 'https://facebook.com/kamispices.indonesia' }
        ],
        faqTitle: "Pertanyaan yang Sering Diajukan",
        faqs: [
            { question: "Apa yang membedakan KAMI SPICES dari pemasok lain?", answer: "Kualitas tanpa kompromi. Kami tidak hanya menjual rempah, kami mengkurasi pengalaman. Setiap produk melalui proses seleksi ketat oleh ahli kami, dari pemilihan lahan tanam hingga metode pengolahan yang menjaga keaslian rasa dan aroma." },
            { question: "Bagaimana cara memesan dalam jumlah besar (B2B)?", answer: "Silakan hubungi kami melalui email di info@kamispices.co.id atau WhatsApp. Tim kemitraan global kami akan segera membantu Anda dengan katalog B2B, harga khusus, dan opsi pengiriman internasional." },
            { question: "Apakah produk KAMI SPICES memiliki sertifikasi?", answer: "Tentu. Semua produk kami memiliki sertifikasi Halal dan telah melewati standar keamanan pangan internasional. Kami dapat menyediakan dokumen sertifikasi yang relevan sesuai permintaan Anda." },
            { question: "Apakah saya bisa meminta sampel produk?", answer: "Ya, kami menyediakan sampel untuk klien B2B potensial. Hubungi tim kami untuk mendiskusikan kebutuhan Anda, dan kami akan mengatur pengiriman sampel produk yang Anda minati." },
            { question: "Dari mana asal rempah-rempah KAMI SPICES?", answer: "Kami bekerja sama langsung dengan petani dan komunitas di daerah-daerah yang terkenal sebagai penghasil rempah terbaik di Indonesia, seperti Maluku untuk cengkeh dan pala, Sumatera untuk kayu manis, dan Bangka untuk lada putih. Kami percaya pada keterlacakan penuh dan transparansi sumber." },
            { question: "Apakah KAMI SPICES melayani pengiriman internasional?", answer: "Ya, kami berspesialisasi dalam logistik global untuk klien B2B kami. Tim kami menangani semua dokumentasi ekspor yang diperlukan dan bekerja sama dengan mitra pengiriman terpercaya untuk memastikan pesanan Anda tiba dengan aman dan tepat waktu, di mana pun di dunia." },
            { question: "Apakah semua produk Anda organik?", answer: "Kami memprioritaskan praktik pertanian yang berkelanjutan dan alami. Meskipun beberapa produk kami, seperti Kunyit, bersertifikat organik, produk lainnya berasal dari petani kecil tradisional yang mungkin tidak memiliki sertifikasi resmi tetapi tetap mematuhi metode berkualitas tinggi dan bebas pestisida. Silakan periksa detail produk untuk sertifikasi spesifik." },
        ]
    },
    footer: {
      socialMediaLinks: [
        { platform: 'instagram', url: 'https://instagram.com/kamispices.indonesia' },
        { platform: 'tiktok', url: 'https://tiktok.com/@kamispices.indonesia' },
        { platform: 'twitter', url: 'https://x.com/kamispices.indonesia' },
        { platform: 'facebook', url: 'https://facebook.com/kamispices.indonesia' }
      ]
    },
    products: [
      { id: 1, name: 'Cengkeh', category: 'Bunga', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/cengkeh.png?v=1', 
        description: 'Dijuluki "emas cokelat" dari Maluku, Cengkeh kami dipetik dengan tangan saat kuncupnya mencapai warna merah marun yang sempurna. Proses pengeringan alami di bawah sinar matahari tropis mengunci eugenol, senyawa yang memberikan aroma manis pedas yang intens dan rasa hangat yang mendalam.\n\nSetiap kuncup adalah janji kualitas, menghadirkan kehangatan otentik pada hidangan rendang, semur, hingga secangkir teh rempah Anda. Rasakan warisan Kepulauan Rempah dalam setiap butirnya.', 
        details: ['Asal: Maluku, Indonesia', 'Tingkat Kualitas: Grade A', 'Aroma: Kuat, manis, pedas', 'Penggunaan: Masakan, minuman, obat tradisional'] },
      { id: 2, name: 'Kayu Manis', category: 'Kulit Kayu', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kayu-manis.png?v=1', 
        description: 'Dari lereng subur Kerinci di Sumatera, kami mempersembahkan Kayu Manis Cassia dengan kulit tebal yang kaya akan minyak atsiri. Aroma manis dan hangatnya yang khas adalah sentuhan sempurna untuk menyempurnakan kue, kopi, dan hidangan penutup Anda.\n\nTidak hanya untuk hidangan manis, kehangatannya yang lembut juga mampu menyeimbangkan dan memperkaya cita rasa kompleks dalam masakan gurih seperti kari dan gulai. Biarkan keajaiban kayu manis kami membangkitkan kehangatan dalam setiap sajian.', 
        details: ['Asal: Sumatera, Indonesia', 'Tingkat Kualitas: Grade AA', 'Aroma: Manis, hangat, kayu', 'Penggunaan: Kue, kopi, kari'] },
      { id: 3, name: 'Pala', category: 'Biji', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/pala.png?v=1', 
        description: 'Harta karun dari Kepulauan Banda, tempat kelahiran Pala terbaik di dunia. Biji pala utuh kami dipilih dari buah yang matang sempurna, menawarkan profil rasa yang kompleks—hangat, pedas, dengan sedikit sentuhan musky yang mewah.\n\nPecahkan bijinya dan parut segar untuk melepaskan potensi aroma sepenuhnya ke dalam saus krim, sup, atau hidangan daging Anda. Pala kami bukan sekadar bumbu, melainkan sebuah perjalanan sensorik ke jantung sejarah rempah dunia.', 
        details: ['Asal: Kepulauan Banda, Indonesia', 'Tingkat Kualitas: Grade S', 'Aroma: Pedas, musky, manis', 'Penggunaan: Saus, sup, hidangan daging'] },
      { id: 4, name: 'Lada Putih', category: 'Biji', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/lada-putih.png?v=1', 
        description: 'Dikenal dunia dengan nama Muntok White Pepper, lada putih kami berasal dari Pulau Bangka. Melalui proses perendaman dan pengupasan kulit yang teliti, kami menghasilkan lada dengan rasa yang halus namun tajam menusuk, serta aroma bersahaja yang bersih.\n\nSempurna untuk hidangan yang membutuhkan kepedasan tanpa mengubah warna, seperti saus krim, hidangan laut, dan masakan Eropa klasik. Tingkatkan kreasi kuliner Anda dengan sentuhan elegan dari lada putih premium kami.', 
        details: ['Asal: Bangka, Indonesia', 'Tingkat Kualitas: Muntok White Pepper', 'Aroma: Tajam, bersahaja', 'Penggunaan: Hidangan Eropa & Asia, saus krim'] },
      { id: 5, name: 'Lada Hitam', category: 'Biji', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/lada-hitam.png?v=1', 
        description: 'Inilah "Raja Rempah" dari tanah subur Lampung. Lada hitam kami dipetik saat buah beri mencapai tingkat kematangan yang tepat, lalu dijemur secara alami hingga kulitnya mengerut dan menghitam. Proses ini mengunci piperin, senyawa yang memberikan rasa pedas yang kuat dan aroma tajam dengan sedikit sentuhan fruity.\n\nGiling segar di atas steak, sup, atau hidangan panggang untuk melepaskan ledakan rasa yang tak tertandingi. Rasakan kekuatan dan karakter asli lada hitam terbaik Indonesia.', 
        details: ['Asal: Lampung, Indonesia', 'Tingkat Kualitas: Grade A Super', 'Aroma: Pedas, tajam, sedikit fruity', 'Penggunaan: Bumbu steak, sup, hidangan panggang'] },
      { id: 6, name: 'Kunyit', category: 'Rimpang', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kunyit.png?v=1', 
        description: 'Diambil dari rimpang pilihan dari tanah subur Jawa Tengah, Kunyit kami adalah perwujudan "emas kuning" Indonesia. Warna keemasannya yang cerah dan alami menandakan kandungan kurkumin yang tinggi, senyawa bioaktif yang terkenal akan manfaat kesehatannya yang luar biasa.\n\nAromanya yang khas, bersahaja dengan sedikit sentuhan pahit, memberikan kedalaman rasa yang tak tergantikan pada hidangan kari, soto, hingga ramuan jamu tradisional. Biarkan kemurnian kunyit kami mengubah masakan Anda menjadi sebuah mahakarya kuliner yang otentik dan menyehatkan.', 
        details: ['Asal: Jawa Tengah, Indonesia', 'Tingkat Kualitas: Organik', 'Aroma: Bersahaja, sedikit pahit', 'Penggunaan: Kari, jamu, pewarna alami'] },
      { id: 7, name: 'Jahe', category: 'Rimpang', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/jahe.png?v=1', 
        description: 'Jahe emprit pilihan dari dataran tinggi Jawa Barat, dikenal dengan rasa pedas yang kuat dan aroma yang menyegarkan. Setiap rimpang menyimpan kehangatan alami yang sempurna untuk minuman tradisional, bumbu tumis, atau sebagai sentuhan rahasia pada kue Anda.\n\nRasakan kesegaran dan kekuatan jahe asli Indonesia yang tidak hanya menghangatkan tubuh tetapi juga membangkitkan selera makan.', 
        details: ['Asal: Jawa Barat, Indonesia', 'Tingkat Kualitas: Grade 1', 'Aroma: Segar, pedas, sitrus', 'Penggunaan: Minuman hangat, bumbu tumis, kue'] },
      { id: 8, name: 'Kapulaga', category: 'Biji', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kapulaga.png?v=1', 
        description: 'Sering dijuluki "Ratu Rempah", kapulaga hijau kami dari Sumatera memiliki aroma floral dan minty yang sangat eksotis. Beberapa butir saja cukup untuk mengubah secangkir kopi hitam menjadi minuman mewah khas Timur Tengah atau memberikan sentuhan magis pada hidangan biryani dan kue-kue manis.\n\nBuka polongnya sesaat sebelum digunakan untuk melepaskan seluruh potensi aromanya. Biarkan kapulaga kami membawa Anda ke dunia rasa yang elegan dan tak terlupakan.', 
        details: ['Asal: Sumatera Utara, Indonesia', 'Tingkat Kualitas: Premium Green', 'Aroma: Complex, manis, floral', 'Penggunaan: Kopi Arab, biryani, hidangan penutup'] },
    ],
    blogPosts: [
        { 
          id: 1, 
          title: 'Perjalanan Cengkeh: Dari Maluku ke Dunia', 
          author: 'Tim KAMI SPICES', 
          date: '15 Juli 2024', 
          readingTime: '5 menit', 
          category: 'Sejarah', 
          tags: ['Sejarah', 'Rempah'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/sejarah-cengkeh.png?v=1', 
          content: 'Jelajahi sejarah menarik cengkeh, rempah berharga yang membentuk rute perdagangan global dan menempatkan Kepulauan Maluku di peta dunia. Selama berabad-abad, rempah ini lebih berharga daripada emas dan menjadi pemicu ekspedisi besar-besaran oleh bangsa Eropa.\n\nSelain nilai historisnya, cengkeh adalah jantung dari industri rokok kretek khas Indonesia, memberikan aroma dan sensasi hangat yang unik. Minyak cengkeh juga telah lama dimanfaatkan dalam pengobatan tradisional sebagai antiseptik dan pereda nyeri, terutama untuk sakit gigi, membuktikan fleksibilitasnya yang luar biasa.\n\nDi KAMI SPICES, kami memilih cengkeh dari Ternate dan Tidore, dipetik saat kuncup bunga mencapai warna merah jambu yang sempurna dan dikeringkan di bawah sinar matahari tropis. Proses ini memastikan kandungan eugenol yang tinggi, menghasilkan kualitas aroma dan rasa yang superior untuk setiap kebutuhan, dari kuliner hingga farmasi.'
        },
        { 
          id: 2, 
          title: 'Seni Memadukan Kayu Manis dalam Masakan', 
          author: 'Chef Renata', 
          date: '22 Juli 2024', 
          readingTime: '7 menit', 
          category: 'Kuliner', 
          tags: ['Kuliner', 'Tips'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/masak-kayu-manis.png?v=1', 
          content: 'Pelajari cara menggunakan kayu manis tidak hanya pada hidangan manis, tetapi juga untuk memperkaya rasa hidangan gurih seperti kari dan semur. Kehangatan khasnya dapat menyeimbangkan rasa dan menambah kedalaman yang kompleks pada berbagai masakan.\n\nTerdapat dua jenis utama kayu manis: Cassia yang lebih pedas dan umum ditemukan, serta Ceylon atau \'kayu manis sejati\' yang memiliki rasa lebih lembut dan manis. Memahami perbedaan ini adalah kunci untuk menciptakan harmoni rasa yang pas, baik dalam semur daging yang kaya maupun dalam secangkir kopi pagi yang hangat.\n\nKayu manis tidak hanya memanjakan lidah, tetapi juga dikenal memiliki berbagai manfaat kesehatan, termasuk mengatur gula darah dan sebagai anti-inflamasi. Kami menghadirkan kayu manis Cassia dari Kerinci, Sumatera, yang terkenal dengan kulitnya yang tebal dan kandungan minyak atsiri yang kaya, menjanjikan kehangatan dalam setiap serpihannya.'
        },
        { 
          id: 3, 
          title: 'Rahasia Lada Hitam: Raja Rempah-Rempah', 
          author: 'Tim KAMI SPICES', 
          date: '28 Juli 2024', 
          readingTime: '6 menit', 
          category: 'Edukasi', 
          tags: ['Fakta', 'Rempah'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/fakta-lada-hitam.png?v=1', 
          content: 'Mengapa lada hitam begitu dihargai sepanjang sejarah hingga dijuluki "Raja Rempah"? Jawabannya terletak pada rasa pedasnya yang tajam dan kemampuannya untuk meningkatkan cita rasa hampir semua hidangan di dunia.\n\nJulukan \'Raja Rempah\' bukan tanpa alasan. Piperin, senyawa aktif dalam lada hitam, tidak hanya memberikan rasa pedas yang khas tetapi juga meningkatkan penyerapan nutrisi lain, seperti kurkumin dalam kunyit. Inilah mengapa lada hitam sering menjadi pasangan tak terpisahkan dari rempah lain dalam berbagai racikan bumbu.\n\nLada hitam Lampung dari KAMI SPICES dipanen saat buah beri masih hijau kekuningan, lalu dijemur hingga kulitnya mengerut dan menghitam. Proses alami ini mengunci ketajaman rasa dan aroma buah yang menjadi ciri khasnya, menjadikannya pilihan utama para koki untuk memberikan sentuhan akhir yang berani pada hidangan mereka.'
        },
        { 
          id: 4, 
          title: 'Kunyit: Emas Kuning Indonesia dan Manfaatnya', 
          author: 'Siti Rahayu', 
          date: '5 Agustus 2024', 
          readingTime: '5 menit', 
          category: 'Kesehatan', 
          tags: ['Kesehatan', 'Tradisi'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/manfaat-kunyit.png?v=1', 
          content: 'Dari bumbu dapur hingga ramuan penyembuh, kunyit adalah harta karun Indonesia. Pelajari lebih dalam tentang kekuatan kurkumin, senyawa aktif yang memberikan warna kuning cerah dan segudang manfaat bagi kesehatan.\n\nKurkumin adalah senyawa bioaktif yang menjadi pusat perhatian karena sifat antioksidan dan anti-inflamasinya yang kuat. Secara tradisional, kunyit digunakan dalam ramuan jamu untuk menjaga kebugaran dan kecantikan, sebuah warisan kearifan lokal yang kini diakui oleh sains modern.\n\nUntuk mendapatkan warna dan khasiat terbaik, kami memilih kunyit dari petani di Jawa Tengah yang menanamnya secara organik. Rimpang dibersihkan, diiris tipis, dikeringkan, dan digiling menjadi bubuk halus, memastikan kemurnian 100% tanpa bahan tambahan, sehingga Anda mendapatkan esensi emas kuning Indonesia seutuhnya.'
        },
        { 
          id: 5, 
          title: 'Pala vs Fuli: Mengenal Harta Karun Ganda dari Banda', 
          author: 'Tim Riset', 
          date: '12 Agustus 2024', 
          readingTime: '7 menit', 
          category: 'Edukasi', 
          tags: ['Edukasi', 'Pala'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/pala-dan-fuli.png?v=1', 
          content: 'Satu pohon, dua rempah berharga. Pahami perbedaan antara biji pala dan fuli serta cara terbaik menggunakannya dalam masakan. Meskipun berasal dari pohon yang sama, keduanya memiliki profil rasa yang sangat berbeda.\n\nBiji pala, dengan rasanya yang manis dan hangat, sangat cocok untuk hidangan krim, saus, dan kue. Di sisi lain, fuli—selaput yang menyelimuti biji—memiliki aroma yang lebih lembut dan sedikit pedas, sering digunakan dalam hidangan yang lebih ringan seperti kaldu dan olahan ikan. Menguasai keduanya akan membuka dimensi baru dalam palet rasa Anda.\n\nKepulauan Banda adalah rumah spiritual pala dan fuli, tempat pohon-pohon pala tumbuh subur di bawah naungan pohon kenari. Kami bekerja sama dengan komunitas lokal untuk melestarikan metode panen tradisional, di mana buah yang matang dipetik dengan tangan untuk memastikan hanya kualitas terbaik yang sampai ke tangan Anda.'
        },
        { 
          id: 6, 
          title: 'Kehangatan Jahe: Lebih dari Sekadar Bumbu Dapur', 
          author: 'Chef Renata', 
          date: '19 Agustus 2024', 
          readingTime: '6 menit', 
          category: 'Kesehatan', 
          tags: ['Kuliner', 'Kesehatan'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/wedang-jahe.png?v=1', 
          content: 'Jelajahi berbagai jenis jahe di Indonesia dan temukan resep minuman jahe yang dapat meningkatkan imunitas Anda. Rimpang yang sederhana ini menyimpan kekuatan luar biasa untuk menghangatkan tubuh dan menjaga kesehatan.\n\nIndonesia mengenal beberapa jenis jahe, seperti jahe gajah yang besar dan tidak terlalu pedas, jahe emprit yang kecil namun pedas menyengat, dan jahe merah yang memiliki kandungan minyak atsiri tertinggi. Setiap jenis memiliki peranannya sendiri, mulai dari bahan utama wedang jahe hingga bumbu dasar masakan tumis.\n\nJahe tidak hanya menghangatkan tubuh, tetapi juga membantu meredakan mual dan melancarkan pencernaan. Kami memilih jahe emprit dari dataran tinggi Jawa Barat, di mana udara sejuk dan tanah gembur menghasilkan rimpang dengan tingkat kepedasan dan kesegaran aroma yang optimal.'
        },
        { 
          id: 7, 
          title: 'Kapulaga: Aroma Kemewahan dalam Kopi dan Kue', 
          author: 'Tim KAMI SPICES', 
          date: '26 Agustus 2024', 
          readingTime: '5 menit', 
          category: 'Kuliner', 
          tags: ['Tips', 'Gourmet'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/kopi-kapulaga.png?v=1', 
          content: 'Tingkatkan pengalaman minum kopi dan membuat kue Anda dengan sentuhan eksotis kapulaga. Pelajari cara memilih dan menyimpannya agar aroma mewahnya tetap terjaga.\n\nSering disebut \'Ratu Rempah\', kapulaga hijau memiliki profil rasa yang kompleks—sedikit sitrus, mint, dan floral. Beberapa butir saja cukup untuk mengubah secangkir kopi hitam menjadi minuman mewah khas Timur Tengah atau memberikan sentuhan eksotis pada adonan kue mentega Anda.\n\nUntuk menjaga aromanya yang mudah menguap, kapulaga terbaik adalah yang dijual dalam bentuk polong utuh. Buka polongnya dan giling biji hitam kecil di dalamnya sesaat sebelum digunakan untuk melepaskan potensi rasa sepenuhnya. Kapulaga kami berasal dari Sumatera, dipanen dengan tangan dan dikeringkan secara hati-hati untuk menjaga keutuhan aroma dan warnanya.'
        },
        { 
          id: 8, 
          title: 'Melacak Jejak Vanili: Anggrek Beraroma dari Nusantara', 
          author: 'Arya Wijaya', 
          date: '2 September 2024', 
          readingTime: '8 menit', 
          category: 'Sejarah', 
          tags: ['Sejarah', 'Vanili'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/bunga-vanili.png?v=1', 
          content: 'Vanili adalah salah satu rempah termahal di dunia. Ikuti perjalanannya dari perkebunan di Indonesia hingga menjadi favorit global dalam dunia pastri dan parfum.\n\nProses penanaman dan pengolahan vanili sangat padat karya. Bunga anggreknya harus diserbuki secara manual, dan polongnya melalui proses pengeringan dan fermentasi yang panjang dan rumit selama berbulan-bulan. Proses inilah yang mengembangkan ratusan senyawa aromatik, menciptakan rasa vanila yang kaya dan kompleks yang tidak bisa ditiru oleh esens sintetis.\n\nKAMI SPICES menghadirkan polong vanili Planifolia dari petani di Jawa dan Bali. Polongnya panjang, montok, dan berminyak, dengan aroma manis dan sedikit sentuhan aroma kayu yang dalam. Setiap polong adalah hasil kesabaran dan dedikasi, sebuah kemewahan sejati yang siap menyempurnakan kreasi adiboga Anda.'
        }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      seo: {
        title: 'KAMI SPICES - Premium Indonesian Spice Distributor',
        description: 'Discover the essence of the archipelago. KAMI SPICES brings premium, export-quality Indonesian spices to the world stage. Explore our products.',
      },
      title: 'The Essence of the Archipelago',
      subtitle: 'Bringing premium Indonesian spices to the world stage.',
      tagline: 'A legacy of aromatic spices, the luxury of taste.',
      cta: 'Explore Our Products',
      ctaContact: 'Contact Us',
    },
    productsPage: {
      seo: {
        title: 'Premium Spice Product Catalog - KAMI SPICES',
        description: 'Explore our complete catalog of premium spices, from Maluku cloves to Muntok white pepper. The finest quality for your culinary and industrial needs.',
      },
      title: 'Premium Product Catalog',
      description: 'Discover the finest spices from the Indonesian archipelago, meticulously selected for unparalleled quality and flavor.',
      searchPlaceholder: 'Search for spices...',
      filterAll: 'All Categories',
      viewDetails: 'View Details',
      contactUs: 'Contact Us',
    },
    blogPage: {
        seo: {
            title: 'Blog & Insights from the Spice World - KAMI SPICES',
            description: 'Read the latest articles, recipes, and in-depth insights from the world of Indonesian spices. Explore the stories behind every aroma and flavor.',
        },
        title: 'Insights from the Spice World',
        description: 'Explore the stories, recipes, and traditions behind our prized spices.',
        searchPlaceholder: 'Search articles...',
        filterCategoryAll: 'All Categories',
        filterTagAll: 'All Tags',
    },
    aboutPage: {
        seo: {
            title: 'About Us - Vision & Mission of KAMI SPICES',
            description: 'Learn the story behind KAMI SPICES. Our vision is to be the benchmark for luxury Indonesian spices, fostering fair partnerships with local farmers.',
        },
        section1: {
            title: "A Curated Spice Gallery",
            p1: "Welcome to KAMI SPICES, a gallery where Indonesia's finest aromas and flavors are expertly curated. Our journey is a relentless pursuit of perfection. From the fertile volcanic soils, we select spices with unique character and extraordinary flavor potential.",
            p2: "We are not just a company; we are curators of taste experiences, bringing the authentic luxury of Indonesia's grand heritage to you. At KAMI SPICES, every product is a reflection of our promise of excellence.",
            listTitle: "Our philosophy rests on three main pillars:",
            listItem1: "Integrity in Every Grain: From the seed to your hands, every process we undertake meets the highest standards, ensuring unparalleled purity.",
            listItem2: "Uncompromising Quality: We dedicate ourselves to selecting only the finest harvests, processed with heritage methods to lock in the richness of flavor and aroma.",
            listItem3: "Respect for Nature and People: We build fair partnerships with our local farmers, preserving nature, and celebrating the communities that are the backbone of this heritage.",
            image: "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/about/about.png?v=1"
        },
        section2: {
            visionTitle: "Our Vision",
            visionText: "To be the benchmark of luxury and quality for spices in Indonesia, preserving and elevating the archipelago's flavor heritage to the world stage and inspiring the culinary world with the best from our homeland.",
            missionTitle: "Our Mission",
            missions: [
                { icon: "award", title: "Presenting the Finest Quality", text: "Consistently selecting and presenting only the highest quality spices from the best sources throughout the Indonesian archipelago." },
                { icon: "seedling", title: "Preserving Purity and Tradition", text: "Combining the wisdom of traditional processing methods with strict modern standards to lock in the authentic purity of aroma and flavor." },
                { icon: "handshake", title: "Building Partnerships with Integrity", text: "Fostering fair, sustainable, and respectful relationships with local farmers as our key partners." },
                { icon: "star", title: "Delivering an Exclusive Experience", text: "Creating an unforgettable experience for every customer, from luxurious packaging to personalized service." }
            ]
        },
        gallerySection: {
            title: "KAMI SPICES Photo Gallery",
            images: galleryImages
        },
        section3: {
            title: "Why Choose Us?",
            subtitle: "We believe the best quality is born from sincerity and dedication in every process.",
            pillars: [
                { icon: "gem", title: "Premium Quality", text: "We select only the best ingredients processed to high standards to preserve natural taste and aroma." },
                { icon: "globe", title: "Authentically Indonesian", text: "Our sources come directly from local farmers in various regions of the archipelago, supporting local products and sustainability." },
                { icon: "shield-check", title: "Certified & Guaranteed", text: "Our products have undergone quality testing and have halal certification as well as international standards." },
                { icon: "truck", title: "Fast & Secure Shipping", text: "Supported by an efficient distribution system and modern packaging to ensure products arrive in perfect quality worldwide." }
            ]
        },
        section4: {
            title: "What They Say",
            testimonials: [
                { name: "Andrian Ishak", position: "Executive Chef, Namaaz Dining", quote: "The quality of spices from KAMI SPICES is unparalleled. The consistency of their aroma and flavor elevates every dish we serve to the next level. They are a partner we deeply rely on.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=60" },
                { name: "Isabelle Dubois", position: "Purchasing Manager, European Gourmet Foods", quote: "As importers, we require reliability and premium quality. KAMI SPICES has never disappointed. Their certification and shipping processes are exceptionally professional.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=60" },
                { name: "Kenji Tanaka", position: "Founder, Spice Artisan Tokyo", quote: "I searched for the best quality Indonesian nutmeg and cloves for years. My search ended with KAMI SPICES. Their products are truly authentic.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=60" },
            ]
        },
        section5: {
            title: "Our Team",
            team: [
                { name: "Arya Wijaya", role: "Founder & CEO", bio: "With a deep passion for Indonesia's agricultural heritage, Arya founded KAMI SPICES to share the archipelago's spice wealth with the world.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=60" },
                { name: "Siti Rahayu", role: "Head of Sourcing & Quality", bio: "A botanist with decades of experience, Siti ensures every spice we procure meets our rigorous standards for purity, aroma, and flavor.", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=500&q=60" },
                { name: "Budi Santoso", role: "Director of Global Partnerships", bio: "Budi bridges the gap between Indonesia's natural treasures and the global market, ensuring fair partnerships and efficient distribution.", image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=500&q=60" }
            ]
        }
    },
    contactPage: {
        seo: {
            title: 'Contact Us - Partnerships & Product Information | KAMI SPICES',
            description: 'Contact our expert team for product information, B2B orders, or partnerships. We are ready to help you start your flavor journey with KAMI SPICES.',
        },
        title: "Contact Our Expert Team",
        intro: "At KAMI SPICES, every inquiry is the beginning of a valuable partnership. Our dedicated team is ready to provide in-depth information, tailored solutions, and service that exceeds expectations. Contact us to begin your flavor journey.",
        contactInfo: [
            { icon: "map-pin", title: "Office Address", text: "Menara Cakrawala, 10th Floor\nJl. M.H. Thamrin No.9\nJakarta 10340, Indonesia", link: "https://www.google.com/maps/search/?api=1&query=Menara+Cakrawala,+Jl.+MH.+Thamrin+No.9" },
            { icon: "mail", title: "Email Address", text: "info@kamispices.co.id", subtext: "We reply within 24 hours", link: "mailto:info@kamispices.co.id?subject=Product Inquiry from KAMI SPICES Website" },
            { icon: "phone", title: "Phone / WhatsApp", text: "+62 812 8629 6432", subtext: "Call for a quick response", link: "https://api.whatsapp.com/send?phone=6281286296432&text=Hello%20KAMI%20SPICES" },
            { icon: "clock", title: "Operating Hours", text: "Monday - Friday: 08:00 - 17:00\nSaturday: 08:00 - 12:00", subtext: "Sunday: Closed", link: "#" }
        ],
        socialMediaTitle: "Connect With Us",
        socialMediaLinks: [
            { platform: 'instagram', url: 'https://instagram.com/kamispices.indonesia' },
            { platform: 'tiktok', url: 'https://tiktok.com/@kamispices.indonesia' },
            { platform: 'twitter', url: 'https://x.com/kamispices.indonesia' },
            { platform: 'facebook', url: 'https://facebook.com/kamispices.indonesia' }
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
            { question: "What distinguishes KAMI SPICES from other suppliers?", answer: "Uncompromising quality. We don't just sell spices; we curate experiences. Every product undergoes a rigorous selection process by our experts, from choosing the farmland to processing methods that preserve authentic flavor and aroma." },
            { question: "How can I place a bulk (B2B) order?", answer: "Please contact us via email at info@kamispices.co.id or on WhatsApp. Our global partnerships team will promptly assist you with our B2B catalog, special pricing, and international shipping options." },
            { question: "Are KAMI SPICES products certified?", answer: "Absolutely. All our products are Halal certified and have passed international food safety standards. We can provide relevant certification documents upon your request." },
            { question: "Can I request product samples?", answer: "Yes, we provide samples for potential B2B clients. Contact our team to discuss your needs, and we will arrange for the shipment of samples of the products you are interested in." },
            { question: "Where do KAMI SPICES' spices originate from?", answer: "We partner directly with farmers and communities in the most renowned spice-producing regions of Indonesia, such as Maluku for cloves and nutmeg, Sumatra for cinnamon, and Bangka for white pepper. We believe in full traceability and source transparency." },
            { question: "Do you offer international shipping?", answer: "Yes, we specialize in global logistics for our B2B clients. Our team handles all necessary export documentation and works with trusted freight partners to ensure your order arrives safely and on time, anywhere in the world." },
            { question: "Are all of your products organic?", answer: "We prioritize sustainable and natural farming practices. While several of our products, like our Turmeric, are certified organic, others are sourced from traditional smallholder farms that may not have official certification but still adhere to high-quality, pesticide-free methods. Please check the product details for specific certifications." },
        ]
    },
    footer: {
      socialMediaLinks: [
        { platform: 'instagram', url: 'https://instagram.com/kamispices.indonesia' },
        { platform: 'tiktok', url: 'https://tiktok.com/@kamispices.indonesia' },
        { platform: 'twitter', url: 'https://x.com/kamispices.indonesia' },
        { platform: 'facebook', url: 'https://facebook.com/kamispices.indonesia' }
      ]
    },
    products: [
      { id: 1, name: 'Clove', category: 'Flower Bud', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/cengkeh.png?v=1', 
        description: 'Dubbed the "brown gold" of Maluku, our Cloves are hand-picked when their buds reach a perfect maroon-red hue. The natural sun-drying process under the tropical sun locks in eugenol, the compound that delivers an intense sweet-spicy aroma and a profound warming taste.\n\nEach bud is a promise of quality, bringing authentic warmth to your rendang, stews, or even a cup of spiced tea. Experience the legacy of the Spice Islands in every single bud.', 
        details: ['Origin: Maluku, Indonesia', 'Quality Grade: Grade A', 'Aroma: Strong, sweet, pungent', 'Uses: Cuisine, beverages, traditional medicine'] },
      { id: 2, name: 'Cinnamon', category: 'Bark', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kayu-manis.png?v=1', 
        description: 'From the fertile slopes of Kerinci in Sumatra, we present Cassia Cinnamon with a thick bark rich in essential oils. Its signature sweet and warm aroma is the perfect touch to elevate your pastries, coffee, and desserts.\n\nNot just for sweets, its gentle warmth can also balance and enrich the complex flavors in savory dishes like curries and goulash. Let the magic of our cinnamon awaken warmth in every dish.', 
        details: ['Origin: Sumatra, Indonesia', 'Quality Grade: Grade AA', 'Aroma: Sweet, warm, woody', 'Uses: Pastries, coffee, curries'] },
      { id: 3, name: 'Nutmeg', category: 'Seed', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/pala.png?v=1', 
        description: 'A treasure from the Banda Islands, the birthplace of the world\'s finest Nutmeg. Our whole nutmeg seeds are selected from perfectly ripened fruits, offering a complex flavor profile—warm, spicy, with a hint of luxurious musk.\n\nCrack open a seed and grate it fresh to release its full aromatic potential into your cream sauces, soups, or meat dishes. Our nutmeg is not just a spice; it\'s a sensory journey to the heart of the world\'s spice history.', 
        details: ['Origin: Banda Islands, Indonesia', 'Quality Grade: Grade S', 'Aroma: Pungent, musky, sweet', 'Uses: Sauces, soups, meat dishes'] },
      { id: 4, name: 'White Pepper', category: 'Seed', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/lada-putih.png?v=1', 
        description: 'Known worldwide as Muntok White Pepper, our white pepper originates from Bangka Island. Through a meticulous process of soaking and skin removal, we produce a pepper with a smooth yet sharp, piercing flavor and a clean, earthy aroma.\n\nIt is perfect for dishes that require pungency without altering the color, such as cream sauces, seafood dishes, and classic European cuisine. Elevate your culinary creations with the elegant touch of our premium white pepper.', 
        details: ['Origin: Bangka, Indonesia', 'Quality Grade: Muntok White Pepper', 'Aroma: Sharp, earthy', 'Uses: European & Asian cuisine, cream sauces'] },
      { id: 5, name: 'Black Pepper', category: 'Seed', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/lada-hitam.png?v=1', 
        description: 'Behold the "King of Spices" from the fertile lands of Lampung. Our black pepper is harvested when the berries reach the right stage of maturity, then naturally sun-dried until their skins wrinkle and blacken. This process locks in piperine, the compound that delivers a powerful spicy flavor and a sharp aroma with a slightly fruity note.\n\nGrind it fresh over steaks, soups, or roasted dishes to unleash an unparalleled burst of flavor. Experience the true power and character of Indonesia\'s finest black pepper.', 
        details: ['Origin: Lampung, Indonesia', 'Quality Grade: Grade A Super', 'Aroma: Pungent, sharp, slightly fruity', 'Uses: Steak seasoning, soups, roasted dishes'] },
      { id: 6, name: 'Turmeric', category: 'Rhizome', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kunyit.png?v=1', 
        description: 'Sourced from select rhizomes in the fertile soil of Central Java, our Turmeric is the embodiment of Indonesia\'s "yellow gold." Its bright, natural golden color is a testament to its high curcumin content, the bioactive compound renowned for its incredible health benefits.\n\nIts distinctive earthy aroma with a slightly bitter hint provides an irreplaceable depth of flavor to curries, sotos, and traditional "jamu" tonics. Let the purity of our turmeric transform your cooking into an authentic and healthy culinary masterpiece.', 
        details: ['Origin: Central Java, Indonesia', 'Quality Grade: Organic', 'Aroma: Earthy, slightly bitter', 'Uses: Curries, traditional tonics, natural food coloring'] },
      { id: 7, name: 'Ginger', category: 'Rhizome', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/jahe.png?v=1', 
        description: 'Hand-selected "emprit" ginger from the highlands of West Java, known for its strong spicy taste and refreshing aroma. Each rhizome holds natural warmth perfect for traditional beverages, stir-fry seasoning, or as a secret ingredient in your artisanal baking.\n\nExperience the freshness and power of authentic Indonesian ginger that not only warms the body but also stimulates the appetite.', 
        details: ['Origin: West Java, Indonesia', 'Quality Grade: Grade 1', 'Aroma: Fresh, spicy, citrusy', 'Uses: Warm beverages, stir-fry seasoning, baked goods'] },
      { id: 8, name: 'Cardamom', category: 'Seed', image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/product/kapulaga.png?v=1', 
        description: 'Often called the "Queen of Spices", our green cardamom from Sumatra has a very exotic floral and minty aroma. Just a few grains are enough to transform a cup of black coffee into a luxurious Middle Eastern drink or give a magical touch to biryani dishes and delicate pastries.\n\nOpen the pods just before use to release their full aromatic potential. Let our cardamom take you into a world of elegant and unforgettable flavors.', 
        details: ['Origin: North Sumatra, Indonesia', 'Quality Grade: Premium Green', 'Aroma: Complex, sweet, floral', 'Uses: Arabic coffee, biryani, confectioneries'] },
    ],
    blogPosts: [
        { 
          id: 1, 
          title: 'The Journey of Clove: From Maluku to the World', 
          author: 'KAMI SPICES Team', 
          date: 'July 15, 2024', 
          readingTime: '5 min read', 
          category: 'History', 
          tags: ['History', 'Spices'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/sejarah-cengkeh.png?v=1', 
          content: 'Explore the fascinating history of cloves, the prized spice that shaped global trade routes and put the Maluku Islands on the world map. For centuries, this spice was worth more than its weight in gold and triggered massive expeditions by European nations.\n\nBeyond its historical value, the clove is the heart of Indonesia\'s unique kretek cigarette industry, providing its signature aroma and warming sensation. Clove oil has also long been used in traditional medicine as an antiseptic and pain reliever, especially for toothaches, proving its incredible versatility.\n\nAt KAMI SPICES, we select cloves from Ternate and Tidore, picked when the flower buds reach a perfect pinkish-red hue and dried under the tropical sun. This process ensures a high eugenol content, resulting in superior quality of aroma and taste for every need, from culinary to pharmaceutical.'
        },
        { 
          id: 2, 
          title: 'The Art of Blending Cinnamon in Cuisine', 
          author: 'Chef Renata', 
          date: 'July 22, 2024', 
          readingTime: '7 min read', 
          category: 'Culinary', 
          tags: ['Culinary', 'Tips'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/masak-kayu-manis.png?v=1', 
          content: 'Learn how to use cinnamon not just in sweet dishes, but also to enrich the flavors of savory meals like curries and stews. Its characteristic warmth can balance flavors and add complex depth to a variety of dishes.\n\nThere are two main types of cinnamon: the spicier and more common Cassia, and Ceylon or \'true cinnamon,\' which has a milder, sweeter flavor. Understanding this difference is key to creating the right flavor harmony, whether in a rich meat stew or a warm morning cup of coffee.\n\nCinnamon not only pleases the palate but is also known for various health benefits, including regulating blood sugar and acting as an anti-inflammatory. We bring you Cassia cinnamon from Kerinci, Sumatra, renowned for its thick bark and rich essential oil content, promising warmth in every flake.'
        },
        { 
          id: 3, 
          title: 'The Secret of Black Pepper: The King of Spices', 
          author: 'KAMI SPICES Team', 
          date: 'July 28, 2024', 
          readingTime: '6 min read', 
          category: 'Education', 
          tags: ['Facts', 'Spices'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/fakta-lada-hitam.png?v=1', 
          content: 'Why has black pepper been so valued throughout history to be dubbed the "King of Spices"? The answer lies in its sharp, pungent flavor and its ability to enhance the taste of almost any dish in the world.\n\nThe title \'King of Spices\' is not without reason. Piperine, the active compound in black pepper, not only provides its characteristic spiciness but also enhances the absorption of other nutrients, such as curcumin in turmeric. This is why black pepper is often an inseparable partner to other spices in various seasoning blends.\n\nLampung black pepper from KAMI SPICES is harvested when the berries are still yellowish-green, then sun-dried until their skin shrivels and turns black. This natural process locks in the sharpness of flavor and fruity aroma that are its hallmark, making it a top choice for chefs to add a bold finishing touch to their dishes.'
        },
        { 
          id: 4, 
          title: "Turmeric: Indonesia's Yellow Gold and Its Benefits", 
          author: 'Siti Rahayu', 
          date: 'August 5, 2024', 
          readingTime: '5 min read', 
          category: 'Health', 
          tags: ['Health', 'Tradition'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/manfaat-kunyit.png?v=1', 
          content: 'From a kitchen spice to a healing remedy, turmeric is an Indonesian treasure. Learn more about the power of curcumin, the active compound that gives it its bright yellow color and a multitude of health benefits.\n\nCurcumin is a bioactive compound that is the center of attention for its powerful antioxidant and anti-inflammatory properties. Traditionally, turmeric is used in "jamu" tonics to maintain wellness and beauty, a legacy of local wisdom now recognized by modern science.\n\nTo obtain the best color and benefits, we select turmeric from farmers in Central Java who grow it organically. The rhizomes are cleaned, thinly sliced, dried, and ground into a fine powder, ensuring 100% purity with no additives, so you get the full essence of Indonesia\'s yellow gold.'
        },
        { 
          id: 5, 
          title: 'Nutmeg vs. Mace: Unpacking the Dual Treasure of Banda', 
          author: 'Research Team', 
          date: 'August 12, 2024', 
          readingTime: '7 min read', 
          category: 'Education', 
          tags: ['Education', 'Nutmeg'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/pala-dan-fuli.png?v=1', 
          content: 'One tree, two precious spices. Understand the difference between nutmeg and mace and the best ways to use them in your cooking. Although they come from the same tree, they have distinctly different flavor profiles.\n\nNutmeg, with its sweet and warm taste, is perfect for creamy dishes, sauces, and pastries. On the other hand, mace—the lacy covering of the seed—has a more delicate and slightly peppery aroma, often used in lighter dishes like broths and fish preparations. Mastering both will open a new dimension in your flavor palette.\n\nThe Banda Islands are the spiritual home of nutmeg and mace, where nutmeg trees thrive under the shade of kenari trees. We work with local communities to preserve traditional harvesting methods, where ripe fruits are hand-picked to ensure only the best quality reaches you.'
        },
        { 
          id: 6, 
          title: 'The Warmth of Ginger: More Than Just a Kitchen Spice', 
          author: 'Chef Renata', 
          date: 'August 19, 2024', 
          readingTime: '6 min read', 
          category: 'Health', 
          tags: ['Culinary', 'Health'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/wedang-jahe.png?v=1', 
          content: 'Explore the different types of ginger in Indonesia and discover a ginger drink recipe that can boost your immunity. This humble rhizome holds incredible power to warm the body and maintain health.\n\nIndonesia has several types of ginger, such as the large and less spicy "gajah" ginger, the small but pungent "emprit" ginger, and the red ginger, which has the highest essential oil content. Each type has its role, from being the main ingredient in "wedang jahe" to the base spice for stir-fried dishes.\n\nGinger not only warms the body but also helps relieve nausea and improve digestion. We choose "emprit" ginger from the highlands of West Java, where the cool air and fertile soil produce rhizomes with optimal spiciness and fresh aroma.'
        },
        { 
          id: 7, 
          title: 'Cardamom: The Scent of Luxury in Coffee and Cakes', 
          author: 'KAMI SPICES Team', 
          date: 'August 26, 2024', 
          readingTime: '5 min read', 
          category: 'Culinary', 
          tags: ['Tips', 'Gourmet'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/kopi-kapulaga.png?v=1', 
          content: 'Elevate your coffee and baking experience with the exotic touch of cardamom. Learn how to choose and store it properly to preserve its luxurious aroma.\n\nOften called the \'Queen of Spices,\' green cardamom has a complex flavor profile—slightly citrusy, minty, and floral. Just a few pods are enough to transform a cup of black coffee into a luxurious Middle Eastern beverage or to give an exotic touch to your butter cookie dough.\n\nTo preserve its volatile aroma, the best cardamom is sold in whole pods. Open the pod and grind the small black seeds inside just before use to release their full flavor potential. Our cardamom comes from Sumatra, hand-picked and carefully dried to maintain its aroma and color integrity.'
        },
        { 
          id: 8, 
          title: 'Tracing the Vanilla Trail: The Aromatic Orchid of the Archipelago', 
          author: 'Arya Wijaya', 
          date: 'September 2, 2024', 
          readingTime: '8 min read', 
          category: 'History', 
          tags: ['History', 'Vanilla'], 
          image: 'https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/blog/bunga-vanili.png?v=1', 
          content: 'Vanilla is one of the most expensive spices in the world. Follow its journey from plantations in Indonesia to becoming a global favorite in the worlds of patisserie and perfumery.\n\nThe process of cultivating and processing vanilla is extremely labor-intensive. Its orchid flower must be hand-pollinated, and the pods undergo a long and complicated curing and fermentation process over several months. This process develops hundreds of aromatic compounds, creating the rich and complex vanilla flavor that synthetic essences cannot replicate.\n\nKAMI SPICES presents Planifolia vanilla beans from farmers in Java and Bali. The pods are long, plump, and oily, with a sweet and slightly deep woody aroma. Each pod is the result of patience and dedication, a true luxury ready to perfect your gourmet creations.'
        }
    ]
  },
};

export default contentData;
