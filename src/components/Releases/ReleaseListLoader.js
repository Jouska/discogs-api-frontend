import React from "react"
import { Dimmer, Loader, Segment, Container } from "semantic-ui-react"

class ReleaseListLoader extends React.Component {
	loadingIndicator = releasesAreLoading => {
		if (releasesAreLoading) {
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
		return this.loadingIndicator(this.props.releasesAreLoading)
	}
}

export default ReleaseListLoader
