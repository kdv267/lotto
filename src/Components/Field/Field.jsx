import React from 'react';
import styles from './Field.module.css'
import Cell from "../Cell/Cell";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, removeNumber} from "../../store/fieldSlice";

const Field = ({type,field}) => {

	const dispatch = useDispatch()

	const {firstField, secondField} = useSelector(state => state.field.field.selectedNumber)


	//Обработчик событий при нажатии на кнопку с числом
	const checkNum =(event) => {
		const newNum = +event.target.name

		if (event.target.type === 'submit'){
		if (type === 'first'){
			if (firstField.includes(newNum)) {
				dispatch(removeNumber({newNum,type}))
			} else{
				dispatch(addNumber({newNum,type}))
			}
		} else {
			if (secondField.includes(newNum)) {
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