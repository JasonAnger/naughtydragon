export default function Type(props) {
    let shadowColor = ''
    switch (props.index) {
        case 1:
            shadowColor = 'drop-shadow(0px 3px 12px #ffef2a)' //'drop-shadow(0px 3px 12px #dc2bff)'
            break;
        case 2:
            shadowColor = 'drop-shadow(0px 3px 12px #41f547)' //'drop-shadow(0px 3px 12px #2b60ff)'
            break;
        case 3:
            shadowColor = 'drop-shadow(0px 3px 12px #2b60ff)' //'drop-shadow(0px 3px 12px #41f547)'
            break;
        case 4:
            shadowColor = 'drop-shadow(0px 3px 12px #ff3131)' //'drop-shadow(0px 3px 12px #d19100)'
            break;
        case 5:
            shadowColor = 'drop-shadow(0px 3px 12px #d19100)' //'drop-shadow(0px 3px 12px #ff3131)'
            break;
        case 6:
            shadowColor = 'drop-shadow(0px 3px 12px #dc2bff)' //'drop-shadow(0px 3px 12px #ffef2a)'
            break;
        default:
            break;
    }
    return (
        <div onClick={() => props.chooseDragon(props.index) } style={{'filter': `${shadowColor}`}} className="type">
            <img alt={`Naughty Dragon ${props.index}`} className="icon" src={`/dragons/type_${props.index}.webp`} />
        </div>
    )
}