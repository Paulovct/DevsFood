import { Dispatch, ReactElement, ReactText, SetStateAction } from "react";
import { ChildrenType } from "react-tooltip";
import { Container, ModalBody } from "./styled";

type Props = {
	status:boolean;
	children:ReactElement | ReactText;
	setStatus:Dispatch<SetStateAction<boolean>>;
}


export const Modal = ({status , setStatus, children}: Props)=>{

	const handleModalClick = (e:any)=>{
		if(e.target.classList.contains("modalBg")){
			setStatus(false);
		}
	}

	return(
		<Container className="modalBg" status={status} onClick={handleModalClick}>
			<ModalBody >
				{children}
			</ModalBody>
		</Container>
	);
}