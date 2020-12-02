import { createMuiTheme } from '@material-ui/core/styles'; 

export const getTheme = (type) => {
    return createMuiTheme({
    palette: {
        // background: {
        //     paper: fade('#fff',0.16),
        //     default: '#ECE9E6'
        // }
       type: type,
       background: {
           default: type === 'dark' ? '#0f0f0f' : '#ECE9E6'
       }
    },
 
     typography: {
        fontFamily: [
            '"Playfair Display", serif',
        ].join(','),
        h1: {
            fontFamily: "'Major Mono Display', monospace"
        },
        body1: {
            fontFamily: '"Lato", sans-serif'
        },
        body2: {
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.935rem'
        }
   },
 })
}