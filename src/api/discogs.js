import axios from "axios"
import secretKey from "./key"

const discogs = axios.create({
	baseURL: "https://api.discogs.com",
	headers: {
		Authorization: `Discogs key=WRmlXgMWOAOmibYoXZDG, secret=${secretKey}`
	}
})

export default discogs
