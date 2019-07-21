import React, { Component } from 'react';
import Brewery from '../presentational/Brewery';
import { api } from '../constants'

export default class ListOfBreweries extends Component {
	state = {
		breweries: [],
	};

	componentDidMount() {
		//cities in database: Portland, Asheville, Bend, and Boulder
		fetch(`${api}/breweries?by_city=portland`)
		.then(res => res.json())
		.then(breweries => this.setState({ breweries }));
	}

	showBreweries = (breweries) => (
		breweries.length !== 0
		? breweries.map( brewery => <Brewery brewery={brewery} key={brewery.id} />)
		: null
	)

	render() {
		const { breweries } = this.state
		return (
			<div>
				{this.showBreweries(breweries)}
			</div>
		);
	}
}
