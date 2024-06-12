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
import jt1 from '../../assets/images/palm-springs/11.jpg';
import jt2 from '../../assets/images/palm-springs/12.jpg';
import jt3 from '../../assets/images/palm-springs/13.jpg';
import jt4 from '../../assets/images/palm-springs/14.jpg';
import jt5 from '../../assets/images/palm-springs/15.jpg';
import jt6 from '../../assets/images/palm-springs/16.jpg';
import jt7 from '../../assets/images/palm-springs/17.jpg';
import jt8 from '../../assets/images/palm-springs/18.jpg';
import jt9 from '../../assets/images/palm-springs/19.jpg';
import jt10 from '../../assets/images/palm-springs/20.jpg';
import jt11 from '../../assets/images/palm-springs/21.jpg';
import jt12 from '../../assets/images/palm-springs/22.jpg';
import jt13 from '../../assets/images/palm-springs/23.jpg';
import jt14 from '../../assets/images/palm-springs/24.jpg';
import jt15 from '../../assets/images/palm-springs/25.jpg';
import jt16 from '../../assets/images/palm-springs/26.jpg';
import jt17 from '../../assets/images/palm-springs/27.jpg';
import jt18 from '../../assets/images/palm-springs/28.jpg';
import jt19 from '../../assets/images/palm-springs/29.jpg';
import jt20 from '../../assets/images/palm-springs/30.jpg';
import jt21 from '../../assets/images/palm-springs/31.jpg';
import jt22 from '../../assets/images/palm-springs/32.jpg';
import jt23 from '../../assets/images/palm-springs/33.jpg';
import jt24 from '../../assets/images/palm-springs/34.jpg';
import jt25 from '../../assets/images/palm-springs/35.jpg';
import jt26 from '../../assets/images/palm-springs/36.jpg';
import jt27 from '../../assets/images/palm-springs/37.jpg';
import jt28 from '../../assets/images/palm-springs/38.jpg';
import jt29 from '../../assets/images/palm-springs/39.jpg';
import w1 from '../../assets/images/palm-springs/w1.jpg';
import w2 from '../../assets/images/palm-springs/w2.jpg';
import w3 from '../../assets/images/palm-springs/w3.jpg';
import w4 from '../../assets/images/palm-springs/w4.jpg';
import w5 from '../../assets/images/palm-springs/w5.jpg';
import w6 from '../../assets/images/palm-springs/w6.jpg';
import w7 from '../../assets/images/palm-springs/w7.jpg';
import w8 from '../../assets/images/palm-springs/w8.jpg';
import w9 from '../../assets/images/palm-springs/w9.jpg';

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
					La faune et la flore y sont riches et variées. On peut y
					observer de nombreux oiseaux, comme le Geai de Steller ou
					encore le Lézard à clôture de l&apos;Ouest. Côté flore, on
					peut admirer des fleurs comme l&apos;Indian Paintbrush, la
					Sarcodes sanguinea, ou encore des arbres majestueux.
				</p>
				<PhotosContainer className='five-pictures variant'>
					<Photo src={stellerJay} alt='Geai de Steller' />
					<Photo
						src={westernFenceLizard}
						alt="Lézard à clôture de l'Ouest"
					/>
					<Photo src={indianPaintbrush} alt='Indian Paintbrush' />
					<Photo src={sarcodesSanguinea} alt='Sarcodes sanguinea' />
					<Photo
						className='row-span-2'
						src={tronc}
						alt="Tronc d'arbre"
					/>
				</PhotosContainer>
				<h1>Joshua Tree</h1>
				<p>
					Joshua Tree, où le désert se pare de mysticisme, séduit par
					ses formations rocheuses étranges et ses arbres iconiques
					qui semblent tout droit sortis d&apos;un rêve.
				</p>
				<PhotosContainer className='six-pictures'>
					<Photo src={jt1} alt='Joshua Tree' />
					<Photo src={jt5} alt='Joshua Tree' className='row-span-2' />
					<Photo src={jt2} alt='Joshua Tree' />
					<Photo src={jt3} alt='Joshua Tree' />
					<Photo src={jt4} alt='Joshua Tree' />
					<Photo
						src={jt26}
						alt='Joshua Tree'
						className='row-span-2'
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures'>
					<Photo src={jt6} alt='Joshua Tree' />
					<Photo
						src={jt10}
						alt='Joshua Tree'
						className='row-span-2'
					/>
					<Photo src={jt7} alt='Joshua Tree' />
					<Photo src={jt8} alt='Joshua Tree' />
					<Photo src={jt9} alt='Joshua Tree' />
					<Photo
						src={jt13}
						alt='Joshua Tree'
						className='row-span-2'
					/>
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={jt12} alt='Joshua Tree' />
					<Photo src={jt14} alt='Joshua Tree' />
					<Photo src={jt11} alt='Joshua Tree' />
					<Photo src={jt15} alt='Joshua Tree' />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={jt16} alt='Joshua Tree' />
					<Photo src={jt17} alt='Joshua Tree' />
					<Photo src={jt19} alt='Joshua Tree' />
					<Photo src={jt18} alt='Joshua Tree' />
				</PhotosContainer>
				<PhotosContainer className='five-pictures'>
					<Photo src={jt24} alt='Joshua Tree' />
					<Photo src={jt25} alt='Joshua Tree' />
					<Photo src={jt29} alt='Joshua Tree' />
					<Photo src={jt28} alt='Joshua Tree' />
					<Photo src={jt27} alt='Joshua Tree' />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={jt20} alt='Joshua Tree' />
					<Photo src={jt21} alt='Joshua Tree' />
					<Photo src={jt22} alt='Joshua Tree' />
					<Photo src={jt23} alt='Joshua Tree' />
				</PhotosContainer>
				<h1>Direction Williams</h1>
				<p>
					La ferme aux alpagas à Williams, Arizona, est une attraction
					charmante et unique où les visiteurs peuvent interagir avec
					des alpagas dans un cadre pittoresque. Située dans la région
					boisée et montagneuse du nord de l&apos;Arizona, cette ferme
					offre une expérience éducative et ludique pour les familles,
					les amoureux des animaux et les curieux. Les visiteurs ont
					l&apos;occasion d&apos;en apprendre davantage sur les
					alpagas, leur comportement, leur alimentation, et le
					processus de transformation de leur laine douce et luxueuse.
					En plus des interactions avec les alpagas, la ferme propose
					souvent des visites guidées, des activités pour les enfants
					et des produits artisanaux en laine d&apos;alpaga
					disponibles à la vente.
				</p>
				<PhotosContainer className='five-pictures'>
					<Photo src={w5} alt='Williams' />
					<Photo src={w2} alt='Williams' />
					<Photo src={w3} alt='Williams' />
					<Photo src={w4} alt='Williams' />
					<Photo src={w1} alt='Williams' />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={w6} alt='Williams' />
					<Photo src={w7} alt='Williams' />
					<Photo src={w8} alt='Williams' />
					<Photo src={w9} alt='Williams' />
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
