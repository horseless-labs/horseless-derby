import { useState, useEffect } from 'react'

const Table = ({ sentData }) => {
  const [text, setText] = useState('')
  
  useEffect(() => {
    setText(sentData);
  }, [sentData]);
  
  
  function printHorse() {
    var elements = [];
    for (const horse in sentData) {
      elements.push(<tr><td>{sentData[horse].name}</td><td>{sentData[horse].odds}</td></tr>)
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
      
      {console.log("Hello from the bottom of Table")}
      {console.log(sentData)}
      {console.log(text)}
    </>
  )
}

export default Table
