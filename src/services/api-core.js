import apiProvider from './api';

 class ApiCore {
	constructor(options) {

		if(options.getS) {
			this.getSingle = (param) => {
				return apiProvider.getSingl(options.url, param);
			};
		}

		if(options.post) {
			this.post = (model) => {
				return apiProvider.post(options.url, model);
			};
		}

	}
}

export const apiTasks = new ApiCore({
	get: true,
	post: true
});


