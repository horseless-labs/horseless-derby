import { useState, useEffect } from 'react'

const Table = ({ sentData, racersReady }) => {
  const [racers, setRacers] = useState({})
  
  useEffect(() => {
    setRacers(sentData)
  }, [sentData]);

  const printHorse = () => {
    var elements = []

    if (racersReady) {
      Object.entries(sentData).forEach(([key, value]) => {
        elements.push(<tr key={key}><td>{value.name}</td><td>{value.odds}</td></tr>)
      })
    }
    
    return (elements)
  }
  
  return (
    <div class="split right">
      <table className='horse-table'>
        <thead>
          <tr className='table-header'>
            <th>Name</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody>
          {printHorse()}
        </tbody>
      </table>
    </div>

  )
}

export default Table
