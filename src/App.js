import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    'font-family': 'Roboto',
  },
  logo: {
    'height': '70px',
  },
  topbar: {
    'width': '100%',
    'height': '70px',
    'background': '#4c4944',
    'color': 'white',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'display': 'flex',
    'justify-content': 'space-between',
  },
  contactIcon: {
    'height': '70px',
    'fontSize': '40px',
    'color': '#CCC',
    'margin-right': '10px',
  },
  statement: {
    'text-align': 'center',
    'padding': '20px',
    'font-weight': '300',
    'letter-spacing': '1px',
  },
  menuButton: {
    'margin-left': '20px',
    'height': '100%',
  }
}));

/**
 * Main root component for Nathan's website
 *
 * @return {object} JSX
 */
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topbar}>
        <MenuIcon className={classes.menuButton}/>
        <img src={logo} alt='logo' className={classes.logo}/>
        <div style={{'width': '44px'}}/>
      </div>
      <div className={classes.statement}>
        INVESTING IN A BETTER FUTURE FOR ALL
      </div>
    </div>
  );
}

export default App;
