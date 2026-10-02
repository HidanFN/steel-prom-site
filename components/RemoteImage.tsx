import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
};

export function RemoteImage({ src, alt, className, sizes, priority, fill }: Props) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes ?? "100vw"}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={750}
      className={className}
      sizes={sizes ?? "100vw"}
      priority={priority}
    />
  );
}
