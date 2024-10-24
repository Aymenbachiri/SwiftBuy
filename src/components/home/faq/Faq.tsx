import AppearAnimation from "@/lib/animation/AppearAnimation";
import { FaqList } from "./FaqList";

export default function Faq() {
  return (
    <main className="mx-auto my-[7%] max-w-7xl divide-y divide-slate-200 rounded dark:divide-slate-700">
      {FaqList.map((item) => (
        <details key={item.Question} className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100 [&::-webkit-details-marker]:hidden">
            {item.Icon}
            {item.Question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45 dark:stroke-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac06 desc-ac06"
            >
              <title id="title-ac06">Open icon</title>
              <desc id="desc-ac06">
                Icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <AppearAnimation from="left" once={false}>
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              {item.Answer}
            </p>
          </AppearAnimation>
        </details>
      ))}
    </main>
  );
}
