import React from 'react';
import axios from 'axios';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locData:''
    }
  }
  ubdateSearchQuery = (event) => {
    this.state({
      searchQuery: event.target.value
    })
    console.log(this.state.searchQuery);
  }

  getlocation = async() => {
    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.6bc91fcdc5821361da31ce29aba85b5f&q=${this.state.searchQuery}&format=json`;
    let locResult =await axios.get(locUrl);
    console.log(locResult.data);
    this.setState({
      locData:locData.data[0]
    })
}

  render() {
    return (
      <>
      <h1>hi</h1>
        <form onSubmit={this.getlocation}>
          <input type='Text' placeholder='add a city ya zalmeh' onChange={this.ubdateSearchQuery} />
                  {/* <button onClick={this.getlocation}> search </button> */}
          <input type='submit' value='get location' />
          
        </form>
        <p>{ this.state.locData.display_name}</p>
     </>
     )
   }
 }


export default App;
