import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "./assets/logo.png";
import image0 from "../5981206581112148164_120.jpg";
import image1 from "../5981206581112148165_120.jpg";
import image2 from "../5981206581112148166_120.jpg";
import image3 from "../5981206581112148167_121.jpg";
import image4 from "../5981206581112148168_120.jpg";
import image5 from "../5981206581112148169_120.jpg";
import image6 from "../5981206581112148170_120.jpg";
import image7 from "../5981206581112148171_120.jpg";
import image8 from "../5981206581112148172_120.jpg";
import image9 from "../5981206581112148173_120.jpg";
import image10 from "../5981206581112148174_121.jpg";
import image11 from "../5981206581112148175_121.jpg";
import image12 from "../5981206581112148176_120.jpg";
import image13 from "../5981206581112148177_121.jpg";

const photos = [
  {
    src: image6,
    alt: "Pastor Adesewa speaking at a worship gathering",
  },
  {
    src: image1,
    alt: "Pastor Adesewa praying with a member of the congregation",
  },
  {
    src: image10,
    alt: "Pastor Adesewa sharing a message at a church service",
  },
  {
    src: image8,
    alt: "Pastor Adesewa speaking during a service in a blue ministry uniform",
  },
  {
    src: image5,
    alt: "Pastor Adesewa addressing the congregation",
  },
  {
    src: image0,
    alt: "Pastor Adesewa praying with a member of the congregation",
  },
  {
    src: image7,
    alt: "Pastor Adesewa leading worship in a colourful outfit",
  },
  {
    src: image9,
    alt: "Pastor Adesewa praying during a service",
  },
  {
    src: image11,
    alt: "Pastor Adesewa speaking at a ministry event",
  },
  {
    src: image2,
    alt: "Pastor Adesewa speaking at a lectern",
  },
  {
    src: image12,
    alt: "Pastor Adesewa leading a reflective moment during a service",
  },
  {
    src: image3,
    alt: "Pastor Adesewa ministering at a church service",
  },
];

const sermons = [
  {
    title: "NEXT LEVEL",
    id: "147cKaQVkTEIexqSpAMjfU",
    artwork:
      "https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fa0cfbb12ab9a9b128de0722f",
  },
  {
    title: "SUBMISSION",
    id: "7csXt0iwmtCGjBrnJylGQ9",
    artwork:
      "https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1fa1db455431958f38900083ba",
  },
];

const ministryFocus = [
  {
    title: "Campus outreaches",
    description: "Campus outreaches and student fellowships across Ekiti Zone.",
  },
  {
    title: "Leadership & service",
    description:
      "Leadership training programmes such as LTP, alongside worker inductions.",
  },
  {
    title: "Youth & gospel gatherings",
    description: "Involvement in youth and gospel events.",
  },
];

