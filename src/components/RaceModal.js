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

    const weightedRandom = (racers) => {
        console.log("Hello from weightedRandom()")
        let order = []

        let names = []
        let weights = []

        Object.entries(racers).map((key, value) => {
            names.push(racers[value].name)
            weights.push(racers[value].weight)
        })

        let length = names.length
        for (let j = 0; j < length; j++) {
            let i;

            for (i = 0; i < weights.length; i++) {
                weights[i] += weights[i - 1] || 0
            }

            let random = Math.random() * weights[weights.length - 1]

            for (i = 0; i < weights.length; i++) {
                if (weights[i] > random) {
                    break
                }
            }

            order.push(names[i])
            names.splice(i, 1)
            weights.splice(i, 1)
        }
        console.log(order)
        return order
    }

    return (
        <>
            { showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            {convertToWeights(racers)}
                            {weightedRandom(racers)}
                            <button className="okButton" onClick={() => setShowModal(!showModal)}>OK</button>
                        </ModalContent>
                    </ModalWrapper>
                </div>
            ) : null }
        </>
    )
}

export default RaceModal