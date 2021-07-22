import React from "react";
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  Button,
  FormControl,
  Alert,
  AlertIcon
} from "@chakra-ui/core";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function SignIn() {
  let [name, setName] = useState('');
  let [pwd, setPwd] = useState('');
  let [visible, setVisible] = useState(false);
  let [errText, setErrText] = useState('');
  let history = useHistory();
  let login = () => {
    console.log('ssss', name, pwd)
    axios.post('https://conduit.productionready.io/api/users/login', {
      "user":{    
        "email": name,
        "password": pwd
      }
    }).then(res => {
      console.log(res)
      history.push("/card");
    }).catch(err => {
      const { errors } = err.response.data;
      const key = Object.keys(errors);
      if (key && key.length<2) {
        const str = key + ' ' + errors[key][0];
        setVisible(true)
        setErrText(str)
      }
    })
  }
  let handleChange = (e, type) => {
    const value = e.target.value;
    if (type === 'name') {
      setName(value);
    } else if (type === 'pwd') {
      setPwd(value);
    }
  }
  return (
    <form>
      <Stack spacing="2">
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input placeholder="手机号或邮箱" value={name} onChange={e=>handleChange(e, 'name')}/>
          </InputGroup>
          {/* <FormHelperText>用户名是必填项</FormHelperText> */}
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="密码" value={pwd} onChange={e=>handleChange(e, 'pwd')}/>
          {/* <InputRightAddon children={<FaCheck />} /> */}
        </InputGroup>
        <Button onClick={login} _hover={{ bgColor: "tomato" }} w="100%" colorScheme="teal">
          登录
        </Button>
        <Alert status="error" d={visible?'flex':'none'}>
          <AlertIcon />{errText}
        </Alert>
      </Stack>
    </form>
  );
}
