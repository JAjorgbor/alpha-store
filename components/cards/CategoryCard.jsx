import Image from "next/image";

const CategoryCard = ({ categoryName = "Category Name" }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="bg-foreground-200 rounded-full md:p-8 ">
          <Image
            src="https://picsum.photos/100/100"
            height={100}
            width={100}
            className="rounded-full  w-[100px]"
            alt="category image"
          />
        </div>
        <div className="font-bold text-center">{categoryName}</div>
      </div>
    </>
  );
};
export default CategoryCard;
