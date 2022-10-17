import React from "react";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import fetchApi from 'components/Utils/Fetch';

import Loader from 'components/Loader/Loader'
import Button from 'components/Button/Button'

class ImageGallery extends React.Component{
    state = {
        gallery: [],
        page: 1,
        loading: false,
        error: null,
        
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
      if (prevProps.input !== this.props.input && this.state.page === prevState.page) {
        this.load(this.props.input, 1);
        console.log('hghgh')
        this.setState({ page: 1 });
        return;
      }
    }

load= () => {
    this.setState({loading: true})
     fetchApi(this.props.input, this.state.page)
    .then(({data}) => {
        this.setState(() => 
        {return { gallery: [...this.state.gallery, ...data.hits]}})})
    .catch(error => {this.setState({error})})
    .finally(() => this.setState({loading: false}));
}

loadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
}

render() {
    const isImageGallery = Boolean(this.state.gallery.length)
   // const loadMore = this;
return (  
    <>
    {this.state.loading && <Loader/>}
    {this.state.error && <p>Try again!</p>}
    {isImageGallery && <ImageGalleryItem gallery={this.state.gallery}></ImageGalleryItem>}
    {isImageGallery && <Button onClick={this.loadMore}></Button>}
   
    </> 
)
}}

export default ImageGallery;

