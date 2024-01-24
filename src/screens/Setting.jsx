import React from "react";
import {
  Box,
  HStack,
  Text,
  Spacer,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
function Setting() {
  return (
    <Box ml={{ base: "20%", md: "28%", lg: "20%" }} pr="2%" pt={"1%"}>
      <HStack
        bgColor="#F2F4F4"
        h={"8%"}
        w={"100%"}
        borderRadius={"15px"}
        pl={"5"}
        pr={"5"}
        color={"black"}
      >
        <Icon
          icon="material-symbols:notes-rounded"
          color="black"
          width="30"
          height="30"
        />
        <Spacer />
        <Icon
          icon="mdi:bell-badge-outline"
          color="black"
          width="20"
          height="20"
          hFlip={true}
        />
        <Box py={"1%"}>
          <Text fontSize={"xs"} fontWeight={"bold"}>
            รายการสินค้า
          </Text>
          <Text fontSize={"xs"} align={"end"}>
            Admin
          </Text>
        </Box>
        <Avatar
          alignItems={"end"}
          name="Dan Abrahmov"
          size="sm"
          src="https://bit.ly/dan-abramov"
        >
          <AvatarBadge boxSize="1.10em" bg="green.500" />
        </Avatar>
      </HStack>
    </Box>
  );
}

export default Setting;
