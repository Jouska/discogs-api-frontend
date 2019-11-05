import React from "react"
import { Form } from "semantic-ui-react"

class SearchBar extends React.Component {
	state = { term: "" }

	onInputChange = event => {
		this.setState({ term: event.target.value })
	}

	// Send term state up to function in parent component
	onFormSubmit = event => {
		event.preventDefault()

		this.props.onFormSubmit(this.state.term)
	}
	render() {
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Form.Field>
					<input
						onChange={this.onInputChange}
						placeholder="Search for artist to begin"
					/>
				</Form.Field>
			</Form>
		)
	}
}

export default SearchBar
