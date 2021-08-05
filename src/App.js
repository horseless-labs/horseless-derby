import { useState, useEffect } from 'react'
import React from 'react'
import Table from './components/Table'
import ShowRacersButton from './components/ShowRacersButton'

function App() {
  //const [data, setData] = useState([]);
  const [ready, setReady] = useState(false);
  
  //const getData = () => {
    //fetch('horse_small.json'
      //, {
        //headers : {
          //'Content-Type': 'application/json',
          //'Accept': 'application/json'
        //}
      //})
        //.then(function(response) {
          //console.log(response)
          //return response.json();
        //})
        //.then(function(myJson) {
          ////setData([myJson]);
          //console.log(myJson[0]);
        //});
      //}
      
  //useEffect(() => {
    //getData()
    //console.log("getData() fired")
  //}, []);
  
  
  return (
    <div className="container">
      <ShowRacersButton
        onClick={() => setReady(!ready)} />
    </div>
  );
}

export default App;
