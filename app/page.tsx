const phone = "9035007196";

const wa = `https://wa.me/91${phone}?text=${encodeURIComponent(
  "Namaste Sagar Furniture, mujhe furniture ke liye quotation chahiye."
)}`;

const map =
  "https://www.google.com/maps/search/?api=1&query=FWCV%2B7GW%2C+Duba%2C+Jharkhand";

const products = [
  {
    name: "Custom Beds",
    hi: "कस्टम बेड",
    text: "Made to fit your room, style and budget.",
    image: "photo-1505693416388-ac5ce068fe85",
  },
  {
    name: "Sofas & Seating",
    hi: "सोफा और सीटिंग",
    text: "Comfortable designs for everyday living.",
    image: "photo-1555041469-a586c61ea9bc",
  },
  {
    name: "Wardrobes",
    hi: "अलमारी",
    text: "Smart storage with a clean finish.",
    image: "photo-1631676787817-5b2f6b9b2b6a",
  },
  {
    name: "Doors & Windows",
    hi: "दरवाजे और खिड़कियाँ",
    text: "Strong, practical and carefully crafted.",
    image: "photo-1511818966892-d7d671e672a2",
  },
  {
    name: "TV Units",
    hi: "टीवी यूनिट",
    text: "Functional designs that elevate your space.",
    image: "photo-1600210492486-724fe5c67fb0",
  },
  {
    name: "Modular Kitchen",
    hi: "मॉड्यूलर किचन",
    text: "Organised kitchen storage made for you.",
    image: "photo-1600585154340-be6161a56a0c",
  },
];

const benefits = [
  {
    icon: "✳",
    title: "Made to Order",
    hindi: "आपकी जरूरत के अनुसार",
    text: "Furniture planned around your room, requirements and budget.",
  },
  {
    icon: "⌂",
    title: "Practical Designs",
    hindi: "सुंदर और उपयोगी डिजाइन",
    text: "Designs that balance appearance, comfort and everyday use.",
  },
  {
    icon: "✦",
    title: "Careful Finishing",
    hindi: "फिनिशिंग पर ध्यान",
    text: "Attention to the details that make furniture feel complete.",
  },
  {
    icon: "♡",
    title: "Personal Service",
    hindi: "सीधा संपर्क",
    text: "Discuss your design, measurements and requirements directly.",
  },
];

