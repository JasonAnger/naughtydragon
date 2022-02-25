import { useState } from 'react';

export default function NavigitionBar() {
    const [isClose, setIsClose] = useState(false);
    function onClickClose() {
        setIsClose(!isClose)
    }
    return (
        <section className={"navbar"+`${isClose?' closed':''}`}>
            <div onClick={onClickClose} className={"close"+`${isClose?' closed':''}`}><i className="bi bi-x"></i></div>
            <div className="header-info">
                <p>Official Naughty Dragon Token Contract (BEP-20): <a href="https://bscscan.com/address/0xE3233fdb23F1c27aB37Bd66A19a1f1762fCf5f3F" rel="noreferrer" target="_blank" className="contract">0xE3233fdb23F1c27aB37Bd66A19a1f1762fCf5f3F</a></p>
            </div>
            <div className="nav-main-content">
                <div className="nav-logo">
                    <img className="h-full" src="text.png"></img>
                </div>
                <ul className="main-nav">
                    <li><a target="_blank" href="">Gameplay</a></li>
                    <li><a target="_blank" href="">Tokenomics</a></li>
                    <li><a target="_blank" href="">Roadmap</a></li>
                    <li><a target="_blank" href="">Partners</a></li>
                </ul>
                <div className="nav-buttons">
                    <div className="button flex relative animate-glow cursor-pointer min-w-max hover:scale-105">
                        <span>Play Game</span>
                        <img className="max-h-20" src="btn.png"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}