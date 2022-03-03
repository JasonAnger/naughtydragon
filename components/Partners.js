
export default function Partners() {
    const urlPartner = ['/partners/logo-01.webp','/partners/logo-02.webp','/partners/logo-03.webp','/partners/logo-04.webp',
    '/partners/logo-05.webp','/partners/logo-06.webp','/partners/logo-07.webp','/partners/logo-08.webp']
    const partnerList =  urlPartner.map((item) => <div className="item"><img className="" src={item} /></div>)
    return (
        <section id="partners">
            <h1 className="section-header text-white">Partners</h1>
            <div className="partner-list">
                {partnerList}
            </div>
        </section>
    )
}