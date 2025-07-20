"use client";

import { useState, useCallback } from "react";

interface UseLoadingReturn {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  setLoading: (loading: boolean) => void;
}

export const useLoading = (initialState: boolean = false): UseLoadingReturn => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setLoading,
  };
};

// Hook for managing multiple loading states
export const useMultipleLoading = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const setLoading = useCallback((key: string, loading: boolean) => {
    setLoadingStates((prev) => ({
      ...prev,
      [key]: loading,
    }));
  }, []);

  const startLoading = useCallback(
    (key: string) => {
      setLoading(key, true);
    },
    [setLoading]
  );

  const stopLoading = useCallback(
    (key: string) => {
      setLoading(key, false);
    },
    [setLoading]
  );

  const isLoading = useCallback(
    (key: string) => {
      return loadingStates[key] || false;
    },
    [loadingStates]
  );

  const isAnyLoading = useCallback(() => {
    return Object.values(loadingStates).some(Boolean);
  }, [loadingStates]);

  return {
    loadingStates,
    setLoading,
    startLoading,
    stopLoading,
    isLoading,
    isAnyLoading,
  };
};
