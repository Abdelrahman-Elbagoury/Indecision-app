import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal
        className= 'modal-box'
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleRemoveRandom}
        contentLabel= "Example Modal"
        >
            <h3 className='modal__title'>SelectedOption</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className= 'button' onClick = {props.handleRemoveRandom}> Okay </button>
        </Modal>
    )
}


export default OptionModal


