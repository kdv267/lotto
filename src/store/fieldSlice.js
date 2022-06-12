import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";
import axiosRetry from "axios-retry";

//Запрос на случайный адрес повторяющийся 3 раза с интервалом в 2 секунды
export const axiosField = createAsyncThunk(
	'field/axiosField',
	async function (arr,{rejectWithValue,dispatch,getState}) {
		const result = getState().field.field
		console.log(result)
		axiosRetry(axios, {
			retries: 2,
			shouldResetTimeout: true,
			retryDelay: () => 2000,
			retryCondition: (_error) => true,
		})
		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/uewvsers',result)
		} catch (error) {
			return rejectWithValue(error.response.status)
		}
		
	}
)

const fieldSlice = createSlice({
	name: 'field',
	initialState:{
		field:{
			selectedNumber: {
				firstField: [],
				secondField: []
			},
			isTicketWon:false
		},
		status:null,
		error:null,
	},

	reducers: {
		addNumber(state, action) {
			if (action.payload.type === 'first'){
				state.field.selectedNumber.firstField.push(action.payload.newNum)
			} else {
				state.field.selectedNumber.secondField.push(action.payload.newNum)
			}

		},
		removeNumber(state, action) {
			if (action.payload.type === 'first'){
				state.field.selectedNumber.firstField = state.field.selectedNumber.firstField.filter(el => el !== action.payload.newNum)
			} else {
				state.field.selectedNumber.secondField = state.field.selectedNumber.secondField.filter(el => el !== action.payload.newNum)
			}

		},
		randomNumber(state,action) {
			state.field = {
				selectedNumber: {
					firstField: action.payload.randomSelected.first,
					secondField: action.payload.randomSelected.second
				},
				isTicketWon:false
			}
		},
		sendResult(state, action) {
			console.log(action.payload)
			state.field = {
				selectedNumber: {
					firstField: action.payload.selectedNumber.firstField,
					secondField: action.payload.selectedNumber.secondField
				},
				isTicketWon:action.payload.isTicketWon
			}
		},
		clearField(state, action) {
			state.field = {
				selectedNumber: {
					firstField: [],
					secondField: [],
				},
				isTicketWon:false
			}
		}
	},
	extraReducers: {
		[axiosField.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[axiosField.fulfilled]: (state) => {
			state.status = 'resolved'
		},
		[axiosField.rejected]: (state,action) => {
			state.status = 'rejected';
			state.error = action.payload
		},
	}
})

export const {addNumber,removeNumber,sendResult, randomNumber,clearField} = fieldSlice.actions

export default fieldSlice.reducer