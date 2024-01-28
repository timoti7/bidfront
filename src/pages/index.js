import Link from 'next/link';

export default function Home() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Ev Sahibi Olmanın Yeni Yolu</h1>
                <p>En iyi fiyatlarla emlak ve taşıt alım satımı yapın.</p>
                <div className="cta-buttons">
                    <Link href="/emlak">
                        <div className="cta-button">Emlak İlanları</div>
                    </Link>
                    <Link href="/tasit">
                        <div className="cta-button">Taşıt İlanları</div>
                    </Link>
                </div>
            </div>
            <div className="auth-links">
                <Link href="/login">
                    <div className="auth-link">Giriş Yap</div>
                </Link>
                <span className="auth-divider">|</span>
                <Link href="/register">
                    <div className="auth-link">Kayıt Ol</div>
                </Link>
            </div>
        </div>
    );
}
