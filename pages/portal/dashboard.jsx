import PortalSidebar from "@/components/layout/PortalSidebar";
import ProductCard from "@/components/product/ProductCard";
import Carousel from "react-multi-carousel";

function Dashboard() {

  return (
    <>
      <div className="p-5 space-y-5 w-4/5 mx-auto">

        <h2 className="text-3xl">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center ">
            {Array(8)
              .fill(null)
              .map((item, index) => (
                <ProductCard
                  key={index}
                  className="md:w-[300px] lg:w-[250px]"
                />
              ))}
      </div>
        </div>
    </>
  );
}

export default Dashboard;
