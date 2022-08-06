import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			urlBase:"https://www.swapi.tech/api/",
			endPoint:["people","planets"],
			
			


		},
		actions: {
			// Use getActions to call a function within a fuction

			getCharacter:async () =>{
				let store = getStore();
				try{
					store.endPoint.forEach(async(element)=>{
						let response = await fetch(`${store.urlBase}${element}`)
						let data = await response.json()
						data.results.forEach(async(item)=>{
							let responseTwo = await fetch(`${store.urlBase}${element}/${item.uid}`)
							let results = await responseTwo.json()
							setStore({
								...store, [element]:[...store[element], results.result]
							})
						})
					})

				}catch(error){
					console.log(error);
				}
				
			},

			

			
		}
	};
};

export default getState;
