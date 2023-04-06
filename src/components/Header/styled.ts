import styled from "styled-components"

type Props = {
	active:boolean;
}

export const Container = styled.div`
	background-color:#136713;
	border-radius:10px;
	padding:20px;
	display:flex;
	justify-content:space-between;
	align-items:center;
`;

export const Logo = styled.img`
	width:auto;
	height:70px;
`;

export const SearchInput = styled.input<Props>`
	outline:0;
	border:0;
	border-radius:25px;
	border-bottom:1px solid #EEE;
	width:${props=>props.active ? 300 : 0}px;
	height:50px;
	padding-left:50px;
	background-image:url("img/search.png");
	background-size:30px;
	background-repeat:no-repeat;
	background-position:10px center;
	background-color:#FFF;
	transition:all ease .3s;
	cursor:pointer;
	font-size:15px;

	&:focus{
		cursor:text;
	}
`;