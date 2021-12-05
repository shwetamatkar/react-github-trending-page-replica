import axios from 'axios';
import {BASE_URL, REPOSTORES, DEVELOPERS, TIMEOUT, HEADERS} from '../utils/helpers';
import {handleResponse, handleError} from './response';
import githubTrends from 'github-trends-api';


/** @param {string} resource */
const get = (resource) => {

  return axios
    .get(`${BASE_URL}/${resource}`)

};

/** @param {string} resource */
/** @param {object} data */
const post = (resource, data) => {
  return axios
    .post(`${BASE_URL}/${resource}`, data)
};

/** @param {string} params */
export async function getAllRepos(params) {

  if(!params) params = ""
  try {
    //const response = await get(`${REPOSTORES}`, {}, HEADERS);
    const response = await githubTrends();
    console.log('response  ', response)
    return handleResponse(response);
  } catch(error) {
    return handleError(error);
  }

}