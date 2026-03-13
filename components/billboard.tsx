import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-3xl overflow-hidden fade-in">
            <div 
                className="rounded-3xl relative aspect-2/1 md:aspect-4/1 overflow-hidden bg-cover bg-center ring-1 ring-inset ring-black/10"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="space-y-2">
                        <p className="text-white/80 text-xs sm:text-sm font-black uppercase tracking-[0.3em]">Season 2026</p>
                        <div className="font-extrabold text-white text-4xl sm:text-6xl lg:text-8xl sm:max-w-3xl max-w-xs drop-shadow-2xl leading-none">
                            {data?.label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;