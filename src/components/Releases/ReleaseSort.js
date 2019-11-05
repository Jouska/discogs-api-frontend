import React from "react"
import { Dropdown } from "semantic-ui-react"

// Setup sort options array, value is exact API query required
const sortOptions = [
	{
		key: "Title, ASC",
		text: "Title, ASC",
		value: "sort=title&sort_order=asc"
	},
	{
		key: "Title, DESC",
		text: "Title, DESC",
		value: "sort=title&sort_order=desc"
	},
	{
		key: "Year, DESC",
		text: "Year, DESC",
		value: "sort=year&sort_order=desc"
	},
	{
		key: "Year, ASC",
		text: "Year, ASC",
		value: "sort=year&sort_order=asc"
	}
]

class ReleaseSort extends React.Component {
	state = {
		sortType: null
	}

	render() {
		return (
			<Dropdown placeholder="Sort by" fluid selection options={sortOptions} />
		)
	}
}

export default ReleaseSort
