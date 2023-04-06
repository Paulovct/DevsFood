import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartReducer";

import userReducer from "./reducers/userReducer"

export const store = configureStore({
	reducer: {
		user:userReducer,
		cart:cartReducer
	}
})

export type RootState = ReturnType<typeof store.getState>;