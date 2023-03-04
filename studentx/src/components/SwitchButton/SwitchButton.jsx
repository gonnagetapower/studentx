import React from 'react'

import './SwitchButton.css'

const SwitchButton = ({onClickButton , buttonActive , firtTitle, secondTitle}) => {
    return (
        <div className="button-box">
            <div id="btn"></div>
            <button
                type="button"
                key={1}
                id={'1'}
                onClick={onClickButton}
                className={
                    buttonActive === '1' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'
                }>
                {firtTitle}
            </button>
            <button
                key={2}
                id={'2'}
                onClick={onClickButton}
                type="button"
                className={
                    buttonActive === '2' ? 'toggle-btn toggle-btn--active' : 'toggle-btn'
                }>
                {secondTitle}
            </button>
        </div>
    )
}

export default SwitchButton;