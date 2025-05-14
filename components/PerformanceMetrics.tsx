// components/PerformanceMetrics.tsx
'use client';
import { useEffect } from 'react';

export default function PerformanceMetrics() {
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const nav = navEntries[0] as PerformanceNavigationTiming;

      const ttfb = nav.responseStart - nav.requestStart;
      const firstByte = nav.responseStart - nav.fetchStart;
      const domContentLoaded = nav.domContentLoadedEventEnd - nav.startTime;
      const totalLoad = nav.loadEventEnd - nav.startTime;

      console.log(`[TTFB] ${ttfb.toFixed(2)} ms`);
      console.log(`[First Byte] ${firstByte.toFixed(2)} ms`);
      console.log(`[DOMContentLoaded] ${domContentLoaded.toFixed(2)} ms`);
      console.log(`[Total Load Time] ${totalLoad.toFixed(2)} ms`);
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          console.log(`[FCP] ${entry.startTime.toFixed(2)} ms`);
        }
        if (entry.name === 'largest-contentful-paint') {
          console.log(`[LCP] ${entry.startTime.toFixed(2)} ms`);
        }
      });
    });

    observer.observe({ type: 'paint', buffered: true });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  }, []);

  return null;
}
