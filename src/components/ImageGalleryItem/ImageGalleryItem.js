import { ImageGallery, Item, Image } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ({gallery, openModal}) => {
    
   return ( <ImageGallery>
{gallery.map(({id, largeImageURL, tags, webformatURL }) => (<Item key={id} 
onClick={() => openModal(largeImageURL, tags)}>
    <Image src={webformatURL} alt={tags} 
/></Item>))}
    </ImageGallery>)
}




export default ImageGalleryItem;

