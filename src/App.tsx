// Import Custom Components
import ClientList from "./components/ClientList";

// Import MUI Components
import { Button, Grid } from "@mui/material";

// Other imports
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [clientList, setClientList] = useState<any[]>([]);

  const fetchClients = () => {
    // GET client list
    axios({
      method: "get",
      url: "http://localhost:8080/api/clients",
    }).then(function (response) {
      const clientList = response.data;
      setClientList(clientList);
    });
  };

  const updateClientList = (id: number) => {
    const updatedClientList = [...clientList].filter(
      (client) => client.id !== id
    );
    setClientList(updatedClientList);
  };

  return (
    <Grid
      container
      direction="column"
      my={3}
      justifyContent="center"
      alignItems="center"
      textAlign="center">
      <Grid item my={6}>
        <Button variant="contained" onClick={() => fetchClients()}>
          Get Clients
        </Button>
      </Grid>
      <Grid item>
        <ClientList
          clientList={clientList}
          updateClientList={updateClientList}></ClientList>
      </Grid>
    </Grid>
  );
};

export default App;
