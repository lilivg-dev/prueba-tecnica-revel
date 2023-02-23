declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.png' {
  const image: string;
  export default image;
}
declare module '*.pdf' {
  const file: string;
  export default file;
}
