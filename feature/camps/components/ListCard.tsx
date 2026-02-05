'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Star, Tent, Wifi, Zap } from 'lucide-react';
import { ResponseGetCampLatestList } from '../types/responses';

interface CampLatestListProps {
  camps: ResponseGetCampLatestList[];
}

export default function ListCard({ camps }: CampLatestListProps) {
  if (!camps || camps.length === 0) {
    return <div className="text-center py-8">최근 캠핑장 정보가 없습니다.</div>;
  }

  return (
    <>
      {camps.map((camp, index) => (
        <Link key={index} href={`/camps/detail/${camp.mapX}/${camp.mapY}`} className="block h-full">
          <div className="group bg-white rounded-md border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer">
            {/* 이미지 영역 */}
            <div className="relative h-52 w-full bg-slate-100 shrink-0">
              <Image
                src={camp.firstImageUrl || '/images/campingsample.png'}
                alt={camp.facltNm || '캠핑장 이미지'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* 시 / 도 */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-teal-600 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <Tent className="w-3 h-3" />
                  <span className="uppercase">
                    {camp.doNm} {camp.sigunguNm}
                  </span>
                </div>
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="p-6 flex flex-col flex-grow">
              {/* 캠핑장명 */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1 group-hover:text-teal-600 transition-colors">
                {camp.facltNm}
              </h3>

              <div className="mt-auto space-y-2.5 border-t border-slate-50 pt-5">
                {/* 전화번호 */}
                {camp.tel && (
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Phone className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span>{camp.tel}</span>
                  </div>
                )}

                {/* 와이파이 / 전기 */}
                <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                  {camp.sbrsCl?.includes('무선인터넷') && (
                    <div className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5 text-teal-500" />
                      <span>와이파이</span>
                    </div>
                  )}
                  {camp.sbrsCl?.includes('전기') && (
                    <div className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-teal-500" />
                      <span>전기</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
