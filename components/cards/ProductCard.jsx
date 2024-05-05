import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { Heart } from "react-feather";

const ProductCard = () => {
  return (
    <>
      <Card className="w-[250px] min-w-[250px] bg-foreground-100">
        <CardBody>
          <div className="space-y-4 ">
            <div className="relative">
              <Image
                src="https://picsum.photos/250/250"
                height={250}
                width={250}
                alt="product image"
                className="w-full rounded-xl"
              />
            </div>
            <div className="p-5">
              <p className="text-sm">
                Dyson V11 Cordeless Vacum Cleaner | Blue | Good condition
              </p>
              <p className="font-bold">₦10,000</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default ProductCard;
