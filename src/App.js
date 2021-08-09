import { useState, useEffect } from 'react'
import React from 'react'

import styled from 'styled-components'
import { GlobalStyle } from './globalStyles'

import DisplayRacersButton from './components/DisplayRacersButton'
import AddUsersButton from './components/AddUsersButton'
import PlaceBetsButton from './components/PlaceBetsButton'
import RaceButton from './components/RaceButton'

import AddUsersModal from './components/AddUsersModal'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {
  const [ready, setReady] = useState(false);
  const [showAddUsersModal, setAddUsersModal] = useState(false)

  const openAddUsersModal = () => {
    console.log(showAddUsersModal)
    setAddUsersModal(!showAddUsersModal)
    console.log(showAddUsersModal)
  }
  
  return (
    <>
      <Container>
        <DisplayRacersButton /><p></p>
      </Container>

      <Container>
        <AddUsersButton onClick={openAddUsersModal} />
        <AddUsersModal
          showAddUsersModal={showAddUsersModal}
          setAddUsersModal={setAddUsersModal} />

        <PlaceBetsButton />
        <RaceButton />
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
