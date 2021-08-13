import { useState, useEffect } from 'react'

const Table = ({ sentData, horsesLoaded }) => {
  const [racers, setRacers] = useState({})
  const [selected, setSelected] = useState([])
  
  useEffect(() => {
    setRacers(sentData)
  }, [sentData]);

  const printHorse = () => {
    var elements = []

    if (horsesLoaded) {
      {Object.entries(sentData).map(([key, value]) => {
        elements.push(<tr key={key}><td>{value.name}</td><td>{value.odds}</td></tr>)
      })}
    }
    
    return (elements)
  }
  
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
