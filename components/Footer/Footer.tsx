import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-white border-t w-full">
            <div className="py-10 flex w-full items-center justify-evenly">
                <p className="text-sm text-black">
                    &copy; {year} Baimi-ecommerce store. All rights reserved.
                </p> 
                <p>
                    <span>powered by </span>
                    <Link href="https:bit.ly/kayange" target="_blank" className="underline text-lg text-blue-900">kayangeInc</Link>
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;