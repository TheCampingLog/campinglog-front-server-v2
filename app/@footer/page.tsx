'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center gap-12">
          {/* 로고 및 브랜딩 영역 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/camping-log-logo.png"
              alt="캠핑로그"
              width={160}
              height={50}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain mb-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

          {/* 정보 영역 */}
          <div className="flex flex-col gap-6 items-center">
            {/* 상단 링크 바 */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <div className="text-[13px] font-bold text-gray-800 hover:text-green-700 transition-colors">이용약관</div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="text-[13px] font-bold text-gray-800 hover:text-green-700 transition-colors">
                개인정보 처리방침
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="text-[13px] font-bold text-gray-800 hover:text-green-700 transition-colors">고객센터</div>
            </div>

            {/* 상세 기업 정보 */}
            <div className="grid grid-cols-1 gap-1.5 text-[12px] text-gray-500 font-light leading-relaxed text-center">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                <p>
                  <span className="text-gray-400 mr-2">대표자명</span> 최의걸, 이창훈, 이상혁, 정능혁
                </p>
                <p>
                  <span className="text-gray-400 mr-2">주소</span> 서울특별시 금천구 가산디지털 1로
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                <p>
                  <span className="text-gray-400 mr-2">사업자등록번호</span> 123-45-67890
                </p>
                <p>
                  <span className="text-gray-400 mr-2">통신판매업 신고번호</span> 제2025-서울가산-1234호
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                <p>
                  <span className="text-gray-400 mr-2">전화번호</span> 02-1234-5678
                </p>
                <p>
                  <span className="text-gray-400 mr-2">이메일</span>
                  <span className="font-medium text-gray-700 hover:text-green-700 cursor-pointer transition-colors border-b border-gray-200">
                    campinglog@google.com
                  </span>
                </p>
              </div>
            </div>

            {/* 하단 카피라이트 */}
            <div className="pt-4">
              <p className="text-[11px] text-gray-400 tracking-wider uppercase">
                Copyright © 2026 CampingLog. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