const navigation = [
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Messages", "#messages"],
  ["Contact", "#contact"],
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=No.%2016%2C%20Adeparusi%20Estates%2C%20Beside%20Adekaitan%20Filling%20Station%2C%20Opopogboro%20Road%2C%20Ado-Ekiti%2C%20Ekiti%20State";
const instagramUrl = "https://www.instagram.com/beautycrown3/";

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}
    >
      <div className="header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Pastor Adesewa Apelehin, home"
        >
          <img className="wordmark-logo" src={logo} alt="" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Connect <ArrowUpRight size={15} strokeWidth={1.7} />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>
              Connect with me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Lightbox({ index, setIndex, close }) {
  const reduceMotion = useReducedMotion();
  const photo = photos[index];
  const touchStartX = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight")
        setIndex((current) => (current + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setIndex((current) => (current - 1 + photos.length) % photos.length);
      if (event.key === "Tab") {
        const buttons = document.querySelectorAll(
          ".lightbox button:not([disabled])",
        );
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton.focus();
        } else if (![...buttons].includes(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? lastButton : firstButton).focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected)
        previousFocus.focus();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, setIndex]);

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Ministry photograph viewer"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button
        ref={closeButtonRef}
        className="lightbox-close"
        onClick={close}
        aria-label="Close image viewer"
      >
        <X />
      </button>
      <button
        className="lightbox-arrow lightbox-prev"
        onClick={() =>
          setIndex((current) => (current - 1 + photos.length) % photos.length)
        }
        aria-label="Previous image"
      >
        <ArrowLeft />
      </button>
      <motion.img
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        className="lightbox-image"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const swipeDistance =
            event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(swipeDistance) < 48) return;
          setIndex(
            (current) =>
              (current + (swipeDistance < 0 ? 1 : -1) + photos.length) %
              photos.length,
          );
        }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.22 }}
      />
      <button
        className="lightbox-arrow lightbox-next"
        onClick={() => setIndex((current) => (current + 1) % photos.length)}
        aria-label="Next image"
      >
        <ArrowRight />
      </button>
      <p className="lightbox-count" aria-live="polite">
        {index + 1} / {photos.length}
      </p>
    </motion.div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const currentYear = new Date().getFullYear();
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <motion.div
            className="hero-image"
            style={{ backgroundImage: `url("${image13}")` }}
            initial={reduceMotion ? false : { scale: 1.055 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 2.1, ease: "easeOut" }}
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <motion.p
              className="eyebrow hero-eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              A MINISTRY ROOTED IN THE WORD
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34 }}
            >
              Pastor Adesewa
              <br />
              <em>Apelehin</em>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
            >
              A life dedicated to God&apos;s purpose
              <br className="desktop-break" /> and the ministry of His Word.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
            >
              <a className="button button-light" href="#about">
                Explore the ministry <ArrowRight size={16} />
              </a>
              <a className="button button-outline" href="#messages">
                Listen to messages
              </a>
            </motion.div>
          </div>
          <a
            className="scroll-cue"
            href="#about"
            aria-label="Scroll to about section"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={15} />
          </a>
          <div className="hero-index">
            <span>01</span>
            <i /> MINISTRY &amp; WORD
          </div>
        </section>

        <section
          className="about section-pad"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-grid">
            <Reveal className="about-photo-wrap">
              <div className="about-photo-frame">
                <img
                  src={image4}
                  alt="Pastor Adesewa speaking at a ministry gathering"
                  loading="lazy"
                />
                <div className="photo-caption">
                  <span>MINISTRY PORTRAIT</span>
                  <span>FEATURED</span>
                </div>
              </div>
              <div className="about-photo-accent" aria-hidden="true" />
              <span className="about-side-note">SERVING WITH PURPOSE</span>
            </Reveal>
            <Reveal className="about-copy" delay={0.12}>
              <p className="eyebrow">ABOUT THE MINISTRY</p>
              <h2 id="about-title">
                Personal
                <br />
                <em>Ministry.</em>
              </h2>
              <div className="gold-rule" />
              <div className="personal-ministry">
                <p className="about-intro">
                  Pastor Adesewa Apelehin, also known as Apelehin Adesewa
                  Adejare, is a Nigerian Christian leader and minister. She
                  serves as the Zonal Coordinator for the Christian Campus
                  Fellowship / Campus Fellowship (CRM) in Ekiti Zone.
                </p>
                <div className="ministry-detail">
                  <h3>Zonal Leadership</h3>
                  <p>
                    She provides spiritual covering and zonal coordination for
                    CRM activities across Ekiti State. Her responsibilities
                    include overseeing programmes, congresses, and student
                    fellowships across chapters such as RCF Ikole, RCF Oye, RCF
                    EKSU RCF Ido, Federal Polytechnic Ado-Ekiti and many other
                    chapters.
                  </p>
                </div>
                <div className="ministry-detail">
                  <h3>Preaching Themes</h3>
                  <p>
                    Her teaching themes include discipline, faithfulness in
                    small responsibilities and raising a new generation of
                    spiritual leaders.
                  </p>
                </div>
              </div>
              <a className="text-link" href="#messages">
                Discover the messages <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
          <div className="ministry-focus">
            <Reveal className="ministry-focus-heading">
              <p className="eyebrow">MINISTRY IN FOCUS</p>
              <h3>
                Serving across <em>generations.</em>
              </h3>
            </Reveal>
            <div className="ministry-focus-grid">
              {ministryFocus.map((item, index) => (
                <Reveal
                  className="focus-card"
                  key={item.title}
                  delay={0.05 + index * 0.07}
                >
                  <span className="focus-card-number">0{index + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="gallery section-pad"
          id="gallery"
          aria-labelledby="gallery-title"
        >
          <div className="section-heading gallery-heading">
            <Reveal>
              <p className="eyebrow">MINISTRY MOMENTS</p>
              <h2 id="gallery-title">
                A glimpse of the <em>journey.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-description">
                Moments of ministry, prayer and service, captured along the way.
              </p>
            </Reveal>
          </div>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <Reveal
                key={photo.src}
                className="gallery-item"
                delay={(index % 4) * 0.07}
              >
                <button
                  type="button"
                  className="gallery-button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`View image ${index + 1}: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-accent" aria-hidden="true" />
                  <span className="gallery-expand" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="messages section-pad"
          id="messages"
          aria-labelledby="messages-title"
        >
          <div className="messages-top">
            <Reveal>
              <p className="eyebrow eyebrow-light">LISTEN &amp; REFLECT</p>
              <h2 id="messages-title">
                Messages for your
                <br />
                <em>spiritual journey.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="messages-description">
                Take time to listen, reflect on the Word, and grow through these
                selected messages.
              </p>
            </Reveal>
          </div>
          <div className="sermon-list">
            {sermons.map((sermon, index) => (
              <Reveal className="sermon" key={sermon.id} delay={index * 0.12}>
                <a
                  className="sermon-artwork"
                  href={`https://open.spotify.com/episode/${sermon.id}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${sermon.title} on Spotify`}
                >
                  <img
                    src={sermon.artwork}
                    alt={`${sermon.title} episode cover artwork`}
                    loading="lazy"
                  />
                  <span className="sermon-number">0{index + 1}</span>
                  <span className="sermon-spotify">
                    OPEN IN SPOTIFY <ArrowUpRight size={15} />
                  </span>
                </a>
                <div className="sermon-info">
                  <p className="eyebrow eyebrow-light">
                    SPOTIFY MESSAGE 0{index + 1}
                  </p>
                  <h3>{sermon.title}</h3>
                  <a
                    className="sermon-listen"
                    href={`https://open.spotify.com/episode/${sermon.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen on Spotify <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="everyday section-pad"
          aria-labelledby="everyday-title"
        >
          <div className="everyday-inner">
            <Reveal className="everyday-heading">
              <p className="eyebrow">FOR THE WEEK AHEAD</p>
              <h2 id="everyday-title">
                Faith for <em>everyday life.</em>
              </h2>
              <p className="everyday-intro">
                A moment to pause, reflect on the messages, and carry a
                meaningful thought into the week ahead.
              </p>
            </Reveal>
            <div className="everyday-list">
              <Reveal className="everyday-item" delay={0.06}>
                <span>01</span>
                <div>
                  <h3>Be faithful in little</h3>
                  <p>
                    Give care and attention to the responsibilities already in
                    front of you.
                  </p>
                </div>
              </Reveal>
              <Reveal className="everyday-item" delay={0.13}>
                <span>02</span>
                <div>
                  <h3>Make room for discipline</h3>
                  <p>
                    Let steady, thoughtful choices shape the way you learn,
                    serve, and grow.
                  </p>
                </div>
              </Reveal>
              <Reveal className="everyday-item" delay={0.2}>
                <span>03</span>
                <div>
                  <h3>Encourage the next generation</h3>
                  <p>
                    Share what you have learned and help others find room to
                    grow into leadership.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-heading">
            <Reveal>
              <p className="eyebrow">STAY CONNECTED</p>
              <h2 id="contact-title">
                Let&apos;s <em>connect.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="contact-intro">
                For ministry enquiries and connection, visit the office or
                follow along on Instagram.
              </p>
            </Reveal>
          </div>
          <div className="contact-details">
            <Reveal className="contact-card">
              <span className="contact-number">01</span>
              <p className="eyebrow">VISIT THE OFFICE</p>
              <address>
                No. 16, Adeparusi Estates,
                <br />
                Beside Adekaitan Filling Station,
                <br />
                Opopogboro Road, Ado-Ekiti,
                <br />
                Ekiti State.
              </address>
              <a
                className="text-link"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get directions <ArrowUpRight size={15} />
              </a>
            </Reveal>
            <Reveal className="contact-card" delay={0.12}>
              <span className="contact-number">02</span>
              <p className="eyebrow">FOLLOW ON INSTAGRAM</p>
              <a
                className="instagram-handle"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={22} strokeWidth={1.5} /> @Beautycrown3
              </a>
              <p className="instagram-copy">
                Follow the ministry channel for updates and moments from the
                journey.
              </p>
              <a
                className="text-link"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Instagram <ArrowUpRight size={15} />
              </a>
            </Reveal>
            <Reveal className="contact-note" delay={0.2}>
              <span className="contact-note-mark">“</span>
              <p>
                Listen. Reflect.
                <br />
                Stay connected.
              </p>
              <span className="contact-note-caption">
                PASTOR ADESEWA APELEHIN
              </span>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="wordmark footer-wordmark" href="#home">
            <img
              className="wordmark-logo"
              src={logo}
              alt="Pastor Adesewa Apelehin"
            />
          </a>
          <p>Ministry, messages &amp; moments.</p>
          <a
            className="footer-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Pastor Adesewa Apelehin</span>
          <nav aria-label="Footer navigation">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            setIndex={setLightboxIndex}
            close={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
