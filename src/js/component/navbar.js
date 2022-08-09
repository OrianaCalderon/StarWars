import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.css"

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light header-navbar">
			<div className="container">
				<Link className="navbar-brand" to={`/`}>
					<img src="data:image/png;base64,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"
						alt="StarWars"
						width="100"
						height="70" />
				</Link>
				<div className="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorito.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						{store.favorito.length > 0 ?
							(store.favorito.map((item,index)=>{
								return(
									<li key={index}>{item.name}</li>
								)
							}))
							:
							"empty"}
					</ul>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;