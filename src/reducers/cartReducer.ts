import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
	name:"cart",
	initialState:{
		products:[],
		addres:[],
		discount:0,
		delivery:0
	},
	reducers:{
		addProduct:(state:any,action)=>{
			let products = [...state.products];
			let id = action.payload.data.id;

			let index = products.findIndex(item => item?.id === id);

			if(index > -1){
				products[index].qt += action.payload.qt;
			} else{
				products.push({
					...action.payload.data,
					qt:action.payload.qt
				});
			}
			state.products = products;
		},
		changeProduct:(state:any,action)=>{
			let products = [...state.products];

			if(action.payload.type == "+"){
				products[action.payload.key].qt ++; 
			} else if(products[action.payload.key].qt > 0) {
				products[action.payload.key].qt --;
				if(products[action.payload.key].qt <= 0){
					products = products.filter((item,index)=> index != action.payload.key)
				}
			}

			state.products = products;
		}
	}
})

export const { addProduct, changeProduct  } = slice.actions;
export default slice.reducer;