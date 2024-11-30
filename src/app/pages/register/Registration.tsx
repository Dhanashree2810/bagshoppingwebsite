'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import globalschema from '../../../../globalschema'
import { toast } from '@/hooks/use-toast'

export default function Registration() {
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPassword, setCustomerPassword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const result = globalschema.safeParse({
            firstName: customerFirstName,
            lastName: customerLastName,
            email: customerEmail,
            password: customerPassword,
        });

        if (result.success) {
            console.log("Account Created:", result);
            setErrors({});
            toast({
                title: "Account Created",
                description: "Your account has been created successfully.",
            });
        } else {
            const fieldErrors = result.error.errors.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {} as Record<string, string>);

            setErrors(fieldErrors);
        }
    };

    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto shadow-md p-6 rounded-md bg-[#F9F9F9]">
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-5 mb-4'>
                            <Input
                                className="px-4 h-10 lg:h-12 bg-white  text-sm rounded-none"
                                type="text"
                                name="customerfirstname"
                                id="customerfirstname"
                                value={customerFirstName}
                                onChange={(e) => setCustomerFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                            <Input
                                className="px-4 h-10 lg:h-12 bg-white  text-sm rounded-none"
                                type="text"
                                name="customerlastname"
                                id="customerlastname"
                                value={customerLastName}
                                onChange={(e) => setCustomerLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                            <Input
                                className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                                type="email"
                                name="customermail"
                                id="customermail"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            <Input
                                className="px-4 h-10 lg:h-12 bg-white text-sm rounded-none"
                                type="password"
                                name="customerpassword"
                                id="customerpassword"
                                value={customerPassword}
                                onChange={(e) => setCustomerPassword(e.target.value)}
                                placeholder="Password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <div className="my-5">
                            <Button
                                type="submit"
                                className="text-[16px] bg-[#D0BAA5] text-white px-4 py-4 rounded-none w-fit"
                            >
                                Create
                            </Button>
                        </div>

                        <p>
                            <Link href="/" className="w-fit text-sm text-black text-left cursor-pointer hover:border-b-2 hover:border-black">
                                Return to Store
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
