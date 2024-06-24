import { PhotosContainer } from '../../../styles/album-photos.css';
import { MainContainer, TextWrapper } from '../../../styles/app.css';
import { EtapesContainer } from '../../../styles/etapes.css';
import { Photo } from '../../../styles/photo.css';
import { images } from './images';

export default function Page() {
	return (
		<>
			<MainContainer src={images.hero.image} alt={images.hero.alt}>
				<TextWrapper>
					<span>25 mai 2022 - 26 mai 2022</span>
					<hr />
					<h3>Un lieu absolument magique</h3>
				</TextWrapper>
			</MainContainer>
			<EtapesContainer>
				<h1>Page</h1>
				<PhotosContainer className='four-pictures'>
					<Photo src={images.image1.image} alt={images.image1.alt} />
					<Photo src={images.image2.image} alt={images.image2.alt} />
					<Photo src={images.image3.image} alt={images.image3.alt} />
					<Photo src={images.image4.image} alt={images.image4.alt} />
				</PhotosContainer>
				<PhotosContainer className='three-pictures'>
					<Photo src={images.image5.image} alt={images.image5.alt} />
					<Photo src={images.image7.image} alt={images.image7.alt} />
					<Photo src={images.image6.image} alt={images.image6.alt} />
				</PhotosContainer>
				<h1>Antelope Canyon</h1>
				<PhotosContainer className='six-pictures variant'>
					<Photo
						src={images.image10.image}
						alt={images.image10.alt}
					/>
					<Photo
						src={images.image8.image}
						alt={images.image8.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image9.image}
						alt={images.image9.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image11.image}
						alt={images.image11.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image13.image}
						alt={images.image13.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image12.image}
						alt={images.image12.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures variant'>
					<Photo
						src={images.image14.image}
						alt={images.image14.alt}
					/>
					<Photo
						src={images.image15.image}
						alt={images.image15.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image17.image}
						alt={images.image17.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image18.image}
						alt={images.image18.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image19.image}
						alt={images.image19.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image16.image}
						alt={images.image16.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='six-pictures variant'>
					<Photo
						src={images.image24.image}
						alt={images.image24.alt}
					/>
					<Photo
						src={images.image20.image}
						alt={images.image20.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image21.image}
						alt={images.image21.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image22.image}
						alt={images.image22.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image23.image}
						alt={images.image23.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image26.image}
						alt={images.image26.alt}
					/>
				</PhotosContainer>
				<PhotosContainer className='five-pictures variant2'>
					<Photo
						src={images.image32.image}
						alt={images.image32.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image33.image}
						alt={images.image33.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image34.image}
						alt={images.image34.alt}
						className='row-span2'
					/>
					<Photo
						src={images.image35.image}
						alt={images.image35.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image36.image}
						alt={images.image36.alt}
						className='col-span2'
					/>
				</PhotosContainer>
				<PhotosContainer className='four-pictures variant'>
					<Photo
						src={images.image37.image}
						alt={images.image37.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image38.image}
						alt={images.image38.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image39.image}
						alt={images.image39.alt}
						className='col-span2'
					/>
					<Photo
						src={images.image40.image}
						alt={images.image40.alt}
						className='col-span2'
					/>
				</PhotosContainer>
				<h1>Horseshoe Bend</h1>
				<PhotosContainer className='six-pictures variant2'>
					<Photo
						src={images.image41.image}
						alt={images.image41.alt}
					/>
					<Photo
						src={images.image42.image}
						alt={images.image42.alt}
					/>
					<Photo
						src={images.image43.image}
						alt={images.image43.alt}
					/>
					<Photo
						src={images.image44.image}
						alt={images.image44.alt}
					/>
					<Photo
						src={images.image45.image}
						alt={images.image45.alt}
					/>
					<Photo
						src={images.image46.image}
						alt={images.image46.alt}
					/>
				</PhotosContainer>
			</EtapesContainer>
		</>
	);
}
