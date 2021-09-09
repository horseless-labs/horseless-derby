import { useState, useEffect } from 'react'
import Table from './Table'

import styled from 'styled-components'

const Container = styled.div`
display: block;
`

const DisplayRacersButton = ({ handleRacers, racerCount, racersReady, setRacersReady }) => {
  const [data, setData] = useState([])
  const [horsesLoaded, setHorsesLoaded] = useState(false)
  // const [racersReady, setRacersReady] = useState(false)
  const [horses, setHorses] = useState({})
  // const [racerCount, setRacerCount] = useState(5)

  const getData = () => {
    if (!horsesLoaded) {
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
    } else {
      console.log('horses already loaded')
    }
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
      let competitors = selectCompetitors(racerCount)
      setHorses(competitors)
      handleRacers(competitors)
      // ONLYFOR TESTING PURPOSES!!!!!
      // Effects:
      //    Commented   -> The table will only load once
      //    Uncommented -> The table will load indefinitely
      setHorsesLoaded(false)
    }
  }, [horsesLoaded])

  return (
    <>
      {racersReady ? (
        <Container>
          <Table sentData={horses} racersReady={racersReady} setRacersReady={setRacersReady} />< br />
          {/* <button className="showRacersButton" onClick={getData}>Show Racers!</button> */}
        </Container>
        ) : null}
      <Container>
        <button className="showRacersButton" onClick={getData}>Show Racers!</button>
      </Container>
    </>
  )
}

export default DisplayRacersButton
