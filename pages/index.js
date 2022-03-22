import {useState, useEffect} from 'react'

export default function Profit() {
  const [energy, setEnergy] = useState(150)
  const [idle, setIdle] = useState(1500)
  const [priceEnergy, setPriceEnergy] = useState(0.0067)
  const [token, setToken] = useState(0.00001)
  const [profit, setProfit] = useState( parseFloat(energy * 10 * idle * token - ( energy*priceEnergy)).toFixed(5))
  useEffect(() => {
    setProfit(parseFloat(energy * 10 * idle * token - ( energy*priceEnergy)).toFixed(5))
  })
  return (
    <>
      <section className="profit">
        <div className="profit-container w-11/12 lg:w-4/5 relative">
          <img className="top-0 left-0 hidden sm:flex absolute z-0" src="/Group 12.png"/>
          <img className="top-0 left-0 flex sm:hidden absolute z-0" src="/Group 13.png"/>
          <div className="flex z-20 absolute w-full h-full flex-col">
            <h1 className="calculator-head">DRAGON'S PROFIT CALCULATOR</h1>
            <div className="calculator-main">
              <div className="profit-inputs">
                <div className="profit-field">
                  <label>
                      Energy
                    </label>
                  <div className="profit-field-box">
                    <input type="number" name="energy" value={energy} onChange={(event) => {
                      setEnergy(event.target.value)
                    }}/>
                    <img src="/Layer 20.png" />
                  </div>
                </div>
                <div className="profit-field">
                  <label>
                      Idle Coins
                    </label>
                  <div className="profit-field-box">
                    <input type="number" name="idle" value={idle} onChange={(event) => {
                      setIdle(event.target.value)
                    }}/>
                    <img src="/Layer 20.png" />
                  </div>
                </div>
                <div className="profit-field">
                  <label>
                      Price of Energy
                    </label>
                  <div className="profit-field-box">
                    <input type="number" name="priceEnergy" value={priceEnergy} readOnly={true} onChange={(event) => {
                      setPriceEnergy(event.target.value)
                    }}/>
                    <img src="/Layer 20.png" />
                  </div>
                </div>
                <div className="profit-field">
                  <label>
                      Token Price
                    </label>
                  <div className="profit-field-box">
                    <input type="number" name="token" value={token} onChange={(event) => {
                      setToken(event.target.value)
                    }}/>
                    <img src="/Layer 20.png" />
                  </div>
                </div>
              </div>
              <div className="profit-arrow">
                <img alt={`Naughty Dragon Roadmap`} className="arrow absolute" src="/roadmap/arrow.webp" style={{width: '50px', margin: "auto 5px;", transform: "rotate(-90deg)"}} />
              </div>
              <div className="profit-inputs w30">
                <div className="profit-field">
                  <label>
                      Profit
                    </label>
                  <div className="profit-field-box">
                    <input type="number" name="profit" value={profit} readOnly={true}/>
                    <img src="/Layer 21.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="table">
        <img className="block mb-20 w-screen h-full" src="/table.jpg" />
      </section>
    </>
  )
}
