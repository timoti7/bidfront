import Link from 'next/link';
import { useEffect, useState } from 'react';
import EnTepe from '../index-comps/en-tepe';
import LogoAlani from '../index-comps/logo-alani';
import Menu from '../index-comps/menu';
import UstBanner from '../index-comps/ust-banner';
import BastakiAlan from '../index-comps/bastaki-alan';
import Footer from '../index-comps/footer';
import EnAlt from '../index-comps/en-alt';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userToken, setUserToken] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        const name = localStorage.getItem('userName');
        const phone = localStorage.getItem('userPhone');
        if (token) {
            setIsLoggedIn(true);
            setUserName(name);
            setUserPhone(phone);
            setUserToken(token);
        }
    }, []);

    return (
        <div>
            <EnTepe />
            <LogoAlani />
            <Menu />
            <UstBanner />
            <BastakiAlan />
            {/* Burada mevcut anasayfa içeriğinizi ekleyebilirsiniz */}
            <div className="hero">
                <h1>Ev Sahibi Olmanın Yeni Yolu</h1>
                <p>En iyi fiyatlarla emlak ve taşıt alım satımı yapın.</p>
                <div className="cta-buttons">
                    <Link href="/emlak">
                        <a className="cta-button">Emlak İlanları</a>
                    </Link>
                    <Link href="/tasit">
                        <a className="cta-button">Taşıt İlanları</a>
                    </Link>
                </div>
                <div className="auth-links">
                    {isLoggedIn ? (
                        <>
                            <span>{userName} ({userPhone})</span>
                            <span>Token: {userToken}</span>
                            <Link href="/logout">
                                <a className="auth-link">Çıkış Yap</a>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="auth-link">Giriş Yap</a>
                            </Link>
                            <span className="auth-divider">|</span>
                            <Link href="/register">
                                <a className="auth-link">Kayıt Ol</a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <Footer />
            <EnAlt />
        </div>
    );
}
