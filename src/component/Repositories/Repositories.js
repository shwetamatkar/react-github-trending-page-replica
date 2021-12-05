import React, {useState, useEffect} from 'react'
import {Typography} from '@material-ui/core';
import {useQuery} from 'react-query'
import {getAllRepos} from '../../services/api';

const Repositories = (props) => {

	const [data, setData] = useState([]);

	const query = useQuery('repos', getAllRepos)


	return (
		<>
			<Typography variant="h3">Repositories</Typography>
			<Typography variant="subTitle1">See what the GitHub community is most excited about today.</Typography>
		</>
	)
}


export default Repositories
