import React from "react";
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {AppComponent} from 'components/App.styled'
import Loader from 'components/Loader/Loader'
import fetchApi from 'components/Utils/Fetch';
import Button from 'components/Button/Button'
import Modal from "components/Modal/Modal"
import {ImageLarge} from "components/ImageGallery/ImageGallery.styled"

class App extends React.Component{
  state = {
    input: '',
    gallery: [],
    page: 1,
    loading: false,
    error: null,   
    urlLarge: '',
    tag: '',
    showModal: false,
    
}
componentDidMount(){
  if(!this.state.input){
      return
  }
  this.load()
  }
componentDidUpdate(prevProps, prevState){
    if (prevState.input !== this.state.input || this.state.page !== prevState.page) {
        this.load(this.state.input, this.state.page);
        return;
      }
    }

  load= () => {
      this.setState({loading: true})
      fetchApi(this.state.input, this.state.page)
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
handleformSubmit = input => {
 this.setState({input: input,
  page: 1})
}
openModal = (largeImageURL, tags) => {
  this.setState({
  showModal: true,
  urlLarge: largeImageURL,
  tag: tags})
}
closeModal = () => {
  this.setState({
    showModal: false,
    urlLarge: '',
    tag: '',
  })
  
}
  render() {
  const imageGalleryLength = (this.state.gallery.length / 12 /this.state.page)
  const isImageGallery = Boolean(this.state.gallery.length)
  const {urlLarge, tag, gallery} = this.state;
  return (
    <AppComponent>
     <Searchbar input={this.handleformSubmit}></Searchbar>
     {this.state.loading && <Loader/>}
     {this.state.error && <p>Try again!</p>}
     {isImageGallery && <ImageGallery gallery={gallery} openModal={this.openModal}></ImageGallery>}
     {imageGalleryLength === 1 && <Button onClick={this.loadMore}></Button>}
     {this.state.showModal && <Modal onClose={this.closeModal}>
    <ImageLarge src={urlLarge} alt={tag}/>
    </Modal>}
   
      </AppComponent>
  )}
};

export default App;