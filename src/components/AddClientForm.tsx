import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { useState } from "react";

const AddClientForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

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
    </Box>
  );
};

export default AddClientForm;
