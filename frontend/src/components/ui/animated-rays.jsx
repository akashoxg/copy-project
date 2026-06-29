import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedRays({
  className = "",
  headline,
  subtext,
  children,
}) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDark(checkDark());

    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const stripes = `repeating-linear-gradient(
    100deg,
    rgba(20, 184, 166, 0.15) 0%,
    rgba(20, 184, 166, 0.15) 7%,
    transparent 10%,
    transparent 12%,
    rgba(27, 107, 90, 0.15) 16%
  )`;
  const rainbow = `repeating-linear-gradient(
    100deg,
    #14b8a6 10%,
    #e07a2f 15%,
    #0ea5e9 20%,
    #1b6b5a 25%,
    #14b8a6 30%
  )`;

  return (
    <>
      <style>{`
        @keyframes aurora-bg {
          0% { background-position: 50% 50%, 50% 50%; }
          100% { background-position: 350% 50%, 350% 50%; }
        }
        .animate-aurora-bg {
          animation: aurora-bg 60s linear infinite;
        }
      `}</style>
      <div className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0", className)}>
        {/* Aurora Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `${stripes}, ${rainbow}`,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            filter: isDark
              ? "blur(12px) opacity(60%) saturate(150%)"
              : "blur(12px) opacity(40%)",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          }}
        >
          {/* Animated overlay */}
          <div
            className="absolute inset-0 animate-aurora-bg"
            style={{
              backgroundImage: `${stripes}, ${rainbow}`,
              backgroundSize: "200%, 100%",
            }}
          />
        </div>

        {(headline || subtext || children) && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-auto">
            {headline && (
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-navy mb-3">
                {headline}
              </h1>
            )}
            {subtext && (
              <p className="text-base md:text-lg text-brand-text-secondary max-w-xl">
                {subtext}
              </p>
            )}
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default AnimatedRays;
