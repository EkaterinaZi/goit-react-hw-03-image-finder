import React from "react";
import {IoSearch} from 'react-icons/io5'
import {SearchbarTitle, SearchForm, SearchFormButton, SearchInput} from "components/Searchbar/Searchbar.styled"

class Searchbar extends React.Component{
    state = {
        input: ''}

handleNameChange = e => {
    this.setState({input: e.currentTarget.value.toLowerCase()})
}
handleNameSubmit = e => {
    e.preventDefault();
    if(this.state.input.trim() === ''){
        alert('Enter data')
        return
    }
    this.props.input(this.state.input);
    this.setState({input: ''})
}
render() {
    return ( 
<SearchbarTitle>
<SearchForm onSubmit={this.handleNameSubmit}>
<SearchFormButton>
<IoSearch />Find
</SearchFormButton>
<SearchInput onChange={this.handleNameChange}
value={this.state.input}
name="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
</SearchForm>
</SearchbarTitle>   

    );
}
}



export default Searchbar;