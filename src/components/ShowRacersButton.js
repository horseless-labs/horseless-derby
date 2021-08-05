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
          //console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson);
          toggleReady(!ready);
          //console.log(myJson.horses[0]);
        });
      }
      
  //useEffect(() => {
    //getData()
    //console.log("getData() fired")
  //}, []);

  return (
    <>
      <button className="showRacersButton" onClick={getData}>Show Racers!</button>
      <Table sentData={data['horses']} />
      <p>{console.log("Hello from the bottom of ShowRacersButton!")}</p>
      <p>{console.log(data['horses'])}</p>
    </>
  )
}

export default ShowRacersButton
