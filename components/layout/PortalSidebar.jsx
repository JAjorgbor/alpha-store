import { useContext } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { SidebarContext } from "@/components/Providers";
import { Plus, User } from "react-feather";
import Logo from "@/components/elements/Logo";

function PortalSidebar() {
  const [collapseSidebar, setCollapseSidebar] = useContext(SidebarContext);
  return (
    <>
      <Sidebar collapsed={collapseSidebar} > 
        <Menu>
          <MenuItem className="flex justify-center">
            <Logo />
          </MenuItem>
          <MenuItem icon={<User size={18} />}> Profile </MenuItem>
          <MenuItem icon={<Plus size={18} />}> Sell New Product </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default PortalSidebar;
