const BASE = "https://api.b7web.com.br/devsfood/api";

export default {
	getCategories: async ()=>{
		const res = await fetch(BASE+"/categories");
		const json = res.json();
		return json;
	},
	getProducts:async (category:number , page:number , search:string)=>{

		let fields:any ={};
		if(category != 0){
			fields.category = category;
		}
		if(page > 0){
			fields.page = page;
		}
		if(search != ""){
			fields.search = search;
		}

		let ENDPOINT = new URLSearchParams(fields).toString();

		const res = await fetch(BASE+"/products?"+ENDPOINT);
		const json = res.json();
		return json;
	}
};