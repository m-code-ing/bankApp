import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";

type BankListProps = {
  bankList: any[];
};

const BankList = (props: BankListProps) => {
  if (!props.bankList.length) {
    console.log(props.bankList.length);
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <Grid container justifyContent="center">
        <Grid sm={4} bgcolor="aliceblue" py={1} border={1}>
          <Typography>Bank List</Typography>
        </Grid>
      </Grid>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            {props.bankList.length &&
              Object.keys(props.bankList[0]).map((key, index) => {
                return index !== 0 && index < 6 ? (
                  <TableCell>{key}</TableCell>
                ) : null;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.bankList.map((row: any, index) => (
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
              <TableCell align="right">{row.employee_number}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" color="warning">
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

export default BankList;
