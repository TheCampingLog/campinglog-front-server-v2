'use client';

import { useEffect } from 'react';
import useCampList from '@/feature/camps/hooks/useCampList';
import ListCard from '@/feature/camps/components/ListCard';
import { useInfiniteScroll } from '@/feature/camps/hooks/useInfiniteScroll';
import { ResponseGetCampLatestList } from '@/feature/camps/types/responses';

export default function CampListPage() {
  const { items, loadMore, hasNext, isLoading } = useCampList<ResponseGetCampLatestList>(4);

  const { ref, reset } = useInfiniteScroll(() => {
    if (hasNext) loadMore();
  }, hasNext);

  // fetch 끝나면 observer 다시 활성화
  useEffect(() => {
    if (!isLoading) reset();
  }, [isLoading, reset]);

  return (
    <div className="relative min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-6 pb-40">
        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ListCard camps={items} />
        </div>

        {/* 무한스크롤 트리거 */}
        {hasNext && <div ref={ref} className="h-10" />}
      </main>
    </div>
  );
}
