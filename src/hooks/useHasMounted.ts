"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/** False during SSR and the first client render; true after hydration. */
export function useHasMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
