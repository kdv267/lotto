import React, {useEffect, useState} from 'react';
import styles from './Field.module.css'
import Cell from "../Cell/Cell";

const Field = ({field}) => {

	const [numbers, setNumbers] = useState([])

	const checkNum =(event) => {
		const asd = +event.target.name
		setNumbers([...numbers, asd])
	}



	return (
		<div className={styles.container}>
		<div onClick={checkNum} className={styles.main}>
			{field.map(el => (
				<Cell  key={el} number={el}/>
			))}
		</div>
		</div>
	);
};

export default Field;