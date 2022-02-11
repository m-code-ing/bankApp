import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddClientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = () => {
    const client = {
      firstName,
      lastName,
      email,
      cardNumber,
    };
    axios({
      method: "POST",
      url: `http://localhost:8080/api/client`,
      data: client,
    })
      .then(function (response) {
        if (response.data.msg === "Success") {
          alert("Client added successfully");
        } else {
          alert(response.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent, fieldName: any) => {
    let value = (e.target as HTMLInputElement).value;

    switch (fieldName) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "cardNumber":
        setCardNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <Grid item my={1}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          onChange={(e) => handleChange(e, "firstName")}
        />
      </Grid>
      <Grid item my={1}>
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          onChange={(e) => handleChange(e, "lastName")}
        />
      </Grid>
      <Grid item my={1}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => handleChange(e, "email")}
        />
      </Grid>

      <Grid item my={1}>
        <TextField
          required
          id="outlined-required"
          label="CardNumber"
          onChange={(e) => handleChange(e, "cardNumber")}
        />
      </Grid>

      <Grid item my={1}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default AddClientForm;
