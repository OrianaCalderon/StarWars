import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: JSON.parse(localStorage.getItem("people"))||[],
			planets: JSON.parse(localStorage.getItem("planets"))||[],
			urlBase:"https://www.swapi.tech/api/",
			endPoint:["people","planets"],
			favorito:[]
			
			


		},
		actions: {
			// Use getActions to call a function within a fuction

			getCharacter:async () =>{
				let store = getStore();
				try{
					if(!store.people.length){
					store.endPoint.forEach(async(element)=>{
						let response = await fetch(`${store.urlBase}${element}`)
						let data = await response.json()
						data.results.forEach(async(item)=>{
							let responseTwo = await fetch(`${store.urlBase}${element}/${item.uid}`)
							let results = await responseTwo.json()
							setStore({
								...store, [element]:[...store[element], results.result]
							})
							localStorage.setItem([element], JSON.stringify(store[element]))
						})
					})
				}

				}catch(error){
					console.log(error);
				}
				
			},
			addFavoritos: (favoritos) => {
				let store = getStore();
				console.log("me ejecuto", favoritos)
				let exist = store.favorito.find((item)=> item.created == favoritos)
				if(!exist){
					for(let endPoint of store.endPoint){
						for(let item of store[endPoint]){
							if(item.created == favoritos){
								setStore({
									...store,
									favorito:[...store.favorito, item]
								})
							}
						}
					}
				}else{
					let newFavorite = store.favoritos.filter((item)=> favoritos != item.created)
					setStore({
						...store,
						favorito:newFavorite})
				}
			},
			deleteFavoritoList: (favorito)=>{
				const store = getStore()
				let newListFavorito = store.favorito.filter((item, index)=>{
					if(index != favorito){
						return item
					}
				})
				setStore({...store, 
					favoriteChars: newListFavorito
				})
			},

			

			
		}
	};
};

export default getState;
