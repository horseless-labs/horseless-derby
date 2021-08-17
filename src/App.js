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
  const [racerCount, setRacerCount] = useState(10)

  const [bets, setBets] = useState([])

  // TEMPORARY DUMMY DATA
  const [bettors, setBettors] = useState([
    {name: "Marco", funds: 100},
    {name: "Micah", funds: 100}
  ])

  const openAddUsersModal = () => {
    setAddUsersModal(!showAddUsersModal)
  }

  const openPlaceBetsModal = () => {
    setPlaceBetsModal(!showPlaceBetsModal)
  }

  const openRaceModal = () => {
    setRaceModal(!showRaceModal)
  }

  const addUser = (name, funds) => {
    console.log("Name is: " + name)
    console.log("Amount is: " + funds)
  }

  // Handles the list of current competitors from DisplayRacersButton
  const handleRacers = (horses) => {
    setRacers(horses)
  }

  useEffect(() => {
    // console.log("Hello, trying to useEffect for handleRacers()")
    // console.log(racers)
    // console.log(typeof racers)
  }, [racers])

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

  useEffect(() => {
    console.log(bets)
    console.log(bettors)
  }, [bets])
  
  return (
    <>
      <Container>
        <DisplayRacersButton
          handleRacers={handleRacers}
          racerCount={racerCount} />
      </Container>

      <Container>
        <AddUsersButton onClick={openAddUsersModal} />
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
          racers={racers} />
      </Container>
    </>
  );
}

export default App;
