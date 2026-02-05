'use client';

import { useEffect, useRef } from 'react';

export function useInfiniteScroll(onIntersect: () => void, enabled = true) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingRef.current) {
          isFetchingRef.current = true;
          onIntersect();
        }
      },
      {
        threshold: 0,
        rootMargin: '200px',
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  // ✅ 외부에서 fetch 끝났을 때 풀어줌
  const reset = () => {
    isFetchingRef.current = false;
  };

  return { ref, reset };
}
