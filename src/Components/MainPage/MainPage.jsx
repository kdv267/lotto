import React from 'react';
import styles from './MainPage.module.css'
import Field from "../Field/Field";
import {randomNumber, sendResult} from "../../store/fieldSlice";
import {useDispatch, useSelector} from "react-redux";
import {getRandomField} from "./randomField";

const firstField = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
const secondField = [1,2]

const MainPage = () => {

	const dispatch = useDispatch()

	const arr = useSelector(state => state.field.field)


	const showResult = () => {
	const result = getRandomField()

	const firstRes = result.first.filter((el) => {
			return arr.first.indexOf(el) !== -1
		})
	const secondRes = result.second.filter((el) => {
			return arr.second.indexOf(el) !== -1
		})

	const superRes = (firstRes + secondRes >= 4)

	const superResult = {
		selectedNumber: {
			firstField: arr.first,
			secondField: arr.second,
		},
		isTicketWon:superRes
	}
		dispatch(sendResult({superResult}))

	}



	const randomField = () => {
		const result = getRandomField()
		dispatch(randomNumber({result}))
	}


	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<div className={styles.title}>
					<h4 className={styles.ticket}>Билет 1</h4>
					<button onClick={randomField} className={styles.wandBut}>
						<img className={styles.wand} src='./magic-wand.svg' width='20px' height='20px'/>
					</button>
				</div>
				<div className={styles.mainfield}>
					<div className={styles.row}>
						<p className={styles.titleField}>Поле 1</p> <p className={styles.rules}>Отметьте 8 чисел</p>
					</div>
					<div className={styles.field}>
						<Field type={'first'} field={firstField}/>
					</div>
				</div>
				<div className={styles.subfield}>
					<div className={styles.row}>
						<p className={styles.titleField}>Поле 2</p> <p className={styles.rules}>Отметьте 1 число</p>
					</div>
					<div className={styles.field}>
						<Field type={'second'} field={secondField}/>
					</div>
				</div>
				<div className={styles.resultButton}>
					<button onClick={showResult} className={styles.button}>Показать результаты</button>
				</div>

			</div>
		</div>
	);
};

export default MainPage;