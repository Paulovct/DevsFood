import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

import { PageArea } from "./styled";

const Tela2Screen = ()=>{

	const name = useAppSelector(state => state.user.name);

	return(
		<PageArea>
			Page 2
			<hr />
			{name}
			<hr />

			<Link to="/">Voltar</Link>
		</PageArea>
	);
};

export default Tela2Screen;

