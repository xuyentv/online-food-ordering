const { creatTheme } = require("@mui/material")
export const darkTheme = creatTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5a20cb"
        },
        black: {
            main: "#242b2e"
        },
        default: {
            main: "#000000",
            default: "#0d0d0d",
            "paper": "#0d0d0d"
        },
        textColor: {
            main: "#111111"
        }
    }
})