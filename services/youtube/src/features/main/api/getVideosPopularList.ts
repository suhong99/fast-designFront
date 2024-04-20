import { VideoStatistics } from "@/src/shared/types/item";
import { ListResponse, VideoListItem } from "@/src/shared/types/list";
import { youtube_v3 } from "googleapis";

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;
export type PopularListItem = Pick<
  VideoStatistics,
  "viewCount" | "viewCountDisplayText"
> &
  VideoListItem;

export type GetVideosPopularListResponse = ListResponse<PopularListItem>;

// export const getVideosPopularListUrl = `${API_BASE_URL}/api/videos/popular-list`;
