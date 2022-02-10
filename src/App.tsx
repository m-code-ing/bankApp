import { Button, Grid } from "@mui/material";
import React from "react";
import ClientList from "./components/ClientList";

const App = () => {
  return (
    <Grid
      container
      direction="column"
      my={3}
      justifyContent="center"
      alignItems="center"
      textAlign="center">
      <Grid item my={6}>
        <Button variant="contained">Get Clients</Button>
      </Grid>
      <Grid item>
        <ClientList></ClientList>
      </Grid>
    </Grid>
  );
};

export default App;
