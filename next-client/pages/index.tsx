import type { NextPage } from 'next';
import React from 'react';
import PannelAllowAnywhere from './components/pannel';

const Home: NextPage = () => {
	const itemStyle: React.CSSProperties = {
		padding: '1rem',
		backgroundColor: 'black',
		display: 'inline-block',
		borderRadius: '1rem',
		width: "inline",
	};
	return (
		<>
			<PannelAllowAnywhere width="100vw" height="100vh">
				<div style={itemStyle}>Object 1</div>
				<div style={itemStyle}>Object 2</div>
			</PannelAllowAnywhere>
		</>
	);
};

export default Home;
