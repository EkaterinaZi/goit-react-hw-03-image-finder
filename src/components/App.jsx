import React from "react";
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import {AppComponent} from 'components/App.styled'


class App extends React.Component{
  state = {
    input: '',
    
}

handleformSubmit = input => {
 this.setState({input})
}

  render() {
  const {input} = this.state
  return (
    <AppComponent>
     <Searchbar input={this.handleformSubmit}></Searchbar>
     <ImageGallery openModal= {this.toggleModal} input={input}></ImageGallery>
    </AppComponent>
  )}
};

export default App;