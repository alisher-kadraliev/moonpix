(function () {
    const popupHTML = `
        <div id="overlay" style="display: none; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>
        <div id="popup" style="display: none; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: white; border: 2px solid black; z-index: 1000;">
            <p>This is a pop-up message!</p>
            <button id="closeBtn">Close</button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    function showPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    document.getElementById('closeBtn').addEventListener('click', closePopup);

    setTimeout(showPopup, 3000);
})();