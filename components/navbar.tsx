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
        <div className="glass-header">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <MobileNav data={categories} />
                        <Link href="/" className="ml-0 lg:ml-0 flex gap-x-2 items-center">
                            <div className="h-8 w-8 rounded-lg premium-gradient hidden sm:block" />
                            <p className="font-extrabold text-xl sm:text-2xl tracking-tighter uppercase font-sans">
                                FakeStoreName<span className="text-indigo-600">.</span>
                            </p>
                        </Link>
                        <MainNav data={categories}/>
                    </div>
                    <NavbarActions /> 
                </div>
            </Container>
        </div>
    );
};

export default Navbar;