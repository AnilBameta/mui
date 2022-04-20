import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  TableRow,
  TableContainer,
  Box,
  TableHead,
  TableBody,
  TableCell,
  Checkbox,
} from "@mui/material";

const columns = [
  { id: "id", name: "ID", label: "id" },
  { id: "firstName", name: "First name", label: "firstName" },
  { id: "lastName", name: "Last name", label: "lastName" },
  {
    id: "age",
    name: "Age",
    label: "age",
  },
  {
    id: "fullName",
    name: "Full name",
    label: "fullName",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 43 },
  { id: 6, lastName: "Melisandre", firstName: "abc", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Table() {
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectedValue = (e, data) => {
    let tempItems = { ...selectedItems };
    tempItems[data] = e.target.checked;
    setSelectedItems(tempItems);
  };
  return (
    <TableContainer>
      <Grid container flexDirection="column">
        <Grid item>
          <Box p={2} mb={2}>
            <Table size="small">
              <TableHead headCells={columns} />
              <TableBody>
                {rows?.map((val, index) => (
                  <TableRow>
                    <TableCell>
                      {val?.applicationReviewStatus == "MovedToNextRound" ? (
                        ""
                      ) : (
                        <Checkbox
                          checked={selectedItems?.[index] || false}
                          onClick={(e) => handleSelectedValue(e, index)}
                        />
                      )}
                    </TableCell>
                    <TableCell>{val?.id}</TableCell>
                    <TableCell>{val?.lastName}</TableCell>
                    <TableCell>{val?.firstName}</TableCell>
                    <TableCell>{val?.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
