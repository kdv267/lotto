import React from 'react';
import styles from './Result.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearField} from "../../store/fieldSlice";






const Result = () => {

	const {status, error, field} = useSelector(state => state.field)

	const dispatch = useDispatch()

	//Очистка поля перед возвращением на главную страницу
	const cleanSelected = () => {
		dispatch(clearField())
	}

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<div className={styles.title}>
					<h4>{field.isTicketWon ? 'Ваш билет выиграл' : 'Не повезло. Попробуйте еще раз! '}</h4>
				</div>

				<div className={styles.resultButton}>
					<Link to='/'>
					<button onClick={cleanSelected}  className={styles.button}>
						Сыграть еще раз
					</button>
					</Link>
				</div>
				<div className={styles.answer}>
					{status === 'loading' && <p className={styles.error}>Отправка результата</p>}
					{error && <p className={styles.error}>Не удалось отправить данные</p>}
				</div>

			</div>
		</div>
	);
};

export default Result;