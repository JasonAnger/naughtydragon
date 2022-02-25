
export default function HeadBanner() {
    return (
        <footer className="footer flex flex-col justify-center items-center">
            <img src="/logo.png" style={{width: '380px', maxWidth: '80vw', display: 'block', marginTop: '-100px'}} />
            <div className="social-links text">
                <a className="social-item text" href="#">Gameplay</a>
                <a className="social-item text" href="#">Tokenomics</a>
                <a className="social-item text" href="#">Roadmap</a>
                <a className="social-item text" href="#">Docs</a>
                <a className="social-item text" href="#">FAQs</a>
            </div>
            <div className="social-links">
                <a className="social-item" href="#"><i class="bi bi-twitter"></i></a>
                <a className="social-item" href="#"><i class="bi bi-instagram"></i></a>
                <a className="social-item" href="#"><i class="bi bi-facebook"></i></a>
                <a className="social-item" href="#"><i class="bi bi-discord"></i></a>
                <a className="social-item" href="#"><i class="bi bi-telegram"></i></a>
                <a className="social-item" href="#"><i class="bi bi-medium"></i></a>
            </div>
            <p className="copyright">Copyright © 2021 Naughty Dragon</p>
        </footer>
    )
}