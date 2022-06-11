import React, {useState} from 'react';
import styles from './Cell.module.css'

const Cell = ({number}) => {

	const [checked, setChecked] = useState(false)

	const checkNum =(event) => {
		setChecked(!checked)
	}

	return (
		<button onClick={checkNum} value={checked} name={number} className={checked ? styles.active : styles.none }>{number}</button>
	);
};

export default Cell;