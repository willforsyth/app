import React from 'react';
import {Route, Link} from 'react-router';

const style = {
	container: {
		position: 'relative',
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	},
};

const LoadingPage = () => (
	<div id="loader">
		<div style={style.container}>
			<p>Loading</p>
		</div>
	</div>
);

export default LoadingPage;
