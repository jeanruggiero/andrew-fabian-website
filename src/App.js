import React from 'react';
import {Box, Grid, Hidden} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles"
import andrewTheme from "./styles";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import ContentAbout from "./components/ContentAbout"
import HighlightsBar from "./components/HighlightsBar";
import Footer from "./components/Footer";
import ContentResume from "./components/ContentResume";
import ContentContact from "./components/ContentContact";
import Sidebar from "./components/Sidebar"


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
    return (
      <ThemeProvider theme={andrewTheme}>
        <HeaderBar/>

        <Box pt={3} px="2vw" style={{overflowX: 'hidden'}}>
          <Hidden mdDown>
            <Box p={1} />
          </Hidden>

          <Grid container spacing={2}>
            <Hidden xsDown>
              <Hidden smDown>
                <Grid item md={1}/>
              </Hidden>
              <Grid item sm={4}>
                <Sidebar/>
              </Grid>
            </Hidden>

            <Grid item sm={8} md={6} lg={6}>
              <NavBar panel={this.state.panel} onClick={this.handleClick}/>

              {this.renderContent()}
            </Grid>
          </Grid>

          <Hidden lgUp>
            <HighlightsBar/>
          </Hidden>
        </Box>

        <Footer/>
      </ThemeProvider>
    )
  }
};
