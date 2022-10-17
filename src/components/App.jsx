import React from "react";
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
//import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
class App extends React.Component{
  state = {
    input: '',
}

handleformSubmit = input => {
 this.setState({input})
}
 
  render() {
  
  return (
    <div>
     <Searchbar input={this.handleformSubmit}></Searchbar>
     <ImageGallery input={this.state.input}></ImageGallery>
    </div>
  )}
};

export default App;