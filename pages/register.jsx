import Header from "@/components/layout/Header";
import { Avatar, Button, Input, Switch } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
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
            <div className="w-full px-4 py-6 sm:px-6 sm:py-12  lg:px-8 lg:py-5 ">
              <h1 className="text-center font-bold text-2xl">
                Register Your Alpha Store acount
              </h1>
              <form
                className="mx-auto mb-0 mt-8 max-w-md space-y-6"
                // onSubmit={handleSubmit(submitData)}
                noValidate
              >
                <div className="flex flex-col sm:grid grid-cols-2 gap-6">
                  <div className="col-span-2 flex flex-col items-center gap-3">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      <input
                        className="hidden"
                        id="profileImage"
                        type="file"
                        accept=".png, .jpg"
                      />
                      <Avatar
                        // src={profileImagePreviewUrl}
                        className="w-20 h-20"
                      />
                    </label>
                    <span className="text-foreground-500">Profile Image</span>
                  </div>
                  <Input
                    type="text"
                    isRequired
                    label="First Name"
                    placeholder="Joshua"
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    isRequired
                    placeholder="Ajorgbor"
                  />
                  <Input
                    type="email"
                    label="Email Address"
                    isRequired
                    placeholder="joshuaajorgbor@example.com"
                    className="col-span-2"
                  />
                  <Input
                    type="text"
                    label="Matric Number"
                    isRequired
                    placeholder="VUG/CSC/20/4000"
                    className="col-span-2 uppercase"
                  />

                  <Input
                    type="password"
                    label="Password"
                    isRequired
                    placeholder="******"
                  />
                  <Input
                    type="password"
                    label="Confirm Password"
                    isRequired
                    placeholder="******"
                  />
                  <div className="col-span-2">
                    <Switch className="text-xs text-300" size="sm">
                      Toggle to sign up for just a toggle account
                    </Switch>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Already have an account?
                    <Link className="ml-2 text-primary" href="/login">
                      Login
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
export default Register;
