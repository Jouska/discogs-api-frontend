import React from "react"
import { Item } from "semantic-ui-react"

import ArtistItem from "./ArtistItem"

const ArtistList = ({ artists, onArtistSelect }) => {
	// Grab artist list from parent component state, map out ArtistItem per artist in state array
	const renderedList = artists.map(artist => {
		return (
			<ArtistItem
				key={artist.id}
				onArtistSelect={onArtistSelect}
				artist={artist}
			/>
		)
	})
	return <Item.Group divided>{renderedList}</Item.Group>
}

export default ArtistList
