import { createTheme } from '@mui/material/styles';
import { green,} from '@mui/material/colors';

const grey = "#EEEEEE";

 const theme = createTheme({
  palette: {
    common: {
        grey: "#EEEEEE",
        ligthgrey: "#F6F6F6",
        darkgrey: "#7e7b7b"
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
    },
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
    },
}
});

export default theme