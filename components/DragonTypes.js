import Type from './Type'

export default function DragonTypes() {
    return (
        <section id="types">
            <div className="section-container">
                <div className="types-container">
                    <div className="dragon-types">
                        <Type image="/Group 1.png"/>
                        <Type image="/Group 2.png"/>
                        <Type image="/Group 3.png"/>
                    </div>
                    <div className="dragon-types">
                        <Type image="/Group 4.png"/>
                        <Type image="/Group 5.png"/>
                        <Type image="/Group 6.png"/>
                    </div>
                    <div className='types-text'>
                        <h1>Many types of <br/>dragon to play</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="dragon-animation flex items-center justify-center w-2/5">
                    <img style={{width: '100%'}} src='/dragons/dragon_1.png' />
                </div>
            </div>
        </section>
    )
}