// Import Custom Components
import ClientList from "./components/ClientList";

// Import MUI Components
import { Button, Grid } from "@mui/material";

// Other imports
import axios from "axios";
import { useState } from "react";
import BankList from "./components/BankList";
import AddClientForm from "./components/AddClientForm";

const App = () => {
  const [clientList, setClientList] = useState<any[]>([]);
  const [bankList, setBankList] = useState<any[]>([]);
  const [openForm, setOpenForm] = useState(false);

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

  const fetchBankers = () => {
    // GET client list
    axios({
      method: "get",
      url: "http://localhost:8080/api/banks",
    }).then(function (response) {
      const bankList = response.data;
      setBankList(bankList);
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
      alignContent="center"
      textAlign="center">
      <Grid container justifyContent="center">
        <Grid item my={6} mx={2}>
          <Button variant="contained" onClick={() => fetchClients()}>
            Get Clients
          </Button>
        </Grid>
        <Grid item my={6} mx={2}>
          <Button variant="contained" onClick={() => setOpenForm(!openForm)}>
            Add Client
          </Button>
        </Grid>
        <Grid item my={6} mx={2}>
          <Button variant="contained" onClick={() => fetchBankers()}>
            Get Bankers
          </Button>
        </Grid>
      </Grid>
      <Grid sm={10} container justifyContent="center">
        {openForm && (
          <Grid item my={2}>
            <AddClientForm></AddClientForm>
          </Grid>
        )}
        {clientList.length ? (
          <Grid item my={2} border={1}>
            <ClientList
              clientList={clientList}
              updateClientList={updateClientList}></ClientList>
          </Grid>
        ) : null}

        {clientList.length ? (
          <Grid item my={2} border={1}>
            <BankList bankList={bankList}></BankList>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default App;
