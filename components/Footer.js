
export default function HeadBanner() {
    return (
        <footer className="footer flex flex-col justify-center items-center">
            <img src="/logo.webp" style={{width: '380px', maxWidth: '80vw', display: 'block', marginTop: '-100px', filter: 'drop-shadow(2px 4px 50px #fff)'}} />
            <div className="social-links text hidden sm:flex">
                <a className="social-item text" href="#gameplay">Gameplay</a>
                <a className="social-item text" href="https://docs.naughtydragon.io/naughty-dragon-token/tokenomics">Tokenomics</a>
                <a className="social-item text" href="#roadmap">Roadmap</a>
                <a className="social-item text" href="https://docs.naughtydragon.io/">Docs</a>
                <a className="social-item text" href="https://docs.naughtydragon.io/">FAQs</a>
            </div>
            <div className="social-links">
                <a className="social-item" href="https://twitter.com/Naughty_DRG"><i class="bi bi-twitter"></i></a>
                {/* <a className="social-item" href="#"><i class="bi bi-instagram"></i></a>
                <a className="social-item" href="#"><i class="bi bi-facebook"></i></a> */}
                <a className="social-item" href="https://www.youtube.com/channel/UCaZLtxtOR0jhweKYlNlt-5w"><i class="bi bi-youtube"></i></a>
                <a className="social-item" href="https://t.me/Naughty_DRG"><i class="bi bi-telegram"></i></a>
                <a className="social-item" href="mailto:contact@naughtydragon.io"><i class="bi bi-mailbox2"></i></a>
            </div>
            <p className="copyright">Copyright © 2021 Naughty Dragon</p>
        </footer>
    )
}