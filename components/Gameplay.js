
export default function Gameplay() {
    return (
        <section id="gameplay">
            <div className="section-container flex-col max-width-1600">
                <h1 className="section-header text-black">Gameplay</h1>
                <div className="gameplay-container z-40">
                    <div className="gameplay-item mt-5 sm:mt-10">
                        <div className="gameplay-content">
                            <div className="image">
                                <img alt="Naughty Dragon Feeding" src="/gameplay/gameplay-3.webp" />
                            </div>
                            <h1>Feeding</h1>
                            <p>From Level 1 to Level 15 to increase the Dragon Indicators</p>
                        </div>
                        <img alt="Naughty Dragon scroll" className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                    <div className="gameplay-item mt-5 sm:mt-20">
                        <div className="gameplay-content">
                            <div className="image">
                                <img alt="Naughty Dragon Breeding" src="/gameplay/gameplay-2.webp" />
                            </div>
                            <h1>Breeding</h1>
                            <p>Cross-Breeding among Dragon Breeds</p>
                        </div>
                        <img alt="Naughty Dragon scroll" className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                    <div className="gameplay-item mt-5 sm:mt-40">
                        <div className="gameplay-content">
                            <div className="image">
                                <img alt="Naughty Dragon PVP" src="/gameplay/gameplay-1.webp" />
                            </div>
                            <h1>PVP</h1>
                            <p>Defeat the enemies and get the reward</p>
                        </div>
                        <img alt="Naughty Dragon scroll" className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                </div>
            </div>
        </section>
    )
}