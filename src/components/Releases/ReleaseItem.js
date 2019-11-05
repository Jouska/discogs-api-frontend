import React from "react"
import { Item } from "semantic-ui-react"

// Returns one ReleaseItem with release state data pulled down from app parent component
const ReleaseItem = ({ release }) => {
	return (
		<Item>
			<Item.Image size="tiny" src={release.thumb} />
			<Item.Content>
				<Item.Header as="h3">{release.title}</Item.Header>
				<Item.Meta>
					<span>
						<strong>Artist:</strong> {release.artist}
					</span>
					<br />
					<span>
						<strong>Year:</strong> {release.year}
					</span>
					<br />
					<span>
						<strong>Label:</strong> {release.label}
					</span>
				</Item.Meta>
			</Item.Content>
		</Item>
	)
}

export default ReleaseItem
