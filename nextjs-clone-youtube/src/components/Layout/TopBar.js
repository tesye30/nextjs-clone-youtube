import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow:'none',
    zIndex:theme.zIndex.drawer + 1,
    backgroundColor:theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo : {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));

function TopBar(){
  const classe = useStyles();

  return (

    <AppBar className={classe.root} color="default" >
      <Toolbar className={classe.toolbar}>
        <Box display="flex" alignItems="itens">
          <MenuIcon />
          <img src="/new-youtube-logo.svg" alt="logo" className={classe.logo} />
        </Box>
        <Hidden mdDown>
        <Box>
          <Paper component="form" className={classe.search}>
            <InputBase
              className={classe.input}
              placeholder="Pesquisar aqui "
              inputProps={{'aria-label':'search google maps'}}
            />
            <IconButton
            type="submit"
            className={classe.iconButton}
            aria-label="search"
            >
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Box>
        </Hidden>
        
        <Box display="flex">
        <IconButton className={classe.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classe.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classe.icons}>
            <MoreVert />
           
          </IconButton>
          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircle/>}
            
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;