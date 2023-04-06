import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { 
	Container,
	ProductArea,
	ProductDetails,
	ProductPhoto,
	ProductInfoArea,
	ProductButtons,
	ProductButton,
	ProductQuantityArea,
    	ProductName,
    	ProductIngredients,
    	ProductQuantity,
    	ProductPrice,
    	ProductQtText,
    	ProductQtImage

 } from "./styled";

import { useAppSelector } from "../../hooks/useAppSelector";
import { addProduct } from "../../reducers/cartReducer";
import { useDispatch } from "react-redux";

type Props ={
	data:{
		id?:number;
		id_cat?:number;
		image?:string;
		ingredients?:string; 
		name?:string;
		points?:number;
		price?:number;
	},
	setStatus:Dispatch<SetStateAction<boolean>>;
};

export const ModalProduct = ({data,setStatus}:Props)=>{

	const dispatch = useDispatch();

	const cart = useAppSelector(state => state.cart);

	const [qt , setQt] = useState(1);

 
	useEffect(()=>{
		setQt(1);
	},[data])

	const handleMinusQt = ()=>{
		if(qt > 0){
			setQt(qt-1);
		}
	}
	const handlePlusQt = ()=>{
		setQt(qt+1)
	}

	const handleAddCart = ()=>{
		dispatch(addProduct({data,qt}));
		setStatus(false);
	}
	return(
		<Container>
			<ProductArea>
				<ProductPhoto  src={data.image}/>
				<ProductInfoArea>
					<ProductDetails>
						<ProductName>{data.name}</ProductName>
						<ProductIngredients>{data.ingredients}</ProductIngredients>
					</ProductDetails>
					<ProductQuantityArea>
						<ProductQuantity>
							<ProductQtImage onClick={handleMinusQt} src="/img/minus.png" />
							<ProductQtText>{qt}</ProductQtText>
							<ProductQtImage onClick={handlePlusQt} src="/img/plus.png" />
						</ProductQuantity>
						<ProductPrice>
							
							R$ {data.price && 
							(data.price * qt).toFixed(2)
						}

							
						</ProductPrice>
						
					</ProductQuantityArea>
				</ProductInfoArea>
			</ProductArea>
			<ProductButtons>
				<ProductButton small={true} onClick={()=>setStatus(false)}>Cancelar</ProductButton>
				<ProductButton onClick={handleAddCart}>Adicionar ao Carrinho</ProductButton>
			</ProductButtons>
		</Container>
	);
}