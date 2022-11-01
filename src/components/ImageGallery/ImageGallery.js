import React from "react";
import { ImagesGallery} from "./ImageGallery.styled"
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({gallery, openModal}) => {

return (  
   <ImagesGallery>
{gallery.map(({id, largeImageURL, tags, webformatURL }) =>
 (<ImageGalleryItem key={id} openModal={openModal} webformatURL={webformatURL} tags={tags} largeImageURL={largeImageURL} >
</ImageGalleryItem>))}
    </ImagesGallery>
 
)
}

export default ImageGallery;

