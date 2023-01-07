import React from 'react'

const TextInput = ({
    icon,
}) => {
  return (
    <React.Fragment>
        <div className='text-input-container'>
            <div className='text-input-icon'>
                <img src={icon} alt=""/>
            </div>
            <input />
        </div>
    </React.Fragment>
  )
}

export default TextInput