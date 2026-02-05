export interface ResponseGetCampLatestList {
  facltNm: string;
  doNm: string;
  sigunguNm: string;
  addr1: string;
  addr2: string;
  mapX: string;
  mapY: string;
  tel?: string;
  sbrsCl?: string;
  firstImageUrl: string;
}

export interface ResponseGetCampWrapper<T> {
  items: T[];
  totalCount: number;
  totalPage: number;
  hasNext: boolean;
  page: number;
  size: number;
}
