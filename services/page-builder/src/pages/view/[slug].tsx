import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import {
  ViewSchema,
  useViewSchemaSlices,
} from "@/src/hooks/useViewSchemaSlices";

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useViewSchemaSlices(jsonSchema);

  return (
    <MobileFirstLayout>
      {/* JSON SCHEMA 기반으로 컴포넌트가 동적 생성 */}
      {slices}
    </MobileFirstLayout>
  );
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: ViewSchema;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  // slug - '패스트캠퍼스-온라인-강의-프로모션-100원-이벤트-${viewId}'
  // 맨 마지막에만 아이디 적용하면 됨.  mock
  //ex) http://localhost:3000/view/%ED%8C%A8%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4-%EC%98%A8%EB%9D%BC%EC%9D%B8-%EA%B0%95%EC%9D%98-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98-100%EC%9B%90-%EC%9D%B4%EB%B2%A4%ED%8A%B8-mock

  const slicedSlug = slug.split("-");
  const viewId = slicedSlug[slicedSlug.length - 1];

  const response = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);

  if (response.status === 200) {
    const jsonData = await response.json();

    return {
      props: {
        jsonSchema: jsonData,
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
