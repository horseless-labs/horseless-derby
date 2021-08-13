import { useState, useEffect } from 'react'
import { update } from 'react-spring'
import Table from './Table'

const DisplayRacersButton = () => {
  const [data, setData] = useState([])
  const [horsesLoaded, setHorsesLoaded] = useState(false)
  const [racersReady, setRacersReady] = useState(false)
  const [horses, setHorses] = useState({})
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
          console.log("horses loaded")
    })
  }

  const selectCompetitors = (raceSize) => {
    console.log("selecting competitors")

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

    setRacersReady(true)
    return ueg
  }

  useEffect(() => {
    if (horsesLoaded) {
      setHorses(selectCompetitors(racerCount))
      
      // ONLYFOR TESTING PURPOSES!!!!!
      setHorsesLoaded(false)
    }
  }, [horsesLoaded])

  return (
    <>
      <Table sentData={horses} racersReady={racersReady} setRacersReady={setRacersReady} />
      <button className="showRacersButton" onClick={getData}>Show Racers!</button>
    </>
  )
}

export default DisplayRacersButton
