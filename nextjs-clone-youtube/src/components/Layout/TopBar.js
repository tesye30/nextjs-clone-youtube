import {
  AppBar,
  Box,
  Button,
  Toolbar,
  makeStyles,
  Hidden,
  Paper,
  InputBase,
  IconButton,
  Avatar,
} from '@material-ui/core';
import RouterLink from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useSession, signIn, signOut } from 'next-auth/client';
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    cursor: 'pointer',
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 32,
    width: 32,
  },
  popover: {
    width: 200,
  },
  logo: {
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
  icons: {
    paddingRight: theme.spacing(2),
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classe = useStyles();
  const [session] = useSession();
  const { settings, saveSettings } = useSettings();

  return (
    <AppBar className={classe.root} color="default" {...rest}>
      <Toolbar className={classe.toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <RouterLink href="/">
            <img
              className={classe.logo}
              alt="Logo"
              src={
                settings.theme === THEMES.DARK
                  ? 'https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_dark.svg?cache=bb9b9c6'
                  : '/new-youtube-logo.svg'
              }
            />
          </RouterLink>
        </Box>
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classe.search}>
              <InputBase
                className={classe.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton
                type="submit"
                className={classe.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box display="flex">
          <IconButton className={classe.icons}>
            {settings.theme === THEMES.DARK ? (
              <Brightness7Icon
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4Icon
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </IconButton>
          <IconButton className={classe.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classe.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classe.icons}>
            <MoreVert />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="User"
                className={classe.avatar}
                src={session?.user?.image}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;