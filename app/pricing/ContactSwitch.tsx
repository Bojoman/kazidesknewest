"use client";

import * as React from "react";

// ToggleSwitch Component
interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  ariaLabel?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  ariaLabel = "Toggle pricing period",
}) => {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      className="focus:outline-none focus:ring-2 focus:ring-red-950 focus:ring-offset-2 rounded-full"
    >
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toggle-switch w-10 h-10"
      >
        <path
          d="M28 7.5C31.3152 7.5 34.4946 8.81696 36.8388 11.1612C39.183 13.5054 40.5 16.6848 40.5 20C40.5 23.3152 39.183 26.4946 36.8388 28.8388C34.4946 31.183 31.3152 32.5 28 32.5H13C9.68479 32.5 6.50537 31.183 4.16117 28.8388C1.81696 26.4946 0.5 23.3152 0.5 20C0.5 16.6848 1.81696 13.5054 4.16117 11.1612C6.50537 8.81696 9.68479 7.5 13 7.5H28ZM13 30C15.6522 30 18.1957 28.9464 20.0711 27.0711C21.9464 25.1957 23 22.6522 23 20C23 17.3478 21.9464 14.8043 20.0711 12.9289C18.1957 11.0536 15.6522 10 13 10C10.3478 10 7.8043 11.0536 5.92893 12.9289C4.05357 14.8043 3 17.3478 3 20C3 22.6522 4.05357 25.1957 5.92893 27.0711C7.8043 28.9464 10.3478 30 13 30Z"
          fill="#B3443D"
        />
      </svg>
    </button>
  );
};

export default ToggleSwitch;
