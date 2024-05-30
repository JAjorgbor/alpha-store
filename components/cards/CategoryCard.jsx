import Image from "next/image";
import Link from "next/link";
import shoesImage from "../../public/img/categories/shoes-place.jpg";

const CategoryCard = ({ categoryName = "Category Name" }) => {
  return (
    <>
      <Link href="/category" className="space-y-4 flex flex-col items-center">
        <div className="bg-foreground-200 rounded-full  w-[200px] h-[200px] grid place-items-center">
          <Image
            src={shoesImage}
            className="rounded-full w-[150px] h-[150px]"
            alt="category image"
          />
        </div>
        <div className="font-bold text-center">{categoryName}</div>
      </Link>
    </>
  );
};
export default CategoryCard;
