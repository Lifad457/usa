import { MainContainer, TextWrapper } from '../../styles/app.css';
import { EtapesContainer } from '../../styles/etapes.css';
import hero from '../../assets/images/palm-springs/hero.jpg';
import { PhotosContainer } from '../../styles/album-photos.css';
import { Photo } from '../../styles/photo.css';
import sunset from '../../assets/images/palm-springs/1.jpg';
import mourningDove from '../../assets/images/palm-springs/2.jpg';
import plaque from '../../assets/images/palm-springs/3.jpg';
import telepherique from '../../assets/images/palm-springs/4.jpg';
import vue from '../../assets/images/palm-springs/5.jpg';
import stellerJay from '../../assets/images/palm-springs/6.jpg';
import westernFenceLizard from '../../assets/images/palm-springs/7.jpg';
import indianPaintbrush from '../../assets/images/palm-springs/8.jpg';
import sarcodesSanguinea from '../../assets/images/palm-springs/9.jpg';
import tronc from '../../assets/images/palm-springs/10.jpg';

export default function PalmSprings() {
	return (
		<>
			<MainContainer src={hero}>
				<TextWrapper>
					<span>23 mai 2022 - 24 mai 2022</span>
					<hr />
					<h3>Un oasis dans le désert</h3>
				</TextWrapper>
			</MainContainer>
			<EtapesContainer>
				<h1>Palm Springs</h1>
				<p>
					Palm Springs, oasis en plein désert californien, charme par
					son mélange unique de modernité chic et de paysages
					désertiques spectaculaires.
				</p>
				<PhotosContainer className='two-pictures'>
					<Photo src={mourningDove} alt='Mourning Dove' />
					<Photo src={sunset} alt='Sunset' />
				</PhotosContainer>
				<h1>Mount San Jacinto</h1>
				<p>
					Mount San Jacinto culmine à une altitude de 3 302 mètres,
					offrant une vue imprenable sur la vallée de Coachella. Le
					pic est accessible via le Palm Springs Aerial Tramway, un
					téléphérique qui transporte les visiteurs de la vallée
					désertique de Palm Springs à une zone de haute montagne
					offrant un climat beaucoup plus frais et des forêts denses
					de pins et de sapins.
				</p>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={plaque}
						alt='Plaque du Palm Springs Aerial Tramway'
					/>
					<Photo
						src={telepherique}
						alt='Vue du Palm Springs Aerial Tramway'
					/>
					<Photo src={vue} alt='Vue du Palm Springs Aerial Tramway' />
				</PhotosContainer>
				<h2>La faune et la flore</h2>
				<p>
					La faune et la flore de Palm Springs sont riches et variées.
					On peut y observer de nombreux oiseaux, comme le Geai de
					Steller ou encore le Lézard à clôture de l&apos;Ouest. Côté
					flore, on peut admirer des fleurs comme l&apos;Indian
					Paintbrush, la Sarcodes sanguinea, ou encore des arbres
					majestueux.
				</p>
				<PhotosContainer className='five-pictures variant'>
					<Photo src={stellerJay} alt='Geai de Steller' />
					<Photo
						src={westernFenceLizard}
						alt='Lézard à clôture de l Ouest'
					/>
					<Photo src={indianPaintbrush} alt='Indian Paintbrush' />
					<Photo src={sarcodesSanguinea} alt='Sarcodes sanguinea' />
					<Photo className='row-span-2' src={tronc} alt="Tronc d'arbre" />
				</PhotosContainer>
				<h1>Joshua Tree</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Alias pariatur consequuntur adipisci repellat quisquam
					aliquam reiciendis. Debitis quisquam excepturi, maxime
					voluptate corrupti incidunt et maiores architecto officiis
					tempora dolor odio. Odio temporibus provident culpa earum ab
					doloremque doloribus nostrum impedit quia aliquid quae,
					suscipit, accusantium cum modi et voluptas assumenda.
				</p>
				<h1>Direction Williams</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Alias pariatur consequuntur adipisci repellat quisquam
					aliquam reiciendis. Debitis quisquam excepturi, maxime
					voluptate corrupti incidunt et maiores architecto officiis
					tempora dolor odio. Odio temporibus provident culpa earum ab
					doloremque doloribus nostrum impedit quia aliquid quae,
					suscipit, accusantium cum modi et voluptas assumenda.
				</p>
			</EtapesContainer>
		</>
	);
}
