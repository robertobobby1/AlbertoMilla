import { Link } from 'react-router-dom';

function FooterPhone(){
    return (
        <><footer className="footer pl-10 bg-base-300 text-base-content" style={{ backgroundColor: "white" }}>
        <nav></nav>
        <nav>
            <span>
                <span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" /></svg></span>
                <span className='inline-block'><pre> </pre></span>
                <span className='inline-block'>C/ Peset Aleixandre 45, Silla, Valencia</span>
            </span>
            <span>
                <span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></span>
                <span className='inline-block'><pre> </pre></span>
                <span className='inline-block'>info@albertomilla.com</span>
            </span>
            <span>
                <span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></span>
                <span className='inline-block'><pre> </pre></span>
                <span className='inline-block'>+34 961 203 754</span>
            </span>
        </nav>
        <nav>
            <div>
                <Link to="/Politicas/AvisoLegal"> <a className="link link-hover inline-block mx-3">Aviso legal</a> </Link>
                <Link to="/Politicas/PoliticaDePrivacidad"> <a className="link link-hover inline-block mx-3">Privacidad</a> </Link>
                <Link to="/Politicas/PoliticaDeCookies"> <a className="link link-hover inline-block mx-3">Cookies</a> </Link>
                <Link to="/Politicas/Newsletter"> <a className="link link-hover inline-block mx-3">Newsletter</a> </Link>
            </div>
        </nav>

    </footer>
    <aside className="footerMargin">
        <p>Copyright © 2023 - Roberto Milla</p>

    </aside></>
    )
}

export default FooterPhone;