import { CartArea ,
 CartHeader ,
 CartIcon ,
 CartText ,
 CartBody ,
 CartDown,
 ProductsArea , 
 ProductItem,
 ProductInfoArea,
 ProductPhoto,
 ProductName, 
 ProductPrice, 
 ProductQuantityArea,
 ProductQtText,
 ProductQtIcon
} from "./styled";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeProduct } from "../../reducers/cartReducer";

type Item = {
	id:number;
	id_cat:number;
	image:string;
	ingredients:string; 
	name:string;
	points:number;
	price:number;	
	qt:number;
}

export const Cart = ()=>{

	const dispatch = useDispatch();

	const cart = useAppSelector(state => state.cart);

	const [show , setShow] = useState(false);

	const handleCartClick = ()=>{
		setShow(!show);
	}

	const handleProductChange = (key:number,type:string)=>{
		dispatch(changeProduct({key:key,type:type}))
	}

	return(
		<CartArea>
			<CartHeader onClick={handleCartClick}>
				<CartIcon src="img/cart.png" />
				<CartText>Meu Carrinho ({cart.products.length})</CartText>
				<CartDown show={show} src="/img/down.png" />
			</CartHeader>
			<CartBody show={show}>
				<ProductsArea>

					{cart.products.map((e:Item,i)=>

						<ProductItem key={i}>
							<ProductPhoto src={e.image} />
							<ProductInfoArea>
								<ProductName>
									{e.name}
								</ProductName>
								<ProductPrice>
								R$ {(e.price).toFixed(2)}
								</ProductPrice>
							</ProductInfoArea>
							<ProductQuantityArea>
							<ProductQtIcon src="img/minus.png"
							onClick={()=>handleProductChange(i,"-")}
							 />
								<ProductQtText>{e.qt}</ProductQtText>
							<ProductQtIcon src="img/plus.png" 
							onClick={()=>handleProductChange(i,"+")}
							/>
							</ProductQuantityArea>
						</ProductItem>


					)}

					

				</ProductsArea>
			</CartBody>
		</CartArea>
	);
}

