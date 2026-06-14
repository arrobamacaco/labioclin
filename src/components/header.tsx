"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EXAM_RESULTS_URL, navLinks } from "@/lib/navigation";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-center" aria-hidden>
      <span
        className={`block h-0.5 w-full rounded-full bg-zinc-900 transition-all duration-200 ${
          open ? "translate-y-0.5 rotate-45" : "-translate-y-1"
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-zinc-900 transition-all duration-200 ${
          open ? "translate-y-0 -rotate-45" : "translate-y-1"
        }`}
      />
    </span>
  );
}

function ExamResultsButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={EXAM_RESULTS_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#434142] text-sm font-medium text-white transition-colors hover:bg-[#393839] ${className}`}
    >
      Resultados de Exames
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        setHeaderVisible(true);
      } else if (scrollDelta > 5 && currentScrollY > 72) {
        setHeaderVisible(false);
      } else if (scrollDelta < -5) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHeaderVisible = headerVisible || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-3 transition-transform duration-300 ease-in-out sm:px-6 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 rounded-[8px] bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur-xl sm:px-4 sm:py-2">
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/labioclin_logo.svg"
              alt="Labioclin"
              width={110}
              height={20}
              priority
              className="h-5 max-w-[190px] w-auto sm:h-6"
            />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex lg:gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:block">
              <ExamResultsButton className="px-4 py-2" />
            </div>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="mt-2 flex flex-col gap-1 rounded-[8px] bg-white/75 p-3 shadow-sm backdrop-blur-xl"
            aria-label="Navegação mobile"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-[8px] px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-2 pt-3">
              <ExamResultsButton
                className="w-full py-3 text-sm"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
