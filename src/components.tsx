import React, { useState, useMemo } from "react";
import type {
  Language,
  Product,
  BlogPost,
  Content,
  FooterContent,
} from "./types";

type Page = "home" | "about" | "products" | "blog" | "contact";

// --- SVG Icons ---
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Modified LogoIcon to use hosted images
export const LogoIcon = ({
  className,
  variant = "header",
}: {
  className?: string;
  variant?: "header" | "intro";
}) => {
  const src =
    variant === "intro"
      ? "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/intro/logo-main.png"
      : "https://cdn.jsdelivr.net/gh/mycson-lmd/kamispices@main/assets/intro/logo-header.png";

  return (
    <img
      src={src}
      alt="KAMI SPICES"
      className={`object-contain ${className}`}
    />
  );
};

export const Icon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const icons: { [key: string]: React.ReactNode } = {
    award: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    seedling: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22h16"></path>
        <path d="M12 4v14"></path>
        <path d="m10 12-2-2"></path>
        <path d="m14 12 2-2"></path>
        <path d="m10 16-2-2"></path>
        <path d="m14 16 2-2"></path>
      </svg>
    ),
    handshake: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 15.5L11 12l-3.5 3.5"></path>
        <path d="M12 12V4.5"></path>
        <path d="m18 16 2.5-2.5a2.12 2.12 0 0 0-3-3L15 13"></path>
        <path d="m6 16-2.5-2.5a2.12 2.12 0 0 1 3-3L9 13"></path>
      </svg>
    ),
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    gem: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"></polygon>
        <line x1="12" y1="22" x2="12" y2="9"></line>
        <line x1="2" y1="9" x2="22" y2="9"></line>
      </svg>
    ),
    globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    "shield-check": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
    truck: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    quote: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l-1.964 2.223c-5.615.833-9.036 5.111-9.036 9.502 0 1.226.248 2.397.695 3.445l-2.433-2.445c-.214-.214-.492-.335-.785-.335-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.188c0-.293-.121-.571-.335-.785l-2.445-2.433c.447-1.048.695-2.219.695-3.445zm-12 0c0-5.141 3.892-10.519 10-11.725l-1.964 2.223c-5.615.833-9.036 5.111-9.036 9.502 0 1.226.248 2.397.695 3.445l-2.433-2.445c-.214-.214-.492-.335-.785-.335-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.188c0-.293-.121-.571-.335-.785l-2.445-2.433c.447-1.048.695-2.219.695-3.445z" />
      </svg>
    ),
    "map-pin": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    "chevron-down": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    tiktok: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.92-2.31-4.58-2.18-7.19.12-2.61 1.4-5.06 3.42-6.52 2.01-1.46 4.7-1.91 7.18-1.53.01 1.54-.01 3.08-.01 4.61-.97-.15-1.94-.22-2.91-.23-1.05 0-2.14.31-2.92 1.02-1.03.96-1.52 2.71-1.52 4.22 0 1.52.41 3.2 1.5 4.16.94.84 2.21 1.25 3.51 1.25 1.28 0 2.5-.39 3.44-1.25.92-.85 1.44-2.16 1.44-3.51 0-2.5-1.1-4.68-2.8-6.01-.79-.6-1.76-1-2.78-1.11L12.525.02z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    whatsapp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  };
  return <div className={className}>{icons[name] || null}</div>;
};

