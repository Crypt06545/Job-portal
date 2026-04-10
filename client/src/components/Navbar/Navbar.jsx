// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = ({ variant = "default" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Use variant prop or automatically detect homepage
  const isHome = variant === "home" || isHomePage;

  const navLinks = [
    { name: "Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">LWS Job Portal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {!isHome && (
            <>
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Don't have an account?
                </span>
                <Button variant="ghost" asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </>
          )}

          {isHome && (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {!isHome && (
                <>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        to={link.href}
                        className="text-lg font-medium hover:text-primary transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="border-t my-4" />
                  <SheetClose asChild>
                    <Link
                      to="/register"
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Sign Up
                    </Link>
                  </SheetClose>
                </>
              )}

              {isHome && (
                <>
                  <SheetClose asChild>
                    <Link
                      to="/login"
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Sign In
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/register"
                      className="text-lg font-medium text-primary hover:text-primary/80 transition-colors py-2"
                    >
                      Get Started
                    </Link>
                  </SheetClose>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
