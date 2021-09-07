import { useState, useEffect } from 'react'
import React from 'react'

import styled from 'styled-components'

import DisplayRacersButton from './components/DisplayRacersButton'
import AddUsersButton from './components/AddUsersButton'
import PlaceBetsButton from './components/PlaceBetsButton'
import RaceButton from './components/RaceButton'

import AddUsersModal from './components/AddUsersModal'
import PlaceBetsModal from './components/PlaceBetsModal'
import RaceModal from './components/RaceModal'

const Container = styled.div`
  display: flex;
`

function App() {
  const [ready, setReady] = useState(false);
  const [showAddUsersModal, setAddUsersModal] = useState(false)
  const [showPlaceBetsModal, setPlaceBetsModal] = useState(false)
  const [showRaceModal, setRaceModal] = useState(false)

  const [racers, setRacers] = useState([])
  const [racerCount, setRacerCount] = useState(1)

  const [bets, setBets] = useState([])
  const [bettors, setBettors] = useState([])

  const handleLocalStorage = () => {
    let local_bettors = localStorage.getItem('bettors')
    let local_bets = localStorage.getItem('bets')

    console.log("local_bettors looks like")
    console.log(local_bettors)
    console.log("local_bets looks like")
    console.log(local_bets)

    if (local_bettors !== null) {
      setBettors(JSON.parse(local_bettors))
    }

    if (local_bets !== null) {
      setBets(JSON.parse(local_bets))
    }
  }

  const openAddUsersModal = () => {
    handleLocalStorage()
    setAddUsersModal(!showAddUsersModal)
  }

  const openPlaceBetsModal = () => {
    handleLocalStorage()
    setPlaceBetsModal(!showPlaceBetsModal)
  }

  const openRaceModal = () => {
    setRaceModal(!showRaceModal)
  }

  const addUser = (name, funds) => {
    console.log("Name is: " + name)
    console.log("Amount is: " + funds)
    setBettors([...bettors, {name: name, funds: parseInt(funds)}])
    console.log("Hello from addUser()")
    console.log(bettors)
    localStorage.setItem('bettors', JSON.stringify(bettors))
    // handleLocalStorage()
  }

  // Handles the list of current competitors from DisplayRacersButton
  const handleRacers = (horses) => {
    setRacers(horses)
  }

  const handleBets = () => {
    setBets([])
  }

  const handleFunds = (username, changeAmount) => {
    for (let i = 0; i < bettors.length; i++) {
      if (bettors[i].name === username) {
        bettors[i].funds += changeAmount
      }
    }
  }

  const saveBet = (bettor, horse, position, amount) => {
    setBets([...bets, {bettor: bettor, horse: horse, position: position, amount:amount}])
    handleFunds(bettor, -amount)
  }

  useEffect(() => {}, [racers])

  useEffect(() => {
    if (bettors !== null && bettors.length !== 0) {
      console.log("current bettors added to localStorage")
      console.log(bettors)

      console.log("current bets added to localStorage")
      console.log(bets)
      
      localStorage.setItem('bettors', JSON.stringify(bettors))
      localStorage.setItem('bets', JSON.stringify(bets))
    }

  }, [bets, bettors])
  
  return (
    <>
      <Container>
        <DisplayRacersButton
          handleRacers={handleRacers}
          racerCount={racerCount} />
      </Container>

      <Container>
        <AddUsersButton onClick={openAddUsersModal} bettors={bettors} />
        <AddUsersModal
          showModal={showAddUsersModal}
          setShowModal={setAddUsersModal}
          addUser={addUser} />
      </Container>

      <Container>
        <PlaceBetsButton onClick={openPlaceBetsModal} />
        <PlaceBetsModal 
          showModal={showPlaceBetsModal}
          setShowModal={setPlaceBetsModal}
          bettors={bettors}
          racers={racers}
          racerCount={racerCount}
          saveBet={saveBet} />
      </Container>

      <Container>
        <RaceButton onClick={openRaceModal} />
        <RaceModal 
          showModal={showRaceModal}
          setShowModal={setRaceModal}
          bettors={bettors}
          bets={bets}
          racers={racers}
          handleBets={handleBets} />
      </Container>
    </>
  );
}

export default App;
