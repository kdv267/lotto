import React, {useEffect, useState} from 'react';
import styles from './Field.module.css'
import Cell from "../Cell/Cell";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, removeNumber} from "../../store/fieldSlice";

const Field = ({type,field}) => {

	const dispatch = useDispatch()

	const firstArr = useSelector(state => state.field.field.selectedNumber.firstField)
	const secondArr = useSelector(state => state.field.field.selectedNumber.secondField)

	//Обработчик события при нажатии на цифру
	const checkNum =(event) => {
		const newNum = +event.target.name

		if (event.target.type === 'submit'){
		if (type === 'first'){
			if (firstArr.includes(newNum)) {
				dispatch(removeNumber({newNum,type}))
			} else{
				dispatch(addNumber({newNum,type}))
			}
		} else {
			if (secondArr.includes(newNum)) {
				dispatch(removeNumber({newNum,type}))
			} else{
				dispatch(addNumber({newNum,type}))
			}
		}
	}
	}



	return (
		<div className={styles.container}>
		<div onClick={checkNum} className={styles.main}>
			{field.map(el => (
				<Cell type={type}  key={el} number={el}/>
			))}
		</div>
		</div>
	);
};

export default Field;