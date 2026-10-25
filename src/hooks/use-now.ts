import { useEffect, useState } from "react";

/**
 * Returns the build/render-time date first (so prerendered HTML hydrates cleanly),
 * then the visitor's current date after page load. Lets static hosting split the
 * schedule correctly without a rebuild.
 */
export function useNow(): Date | undefined {
  const [now, setNow] = useState<Date | undefined>(undefined);
  useEffect(() => {
    setNow(new Date());
  }, []);
  return now;
}
