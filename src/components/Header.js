import React from'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header=({title,onAdd,showAdd})=>{
    const onClick=()=>{
        onAdd();
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'close':'Add'} onClick={onClick}/>
            
        </header>
    )
}
Header.defaultProps={
    title:'Task-Tracker'
}
Header.propTypes={
    title:PropTypes.string.isRequired,
}
// const headingStyle= {
//     color:'yellow',backgroundColor:'green'
// };
export default Header