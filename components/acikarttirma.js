// components/Auction.js
import React, { useState, useEffect } from 'react';

export default function Auction({ roomId }) {
    const [ws, setWs] = useState(null);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        const newWs = new WebSocket(`ws://localhost:8000/ws/acikarttirma/${roomId}/`);
        newWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setBids(prevBids => [...prevBids, data.message]);
        };
        setWs(newWs);

        return () => newWs.close();
    }, [roomId]);

    const sendBid = (bidAmount) => {
        const message = { amount: bidAmount, user: 'KullanıcıAdı' };
        ws.send(JSON.stringify({ message }));
    };

    return (
        <div>
            {/* Açık artırma UI bileşenleri */}
            {bids.map((bid, index) => (
                <p key={index}>{bid.user}: {bid.amount}</p>
            ))}
            <button onClick={() => sendBid(100)}>100 TL Teklif Ver</button>
            {/* Diğer teklif butonları veya giriş alanları */}
        </div>
    );
}
