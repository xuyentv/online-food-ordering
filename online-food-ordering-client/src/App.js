import './App.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {darkTheme} from './Theme/DarkTheme';
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
    return (
        < ThemeProvider theme={darkTheme}>
            <CssBaseline> < /CssBaseline>
            <CustomerRoute/>

        < /ThemeProvider>
    );
}

export default App;