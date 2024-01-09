import React from "react";
import { useTranslations } from "next-intl";
function About() {
  const t = useTranslations("About");
  return (
    <div className="min-h-screen items-center justify-center flex">
      {t("title")}
    </div>
  );
}

export default About;
