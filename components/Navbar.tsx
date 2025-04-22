"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = ({ ...rest }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // if (
      //   menuRef.current &&
      //   !menuRef.current.contains(event.target) &&
      //   buttonRef.current &&
      //   !buttonRef.current.contains(event.target)
      // ) {
      //   setMobileMenuOpen(false);
      // }
    };

    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact Us" },
  ];

  const authItems = [
    {
      href: "/login",
      label: "Login",
      className: "border border-white px-4 py-1 rounded-full text-center",
    },
    {
      href: "/signup",
      label: "Get Started",
      className:
        "bg-red_shimmer text-red_reign px-4 py-1 rounded-full text-center",
    },
  ];

  return (
    <div
      {...rest}
      className={`mt-[20px] flex items-center justify-between bg-rose-950 text-white w-[90vw] rounded-full px-4 py-2 2xl:py-4 2xl:px-10 mx-auto absolute left-[50%] transform -translate-x-[50%] z-20 font-inter ${rest?.className ?? ""}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between gap-1 md:gap-2 2xl:gap-4">
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1011_1079)">
            <path
              d="M24.9656 13.9374H20.5002C16.5996 13.9374 13.4377 17.0994 13.4377 20.9999V25.4653C19.5939 25.0088 24.5091 20.0936 24.9656 13.9374Z"
              fill="white"
            />
            <path
              d="M11.5627 25.4653V20.9999C11.5627 17.0994 8.40069 13.9374 4.50016 13.9374H0.03479C0.491249 20.0936 5.40647 25.0088 11.5627 25.4653Z"
              fill="white"
            />
            <path
              d="M24.9656 12.0624C24.5091 5.90617 19.5939 0.990944 13.4377 0.534485V4.99986C13.4377 8.90038 16.5996 12.0624 20.5002 12.0624H24.9656Z"
              fill="white"
            />
            <path
              d="M11.5627 0.534485C5.40647 0.990944 0.491249 5.90617 0.03479 12.0624H4.50016C8.40069 12.0624 11.5627 8.90038 11.5627 4.99986V0.534485Z"
              fill="white"
            />
            <path
              d="M8.48937 12.9999C10.2222 12.1341 11.6344 10.7219 12.5001 8.98907C13.3659 10.7219 14.7781 12.1341 16.5109 12.9999C14.7781 13.8656 13.3659 15.2778 12.5001 17.0106C11.6344 15.2778 10.2222 13.8656 8.48937 12.9999Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1011_1079">
              <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <span className="lg:text-small 2xl:text-[3rem]">Kazidesk</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IoClose /> : <MdMenu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 2xl:gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex items-center justify-center"
          >
            {pathname === item.href && (
              <div
                className="absolute inset-0 bg-baragon_brown rounded-full"
                style={{ zIndex: -1 }}
              />
            )}
            <span
              className={`relative z-10 px-2 lg:px-4 py-2 text-nowrap 2xl:text-[1.8rem] ${
                pathname === item.href ? "" : ""
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <Link
          href="/login"
          className="border border-white py-1 2xl:py-2 rounded-full text-tiny 2xl:text-[1.8rem] w-32 2xl:w-38 text-center"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-white text-rose-950 py-1 2xl:py-2 rounded-full text-nowrap text-tiny w-32 2xl:text-[1.8rem] 2xl:w-48 text-center"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 mt-2 bg-rose-950 rounded-xl px-2 py-6 md:p-4 flex flex-col gap-4 md:hidden shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname === item.href ? "active" : ""} flex px-3 items-center gap-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <hr className="border-white/20" />
          <div className="flex flex-col gap-3 mb-4">
            {authItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.className}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
