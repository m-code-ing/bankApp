import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";

type ClientListProps = {
  clientList: any[];
  updateClientList: (id: number) => void;
};

const ClientList = (props: ClientListProps) => {
  const deleteClient = (id: number) => {
    axios({
      method: "DELETE",
      url: `http://localhost:8080/api/client/${id}`,
    }).then(function (response) {
      props.updateClientList(id);
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            {props.clientList.length &&
              Object.keys(props.clientList[0]).map((key, index) => {
                return index !== 0 && index < 7 ? (
                  <TableCell>{key}</TableCell>
                ) : null;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.clientList.map((row: any, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.card_number}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right">{row.isActive}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  color="warning"
                  onClick={() => deleteClient(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientList;
