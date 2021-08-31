import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';



function MealItemForm(props){

  const [amountIsValid , setAmountIsValid] =  useState(true);
      const amountInputRef= useRef();

    const submitHandler = (event) =>{
        event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      
        setAmountIsValid(false);
        return; 
        
    }

    props.onAddToCart(enteredAmountNumber);

    
    }

   

return (
    <form className={styles.form}>
        <Input 
        ref={amountInputRef}
        label="Amount" input={{
            id:'amount',
            type: 'number',
            min: '0',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button onClick={submitHandler}>+ Add</button>
        {!amountIsValid && <p>please enter a valid amount</p>}
    </form>
);
}

export default MealItemForm;