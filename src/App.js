import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Iframe from 'react-iframe';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: "Home",
    }
  }

  changePage = (page) => {
    this.setState({
      currentPage: page
    });
  }

  render(){
    let page;
    if(this.state.currentPage === "Home")
    {
      page = <Home/>;
    }
    else if(this.state.currentPage === "About Me")
    {
      // page = <Iframe url="http://www.youtube.com/embed/?listType=user_uploads&list=Thefearalcarrot"
      // width="800px"
      // height="450px"
      // id="myId"
      // display="initial"
      // position="relative"/>;
      page = <AboutMe/>;
    }
    return (
      <div className="App">
        <NavBar changePage={this.changePage}/>
          {page}
       
      </div>
    );
  } 
}

export default App;
