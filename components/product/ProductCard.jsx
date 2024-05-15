import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "react-feather";
import productImage from "../../public/img/products/product-place.jpg";

const ProductCard = ({ className }) => {
  return (
    <>
      <Card
        className={`w-[250px] min-w-[250px] bg-foreground-100 ${className}`}
      >
        <Link href="/category/product">
          <CardBody>
            <div className="space-y-4 ">
              <div className="relative">
                <Image
                  src={productImage}
                  height={250}
                  width={250}
                  alt="product image"
                  className="w-full rounded-xl"
                />
              </div>
              <div>
                <p className="text-sm">
                  Dyson V11 Cordeless Vacum Cleaner | Blue | Good condition
                </p>
                <p className="font-bold">₦10,000</p>
              </div>
            </div>
          </CardBody>
        </Link>
      </Card>
    </>
  );
};
export default ProductCard;
