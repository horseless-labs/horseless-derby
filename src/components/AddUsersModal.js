import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../globalStyles'
import { MdClose } from 'react-icons/md'

const AddUsersModal = ({ showModal , setModal }) => {
    return (
        <>
        {showModal ? (
                <div className='background'>
                    <modal-wrapper showAddUsersModal={showModal}>
                        <modal-content>
                            <h1>Lorem Ipsum</h1>
                        </modal-content>
                    </modal-wrapper>
                </div>
        ) : null}
        </>
    )
}

export default AddUsersModal