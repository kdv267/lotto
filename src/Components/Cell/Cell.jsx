import React, {useEffect, useState} from 'react';
import styles from './Cell.module.css'
import {useSelector} from "react-redux";

let checked = false

const Cell = ({type,number}) => {

	const arr = useSelector(state => state.field.field.selectedNumber)


	if (type === 'first') {
		checked = arr.firstField.includes(number)
	} else{
		checked = arr.secondField.includes(number)
	}


	return (
		<button
		        name={number}
		        className={checked ? styles.active : styles.none}
		>
			{number}
		</button>
	);
};

export default Cell;