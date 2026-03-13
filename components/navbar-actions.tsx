"use client";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { UserButton, useAuth } from "@clerk/nextjs";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { userId } = useAuth();

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    };

    return(
        <div className="ml-auto flex items-center gap-x-2 sm:gap-x-4">
            <Button 
                onClick={() => router.push('/cart')}
                className="flex items-center rounded-full bg-black px-2 py-2 sm:px-4 sm:py-2">
                <ShoppingBag 
                    size={20}
                    color="white"
                />
                <span className="ml-1 sm:ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
            <UserButton />
            {!userId && (
                <Button 
                    onClick={() => router.push('/sign-in')}
                    className="bg-gray-100 text-black border-none hover:bg-gray-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
                >
                    <span className="hidden sm:inline">Sign In</span>
                    <span className="sm:hidden">Login</span>
                </Button>
            )}
        </div>
    );
};

export default NavbarActions;