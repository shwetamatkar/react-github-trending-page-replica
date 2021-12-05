import {colors} from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const blue1 = '#3d7bf6';
const blue1darker = '#1a62f3';
const blue2 = '#057a87';
const blue3 = '#45b5f2'
const blue3darker = '#1caefd;'
const adminBlue = "#40b5ad"

export default {
	black,
	white,
	keepspaceBlue: {
		contrastText: white,
		dark: blue2,
		main: blue3,
		light: blue2,
	},
	primary: {
		contrastText: white,
		dark: blue1darker, // Root out anything using this
		main: blue1,
		light: white,
	},
	secondary: {
		contrastText: white,
		dark: blue3darker,
		main: blue3,
		light: blue3
	},
	adminPrimary: {
		contrastText: white,
		dark: adminBlue,
		main: "#40b5ad",
		light: "#40b5ad"
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400]
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		link: colors.blue[600]
	},
	header: {
		main: '#3d7bf6',
		dark: '#2369f3',
		light: blue3,
	},
	link: colors.blue[800],
	icon: colors.blueGrey[600],
	background: {
		default: '#F4F6F8',
		paper: white
	},
	divider: colors.grey[200]
};
