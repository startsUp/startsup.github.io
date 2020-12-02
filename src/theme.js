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
    textGradient: type === 'dark' ? 
    // 'linear-gradient(90deg, rgba(226,19,194,1) 0%, rgba(129,200,237,1) 30%, rgba(50,240,39,1) 65%, rgba(255,201,4,1) 100%)' : 
    'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)' : 
    // 'linear-gradient(90deg, rgba(9,0,115,1) 0%, rgba(9,112,218,1) 33%, rgba(9,114,208,1) 62%, rgba(0,157,36,1) 93%)'
    'radial-gradient(circle, rgba(3,29,164,1) 0%, rgba(136,1,28,1) 100%)'
    ,
    typography: {
        fontFamily: [
            '"Roboto", sans-serif',
        ].join(','),
        h1: {
            fontFamily: "'Major Mono Display', monospace",
            fontWeight: '700'
        },
        h5: {
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