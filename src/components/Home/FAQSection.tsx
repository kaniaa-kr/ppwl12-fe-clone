import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What is Netflix?',
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want — all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: 'How much does Netflix cost?',
    answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $26.99/month (pre-tax).',
  },
  {
    id: 3,
    question: 'Where can I watch?',
    answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.',
  },
  {
    id: 4,
    question: 'How do I cancel?',
    answer: 'Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees — start or stop your account anytime.',
  },
  {
    id: 5,
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    id: 6,
    question: 'Is Netflix good for kids?',
    answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6 md:mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2 mb-12">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-[#2d2d2d] rounded overflow-hidden">
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between py-6 px-5 md:py-8 md:px-8 text-left
                         hover:bg-[#3d3d3d] transition-colors"
              >
                <span className="text-white text-lg md:text-xl lg:text-2xl font-medium pr-4">
                  {item.question}
                </span>
                {openId === item.id ? (
                  <X className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0 border-t border-black mt-2">
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 pb-10">
          <p className="text-white text-base md:text-lg mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row gap-2 w-full max-w-[600px] px-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black/60 border border-white/40 text-white placeholder-white/70 rounded px-4 py-4 text-base focus:outline-none focus:border-white"
          />
          <button
            type="button"
            className="bg-[#e50914] hover:bg-[#f40612] text-white font-medium text-lg md:text-xl px-6 py-4 rounded flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get Started <span className="text-2xl">›</span>
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
