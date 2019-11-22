import React from "react"
import { Segment, Container, Header, Grid } from "semantic-ui-react"

import discogs from "../api/discogs"

import ArtistListContainer from "./Artists/ArtistListContainer"
import ReleaseListContainer from "./Releases/ReleaseListContainer"

class App extends React.Component {
	//Initialise main app state
	state = {
		releases: [],
		artists: [],
		selectedArtist: null,
		sortType: "sort=title&sort_order=asc",
		artistsAreLoading: false,
		releasesAreLoading: false,
		noArtistFound: false
	}

	/* 
	/	ARTIST SEARCH HANDLING
	*/

	cleanUpArtistState = () => {
		// Cleanup artist State array
		this.setState({
			artists: []
		})
	}

	addArtistsIfExists = artists => {
		// Check if more than 0 artists fetched from API, push artists to state if so
		if (artists.length === 0) {
			this.setState({
				noArtistFound: true
			})
		} else {
			this.setState({
				noArtistFound: false,
				artists
			})
		}
	}

	areArtistsLoading = check => {
		this.setState(
			{
				artistsAreLoading: check
			},
			() => {
				console.log(`artists are loading: ${this.state.artistsAreLoading}`)
			}
		)
	}

	// Handle artist search submission (triggered by submitting search input)
	onArtistSearchSubmit = async term => {
		this.areArtistsLoading(true)
		this.cleanUpArtistState()

		try {
			// Make fetch with axios to discogs api using user search term
			const response = await discogs.get("/database/search?", {
				params: {
					q: term,
					type: "artist"
				}
			})

			const artists = response.data.results

			this.addArtistsIfExists(artists)
			this.areArtistsLoading(false)

			console.log(this.state)
		} catch (error) {
			console.log(error)
		}
	}

	// Bring up search term from child component state (SearchBar) and call main ArtistSearchSubmit function to fetch API data and add to state
	onTermSubmit = term => {
		// Call Axios API with search terms
		this.onArtistSearchSubmit(term)
	}

	/*
	/	RELEASE DISPLAY HANDLING
	*/

	cleanUpReleaseState = () => {
		// Clean up release state array
		this.setState({
			releases: []
		})
	}

	areReleasesLoading = check => {
		this.setState(
			{
				releasesAreLoading: check
			},
			() => {
				console.log(`releases are loading: ${this.state.releasesAreLoading}`)
			}
		)
	}

	// Release list main function, fetch release list based on artist ID
	onReleaseSubmit = async (id, sortType) => {
		this.areReleasesLoading(true)
		this.cleanUpReleaseState()

		try {
			// Call to Axios with user selected artist ID, and either default sortType or user selected
			const response = await discogs.get(`/artists/${id}/releases?${sortType}`)
			console.log(response)

			const releases = response.data.releases
			console.log(releases)

			// Add releases to state
			this.setState(
				{
					releases
				},
				() => {
					console.log("releases added to state")
				}
			)

			this.areReleasesLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	// Populate state with clicked/selected artist from UI (sent up from ArtistItem child component)
	// Then call onReleaseSubmit, making API call with selected artist ID and selected or default sortType
	onArtistSelect = artist => {
		this.setState({ selectedArtist: artist }, () => {
			this.onReleaseSubmit(this.state.selectedArtist.id, this.state.sortType)
		})
	}

	/*
	/	SORT HANDLING
	*/

	// componentDidMount() {
	// 	this.onArtistSearchSubmit("scally")
	// 	this.onReleaseSubmit("34278", "sort=title&sort_order=asc")
	// }

	// Grabbing sort type selected from ArtistSort component, setting it to state, then re-call ArtistRelease Submit with new data
	// BUT ONLY if an artist has already been selected!
	onSortChange = sortType => {
		console.log(sortType)
		this.setState(
			{
				sortType
			},
			() => {
				// Ensure an artist has been selected to allow sort
				if (this.state.selectedArtist) {
					this.onReleaseSubmit(
						this.state.selectedArtist.id,
						this.state.sortType
					)
				}
			}
		)
	}

	render() {
		return (
			<Container>
				<Header as="h1">Tom Halliwell / Discogs API / Front end test</Header>
				<p style={{ fontSize: "1.6em" }}>
					Welcome to the Discogs API artist search prototype!
					<br />
					Search for an artist to begin, then click on an artist to see their
					releases.
				</p>
				<Segment padded="very">
					<Grid container centered columns={2} verticalAlign="top">
						<Grid.Row>
							<ArtistListContainer
								onArtistSelect={this.onArtistSelect}
								onFormSubmit={this.onTermSubmit}
								artists={this.state.artists}
								artistsAreLoading={this.state.artistsAreLoading}
								noArtistFound={this.state.noArtistFound}
							/>
							<ReleaseListContainer
								releases={this.state.releases}
								releasesAreLoading={this.state.releasesAreLoading}
								onSortChange={this.onSortChange}
							/>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		)
	}
}

export default App
