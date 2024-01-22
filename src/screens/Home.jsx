// Sidebar.js
import React from "react";
import {
  Box,
  HStack,
  Text,
  Avatar,
  Spacer,
  AvatarBadge,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const historyData = [
  {
    event: "ที่ต้องจัดส่ง",
    Number: "0",
    eventComment: "อัพเดทสถานะจัดส่ง",
  },
  {
    event: "รอตรวจสอบการชำระเงิน",
    Number: "0",
    eventComment: "ยืนยันการชำระเงิน",
  },
  {
    event: "ที่ใภล์หมดเขตชำระเงิน",
    Number: "0",
    eventComment: "ติดตามกับลูกค้า",
  },
  {
    event: "ยังไม่ตัดสิ้นใจซื้อ",
    Number: "0",
    eventComment: "ติดตามกับลูกค้า",
  },
];

const dashboardData = [
  {
    metric: "หยอดขายทั้งหมด (10)",
    value: "1080.00 -",
  },
  {
    metric: "หยอดขายจากแคมเปญ",
    value: "500.00 -",
  },
  {
    metric: "จำนวนคนเข้าหน้าร้าน",
    value: 108,
  },
  {
    metric: "จำนวนคนดูสิ้นค้า",
    value: 50,
  },
  {
    metric: "ลูกค้าที่มีสิ้นค้าในตะกร้า",
    value: 0,
  },
  {
    metric: "จำนวนออเดอร์",
    value: 50,
  },
];

const Home = () => {
  return (
    <Box>
      <Box pl="20%" pr="2%" py="1%">
        <HStack
          bgColor="#F2F4F4"
          h={"8vh"}
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
          <Box>
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
            {" "}
            <AvatarBadge boxSize="1.10em" bg="green.500" />
          </Avatar>
        </HStack>
      </Box>
      <Box
        ml={"24%"}
        my={"2%"}
        py="2"
        px="4"
        bgColor={"#FFDDBB "}
        h="30vh"
        w={"70%"}
        borderRadius={"15px"}
      >
        <HStack>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            รายการสินค้า
          </Text>
          <Spacer />
          <Box
            pl={"3"}
            pr={"2"}
            py={"1"}
            border={"1px solid gray"}
            borderRadius={"10px"}
            color={"black"}
            bgColor={"#F2F4F4"}
          >
            <HStack fontSize={"xs"} align={"center"}>
              <Text>ประวัติการขาย</Text>
              <Spacer />
              <Icon
                icon="iconamoon:arrow-left-2-thin"
                color="gray"
                width="20"
                height="20"
                hFlip={true}
              />
            </HStack>
          </Box>
        </HStack>

        <HStack>
          {historyData.map((data, index) => (
            <VStack
              mt={"2"}
              fontSize={"sm"}
              align={"start"}
              bgColor={"white"}
              borderRadius={"10px"}
              w={"25%"}
              h={"20vh"}
              px={"4"}
            >
              {" "}
              <Text pt={"2"} color={"gray"}>
                {data.event}
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"} color={"#1C0666 "}>
                {data.Number}
              </Text>
              <Text color={"gray"}>{data.eventComment}</Text>
            </VStack>
          ))}
        </HStack>
      </Box>
      <Box ml="24%" my={"2%"} py="2" px="4" h="30vh" w={"70%"}>
        <HStack>
          <Text fontSize={"md"} fontWeight={"bold"}>
            ภาพรวมในเดือน : วันที่ 1-25 ธันวาคม 2023
          </Text>
          <Spacer />
          <Box
            pl={"3"}
            pr={"2"}
            py={"1"}
            border={"1px solid gray"}
            borderRadius={"10px"}
            color={"black"}
            bgColor={"#F2F4F4"}
          >
            <HStack fontSize={"xs"} align={"center"}>
              <Text>ไปที่แดชบอร์ด</Text>
              <Spacer />
              <Icon
                icon="iconamoon:arrow-left-2-thin"
                color="gray"
                width="20"
                height="20"
                hFlip={true}
              />
            </HStack>
          </Box>
        </HStack>

        <Flex direction="column" mt="5%">
          {[...Array(6)].map((_, rowIndex) => (
            <Flex key={rowIndex} justify="start" mb={4} gap={4}>
              {dashboardData
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((data, columnIndex) => (
                  <VStack
                    key={columnIndex}
                    bgColor="#F8F9F9"
                    borderRadius={"10px"}
                    boxShadow="0 4px 6px rgba(0,0,0,0.1)"
                    w="100%"
                    fontSize="sm"
                    align="start"
                    p={4}
                  >
                    <Text>{data.metric}</Text>
                    <Text fontWeight="bold" fontSize={"xl"} color={"#1C0666 "}>
                      {data.value}
                    </Text>
                  </VStack>
                ))}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
