import { AiFillPieChart } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import { MdGroups, MdNoteAlt } from "react-icons/md";
export const SidebarData = [
  {
    icon: AiFillPieChart,
    header: "DashBoard",
  },
  {
    icon: GrHeroku,
    header: "Tactics Vault",
  },
  {
    icon: MdGroups,
    header: "Teams",
  },
  {
    icon: MdNoteAlt,
    header: "Schedule Generator",
  },
  {
    icon: FaCalendarAlt,
    header: "Weekly Trainining Plans",
  },
  {
    icon: FcComboChart,
    header: "Team Metrics",
  },
  {
    icon: FiSettings,
    header: "Customizations",
  },
];

// weeek days
export const weeksdata = [
  {
    day: "sunday",
  },
  {
    day: "monday",
  },
  {
    day: "tuesday",
  },
  {
    day: "wednesday",
  },
  {
    day: "thrusday",
  },
  {
    day: "firday",
  },
  {
    day: "saturday",
  },
];

export const header = [
  {
    name: "Teams",
  },
  {
    name: "U23",
  },
  {
    name: "U19",
  },
];
