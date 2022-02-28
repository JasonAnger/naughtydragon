
export default function Gameplay() {
    return (
        <section id="gameplay">
            <div className="section-container flex-col max-width-1600">
                <h1 className="section-header text-black">Gameplay</h1>
                <div className="gameplay-container z-40">
                    <div className="gameplay-item mt-5 sm:mt-10">
                        <div className="gameplay-content">
                            <div className="image">
                                <img src="/gameplay/gameplay-3.webp" />
                            </div>
                            <h1>Feed</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <img className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                    <div className="gameplay-item mt-5 sm:mt-20">
                        <div className="gameplay-content">
                            <div className="image">
                                <img src="/gameplay/gameplay-2.webp" />
                            </div>
                            <h1>Breed</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <img className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                    <div className="gameplay-item mt-5 sm:mt-40">
                        <div className="gameplay-content">
                            <div className="image">
                                <img src="/gameplay/gameplay-1.webp" />
                            </div>
                            <h1>Battle</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        <img className="scroll drop-shadow-md" src="/scroll.webp" />
                    </div>
                </div>
            </div>
        </section>
    )
}