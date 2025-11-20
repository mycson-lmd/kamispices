import React, { useState, useEffect, useMemo, useRef } from "react";
import type {
  Language,
  Product,
  BlogPost,
  AboutPageContent,
  ContactPageContent,
  BlogPageContent,
  ContactInfoItem,
  ModalContentType,
} from "./types";
import contentData from "./content";
import {
  Header,
  Footer,
  ProductCard,
  ProductModal,
  BlogCard,
  Button,
  Pagination,
  Icon,
  BlogModal,
  GenericModal,
  LogoIcon,
} from "./components";

type Page = "home" | "about" | "products" | "blog" | "contact";

// ===================================================================================
// PENTING: KONFIGURASI ASET
// Semua aset diambil dari CDN GitHub (jsdelivr) sesuai permintaan.
// Pastikan Anda telah melakukan push folder 'assets' ke GitHub.
//
// UPDATE: Menambahkan ?v=2 pada video untuk mem-bypass cache CDN (Cache Busting)
// ===================================================================================

const HERO_VIDEO_URL =
  "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/intro/video-hero.mp4?v=2";
const FALLBACK_IMAGE_URL =
  "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/intro/hero-main.png?v=1";

// --- Page Components ---

const IntroScreen: React.FC<{
  tagline: string;
  onAnimationComplete: () => void;
}> = ({ tagline, onAnimationComplete }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const animationTriggered = useRef(false);
  // FIX: Use `number` for setTimeout return type in browser environments instead of `NodeJS.Timeout`.
  const timeoutRef = useRef<number | null>(null);

  const triggerAnimation = () => {
    if (animationTriggered.current) return;
    animationTriggered.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsAnimatingOut(true);
    setTimeout(() => {
      onAnimationComplete();
    }, 5000); // Matches animation duration
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      triggerAnimation();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`relative flex-grow flex items-center justify-center cursor-pointer overflow-hidden ${
        !isAnimatingOut ? "animate-fadeIn" : ""
      }`}
      onClick={triggerAnimation}
      onMouseEnter={triggerAnimation}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div
          className="meteor"
          style={{
            top: "10%",
            left: "80%",
            animationDelay: "0s",
            animationDuration: "2s",
          }}
        ></div>
        <div
          className="meteor"
          style={{
            top: "30%",
            left: "40%",
            animationDelay: "1.2s",
            animationDuration: "3s",
          }}
        ></div>
        <div
          className="meteor"
          style={{
            top: "50%",
            left: "90%",
            animationDelay: "2.5s",
            animationDuration: "1.5s",
          }}
        ></div>
        <div
          className="meteor"
          style={{
            top: "5%",
            left: "50%",
            animationDelay: "3s",
            animationDuration: "2.8s",
          }}
        ></div>
        <div
          className="meteor"
          style={{
            top: "60%",
            left: "20%",
            animationDelay: "4.5s",
            animationDuration: "2.2s",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <LogoIcon
          variant="intro"
          className={`w-40 h-auto mx-auto mb-6 ${
            isAnimatingOut ? "animate-logoAnimateOut" : ""
          }`}
        />
        <div className={isAnimatingOut ? "animate-textAnimateOut" : ""}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest copper-gradient-text mb-3">
            KAMI SPICES
          </h1>
          <p className="font-sans text-copper text-lg tracking-wider">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<{
  content: (typeof contentData)[Language]["hero"];
  onNavClick: (page: string) => void;
}> = ({ content, onNavClick }) => {
  return (
    <div className="relative flex-grow flex items-center justify-center text-center animate-fadeIn overflow-hidden">
      <video
        key={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        poster={FALLBACK_IMAGE_URL}
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
      <div
        className="absolute inset-0 bg-black bg-opacity-60 z-10"
        aria-hidden="true"
      ></div>

      <div className="relative bg-black/40 p-8 rounded-lg shadow-glow-white max-w-2xl z-20">
        <h2 className="text-5xl font-serif font-bold copper-gradient-text mb-4">
          {content.title}
        </h2>
        <p className="text-copper-light mb-8">{content.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button onClick={() => onNavClick("products")}>{content.cta}</Button>
          <Button
            onClick={() => onNavClick("contact")}
            className="bg-transparent border border-copper text-copper hover:bg-copper-gradient-full hover:text-black hover:border-transparent"
          >
            {content.ctaContact}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC<{
  content: (typeof contentData)[Language]["productsPage"];
  products: Product[];
  onViewDetails: (p: Product) => void;
}> = ({ content, products, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) => selectedCategory === "All" || p.category === selectedCategory
      )
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [products, searchTerm, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="animate-fadeIn">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-serif font-bold copper-gradient-text mb-4">
          {content.title}
        </h2>
        <p className="text-copper-light max-w-2xl mx-auto mb-12">
          {content.description}
        </p>

        <div className="max-w-4xl mx-auto mb-8 space-y-6">
          <input
            type="text"
            placeholder={content.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-brand-dark border border-copper/30 text-copper-light px-4 py-2 rounded-md focus:ring-2 focus:ring-copper focus:outline-none w-full md:w-2/3 mx-auto block"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform active:scale-95 ${
                  selectedCategory === category
                    ? "bg-copper-gradient-full text-black shadow-glow-copper"
                    : "bg-transparent border border-copper/50 text-copper hover:bg-copper-gradient-full hover:text-black hover:border-transparent hover:shadow-glow-copper"
                }`}
              >
                {category === "All" ? content.filterAll : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              viewDetailsText={content.viewDetails}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

const BlogPage: React.FC<{
  content: BlogPageContent;
  posts: BlogPost[];
  onViewDetails: (post: BlogPost) => void;
}> = ({ content, posts, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const tags = useMemo(
    () => ["All", ...new Set(posts.flatMap((p) => p.tags))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => selectedTag === "All" || p.tags.includes(selectedTag))
      .filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [posts, searchTerm, selectedTag]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="animate-fadeIn">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-bold copper-gradient-text mb-4">
            {content.title}
          </h2>
          <p className="text-copper-light max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <input
            type="text"
            placeholder={content.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-brand-dark border border-copper/30 text-copper-light px-4 py-2 rounded-md focus:ring-2 focus:ring-copper focus:outline-none w-full"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-copper-gradient-full text-black"
                    : "bg-brand-dark/50 text-copper hover:bg-copper/20"
                }`}
              >
                {tag === "All" ? content.filterTagAll : tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onViewDetails={onViewDetails}
              />
            ))
          ) : (
            <p className="text-center text-copper-light">No articles found.</p>
          )}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

const AboutPage: React.FC<{ content: AboutPageContent }> = ({ content }) => {
  return (
    <div className="animate-fadeIn">
      {/* Section 1: Atelier */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-copper-light prose-headings:font-serif prose-headings:text-copper-light">
            <h2 className="text-5xl font-serif font-bold copper-gradient-text mb-4">
              {content.section1.title}
            </h2>
            <p>{content.section1.p1}</p>
            <p>{content.section1.p2}</p>
            <ul className="mt-6 space-y-4">
              {[
                content.section1.listItem1,
                content.section1.listItem2,
                content.section1.listItem3,
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-copper mr-3 mt-1">&#10022;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={content.section1.image}
              alt="Curated Spices"
              className="rounded-lg shadow-glow-copper"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold copper-gradient-text">
            {content.section2.visionTitle}
          </h2>
          <p className="text-lg text-copper-light max-w-3xl mx-auto mt-4 mb-16">
            {content.section2.visionText}
          </p>

          <h2 className="text-4xl font-serif font-bold copper-gradient-text mb-12">
            {content.section2.missionTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.section2.missions.map((mission) => (
              <div key={mission.title} className="text-center">
                <Icon
                  name={mission.icon}
                  className="mx-auto text-copper h-12 w-12 mb-4"
                />
                <h3 className="text-xl font-serif font-bold mb-2 text-copper-light">
                  {mission.title}
                </h3>
                <p className="font-sans text-copper text-sm">{mission.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <h2 className="text-4xl font-serif font-bold copper-gradient-text">
          {content.section3.title}
        </h2>
        <p className="text-lg text-copper-light max-w-3xl mx-auto mt-4 mb-12">
          {content.section3.subtitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {content.section3.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-brand-dark/50 p-6 rounded-lg border border-copper/20 text-left hover:border-copper/50 hover:shadow-glow-copper transition-all duration-300"
            >
              <Icon name={pillar.icon} className="text-copper h-10 w-10 mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2 text-copper-light">
                {pillar.title}
              </h3>
              <p className="font-sans text-copper text-sm">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold copper-gradient-text mb-12">
            {content.section4.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.section4.testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-black p-8 rounded-lg text-left relative shadow-glow-white"
              >
                <Icon
                  name="quote"
                  className="absolute top-4 left-4 h-12 w-12 text-copper/20"
                />
                <p className="font-sans text-copper-light mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-copper-light">
                      {testimonial.name}
                    </h4>
                    <p className="text-copper text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <h2 className="text-4xl font-serif font-bold copper-gradient-text mb-12">
          {content.section5.title}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {content.section5.team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-2 border-copper/50"></div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-copper-light">
                {member.name}
              </h3>
              <p className="text-copper font-sans font-medium mb-2">
                {member.role}
              </p>
              <p className="text-copper text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ContactPage: React.FC<{
  content: ContactPageContent;
  language: Language;
}> = ({ content, language }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalContent, setModalContent] = useState<ModalContentType | null>(
    null
  );

  const getModalContent = (item: ContactInfoItem): ModalContentType | null => {
    const isId = language === "id";
    switch (item.icon) {
      case "map-pin":
        return {
          type: "map",
          title: item.title,
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.66642194632!2d106.82236931476886!3d-6.175392395527878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x217ab212c413b7c7!2sMenara%20Cakrawala!5e0!3m2!1sen!2sid!4v1694589218225!5m2!1sen!2sid",
        };
      case "mail":
        const subject = isId
          ? "Permintaan Informasi dari Website KAMI SPICES"
          : "Inquiry from KAMI SPICES Website";
        const body = isId
          ? "Halo tim KAMI SPICES,\n\nSaya tertarik dengan produk Anda dan ingin meminta informasi lebih lanjut mengenai...\n\nTerima kasih."
          : "Hello KAMI SPICES Team,\n\nI am interested in your products and would like to request more information about...\n\nThank you.";
        const mailtoLink = `${item.link}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        return {
          type: "info",
          title: item.title,
          image:
            "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
          text: isId
            ? "Kami menghargai setiap pesan Anda. Tim kami akan merespon email Anda dalam waktu 24 jam kerja. Untuk pertanyaan umum, kemitraan, atau permintaan katalog, jangan ragu untuk mengirimkan kami pesan."
            : "We value every message. Our team will respond to your email within 24 business hours. For general inquiries, partnerships, or catalog requests, feel free to send us a message.",
          cta: {
            text: isId ? "Tulis Email" : "Compose Email",
            link: mailtoLink,
            target: "_self",
          },
        };
      case "phone":
        const whatsappMessage = isId
          ? "Halo KAMI SPICES, saya ingin bertanya tentang produk rempah Anda."
          : "Hello KAMI SPICES, I would like to ask about your spice products.";
        const whatsappLink = `https://wa.me/6281286296432?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        return {
          type: "info",
          title: item.title,
          icon: "whatsapp",
          text: isId
            ? "Untuk respons tercepat, hubungi kami melalui WhatsApp. Tim kami siap menjawab pertanyaan singkat Anda. Jika Anda ingin menjadwalkan panggilan telepon, silakan kirim pesan terlebih dahulu untuk mengatur waktu yang sesuai."
            : "For the quickest response, contact us via WhatsApp. Our team is ready to answer your brief questions. If you wish to schedule a phone call, please send a message first to arrange a suitable time.",
          cta: {
            text: isId ? "Chat di WhatsApp" : "Chat on WhatsApp",
            link: whatsappLink,
          },
        };
      case "clock":
        return {
          type: "info",
          title: item.title,
          icon: "clock",
          text: (
            <div className="text-2xl font-sans text-copper-light whitespace-pre-line leading-relaxed">
              {item.text}
            </div>
          ),
        };
      default:
        return null;
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Section 1: Intro */}
      <section className="container mx-auto px-4 pt-16 pb-12 text-center">
        <h2 className="text-5xl font-serif font-bold copper-gradient-text mb-4">
          {content.title}
        </h2>
        <p className="text-copper-light max-w-3xl mx-auto">{content.intro}</p>
      </section>

      {/* Section 2: Contact Info */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.contactInfo.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer"
              onClick={() => setModalContent(getModalContent(item))}
            >
              <div className="bg-brand-dark p-6 rounded-lg border border-copper/20 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-copper/50 group-hover:shadow-glow-copper">
                <Icon name={item.icon} className="text-copper h-10 w-10 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-copper-light text-sm whitespace-pre-line flex-grow">
                  {item.text}
                </p>
                {item.subtext && (
                  <p className="font-sans text-copper text-xs mt-2">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Social Media */}
      <section className="container mx-auto px-4 pb-16 lg:pb-24">
        <div className="text-center">
          <h3 className="text-3xl font-serif font-bold copper-gradient-text mb-6">
            {content.socialMediaTitle}
          </h3>
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {content.socialMediaLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.platform}`}
                className="text-copper/80 hover:text-copper transition-colors duration-300 transform hover:scale-110"
              >
                <Icon name={social.platform} className="h-8 w-8" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 mt-4 font-sans tracking-wider">
            @kamispices.indonesia
          </p>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold copper-gradient-text mb-12 text-center">
            {content.faqTitle}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {content.faqs.map((faq, index) => (
              <div key={index} className="border-b border-copper/20">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4"
                >
                  <span className="text-lg font-serif font-medium">
                    {faq.question}
                  </span>
                  <Icon
                    name="chevron-down"
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pb-4 pr-6">
                    <p className="font-sans text-copper-light">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GenericModal
        isOpen={!!modalContent}
        onClose={() => setModalContent(null)}
        maxWidth={modalContent?.type === "map" ? "max-w-4xl" : "max-w-lg"}
      >
        {modalContent?.type === "map" && (
          <div className="bg-brand-dark">
            <h3 className="text-2xl p-4 font-serif text-copper-light">
              {modalContent.title}
            </h3>
            <iframe
              src={modalContent.embedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
        {modalContent?.type === "info" && (
          <div className="p-8 text-center flex flex-col items-center">
            {modalContent.image && (
              <img
                src={modalContent.image}
                alt={modalContent.title}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
              />
            )}
            {modalContent.icon &&
              (modalContent.icon === "whatsapp" ? (
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#128C7E] flex items-center justify-center shadow-lg">
                  <Icon name="whatsapp" className="h-20 w-20 text-white" />
                </div>
              ) : (
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Icon
                    name={modalContent.icon}
                    className="h-24 w-24 text-copper"
                  />
                </div>
              ))}
            <h3 className="text-3xl font-serif font-bold copper-gradient-text mb-4">
              {modalContent.title}
            </h3>
            <div className="text-copper-light font-sans mb-6">
              {modalContent.text}
            </div>
            {modalContent.cta && (
              <a
                href={modalContent.cta.link}
                target={modalContent.cta.target || "_blank"}
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button>{modalContent.cta.text}</Button>
              </a>
            )}
          </div>
        )}
      </GenericModal>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [page, setPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("id");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [introVisible, setIntroVisible] = useState(true);

  const currentContent = contentData[language];

  // SEO Effect
  useEffect(() => {
    let seo;
    switch (page) {
      case "home":
        seo = currentContent.hero.seo;
        break;
      case "about":
        seo = currentContent.aboutPage.seo;
        break;
      case "products":
        seo = currentContent.productsPage.seo;
        break;
      case "blog":
        seo = currentContent.blogPage.seo;
        break;
      case "contact":
        seo = currentContent.contactPage.seo;
        break;
      default:
        seo = {
          title: "KAMI SPICES",
          description: "Premium Indonesian Spices",
        };
    }
    document.title = seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", seo.description);
    document.documentElement.lang = language;
  }, [page, language, currentContent]);

  const handleLogoClick = () => {
    if (page === "home" && !introVisible) {
      setIntroVisible(true);
    } else {
      setPage("home");
      setIntroVisible(true);
    }
  };

  const handleNavClick = (targetPage: string) => {
    if (targetPage as Page) {
      setPage(targetPage as Page);
      document.querySelector("main")?.scrollTo(0, 0);
    }
  };

  const handleNavigateFromModal = (targetPage: Page) => {
    setSelectedProduct(null); // Close the modal
    handleNavClick(targetPage); // Navigate
  };

  const handleIntroAnimationComplete = () => {
    setIntroVisible(false);
  };

  const currentPostIndex = useMemo(
    () =>
      selectedPost
        ? currentContent.blogPosts.findIndex((p) => p.id === selectedPost.id)
        : -1,
    [selectedPost, currentContent.blogPosts]
  );

  const handleNextPost = () => {
    if (
      currentPostIndex > -1 &&
      currentPostIndex < currentContent.blogPosts.length - 1
    ) {
      setSelectedPost(currentContent.blogPosts[currentPostIndex + 1]);
    }
  };

  const handlePrevPost = () => {
    if (currentPostIndex > 0) {
      setSelectedPost(currentContent.blogPosts[currentPostIndex - 1]);
    }
  };

  const currentProductIndex = useMemo(
    () =>
      selectedProduct
        ? currentContent.products.findIndex((p) => p.id === selectedProduct.id)
        : -1,
    [selectedProduct, currentContent.products]
  );

  const handleNextProduct = () => {
    if (
      currentProductIndex > -1 &&
      currentProductIndex < currentContent.products.length - 1
    ) {
      setSelectedProduct(currentContent.products[currentProductIndex + 1]);
    }
  };

  const handlePrevProduct = () => {
    if (currentProductIndex > 0) {
      setSelectedProduct(currentContent.products[currentProductIndex - 1]);
    }
  };

  return (
    <div className="bg-black text-white font-sans rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col h-[calc(100vh-2rem)]">
      <Header
        content={currentContent.nav}
        onLogoClick={handleLogoClick}
        onNavClick={handleNavClick}
        language={language}
        setLanguage={setLanguage}
        currentPage={page}
      />
      <main className="flex-grow flex flex-col overflow-y-auto">
        {page === "home" &&
          (introVisible ? (
            <IntroScreen
              tagline={currentContent.hero.tagline}
              onAnimationComplete={handleIntroAnimationComplete}
            />
          ) : (
            <Hero content={currentContent.hero} onNavClick={handleNavClick} />
          ))}
        {page === "products" && (
          <ProductsPage
            content={currentContent.productsPage}
            products={currentContent.products}
            onViewDetails={setSelectedProduct}
          />
        )}
        {page === "blog" && (
          <BlogPage
            content={currentContent.blogPage}
            posts={currentContent.blogPosts}
            onViewDetails={setSelectedPost}
          />
        )}
        {page === "about" && <AboutPage content={currentContent.aboutPage} />}
        {page === "contact" && (
          <ContactPage
            content={currentContent.contactPage}
            language={language}
          />
        )}
      </main>
      <Footer content={currentContent.footer} />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        content={currentContent.productsPage}
        onNavigate={handleNavigateFromModal}
        onNext={handleNextProduct}
        onPrev={handlePrevProduct}
        allProducts={currentContent.products}
        onSelectRelated={setSelectedProduct}
      />
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onNext={handleNextPost}
        onPrev={handlePrevPost}
        isNextDisabled={
          currentPostIndex === -1 ||
          currentPostIndex === currentContent.blogPosts.length - 1
        }
        isPrevDisabled={currentPostIndex <= 0}
        allPosts={currentContent.blogPosts}
        onSelectRelated={setSelectedPost}
      />
    </div>
  );
};

export default App;