// --- Reusable Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        relative group/btn
        py-2 px-6 bg-copper text-black 
        font-sans font-bold uppercase tracking-wider 
        rounded-md overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:bg-copper-light hover:shadow-glow-copper
        active:scale-95 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-copper
        ${className}
      `}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// --- Language Switcher ---
interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setLanguage("id")}
        className={`transition-all duration-300 ${
          language === "id"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-90 hover:opacity-100 hover:scale-100"
        }`}
        aria-label="Ganti ke Bahasa Indonesia"
      >
        <img
          src="https://flagcdn.com/id.svg"
          alt="Bendera Indonesia"
          className="w-8 h-auto rounded-full"
        />
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`transition-all duration-300 ${
          language === "en"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-90 hover:opacity-100 hover:scale-100"
        }`}
        aria-label="Switch to English"
      >
        <img
          src="https://flagcdn.com/gb.svg"
          alt="Bendera Britania Raya"
          className="w-8 h-auto rounded-full"
        />
      </button>
    </div>
  );
};

// --- Mobile Menu ---
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content["nav"];
  onNavClick: (page: keyof Content["nav"]) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
}
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  content,
  onNavClick,
  language,
  setLanguage,
  currentPage,
}) => {
  const handleLinkClick = (page: keyof typeof content) => {
    onNavClick(page);
    onClose();
  };

  return (
    <div
      className={`
            absolute top-full right-0 w-full 
            bg-black/80 backdrop-blur-md 
            p-6 shadow-lg 
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
        `}
    >
      <nav className="flex flex-col items-start gap-4">
        {(Object.keys(content) as Array<keyof typeof content>).map((key) => (
          <button
            key={key}
            onClick={() => handleLinkClick(key)}
            className={`
                            relative font-serif text-2xl transition-colors duration-300
                            ${
                              currentPage === key
                                ? "text-copper-light mobile-nav-active"
                                : "text-copper mobile-nav-inactive"
                            }
                        `}
          >
            {content[key]}
          </button>
        ))}
      </nav>
      <div className="mt-6 pt-4 border-t border-copper/20">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
};

// --- Header ---
interface HeaderProps {
  content: Content["nav"];
  onLogoClick: () => void;
  onNavClick: (page: keyof Content["nav"]) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
}
export const Header: React.FC<HeaderProps> = ({
  content,
  onLogoClick,
  onNavClick,
  language,
  setLanguage,
  currentPage,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative copper-gradient-bar rounded-t-2xl py-3 px-4 sm:px-8 md:px-12 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={onLogoClick} className="flex items-center gap-4 group">
          <LogoIcon className="h-10 w-auto max-w-[150px] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(205,127,50,0.7)]" />
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-[#D2A584] transition-transform group-hover:scale-105 [text-shadow:-1px_0_0_black,1px_0_0_black,0_-1px_0_black,0_1px_0_black,2px_2px_4px_rgba(0,0,0,0.8)]">
            KAMI SPICES
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center">
          <nav className="flex items-center space-x-2">
            {(Object.keys(content) as Array<keyof typeof content>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => onNavClick(key)}
                  className="font-sans text-black hover:text-copper font-medium transition-all duration-300 text-sm uppercase tracking-wider px-3 py-1 rounded-md hover:bg-black/70"
                >
                  {content[key]}
                </button>
              )
            )}
          </nav>
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-copper hover:text-copper-light transition-colors"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        content={content}
        onNavClick={onNavClick}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
      />
    </header>
  );
};

// --- Footer ---
interface FooterProps {
  content: FooterContent;
}
export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="copper-gradient-bar rounded-b-2xl py-5 px-4 sm:px-8">
      <div className="container mx-auto text-center text-black text-sm font-medium">
        <div className="flex justify-center items-center gap-6 mb-4">
          {content.socialMediaLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.platform}`}
              className="text-black/70 hover:text-black transition-transform duration-300 transform hover:scale-125"
            >
              <Icon name={social.platform} className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} KAMI SPICES. All Rights Reserved.
          <br className="sm:hidden" /> PT Komoditas Aroma Mewah Indonesia.
        </p>
      </div>
    </footer>
  );
};

