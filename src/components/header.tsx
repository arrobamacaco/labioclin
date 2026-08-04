"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EXAM_RESULTS_URL, navLinks } from "@/lib/navigation";

function MenuIcon() {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-center" aria-hidden>
      <span
        className="block h-0.5 w-full -translate-y-1 rounded-full bg-zinc-900 transition-transform duration-200 group-open:translate-y-0.5 group-open:rotate-45"
      />
      <span
        className="block h-0.5 w-full translate-y-1 rounded-full bg-zinc-900 transition-transform duration-200 group-open:translate-y-0 group-open:-rotate-45"
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
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#511134] text-sm font-medium text-white transition-colors hover:bg-[#3d0d28] ${className}`}
    >
      Resultados de Exames
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (mobileMenuRef.current?.open) return;

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
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-3 transition-transform duration-300 ease-in-out sm:px-6 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 flex items-center justify-between gap-3 rounded-[8px] bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur-xl sm:px-4 sm:py-2">
          <Link
            href="/"
            className="shrink-0"
            onClick={() => mobileMenuRef.current?.removeAttribute("open")}
          >
            <Image
              src="/labioclin_final_logo.png"
              alt="Labioclin Laboratório"
              width={184}
              height={51}
              priority
              className="h-7 max-w-[190px] w-auto sm:h-8"
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

            <details ref={mobileMenuRef} className="group lg:hidden">
              <summary
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg text-zinc-900 transition-colors hover:bg-zinc-100 [&::-webkit-details-marker]:hidden"
                aria-label="Abrir ou fechar menu"
              >
                <MenuIcon />
              </summary>

              <nav
                id="mobile-nav"
                className="fixed inset-x-0 top-[4.5rem] mx-auto flex max-w-6xl flex-col gap-1 rounded-[8px] border border-solid border-[#d2d2d2] bg-white p-3 shadow-sm backdrop-blur-xl"
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
                      onClick={() =>
                        mobileMenuRef.current?.removeAttribute("open")
                      }
                    >
                      {label}
                    </Link>
                  );
                })}
                <div className="mt-2 pt-3">
                  <ExamResultsButton
                    className="w-full py-3 text-sm"
                    onClick={() =>
                      mobileMenuRef.current?.removeAttribute("open")
                    }
                  />
                </div>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
