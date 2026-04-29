import { useState, useEffect, useRef } from "react";

export default function Page1() {

  const reasons = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: "/images1/netflix-tv.jpg",
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favorites easily and always have something to watch.",
      image: "/images1/netflix-download.jpg"
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: "/images1/netflix-watch.jpg",
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      image: "/images1/netflix-profiles.jpg",
    },
  ];

  return (
    <div className="landing-page">

      {/* HEADER */}
      <header>
        <div className="container">

          <nav className="main-nav">
            <img src="/images1/netflix-logo.png" alt="Netflix" className="nav-logo" />

            <ul className="main-nav-menu">
              <li className="nav-li">
                <select className="language-selector">
                  <option>English</option>
                  <option>Espanol</option>
                </select>
              </li>

              <li className="nav-li">
                <button className="sign-in-btn">Sign In</button>
              </li>
            </ul>
          </nav>

          <div className="header-showcase-text-container">
            <h1>Unlimited movies, TV shows, and more</h1>

            <p className="showcase-p">
              Starts at $7.99. Cancel anytime.
            </p>

            <p className="showcase-p mt-1">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <form className="email-cta-form">
              <input
                type="email"
                className="email-input"
                placeholder="Email address"
                required
              />
              <button className="get-started-btn">Get Started ➜</button>
            </form>
          </div>

        </div>
      </header>

      <div className="red-divider" />

      {/* MAIN */}
      <main>

        {/* POPCORN */}
        <section className="popcorn-ad">
          <div className="container">
            <div className="popcorn-banner-container">

              <div className="popcorn-img-container">
                <img src="/images1/popcorn-nobg.png" alt="popcorn" />
              </div>

              <div className="banner-content-container">
                <div className="banner-text-container">
                  <h2>The Netflix you love for just $7.99.</h2>
                  <p>Get our most affordable, ad-supported plan.</p>
                </div>

                <button className="learn-more-btn">Learn More</button>
              </div>

            </div>
          </div>
        </section>

        {/* TRENDING */}
        <section className="trending-now">
          <div className="container">
            <h2 className="section-header">Trending Now</h2>

            <div className="movie-container">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/images1/netflix-movie-${i}.jpg`}
                  alt="movie"
                  className="netflix-movie"
                />
              ))}
            </div>
          </div>

        </section>

        <section className="more-reasons">
          <div className="container">
            <h2 className="section-header">More Reasons to Join</h2>

            <div className="reasons-cards-container">
              {reasons.map((reason) => (
                <div className="reasons-card" key={reason.title}>
                  <div>
                    <h3 className="reason-header">{reason.title}</h3>
                    <p className="reason-p">{reason.desc}</p>
                  </div>

                  <div className="reason-img-container">
                    <img src={reason.image} alt={reason.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faqs">
          <div className="container">
            <h2 className="section-header">Frequently Asked Questions</h2>

            {[
              "What is Netflix?",
              "How much does Netflix cost?",
              "Where can I watch?",
              "How do I cancel?",
              "What can I watch on Netflix?",
              "Is Netflix good for kids?"
            ].map((q, i) => (
              <div key={i} className="faq">
                <h3>{q}</h3>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="bottom-cta">
          <div className="container bottom-cta-container">

            <p className="bottom-cta-p">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <form className="bottom-email-form">
              <input
                type="email"
                className="bottom-email-input"
                placeholder="Email address"
              />

              <button className="bottom-get-started-btn">
                Get Started <span>›</span>
              </button>
            </form>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>Questions? Call 1-866-952-4456</p>
        </div>
      </footer>

    </div>
  );
}