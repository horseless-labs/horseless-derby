import { useRef } from 'react'
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

const ShowUsersModal = ({ showModal, setShowModal, bettors }) => {
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const handleClose = () => {
        setShowModal(!showModal)
    }

    const displayBettors = () => {
        let bettor_list = []
        for (const bettor in bettors) {
            console.log(bettors[bettor].name)
            let bettor_info = bettors[bettor].name + " has $" + bettors[bettor].funds
            bettor_list.push(<h3>{bettor_info}</h3>)
        }

        return bettor_list
    }

    return (
        <>
            { showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            {displayBettors()}
                            <button className="okButton" onClick={handleClose}>OK</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal'
                            onClick={handleClose} />
                    </ModalWrapper>
                </div>
            ) : null }
        </>
    )
}

export default ShowUsersModal