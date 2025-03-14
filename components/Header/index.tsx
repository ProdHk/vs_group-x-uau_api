"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { id: 0, name: "Início", path: "/cliente" },
        { id: 1, name: "Segunda via de boletos", path: "/cliente/segunda-via-boleto" },
        { id: 2, name: "Extrato financeiro", path: "/cliente/extrato-financeiro" },
        { id: 3, name: "Fale conosco", path: "/cliente/contato" },
    ];

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <h1 className="text-lg font-semibold text-gray-800">Área do cliente</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {menuItems.map((item) => (
                        <Button key={item.id} variant="link" onClick={() => router.push(item.path)}>
                            {item.name}
                        </Button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger className="md:hidden">
                        <Menu className="w-6 h-6 text-gray-800" />
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white w-64">
                        <div className="flex justify-between items-center p-4">
                            <h1 className="text-lg font-semibold text-gray-800">Menu</h1>
                            <Button variant="ghost" onClick={() => setIsOpen(false)}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        <nav className="flex flex-col gap-4 p-4">
                            {menuItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    className="justify-start text-lg"
                                    onClick={() => {
                                        router.push(item.path);
                                        setIsOpen(false);
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
