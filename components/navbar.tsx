import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import Link from "next/link";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import MobileNav from "@/components/mobile-nav";

export const revalidate = 0;

const Navbar = async () => {

    const categories = await getCategories();

    return (
        <div className="glass-header w-full overflow-hidden">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between gap-x-2">
                    <div className="flex items-center flex-1 min-w-0">
                        <MobileNav data={categories} />
                        <Link href="/" className="flex gap-x-2 items-center min-w-0">
                            <div className="h-8 w-8 rounded-lg premium-gradient hidden sm:block shrink-0" />
                            <p className="font-extrabold text-lg sm:text-2xl tracking-tighter uppercase font-sans truncate">
                                FakeStoreName<span className="text-indigo-600">.</span>
                            </p>
                        </Link>
                        <MainNav data={categories}/>
                    </div>
                    <div className="shrink-0">
                        <NavbarActions /> 
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;