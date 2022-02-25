
export default function HeadBanner() {
    return (
        <section id="headbanner" className="flex relative">
            <div className="flex top-0 left-0 relative justify-center items-center h-screen w-full overflow-hidden">
                <img className="" src="/home/nd.png" style={{
                    width: 'calc(38vw)',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 8
                }}
                />
                <img className="floating" src="/home/floating-2.png" style={{
                    width: 'calc(40vw)',
                    top: '30vh',
                    left: '0vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }} ></img>
                <img className="floating" src="/home/floating-1.png" style={{
                    width: 'calc(20vw)',
                    top: '40vh',
                    right: '-20vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }} ></img>
                <img className="" src="/home/cloud-3.png" style={{
                    minWidth: '100vw',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}></img>
                <img className="dragon-floating" src="/home/dragon-2.png" style={{
                    width: 'calc(35vw)',
                    top: '20vh',
                    left: '5vw',
                    // transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
                ></img>
                <img className="dragon-floating" src="/home/dragon-3.png" style={{
                    width: 'calc(40vw)',
                    top: '-5vh',
                    right: '2vw',
                    opacity: 0.9,
                    // transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
                ></img>
                <img className="dragon-floating" src="/home/dragon-4.png" style={{
                    width: 'calc(40vw)',
                    top: '30vh',
                    right: '0vw',
                    // transform: 'translate(-50%, -50%)',
                    opacity: 0.8,
                    zIndex: 1
                }}
                ></img>
            </div>
            <img className="" src="/home/cloud-4.png" style={{
                position: 'absolute',
                minWidth: '100vw',
                top: '35vh',
                left: 0,
                zIndex: 0,
            }}></img>
            <img className="dragon-floating" src="/home/dragon-1.png" style={{
                position: 'absolute',
                width: 'calc(80vw)',
                top: '5vh',
                left: '-15vw',
                // transform: 'translate(-50%, -50%)',
                zIndex: 10
            }}
            ></img>
            <img className="floating" src="/home/floating-1.png" style={{
                position: 'absolute',
                width: 'calc(35vw)',
                top: '95vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
            }}
            ></img>
            <img className="" src="/home/cloud-1.png" style={{
                position: 'absolute',
                width: 'calc(50vw)',
                top: '75vh',
                left: 0,
                zIndex: 11,
            }} ></img>
            <img className="" src="/home/cloud-2.png" style={{
                position: 'absolute',
                width: 'calc(50vw)',
                top: '72vh',
                right: 0,
                zIndex: 1,
            }} ></img>
        </section>
    )
}