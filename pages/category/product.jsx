import Meta from "@/components/Meta";
import ProductCard from "@/components/product/ProductCard";
import ProductSlider from "@/components/product/productSlider";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Progress,
  Tab,
  Tabs,
} from "@nextui-org/react";
import moment from "moment";
import Link from "next/link";
import { Check, CheckCircle, Heart, Plus, User } from "react-feather";

const Product = () => {
  return (
    <>
      <Meta />
      <div className="mx-auto max-w-screen-xl my-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-4/5 mx-auto my-12">
          <ProductSlider className="" />

          <div className="space-y-4 px-12">
            <p className="text-sm flex items-center gap-1">
              <CheckCircle size={14} className="text-primary" /> Authenticity
              Guaranteed
            </p>
            <h2 className="font-bold text-lg">Lenghty product name</h2>
            <p className="font-bold text-2xl">₦200,000</p>
            <div className="space-y-2">
              <p>
                <Link href={"#"}>22 Bids</Link>{" "}
                <span className="text-danger">Ends in 22m 14s</span>
                <span className="text-foreground-400"> . Today 10:41 AM</span>
              </p>
              Condition: <span className="font-bold">Pre-Owned</span>
            </div>
            <div className="space-y-3">
              <Button color="primary" fullWidth>
                Place Bid
              </Button>
              <Button
                startContent={<Heart size={15} />}
                color="primary"
                variant="ghost"
                fullWidth
              >
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto py-12">
          <Tabs aria-label="Options" placement="center" color="primary">
            <Tab key="details" title="Product Details">
              <Card className="p-8">
                <CardHeader className="font-bold text-2xl">
                  Product Details
                </CardHeader>
                <CardBody className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </CardBody>
              </Card>
            </Tab>

            {/* <Badge content="3" color="danger"></Badge> */}
            <Tab key="reviews" title="Reviews (3)">
              <Card className="p-8">
                <CardHeader className="md:w-3/5 mx-auto">
                  <div className="flex gap-3 items-center">
                    <div className="flex-shrink flex items-end text-lg ">
                      <h3 className="text-[3rem] font-bold">4.0</h3>⭐
                    </div>
                    <div className="space-y-1  min-w-full">
                      <div className="flex min-w-[300px] text-sm items-center gap-3">
                        <span>5</span>
                        <Progress
                          value={0}
                          classNames={{
                            base: "w-full",
                            indicator: "bg-yellow-400",
                          }}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex min-w-[300px] text-sm items-center gap-3">
                        <span>4</span>
                        <Progress
                          value={100}
                          classNames={{
                            base: "w-full",
                            indicator: "bg-yellow-400",
                          }}
                        />
                        <span>100%</span>
                      </div>
                      <div className="flex min-w-[300px] text-sm items-center gap-3">
                        <span>3</span>
                        <Progress
                          value={0}
                          classNames={{
                            base: "w-full",
                            indicator: "bg-yellow-400",
                          }}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex min-w-[300px] text-sm items-center gap-3">
                        <span>2</span>
                        <Progress
                          value={0}
                          classNames={{
                            base: "w-full",
                            indicator: "bg-yellow-400",
                          }}
                        />
                        <span>0%</span>
                      </div>
                      <div className="flex min-w-[300px] text-sm items-center gap-3">
                        <span>1</span>
                        <Progress
                          value={0}
                          classNames={{
                            base: "w-full",
                            indicator: "bg-yellow-400",
                          }}
                        />
                        <span>0%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="md:w-3/5 mx-auto space-y-4">
                  <Divider className="" />
                  <div className="flex justify-between">
                    <h3 className="font-bold text-xl">All Reviews(3)</h3>
                    <Button
                      color="primary"
                      variant="light"
                      startContent={<Plus />}
                    >
                      Add Review
                    </Button>
                  </div>
                  <div className="space-y-5 w-full">
                    <div className="flex gap-3">
                      <Avatar size="sm" />
                      <div className=" space-y-1">
                        <div className="space-y-0.5">
                          <p className="font-bold">Nathaniel</p>
                          <p className="text-sm text-foreground-500">
                            ⭐⭐⭐⭐ {moment().format("MM/DD/YYYY hh:mm A")}
                          </p>
                        </div>
                        <p>I like this product a lot.</p>
                      </div>
                    </div>

                    <div className="space-y-3 w-full">
                      <div className="flex gap-3">
                        <Avatar size="sm" />
                        <div className=" space-y-1">
                          <div className="space-y-0.5">
                            <p className="font-bold">Joshua</p>
                            <p className="text-sm text-foreground-500">
                              ⭐⭐⭐⭐ {moment().format("MM/DD/YYYY hh:mm A")}
                            </p>
                          </div>
                          <p>Nice product.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="flex gap-3">
                        <Avatar size="sm" />
                        <div className=" space-y-1">
                          <div className="space-y-0.5">
                            <p className="font-bold">Mercy</p>
                            <p className="text-sm text-foreground-500">
                              ⭐⭐⭐⭐ {moment().format("MM/DD/YYYY hh:mm A")}
                            </p>
                          </div>
                          <p>Cool Product.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        <div className="mx-auto  w-4/5 space-y-8">
          <h2 className="font-bold text-xl">You might also like:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
            {Array(8)
              .fill(null)
              .map((item, index) => (
                <ProductCard
                  key={index}
                  className="md:w-[300px] lg:w-[250px]"
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
