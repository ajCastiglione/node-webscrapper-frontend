import React from "react";
import bgImg from "./../images/backgroundImg.jpg";
import Grid from "@material-ui/core/Grid";

const Header = props => {
  return (
    <header className="App-header" style={{ backgroundImage: `url(${bgImg})` }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <h1 className="App-title">Web Scrapping Utility</h1>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
