import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.css'
import Field from "../Field/Field";
import {axiosField, randomNumber, sendResult} from "../../store/fieldSlice";
import {useDispatch, useSelector} from "react-redux";
import {getRandomField} from "./randomField";
import {Link} from "react-router-dom";

//Значения для заполнения кнопок
const firstFieldArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
const secondFieldArr = [1,2]

const MainPage = () => {
	const dispatch = useDispatch()
	const {firstField, secondField} = useSelector(state => state.field.field.selectedNumber)

	//Состояние хранящее правильность выбора количества чисел
	const [fieldValid, setFieldValid] = useState(false)

	//Сравнение отмеченных чисел со случайно сгенерированным полем
	const showResult = () => {
	const randomField = getRandomField()

	//Определяем количество совпадающих элементов в первом поле
	const firstRes = (randomField.first.filter((el) => {
			return firstField.indexOf(el) !== -1
		})).length
	//Определяем количество совпадающих элементов во втором поле
	const secondRes = (randomField.second.filter((el) => {
			return secondField.indexOf(el) !== -1
		})).length

	const result = {
		selectedNumber: {
			firstField,
			secondField,
		},
		isTicketWon:(firstRes + secondRes >= 4)
	}
	dispatch(sendResult(result))
	dispatch(axiosField())
	}

	//Генерация случайных чисел для игры
	const randomField = () => {
		const randomSelected = getRandomField()
		dispatch(randomNumber({randomSelected}))
	}

	//Проверка на количество отмеченных полей
	const validate = (first,second) => {
		if (first.length === 8 && second.length === 1 ){
			setFieldValid(true)
		} else {
			setFieldValid(false)
		}
	}
	const firstNum =  firstField.length
	const secondNum = secondField.length

	useEffect(() => {
		validate(firstField,secondField)
	},[firstField,secondField])

	return (
		<>
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
						<p className={styles.titleField}>Поле 1</p>
						<p className={styles.rules}>
							{   firstNum < 8 ?
								`Отмечено ${firstNum}  из 8 чисел` :
								( firstNum === 8 ? 'Выбрано максимум чисел' : 'Вы выбрали лишние числа')
							}
						</p>
					</div>
					<div className={styles.field}>
						<Field type={'first'} field={firstFieldArr}/>
					</div>
				</div>
				<div className={styles.subfield}>
					<div className={styles.row}>
						<p className={styles.titleField}>Поле 2</p> <p className={styles.rules}>
						{     secondNum === 1 ?
							`Выбор сделан`:
							'Выберите одно число'
						}
					</p>
					</div>
					<div className={styles.field}>
						<Field type={'second'} field={secondFieldArr}/>
					</div>
				</div>
				<div className={styles.resultButton}>
					<Link to='result'>
					<button disabled={!fieldValid} onClick={showResult} className={styles.button}>Показать результат</button>
					</Link>
				</div>

			</div>
		</div>
	</>
	);
};

export default MainPage;