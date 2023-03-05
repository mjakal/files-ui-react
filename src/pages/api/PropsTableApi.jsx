import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SubTitle from "../../components/demo-components/sub-title/SubTitle";
import { Tooltip, IconButton, Stack } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#042354",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PropsTableApi({ rows = [] }) {
  const [sorted, setSorted] = React.useState(false);
  const handleSort = () => {
    setSorted((_sorted) => {
      const resultSorted = !_sorted;
      if(resultSorted){

      }
      return resultSorted;
    });
  };
  return (
    <React.Fragment>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <SubTitle content="Props" />

        <Tooltip
          title={sorted ? "Unsort alphabetically" : "Sort alphabetically"}
        >
          <IconButton
            style={{ borderRadius: "50%", border: "0.5px solid #eaeef3" }}
            onClick={handleSort}
            aria-label="upload picture"
            component="label"
          >
            <SortByAlphaIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell /* width={"30%"} */>Name</StyledTableCell>
              <StyledTableCell align="left" /* width={"30%"} */>
                Type
              </StyledTableCell>
              <StyledTableCell align="left">Default</StyledTableCell>
              <StyledTableCell align="left" /*  width={"30%"} */>
                Description
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{
                    wordBreak: row.name.length > 12 ? "break-word" : "normal",
                  }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ wordBreak: "break-word" }}
                >
                  {row.type}
                </StyledTableCell>
                <StyledTableCell align="left">{row.default}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
