import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  search: {
    width: '100%',
    marginLeft: 0,
    position: 'relative',
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: fade(theme.palette.common.white, 0.25) },
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    width: theme.spacing(7),
    justifyContent: 'center',
    pointerEvents: 'none',
    alignItems: 'center',
    display: 'flex',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: { width: 200, },
  },
}));

function Header(props) {
  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>Glycemic Index List</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}><SearchIcon /></div>
          <InputBase 
            placeholder="search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} 
            onChange={(ev) => { props.setSearchQuery(ev.target.value); }}
          />
        </div>
      </Toolbar>
    </AppBar>

  );
}

export default Header;