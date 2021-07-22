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
import { FaUserAlt, FaLock, FaTabletAlt } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function SignUp() {
  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [pwd, setPwd] = useState('');
  let [visible, setVisible] = useState(false);
  let [errText, setErrText] = useState('');
  let history = useHistory();
  let register = () => {
    console.log('ssss', name, pwd)
    axios.post('https://conduit.productionready.io/api/users', {
      "user":{
        "username": name,
        "email": phone,
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
        setVisible(true);
        setErrText(str);
      } else {
        const str = key[0] + ' ' + errors[key[0]][0];
        setVisible(true);
        setErrText(str);
      }
    })
  }
  let handleChange = (e, type) => {
    const value = e.target.value;
    if (type === 'name') {
      setName(value);
    } else if (type === 'phone') {
      setPhone(value);
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
            <Input placeholder="你的昵称" value={name} onChange={e=>handleChange(e, 'name')}/>
          </InputGroup>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaTabletAlt />} />
          <Input placeholder="手机号或邮箱" value={phone} onChange={e=>handleChange(e, 'phone')}/>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" placeholder="设置密码" value={pwd} onChange={e=>handleChange(e, 'pwd')}/>
        </InputGroup>
        <Button onClick={register} _hover={{ bgColor: "tomato" }} w="100%" colorScheme="teal">
          注册
        </Button>
        <Alert status="error" d={visible?'flex':'none'}>
          <AlertIcon />{errText}
        </Alert>
      </Stack>
    </form>
  );
}
