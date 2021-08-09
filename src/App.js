import { useState, useEffect } from 'react'
import React from 'react'

import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'

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

  const openAddUsersModal = () => {
    setAddUsersModal(!showAddUsersModal)
  }

  const openPlaceBetsModal = () => {
    setPlaceBetsModal(!showPlaceBetsModal)
  }

  const openRaceModal = () => {
    setRaceModal(!showRaceModal)
  }
  
  return (
    <>
      <Container>
        <DisplayRacersButton />
      </Container>

      <Container>
        <AddUsersButton onClick={openAddUsersModal} />
        <AddUsersModal
          showModal={showAddUsersModal}
          setModal={setAddUsersModal} />
      </Container>

      <Container>
        <PlaceBetsButton onClick={openPlaceBetsModal} />
        <PlaceBetsModal 
          showModal={showPlaceBetsModal}
          setModal={setPlaceBetsModal} />
      </Container>

      <Container>
        <RaceButton onClick={openRaceModal} />
        <RaceModal 
          showModal={showRaceModal}
          setModal={setRaceModal} />
      </Container>
    </>
  );
}

export default App;
