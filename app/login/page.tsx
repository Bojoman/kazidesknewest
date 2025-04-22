import React from 'react';
import LoginForm from '@/components/LoginForm';
import SupportWidget from '@/components/SupportWidget';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col-reverse lg:flex-row">
      {/* FORM HALF */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-start ">
        <h1 className="mb-30 text-3xl font-bold text-rose-800">Sign In</h1>
        <LoginForm />
      </div>

      {/* IMAGE HALF */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex justify-end items-start relative">
        <div className="w-full max-w-[627px] rounded-[30px] overflow-hidden mb-12 relative h-[650px]">
          <Image
            src="/sign-in.jpg"
            alt="Login visual"
            fill
            className="object-cover"
            priority
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"/>
          {/* support button */}
          <div className="absolute bottom-6 right-6 z-20">
            <SupportWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
