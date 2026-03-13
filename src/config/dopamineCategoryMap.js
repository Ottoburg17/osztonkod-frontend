import {
  Eye,
  Activity,
  Clock,
  Brain,
  PauseCircle,
  Repeat,
  User,
} from "lucide-react";

export const dopamineCategoryMap = {
  awareness: {
    label: "Tudatosítás",
    color: "indigo",
    bg: "bg-indigo-50",
    text: "text-indigo-800",
    border: "border-indigo-200",
    icon: Eye,
  },

  body: {
    label: "Testi jelzés",
    color: "emerald",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    border: "border-emerald-200",
    icon: Activity,
  },

  timing: {
    label: "Időérzékelés",
    color: "amber",
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
    icon: Clock,
  },

  thought: {
    label: "Automatikus gondolat",
    color: "purple",
    bg: "bg-purple-50",
    text: "text-purple-800",
    border: "border-purple-200",
    icon: Brain,
  },

  delay: {
    label: "Késleltetés",
    color: "blue",
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    icon: PauseCircle,
  },

  pattern: {
    label: "Mintázat",
    color: "rose",
    bg: "bg-rose-50",
    text: "text-rose-800",
    border: "border-rose-200",
    icon: Repeat,
  },

  observer: {
    label: "Megfigyelő pozíció",
    color: "slate",
    bg: "bg-slate-50",
    text: "text-slate-800",
    border: "border-slate-200",
    icon: User,
  },
};
