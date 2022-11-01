import {Item, Image } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ({webformatURL, tags, largeImageURL, openModal}) => {
    
    return ( 
<Item>
   <Image src={webformatURL} alt={tags} onClick={() => openModal(largeImageURL, tags)}/>
</Item>)
}




export default ImageGalleryItem;

