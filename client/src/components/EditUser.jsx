import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { editUser, getUser } from "../service/api";

import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data[0]);
  };

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  return (
    <div>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>

        <FormControl>
          <Button variant="contained" onClick={() => editUserDetails()}>
            Edit User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default EditUser;
