import React, { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Uygulama başladığında localStorage'dan kullanıcı bilgilerini yükle
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData)); // Kullanıcı bilgilerini localStorage'a kaydet
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user'); // Kullanıcı bilgilerini localStorage'dan sil
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
