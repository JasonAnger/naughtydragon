import Image from "next/image"
export default function Partners() {
    const urlPartner = []
    for(let i = 1; i<19; i++) {
        if(i<10) urlPartner.push(`/partners/partner-0${i}.webp`)
        else urlPartner.push(`/partners/partner-${i}.webp`)
    }
    const partnerList =  urlPartner.map((item, index) => <div className="item"><Image alt={`Naughty Dragon Partner ${index+1}`} width={200} height={70} src={item} /></div>)
    return (
        <section id="partners">
            <h1 className="section-header">Partners</h1>
            <div className="partner-list justify-center items-center">
                {partnerList}
            </div>
            <h1 className="section-header">Team</h1>
            <div className="partner-list justify-center items-center">
                <div className="galaxy item"><img alt={`Naughty Dragon Partner: Galaxy Studio`} className="" src='/galaxy_studio.webp' /></div>
            </div>
        </section>
    )
}