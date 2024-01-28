// pages/emlak/[id].js
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function EmlakDetay() {
    const [emlak, setEmlak] = useState(null);
    const [teklif, setTeklif] = useState('');
    const [teklifler, setTeklifler] = useState([]);
    const ws = useRef(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            // Emlak bilgilerini ve mevcut teklifleri yükle
            fetch(`http://localhost:8000/api/emlak/${id}/`)
                .then(response => response.json())
                .then(data => {
                    setEmlak(data);
                    return fetch(`http://localhost:8000/api/emlak/${id}/teklifler/`, {
                        headers: {
                            'Authorization': `Token ${localStorage.getItem('userToken')}`
                        }
                    });
                })
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) { // Gelen verinin dizi olup olmadığını kontrol et
                        setTeklifler(data);
                    }
                })
                .catch(error => console.error('Hata:', error));

            // WebSocket bağlantısını kur
            ws.current = new WebSocket(`ws://localhost:8000/ws/auction/${id}/`);
            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setTeklifler(prevTeklifler => [...prevTeklifler, data.message]);
            };
            ws.current.onopen = () => console.log('WebSocket açıldı');
            ws.current.onerror = (event) => {
                console.error('WebSocket error:', event);
            };
            ws.current.onclose = () => console.log('WebSocket kapandı');

            return () => {
                if (ws.current) {
                    ws.current.close();
                }
            };
        }
    }, [id]);

    const handleTeklifGonder = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            const teklifData = { message: teklif };
            ws.current.send(JSON.stringify(teklifData));
    
            const userToken = localStorage.getItem('userToken');
            if (!userToken) {
                console.error('Kullanıcı giriş yapmalı');
                return;
            }
    
            fetch(`http://localhost:8000/api/emlak/${id}/teklifler/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userToken}`
                },
                body: JSON.stringify({ amount: teklif }),
            })
            .then(response => response.json())
            .then(data => {
                // Başarılı teklif işlemi sonrasında yapılacak işlemler
            })
            .catch(error => console.error('Teklif gönderme hatası:', error));
    
            setTeklif('');
        }
    };

    return (
        <div>
            <h1>Emlak Detayı</h1>
            {emlak && (
                <>
                    <p>ID: {emlak.id}</p>
                    <p>Konum: {emlak.location}</p>
                </>
            )}
            <div>
                <input
                    type="number"
                    value={teklif}
                    onChange={(e) => setTeklif(e.target.value)}
                    placeholder="Teklifinizi girin"
                />
                <button onClick={handleTeklifGonder}>Teklif Gönder</button>
            </div>
            <div>
                <h2>Teklifler</h2>
                <ul>
                    {teklifler.map((tek, index) => (
                        <li key={index}>{tek}</li>
                    ))}
                </ul>
            </div>
            <Link href="/emlak">Emlak Listesine Geri Dön</Link>
        </div>
    );
}
