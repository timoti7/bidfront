import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('userToken');
        router.push('/');
    }, []);

    return (
        <div>Çıkış yapılıyor...</div>
    );
}
