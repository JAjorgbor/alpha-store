import Logo from "@/components/elements/Logo.jsx";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Sling as HamburgerButton } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ArrowRight, Search, ShoppingCart } from "react-feather";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandSearchField, setExpandSearchField] = useState(false);
  const menu = [
    { label: "Home", route: "/" },
    { label: "Shop", route: "/shop" },
    { label: "Contact", route: "/contact" },
    { label: "Categories", route: "/categories" },
    { label: "Products", route: "/products" },
  ];

  return (
    <Navbar
      className="lg:px-4 py-3  mx-auto z-50 backdrop-blur-sm bg-[rgba(255,255,255,0.6)] sticky top-0 justify-center"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarItem className="lg:hidden">
          <HamburgerButton
            size={25}
            onToggle={(toggled) => setIsMenuOpen(toggled)}
            duration={0.8}
            color="gray"
          />
        </NavbarItem>
        <NavbarBrand className="lg:hidden">
          <Logo
            className={`text-sm  ${
              expandSearchField ? "hidden " : ""
            } sm:block sm:text-2xl  transition-all`}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4 " justify="start">
        <NavbarBrand className="mr-5">
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-foreground hover:text-primary" href="#"></Link>
        </NavbarItem>
        {menu.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.route}
              aria-current="page"
              className={`text-foreground hover:text-primary ${
                router.pathname == item.route
                  ? "font-bold text-primary"
                  : "hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div
            // className={` transition-all w-[38px] ${
            //   expandSearchField ? "w-[250px]" : ""
            // } md:w-[250px] overflow-hidden rounded-xl flex`}
            className="rounded-xl flex"
          >
            <button
              type="button"
              onClick={() => setExpandSearchField(!expandSearchField)}
              className={`px-2 rounded-l-xl bg-primary  border border-primary text-white md:hidden`}
            >
              {!expandSearchField ? (
                <Search className="  md:hidden" size={20} />
              ) : (
                <ArrowRight className=" md:hidden" size={20} />
              )}
            </button>
            <Input
              type="search"
              placeholder="Search Store"
              // className="min-w-[200px] rounded-none"
              className={` transition-transform transform origin-left ${
                expandSearchField ? "scale-x-1" : "scale-x-0 w-0"
              } md:scale-x-1 overflow-hidden `}
              startContent={
                <Search className=" hidden md:inline-block " size={20} />
              }
            />
          </div>
        </NavbarItem>
        <NavbarItem className={`${expandSearchField ? "hidden" : ""} md:block`}>
          <Button
            href="#"
            as={Link}
            size="sm"
            variant="light"
            color="primary"
            className="font-bold"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem className={`${expandSearchField ? "hidden" : ""} md:block`}>
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
        <NavbarItem
          className={`${
            expandSearchField ? "hidden" : ""
          } text-primary md:block`}
        >
          <ShoppingCart size={20} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="h-[500px] fixed top-[4.5rem] lg:hidden w-full backdrop-blur-sm bg-[rgba(255,255,255,0.6)]">
        {menu.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className={`transition-all  transform hover:translate-x-5 hover:font-bold hover:text-white hover:bg-primary px-3 py-1 rounded-lg duration-200 ${
              item.route == router.pathname
                ? "text-primary font-bold bg-foreground-200"
                : ""
            }`}
          >
            <Link href={item.route} className="inline-block w-full">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
