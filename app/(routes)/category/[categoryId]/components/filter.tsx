"use client";

import { Size, Color } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FilterProps {
    valueKeys: string;
    name: string;
    data: (Size | Color)[];
};

const Filter: React.FC<FilterProps> = ({ valueKeys, name, data }) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKeys);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());
        const query = {
            ...current,
            [valueKeys]: id,
        };

        if (current[valueKeys] === id) {
            delete query[valueKeys];
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, {
            skipNull: true,
        });
        router.push(url);
    };

    return (
        <div>
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <hr className="my-4"/>
                <div className="flex flex-wrap gap-2">
                    {data.map((filter) => (
                        <div key={filter.id} className="flex items-center gap-2">
                            <Button
                                className={cn(
                                    "rounded-md text-sm text-gray-800 bg-white border border-gray-300",
                                    selectedValue === filter.id && "bg-black text-white"
                                )}
                                onClick={() => onClick(filter.id)}
                            >
                                {filter.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;