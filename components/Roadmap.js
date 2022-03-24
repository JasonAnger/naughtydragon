export default function Roadmap() {
    return (
        <section id="roadmap">
            <img alt={`Naughty Dragon Roadmap`} className="roadmap-header" src="/roadmap/text.webp" />
            <div className="roadmap-content">
                <img alt={`Naughty Dragon Roadmap`} className="block absolute hidden sm:block z-10" style={{width: '13%', left: '10%', transform: 'translate(-50%,-50%)'}} src="/roadmap/start.webp"/>
                <img alt={`Naughty Dragon Roadmap`} className="w-4/5 block mx-auto hidden sm:block z-0" style={{filter: 'drop-shadow(2px 4px 6px #00000050)'}} src="/roadmap/guideline.webp" />
                <div className="roadmap-item w-4/5 block mx-auto absolute" style={{width: '22%', left: '30%', top: '8%', transform: 'translateX(-50%)'}} >
                    <div className="roadmap-details flex relative flex-col">
                        <div className="roadmap-details-header z-20">Q4/2021</div>
                        <p className="roadmap-line z-20">- Research Gamfi & game economy</p>
                        <img alt={`Naughty Dragon Roadmap`} className="absolute top-0 left-0 z-10" src="/roadmap/rm1.webp" />
                    </div>
                </div>
                <img alt={`Naughty Dragon Roadmap`} className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '45%', top: '20.8%', transform: 'translate(0%,0%) rotate(-90deg)'}} />
                <div className="roadmap-item w-4/5 block mx-auto absolute" style={{width: '22%', left: '64%', top: '10%', transform: 'translateX(-50%)'}} >
                    <div className="roadmap-details flex relative flex-col">
                        <div className="roadmap-details-header z-20">Q1/2022</div>
                        <p className="roadmap-line z-20">- Testnet<br />- IDO <br />
                        - Build relationships with partners on the BSC </p>
                        <img alt={`Naughty Dragon Roadmap`} className="absolute top-0 left-0 z-10" src="/roadmap/rm2.webp" />
                    </div>
                </div>
                <img alt={`Naughty Dragon Roadmap`} className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '83.4%', top: '30.8%', transform: 'translate(0%,0%) rotate(-20deg)'}} />
                <div className="roadmap-item w-4/5 block mx-auto absolute" style={{width: '22%', left: '70%', top: '45%', transform: 'translateX(-50%)'}} >
                    <div className="roadmap-details flex relative flex-col">
                        <div className="roadmap-details-header z-20">Q2/2022</div>
                        <p className="roadmap-line z-20">- Build Phase3 <br />- Cooperate with KOLs for project marketing</p>
                        <img alt={`Naughty Dragon Roadmap`} className="absolute top-0 left-0 z-10" src="/roadmap/rm3.webp" />
                    </div>
                </div>
                <img alt={`Naughty Dragon Roadmap`} className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '48.4%', top: '61.8%', transform: 'translate(0%,0%) rotate(80deg)'}} />
                <div className="roadmap-item w-4/5 block mx-auto absolute" style={{width: '22%', left: '30%', top: '64%', transform: 'translateX(-50%)'}} >
                    <div className="roadmap-details flex relative flex-col">
                        <div className="roadmap-details-header z-20">Q3/2022</div>
                        <p className="roadmap-line z-20">- Continue build game & marketing</p>
                        <img alt={`Naughty Dragon Roadmap`} className="absolute top-0 left-0 z-10" src="/roadmap/rm4.webp" />
                    </div>
                </div>
                <img alt={`Naughty Dragon Roadmap`} className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '43.4%', top: '96.8%', transform: 'translate(0%,0%) rotate(-112deg)'}} />
                <div className="roadmap-item w-4/5 block mx-auto absolute" style={{width: '22%', left: '65%', top: '78%', transform: 'translateX(-50%)'}} >
                    <div className="roadmap-details flex relative flex-col">
                        <div className="roadmap-details-header z-20">Q4/2022</div>
                        <p className="roadmap-line z-20">- Implement cross partners programs with other projects to increase project awareness</p>
                        <img alt={`Naughty Dragon Roadmap`} className="absolute top-0 left-0 z-10" src="/roadmap/rm5.webp" />
                    </div>
                </div>
            </div>
        </section>
    )
}