import ProductCard from "@/components/cards/ProductCard";
import Meta from "@/components/Meta";
import { BreadcrumbItem, Breadcrumbs, Pagination } from "@nextui-org/react";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <Meta />
      <Breadcrumbs className="p-4 max-w-screen-xl mx-auto">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category Name</BreadcrumbItem>
      </Breadcrumbs>
      <div className="p-12 min-h-[300px] bg-green-500">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-8 max-w-screen-xl mx-auto">
          <div className="text-green-800">
            <h1 className="font-bold text-[2rem]">Category Name</h1>
            <p>Sub heading</p>
          </div>
          <Image
            src="https://picsum.photos/300/300"
            alt="category image"
            height={300}
            className="flex-shrink"
            width={300}
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg w-3/5 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-center">
          {Array(16)
            .fill(null)
            .map((item, index) => (
              <ProductCard key={index} />
            ))}
          <div className="col-span-3 flex justify-center ">
            <Pagination total={10} initialPage={1} showControls />
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
