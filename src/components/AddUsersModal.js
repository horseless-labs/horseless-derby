import { useState, useEffect, useRef, useCallback  } from 'react'
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

const AddUsersModal = ({ showModal , setShowModal, addUser }) => {
    const [name, setName] = useState('')
    const [funds, setFunds] = useState(0)
    const modalRef = useRef();

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

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleFunds = (e) => {
        setFunds(e.target.value)
    }

    const handleClose = () => {
        setName('')
        setFunds(0)
        setShowModal(!showModal)
    }

    const saveUser = () => {
        addUser(name, funds)
    }

    return (
        <>
        {showModal ? (
                <div className='modal-background' ref={modalRef} onClick={closeModal}>
                    <ModalWrapper>
                        <ModalContent>
                            <label htmlFor='add-user-name'>User Name</label>
                            <input
                                className='add-user-name'
                                placeholder="User Name" 
                                onInput={handleName} />

                            <label htmlFor='add-user-amount'>Starting Funds</label>
                            <input
                                className='add-user-amount'
                                placeholder="0"
                                onInput={handleFunds} />

                            <button className="saveBet" onClick={saveUser}>OK</button>
                            <button className="cancel" onClick={handleClose}>Cancel</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close Modal'
                            onClick={handleClose} />
                    </ModalWrapper>
                </div>
        ) : null}
        </>
    )
}

export default AddUsersModal