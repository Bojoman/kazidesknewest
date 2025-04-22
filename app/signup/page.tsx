// app/signup/page.tsx

import React from 'react';
import SignupForm from '@/components/SignupForm';
import SupportWidget from '@/components/SupportWidget';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start pt-2 sm:pt-3 md:pt-4">
      {/* Canvas wrapper (max-width = 1440px) */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start">
          
          {/* ── FORM HALF ── */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8">
            <h1 className="mb-6 text-3xl font-bold text-[#B3443D]
">Sign Up</h1>
            <SignupForm />
            <p className="mt-6 mb-10 text-sm text-gray-700">
              You have an account?{' '}
              <a href="/login" className="text-rose-800 font-medium hover:underline">
                Log In
              </a>
            </p>
          </div>

          {/* ── IMAGE HALF ── */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 relative">
            <div className="flex justify-end">
              <div className="w-full max-w-[690px] rounded-[30px] overflow-hidden">
                <Image
                  src="/sign-in.jpg"    
                  alt="Signup visual"
                  width={690}
                  height={898}
                  className="object-cover w-full "
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-6 right-10 z-20">
              <SupportWidget />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
