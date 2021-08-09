import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../globalStyles'
import { MdClose } from 'react-icons/md'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const AddUsersModal = ({ showAddUsersModal, setAddUsersModal }) => {
    return (
        <>
        {showAddUsersModal ? (
            <Background>
                <ModalWrapper showAddUsersModal={showAddUsersModal}>
                    <ModalContent>
                        <h1>Lorem Ipsum</h1>
                    </ModalContent>
                </ModalWrapper>
            </Background>
        ) : null}
        </>
    )
}

export default AddUsersModal