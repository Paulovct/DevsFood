import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

const PrivateRoute = ({ children, ...rest }:any)=>{

	const navigate = useNavigate();
	const token = useAppSelector(state=>state.user.token);
	useEffect(()=>{
		if(token == ""){
			navigate("/login")
		}
	},[])

	return (
		<Routes>
			<Route {...rest}>
			{children}
			</Route>
		</Routes>
	);
}

export default PrivateRoute;