import { env } from "@/env";
import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

interface IOgImage {
  params: {
    locale: string;
  };
}

export const runtime = "edge";
export const alt = "PedroHB";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OgImage({ params }: IOgImage) {
  const productImageURL = new URL(
    `/images/og-image-${params.locale}.png`,
    env.APP_URL,
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={productImageURL} alt="PedroHB" style={{ width: "100%" }} />
      </div>
    ),
    {
      ...size,
    },
  );
}
