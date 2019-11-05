import React from "react"
import { Item } from "semantic-ui-react"

// Returns one ArtistItem with artist state data pulled down from app parent component
const ArtistItem = ({ artist, onArtistSelect }) => {
	return (
		<Item style={{ cursor: "pointer" }} onClick={() => onArtistSelect(artist)}>
			<Item.Image size="tiny" src={artist.thumb} />
			<Item.Content>
				<Item.Header as="h3">{artist.title}</Item.Header>
			</Item.Content>
		</Item>
	)
}

export default ArtistItem
