export default interface Photo {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

const DEFAULT_FORMAT: ImageFormat = {
  ext: "",
  url: "",
  hash: "",
  mime: "",
  name: "",
  size: 0,
  width: 0,
  height: 0,
  sizeInBytes: 0,
};

export interface Formats {
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}
