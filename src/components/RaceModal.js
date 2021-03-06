import { useRef } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const ModalWrapper = styled.div`
    width: 400px;
    height: 1fr;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: block;
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
    position: center;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const RaceModal = ({ showModal, setShowModal, bettors, bets, racers, setRacers, handleBets, racersReady, setRacersReady }) => {
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
            handleBets()
            setRacers([])
        }
    }

    const searchRacers = (query) => {
        for (const racer in racers) {
            if (racers[racer].name === query) {
                console.log("Hello from searchRacers()")
                console.log(racers[racer])
                return racers[racer]
            }
        }
    }

    const convertToWeights = (racers) => {
        console.log("Hello from convertToWeights()")
        Object.entries(racers).forEach((key, value) => {
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

        Object.entries(racers).forEach((key, value) => {
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
        return order
    }

    const runRace = () => {
        convertToWeights(racers)
        let race_order = weightedRandom(racers)
        console.log("Bettors are")
        console.log(bettors)
        for (const user in bets) {
            let user_amount = bets[user].amount
            let user_horse = bets[user].horse
            let user_place = parseInt(bets[user].position[0])

            console.log(user_amount)
            console.log(user_horse)
            console.log(user_place)
            if (race_order[user_place-1] === user_horse) {
                let racer = searchRacers(user_horse)
                let payout = parseInt(racer.odds.split('/')[0] * user_amount)
                bettors[user].funds += payout
            }

        }

        console.log("Race conclusion")
        console.log(race_order)
        console.log(bettors)

        let ueg = []
        ueg.push(<h3>{race_order[0]} came in 1st!</h3>)
        ueg.push(<h3>{race_order[1]} came in 2nd!</h3>)
        ueg.push(<h3>{race_order[2]} came in 3rd!</h3>)

        for (let i = 3; i < race_order.length; i++) {
            ueg.push(<h3>{race_order[i]} came in {[i+1]}th!</h3>)
        }

        return ueg
    }

    const handleClose = () => {
        setShowModal(!showModal)
        handleBets()
        setRacersReady(false)
        setRacers([])
    }

    return (
        <>
            { showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            {runRace()}
                            <button className="okButton" onClick={handleClose}>OK</button>
                        </ModalContent>
                        {/* <CloseModalButton aria-label='Close Modal'
                            onClick={handleClose} /> */}
                    </ModalWrapper>
                </div>
            ) : null }
        </>
    )
}

export default RaceModal