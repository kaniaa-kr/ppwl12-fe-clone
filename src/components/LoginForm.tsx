import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(false);

  const hasValue = email.length > 0;

  return (
    <div className="w-full max-w-md mx-auto px-4 md:px-0">
      {/* 1. Judul dibuat font-bold dengan ukuran tetap 32px */}
      <h1 className="text-[32px] font-bold text-white mb-2 leading-tight">
        Enter your info to sign in
      </h1>
      <p className="text-base text-netflix-light-gray mb-6">
        Or get started with a new account.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Email Input with Floating Label */}
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            /* 2. Warna background dan border input dipertegas (tanpa opacity /60 atau /40) */
            className="w-full bg-[#161616] border border-[#808080] rounded px-4 pt-6 pb-2 text-white text-base outline-none focus:border-white transition-colors peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`absolute left-4 transition-all duration-200 pointer-events-none text-netflix-light-gray
              ${isFocused || hasValue
                ? 'top-2 text-xs'
                : 'top-1/2 -translate-y-1/2 text-base'
              }`}
          >
            Email or mobile number
          </label>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          /* 3. Teks tombol dibuat sedikit lebih tebal (font-semibold) */
          className="w-full bg-netflix-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded text-base transition-colors"
        >
          Continue
        </button>
      </form>

      {/* Get Help Dropdown */}
      <div className="mt-6">
        <button
          onClick={() => setHelpExpanded(!helpExpanded)}
          className="flex items-center gap-2 text-white text-base hover:underline"
        >
          Get Help
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${helpExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {helpExpanded && (
          <div className="mt-3 pl-4 space-y-2 text-netflix-light-gray">
            <button type="button" className="block hover:underline text-left">I forgot my password</button>
            <button type="button" className="block hover:underline text-left">I can't sign in</button>
          </div>
        )}
      </div>

      {/* reCAPTCHA Notice */}
      <p className="mt-6 text-sm text-netflix-gray">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default LoginForm;