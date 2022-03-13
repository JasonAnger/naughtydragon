export default function Partners() {
    const urlPartner = ['/partners/logo-01.webp','/partners/logo-02.webp','/partners/logo-03.webp','/partners/logo-04.webp',
    '/partners/logo-05.webp','/partners/logo-06.webp','/partners/logo-07.webp','/partners/logo-08.webp']
    const partnerList =  urlPartner.map((item, index) => <div className="item"><img alt={`Naughty Dragon Partner ${index+1}`} className="" src={item} /></div>)
    return (
        <section id="partners">
            <h1 className="section-header">Partners</h1>
            <div className="partner-list">
                {partnerList}
            </div>
            <h1 className="section-header">Team</h1>
            <div className="partner-list justify-center">
                <div className="galaxy item"><img alt={`Naughty Dragon Partner: Galaxy Studio`} className="" src='/galaxy_studio.webp' /></div>
            </div>
        </section>
    )
}