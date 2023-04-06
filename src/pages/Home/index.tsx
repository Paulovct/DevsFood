import { useState , useEffect } from "react";

import api from "../../api";

import { CategoryArea, CategoryList, Container , ProductArea , ProductList , ProductPaginationArea , ProductPaginationItem  } from "./styled";
import { Header } from "../../components/Header";
import { CategoryItem } from "../../components/CategoryItem";
import { ProductItem } from "../../components/ProductItem";
import { Modal } from "../../components/Modal";
import { ModalProduct } from "../../components/ModalProduct";

type Data = {
	id:number;
	id_cat:number;
	image:string;
	ingredients:string; 
	name:string;
	points:number;
	price:number;	
}

let searchTimer:any;

const Home = ()=>{

	const [headerSearch , setHeaderSearch] = useState("");
	const [categories , setCategories] = useState([]);
	const [products , setProducts] = useState([]);
	const [totalPages , setTotalPages] = useState(0);
	
	const [activeCategory , setActiveCategory] = useState(0);
	const [activePage , setActivePage] = useState(1);
	const [activeSearch , setActiveSearch] = useState("");

	const [modalStatus , setModalStatus] = useState(false);
	const [modalData , setModalData] = useState({});

	const getProducts = async()=>{
		const prods = await api.getProducts(activeCategory,activePage,activeSearch);
		if(prods.error ==""){
			setProducts(prods.result.data);
			setTotalPages(prods.result.pages);
			setActivePage(prods.result.page);
		}
	}

	useEffect(()=>{
		const getCategories = async ()=>{
			const cat = await api.getCategories();
			if(cat.error == ""){
				setCategories(cat.result);
			}
		}
		getCategories();
		
	},[])

	useEffect(()=>{
		setProducts([]);
		getProducts();

	},[activeCategory,activePage, activeSearch])

	useEffect(()=>{
		clearTimeout(searchTimer);
		searchTimer = setTimeout(()=>{setActiveSearch(headerSearch); },1500);
	},[headerSearch])

	const handleProductClick = (data:Data)=>{
		setModalData(data);
		setModalStatus(true);
	}

	return(
		<Container>
			<Header search={headerSearch} onSearch={setHeaderSearch} />

			{categories.length > 0 &&
				
				<CategoryArea>
				
				Selecione uma Categoria:

				<CategoryList>
					<CategoryItem 
						setActiveCategory={setActiveCategory}  
						activeCategory={activeCategory} 
						data={{id:0 , 
						name:"Todas as Categorias", 
						image:"img/food-and-restaurant.png"
					}} />
					{categories.map((e,i:number)=>
						<CategoryItem key={i} data={e} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />

					)}
				</CategoryList>

				</CategoryArea>
			}			

			{products.length > 0 &&
				<ProductArea>
					<ProductList>
						{products.map((e,i)=>
							<ProductItem data={e} key={i} onClick={handleProductClick} />
						)}
					</ProductList>
				</ProductArea>
			}	
				
			{totalPages > 0 &&
				<ProductPaginationArea>
					{Array(totalPages).fill(0).map((e,index:number)=>
						<ProductPaginationItem 
							active={activePage} 
							key={index} 
							current={index + 1} 
							onClick={()=> setActivePage(index + 1)} >
							{index + 1}
						</ProductPaginationItem>
					)}
				</ProductPaginationArea>
			}

			<Modal status={modalStatus} setStatus={setModalStatus} >
				<ModalProduct data={modalData} setStatus={setModalStatus}/>
			</Modal>

		</Container>
	);
};

export default Home;