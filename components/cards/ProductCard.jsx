import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { Heart } from "react-feather";

const ProductCard = () => {
  return (
    <>
      <Card className="min-w-[250px]">
        <CardBody>
          <div className="space-y-4 ">
            <div className="relative">
              <div className="p-1 rounded-full bg-white absolute top-2 right-2 font-bold">
                <Heart size={18} />
              </div>
              <Image
                src="https://picsum.photos/250/250"
                height={250}
                width={250}
                alt="product image"
                className="rounded-xl"
              />
            </div>
            <p className="text-sm">
              Dyson V11 Cordeless Vacum Cleaner | Blue | Good condition
            </p>
            <p className="font-bold">₦10,000</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default ProductCard;
