'use client'
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { FaPlayCircle } from "react-icons/fa";
import React, { useState } from 'react';
import sliderimg from '@/assets/images/slide02.jpg'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import textpattern from '@/assets/images/text-pattern.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const canPlayVideo = () => {
    setIsOpenVideo(true);
  }

  return (
    <div className="relative w-full" data-aos="zoom-in-up" data-aos-duration="1000">
      <div
        className="relative w-full min-w-full object-cover bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${sliderimg.src})` }}
      >
        <div className="bg-black bg-opacity-40 lg:py-60 py-20">
          <div className="text-white grid grid-cols-1 mx-4 lg:mx-32 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative flex justify-center items-center">
                <Image
                  src={textpattern}
                  height={500}
                  width={500}
                  alt="pattern"
                  className="animate-rotation md:w-1/2 w-3/5"
                />
                <FaPlayCircle
                  size={55}
                  fill="white"
                  onClick={canPlayVideo}
                  className="absolute cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenVideo && (
        <Dialog open={isOpenVideo} onOpenChange={setIsOpenVideo}>
          <DialogContent className="sm:max-w-[600px] lg:max-w-[750px] py-6">
            <VisuallyHidden.Root>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
            </VisuallyHidden.Root>
            <iframe
              src="https://www.youtube.com/embed/oQnYRBcn80Q"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-[400px]"
            ></iframe>
            <VisuallyHidden.Root>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </VisuallyHidden.Root>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default VideoSection;
