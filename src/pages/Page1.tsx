import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

export default function Page1() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main 
                // 1. Tambahkan "items-center" di sini dan hapus "pt-16 md:pt-24"
                className="flex-1 flex justify-center items-center px-4 py-12"
                style={{
                    /* Gradien digelapkan (warna maroon pekat) dan pudar di titik 40% */
                    background: 'linear-gradient(180deg, rgba(35, 8, 12, 1) 0%, rgba(0, 0, 0, 1) 40%)',
                }}
            >
                <LoginForm />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}