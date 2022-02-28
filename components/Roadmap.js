
export default function Roadmap() {
    return (
        <section id="roadmap">
            <img className="roadmap-header" src="/roadmap/text.webp" />
            <div className="roadmap-content">
                <img className="block absolute hidden sm:block" style={{width: '13%', left: '10%', transform: 'translate(-50%,-50%)'}} src="/roadmap/start.webp"/>
                <img className="w-4/5 block mx-auto hidden sm:block" src="/roadmap/guideline.webp" />
                <div className="w-4/5 block mx-auto absolute" style={{width: '20%', left: '30%', top: '8%', transform: 'translateX(-50%)'}} >
                    <img src="/roadmap/rm1.webp" />
                </div>
                <img className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '45%', top: '20.8%', transform: 'translate(0%,0%) rotate(-90deg)'}} />
                <div className="w-4/5 block mx-auto absolute" style={{width: '20%', left: '64%', top: '10%', transform: 'translateX(-50%)'}} >
                    <img src="/roadmap/rm2.webp" />
                </div>
                <img className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '83.4%', top: '30.8%', transform: 'translate(0%,0%) rotate(-20deg)'}} />
                <div className="w-4/5 block mx-auto absolute" style={{width: '20%', left: '70%', top: '45%', transform: 'translateX(-50%)'}} >
                    <img src="/roadmap/rm3.webp" />
                </div>
                <img className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '48.4%', top: '61.8%', transform: 'translate(0%,0%) rotate(80deg)'}} />
                <div className="w-4/5 block mx-auto absolute" style={{width: '20%', left: '30%', top: '64%', transform: 'translateX(-50%)'}} >
                    <img src="/roadmap/rm4.webp" />
                </div>
                <img className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '4%', left: '43.4%', top: '96.8%', transform: 'translate(0%,0%) rotate(-112deg)'}} />
                <div className="w-4/5 block mx-auto absolute" style={{width: '20%', left: '65%', top: '78%', transform: 'translateX(-50%)'}} >
                    <img src="/roadmap/rm5.webp" />
                </div>
            </div>
        </section>
    )
}