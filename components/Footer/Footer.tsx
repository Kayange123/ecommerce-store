import { Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t w-full">
      <div className="p-10 flex flex-col md:flex-row w-full items-center justify-center space-x-3">
        <p className="text-xs md:text-sm text-slate-500">
          &copy; {year} Baimi-ecommerce store. All rights reserved.
        </p>
        <p>
          <Link
            className="flex flex-row"
            href="https://bit.ly/kayange"
            target="_blank"
          >
            <span className="text-slate-500 text-xs">powered by</span>
            <Globe className="h-4 w-4 text-blue-600 ml-2" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
