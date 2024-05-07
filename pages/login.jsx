import Header from "@/components/layout/Header";
import { Avatar, Button, Input, Switch } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <main className="2xl:container mx-auto">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="hidden md:block w-full sm:h-96  lg:w-1/2 relative">
            <Image
              alt="Welcome"
              src="/auth-banner.jpg"
              className="absolute inset-0 h-full lg:w-1/2 w- object-cover lg:h-screen lg:fixed top-0 left-0"
              width={2000}
              height={2000}
            />
          </div>
          <div className="w-full lg:w-1/2 h-full">
            <Header />
            <div className="text-center lg:mt-10">
              <h1 className=" font-bold text-2xl">Login to Alpha Store.</h1>
              <p>Welcome back🤗.</p>
            </div>
            <div className="w-full px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-5 ">
              <form
                className="mx-auto mb-0 mt-8 max-w-md space-y-6"
                // onSubmit={handleSubmit(submitData)}
                noValidate
              >
                <div className="flex flex-col  gap-6">
                  <Input
                    type="text"
                    label="Matric Number"
                    isRequired
                    placeholder="VUG/CSC/20/4000"
                    className="uppercase"
                  />

                  <Input
                    type="password"
                    label="Password"
                    isRequired
                    placeholder="******"
                  />
                  <div className="col-span-2">
                    <Switch className="text-xs text-300" size="sm">
                      Stay logged in for 30 days
                    </Switch>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Don&rsquo;t have an account?
                    <Link className="ml-2 text-primary" href="/register">
                      Register
                    </Link>
                  </p>
                  <Button
                    type="submit"
                    // isLoading={isSubmitting || keepLoading}
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Login;
