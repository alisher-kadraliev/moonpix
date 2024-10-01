'use client';

import React, { useState } from 'react';

const PopUp = () => {
    const [bgColor, setBgColor] = useState('#000'); // Default background color
    const [textColor, setTextColor] = useState('#fff'); // Default text color

    const handleApply = () => {
        // Save settings to localStorage
        localStorage.setItem('popupBgColor', bgColor);
        localStorage.setItem('popupTextColor', textColor);

        // Log the changes to the console
        console.log(`Applied settings: Background Color - ${bgColor}, Text Color - ${textColor}`);

        // Update popup.js file (this part is conceptual, as direct file manipulation isn't possible in a browser)
        // You would typically need a server-side solution for this.
        // For demonstration, we will just log the intended changes.
        console.log(`Update popup.js with: ${bgColor}, ${textColor}`);
    };

    return (
        <div>
            <div style={{ backgroundColor: bgColor, color: textColor, width: '300px', height: '100px', position: 'fixed', bottom: '0', left: '0' }}>
                <div>PopUp</div>
            </div>
            <div>
                <div>PopUp</div>
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                />
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                />
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
}

export default PopUp;