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

const PlaceBetsModal = ({ showModal, setShowModal, bettors, racers, racerCount, saveBet }) => {
    const modalRef = useRef();
    const [bettor, setBettor] = useState('')
    const [horse, setHorse] = useState('')
    const [position, setPosition] = useState('')
    const [amount, setAmount] = useState(0)

    // States for handling missing data
    const [errorMessage, setErrorMessage] = useState('')

    const horseSelection = (e) => {
        setHorse(e.target.value)
    }

    const positionSelection = (e) => {
        setPosition(e.target.value)
    }

    const userSelection = (e) => {
        setBettor(e.target.value)
    }

    const betAmount = (e) => {
        setAmount(parseInt(e.target.value))
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
        })    // Functions to handle missing data
        return (elements)
    }

    const insertPlaces = () => {
        let elements = [
            <option key='1'>1st</option>,
            <option key='2'>2nd</option>,
            <option key='3'>3rd</option>,
        ]

        for (let i = 4; i <= racerCount; i++) {
            elements.push(<option key={i}>{i}th</option>)
        }

        return (elements)
    }

    // Must be a better way to do this. Fix later.
    const fundSearch = (username) => {
        for (let i = 0; i < bettors.length; i++) {
            if (bettors[i].name === username) {
                return bettors[i].funds
            }
        }
    }

    const handleBet = () => {
        if (horse === '') {
            setErrorMessage("No horse has been selected!")
        } else if (bettor === '') {
            setErrorMessage("No bettor has been selected!")
        } else  if (position === '') {
            setErrorMessage("No position has been selected!")
        } else if (amount === 0) {
            setErrorMessage("Empty amount for the bet!")
        } else if (typeof amount === NaN) {
            console.log(typeof amount)
            setErrorMessage("Need to have a number for the bet!")
        } else if (amount <= 0) {
            setErrorMessage("Bet needs to be a positive integer!")
        } else if (amount > fundSearch(bettor)) {
            setErrorMessage("Bettor does not have necessary funds")
        } else {
            saveBet(bettor, horse, position, amount)
            handleClose()
        }
    }

    const handleClose = () => {
        setBettor('')
        setHorse('')
        setPosition('')
        setAmount(0)
        setShowModal(!showModal)
    }

    return (
        <>
        {showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            {errorMessage && (
                                <p className='error'>{errorMessage}</p>
                            )}
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
                                {bettors.map((bettor) => <option key={bettor.label} value={bettor.value}>{bettor.name}</option>)}
                            </select><br />

                            <label htmlFor='bet-amount'>Bet Amount:</label>
                            <input className='bet-amount' placeholder='0' onChange={betAmount}/><br />

                            <button className="saveBet" onClick={handleBet}>OK</button>
                            <button className="cancel" onClick={handleClose}>Cancel</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal' onClick={handleClose} />
                    </ModalWrapper>
                </div>
        ) : null}
        </>
    )
}

export default PlaceBetsModal