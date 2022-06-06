export interface ImageResponse {
  codedImages: SingleImage[];

}

export interface SingleImage {
  ImageId: string;
   Base64: string;
}
