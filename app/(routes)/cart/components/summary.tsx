"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

const Summary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        };

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.");
        };
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                productIds: items.map((item) => item.id),
            });

            window.location = response.data.url;
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            // No need to set false here because we are redirecting
        }
    };

    return (
        <div className="mt-16 rounded-3xl bg-gray-50/50 backdrop-blur-sm px-6 py-8 sm:p-8 lg:col-span-5 lg:mt-0 premium-shadow border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                Order Summary
            </h2>
            <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <div className="text-base font-semibold text-gray-900">Total Amount</div>
                    <div className="text-lg font-bold text-black">
                        <Currency value={totalPrice} />
                    </div>
                </div>
            </div>
            <Button 
                disabled={items.length === 0 || isLoading} 
                onClick={onCheckout} 
                className="w-full mt-10 py-4 text-lg shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300"
            >
                {isLoading ? "Redirecting..." : "Proceed to Checkout"}
            </Button>
            <p className="mt-4 text-xs text-center text-gray-400 font-medium">
                Tax and shipping calculated at checkout
            </p>
        </div>
    );
};

export default Summary;