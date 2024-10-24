import OderIcon from "@/lib/icons/OderIcon";
import PayIcon from "@/lib/icons/PayIcon";
import ReturnIcon from "@/lib/icons/ReturnIcon";
import UserIcon from "@/lib/icons/UserIcon";
import type { JSX } from "react";

type FaqListItem = {
  Question: string;
  Answer: string;
  Icon: JSX.Element;
};

export const FaqList: FaqListItem[] = [
  {
    Question: "How do I create an account?",
    Answer:
      "To create an account, click on the 'Sign Up' button at the top right corner of the page. Fill in the required information and follow the prompts to complete your registration.",
    Icon: <UserIcon />,
  },
  {
    Question: "What payment methods do you accept?",
    Answer:
      "We accept various payment methods including credit cards, debit cards, and PayPal. You can choose your preferred payment method during checkout.",
    Icon: <PayIcon />,
  },
  {
    Question: "How can I track my order?",
    Answer:
      "You can track your order by logging into your account and visiting the 'Orders' section. You'll find tracking information for all your recent purchases.",
    Icon: <OderIcon />,
  },
  {
    Question: "What is your return policy?",
    Answer:
      "You can return any unopened and unused items within 30 days of purchase for a full refund. Please refer to our return policy page for more details.",
    Icon: <ReturnIcon />,
  },
];
