import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/product/ProductCard";
import Meta from "@/components/Meta";
import CustomSlider from "@/components/elements/CustomSlider";

export default function Home() {
  return (
    <>
      <Meta />
      <main className={`py-14 mx-auto w-[85%] max-w-screen-xl`}>
        <Card className="bg-foreground-200 p-8 bg-image bg-cover text-white">
          <CardBody className="w-full">
            <div className="md:w-1/2 space-y-3">
              <h2 className="font-bold text-2xl ">
                Keep your money by saving 30% on nicely refurbished products by
                veritas students{" "}
              </h2>
              <p className="">
                Discover enginees, cylinder heads, and engine mounts
              </p>
              <Button
                className="font-bold rounded-3xl bg-white "
                varaint="solid"
              >
                Shop Now
              </Button>
            </div>
          </CardBody>
        </Card>
        <div className="mx-auto w-[95%]">
          <Card
            className="p-8 bg-foreground-100  my-10 "
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <CardBody className="flex sm:flex-row  items-center justify-between gap-5">
              <div className="flex-grow">
                <h2 className="font-bold text-2xl">
                  No fakes. No fraud. No doubt.
                </h2>
                <p>
                  Expand your collection confidently with Authenticity
                  Guarantee.
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <Button
                  className="bg-black inline-block w-full sm:w-auto text-white font-bold rounded-3xl"
                  varaint="solid"
                >
                  Learn More
                </Button>
              </div>
            </CardBody>
          </Card>

          <div className="space-y-5">
            <h2 className="font-bold text-2xl">Explore Popular Categories</h2>
            <CustomSlider itemCount={5}>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </CustomSlider>
          </div>

          <div className="space-y-5 my-12">
            <h2 className="font-bold text-2xl">Today&rsquo;s Deals</h2>
            <CustomSlider>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </CustomSlider>
          </div>
        </div>
      </main>
    </>
  );
}
