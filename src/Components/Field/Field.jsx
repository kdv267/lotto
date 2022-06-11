import React from 'react';
import styles from './Field.module.css'
import Cell from "../Cell/Cell";

const Field = () => {

	const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

	return (
		<div className={style}>
		<div className={styles.main}>
			{arr.map(el => (
				<Cell key={el} number={el}/>
			))}
		</div>
		</div>
	);
};

export default Field;