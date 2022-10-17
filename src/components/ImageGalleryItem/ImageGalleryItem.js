const ImageGalleryItem = ({gallery}) => {
   return ( <ul>
{gallery.map((item) => (<li key={item.id}>{item.id}</li>))}
    </ul>)
}




export default ImageGalleryItem;

//function probably
//<img src={item.webformatURL}/>
//gallery.hits.map((item) => (<li key={item.id}></li>))