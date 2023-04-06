import { Container,
 ProductButtonArea,
 ProductInfoArea,
 ProductPhoto,
 ProductPhotoArea,
 ProductName,
 ProductPrice,
 ProductIngredients,
 ProductButton,

     } from "./styled";


type Data = {
	id:number;
	id_cat:number;
	image:string;
	ingredients:string; 
	name:string;
	points:number;
	price:number;	
}

type Props ={
	onClick:(data:Data)=>void,
	data:{
		id:number;
		id_cat:number;
		image:string;
		ingredients:string; 
		name:string;
		points:number;
		price:number;
	},
};

export const ProductItem = ({onClick,data}:Props)=>{
	return(
		<Container onClick={()=>onClick(data)}>
			<ProductPhotoArea>
				<ProductPhoto src={data.image}/>
			</ProductPhotoArea>
			<ProductInfoArea>
				<ProductName>{data.name}</ProductName>
				<ProductPrice>R${data.price}</ProductPrice>
				<ProductIngredients>{data.ingredients}</ProductIngredients>
			</ProductInfoArea>
			<ProductButtonArea>
				<ProductButton src="/img/next.png" />
			</ProductButtonArea>
		</Container>
	);
};