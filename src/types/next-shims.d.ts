declare module "next" {
  export type Metadata = Record<string, unknown>;
  export namespace MetadataRoute {
    export type Robots = Record<string, unknown>;
    export type Sitemap = Array<Record<string, unknown>>;
  }
  export type NextConfig = Record<string, unknown>;
}

declare module "next/server" {
  export class NextRequest extends Request {
    nextUrl: URL;
  }
  export class NextResponse extends Response {
    static json(body: unknown, init?: ResponseInit): NextResponse;
  }
}

declare module "next/font/google" {
  export function Geist(options: Record<string, unknown>): { variable: string; className: string };
  export function Geist_Mono(options: Record<string, unknown>): { variable: string; className: string };
}

declare module "next/link" {
  import type { AnchorHTMLAttributes, ReactNode } from "react";
  export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode }): JSX.Element;
}

declare module "next/image" {
  import type { ImgHTMLAttributes } from "react";
  export default function Image(
    props: ImgHTMLAttributes<HTMLImageElement> & {
      src: string;
      alt: string;
      width?: number;
      height?: number;
      priority?: boolean;
      fill?: boolean;
    },
  ): JSX.Element;
}

