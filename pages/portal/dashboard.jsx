import Meta from "@/components/Meta";
import ProductCard from "@/components/product/ProductCard";
import CustomSlider from "@/components/elements/CustomSlider";

function Dashboard() {
  return (
    <>
      <Meta titlePrefix={"Portal"} />
      <div className="p-5 space-y-5 w-4/5">
        <h2 className="text-3xl">Products</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center "> */}
        <div className="">
          <CustomSlider>
            {Array(15)
              .fill(null)
              .map((item, index) => (
                <ProductCard
                  key={index}
                  className="md:w-[300px] lg:w-[250px]"
                />
              ))}
          </CustomSlider>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Dashboard;
