import { Facebook, Instagram, Link, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-[#D4AF37] mb-6">
            Premium Turntables
          </h2>
          <p className="text-gray-400 mb-8">
            Crafting exceptional audio experiences
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#D4AF37] transition duration-300"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] transition duration-300"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] transition duration-300"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] transition duration-300"
            >
              <Youtube size={24} />
            </Link>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Premium Turntables. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
