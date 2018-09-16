import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Home from '../Home';
import TopBar from '../../Components/TopBar';
import Header from '../../Components/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3', // blue
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <TopBar />
    <Header />
    <Home />
  </MuiThemeProvider>
);

export default App;
