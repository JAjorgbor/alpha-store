import { Turn as Hamburger, Turn } from "hamburger-react";
import { useContext } from "react";
import { SidebarContext } from "@/components/Providers";
import { Search } from "react-feather";
import { Input } from "@nextui-org/react";

function PortalHeader() {
  const [collapseSidebar, setCollapseSidebar] = useContext(SidebarContext);

  return (
    <>
      <div className="w-4/5 py-5 flex gap-5 items-center">
        <button onClick={() => setCollapseSidebar(!collapseSidebar)}>
          <Turn size={20} toggled={!collapseSidebar} />
        </button>
        <Input
          type="search"
          placeholder="Search Store"
          className="w-[200px] rounded-none"
          // className={` transition-transform transform origin-left ${
          //   expandSearchField ? "scale-x-1" : "scale-x-0 w-0"
          // } md:scale-x-1 overflow-hidden `}
          startContent={
            <Search className=" hidden md:inline-block " size={20} />
          }
        />
      </div>
    </>
  );
}

export default PortalHeader;
