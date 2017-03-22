import React from 'react';

import SunBig from './SunBig';
import SunSmall from './SunSmall';
import MoonBig from './MoonBig';
import MoonSmall from './MoonSmall';
import CloudPrim from './CloudPrim';
import CloudSec from './CloudSec';
import Drops from './Drops';
import Lightn from './Lightn';
import Snow from './Snow';
import Mist from './Mist';

const SvgWrapper = ({
	children
}) =>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		//width={size}
		height='100%'
		version="1.1"
		shapeRendering="geometricPrecision"
		textRendering="geometricPrecision"
		imageRendering="optimizeQuality"
		fillRule="evenodd"
		clipRule="evenodd"
		viewBox="0 0 637000 637000"
		style={{ verticalAlign: 'middle', paddingRight: '10px' }}
	>
		{children}
	</svg>

export const WIDefault = () =>
	<SvgWrapper>
		<Mist />
	</SvgWrapper>

// Day icons
export const WI01d = () =>
	<SvgWrapper>
		<SunBig />
	</SvgWrapper>

export const WI02d = () =>
	<SvgWrapper>
		<SunSmall />
		<CloudPrim />
	</SvgWrapper>

export const WI03d = () =>
	<SvgWrapper>
		<CloudPrim />
	</SvgWrapper>

export const WI04d = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
	</SvgWrapper>

export const WI09d = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
		<Drops />
	</SvgWrapper>

export const WI10d = () =>
	<SvgWrapper>
		<SunSmall />
		<CloudPrim />
		<Drops />
	</SvgWrapper>

export const WI11d = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
		<Lightn />
	</SvgWrapper>

export const WI13d = () =>
	<SvgWrapper>
		<title>Snow</title>
		<CloudSec />
		<CloudPrim />
		<Snow />
	</SvgWrapper>

export const WI50d = () =>
	<SvgWrapper>
		<Mist />
	</SvgWrapper>

// Night icons
export const WI01n = () =>
	<SvgWrapper>
		<MoonBig />
	</SvgWrapper>

export const WI02n = () =>
	<SvgWrapper>
		<MoonSmall />
		<CloudPrim />
	</SvgWrapper>

export const WI03n = () =>
	<SvgWrapper>
		<CloudPrim />
	</SvgWrapper>

export const WI04n = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
	</SvgWrapper>

export const WI09n = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
		<Drops />
	</SvgWrapper>

export const WI10n = () =>
	<SvgWrapper>
		<MoonSmall />
		<CloudPrim />
		<Drops />
	</SvgWrapper>

export const WI11n = () =>
	<SvgWrapper>
		<CloudSec />
		<CloudPrim />
		<Lightn />
	</SvgWrapper>

export const WI13n = () =>
	<SvgWrapper>
		<title>Snow</title>
		<CloudSec />
		<CloudPrim />
		<Snow />
	</SvgWrapper>

export const WI50n = () =>
	<SvgWrapper>
		<Mist />
	</SvgWrapper>