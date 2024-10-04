import Script from 'next/script';
import '../styles/globals.css';

async function MyApp({ Component, pageProps }) {
    const popUp = await getPopUpLast()
    console.log(popUp)
    return (
        <>
            <Script id="popup-script" strategy="afterInteractive">
                {`
          (function() {
            const bgColor = '${popUp.bgColor}';
            const textColor = '${popUp.textColor}';

            const popUpDiv = document.createElement('div');
            popUpDiv.style.backgroundColor = bgColor;
            popUpDiv.style.color = textColor;
            popUpDiv.style.width = '300px';
            popUpDiv.style.height = '100px';
            popUpDiv.style.position = 'fixed';
            popUpDiv.style.bottom = '0';
            popUpDiv.style.left = '0';
            popUpDiv.style.display = 'flex';
            popUpDiv.style.justifyContent = 'center';
            popUpDiv.style.alignItems = 'center';
            popUpDiv.style.borderRadius = '10px';
            popUpDiv.innerText = 'PopUp';
            document.body.appendChild(popUpDiv);

            console.log(\`Current settings: Background Color - \${bgColor}, Text Color - \${textColor}\`);
          })();
        `}
            </Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;