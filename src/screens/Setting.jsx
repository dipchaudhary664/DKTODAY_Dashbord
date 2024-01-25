import React from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  HStack,
  Spacer,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
const settingListdata = [
  {
    id: 1,
    name: "จัดการแบเนอร์",
    img: "../../public/image/banner.png",
  },
  { id: 2, name: "จัดการหมวดหมู่สินค้า", img: "../../public/image/books.png" },
  {
    id: 3,
    name: "จัดการหน้าแพจ",
    img: "../../public/image/paper-clip.png",
  },
  { id: 4, name: "ตั้งค่าข้อมูลบริษัท", img: "../../public/image/diagram.png" },
  { id: 5, name: "จัดการคูปองส่วนลด", img: "../../public/image/setting.png" },
  { id: 5, name: "เงือนไขการส่งฟรี", img: "../../public/image/delivery.png" },
  { id: 6, name: "บัตรสะสมแต้ม", img: "../../public/image/gift-box.png" },
  { id: 7, name: "หน้าจัดการ Admin", img: "../../public/image/user.png" },
  {
    id: 8,
    name: "หน้าจัดการ Customer",
    img: "../../public/image/user-settings.png",
  },
  {
    id: 9,
    name: "ตั้งค่าจำนวนสินค้าแหลือน้อย",
    img: "../../public/image/box.png",
  },
  {
    id: 10,
    name: "จัดการตั้งค่า Tag",
    img: "../../public/image/price-tag.png",
  },
];

function Setting() {
  return (
    <Box ml={{ base: "20%", md: "28%", lg: "20%" }} pr="2%" pt={"1%"}>
      <Box>
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
      <HStack mt={"5"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          ตั้งค่า
        </Text>
        <Spacer />
        <HStack
          border={"1px"}
          borderColor={"gray.300"}
          borderRadius={"10px"}
          px={"3"}
          py={"1"}
          align={"center"}
        >
          <Icon icon="ph:eye-light" color="black" width="15" height="15" />
          <Text fontSize={"xs"}>เยียมชมร้ารค้า</Text>
        </HStack>
        <HStack
          border={"1px"}
          borderColor={"gray.300"}
          color={"blue"}
          borderRadius={"10px"}
          px={"3"}
          py={"1"}
          align={"center"}
        >
          <Icon
            icon="material-symbols-light:share"
            color="blue"
            width="15"
            height="15"
          />
          <Text fontSize={"xs"}>แชร์ร้านค่า</Text>
        </HStack>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} py={6}>
        {settingListdata.map((item) => (
          <HStack key={item.id} p={4} shadow="md" borderRadius="md">
            <Image src={item.img} />
            <Text>{item.name}</Text>
          </HStack>
        ))}
      </Grid>
    </Box>
  );
}

export default Setting;
