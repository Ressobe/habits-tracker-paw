import { NextResponse, type NextRequest } from "next/server";

const authRoutes = ["/auth/login", "/auth/register"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isLoggedIn = !!token;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && !authRoutes.includes(pathname)) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && pathname === "/") {
    const homeUrl = new URL("/habits", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (isLoggedIn && authRoutes.includes(pathname)) {
    const homeUrl = new URL("/habits", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
