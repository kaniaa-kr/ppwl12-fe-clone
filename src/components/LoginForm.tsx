import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(false);

  const hasValue = email.length > 0;

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto', width: '100%', padding: '0 16px' }}>
      
      {/* 1. Judul dengan Jarak Bawah yang Tegas */}
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: 'bold', 
        color: 'white', 
        marginBottom: '12px', 
        lineHeight: '1.1',
        letterSpacing: '-1px'
      }}>
        Enter your info to sign in
      </h1>

      {/* 2. Subtitle dengan Jarak ke Form */}
      <p style={{ fontSize: '16px', color: '#b3b3b3', marginBottom: '28px' }}>
        Or get started with a new account.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Container Input */}
        <div style={{ position: 'relative', marginBottom: '16px', width: '100%' }}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // Style Input: Tinggi 56px agar proporsional
            style={{
              width: '100%',
              height: '56px',
              backgroundColor: '#161616',
              border: `1px solid ${isFocused ? 'white' : '#808080'}`,
              borderRadius: '4px',
              color: 'white',
              fontSize: '16px',
              padding: '20px 16px 8px 16px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            placeholder=" "
          />
          {/* Label Melayang (Floating Label) */}
          <label
            htmlFor="email"
            style={{
              position: 'absolute',
              left: '16px',
              transition: 'all 0.2s ease',
              pointerEvents: 'none',
              color: '#8c8c8c',
              fontSize: (isFocused || hasValue) ? '12px' : '16px',
              top: (isFocused || hasValue) ? '8px' : '50%',
              transform: (isFocused || hasValue) ? 'none' : 'translateY(-50%)',
              fontWeight: (isFocused || hasValue) ? '600' : 'normal'
            }}
          >
            Email or mobile number
          </label>
        </div>

        {/* 3. Tombol Continue dengan Warna Merah Netflix yang Kuat */}
        <button
          type="submit"
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#E50914',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '8px'
          }}
        >
          Continue
        </button>
      </form>

      {/* 4. Get Help Section */}
      <div style={{ marginTop: '24px' }}>
        <button
          onClick={() => setHelpExpanded(!helpExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '4px 0'
          }}
        >
          Get Help
          <svg
            style={{ 
              width: '16px', 
              height: '16px', 
              transition: 'transform 0.2s', 
              transform: helpExpanded ? 'rotate(180deg)' : 'rotate(0deg)' 
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {helpExpanded && (
          <div style={{ marginTop: '12px', paddingLeft: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{ background: 'none', border: 'none', color: '#b3b3b3', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>I forgot my password</button>
            <button style={{ background: 'none', border: 'none', color: '#b3b3b3', textAlign: 'left', cursor: 'pointer', fontSize: '14px' }}>I can't sign in</button>
          </div>
        )}
      </div>

      {/* 5. reCAPTCHA Notice */}
      <p style={{ 
        marginTop: '32px', 
        fontSize: '13px', 
        color: '#737373', 
        lineHeight: '1.4' 
      }}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default LoginForm;