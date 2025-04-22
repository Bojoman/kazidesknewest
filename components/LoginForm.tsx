// components/LoginForm.tsx
'use client';

import React, { FormEvent, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { Mail, Eye, EyeOff } from 'lucide-react';
import ForgotPasswordModal from './ForgotPasswordModal';

type Errors = Partial<{
  email: string;
  password: string;
}>;

export default function LoginForm() {
  const router = useRouter();

  // form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // modal state
  const [showForgot, setShowForgot] = useState(false);

  const emailRegex = useMemo(() => /^\S+@\S+\.\S+$/, []);
  const passwordRegex = useMemo(
    () => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    []
  );

  const validate = () => {
    const e: Errors = {};
    if (!email) {
      e.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      e.email = 'Invalid email';
    }

    if (!password) {
      e.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      e.password = 'Min 8 chars, include 1 uppercase, 1 number & 1 special char';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: call your login API…
    router.push('/');
  };

  const baseInput = [
    'bg-[rgba(241,181,158,0.4)]',
    'text-base text-[#4F1919] font-medium',
    'p-2.5 rounded-[10px]',
    'placeholder:text-[#888]',
    'focus-visible:ring-[#B3443D] focus:ring-2',
    'transition',
  ].join(' ');

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-lg text-[#061448] font-semibold p-2.5">
            Your Email
          </label>
          <div className="relative">
            <Mail className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-[#4F1919]" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((errs) => ({ ...errs, email: undefined }));
              }}
              className={`w-full pl-12 pr-4 ${baseInput}`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg text-[#061448] font-semibold p-2.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((errs) => ({ ...errs, password: undefined }));
              }}
              className={`w-full pl-4 pr-12 ${baseInput}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-4 my-auto"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-[#4F1919]" />
              ) : (
                <Eye className="h-5 w-5 text-[#4F1919]" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}

          <p
            className="mt-2 text-sm text-rose-800 hover:underline cursor-pointer"
            onClick={() => setShowForgot(true)}
          >
            Forgot Password?
          </p>
        </div>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <a
            href="/signup"
            className="text-rose-800 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>

        {/* Log In Button */}
        <button
          type="submit"
          className="w-full rounded-[25px] py-4 bg-[#4F1919] text-[#F1B59E] font-semibold hover:bg-[#3D1414] transition"
        >
          Log In
        </button>
      </form>

      {/* AnimatePresence + Forgot Password Modal */}
      <AnimatePresence>
        {showForgot && (
          <ForgotPasswordModal
            key="forgot-password"
            onClose={() => setShowForgot(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
