import NextImage, { type ImageProps } from "next/image";

// Wrapper around next/image that defaults to full quality (100).
// Next.js 16 caps optimized images at quality 75 unless higher values
// are both allowlisted in next.config (images.qualities) and set here.
export default function Photo(props: ImageProps) {
  return <NextImage quality={100} {...props} />;
}
