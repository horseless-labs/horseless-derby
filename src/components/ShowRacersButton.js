import { useState, useEffect } from 'react'
import Table from './Table'

const ShowRacersButton = ({ onClick }) => {
  const [data, setData] = useState([])
  const [ready, toggleReady] = useState(false)
  
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
      <Table sentData={data['horses']} />
      <button className="showRacersButton" onClick={getData}>Show Racers!</button>
    </>
  )
}

export default ShowRacersButton
