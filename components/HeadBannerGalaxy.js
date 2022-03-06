
export default function HeadBannerGalaxy() {
    return (
        <section id="headbanner" className="galaxy flex relative mt-10 pt-20 sm:pt-0 sm:mt-0" style={{ height: 'calc(100vw / 16 * 9 + 5rem)' }}>
            <div className="flex top-0 left-0 relative justify-center items-center w-full overflow-hidden">
                <img className="home-logo" src="/home/nd.webp" style={{
                    width: 'calc(38vw)',
                    top: 'calc(100vw / 16 * 9 * 0.4)',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 8
                }}
                />
                <img className="floating" src="/home/floating-2.webp" style={{
                    width: 'calc(40vw)',
                    top: 'calc(100vw / 16 * 9 * 0.5)',
                    left: '0vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }} ></img>
                <img className="floating" src="/home/floating-1.webp" style={{
                    width: 'calc(20vw)',
                    top: 'calc(100vw / 16 * 9 * 0.4)',
                    right: '-20vw',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }} ></img>
                <img className="dragon-floating red" src="/home/dragon-2.webp" style={{
                    width: 'calc(35vw)',
                    top: 'calc(100vw / 16 * 9 * 0.2)',
                    left: '5vw',
                    // transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
                ></img>
                <img className="dragon-floating brown" src="/home/dragon-3.webp" style={{
                    width: 'calc(40vw)',
                    top: 'calc(100vw / 16 * 9 * 0.05 * -1)',
                    right: '2vw',
                    opacity: 0.9,
                    // transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
                ></img>
                <img className="dragon-floating" src="/home/dragon-4.webp" style={{
                    width: 'calc(40vw)',
                    top: 'calc(100vw / 16 * 9 * 0.3)',
                    right: '0vw',
                    // transform: 'translate(-50%, -50%)',
                    opacity: 0.8,
                    zIndex: 1
                }}
                ></img>
            </div>
            <img className="cloud" src="/home/cloud-3.webp" style={{
                position: 'absolute',
                minWidth: '100%',
                top: 0,
                left: 0,
                zIndex: 0,
            }}></img>
            <img className="cloud" src="/home/cloud-4.webp" style={{
                position: 'absolute',
                minWidth: '100%',
                top: 'calc(100vw / 16 * 9 * 0.35)',
                left: 0,
                zIndex: 0,
            }}></img>
            <img className="dragon-floating" src="/home/dragon-1.webp" style={{
                position: 'absolute',
                width: 'calc(80vw)',
                top: 'calc(100vw / 16 * 9 * 0.05)',
                left: '-15vw',
                // transform: 'translate(-50%, -50%)',
                zIndex: 10
            }}
            ></img>
            <img className="floating" src="/home/floating-1.webp" style={{
                position: 'absolute',
                width: 'calc(35vw)',
                top: 'calc(100vw / 16 * 9 * 0.9)',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
            }}
            ></img>
            <img className="cloud" src="/home/cloud-1.webp" style={{
                position: 'absolute',
                width: 'calc(50vw)',
                top: 'calc(100vw / 16 * 9 * 0.75)',
                left: 0,
                zIndex: 11,
            }} ></img>
            <img className="cloud" src="/home/cloud-2.webp" style={{
                position: 'absolute',
                width: 'calc(50vw)',
                top: 'calc(100vw / 16 * 9 * 0.72)',
                right: 0,
                zIndex: 1,
            }} ></img>
        </section>
    )
}