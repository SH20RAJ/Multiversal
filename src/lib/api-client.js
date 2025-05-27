'use client';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => {
    if (!res.ok) throw new Error(`API request failed with status ${res.status}`);
    return res.json();
});

// User hooks
export function useUser(userId) {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/users/${userId}` : null,
        fetcher
    );

    return {
        user: data,
        isLoading,
        isError: error,
        mutate
    };
}

export function useCurrentUser() {
    const { data, error, isLoading, mutate } = useSWR('/api/users/me', fetcher);

    return {
        user: data,
        isLoading,
        isError: error,
        isAuthenticated: Boolean(data),
        mutate
    };
}

// Works hooks
export function useWorks(filters = {}) {
    const queryString = new URLSearchParams(filters).toString();
    const { data, error, isLoading, mutate } = useSWR(
        `/api/works?${queryString}`,
        fetcher
    );

    return {
        works: data,
        isLoading,
        isError: error,
        mutate
    };
}

export function useWork(workId) {
    const { data, error, isLoading, mutate } = useSWR(
        workId ? `/api/works/${workId}` : null,
        fetcher
    );

    return {
        work: data,
        isLoading,
        isError: error,
        mutate
    };
}

// Dashboard stats hooks
export function useDashboardStats(userId) {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/dashboard/${userId}/stats` : '/api/dashboard/stats',
        fetcher
    );

    return {
        stats: data,
        isLoading,
        isError: error,
        mutate
    };
}

export function useRecentWorks(userId) {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/dashboard/${userId}/recent-works` : '/api/dashboard/recent-works',
        fetcher
    );

    return {
        recentWorks: data,
        isLoading,
        isError: error,
        mutate
    };
}

// Explore page hooks
export function useFeaturedContent() {
    const { data, error, isLoading } = useSWR('/api/explore/featured', fetcher);

    return {
        featuredContent: data,
        isLoading,
        isError: error
    };
}

export function useCategories() {
    const { data, error, isLoading } = useSWR('/api/categories', fetcher);

    return {
        categories: data,
        isLoading,
        isError: error
    };
}

// Community hooks
export function useCommunityStats() {
    const { data, error, isLoading } = useSWR('/api/community/stats', fetcher);

    return {
        stats: data,
        isLoading,
        isError: error
    };
}

export function useFeaturedCreators() {
    const { data, error, isLoading } = useSWR('/api/community/featured-creators', fetcher);

    return {
        creators: data,
        isLoading,
        isError: error
    };
}
