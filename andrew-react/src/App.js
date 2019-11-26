import React from 'react';
import './App.css';
import HeaderBar from "./components/HeaderBar";
import { ThemeProvider } from "@material-ui/core/styles"
import andrewTheme from "./styles";
import NavBar from "./components/NavBar";
import ContentAbout from "./components/ContentAbout"
import HighlightsBar from "./components/HighlightsBar";
import Footer from "./components/Footer";
import ContentResume from "./components/ContentResume";
import ContentContact from "./components/ContentContact";
import { spacing } from '@material-ui/system';
import {Box, Container} from "@material-ui/core";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {panel: 'about'};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(panel) {
    this.setState({panel: panel});
  }



  renderContent() {
    switch (this.state.panel) {
      case 'about':
        return (<ContentAbout/>);
      case 'resume':
        return (<ContentResume/>);
      case 'contact':
        return (<ContentContact/>);
      default:
        return false;
    }
  }

  render() {
    console.log("rendering");
    return (

      <ThemeProvider theme={andrewTheme}>
          <HeaderBar/>

          <Box p={2}>
            <NavBar onClick={this.handleClick}/>

            {this.renderContent()}

            <HighlightsBar/>

            <Footer/>
          </Box>
      </ThemeProvider>

    );
  }
};
