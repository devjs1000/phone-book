import { Avatar, Box, Center, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const UserCard = ({ name, profile }: Props) => {
  return (
    <Center bg={"white"} my={4} rounded={"md"} p={4}>
      <Text>{name}</Text>
      <Spacer />
      <Avatar size={"sm"} name={name} src={profile} />
    </Center>
  );
};

interface Props {
  name: string;
  profile: string;
}

export default UserCard;
