'use client';

import { useState, useEffect, useRef } from 'react';

// Cache storage for API responses
const apiCache = new Map();

/**
 * Custom hook for fetching data with caching capabilities
 * @param {string} url - The URL to fetch from
 * @param {Object} options - Fetch options
 * @param {number} cacheDuration - Duration in milliseconds to keep cache valid (default: 5 minutes)
 * @param {boolean} forceRefresh - Force a cache refresh ignoring existing cache
 * @returns {Object} The data, loading state, and error information
 */
export function useCachedFetch(url, options = {}, cacheDuration = 300000, forceRefresh = false) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use a ref to avoid dependency issues with options
    const optionsRef = useRef(options);

    useEffect(() => {
        optionsRef.current = options;
    }, [options]);

    useEffect(() => {
        if (!url) {
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const fetchData = async () => {
            const cacheKey = `${url}-${JSON.stringify(optionsRef.current)}`;

            try {
                // Check cache first
                const cached = apiCache.get(cacheKey);
                const now = Date.now();

                if (!forceRefresh && cached && now - cached.timestamp < cacheDuration) {
                    setData(cached.data);
                    setLoading(false);
                    return;
                }

                // If not in cache or cache expired, fetch fresh data
                setLoading(true);
                const response = await fetch(url, {
                    ...optionsRef.current,
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const result = await response.json();

                // Store in cache
                apiCache.set(cacheKey, {
                    data: result,
                    timestamp: Date.now()
                });

                setData(result);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setData(null);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url, cacheDuration, forceRefresh]);

    return { data, loading, error };
}

/**
 * Function to clear the entire cache or specific entries
 * @param {string} urlPattern - Optional URL pattern to clear specific cache entries
 */
export function clearApiCache(urlPattern) {
    if (!urlPattern) {
        apiCache.clear();
        return;
    }

    // Clear entries matching the pattern
    for (const key of apiCache.keys()) {
        if (key.startsWith(urlPattern)) {
            apiCache.delete(key);
        }
    }
}

/**
 * Function to prefetch and cache API data
 * @param {string} url - The URL to prefetch
 * @param {Object} options - Fetch options
 * @param {number} cacheDuration - Duration for cache validity
 */
export async function prefetchApiData(url, options = {}, cacheDuration = 300000) {
    try {
        const cacheKey = `${url}-${JSON.stringify(options)}`;
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        apiCache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });

        return data;
    } catch (error) {
        console.error('Prefetch failed:', error);
        throw error;
    }
}
