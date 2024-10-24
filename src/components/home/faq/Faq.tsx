import AppearAnimation from "@/lib/animation/AppearAnimation";
import { FaqList } from "./FaqList";
import PlusIcon from "@/lib/icons/PlusIcon";

export default function Faq() {
  return (
    <main className="mx-auto my-[7%] max-w-7xl divide-y divide-slate-200 rounded dark:divide-slate-700">
      {FaqList.map((item) => (
        <details key={item.Question} className="group p-4">
          <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100 [&::-webkit-details-marker]:hidden">
            {item.Icon}
            {item.Question}
            <PlusIcon />
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
