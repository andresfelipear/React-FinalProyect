import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import EnhancedTable from './components/table/EnhancedTable';

const theme = createTheme({

  palette: {
    custom: {
      main: "#3f51b5",
      light: "#757de8",
      dark: "#002984",
      contrastText: "#FFF"
    },
  },
});

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Header />
        <Main /> */}
        <EnhancedTable/>

      </ThemeProvider>

    </div>
  );
}

export default App;