export default function Home() {
  return (
    <main>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Crafted with care · Duba, Jharkhand</span>
          <span>
            Call us: <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Sagar Furniture Home">
            <span className="brand-mark">SF</span>
            <span>
              SAGAR <b>FURNITURE</b>
              <small>MADE FOR YOUR HOME</small>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#why-us">Why Us</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="button button-small"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      </header>

      {/* 1. HOME */}
      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <p className="eyebrow light">
            THOUGHTFULLY MADE. BUILT TO LAST.
          </p>

          <h1>
            Furniture that
            <br />
            <em>feels like home.</em>
          </h1>

          <p className="hero-copy">
            Beautiful, practical furniture crafted around your space, your
            taste and your everyday life.
          </p>

          <div className="hero-actions">
            <a className="button" href="#services">
              Explore Our Work <span>↗</span>
            </a>

            <a
              className="text-link"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Get a free quote <span>→</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <span>Custom-made furniture · Personal service</span>
          </div>
        </div>

        <div className="hero-badge" aria-hidden="true">
          <span>MADE</span>
          <strong>WITH</strong>
          <span>CARE ✳</span>
        </div>
      </section>

      {/* 2. SERVICES / FURNITURE CATALOGUE */}
      <section className="section container" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE MAKE</p>
            <h2>
              Made for your
              <br />
              <em>kind of living.</em>
            </h2>
          </div>

          <p className="section-intro">
            From one special piece to a complete room, tell us what you have
            in mind. We’ll help you plan furniture that works for your home.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => {
            const productWa = `https://wa.me/91${phone}?text=${encodeURIComponent(
              `Namaste Sagar Furniture, mujhe ${product.name} banwana hai. Kripya design aur quotation batayein.`
            )}`;

            return (
              <article className="product-card" key={product.name}>
                <div
                  className="product-image"
                  role="img"
                  aria-label={product.name}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=900&q=80)`,
                  }}
                >
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <a
                    className="round-arrow"
                    href={productWa}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${product.name}`}
                  >
                    ↗
                  </a>
                </div>

                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <span>{product.hi}</span>
                  </div>

                  <p>{product.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="sample-note">
          Furniture images are for design inspiration. Final materials,
          dimensions and pricing can be discussed directly.
        </p>
      </section>

      {/* 3. ABOUT US */}
      <section className="about-band" id="about">
        <div className="container about-grid">
          <div
            className="about-image"
            role="img"
            aria-label="Furniture and interior design inspiration"
          >
            <div className="image-caption">
              GOOD DESIGN. HONEST CRAFT.
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT US</p>

            <h2>
              Your ideas.
              <br />
              <em>Our craftsmanship.</em>
            </h2>

            <p>
              At Sagar Furniture, we believe furniture should look good, feel
              right and fit your everyday life. We work with you to understand
              your space, preferred design and budget before getting started.
            </p>

            <p>
              Whether you need a bed, wardrobe, sofa, door or a custom piece,
              let’s discuss what would work best for your home.
            </p>

            <a
              className="under-link"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Let’s discuss your idea <span>→</span>
            </a>

            <div className="signature">
              Sagar Furniture
              <span>— Crafted for your home</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section container" id="why-us">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHY SAGAR FURNITURE</p>
            <h2>
              Made around
              <br />
              <em>your needs.</em>
            </h2>
          </div>

          <p className="section-intro">
            Every home is different. We focus on understanding your
            requirements before discussing a furniture design.
          </p>
        </div>

        <div className="trust-grid">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <span className="trust-icon" aria-hidden="true">
                {benefit.icon}
              </span>

              <p>
                <b>{benefit.title}</b>
                <small>{benefit.hindi}</small>
                <small>{benefit.text}</small>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="section gallery-section container" id="gallery">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DESIGN INSPIRATION</p>
            <h2>
              A few ideas to
              <br />
              <em>get you started.</em>
            </h2>
          </div>

          <p className="section-intro">
            Explore these sample styles and tell us what you like. Final
            design, material and pricing can be discussed directly.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-tile tile-one">
            <span>01 / LIVING</span>
            <b>Comfort, naturally.</b>
          </div>

          <div className="gallery-tile tile-two">
            <span>02 / BEDROOM</span>
            <b>Your personal retreat.</b>
          </div>

          <div className="gallery-tile tile-three">
            <span>03 / DETAILS</span>
            <b>Made with intention.</b>
          </div>
        </div>

        <p className="sample-note">
          Note: These are sample inspiration photos, not verified examples
          of completed Sagar Furniture projects.
        </p>
      </section>

      {/* 6. GET A QUOTE */}
      <section className="quote-band" id="quote">
        <div className="container quote-inner">
          <div>
            <p className="eyebrow light">HAVE AN IDEA?</p>

            <h2>
              Let’s make it
              <br />
              <em>real together.</em>
            </h2>

            <p>
              Share a photo, a measurement or just an idea. We’ll discuss
              your requirements and the next step.
            </p>
          </div>

          <a
            className="button button-light"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Start a WhatsApp Enquiry <span>↗</span>
          </a>
        </div>
      </section>

      {/* 7. CONTACT */}
      <section className="contact-section section container" id="contact">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              Let’s talk
              <br />
              <em>furniture.</em>
            </h2>
          </div>

          <p className="section-intro">
            Have a question or ready to plan your furniture? Contact us
            directly for details and a personalised quote.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              ☎
            </span>

            <small>CALL US</small>

            <a href={`tel:${phone}`}>{phone}</a>

            <p>Speak to us about your requirements.</p>

            <a className="under-link" href={`tel:${phone}`}>
              Call now →
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              ◉
            </span>

            <small>WHATSAPP</small>

            <a href={wa} target="_blank" rel="noreferrer">
              Send an enquiry
            </a>

            <p>Share your design, photo or measurements.</p>

            <a
              className="under-link"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp →
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              ⌖
            </span>

            <small>OUR LOCATION</small>

            <b>Duba, Jharkhand</b>

            <p>
              PIN Code: 814141
              <br />
              Plus Code: FWCV+7GW
            </p>

            <a
              className="under-link"
              href={map}
              target="_blank"
              rel="noreferrer"
            >
              Open Google Maps →
            </a>
          </div>
        </div>

        <div className="map-frame">
          <iframe
            title="Sagar Furniture location map"
            src="https://maps.google.com/maps?q=FWCV%2B7GW%20Duba%20Jharkhand&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            className="map-open"
            href={map}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="footer">
        <div className="container footer-top">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark">SF</span>

            <span>
              SAGAR <b>FURNITURE</b>
              <small>MADE FOR YOUR HOME</small>
            </span>
          </a>

          <p>Furniture made with care, for the way you live.</p>

          <a
            className="button"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Let’s Talk ↗
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Sagar Furniture. All rights reserved.
          </span>

          <span>Duba, Jharkhand · PIN 814141</span>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="floating-wa"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Sagar Furniture on WhatsApp"
      >
        ☏ <span>WhatsApp</span>
      </a>
    </main>
  );
                                                }
