import Image from "next/image";
import Link from "next/link";
import shoesImage from "../../public/img/categories/shoes-place.jpg";

const CategoryCard = ({ categoryName = "Category Name" }) => {
  return (
    <>
      <Link href="/category" className="space-y-4 block">
        <div className="bg-foreground-200 rounded-full md:p-8 ">
          <Image
            src={shoesImage}
            className="rounded-full w-full h-full  "
            alt="category image"
          />
        </div>
        <div className="font-bold text-center">{categoryName}</div>
      </Link>
    </>
  );
};
export default CategoryCard;
