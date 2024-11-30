'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from '@/hooks/use-toast'
import { z } from 'zod'
import globalschema from '../../../../globalschema'
import userprofile from '@/assets/images/user profile.png'
import Image, { StaticImageData } from 'next/image'


const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<StaticImageData | string>(userprofile);
  const [profile, setProfile] = useState({
    firstName: "Jane",
    lastName: "Doe",
    img: userprofile,
    email: "jane.doe@example.com",
    phone: "123-456-7890",
    address: "123 Fashion St, Styleville, ST 12345",
    preferences: "I prefer large totes and crossbody bags in neutral colors."
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value
    }));
  };

  const handleSaveChanges = () => {
    try {
      globalschema.parse({
        name: profile.firstName + " " + profile.lastName,
        email: profile.email,
        img:profile.img,
        password: "dummyPassword123@",
        firstName: profile.firstName,
        lastName: profile.lastName,
        phone: profile.phone,
        address: profile.address,
        preferences: profile.preferences.split(",").map(item => item.trim())
      });

      console.log("Saving profile:", profile);
      setIsEditing(false);
      setErrors({});
      toast({
        title: "Profile Updated",
        description: "Your profile changes have been saved successfully.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as Record<string, string>);
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <div className=" bg-white rounded-full p-1 shadow-lg w-[100px] h-[100px]">
                <Image
                  src={profileImage}
                  alt="Profile"
                  layout='fill'
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold">My Profile</CardTitle>
              <CardDescription>Manage your account details and preferences</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isEditing ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Phone:</strong> {profile.phone}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                  <p>{profile.address}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Bag Preferences</h3>
                <p>{profile.preferences}</p>
              </div>
              <Button onClick={() => setIsEditing(true)} className="w-fit">Edit Profile</Button>
            </>
          ) : (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={profile.firstName} onChange={handleInputChange} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={profile.lastName} onChange={handleInputChange} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={profile.email} onChange={handleInputChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={profile.phone} onChange={handleInputChange} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="userimg">User Profile</Label>
                    <Input id="userimg" type="file" accept="image/*" onChange={handleImageChange} />
                    {errors.img && <p className="text-red-500 text-sm">{errors.img}</p>}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Shipping Address</Label>
                    <Textarea id="address" value={profile.address} onChange={handleInputChange} className="h-32" />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                  </div>
                  <div>
                    <Label htmlFor="preferences">Bag Preferences</Label>
                    <Textarea id="preferences" value={profile.preferences} onChange={handleInputChange} className="h-32" />
                    {errors.preferences && <p className="text-red-500 text-sm">{errors.preferences}</p>}
                  </div>
                </div>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter>
          {isEditing && (
            <Button onClick={handleSaveChanges} className="w-fit">Save Changes</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserProfile

