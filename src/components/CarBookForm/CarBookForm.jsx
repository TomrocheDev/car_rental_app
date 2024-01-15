/* eslint-disable react/prop-types */
import styles from "./CarBookForm.module.css";
import FormItem from "./FormItem/FormItem";

function CarBookForm({ data }) {
    return (
        <div className={`container ${styles.carBookForm}`} id="book-car">
            <h2>Book a car</h2>
            <form>
                {data.map((i) => (
                    <FormItem item={i} key={i.text} />
                ))}
                <button className={styles.formBtn}>Search</button>
            </form>
        </div>
    );
}

export default CarBookForm;
