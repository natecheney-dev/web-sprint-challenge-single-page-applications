
import PizzaForm from './PizzaForm';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import schema from './formScheme';
import * as yup from 'yup';


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',

  pepperoni: false,
  sausage: false,
  cad_bacon: false,
  itl_sausage: false,
  chicken: false,
  bacon: false,
  onions: false,
  green_pepper: false,
  garlic: false,
  pineapple: false,
  three_cheese: false,
  extra_cheese: false,
  special:'',
  counter: 0
}


const initialFormErrors= {
  name: '',
  sauce: '',
  size: ''
}





const initialPizza = [];
const initialDisabled = true;
const pizzaArr = []

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name,value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }


  const postPizza = newPizzaOrder =>{
    
        setPizza([newPizzaOrder, ...pizza]);
        
  }

  
  console.log(pizza);

  const formSubmit = () =>{
    const newPizzaOrder ={
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),

      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      cad_bacon: formValues.cad_bacon,
      itl_sausage: formValues.itl_sausage,
      chicken: formValues.chicken,
      bacon: formValues.bacon,
      onions: formValues.onions,
      green_pepper: formValues.green_pepper,
      garlic: formValues.garlic,
      pineapple: formValues.pineapple,
      three_cheese: formValues.three_cheese,
      extra_cheese: formValues.extra_cheese,

      
      special:formValues.special,
      counter:formValues.counter
    }
    postPizza(newPizzaOrder);
  }

  useEffect(()=>{
    setPizza(pizza);
  },[])
  
  
  useEffect(() => {
    schema.isValid(formValues).then(item => setDisabled(!item))
  }, [formValues])


  return (
    <div className = 'main-container'>
      
      <Switch>
      <Route path = {'/pizza-form-container'}>
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route path = {'/'}>
        <MainPage/>
      </Route>
      </Switch>
    </div>
  );
};
export default App;
