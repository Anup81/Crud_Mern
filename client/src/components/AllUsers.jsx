import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  styled,
  Button,
} from "@mui/material";

import { getUsers } from "../service/api";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background-color: #000000;
  & > th {
    color: #fff;
    font-size: 16px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 14px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUsers;
