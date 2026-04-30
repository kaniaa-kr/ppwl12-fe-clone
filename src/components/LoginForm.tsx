import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(true); // Set true agar kita bisa lihat perubahannya langsung

  const hasValue = email.length > 0;

  return (
    <div style={{ 
      maxWidth: '440px', 
      margin: '0 auto', 
      width: '100%', 
      textAlign: 'left',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* 1. Judul (Font 32px, Putih, Bold) */}
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        color: 'white', 
        marginBottom: '10px',
        marginTop: '0'
      }}>
        Enter your info to sign in
      </h1>

      {/* 2. Subtitle (Font 16px, Abu-abu terang) */}
      <p style={{ 
        fontSize: '16px', 
        color: '#b3b3b3', 
        marginBottom: '28px',
        marginTop: '0'
      }}>
        Or get started with a new account.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* 3. Container Input (Tinggi 56px, BG Transparan Gelap) */}
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              width: '100%',
              height: '56px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid #8c8c8c',
              borderRadius: '4px',
              color: 'white',
              fontSize: '16px',
              padding: '24px 16px 8px 16px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          <label style={{
            position: 'absolute',
            left: '16px',
            color: '#8c8c8c',
            transition: 'all 0.1s ease',
            pointerEvents: 'none',
            fontSize: (isFocused || hasValue) ? '12px' : '16px',
            top: (isFocused || hasValue) ? '8px' : '50%',
            transform: (isFocused || hasValue) ? 'none' : 'translateY(-50%)',
          }}>
            Email or mobile number
          </label>
        </div>

        {/* 4. Tombol Continue (Warna Merah Netflix, Font Bold) */}
        <button
          type="submit"
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#E50914',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '24px'
          }}
        >
          Continue
        </button>
      </form>

      {/* 5. Bagian Get Help (Tanpa Underline di teks utamanya) */}
      <div style={{ marginTop: '30px' }}>
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
            padding: '0',
            textDecoration: 'none' // TEKS UTAMA TANPA UNDERLINE
          }}
        >
          Get Help
          <svg
            style={{ 
              width: '16px', 
              height: '16px', 
              transition: 'transform 0.2s', 
              transform: helpExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'white'
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* 6. Link Opsi (Dengan Underline & Warna Putih) */}
        {helpExpanded && (
          <div style={{ 
            marginTop: '16px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px'
          }}>
            <a href="#" style={{ 
              color: 'white', 
              textDecoration: 'underline', // PAKAI UNDERLINE
              fontSize: '15px' 
            }}>
              Forgot email or mobile number?
            </a>
            <a href="#" style={{ 
              color: 'white', 
              textDecoration: 'underline', // PAKAI UNDERLINE
              fontSize: '15px' 
            }}>
              Learn more about sign-in
            </a>
          </div>
        )}
      </div>

      {/* 7. Footer Notice (Teks sangat kecil & abu-abu) */}
      <p style={{ 
        marginTop: '35px', 
        fontSize: '13px', 
        color: '#8c8c8c', 
        lineHeight: '1.4' 
      }}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default LoginForm;