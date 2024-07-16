import React, { useState, useEffect } from 'react';

export type useIsVisilbleOptions = {
  observerOptions?: {
    threshold?: number;
    rootMargin?: string;
    root?: Element | null;
  },
  callbackOptions?: {
    once: boolean;
  }
};

const defaultOptions: useIsVisilbleOptions = {
  observerOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  },
  callbackOptions: {
    once: true,
  }
};

export type useIsVisibleArgs = {
  references: React.RefObject<HTMLElement | null>[];
  callback: (entry: IntersectionObserverEntry, reference: React.RefObject<HTMLElement | null>) => void;
  options?: useIsVisilbleOptions;
};

const useIsVisible = ({ references, callback, options = defaultOptions }: useIsVisibleArgs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const reference = references.find(ref => ref.current === entry.target);
          if (reference && reference.current) {
            callback(entry, reference);
            if (options.callbackOptions?.once) {
              observer.unobserve(reference.current);
            }
          }
        }
      },
      options.observerOptions
    );

    references.forEach(reference => {
      if (reference.current) {
        observer.observe(reference.current);
      }
    });

    return () => {
      references.forEach(reference => {
        if (reference.current) {
          observer.unobserve(reference.current);
        }
      });
    };
  }, []);
};

export default useIsVisible;