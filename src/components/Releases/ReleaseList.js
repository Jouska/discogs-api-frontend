import React from "react"
import { Item } from "semantic-ui-react"

import ReleaseItem from "./ReleaseItem"

const ReleaseList = ({ releases }) => {
	// Grab releases state from parent components, map it out and return a ReleaseItem per release fetched from original API call
	const renderedList = releases.map((release, index) => {
		return <ReleaseItem key={index} release={release} />
	})
	return <Item.Group>{renderedList}</Item.Group>
}

export default ReleaseList
