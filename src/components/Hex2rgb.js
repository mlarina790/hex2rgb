import React, { useState } from "react";

export default function Hex2rgb() {
    const [hex, setHex] = useState('#34495e');
    const [rgb, setRgb] = useState('rgb(52, 73, 94)');

    const handleSubmit = evt => evt.preventDefault();

    const handleConverter = (evt) => {
        const { value } = evt.target;

        setHex(value);

        const app = document.querySelector('.App');

        if (value.length === 7 && value[0] === '#') {
            const toRgb = hexInRgb(evt.target.value);

            if (!toRgb) {
                app.style.backgroundColor = '#E94B35';
                setRgb('Ошибка!');
            }

            const rgbValue = `rgb(${toRgb.r}, ${toRgb.g}, ${toRgb.b})`;
            app.style.backgroundColor = rgbValue
            setRgb(rgbValue);
        }

        if (value.length >= 7 && value[0] !== '#') {
            app.style.backgroundColor = '#E94B35';
            setRgb('Ошибка!');
        }
    }

    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmit} >
                <input className="hex" type="text" name="hex" maxLength="7"
                    onChange={handleConverter} value={hex} />
            </form>
            <div className="rgb">
                <span>{rgb}</span>
            </div>
        </React.Fragment>
    );

}

function hexInRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
