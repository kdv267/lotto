import React from 'react';
import styles from './Result.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearField} from "../../store/fieldSlice";






const Result = () => {

	const result = useSelector(state => state.field.field.isTicketWon)

	const dispatch = useDispatch()

	//Очистка поля перед возвращением на главную страницу
	const cleanSelected = () => {
		dispatch(clearField())
	}

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<div className={styles.title}>
					<h4>{result ? 'Ваш билет выиграл' : 'Не повезло. Попробуйте еще раз! '}</h4>
				</div>

				<div className={styles.resultButton}>
					<Link to='/'>
					<button onClick={cleanSelected}  className={styles.button}>
						Сыграть еще раз
					</button>
					</Link>
				</div>

			</div>
		</div>
	);
};

export default Result;