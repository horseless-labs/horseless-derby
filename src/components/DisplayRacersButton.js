import { useState, useEffect } from 'react'
import Table from './Table'

const DisplayRacersButton = () => {
  const [data, setData] = useState([])
  const [ready, toggleReady] = useState(false)
  const [racerCount, setRacerCount] = useState(5)
  
  const getData = () => {
    fetch('horse_small.json'
      , {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson);
          toggleReady(!ready);
    });
  }

  return (
    <>
      <Table sentData={data} />
      {/* <button classname={className} onClick={getData}>Bullshit</button> */}
      <button className="showRacersButton" onClick={getData}>Show Racers!</button>
    </>
  )
}

export default DisplayRacersButton
