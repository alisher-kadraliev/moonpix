(function () {
    const bgColor = localStorage.getItem('popupBgColor') || '#000'; // Retrieve background color
    const textColor = localStorage.getItem('popupTextColor') || '#fff'; // Retrieve text color

    const popUpDiv = document.createElement('div');
    popUpDiv.style.backgroundColor = bgColor; // Apply background color
    popUpDiv.style.color = textColor; // Apply text color
    popUpDiv.style.width = '300px'; // Set width
    popUpDiv.style.height = '100px'; // Set height
    popUpDiv.style.position = 'fixed'; // Set position
    popUpDiv.style.bottom = '0'; // Set bottom position
    popUpDiv.style.left = '0'; // Set left position
    popUpDiv.innerText = 'PopUp';
    document.body.appendChild(popUpDiv);

    // Log the current settings to the console
    console.log(`Current settings: Background Color - ${bgColor}, Text Color - ${textColor}`);
})();