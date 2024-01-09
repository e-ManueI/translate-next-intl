import { useTranslations } from "next-intl";

export default function Home({ params }) {
  const t = useTranslations("Index");
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen">
        {t.rich("title", {
          victory: (chunks) => (
            <span className="text-red-500 mx-1"> {chunks} </span>
          ),
          money: (chunks) => (
            <span className="text-red-500 mx-1"> {chunks} </span>
          ),
        })}
      </div>
    </>
  );
}
