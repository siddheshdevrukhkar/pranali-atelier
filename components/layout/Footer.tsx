import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

import { getFooter } from "@/lib/content";

export default function Footer() {
  const footer = getFooter();

  return (
    <footer className="relative overflow-hidden border-t border-[#D9CEC2] bg-gradient-to-b from-[#ECE4DA] via-[#E5D9CB] to-[#D9CCBD]">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]" />
      <Container className="relative py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <p className="text-xs font-medium tracking-wide text-[#4B3E35]">
            © {new Date().getFullYear()} Pranali Atelier
          </p>
        </div>
      </Container>
    </footer>
  );
}
