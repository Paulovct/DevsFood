import styled from "styled-components";

type ModalProps = {
	status:boolean;
}

export const Container = styled.div<ModalProps>`
	display:${props => props.status ? "flex" : "none"};
	position:fixed;
	top:0;
	bottom:0;
	right:0;
	left:0;
	z-index:999;
	background-color:rgba(0,0,0,0.7);
	justify-content:center;
	align-items:center;
`;

export const ModalBody = styled.div`
	background-color:#FFF;
	border-radius:20px;
	box-shadow:0px 0px 50px #000;
	max-height:90vh;
	max-width:100vw;
	overflow:auto;
`;