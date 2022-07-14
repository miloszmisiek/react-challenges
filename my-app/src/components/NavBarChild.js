import React from 'react'

function NavBarChild(props) {
    return (
        <form>
            <label htmlFor='username'>Username:</label>
            <input id='username' name='username' />
            <label htmlFor='password'>Password:</label>
            <input id='password' name='password' />
            <button onClick={props.handleClick}>Submit</button>
        </form>
    )
}

export default NavBarChild
