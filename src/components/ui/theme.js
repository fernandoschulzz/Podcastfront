import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const grey = "#EEEEEE";
const ligthgrey = "#F6F6F6"

 const theme = createTheme({
  palette: {
    common: {
        grey: "#EEEEEE",
        ligthgrey: "#F6F6F6"
    },
    primary: {
      main: grey,
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    tab: {
        fontFamily: "Poppins",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "1rem",
    }
}
});

export default theme