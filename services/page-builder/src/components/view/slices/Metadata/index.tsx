import Head from "next/head";

// metadata 라는 next.js 지원하는 거 사용해도 되지만, 일부만 사용하기에 직접 만듬
export type MetadataSliceProps = {
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export const MetadataSlice: React.FC<MetadataSliceProps> = ({
  title,
  ogTitle,
  ogDescription,
}: MetadataSliceProps) => {
  const currentOGTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOGTitle && <meta property="og:title" content={currentOGTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};
