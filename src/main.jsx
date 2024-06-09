import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import App from './pages/App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Index from './pages/Index.jsx';
import Loading from './pages/Loading.jsx';

const Burbank = React.lazy(() => import('./pages/Etapes/Burbank.jsx'));
const PalmSprings = React.lazy(() => import('./pages/Etapes/PalmSprings.jsx'));
const GrandCanyon = React.lazy(() => import('./pages/Etapes/GrandCanyon.jsx'));
const Page = React.lazy(() => import('./pages/Etapes/Page.jsx'));
const MonumentValley = React.lazy(() =>
	import('./pages/Etapes/MonumentValley.jsx')
);
const Kanab = React.lazy(() => import('./pages/Etapes/Kanab.jsx'));
const DeathValley = React.lazy(() => import('./pages/Etapes/DeathValley.jsx'));
const SequoiaPark = React.lazy(() => import('./pages/Etapes/SequoiaPark.jsx'));
const Yosemite = React.lazy(() => import('./pages/Etapes/Yosemite.jsx'));
const SanFrancisco = React.lazy(() =>
	import('./pages/Etapes/SanFrancisco.jsx')
);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<Index />} />
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<Burbank />
					</Suspense>
				}
				path='burbank'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<PalmSprings />
					</Suspense>
				}
				path='palm-springs'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<GrandCanyon />
					</Suspense>
				}
				path='grand-canyon'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<Page />
					</Suspense>
				}
				path='page'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<MonumentValley />
					</Suspense>
				}
				path='monument-valley'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<Kanab />
					</Suspense>
				}
				path='kanab'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<DeathValley />
					</Suspense>
				}
				path='death-valley'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<SequoiaPark />
					</Suspense>
				}
				path='sequoia-park'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<Yosemite />
					</Suspense>
				}
				path='yosemite'
			/>
			<Route
				element={
					<Suspense fallback={<Loading />}>
						<SanFrancisco />
					</Suspense>
				}
				path='san-francisco'
			/>

			<Route path='*' element={<ErrorPage />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
