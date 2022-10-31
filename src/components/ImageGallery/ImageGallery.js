import React from "react";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import fetchApi from 'components/Utils/Fetch';
import Loader from 'components/Loader/Loader'
import Button from 'components/Button/Button'
import Modal from "components/Modal/Modal"
import {ImageLarge} from "components/ImageGallery/ImageGallery.styled"
class ImageGallery extends React.Component{
    state = {
        gallery: [],
        page: 1,
        loading: false,
        error: null,   
        showModal: false,
        urlLarge: '',
        tag: '',
    }

   
componentDidMount(){
    if(!this.props.input){
        return
    }
    this.load()
    }

componentDidUpdate(prevProps, prevState){
    if (this.state.page > prevState.page) {
        this.load(this.props.input, this.state.page);
        return;
      }
    if (prevProps.input !== this.props.input || this.state.page !== prevState.page) {
        this.load(this.props.input, 1);
        this.setState({ page: 1 });
        return;
      }
    }

load= () => {
    this.setState({loading: true})
    fetchApi(this.props.input, this.state.page)
    .then(({data}) => {
        this.setState(() => 
        {if(this.state.page === 1){
            return { gallery: [...data.hits]} 
        }
        else {
            return { gallery: [...this.state.gallery, ...data.hits]}
        }
         })})
    .catch(error => {this.setState({error})})
    .finally(() => this.setState({loading: false}));
}

loadMore = () => {
    this.setState(prevState => ({
          page: prevState.page + 1,
      }))
}
openModal = (largeImageURL, tags) => {
    this.setState({
    showModal: true,
    urlLarge: largeImageURL,
    tag: tags})
    console.log(this.state.tag)
  }
closeModal = () => {
    this.setState({
      showModal: false,
      urlLarge: '',
      tag: '',
    })
    
  }

render() {
    const imageGalleryLength = this.state.gallery.length
    const isImageGallery = Boolean(this.state.gallery.length)
    const {urlLarge, tag} = this.state;
return (  
    <>
    {this.state.loading && <Loader/>}
    {this.state.error && <p>Try again!</p>}
    {isImageGallery && <ImageGalleryItem openModal={this.openModal} gallery={this.state.gallery}></ImageGalleryItem>}
    {imageGalleryLength >= 12 && <Button onClick={this.loadMore}></Button>}
    {this.state.showModal && <Modal onClose={this.closeModal}>
    <ImageLarge src={urlLarge} alt={tag}/>
    </Modal>}
    </> 
)
}}

export default ImageGallery;

