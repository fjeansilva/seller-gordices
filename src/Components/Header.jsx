import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Header = () => (
  <Grid
    container
    style={{ flexGrow: '1', height: '400px', backgroundColor: '#fff' }}
  >
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ margin: '30px 0', flexGrow: '1' }}
    >
      <img width="150" height="150" src="https://png.pngtree.com/svg/20170814/message_blue_@3x_218569.png" alt="Gordices" />
      <Typography variant="display2" color="textPrimary">
        Gordices
      </Typography>
      <Typography variant="headline" color="textSecondary">
        Divulgue, crie relacionamento e venda mais.
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
