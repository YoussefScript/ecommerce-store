"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Category } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
    data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

    return (
        <>
            <div className="flex items-center md:hidden mr-2">
                <IconButton 
                    onClick={onOpen}
                    icon={<Menu size={20} />}
                    className="border-none bg-transparent hover:bg-gray-100"
                />
            </div>

            <Dialog open={open} as="div" className="relative z-50 md:hidden" onClose={onClose}>
                {/* Background overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-end">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        
                        {/* Close button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        {/* Navigation links */}
                        <div className="mt-8 flex flex-col gap-y-4 px-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={onClose}
                                    className={cn(
                                        "text-lg font-semibold transition-colors hover:text-indigo-600",
                                        route.active ? "text-indigo-600" : "text-gray-900"
                                    )}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default MobileNav;
