import { Container , CategoryImage } from "./styled"



export const CategoryItem = ({data,activeCategory , setActiveCategory}:any)=>{
	
	const handleCategoryClick = ()=>{
		setActiveCategory(data.id);
	}

	return (
		<Container 
			active={activeCategory} 
			id={data.id}
			onClick={handleCategoryClick}
			data-tooltip-content={data.name} 
			data-tooltip-id="tip-top"
		>
			<CategoryImage src={data.image} alt="" />

		</Container>
	);
}

