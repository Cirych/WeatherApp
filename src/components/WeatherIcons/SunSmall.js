import React from 'react';

export const SunSmall = ({ color = 'yellow' }) =>
	<g id="sunSmall">
		<circle
			id="coreSmall"
			fill={color}
			stroke="none"
			strokeWidth="5000"
			cx="441914"
			cy="194262"
			r="104331"
		/>
		<g
			id="raysSmall"
			stroke={color}
			strokeWidth="50000"
			strokeLinecap="round"
		>
			<line x1="441914" y1="11684" x2="441914" y2="63849" />
			<line x1="441914" y1="324677" x2="441914" y2="376842" />
			<line x1="312811" y1="65160" x2="349697" y2="102046" />
			<line x1="534131" y1="286480" x2="571017" y2="323366" />
			<line x1="259335" y1="194263" x2="311500" y2="194263" />
			<line x1="572328" y1="194263" x2="624493" y2="194263" />
			<line x1="312811" y1="323366" x2="349697" y2="286480" />
			<line x1="534131" y1="102046" x2="571017" y2="65160" />
		</g>
	</g>

export default SunSmall;