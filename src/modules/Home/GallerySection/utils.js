import GalleryImage0 from '@assets/images/gallery/0.webp';
import GalleryImage1 from '@assets/images/gallery/1.webp';
import GalleryImage2 from '@assets/images/gallery/2.webp';
import GalleryImage3 from '@assets/images/gallery/3.webp';
import GalleryImage4 from '@assets/images/gallery/4.webp';
import GalleryImage5 from '@assets/images/gallery/5.webp';
import GalleryImage6 from '@assets/images/gallery/6.webp';

export const images = [GalleryImage0, GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4, GalleryImage5, GalleryImage6].map((image, index) => ({ src: image, id: `gallery-image-${index}` }));
