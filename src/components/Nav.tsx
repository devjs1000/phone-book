import {
  Button,
  Center,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../states/login.slice";
import { BsThreeDotsVertical } from "react-icons/bs";

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Center bg={"blue.600"} h={"50px"} color={"white"} px={4}>
      <IconButton
        variant={"ghost"}
        icon={<AiOutlineMenu />}
        rounded={"full"}
        _hover={{ bg: "blue.500" }}
        _active={{ bg: "blue.500" }}
        aria-label={"menu"}
      />
      <Spacer />
      <Menu>
        <MenuButton
          variant={"ghost"}
          as={IconButton}
          rounded={"full"}
          _hover={{ bg: "blue.500" }}
          _active={{ bg: "blue.500" }}
          icon={<BsThreeDotsVertical />}
        />
        <MenuList bg={"gray.200"}>
          <MenuItem>
            <Button w={"full"} variant={"ghost"} colorScheme={"blue"} onClick={handleLogout}>
              Logout?
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Center>
  );
};

export default Nav;
