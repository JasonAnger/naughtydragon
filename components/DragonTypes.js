import Type from './Type'
import { useState } from 'react'

export default function DragonTypes() {
    const [usedDragon, setUsedDragon] = useState(1)
    function chooseDragon(dragon) {
        console.log(dragon)
        setUsedDragon(dragon)
    }
    function isShowedDragon(dragon) {
        if(usedDragon === dragon) return true;
        return false
    }
    return (
        <section id="types">
            <div className="section-container">
                <div className="types-container">
                    <div className="dragon-types w-full xl:w-4/5">
                        <Type chooseDragon={chooseDragon} index={1} />
                        <Type chooseDragon={chooseDragon} index={2} />
                        <Type chooseDragon={chooseDragon} index={3} />
                        <Type chooseDragon={chooseDragon} index={4} />
                        <Type chooseDragon={chooseDragon} index={5} />
                        <Type chooseDragon={chooseDragon} index={6} />
                    </div>
                    <div className='types-text'>
                        <h1>Many types of <br/>dragon to play</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="dragon-animation flex items-center justify-center w-2/5">
                    <img className={`${isShowedDragon(1)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_1.png' />
                    <img className={`${isShowedDragon(2)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_2.png' />
                    <img className={`${isShowedDragon(3)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_3.png' />
                    <img className={`${isShowedDragon(4)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_4.png' />
                    <img className={`${isShowedDragon(5)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_5.png' />
                    <img className={`${isShowedDragon(6)?'block':'hidden'}`} style={{width: '100%'}} src='/dragons/dragon_6.png' />
                </div>
            </div>
        </section>
    )
}