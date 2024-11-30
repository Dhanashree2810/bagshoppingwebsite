'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { z } from 'zod'
import globalschema from "../../../../globalschema";

type GlobalSchemaType = z.infer<typeof globalschema>;

const Login = () => {
  const [isRecoverPassword, setIsRecoverPassword] = useState(false);
  const showRecoverPasswordForm = () => setIsRecoverPassword(true);
  const hideRecoverPasswordForm = () => setIsRecoverPassword(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = globalschema.safeParse({ email: customerEmail, password: customerPassword });

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    console.log("Login Successful", { email: customerEmail, password: customerPassword });
  };

  const handleRecoverPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = globalschema.safeParse({ email: customerEmail });

    if (!result.success) {
      setErrors({ email: result.error.formErrors.fieldErrors.email?.[0] });
      return;
    }

    console.log("Password recovery initiated for:", customerEmail);
  };

  return (
    <div className="pt-4 ">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto shadow-md p-6 rounded-md bg-[#F9F9F9]">
          {isRecoverPassword ? (
            <div id="RecoverPasswordForm" className=" m-4">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  Lost your password?
                </h4>
                <p className=" text-xs my-3"> Please enter your username or email address. You will receive a link to create a new password via email.</p>
              </div>

              <form onSubmit={handleRecoverPassword}>
                <div className='grid grid-cols-1 gap-5 mb-4'>
                  <Label>Username or email*</Label>
                  <Input
                    className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                    type="email"
                    name="customermail"
                    id="customermail"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Button
                    type="submit"
                    className="text-sm lg:text-[16px] bg-[#D0BAA5] text-white px-4 py-4 rounded-none w-fit"
                  >
                    Reset Password
                  </Button>
                  <div
                    onClick={hideRecoverPasswordForm}
                    className="text-black hover:text-[#D0BAA5] text-sm lg:text-[16px] cursor-pointer hover:border-b-2 hover:border-black"
                  >
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div id="CustomerLoginForm">
              <form onSubmit={handleLogin}>
                <div className='grid grid-cols-1 gap-5 mb-4'>
                <Input
                    className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                    type="email"
                    name="customermail"
                    id="customermail"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                  <Input
                    className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                    type="password"
                    name="customerpassword"
                    id="customerpassword"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                </div>

                <div className="my-5">
                  <Button
                    type="submit"
                    className="text-[16px] bg-[#D0BAA5] text-white px-4 py-4 rounded-none w-fit"
                  >
                    Sign In
                  </Button>
                </div>

                <div className="flex flex-col gap-3  mt-2 lg:mt-6">
                  <div className=" grid grid-cols-3 gap-2 lg:gap-5 justify-center items-center">
                    <div
                      onClick={showRecoverPasswordForm}
                      className="w-fit text-sm text-black text-center cursor-pointer hover:border-b-2 hover:border-black"
                    >
                      Forgot your password?
                    </div>

                    <Link href="/register" className="w-fit text-sm text-black text-center cursor-pointer hover:border-b-2 hover:border-black">
                      Create account
                    </Link>

                    <Link href="/" className="w-fit text-sm text-black text-center cursor-pointer hover:border-b-2 hover:border-black">
                      Return to Store
                    </Link>

                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
