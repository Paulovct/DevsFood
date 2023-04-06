import styled from "styled-components";

type PaginationItemProps = {
	active:number;
	current:number;
}

export const Container = styled.div`
	width:100%;
	padding:15px;
`;

export const CategoryArea = styled.div`
	color:#FFF;
	margin-top:20px;
	font-weight:bold;
`;

export const CategoryList = styled.div`
	display:flex;
	margin-top:10px;
`;

export const ProductArea = styled.div`
	margin-top:20px;
	margin-bottom:20px;
`;

export const ProductList = styled.div`
	display:grid;
	grid-template-columns:repeat(3,1fr);
	grid-gap:15px;
`;

export const ProductPaginationArea = styled.div`
	display:flex;
	flex-wrap:wrap;
	margin:20px;
`;

export const ProductPaginationItem = styled.div<PaginationItemProps>`
	background-color:${props=>props.active == props.current ? "#ccc" : "#FFF"};
	padding:5px 10px;
	border-radius:5px;
	box-shadow:0px 3px 6px rgba(0,0,0,0.16);
	cursor:pointer;
	margin-right:10px;
`;