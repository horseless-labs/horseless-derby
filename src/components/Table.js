import { useState, useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils';

const Table = ({ sentData }) => {
  const [text, setText] = useState('')
  const [selected, setSelected] = useState([])
  
  useEffect(() => {
    setText(sentData);
  }, [sentData]);
  
  const selectCompetitors = (population, racerCount) => {
    // let ueg = [];

    // for (let i = 0; i < racerCount; i++) {
    //   let index = Math.floor(Math.random() * population.length)
    //   //ueg.push(text[index])
    // }
    // for (const horse in sentData) {
    //   console.log(sentData[horse])
    // }
  }

  const printHorse = () => {
    var elements = []

    {Object.entries(sentData).map(([key, value]) => {
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
      {/* {selectCompetitors(text, 3)} */}
    </>

  )
}

export default Table
