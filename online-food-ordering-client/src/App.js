import './App.css';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {darkTheme} from './Theme/DarkTheme';
import {Navbar} from './components/Navbar/Navbar';
import Home from "./components/Home/Home";

function App() {
    return (
        < ThemeProvider theme={darkTheme}>
            <CssBaseline> < /CssBaseline>
            <Navbar> < /Navbar>
            <Home/>
        < /ThemeProvider>
    );
}

export default App;