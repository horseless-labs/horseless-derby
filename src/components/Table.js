import { useState, useEffect, useCallback } from 'react'

const Table = ({ sentData, racersReady, setRacersReady }) => {
  const [racers, setRacers] = useState({})
  const [selected, setSelected] = useState([])
  
  useEffect(() => {
    setRacers(sentData)
  }, [sentData]);

  const printHorse = () => {
    var elements = []

    if (racersReady) {
      {Object.entries(sentData).map(([key, value]) => {
        elements.push(<tr key={key}><td>{value.name}</td><td>{value.odds}</td></tr>)
      })}
    }
    
    return (elements)
  }

  // const keyPress = useCallback(e => {
  //   if (e.key === 'Escape' && racersReady) {
  //     console.log("Horses can be loaded again")
  //     setRacersReady(false)
  //   }
  // }, [setRacersReady, racersReady])

  // useEffect(() => {
  //   document.addEventListener('keydown', keyPress)
  // }, [keyPress])
  
  return (
    <>
      <table className='horse-table'>
        <thead>
          <tr className='table-header'>
            <th>Name</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody>
          {/* {selectCompetitors(5)} */}
          {printHorse()}
        </tbody>
      </table>
    </>

  )
}

export default Table