// --- Product Card ---
interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  viewDetailsText: string;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  viewDetailsText,
}) => {
  return (
    <div
      className="group product-card-frame relative bg-black border border-copper transition-all duration-300 ease-in-out hover:scale-105 hover:border-copper-light hover:shadow-glow-copper cursor-pointer"
      onClick={() => onViewDetails(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onViewDetails(product)
      }
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-copper-light bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="text-2xl font-serif font-bold tracking-wide">
          {product.name}
        </h3>
        <p className="text-sm text-copper mb-4">{product.category}</p>
        <div className="w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2">
          <span className="font-sans text-sm text-copper-light bg-copper/20 px-4 py-1 rounded-full">
            {viewDetailsText}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Product Modal ---
interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  content: Content["productsPage"];
  onNavigate: (page: Page) => void;
  onNext: () => void;
  onPrev: () => void;
  allProducts: Product[];
  onSelectRelated: (product: Product) => void;
}
export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  content,
  onNavigate,
  onNext,
  onPrev,
  allProducts,
  onSelectRelated,
}) => {
  if (!product) return null;

  const currentIndex = allProducts.findIndex((p) => p.id === product.id);
  const prevProduct = currentIndex > 0 ? allProducts[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < allProducts.length - 1
      ? allProducts[currentIndex + 1]
      : null;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const relatedByCategory = allProducts.filter(
      (p) => p.id !== product.id && p.category === product.category
    );
    const otherProducts = allProducts.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );
    const combined = [...new Set([...relatedByCategory, ...otherProducts])];
    return combined.slice(0, 5);
  }, [product, allProducts]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-brand-dark w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-glow-copper overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-serif font-bold copper-gradient-text">
                {product.name}
              </h2>
              <p className="text-copper mb-4">{product.category}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-copper-light transition-colors"
              aria-label="Tutup"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-copper-light whitespace-pre-wrap mb-6">
            {product.description}
          </div>
          <ul className="space-y-2 mb-8">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-center font-sans text-sm">
                <span className="text-copper mr-2">&#10022;</span>
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button className="w-full" onClick={() => onNavigate("contact")}>
              {content.contactUs}
            </Button>

            {/* Navigation */}
            <div className="mt-6 pt-4 border-t border-copper/20 flex justify-between items-center text-sm">
              <button
                onClick={onPrev}
                disabled={!prevProduct}
                className="flex items-center gap-2 text-copper disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:text-copper-light transition-colors"
                aria-label="Produk Sebelumnya"
              >
                <ChevronLeftIcon />
                <span className="hidden sm:inline">
                  {prevProduct?.name || "Awal"}
                </span>
              </button>
              <button
                onClick={onNext}
                disabled={!nextProduct}
                className="flex items-center gap-2 text-copper disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:text-copper-light transition-colors"
                aria-label="Produk Berikutnya"
              >
                <span className="hidden sm:inline">
                  {nextProduct?.name || "Akhir"}
                </span>
                <ChevronRightIcon />
              </button>
            </div>

            {/* Related Products */}
            <div className="mt-6 pt-4 border-t border-copper/20">
              <h3 className="font-serif font-bold text-copper-light mb-3 text-center">
                Produk Terkait
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {relatedProducts.map((related) => (
                  <div
                    key={related.id}
                    onClick={() => onSelectRelated(related)}
                    className="group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      onSelectRelated(related)
                    }
                  >
                    <div className="overflow-hidden rounded-md mb-2 aspect-square">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="font-sans text-xs text-center text-copper group-hover:text-copper-light transition-colors line-clamp-2">
                      {related.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Blog Card ---
interface BlogCardProps {
  post: BlogPost;
  onViewDetails: (post: BlogPost) => void;
}
export const BlogCard: React.FC<BlogCardProps> = ({ post, onViewDetails }) => {
  return (
    <div
      onClick={() => onViewDetails(post)}
      className="group bg-brand-dark/50 border-t border-copper/30 p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:bg-brand-dark hover:shadow-glow-copper rounded-lg cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && onViewDetails(post)
      }
    >
      <div className="md:w-1/3 h-56 md:h-auto overflow-hidden rounded">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <div className="flex items-center space-x-2 text-xs text-copper mb-2">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag.toUpperCase()}</span>
          ))}
        </div>
        <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2 group-hover:copper-gradient-text transition-colors">
          {post.title}
        </h3>
        <p className="text-copper-light font-sans text-sm mb-4 line-clamp-3">
          {post.content.split("\n\n")[0]}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-copper/70">
          <span>
            {post.author} &bull; {post.date}
          </span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </div>
  );
};

