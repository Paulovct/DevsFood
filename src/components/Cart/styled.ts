import styled from "styled-components";

type Props = {
	show:boolean;
}

export const CartArea = styled.div`
	background-color:#136713;
	border-top-right-radius:10px;
	border-top-left-radius:10px;
	position:fixed;
	bottom:0;
	right:30px;

`;

export const CartHeader = styled.div`
	width:290px;
	height:50px;
	display:flex;
	align-items:center;
	cursor:pointer;
	justify-content:space-between;
`;

export const CartIcon = styled.img`
	width:23px;
	height:auto;
	margin-left:10px;
	margin-right:10px;
`;
export const CartDown = styled.img<Props>`
	width:23px;
	height:auto;
	margin-left:10px;
	margin-right:10px;
	transform:rotate(${props=>props.show?"180":"0"}deg);
	transition:all ease .4s;
`;

export const CartText = styled.div`
	color:#FFF;
	font-size:17px;
`;

export const CartBody = styled.div<Props>`
	display:${props => props.show ? "block" : "none"};
	color:#FFF;
`;

export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
	display:flex;
	margin:15px 10px;
`;

export const ProductPhoto = styled.img`
	width:64px;
	height:auto;
	border-radius:10px;
`;

export const ProductInfoArea = styled.div`
	flex:1;
	margin-left:10px;
`;

export const ProductName = styled.div`
	font-size:15px;
	font-weight:bold;
`;

export const ProductPrice = styled.div`
	font-size:13px;
`;

export const ProductQuantityArea = styled.div`
	display:flex;
	align-items:center;
`;

export const ProductQtIcon = styled.img`
	width:13px;
	height:auto;
	cursor:pointer;
`;

export const ProductQtText = styled.div`
	font-size:13px;
	font-weight:bold;
	margin:0 5px;
`;