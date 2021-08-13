import { useState, useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';

const Table = ({ sentData }) => {
  const [pool, setPool] = useState('')
  const [selected, setSelected] = useState([])
  
  useEffect(() => {
    setPool(sentData);
  }, [sentData]);
  
  const selectCompetitors = (raceSize) => {
    let ueg = {};
    var pop_size = Object.keys(pool).length;

    for (let i = 0; i < raceSize; i++) {
      let index = Math.floor(Math.random() * pop_size)
      ueg[i] = pool[index]
    }
    console.log(ueg)
  }

  const printHorse = () => {
    var elements = []

    {Object.entries(pool).map(([key, value]) => {
      elements.push(<tr key={key}><td>{value.name}</td><td>{value.odds}</td></tr>)
    })}
    
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
          {printHorse()}
        </tbody>
      </table>
      {selectCompetitors(5)}
    </>

  )
}

export default Table
