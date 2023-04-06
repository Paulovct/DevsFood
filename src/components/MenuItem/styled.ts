import styled from "styled-components";

type Props = {
	active:boolean;
}

export const LinkArea = styled.a`
	display:flex;
	justify-content:center;
	align-items:center;
	width:60px;
	height:60px;
	border-radius:10px;
	background-color:${(props:Props)=>props.active? "#0B4D0B":"transparent"};
	margin:10px auto;
`;

export const LinkIcon = styled.img`
	width:34px;
	height:auto;
`;