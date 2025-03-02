import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const maintenanceMode =
    process.env.MAINTENANCE_MODE === "true" ? true : false;

  if (maintenanceMode && request.nextUrl.pathname !== "/maintenance") {
    const redirectUrl = new URL("/maintenance", request.url);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
