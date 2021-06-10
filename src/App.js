import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {
	state = { currentUser: { name: 'Nuriddin' } };

	render() {
		return (
			<UserContext.Provider value={this.state.currentUser}>
				<div>
					<MoviePage />
				</div>
			</UserContext.Provider>
		);
	}
}

export default App;
