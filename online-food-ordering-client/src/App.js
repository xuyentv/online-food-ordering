import './App.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {darkTheme} from './Theme/DarkTheme';
import {Navbar} from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import RestaurantCard from "./components/Restaurant/RestaurantCard";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        < ThemeProvider theme={darkTheme}>
            <CssBaseline> < /CssBaseline>
            <Navbar> < /Navbar>
            {/*<Home/>*/}
            {/*<RestaurantDetail></RestaurantDetail>*/}
            <Cart></Cart>
        < /ThemeProvider>
    );
}

export default App;