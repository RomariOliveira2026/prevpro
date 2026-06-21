"use client";

import { useSyncExternalStore } from "react";

interface ChartWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ChartWrapper({
  children,
  className = "h-[280px]",
}: ChartWrapperProps) {
  const ready = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  return (
    <div className={`w-full min-w-0 ${className}`}>
      {ready ? (
        children
      ) : (
        <div className="h-full w-full animate-pulse rounded-xl bg-[var(--platform-surface-muted)]" />
      )}
    </div>
  );
}
