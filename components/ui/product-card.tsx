"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
    data: Product;
};

const ProductCard: React.FC<ProductCard> = ({
    data
}) => { 

    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    return (
        <div className="bg-white group cursor-pointer rounded-3xl p-0 border border-gray-100 card-hover overflow-hidden flex flex-col">
            {/* images & actions */}
            <div 
                onClick={handleClick}
                className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
                <Image
                    alt="image"
                    src={data?.images?.[0].url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                   <span className="badge-premium">New Arrival</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute w-full px-4 bottom-6 translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-x-4 justify-center bg-white/20 backdrop-blur-md py-3 rounded-2xl border border-white/30 shadow-2xl">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={18} className="text-gray-900"/>}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={18} className="text-gray-900"/>}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="p-5 space-y-2 flex-grow">
                <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-indigo-600 font-black">
                        {data.category?.name}
                    </p>
                    <p className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {data.name}
                    </p>
                </div>
                {/* price */}
                <div className="pt-2">
                    <div className="text-xl font-black text-slate-950">
                        <Currency value={data?.price}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;