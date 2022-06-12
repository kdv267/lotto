import {createSlice} from "@reduxjs/toolkit";


const fieldSlice = createSlice({
	name: 'field',
	initialState:{
		field:{
			selectedNumber: {
				firstField: [],
				secondField: []
			},
			isTicketWon:false
		}
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
			state.field = {
				selectedNumber: {
					firstField: action.payload.arr.firstField,
					secondField: action.payload.arr.secondField
				},
				isTicketWon:action.payload.totalScore
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
	}
})

export const {addNumber,removeNumber,sendResult, randomNumber,clearField} = fieldSlice.actions

export default fieldSlice.reducer