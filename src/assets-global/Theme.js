import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import 'typeface-roboto'

const dark = createMuiTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#43A13F',
                dark: '#43BE3F',
                contrastText: '#fff'
            },
            secondary: {
                main: '#4E5B28',
                dark: '#4E7328',
                contrastText: '#fff'
            }
        },
        typography: {
            fontFamily: [
                'Roboto',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(',')
        },
        spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
        text: {
            primary: '#fff',
            secondary: '#9E9E9E',
            disabled: '#C2C2C2',
            hint: '#9E9E9E'
        }
    });

export default responsiveFontSizes(dark);


