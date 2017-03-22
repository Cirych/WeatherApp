import React from 'react';

export const SunBig = ({ color = 'yellow' }) =>
	<g id="sunBig">
		<ellipse
			id="coreBig"
			fill={color}
			stroke="none"
			strokeWidth="5000"
			cx="318500"
			cy="318500"
			rx="158751"
			ry="158752"
		/>
		<g
			id="raysBig"
			stroke={color}
			strokeWidth="50000"
			strokeLinecap="round"
		>
			<line x1="318500" y1="40687" x2="318500" y2="120062" />
			<line x1="318500" y1="516940" x2="318500" y2="596315" />
			<line x1="122056" y1="122057" x2="178182" y2="178183" />
			<line x1="458818" y1="458819" x2="514944" y2="514945" />
			<line x1="40686" y1="318501" x2="120061" y2="318501" />
			<line x1="516939" y1="318501" x2="596314" y2="318501" />
			<line x1="122056" y1="514945" x2="178182" y2="458819" />
			<line x1="458818" y1="178183" x2="514944" y2="122057" />
		</g>
	</g>

export default SunBig;