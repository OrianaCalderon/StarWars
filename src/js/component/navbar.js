import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.css"
import starWars from "../../img/logo-starWars.png"

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-dark bg-dark header-navbar">
			<div className="container">
				<Link className="navbar-brand" to={`/`}>
					<img src={starWars}
						alt="StarWars"
						width="150"
						height="70"
					 />
				</Link>
				<div className="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorito.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						{store.favorito.length > 0 ?
							(store.favorito.map((item,index)=>{
								return(
									<li key={index}>
										<div>
											{item.name}
										</div>
										<div>
											<i class="fas fa-trash" key={index} onClick={()=>actions.deleteFavoritoList(index)}></i>
										</div>
									</li>
								)
							}))
							:
							<div className="div-empty"><p >(empty)</p></div>}
					</ul>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;