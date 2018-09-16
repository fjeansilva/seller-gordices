import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import HowWorkButtons from '../../Components/HowWorkButtons';
import Pricing from '../../Components/Pricing';

const styles = theme => ({
  header: {
    height: 400,
    backgroundColor: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
  containerPaper: {
    backgroundColor: theme.palette.background.paper,
  },
  checkIcon: {
    color: theme.palette.primary.main,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Home = ({ classes }) => (
  <Grid container xs={10} className={classes.layout}>
    <Grid
      container
      direction="row"
    >
      <Grid
        item
        xs={12}
        spacing={40}
        style={{ padding: '20px', marginTop: '20px' }}
      >
        <Typography variant="title" className={classes.grow}>
          Porque Gordices?
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        style={{ padding: '5px' }}
      >
        <div className={classes.containerPaper}>
          <List dense={false}>
            <ListItem>
              <ListItemIcon className={classes.checkIcon}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Item 1"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />  
              </ListItemIcon>
              <ListItemText
                primary="Item 2"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Item 3"
              />
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        style={{ padding: '5px' }}
      >
        <div className={classes.containerPaper}>
          <List dense={false}>
            <ListItem>
              <ListItemIcon className={classes.checkIcon}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Item 1"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />  
              </ListItemIcon>
              <ListItemText
                primary="Item 2"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Item 3"
              />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
    <Grid
      container
      className={classes.grow}
      style={{ marginTop: '50px' }}
    >
      <Grid
        item
        xs={12}
        spacing={40}
        style={{ padding: '20px', marginTop: '20px' }}
      >
        <Typography variant="title" className={classes.grow}>
          Como funciona
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <HowWorkButtons />
      </Grid>
    </Grid>
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Pricing />
      </Grid>
    </Grid>
  </Grid>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
