import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ event, title }) => (
    <button onClick={event}>
      {title}
    </button>
)

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {allClicks.join(' ')}
      </div>
    )
}

const App = () => {
    const [ counter, setCounter ] = useState(0)
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])


//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

    const setToValue = (value) => () => 
        setCounter(value)
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setClicks({ ...clicks, left: clicks.left + 1 })
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setClicks({ ...clicks, right: clicks.right + 1 })
    }
    
    return (
        <>
            <Display counter={counter}/>
            <Button event={setToValue(counter + 1)} title="plus" />
            <Button event={setToValue(counter - 1)} title="minus" />
            <Button event={setToValue(0)} title="zero" />
            <div>
                {clicks.left}
                <Button event={handleLeftClick} title="left"/>
                <Button event={handleRightClick} title="right"/>
                {clicks.right}
            <History allClicks={allClicks} />
            </div>
        </>
    )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)