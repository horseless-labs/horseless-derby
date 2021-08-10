import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../globalStyles'


const PlaceBetsModal = ({ showModal, setModal }) => {
    return (
        <>
        {showModal ? (
                <div className='background'>
                    <modal-wrapper showPlaceBetssModal={showModal}>
                        <modal-content>
                            <h1>Nonsense</h1>
                        </modal-content>
                    </modal-wrapper>
                </div>
        ) : null}
        </>
    )
}

export default PlaceBetsModal