import './App.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {darkTheme} from './Theme/DarkTheme';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./components/State/Authentication/Action";
import {findCart} from "./components/State/Cart/Action";
import Routers from "./Routers/Routers";

function App() {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {auth} = useSelector(store => store);
    useEffect(() => {
        dispatch(getUser(auth.jwt || jwt))
        dispatch(findCart(jwt))
    }, [auth.jwt]);
    return (
        < ThemeProvider theme={darkTheme}>
            <CssBaseline> < /CssBaseline>
            <Routers></Routers>
        < /ThemeProvider>
    );
}

export default App;