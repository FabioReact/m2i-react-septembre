import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const fetcher = {
	async get(url: string): Promise<any> {
		return axios.get(`${BASE_URL}${url}`)
	}
}

export default fetcher