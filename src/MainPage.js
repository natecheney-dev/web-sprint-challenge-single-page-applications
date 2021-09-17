import React, { useState, useEffect } from 'react'

import { useHistory} from 'react-router-dom';

export default function MainPage(){

    const history=useHistory();

    const gotoHome = () =>{
        history.push('/');
    }
    const gotoHelp = () =>{
        history.push('./pizza-form-container');
    }

    return(
        <div className = 'main-page'>
            <header>
                <nav>
                    <button id='home_button' onClick={gotoHome}>Home</button>
                    <button id='order-pizza' onClick={gotoHelp}>Pizza</button>
                </nav>
                <div className='header-text'>
                    <h1>Lamda Eats</h1>
                </div>
            </header>
        <div className = 'top-stuff'>
            <img src = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt ="pizza img" ></img>
        </div>
        </div>
    )
}