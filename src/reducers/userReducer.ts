import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
	name:"user",
	initialState:{
		email:"",
		name:"",
		token:""
	},
	reducers:{
		setEmail:(state , action)=>{
			state.email = action.payload;
		},
		setName: (state , action)=>{
			state.name = action.payload;
		},
		setToken:(state , action)=>{
			state.token = action.payload;
		}
	}
})

export const { setEmail , setName } = slice.actions;
export default slice.reducer;