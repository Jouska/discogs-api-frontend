import React from "react"
import { Dimmer, Loader, Segment, Container } from "semantic-ui-react"

class ArtistListLoader extends React.Component {
	loadingIndicator = artistsAreLoading => {
		if (artistsAreLoading) {
			return (
				<Container>
					<Segment
						style={{ minHeight: "20vh", margin: "10px 0px 10px 0px" }}
						padding="very"
					>
						<Dimmer active inverted>
							<Loader inverted></Loader>
						</Dimmer>
					</Segment>
				</Container>
			)
		} else {
			return null
		}
	}

	render() {
		return this.loadingIndicator(this.props.artistsAreLoading)
	}
}

export default ArtistListLoader
