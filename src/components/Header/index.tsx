import { Dispatch, SetStateAction, useState } from "react";
import { Container, Logo, SearchInput } from "./styled"

type Props = {
	search:string;
	onSearch:Dispatch<SetStateAction<string>>;
}

export const Header = ({search, onSearch}:Props)=>{

	const [inputActive , setInputActive] = useState(search != "" ? true : false);

	const handleInputFocus  = ()=>{
		setInputActive(true);
	};

	const handleInputBlur = ()=>{
		if(search == ""){
			setInputActive(false);
		}
	};

	return(
		<Container>
			<Logo src="img/logo.png" />
			<SearchInput 
			type="text" 
			placeholder="O que você procura?" 
			active={inputActive}
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
			value={search}
			onChange={e=>onSearch(e.target.value)}
			/>
		</Container>
	);
}