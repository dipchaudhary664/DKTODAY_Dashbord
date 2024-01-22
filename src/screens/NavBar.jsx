import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Link,
  Collapse,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("หน้าแรก");

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkAndIconStyles = (link) => ({
    textDecoration: "none",
    color: activeLink === link ? "white" : "black",
    backgroundColor: activeLink === link ? "#1C0666 " : "transparent",
    // width: "10%",
    padding: "2",
    borderRadius: "8px",
  });

  return (
    <Box
      color="white"
      w="250px"
      h="100vh"
      position="fixed"
      boxShadow="0 4px 6px rgba(0,0,0,0.1)"
      overflowY="auto"
    >
      <Heading mb="4" size="lg" color="black" pl="5" pt="5">
        DKTODAY
      </Heading>
      <VStack alignItems="flex-start" mx="5">
        <HStack style={linkAndIconStyles("หน้าแรก")} width={"100%"} px="2">
          <Icon
            icon="iconamoon:home-light"
            color={activeLink === "หน้าแรก" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("หน้าแรก")}
            onClick={() => handleLinkClick("หน้าแรก")}
          >
            หน้าแรก
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("การจัดส่ง")} width={"100%"} px="2">
          <Icon
            icon="fluent:box-20-regular"
            color={activeLink === "การจัดส่ง" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            onClick={() => {
              handleToggle();
              handleLinkClick("การจัดส่ง");
            }}
            style={linkAndIconStyles("การจัดส่ง")}
          >
            การจัดส่ง
          </Link>
        </HStack>
        <Collapse in={isOpen}>
          <VStack alignItems="flex-start">
            <Link
              href="#"
              px="2"
              py="2"
              width={"190px"}
              fontSize={"sm"}
              style={linkAndIconStyles("Item 1")}
              onClick={() => handleLinkClick("Item 1")}
            >
              Item 1
            </Link>
          </VStack>
        </Collapse>

        <HStack style={linkAndIconStyles("คำสั่งซื้อ")} width={"100%"} px="2">
          <Icon
            icon="material-symbols-light:list-alt-outline"
            color={activeLink === "คำสั่งซื้อ" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("คำสั่งซื้อ")}
            onClick={() => handleLinkClick("คำสั่งซื้อ")}
          >
            คำสั่งซื้อ
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("สิ้นค้า")} width={"100%"} px="2">
          <Icon
            icon="f7:book"
            color={activeLink === "สิ้นค้า" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("สิ้นค้า")}
            onClick={() => handleLinkClick("สิ้นค้า")}
          >
            สิ้นค้า
          </Link>
        </HStack>
        <HStack
          style={linkAndIconStyles("สำหรับสถานะศึกษา")}
          width={"100%"}
          px="2"
        >
          <Icon
            icon="fluent:hat-graduation-28-regular"
            color={activeLink === "สำหรับสถานะศึกษา" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("สำหรับสถานะศึกษา")}
            onClick={() => handleLinkClick("สำหรับสถานะศึกษา")}
          >
            สำหรับสถานะศึกษา
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("การเงิน")} width={"100%"} px="2">
          <Icon
            icon="lets-icons:wallet-light"
            color={activeLink === "การเงิน" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("การเงิน")}
            onClick={() => handleLinkClick("การเงิน")}
          >
            การเงิน
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("โปรโมชัน")} width={"100%"} px="2">
          <Icon
            icon="codicon:mic"
            color={activeLink === "โปรโมชัน" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("โปรโมชัน")}
            onClick={() => handleLinkClick("โปรโมชัน")}
          >
            โปรโมชัน
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("แชทกับลูกค้า")} width={"100%"} px="2">
          <Icon
            icon="fluent:chat-12-regular"
            color={activeLink === "แชทกับลูกค้า" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("แชทกับลูกค้า")}
            onClick={() => handleLinkClick("แชทกับลูกค้า")}
          >
            แชทกับลูกค้า
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("แจ้งเตือน")} width={"100%"} px="2">
          <Icon
            icon="system-uicons:bell"
            color={activeLink === "แจ้งเตือน" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("แจ้งเตือน")}
            onClick={() => handleLinkClick("แจ้งเตือน")}
          >
            แจ้งเตือน
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("ตั้งค่า")} width={"100%"} px="2">
          <Icon
            icon="uil:setting"
            color={activeLink === "ตั้งค่า" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("ตั้งค่า")}
            onClick={() => handleLinkClick("ตั้งค่า")}
          >
            ตั้งค่า
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("Report")} width={"100%"} px="2">
          <Icon
            icon="heroicons-outline:document-report"
            color={activeLink === "Report" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("Report")}
            onClick={() => handleLinkClick("Report")}
          >
            Report
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("ดาวน์โหลด")} width={"100%"} px="2">
          <Icon
            icon="material-symbols:download"
            color={activeLink === "ดาวน์โหลด" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("ดาวน์โหลด")}
            onClick={() => handleLinkClick("ดาวน์โหลด")}
          >
            ดาวน์โหลด
          </Link>
        </HStack>
        <HStack style={linkAndIconStyles("ออกจากระบบ")} width={"100%"} px="2">
          <Icon
            icon="ant-design:logout-outlined"
            color={activeLink === "ออกจากระบบ" ? "white" : "black"}
            width="20"
            height="20"
          />
          <Link
            href="#"
            py="2"
            fontSize={"sm"}
            style={linkAndIconStyles("ออกจากระบบ")}
            onClick={() => handleLinkClick("ออกจากระบบ")}
          >
            ออกจากระบบ
          </Link>
        </HStack>
        <HStack
          style={linkAndIconStyles("ซ่อนเมนู")}
          h={"20vh"}
          ml={"115px"}
          align={"center"}
        >
          <Icon icon="ep:d-arrow-left" color="gray" width="15" height="15" />
          <Text fontSize={"sm"} color={"black"}>
            ซ่อนเมนู
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
