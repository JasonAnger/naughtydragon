import { useState } from "react";

export default function NavigitionBar() {
    const [isClose, setIsClose] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    function onClickClose() {
        setIsClose(!isClose)
    }
    function openMainNav() {
        setIsOpen(!isOpen)
    }
    return (
        <section className={"navbar" + `${isClose ? ' closed' : ''}`}>
            <div onClick={onClickClose} className={"close"+`${isClose?' closed':''}`}><i className="bi bi-x"></i></div>
            <div className="header-info">
                <p className="token-text text-center text-xs lg:text-xl">
                    <span className=''>Official{" "}<span className="hidden lg:inline">Naughty Dragon</span>{" "}Token Contract (BEP-20): </span>
                    <br className="inline lg:hidden" />
                    <a href="https://bscscan.com/address/0x026e50bc6A2c76447A33bAc90f864d61C94Eb5f0" rel="noreferrer" target="_blank" className="contract">0x026e50bc6A2c76447A33bAc90f864d61C94Eb5f0</a>
                </p>
            </div>
            <div className="nav-main-content">
                <div className="nav-logo">
                    <img alt={`Naughty Dragon logo`} className="h-full" style={{ filter: 'drop-shadow(0px 2px 5px #fff)' }} src="logo-new.webp"></img>
                </div>
                <ul className={`main-nav ${isOpen ? ' active' : ''}`}>
                    <div onClick={() => setIsOpen(false)} className="clickToClose block lg:hidden"></div>
                    <li onClick={() => setIsOpen(false)} ><a href="/#gameplay">Gameplay</a></li>
                    <li onClick={() => setIsOpen(false)} ><a href="/#roadmap">Roadmap</a></li>
                    <li onClick={() => setIsOpen(false)} ><a href="/#partners">Partners</a></li>
                    <li className="mini-menu" onClick={() => setIsOpen(false)} >
                        <span>Docs
                            <svg viewBox="0 -256 1792 1792">
                                <g transform="matrix(1,0,0,-1,68.338983,1133.5593)" id="g3003">
                                    <path fill="#ffffff" d="m 1611,832 q 0,-53 -37,-90 L 923,91 Q 885,53 832,53 778,53 742,91 L 91,742 q -38,36 -38,90 0,53 38,91 l 74,75 q 39,37 91,37 53,0 90,-37 l 486,-486 486,486 q 37,37 90,37 52,0 91,-37 l 75,-75 q 37,-39 37,-91 z" id="path3005"  />
                                </g>
                            </svg>
                        </span>
                        <ul className="hover-display">
                            <li><a target="_blank" href="/Tokenomics.pdf">Tokenomics</a></li>
                            <li><a target="_blank" href="/Pitchdeck.pdf">Pitchdeck</a></li>
                            <li><a target="_blank" href="https://docs.naughtydragon.io/">Documentation</a></li>
                        </ul>
                    </li>
                    <a rel="noreferrer" target="_blank" href="https://market.testnet.naughtydragon.io/" className="button mkt flex lg:hidden relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Marketplace</span>
                        <img alt={`Naughty Dragon button`} className="max-h-20" src="btn.webp"></img>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://play.testnet.naughtydragon.io/" className="button flex lg:hidden relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Launch App</span>
                        <img alt={`Naughty Dragon button`} className="max-h-20" src="btn.webp"></img>
                    </a>
                </ul>
                <div onClick={openMainNav} className="nav-buttons absolute top-9 right-3 flex lg:hidden">
                    <img alt={`Naughty Dragon button`} className="max-h-20" src="burger.webp"></img>
                </div>
                <div className="nav-buttons hidden lg:flex">
                    <a rel="noreferrer" target="_blank" href="https://market.naughtydragon.io/" className="button mkt hidden lg:flex relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Marketplace</span>
                        <img alt={`Naughty Dragon button`} className="max-h-20" src="btn.webp"></img>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://play.naughtydragon.io/" className="button hidden lg:flex relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Launch App</span>
                        <img alt={`Naughty Dragon button`} className="max-h-20" src="btn.webp"></img>
                    </a>
                </div>
            </div>
        </section>
    )
}
