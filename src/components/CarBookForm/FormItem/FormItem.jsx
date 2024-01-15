/* eslint-disable react/prop-types */
import styles from "./FormItem.module.css";

function FormItem({ item }) {
    return (
        <div className={styles.formItem}>
            <label>
                <img src={item.icon} alt={item.text} />
                {item.text}
            </label>
            {item.type === "select" && (
                <select>
                    {item.options.map((option) => (
                        // eslint-disable-next-line react/jsx-key
                        <option>{option}</option>
                    ))}
                </select>
            )}
            {item.type === "date" && <input type="date" />}
        </div>
    );
}

export default FormItem;
