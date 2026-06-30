import QRCode from "qrcode";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

function firstHeaderValue(value: string | null) {
  return value?.split(",")[0]?.trim();
}

export async function GET(request: NextRequest) {
  const forwardedHost = firstHeaderValue(request.headers.get("x-forwarded-host"));
  const host = forwardedHost || request.headers.get("host") || request.nextUrl.host;
  const forwardedProtocol = firstHeaderValue(
    request.headers.get("x-forwarded-proto"),
  );
  const protocol =
    forwardedProtocol || request.nextUrl.protocol.replace(":", "") || "https";
  const menuUrl = new URL("/menu", `${protocol}://${host}`).toString();
  const svg = await QRCode.toString(menuUrl, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 3,
    color: {
      dark: "#000000",
      light: "#00000000",
    },
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
