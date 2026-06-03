export const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="2" />
  </svg>
);

export const ReportsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M7 3h7l5 5v13H7z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 3v5h5" strokeWidth="2" />
  </svg>
);

export const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      strokeWidth="2"
    />
    <path
      d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1.04 1.55V22a2 2 0 01-4 0v-.09a1.7 1.7 0 00-1.04-1.55 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1.04H2a2 2 0 010-4h.09a1.7 1.7 0 001.55-1.04 1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 012.83-2.83l.06.06a1.7 1.7 0 001.87.34H8A1.7 1.7 0 009.04 3.1V3a2 2 0 014 0v.09A1.7 1.7 0 0014.08 4h.01a1.7 1.7 0 001.87-.34l.06-.06a2 2 0 012.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87V8c0 .68.4 1.29 1.04 1.55H22a2 2 0 010 4h-.09A1.7 1.7 0 0019.4 15z"
      strokeWidth="1.5"
    />
  </svg>
);

export const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <ellipse cx="12" cy="5" rx="7" ry="3" strokeWidth="2" />
    <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" strokeWidth="2" />
  </svg>
);

export const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle cx="12" cy="8" r="4" strokeWidth="2" />
    <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" strokeWidth="2" />
  </svg>
);

export const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      strokeWidth="2"
    />
    <path d="M16 3v4M8 3v4M3 10h18" strokeWidth="2" />
  </svg>
);

export const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M15 17H5l1.4-1.4A2 2 0 007 14.2V11a5 5 0 0110 0v3.2a2 2 0 00.6 1.4L19 17h-4"
      strokeWidth="2"
    />
    <path d="M10 20a2 2 0 004 0" strokeWidth="2" />
  </svg>
);

export const ChevronDownIcon = ({ open }) => (
  <svg
    className={`transition-transform ${open ? "rotate-180" : ""}`}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M6 9l6 6 6-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);