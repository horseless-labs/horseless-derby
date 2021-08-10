import { useState, useEffect, useRef  } from 'react'
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

const AddUsersModal = ({ showModal , setModal }) => {
    return (
        <>
        {showModal ? (
                <div className='modal-background'>
                    <div className='modal-wrapper'>
                        <div className='modal-content'>
                            <label for='add-user-name'>Bettor:</label>
                            <input className='add-user-name' placeholder="User Name" />

                            <label for='add-user-amount'>Bet Amount:</label>
                            <input className='add-user-amount' placeholder="0" />
                        </div>
                    </div>
                </div>
        ) : null}
        </>
    )
}

export default AddUsersModal