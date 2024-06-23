import { MainContainer, TextWrapper } from '../../../styles/app.css';
import { EtapesContainer } from '../../../styles/etapes.css';
import { PhotosContainer } from '../../../styles/album-photos.css';
import { Photo } from '../../../styles/photo.css';
import { images } from './images';

export default function Burbank() {
	return (
		<>
			<MainContainer src={images.hero.image} alt={images.hero.alt}>
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
					<Photo src={images.route.image} alt={images.route.alt} />
					<Photo
						src={images.location.image}
						alt={images.location.alt}
					/>
					<Photo
						src={images.entrée.image}
						alt={images.entrée.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Une petite promenade dans le quartier.</p>
				<PhotosContainer className='six-pictures'>
					<Photo
						src={images.pancartes.image}
						alt={images.pancartes.alt}
					/>
					<Photo
						src={images.boite.image}
						alt={images.boite.alt}
						className='row-span-2'
					/>
					<Photo src={images.lapin.image} alt={images.lapin.alt} />
					<Photo src={images.chien.image} alt={images.chien.alt} />
					<Photo
						src={images.ecureuil.image}
						alt={images.ecureuil.alt}
					/>
					<Photo
						src={images.drapeau.image}
						alt={images.drapeau.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<h1>Studios Warner</h1>
				<p>
					Le lendemain nous passons la journée à visiter les studios
					Warner.
				</p>
				<PhotosContainer className='three-pictures left'>
					<Photo src={images.logoWB.image} alt={images.logoWB.alt} />
					<Photo
						src={images.maquette.image}
						alt={images.maquette.alt}
					/>
					<Photo
						src={images.chateauDeau.image}
						alt={images.chateauDeau.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.kiosque.image}
						alt={images.kiosque.alt}
					/>
					<Photo src={images.maison.image} alt={images.maison.alt} />
					<Photo
						src={images.eglise.image}
						alt={images.eglise.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<h2>L&apos;univers d&apos;Harry Potter</h2>
				<p>La chambre sous l&apos;escalier.</p>
				<PhotosContainer className='two-pictures'>
					<Photo
						src={images.chambre.image}
						alt={images.chambre.alt}
					/>
					<Photo
						src={images.escalier.image}
						alt={images.escalier.alt}
					/>
				</PhotosContainer>

				<p>Edwige dans sa cage et la cheminée avec les lettres.</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={images.edwige.image} alt={images.edwige.alt} />
					<Photo
						src={images.cheminee.image}
						alt={images.cheminee.alt}
					/>
				</PhotosContainer>

				<p>L&apos;atelier de potions.</p>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.atelier.image}
						alt={images.atelier.alt}
					/>
					<Photo
						src={images.recette.image}
						alt={images.recette.alt}
					/>
					<Photo
						src={images.mandragore.image}
						alt={images.mandragore.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Bonus.</p>
				<PhotosContainer className='four-pictures'>
					<Photo
						src={images.voiture.image}
						alt={images.voiture.alt}
						className='col-span-2'
					/>
					<Photo
						src={images.choixpeau.image}
						alt={images.choixpeau.alt}
					/>
					<Photo src={images.coupe.image} alt={images.coupe.alt} />
					<Photo
						src={images.dobby.image}
						alt={images.dobby.alt}
						className='col-span-2'
					/>
				</PhotosContainer>

				<h2>Batman</h2>
				<PhotosContainer>
					<Photo src={images.arckam.image} alt={images.arckam.alt} />
				</PhotosContainer>

				<PhotosContainer className='three-pictures stacked'>
					<Photo src={images.moto.image} alt={images.moto.alt} />
					<Photo
						src={images.batmobile1.image}
						alt={images.batmobile1.alt}
					/>
					<Photo
						src={images.batmobile2.image}
						alt={images.batmobile2.alt}
					/>
				</PhotosContainer>

				<h2>Les décors de séries</h2>
				<p>Big Bang Theory.</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={images.plaque.image} alt={images.plaque.alt} />
					<Photo
						src={images.ascenceur.image}
						alt={images.ascenceur.alt}
					/>
				</PhotosContainer>

				<p>Friends.</p>
				<PhotosContainer className='three-pictures'>
					<Photo src={images.canape.image} alt={images.canape.alt} />
					<Photo
						src={images.vitrine.image}
						alt={images.vitrine.alt}
					/>
					<Photo
						src={images.menu.image}
						alt={images.menu.alt}
						className='row-span-2'
					/>
				</PhotosContainer>

				<p>Pour conclure, ça bosse dur ...</p>
				<PhotosContainer className='three-pictures left'>
					<Photo
						src={images.storyboard1.image}
						alt={images.storyboard1.alt}
					/>
					<Photo
						src={images.storyboard2.image}
						alt={images.storyboard2.alt}
					/>
					<Photo
						src={images.script.image}
						alt={images.script.alt}
						className='row-span-2'
					/>
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
