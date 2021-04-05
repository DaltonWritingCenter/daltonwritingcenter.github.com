import * as React from 'react';
import ReactDOM from "react-dom";
import {
    ThemeProvider,
    CssBaseline,
} from "@material-ui/core";
import { IndexContent } from "../../components/IndexContent";
import { AppTopBar } from "../../components/AppTopBar";
import { AppContainer } from "../../components/AppContainer";
import { AppBottomBar } from "../../components/AppBottomBar";
import { AppTheme } from "../../components/AppTheme";
import "@fontsource/alegreya/variable.css";

function main(){
    let container = document.querySelector("#container");
    ReactDOM.render(<App />, container);
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ThemeProvider theme = { AppTheme }>
                <CssBaseline/>
           
                     <AppContainer maxWidth = { false } disableGutters>
                    <IndexContent></IndexContent>
                    <AppBottomBar />
                </AppContainer> 
   
                <AppTopBar />

            </ThemeProvider>
        )
    }
}

window.onload = () => {
    main()
}