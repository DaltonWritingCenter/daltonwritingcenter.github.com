import * as React from "react";
import ReactDOM from "react-dom";

import {
    ThemeProvider,
    CssBaseline,
} from "@material-ui/core"
import { AppTopBar } from "../../components/AppTopBar";
import { AppContainer } from "../../components/AppContainer";
import { AppBottomBar } from "../../components/AppBottomBar";
import { AppTheme } from "../../components/AppTheme"
import { MemberContent } from "../../components/MemberContent";
import { IndexContent } from "../../components/IndexContent";

import "@fontsource/alegreya/variable.css";
import { FAQContent } from "../../components/FAQcontent";

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
                <AppTopBar />
                <AppContainer maxWidth = { false } disableGutters>
                    <IndexContent />
                    <FAQContent />
                    <AppBottomBar />
                </AppContainer>
            </ThemeProvider>
        )
    }
}

window.onload = () => {
    main()
}