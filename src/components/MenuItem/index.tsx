import {LinkArea , LinkIcon} from "./styled"
import { useNavigate , useLocation } from "react-router-dom"

type Props = {
	icon:string;
	link:string;
	title:string;
}

	

export const MenuItem = ({title,icon , link}:Props)=>{
	
	const location = useLocation();
	const navigate = useNavigate();

	const isActive = location.pathname == link;

	const handleClickLink = (e:React.SyntheticEvent<HTMLAnchorElement>)=>{
		e.preventDefault();
		navigate(link);	
	}

	return(
		<LinkArea data-tooltip-content={title} data-tooltip-id="tip-right" active={isActive} onClick={handleClickLink} href={link}>
			<LinkIcon src={icon} alt=""/>
		</LinkArea>
	);
}