import { useState, useRef } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const ModalWrapper = styled.div`
    width: 400px;
    height: 300px;
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

const RaceModal = ({ showModal, setShowModal, bettors, bets, racers }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const convertToWeights = (racers) => {
        console.log("Hello from convertToWeights()")
        Object.entries(racers).map((key, value) => {
            let odds = racers[value].odds.split`/`.map(x => +x)
            let weight = odds[1] / (odds[0] + odds[1])
            racers[value].weight = weight
        })
    }

    return (
        <>
            { showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            {convertToWeights(racers)}
                            {console.log("After convertToWeights() has been run")}
                            {console.log(racers)}
                            <button className="okButton" onClick={() => setShowModal(!showModal)}>OK</button>
                        </ModalContent>
                    </ModalWrapper>
                </div>
            ) : null }
        </>
    )
}

export default RaceModal