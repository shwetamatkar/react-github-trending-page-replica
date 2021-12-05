import React from "react";
import {
	Routes,
	Route,
	Link
} from "react-router-dom";
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import Repositories from '../../component/Repositories';
import Developers from '../../component/Developers';

export default function Main() {
	
	const queryClient = new QueryClient();
	
	
	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/developers">Developers</Link>
					</li>
				</ul>

				<hr />
				<Routes>
					<Route exact path="/" element={<Repositories />} />

					<Route exact path="/developers" element={<Developers />} />
				</Routes>
			</div>
		</QueryClientProvider>
	);
}