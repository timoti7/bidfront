import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Telefon numarasına OTP gönderme işlemi yapılacak
        // Örnek: API'ye kullanıcının telefon numarasını gönder ve OTP kodu al
        try {
            // OTP gönderme işlemi başarılıysa, kullanıcıyı OTP doğrulama sayfasına yönlendir
        } catch (err) {
            setError('Kayıt başarısız. Lütfen telefon numaranızı kontrol edin.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="tel"
                    placeholder="Telefon Numarası"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Kayıt Ol</button>
            </form>
            <Link href="/login">
                <div>Giriş Yap</div>
            </Link>
        </div>
    );
}
