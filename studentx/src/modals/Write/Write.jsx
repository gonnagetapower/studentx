import React, { useState, useRef } from 'react';
import { ModalCard, ModalPage } from '@vkontakte/vkui';
import { FormTextarea, InputItem } from '../../components';
import useAutosizeTextArea from '../../hooks/useAutosize';

import './Write.css'

const Write = ({ id }) => {

    const [textAreaValue, setTextAreaValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleTextarea = (e) => {
        setTextAreaValue(e.target.value)
    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        console.log('Письмо' , textAreaValue)
        console.log('Цена', inputValue)
    }

    const textAreaRef = useRef(null)
    useAutosizeTextArea(textAreaRef.current, textAreaValue)

    return (
        <ModalCard id={id} >
            <div className='write-card'>
                <textarea
                    type="text"
                    name='write'
                    placeholder={'Добавьте сопроводительное письмо'}
                    value={textAreaValue}
                    onChange={handleTextarea}
                    className='form-textarea write-card__textarea'
                    ref={textAreaRef}
                />
                <input
                    value={inputValue}
                    onChange={handleInput}
                    className="inputItem write-card__input"
                    placeholder="Укажите цену"
                    type="number"
                />
                <button className='button write-card_btn' onClick={handleSubmit}>Написать</button>
            </div>
        </ModalCard>
    );
};

export default Write;
