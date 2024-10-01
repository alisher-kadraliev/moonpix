"use client"
import { useState, useEffect } from 'react';

const Popup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Show the pop-up after 3 seconds

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div style={styles.overlay}></div>
            <div style={styles.popup}>
                <p>This is a pop-up message!</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        display: 'block',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    } as const,
    popup: {
        display: 'block',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        border: '2px solid black',
        zIndex: 1000,
    } as const,
};

export default Popup;