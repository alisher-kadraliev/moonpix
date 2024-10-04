import { getPopUpLast } from "../../action/popup";

const PopUp = async () => {
    const popUp = await getPopUpLast()
    return (
        <div>
            {typeof popUp !== 'string' && ( // Check if popUp is not a string
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: popUp.bgColor, color: popUp.textColor, width: '300px', height: '100px', position: 'fixed', bottom: '50px', left: '50px' }}>
                    <div>PopUp</div>
                </div>
            )}
        </div>
    );
}

export default PopUp;