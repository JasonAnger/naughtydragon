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
        <section className={"navbar"+`${isClose?' closed':''}`}>
            <div onClick={onClickClose} className={"close"+`${isClose?' closed':''}`}><i className="bi bi-x"></i></div>
            <div className="header-info">
                <p>
                    <span className='hidden lg:inline-block'>Official Naughty Dragon </span>
                    <span className='inline-block ml-2'>Token Contract</span>
                    <span className='hidden lg:inline-block ml-2'>(BEP-20)</span>
                    <span className='inline-block'>: </span>
                    <a href="https://bscscan.com/address/0xE3233fdb23F1c27aB37Bd66A19a1f1762fCf5f3F" rel="noreferrer" target="_blank" className="contract">0xE3233<span className='hidden lg:inline-block'>fdb23F1c27aB37Bd66A19a1f1762</span><span className='inline-block lg:hidden'>...</span>fCf5f3F</a>
                </p>
            </div>
            <div className="nav-main-content">
                <div className="nav-logo">
                    <img className="h-full" style={{filter: 'drop-shadow(0px 2px 5px #fff)'}} src="logo-new.webp"></img>
                </div>
                <ul className={`main-nav ${isOpen?' active':''}`}>
                    <div onClick={() => setIsOpen(false)} className="clickToClose block lg:hidden"></div>
                    <li onClick={() => setIsOpen(false)} ><a href="#gameplay">Gameplay</a></li>
                    <li onClick={() => setIsOpen(false)} ><a href="#tokenomics">Tokenomics</a></li>
                    <li onClick={() => setIsOpen(false)} ><a href="#roadmap">Roadmap</a></li>
                    <li onClick={() => setIsOpen(false)} ><a href="#partners">Partners</a></li>
                    <a className="button mkt flex lg:hidden relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Marketplace</span>
                        <img className="max-h-20" src="btn.webp"></img>
                    </a>
                    <a className="button flex lg:hidden relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Launch App</span>
                        <img className="max-h-20" src="btn.webp"></img>
                    </a>
                </ul>
                <div onClick={openMainNav} className="nav-buttons absolute top-9 right-3 flex lg:hidden">
                    <img className="max-h-20" src="burger.webp"></img>
                </div>
                <div className="nav-buttons hidden lg:flex">
                    <a className="button mkt hidden lg:flex relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Marketplace</span>
                        <img className="max-h-20" src="btn.webp"></img>
                    </a>
                    <a className="button hidden lg:flex relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Launch App</span>
                        <img className="max-h-20" src="btn.webp"></img>
                    </a>
                </div>
            </div>
        </section>
    )
}