// --- Blog Modal ---
interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  allPosts: BlogPost[];
  onSelectRelated: (post: BlogPost) => void;
}
export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onNext,
  onPrev,
  isNextDisabled,
  isPrevDisabled,
  allPosts,
  onSelectRelated,
}) => {
  if (!post) return null;

  const getRelatedPosts = () => {
    const relatedByTag = allPosts.filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    );
    const relatedByCategory = allPosts.filter(
      (p) => p.id !== post.id && p.category === post.category
    );
    const otherPosts = allPosts.filter((p) => p.id !== post.id);

    const combined = [
      ...new Set([...relatedByTag, ...relatedByCategory, ...otherPosts]),
    ];
    return combined.slice(0, 5);
  };

  const relatedPosts = getRelatedPosts();

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-brand-dark w-full max-w-4xl max-h-[90vh] flex flex-col shadow-glow-white overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-64 md:h-80 relative flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-copper-light bg-black/50 rounded-full p-2 hover:bg-black transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold copper-gradient-text mb-2">
            {post.title}
          </h2>
          <div className="flex justify-between items-center text-sm text-copper/70 mb-4">
            <span>
              {post.author} &bull; {post.date}
            </span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-copper/20 text-copper text-xs font-bold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-copper-light whitespace-pre-wrap">
            {post.content}
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-copper/20 flex justify-between items-center">
            <button
              onClick={onPrev}
              disabled={isPrevDisabled}
              className="flex items-center gap-2 text-copper disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:text-copper-light transition-colors"
              aria-label="Previous article"
            >
              <ChevronLeftIcon />
              <span>Sebelumnya</span>
            </button>
            <button
              onClick={onNext}
              disabled={isNextDisabled}
              className="flex items-center gap-2 text-copper disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:text-copper-light transition-colors"
              aria-label="Next article"
            >
              <span>Berikutnya</span>
              <ChevronRightIcon />
            </button>
          </div>

          {/* Related Articles */}
          <div className="mt-8 pt-6 border-t border-copper/20">
            <h3 className="text-2xl font-serif font-bold text-copper-light mb-4">
              Artikel Terkait
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  onClick={() => onSelectRelated(related)}
                  className="group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    onSelectRelated(related)
                  }
                >
                  <div className="overflow-hidden rounded-lg mb-2 aspect-square">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-sans text-sm text-copper group-hover:text-copper-light transition-colors line-clamp-2">
                    {related.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Pagination ---
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md transition-colors duration-200 enabled:hover:bg-copper/20 disabled:opacity-50 disabled:cursor-not-allowed text-copper"
        aria-label="Previous Page"
      >
        <ChevronLeftIcon />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`
                        w-10 h-10 rounded-md font-sans font-bold transition-all duration-200
                        ${
                          currentPage === number
                            ? "bg-copper text-black scale-110 shadow-glow-copper"
                            : "bg-brand-dark hover:bg-copper/20 text-copper"
                        }
                    `}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md transition-colors duration-200 enabled:hover:bg-copper/20 disabled:opacity-50 disabled:cursor-not-allowed text-copper"
        aria-label="Next Page"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

// --- Generic Modal ---
interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}
export const GenericModal: React.FC<GenericModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-lg",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-brand-dark w-full ${maxWidth} shadow-glow-copper overflow-hidden rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-copper-light transition-colors z-10"
          aria-label="Tutup"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};
