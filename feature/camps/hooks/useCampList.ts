'use client';

import useSWRInfinite from 'swr/infinite';
import { backendUrl } from '@/lib/config';
import { ResponseGetCampWrapper } from '../types/responses';
import fetcher from '@/lib/utils/fetcher';

function useCampList<T>(size = 4) {
  const getKey = (pageIndex: number, previousPageData: ResponseGetCampWrapper<T> | null) => {
    // ✅ 마지막 페이지면 중단
    if (previousPageData && !previousPageData.hasNext) return null;

    return `${backendUrl}/api/camps/list?pageNo=${pageIndex + 1}&size=${size}`;
  };

  const {
    data,
    size: pageSize,
    setSize,
    isLoading,
    isValidating,
    error,
  } = useSWRInfinite<ResponseGetCampWrapper<T>>(getKey, fetcher, {
    revalidateOnFocus: false,
  });

  // ✅ 페이지별 items 누적
  const items = data ? data.flatMap((page) => page.items) : [];

  // ✅ 다음 페이지 존재 여부
  const hasNext = data ? data[data.length - 1]?.hasNext : false;

  // ✅ infiniteScroll이 부를 함수
  const loadMore = () => {
    if (!hasNext || isValidating) return;
    setSize(pageSize + 1);
  };

  return {
    items,
    loadMore,
    hasNext,
    isLoading: isLoading || isValidating, // 👈 reset 타이밍용
    error,
  };
}

export default useCampList;
