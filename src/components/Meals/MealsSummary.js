import styles from './MealsSummary.module.css';

function MealsSummary(){
    return (
        <section className={styles.summary}>
          <h2>Delicious Food, Delivered To You</h2>
          <h4>
            Choose your favorite meal
            and enjoy a delicious lunch or dinner at home.
          </h4>
        
        </section>
      );
}

export default MealsSummary;