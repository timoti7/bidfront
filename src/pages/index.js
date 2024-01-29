import Link from 'next/link';
import { useEffect, useState } from 'react';
import EnTepe from './index-comps/en-tepe';
import UstBanner from './index-comps/ust-banner';
import BastakiAlan from './index-comps/bastaki-alan';
import Footer from './index-comps/footer';
import EnAlt from './index-comps/en-alt';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userToken, setUserToken] = useState(''); // Token için state

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        const name = localStorage.getItem('userName'); // Kullanıcı adını localStorage'dan al
        const phone = localStorage.getItem('userPhone'); // Kullanıcı telefon numarasını localStorage'dan al
        if (token) {
            setIsLoggedIn(true);
            setUserName(name);
            setUserPhone(phone);
            setUserToken(token); // Token'ı state'e kaydet
        }
    }, []);

    return (
        <div className="hero">
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
            <div className="auth-links">
                {isLoggedIn ? (
                    <>
                        <span>{userName} ({userPhone})</span>
                        <span>Token: {userToken}</span> {/* Token'ı ekranda göster */}
                        <Link href="/logout">
                            <div className="auth-link">Çıkış Yap</div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <div className="auth-link">Giriş Yap</div>
                        </Link>
                        <span className="auth-divider">|</span>
                        <Link href="/register">
                            <div className="auth-link">Kayıt Ol</div>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
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
            <UstBanner />
            <BastakiAlan />
            {/* Burada mevcut anasayfa içeriğinizi ekleyebilirsiniz */}
            <div className="hero">
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
                <div className="auth-links">
                    {isLoggedIn ? (
                        <>
                            <span>{userName} ({userPhone})</span>
                            <span>Token: {userToken}</span>
                            <Link href="/logout">
                                <div className="auth-link">Çıkış Yap</div>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <div className="auth-link">Giriş Yap</div>
                            </Link>
                            <span className="auth-divider">|</span>
                            <Link href="/register">
                                <div className="auth-link">Kayıt Ol</div>
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
