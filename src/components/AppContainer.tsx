import * as React from 'react'
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useAppContainerStyle = makeStyles({
    container : {
        position : "absolute"
    }
})

function AppContainer(props){
    let { children, ...others } = props;
    let classes = useAppContainerStyle();

    return (<Container {...others} className = { classes.container }>
        { props.children }
    </Container>)
}

export { AppContainer }
