import { MainContainer, TextWrapper } from '../../../styles/app.css';
import { EtapesContainer } from '../../../styles/etapes.css';
import { PhotosContainer } from '../../../styles/album-photos.css';
import { Photo } from '../../../styles/photo.css';
import { index } from './index';

export default function Burbank() {
	return (
		<>
			<MainContainer src={index.hero.image}>
				<TextWrapper>
					<span>21 mai 2022 - 22 mai 2022</span>
					<hr />
					<h3>C&apos;est ici que tout commence</h3>
				</TextWrapper>
			</MainContainer>

			<EtapesContainer>
				<h1>Direction Burbank</h1>
				<p>
					À peine atterit il s&apos;agit de récupérer la voiture de
					location et se rendre à notre première location à Burbank.
				</p>
				<PhotosContainer className='three-pictures'>
					<Photo src={index.route.image} alt={index.route.alt} />
					<Photo
						src={index.location.image}
						alt={index.location.alt}
					/>
					<Photo
						src={index.entrée.image}
						alt={index.entrée.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Une petite promenade dans le quartier.</p>
				<PhotosContainer className='six-pictures'>
					<Photo
						src={index.pancartes.image}
						alt={index.pancartes.alt}
					/>
					<Photo
						src={index.boite.image}
						alt={index.boite.alt}
						className='row-span-2'
					/>
					<Photo src={index.lapin.image} alt={index.lapin.alt} />
					<Photo src={index.chien.image} alt={index.chien.alt} />
					<Photo
						src={index.ecureuil.image}
						alt={index.ecureuil.alt}
					/>
					<Photo
						src={index.drapeau.image}
						alt={index.drapeau.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<h1>Studios Warner</h1>
				<p>
					Le lendemain nous passons la journée à visiter les studios
					Warner.
				</p>
				<PhotosContainer className='three-pictures left'>
					<Photo src={index.logoWB.image} alt={index.logoWB.alt} />
					<Photo
						src={index.maquette.image}
						alt={index.maquette.alt}
					/>
					<Photo
						src={index.chateauDeau.image}
						alt={index.chateauDeau.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<PhotosContainer className='three-pictures'>
					<Photo src={index.kiosque.image} alt={index.kiosque.alt} />
					<Photo src={index.maison.image} alt={index.maison.alt} />
					<Photo
						src={index.eglise.image}
						alt={index.eglise.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<h2>L&apos;univers d&apos;Harry Potter</h2>
				<p>La chambre sous l&apos;escalier.</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={index.chambre.image} alt={index.chambre.alt} />
					<Photo
						src={index.escalier.image}
						alt={index.escalier.alt}
					/>
				</PhotosContainer>

				<p>Edwige dans sa cage et la cheminée avec les lettres.</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={index.edwige.image} alt={index.edwige.alt} />
					<Photo
						src={index.cheminee.image}
						alt={index.cheminee.alt}
					/>
				</PhotosContainer>

				<p>L&apos;atelier de potions.</p>
				<PhotosContainer className='three-pictures'>
					<Photo src={index.atelier.image} alt={index.atelier.alt} />
					<Photo src={index.recette.image} alt={index.recette.alt} />
					<Photo
						src={index.mandragore.image}
						alt={index.mandragore.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Bonus.</p>
				<PhotosContainer className='four-pictures'>
					<Photo
						src={index.voiture.image}
						alt={index.voiture.alt}
						className='col-span-2'
					/>
					<Photo
						src={index.choixpeau.image}
						alt={index.choixpeau.alt}
					/>
					<Photo src={index.coupe.image} alt={index.coupe.alt} />
					<Photo
						src={index.dobby.image}
						alt={index.dobby.alt}
						className='col-span-2'
					/>
				</PhotosContainer>

				<h2>Batman</h2>
				<PhotosContainer>
					<Photo src={index.arckam.image} alt={index.arckam.alt} />
				</PhotosContainer>

				<PhotosContainer className='three-pictures stacked'>
					<Photo src={index.moto.image} alt={index.moto.alt} />
					<Photo
						src={index.batmobile1.image}
						alt={index.batmobile1.alt}
					/>
					<Photo
						src={index.batmobile2.image}
						alt={index.batmobile2.alt}
					/>
				</PhotosContainer>

				<h2>Les décors de séries</h2>
				<p>Big Bang Theory.</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={index.plaque.image} alt={index.plaque.alt} />
					<Photo
						src={index.ascenceur.image}
						alt={index.ascenceur.alt}
					/>
				</PhotosContainer>

				<p>Friends.</p>
				<PhotosContainer className='three-pictures'>
					<Photo src={index.canape.image} alt={index.canape.alt} />
					<Photo src={index.vitrine.image} alt={index.vitrine.alt} />
					<Photo
						src={index.menu.image}
						alt={index.menu.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Pour conclure, ça bosse dur ...</p>
				<PhotosContainer className='three-pictures left'>
					<Photo
						src={index.storyboard1.image}
						alt={index.storyboard1.alt}
					/>
					<Photo
						src={index.storyboard2.image}
						alt={index.storyboard2.alt}
					/>
					<Photo
						src={index.script.image}
						alt={index.script.alt}
						className='row-span-2'
					/>
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
