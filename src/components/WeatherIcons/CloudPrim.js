import React from 'react';

export const CloudPrim = ({ color = 'white' }) =>
	<g id="cloudPrim">
		<path id="cloud1" fill={color} stroke="black" strokeWidth="10000" d="M472900 238469c6689,-709 13440,-1255 20252,-1255 71587,0 129619,59016 129619,131816 0,71009 -55312,129256 -125159,131775l-366116 39 -831 0c-64306,0 -116436,-52130 -116436,-116436 0,-63374 50630,-114923 113647,-116404 23444,-76344 94510,-131848 178541,-131848 72870,0 135660,41084 166483,102313z" />
		<path id="tail1" fill="none" stroke="black" strokeWidth="10000" d="M393860 284301c20249,-24541 48423,-40558 79096,-45477" />
	</g>

export default CloudPrim;