import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ categoryName = "Category Name" }) => {
  return (
    <>
      <Link href="/category" className="space-y-4 block">
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
      </Link>
    </>
  );
};
export default CategoryCard;
