"use client"

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Vuelos", href: "/vuelos" },
    { label: "Hoteles", href: "/hoteles" },
    { label: "Paquetes", href: "/paquetes" },
    { label: "Autos", href: "/autos" },
    { label: "Ofertas", href: "/ofertas" },
];

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 font-bold text-xl">
                    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="16" fill="#000" />
                        <path d="M10 22l6-12 6 12H10z" fill="#fff" />
                    </svg>
                    TravelApp
                </a>
                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="outline" className="ml-4">Iniciar sesión</Button>
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100 transition"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menú"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden transition-all duration-300 overflow-hidden bg-white shadow",
                    open ? "max-h-96 py-2" : "max-h-0 py-0"
                )}
            >
                <div className="flex flex-col gap-2 px-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="outline" className="mt-2 w-full">Iniciar sesión</Button>
                </div>
            </div>
        </nav>
    );
}