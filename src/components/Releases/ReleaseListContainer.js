import React from "react"
import { Header, Grid } from "semantic-ui-react"

import ReleaseSort from "./ReleaseSort"
import ReleaseList from "./ReleaseList"

// Add heading blurb, then load Release List, feed through releases state from parent app component
class ReleaseListContainer extends React.Component {
	// Grab sort type selection from ArtistSort component, send up to parent component
	onSortChange = sortType => {
		this.props.onSortChange(sortType)
	}

	render() {
		return (
			<Grid.Column>
				<Header as="h2">Artist Releases</Header>
				<ReleaseSort />
				<ReleaseList releases={this.props.releases} />
			</Grid.Column>
		)
	}
}

export default ReleaseListContainer
