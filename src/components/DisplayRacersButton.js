import { useState, useEffect } from 'react'
import Table from './Table'

const DisplayRacersButton = () => {
  const [data, setData] = useState([])
  const [horsesLoaded, setHorsesLoaded] = useState(false)
  const [racerCount, setRacerCount] = useState(5)
  
  const getData = () => {
    fetch('horses.json'
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
          setHorsesLoaded(true);
    });
  }

  const selectCompetitors = (raceSize) => {
    let ueg = {};
    let pop_size = Object.keys(data).length;
    let indices = []

    for (let i = 0; i < raceSize; i++) {
      let index = Math.floor(Math.random() * pop_size)
      if (indices.includes(index)) {
        continue
      } else {
        ueg[i] = data[index]
        indices.push(index)
      }
    }
    
    return ueg
  }

  var horses = selectCompetitors(racerCount)

  return (
    <>
      <Table sentData={horses} horsesLoaded={horsesLoaded} />
      <button className="showRacersButton" onClick={getData}>Show Racers!</button>
    </>
  )
}

export default DisplayRacersButton
