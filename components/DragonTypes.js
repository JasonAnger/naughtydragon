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
    let dragons = ["The Metal Dragon has the ability to emit lightning to defeat the opponent. Immense assault power and plentiful blood give them benefits during the fighting. However, the attack speed is sometimes quite sluggish, probably being a disadvantage in case the opponent is having a good amount of blood and still plateaued after the attacks of the Metal dragons.",
    "The Wood Dragon has excellent safeguard capacity, and can endure many adversaries' assaults. Yet, the attack power is additionally not so strong and the speed isn't high, so now and then it actually has its own disadvantages. With the capacity to splash haze, The Wood Dragon can wallow and disorient opponents then increase the miss rate in the opponent's attack.",
    "The Water Dragon is such a type of dragon with balanced stats that can both attack and defend well. In case they encounter dragons that are incompatible, those stats will be significantly controlled causing a specific disadvantage.",
    "The Fire Dragon has superior attack stats,  easy to injure opponents, along with good defense, and will also create an advantage for themselves if they encounter dragons that are incompatible with them.",
    "The Earth Dragon has a lightning-quick attack speed since that variable compensates for his low attack power. Assuming the player controls the dragon well, it will likewise make many advantages while battling with the opponents.",
    "The Cyber Dragon is a strong dragon in every respect, a formidable opponent for all other players. When there is an opportunity to attack, the Cyber dragon will take full advantages and create an advantage for himself."]
    .map((item, index) => {
        return(
            <div className={`dragon-item ${isShowedDragon(index+1)?'block':'hidden'}`}>
                <div className='dragon-video w-4/5 mx-auto'>
                    <img style={{width: '100%', boxShadow: 'inset 0px 0px 23px 4px #2ea3a3eb'}} src={`/dragons/dragon_${index+1}.webp`} />
                </div>
                <div className='flex relative w-full'>
                    <p className="dragon-description">
                        {item}
                    </p>
                    <img style={{width: '100%', filter: 'hue-rotate(333deg) drop-shadow(2px 4px 20px #fff)', zIndex: 0}} src={`/dragons/frame.webp`} />
                </div>
            </div>
        )
    })
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
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                    </div>
                </div>
                <div className="dragon-animation flex items-center justify-center w-2/5">
                    {dragons}
                </div>
            </div>
        </section>
    )
}