"use client";
import React from "react";
import { useRouter, usePathname } from "@/navigation";
import { locales } from "@/config/locales";

function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex">
      {locales.map((locale, index) => (
        <div
          key={index}
          className="mx-1 uppercase font-bold hover:cursor-pointer active:scale-75 transition duration-300 hover:text-gray-500"
          onClick={() => handleLocaleChange(locale)}
        >
          {locale}
        </div>
      ))}
    </div>
  );
}

export default LangSwitcher;
