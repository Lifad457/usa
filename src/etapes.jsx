import React from 'react';

export const Burbank = React.lazy(() =>
	import('./pages/Etapes/Burbank/Burbank.jsx')
);
export const PalmSprings = React.lazy(() =>
	import('./pages/Etapes/PalmSprings/PalmSprings.jsx')
);
export const GrandCanyon = React.lazy(() =>
	import('./pages/Etapes/GrandCanyon/GrandCanyon.jsx')
);
export const Page = React.lazy(() => import('./pages/Etapes/Page/Page.jsx'));
export const MonumentValley = React.lazy(() =>
	import('./pages/Etapes/MonumentValley.jsx')
);
export const Kanab = React.lazy(() => import('./pages/Etapes/Kanab.jsx'));
export const DeathValley = React.lazy(() =>
	import('./pages/Etapes/DeathValley.jsx')
);
export const SequoiaPark = React.lazy(() =>
	import('./pages/Etapes/SequoiaPark.jsx')
);
export const Yosemite = React.lazy(() => import('./pages/Etapes/Yosemite.jsx'));
export const SanFrancisco = React.lazy(() =>
	import('./pages/Etapes/SanFrancisco.jsx')
);
