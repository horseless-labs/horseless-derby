import { useState, useEffect } from 'react'

const Table = ({ sentData }) => {
  const [text, setText] = useState('')
  
  useEffect(() => {
    setText(sentData);
  }, [sentData]);
  
  
  function printHorse() {
    var elements = [];
    for (const horse in sentData) {
      elements.push(
        <tr  key={sentData[horse].name}> 
          <td>{sentData[horse].name}</td>
          <td>{sentData[horse].odds}</td>
        </tr>)
    }
    return (
      elements
    )
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
    </>
  )
}

export default Table
