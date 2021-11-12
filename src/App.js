import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MovieHeader from './components/MovieHeader';
import FavoriteMovieList from './components/FavoriteMovieList';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import EditMovieForm from './components/EditMovieForm';
import AddMovieForm from "./components/AddMovieForm";

import initialData from "./data";

const App = (props) => {
	const [movies, setMovies] = useState(initialData);
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	const deleteMovie = (idParam) => {
		const list = movies.filter(movie => movie.id != idParam)
		setMovies(list)
	}

	// const addToFavorites = (movie) => {
	// }

	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png" /> HTTP / CRUD Module Project</span>
			</nav>

			<div className="container">
				<MovieHeader />
				<div className="row ">
					<FavoriteMovieList favoriteMovies={favoriteMovies} />

					<Switch>
						<Route path="/movies/edit/:id">
							<EditMovieForm setMovies={setMovies} />
						</Route>

						<Route path="/movies/new">
							<AddMovieForm setMovies={setMovies} />
						</Route>

						<Route path="/movies/:id">
							<Movie deleteMovie={deleteMovie} />
						</Route>

						<Route path="/movies">
							<MovieList movies={movies} />
						</Route>

						<Route exact path="/">
							<Redirect to="/movies" />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};


export default App;

