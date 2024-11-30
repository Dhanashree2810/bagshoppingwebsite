import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { RiArrowRightUpFill } from 'react-icons/ri';
import team1 from '@/assets/images/team1.jpg';
import team2 from '@/assets/images/team2.jpg';
import team3 from '@/assets/images/team3.jpg';
import team4 from '@/assets/images/team4.jpg';

export default function Team() {
    return (
        <div className="relative w-full">
            <div className="w-full px-4 py-2 lg:px-48 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center justify-center">                    
                    <div className="lg:col-span-1 flex flex-col text-center lg:text-left">
                        <h1 className="text-2xl font-semibold py-5 lg:py-10">Meet Our Designer</h1>
                        <p className="text-gray-500 text-sm">
                            Handbag designers may create their designs by <br className="hidden lg:block" />
                            hand, but usually will use computer-aided design <br className="hidden lg:block" />
                            (CAD) programs to..
                        </p>

                        <Link href="/team" className="flex flex-row justify-center lg:justify-start w-full lg:w-fit mt-5 lg:mt-10 sm:justify-center md:justify-center">
                            <span className="btn primary-btn inline-flex items-center text-xs lg:text-lg px-3 py-2 lg:px-4 lg:py-3 text-white bg-gray-700 rounded-sm hover:bg-blue-950 transition">
                                Our Team <RiArrowRightUpFill className="text-white w-6 h-6 ml-2" />
                            </span>
                        </Link>
                    </div>
                    
                    <div className="lg:col-span-3 flex flex-wrap gap-8 justify-center lg:justify-start items-end">
                        {[
                            { img: team1, name: 'Cody Fisher', role: 'Designer' },
                            { img: team2, name: 'Cody Fisher', role: 'Designer' },
                            { img: team3, name: 'Cody Fisher', role: 'Designer' },
                            { img: team4, name: 'Cody Fisher', role: 'Designer' },
                        ].map((teamMember, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <Image
                                    src={teamMember.img}
                                    alt={`Team ${index + 1}`}
                                    width={180}
                                    height={200}
                                    className="rounded-lg object-cover max-w-full max-h-full"
                                    priority
                                />
                                <h1 className="mt-3 text-[16px] font-semibold">{teamMember.name}</h1>
                                <h2 className="mt-2 text-sm font-normal text-gray-500">{teamMember.role}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
