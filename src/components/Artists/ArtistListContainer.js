import React from "react"
import { Header, Grid, Message } from "semantic-ui-react"

import SearchBar from "./SearchBar"
import ArtistList from "./ArtistList"
import ArtistListLoader from "./ArtistListLoader"

class ArtistListContainer extends React.Component {
	// Send child term state from SearchBar up to function in parent component
	onFormSubmit = term => {
		this.props.onFormSubmit(term)
	}

	onNoArtistFound = noArtistFound => {
		if (noArtistFound) {
			return (
				<Message warning>
					<Message.Header>No artist found</Message.Header>
					<p>Try another search!</p>
				</Message>
			)
		} else {
			return null
		}
	}

	render() {
		return (
			<Grid.Column>
				<Header as="h2">Artist Search</Header>
				<SearchBar onFormSubmit={this.onFormSubmit} />
				{this.onNoArtistFound(this.props.noArtistFound)}
				<ArtistListLoader artistsAreLoading={this.props.artistsAreLoading} />
				<ArtistList
					onArtistSelect={this.props.onArtistSelect}
					artists={this.props.artists}
				/>
			</Grid.Column>
		)
	}
}

export default ArtistListContainer
