import ReactDOM from 'react-dom'
import  lambdalogo from './images/logo.png';
import React, { useState, useEffect } from 'react'
import './App.css';
import { useHistory} from 'react-router-dom';



export default function PizzaForm(props){
    const{
        disabled,
        errors,
        values,
        submit,
        change
    } = props;

    const history = useHistory();

    const gotoHome = () =>{
        history.push('/');
    }
    const gotoHelp = () =>{
        history.push('./pizza-form-container');
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const [count,setCount] = useState(0);
    const countUp = () =>{
        setCount(count+1);
        change('counter', count+1);
    }
    const countDown = () =>{
        if(count <= 0){
            setCount(0)
        }
        else{
            setCount(count-1);
        }
        change('counter', count-1);
    }

    

    return (
        <div className = 'pizza-form-container' onSubmit={onSubmit}>
            <header>
                <nav>
                    <button id='home_button' onClick={gotoHome}>Home</button>
                    <button id='help_button' onClick={gotoHelp}>Pizza</button>
                </nav>
                
            </header>
           <div className = 'top-img'>
               {/* Put an img in here, css to width 100%*/}
               <img
                src = {lambdalogo}
                alt ="lambda eats image"></img>
           </div>
           <h1>Build your Own Pizza</h1>
           <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>
           <div className = "pizza-size-container">
            <h2>Choose Size</h2>

               <label>Size&nbsp;
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                        >
                            <option value=''>-Select-</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                    </select>  
               </label>
           </div>
           
           <div className = "pizza-sauce-container">
           <h2>Choose Sauce</h2>
               {/* Container to select pizza sauce*/}
                <label>Original Red&nbsp;
                    <input
                        type='radio'
                        name='sauce'
                        value='red'
                        onChange={onChange}
                    />
                </label>
                <label>Garlic Ranch&nbsp;
                    <input
                        type='radio'
                        name='sauce'
                        value='garlic'
                        onChange={onChange}
                    />
                </label>
                <label>BBQ Sauce&nbsp;
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq'
                        onChange={onChange}
                    />
                </label>
                <label>Spinach Alfredo&nbsp;
                    <input
                        type='radio'
                        name='sauce'
                        value='alfredo'
                        onChange={onChange}
                    />
                </label>
           </div>
           
           <div className = "pizza-toppings-container">
               {/* Container to select pizza toppings*/}
               <h2>Choose Toppings</h2>

                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input
                            type='checkbox'
                            name='cad_bacon'
                            checked={values.cad_bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input
                            type='checkbox'
                            name='itl_sausage'
                            checked={values.itl_sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Grilled Chicken
                        <input
                            type='checkbox'
                            name='chicken'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input
                            type='checkbox'
                            name='green_pepper'
                            checked={values.green_pepper}
                            onChange={onChange}
                        />
                    </label>
                    <label>Roasted Garlic
                        <input
                            type='checkbox'
                            name='garlic'
                            checked={values.garlic}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>
                    <label>Three Cheese
                        <input
                            type='checkbox'
                            name='three_cheese'
                            checked={values.three_cheese}
                            onChange={onChange}
                        />
                    </label>
                    <label>Extra Cheese
                        <input
                            type='checkbox'
                            name='extra_cheese'
                            checked={values.extra_cheese}
                            onChange={onChange}
                        />
                    </label>

           </div>
           <div className = "pizza-instructions-container">
               {/* Container to add pizza instructions*/}
               <label id = "name-text" >Customer's Name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
               <label id = "special-text" >Special Instructions:&nbsp;
                    <textarea
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                        />
                    </label>
            </div>
           <div className = "pizza-complete-container">
               {/* Container to select pizza amount and add to order*/}
               <div className = "counter">
                <h5>
                {count}
                </h5>
                <div className = "counter-buttons">
               <button 
                onClick ={countUp} 
                id = 'up'
                
               
               >
                    &#x276C;
               </button> 
               <button 
                onClick ={countDown} 
                id = 'down'
               
               > 
                    &#x276D;
               </button>
                </div>
               </div>
               <div className = "complete-button">
                {/* <button id = 'order-button' >submit</button> */}
                    <button disabled={disabled} onClick={onSubmit} id = 'order-button' >submit</button>
               </div>
           </div>

        

        </div>
    )
}