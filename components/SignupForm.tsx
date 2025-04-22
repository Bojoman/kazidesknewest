'use client';

import React, { FormEvent, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Globe,
  MapPin,
  User,
  Mail,
  Eye,
  EyeOff,
} from 'lucide-react';
import Checkbox from '../components/CheckButton';

type Errors = Partial<{
  country: string;
  company: string;
  name: string;
  email: string;
  password: string;
  terms: string;
}>;

export default function SignupForm() {
  const router = useRouter();

  const [country, setCountry] = useState('🇰🇪 Kenya');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = useMemo(() => /^\S+@\S+\.\S+$/, []);
  const passwordRegex = useMemo(
    () => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    []
  );

  const validateAll = () => {
    const e: Errors = {};

    if (!country) e.country = 'Country is required';
    if (!company.trim()) e.company = 'Company name is required';
    if (!name.trim()) e.name = 'Name is required';

    if (!email) e.email = 'Email is required';
    else if (!emailRegex.test(email)) e.email = 'Invalid email';

    if (!password) e.password = 'Password is required';
    else if (!passwordRegex.test(password))
      e.password =
        'Use ≥8 chars, 1 uppercase, 1 number & 1 special character';

    if (!terms) e.terms = 'You must accept the terms';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      // validation failed → errors set & shown
      return;
    }

    try {
      // TODO: Replace with your real signup API call
      // await auth.signUp({ country, company, name, email, password });

      // On success, redirect to home page:
      router.push('/');
    } catch (err) {
      console.error('Signup failed:', err);
      // Optionally set a general error message here
    }
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
    <form onSubmit={onSubmit} className="space-y-2">
      {/* Country */}
      <div>
        <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
          Country
        </div>
        <div className="relative">
          <Globe className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-[#4F1919]" />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`w-full pl-12 pr-4 ${baseInput}`}
          >
            <option>🇰🇪 Kenya</option>
            <option>🇺🇬 Uganda</option>
            <option>🇹🇿 Tanzania</option>
          </select>
        </div>
        {errors.country && (
          <p className="mt-1 text-sm text-red-500">{errors.country}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
          Company Name
        </div>
        <div className="relative">
          <MapPin className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-[#4F1919]" />
          <input
            type="text"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={`w-full pl-12 pr-4 ${baseInput}`}
          />
        </div>
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company}</p>
        )}
      </div>

      {/* Your Name */}
      <div>
        <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
          Your Name
        </div>
        <div className="relative">
          <User className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-[#4F1919]" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full pl-12 pr-4 ${baseInput}`}
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Your Email */}
      <div>
        <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
          Your Email
        </div>
        <div className="relative">
          <Mail className="absolute inset-y-0 left-4 my-auto h-5 w-5 text-[#4F1919]" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full pl-12 pr-4 ${baseInput}`}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="gap-2.5 text-lg text-[#061448] font-semibold p-2.5">
          Password
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      </div>

      {/* Terms & Conditions */}
      <div className="space-y-1">
        <Checkbox
          id="terms"
          checked={terms}
          onChange={() => setTerms((v) => !v)}
          label={
            <label
              htmlFor="terms"
              className="text-base text-[#4F1919] font-medium leading-[19px]"
            >
              I confirm that I have read and agree with{' '}
              <a href="#" className="text-[#B3443D] hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#B3443D] hover:underline flex justify-center">
                Privacy Policy
              </a>
              .
            </label>
          }
        />
        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms}</p>
        )}
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        className="w-full rounded-[25px] py-4 bg-[#4F1919] text-[#F1B59E] font-semibold hover:bg-[#3D1414] transition"
      >
        Sign Up
      </button>
    </form>
  );
}
