import Logo from "@/components/elements/Logo.jsx";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { ShoppingCart, Search } from "react-feather";

export default function Header() {
  return (
    <Navbar
      className="md:px-[5%] py-3 max-w-screen-xl mx-auto"
      position="sticky"
    >
      <NavbarBrand className="sm:hidden">
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Product
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Input
            type="search"
            placeholder="Search Store"
            endContent={<Search />}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            size="sm"
            variant="solid"
            className="font-bold"
          >
            Register
          </Button>
        </NavbarItem>
        <NavbarItem className="text-primary">
          <ShoppingCart size={20} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
