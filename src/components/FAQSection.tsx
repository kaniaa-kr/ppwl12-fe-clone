import { useState } from "react";

const faqs = [
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000/month.",
  },
  {
    question: "Where can I watch?",
    answer:`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: "#000", padding: "60px 0" }}>
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: 800,
            marginBottom: "16px",
          }}
        >
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} style={{ marginBottom: "8px" }}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  width: "100%",
                  minHeight: "76px",
                  background: "#2d2d2d",
                  color: "#fff",
                  border: "none",
                  padding: "0 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "24px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span>{faq.question}</span>

                <span
                  style={{
                    position: "relative",
                    width: "28px",
                    height: "28px",
                    display: "inline-block",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "#fff",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      width: "2px",
                      height: "100%",
                      background: "#fff",
                      transform: "translateX(-50%)",
                    }}
                  />
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    background: "#2d2d2d",
                    color: "#fff",
                    padding: "24px 28px",
                    fontSize: "22px",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.answer.split("\n\n").map((text, i) => (
                    <p
                      key={i}
                      style={{
                        marginBottom: i === faq.answer.split("\n\n").length - 1 ? 0 : "20px",
                      }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
