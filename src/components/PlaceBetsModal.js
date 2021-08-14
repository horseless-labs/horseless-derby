import { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const ModalWrapper = styled.div`
    width: 400px;
    height: 350px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    display: inline-block;
    padding: 50px;
    margin: center;
    width: 100%;

    line-height: 1.8;
    color: #141414;

    label {
        display: inline-block;
        margin-right: 10px;
    }

    input {
        margin: 10px;
    }

    button {
        display: inline-block;
    }
`

const PlaceBetsModal = ({ showModal, setShowModal, racers, racerCount }) => {
    const modalRef = useRef();
    const [bettor, setBettor] = useState("Select a Bettor")
    const [horse, setHorse] = useState("Select a Horse")
    const [position, setPosition] = useState("Select a Position")

    // Temporary dummy data
    const bettors = [
        {name: "Marco", funds: 100},
        {name: "Micah", funds: 100}
    ]

    const horseSelection = (e) => {
        setHorse(e.target.value)
    }

    const positionSelection = (e) => {
        setPosition(e.target.value)
    }

    const userSelection = (e) => {
        setBettor(e.target.value)
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const insertRacers = () => {
        let elements = []
        Object.entries(racers).map(([key, value]) => {
            elements.push(<option key={value.name} value={value.name}>{value.name}</option>)
        })
        return (elements)
    }

    const insertPlaces = () => {
        let elements = [
            <option>1st</option>,
            <option>2nd</option>,
            <option>3rd</option>,
        ]

        for (let i = 4; i <= racerCount; i++) {
            elements.push(<option>{i}th</option>)
        }

        return (elements)
    }

    return (
        <>
        {showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            <label htmlFor='horse-selection'>Horse:</label>
                            <select onChange={horseSelection} className='horse-selection'>
                                <option key='initial-horse' value="Select a Horse"> -- Select a Horse -- </option>
                                {insertRacers()}
                            </select><br />

                            <label htmlFor='finish-position'>Position</label>
                            <select onChange={positionSelection} className='finish-position'>
                                <option key='initial-position' value="Select a position"> -- Select a Position -- </option>
                                {insertPlaces()}  
                            </select><br />

                            <label htmlFor='user-selection'>Bettor:</label>
                            <select onChange={userSelection} className='user-selection'>
                                <option key='initial-user' value="Select a Bettor"> -- Select a Bettor -- </option>
                                {console.log(bettors)}
                                {bettors.map((bettor) => <option key={bettor.label} value={bettor.value}>{bettor.name}</option>)}
                            </select><br />

                            <label htmlFor='bet-amount'>Bet Amount:</label>
                            <input className='bet-amount' placeholder="0" /><br />

                            <button className="saveBet">OK</button>
                            <button className="cancel">Cancel</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(!showModal)} />
                    </ModalWrapper>
                </div>
        ) : null}
        </>
    )
}

export default PlaceBetsModal