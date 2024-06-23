import { PhotosContainer } from '../../../styles/album-photos.css';
import { MainContainer, TextWrapper } from '../../../styles/app.css';
import { EtapesContainer } from '../../../styles/etapes.css';
import { Photo } from '../../../styles/photo.css';
import { images } from './images';

export default function GrandCanyon() {
	return (
		<>
			<MainContainer src={images.hero.image} alt={images.hero.alt}>
				<TextWrapper>
					<span>mercredi 25 mai 2022</span>
					<hr />
					<h3>Une merveille géologique</h3>
				</TextWrapper>
			</MainContainer>
			<EtapesContainer>
				<h1>Grand Canyon</h1>
				<p>
					Le Grand Canyon, merveille naturelle d&apos;Arizona,
					impressionne par ses falaises vertigineuses et ses
					formations rocheuses sculptées par le Colorado, offrant un
					spectacle époustouflant de couches géologiques multicolores.
				</p>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.image4.image} alt={images.image4.alt} />
					<Photo src={images.image1.image} alt={images.image1.alt} />
					<Photo src={images.image2.image} alt={images.image2.alt} />
					<Photo src={images.image3.image} alt={images.image3.alt} />
				</PhotosContainer>
				<PhotosContainer className='six-pictures'>
					<Photo src={images.image5.image} alt={images.image5.alt} />
					<Photo
						src={images.image7.image}
						alt={images.image7.alt}
						className='col-span2'
					/>
					<Photo src={images.image6.image} alt={images.image6.alt} />
					<Photo src={images.image8.image} alt={images.image8.alt} />
					<Photo src={images.image9.image} alt={images.image9.alt} />
					<Photo
						src={images.image10.image}
						alt={images.image10.alt}
						className='col-span2'
					/>
				</PhotosContainer>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.image11.image}
						alt={images.image11.alt}
					/>
					<Photo
						src={images.image13.image}
						alt={images.image13.alt}
					/>
					<Photo
						src={images.image12.image}
						alt={images.image12.alt}
						className='col-span2'
					/>
				</PhotosContainer>
				<PhotosContainer className='two-pictures'>
					<Photo
						src={images.image14.image}
						alt={images.image14.alt}
					/>
					<Photo
						src={images.image15.image}
						alt={images.image15.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='three-pictures left'>
					<Photo
						src={images.image16.image}
						alt={images.image16.alt}
					/>
					<Photo
						src={images.image17.image}
						alt={images.image17.alt}
					/>
					<Photo
						src={images.image18.image}
						alt={images.image18.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.image19.image}
						alt={images.image19.alt}
					/>
					<Photo
						src={images.image20.image}
						alt={images.image20.alt}
					/>
					<Photo
						src={images.image21.image}
						alt={images.image21.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures'>
					<Photo
						src={images.image22.image}
						alt={images.image22.alt}
					/>
					<Photo
						src={images.image23.image}
						alt={images.image23.alt}
						className='col-span-2'
					/>
					<Photo
						src={images.image25.image}
						alt={images.image25.alt}
					/>
					<Photo
						src={images.image32.image}
						alt={images.image32.alt}
					/>
					<Photo
						src={images.image26.image}
						alt={images.image26.alt}
					/>
					<Photo
						src={images.image24.image}
						alt={images.image24.alt}
						className='col-span-2'
					/>
				</PhotosContainer>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.image29.image}
						alt={images.image29.alt}
					/>
					<Photo
						src={images.image30.image}
						alt={images.image30.alt}
					/>
					<Photo
						src={images.image27.image}
						alt={images.image27.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='two-pictures'>
					<Photo
						src={images.image28.image}
						alt={images.image28.alt}
					/>
					<Photo
						src={images.image31.image}
						alt={images.image31.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='three-pictures'>
					<Photo
						src={images.image33.image}
						alt={images.image33.alt}
					/>
					<Photo
						src={images.image35.image}
						alt={images.image35.alt}
					/>
					<Photo
						src={images.image34.image}
						alt={images.image34.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures'>
					<Photo
						src={images.image38.image}
						alt={images.image38.alt}
					/>
					<Photo
						src={images.image36.image}
						alt={images.image36.alt}
						className='col-span-2'
					/>
					<Photo
						src={images.image39.image}
						alt={images.image39.alt}
					/>
					<Photo
						src={images.hero.image}
						alt={images.hero.alt}
					/>
					<Photo
						src={images.image37.image}
						alt={images.image37.alt}
					/>
					<Photo
						src={images.image40.image}
						alt={images.image40.alt}
						className='col-span-2'
					/>
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
