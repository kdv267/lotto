import {createSlice} from "@reduxjs/toolkit";

const fieldSlice = createSlice({
	name: 'field',
	initialState:{
		field:{
			first:[],
			second:[]
		}
	},
	reducers: {
		addNumber(state, action) {
			if (action.payload.type === 'first'){
				state.field.first.push(action.payload.newNum)
			} else {
				state.field.second.push(action.payload.newNum)
			}

		},
		removeNumber(state, action) {
			if (action.payload.type === 'first'){
				state.field.first = state.field.first.filter(el => el !== action.payload.newNum)
			} else {
				state.field.second = state.field.second.filter(el => el !== action.payload.newNum)
			}

		},
		randomNumber(state,action) {
			state.field = {
				first: action.payload.result.first,
				second: action.payload.result.second
			}
		},
		sendResult(state, action) {

		}
	}
})

export const {addNumber,removeNumber,sendResult, randomNumber} = fieldSlice.actions

export default fieldSlice.reducer