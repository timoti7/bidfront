import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: OTP ile giriş işlemi yapılacak
        // Örnek: API'ye kullanıcının telefon numarasını ve OTP kodunu gönder
        try {
            // İşlem başarılıysa, kullanıcıyı ana sayfaya yönlendir
        } catch (err) {
            setError('Giriş başarısız. Lütfen telefon numaranızı ve OTP kodunu kontrol edin.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Giriş Yap</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="tel"
                    placeholder="Telefon Numarası"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="OTP Kodu"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Giriş Yap</button>
            </form>
            <Link href="/register">
                <div>Hesap Oluştur</div>
            </Link>
        </div>
    );
}
