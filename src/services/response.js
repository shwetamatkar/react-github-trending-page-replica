/** @param {object} response */
export function handleResponse(response) {
	if(response.results) {
		return response.results;
	}

	if(response.data) {
		return response.data;
	}

	return response;
}


/** @param {object} error */

export function handleError(error) {
	if(error.data) {
		return error.data;
	}
	return error;
}