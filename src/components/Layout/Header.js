import React from 'react';
import styles from './Header.module.css';
import mealsImage from "../../assets/newmeals.jpeg";
import HeaderCartButton from './HeaderCartButton';

export default function Header(props){

    return (
        <>
         <header className={styles.header}>
             <h1>ReactMeal</h1>
             <HeaderCartButton onClick={props.onShowCart} />
         </header>
         <div className={styles['main-image']}>
             <img src={mealsImage} alt="table full of meals"/>
         </div>
        </>
    );

};