/// <reference types="next" />
/// <reference types="next/types/global" />

type ResponsiveImage = {
  height: number;
  src: string;
  srcSet: string;
  width: number;
};

declare module '*.png?sizes[]=140&sizes[]=280&sizes[]=420' {
  const responsiveImage: ResponsiveImage;
  export default responsiveImage;
}
declare module '*.png?sizes[]=140&sizes[]=280&sizes[]=420&format=webp' {
  const responsiveImage: ResponsiveImage;
  export default responsiveImage;
}

declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
