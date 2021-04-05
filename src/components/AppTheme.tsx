import {
    createMuiTheme,
} from "@material-ui/core";

import {
    green, red, orange
} from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: true; // 移除 `xs` 断点
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobileS : true,
        mobileM : true,
        mobileL : true,
        tablet: true,
        laptop: true,
        desktop: true,
        FourK : true
    }
}

const AppTheme = createMuiTheme({
    typography : {
        fontFamily : "AlegreyaVariable"
    },
    overrides : {
        MuiCssBaseline: {
            '@global' : {
                body : {
                    fontSize : "1rem",
                    minWidth : 300,
                    position : "absolute",
                    top : 0,
                    left : 0,
                    right : 0
                },
                '::-webkit-scrollbar' : {
                    display : "none"
                }
            }
        }
    },
    breakpoints : {
        values : {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            mobileS : 320,
            mobileM : 375,
            mobileL : 425,
            tablet : 768,
            laptop : 1024,
            desktop : 1440,
            FourK : 2560
        },
    },
    spacing : (factor) => `${0.5 * factor}rem`,
    palette : {
        primary : {
            main : green[900],
        },
        secondary : {
            main : orange[900],
        }
    }
})

export { AppTheme }