import { MainContainer, TextWrapper } from '../../../styles/app.css';
import { EtapesContainer } from '../../../styles/etapes.css';
import { PhotosContainer } from '../../../styles/album-photos.css';
import { Photo } from '../../../styles/photo.css';
import { images } from './images';

export default function PalmSprings() {
	return (
		<>
			<MainContainer src={images.hero.image} alt={images.hero.alt}>
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
					<Photo
						src={images.mourningDove.image}
						alt={images.mourningDove.alt}
					/>
					<Photo src={images.sunset.image} alt={images.sunset.alt} />
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
					<Photo src={images.plaque.image} alt={images.plaque.alt} />
					<Photo
						src={images.telepherique.image}
						alt={images.telepherique.alt}
					/>
					<Photo src={images.vue.image} alt={images.vue.alt} />
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
					<Photo
						src={images.stellerJay.image}
						alt={images.stellerJay.alt}
					/>
					<Photo
						src={images.westernFenceLizard.image}
						alt={images.westernFenceLizard.alt}
					/>
					<Photo
						src={images.indianPaintbrush.image}
						alt={images.indianPaintbrush.alt}
					/>
					<Photo
						src={images.sarcodesSanguinea.image}
						alt={images.sarcodesSanguinea.alt}
					/>
					<Photo
						className='row-span-2'
						src={images.tronc.image}
						alt={images.tronc.alt}
					/>
				</PhotosContainer>
				<h1>Joshua Tree</h1>
				<p>
					Joshua Tree, où le désert se pare de mysticisme, séduit par
					ses formations rocheuses étranges et ses arbres iconiques
					qui semblent tout droit sortis d&apos;un rêve.
				</p>
				<PhotosContainer className='six-pictures'>
					<Photo src={images.jt1.image} alt={images.jt1.alt} />
					<Photo
						src={images.jt5.image}
						alt={images.jt5.alt}
						className='row-span-2'
					/>
					<Photo src={images.jt2.image} alt={images.jt2.alt} />
					<Photo src={images.jt3.image} alt={images.jt3.alt} />
					<Photo src={images.jt4.image} alt={images.jt4.alt} />
					<Photo
						src={images.jt26.image}
						alt={images.jt26.alt}
						className='row-span-2'
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures'>
					<Photo src={images.jt6.image} alt={images.jt6.alt} />
					<Photo
						src={images.jt10.image}
						alt={images.jt10.alt}
						className='row-span-2'
					/>
					<Photo src={images.jt7.image} alt={images.jt7.alt} />
					<Photo src={images.jt8.image} alt={images.jt8.alt} />
					<Photo src={images.jt9.image} alt={images.jt9.alt} />
					<Photo
						src={images.jt13.image}
						alt={images.jt13.alt}
						className='row-span-2'
					/>
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.jt12.image} alt={images.jt12.alt} />
					<Photo src={images.jt14.image} alt={images.jt14.alt} />
					<Photo src={images.jt11.image} alt={images.jt11.alt} />
					<Photo src={images.jt15.image} alt={images.jt15.alt} />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.jt16.image} alt={images.jt16.alt} />
					<Photo src={images.jt17.image} alt={images.jt17.alt} />
					<Photo src={images.jt19.image} alt={images.jt19.alt} />
					<Photo src={images.jt18.image} alt={images.jt18.alt} />
				</PhotosContainer>
				<PhotosContainer className='five-pictures'>
					<Photo src={images.jt24.image} alt={images.jt24.alt} />
					<Photo src={images.jt25.image} alt={images.jt25.alt} />
					<Photo src={images.jt29.image} alt={images.jt29.alt} />
					<Photo src={images.jt28.image} alt={images.jt28.alt} />
					<Photo src={images.jt27.image} alt={images.jt27.alt} />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.jt20.image} alt={images.jt20.alt} />
					<Photo src={images.jt21.image} alt={images.jt21.alt} />
					<Photo src={images.jt22.image} alt={images.jt22.alt} />
					<Photo src={images.jt23.image} alt={images.jt23.alt} />
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
					<Photo src={images.w5.image} alt={images.w5.image} />
					<Photo src={images.w2.image} alt={images.w2.image} />
					<Photo src={images.w3.image} alt={images.w3.image} />
					<Photo src={images.w4.image} alt={images.w4.image} />
					<Photo src={images.w1.image} alt={images.w1.image} />
				</PhotosContainer>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.w6.image} alt={images.w6.image} />
					<Photo src={images.w7.image} alt={images.w7.image} />
					<Photo src={images.w8.image} alt={images.w8.image} />
					<Photo src={images.w9.image} alt={images.w9.image} />
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
