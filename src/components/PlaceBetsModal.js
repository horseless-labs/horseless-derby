import { useState } from 'react'
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
    height: 250px;
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

const PlaceBetsModal = ({ showModal, setModal }) => {
    // Temporary dummy data
    const [bettor, setBettor] = useState("Select a Bettor")

    const bettors = [
        {name: "Marco", funds: 100},
        {name: "Micah", funds: 100}
    ]

    const nameChange = (e) => {
        setBettor(e.target.value)
    }

    return (
        <>
        {showModal ? (
                <div className='modal-background'>
                    <ModalWrapper>
                        <ModalContent>
                            <label htmlFor='add-user-name'>Bettor:</label>
                            <select onChange={nameChange} className='add-user-name'>
                                <option key="initial-list" value="Select a Bettor"> -- Select a Bettor -- </option>
                                {console.log(bettors)}
                                {bettors.map((bettor) => <option key={bettor.label} value={bettor.value}>{bettor.name}</option>)}
                            </select>

                            <label htmlFor='add-user-amount'>Bet Amount:</label>
                            <input className='add-user-amount' placeholder="0" />

                            <button className="saveBet">OK</button>
                            <button className="cancel">Cancel</button>
                        </ModalContent>
                    </ModalWrapper>
                </div>
        ) : null}
        </>
    )
}

export default PlaceBetsModal