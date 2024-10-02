import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  // user can access these routes (/^\/user/ means starting with /user)
  user: [/^\/user/, "/posts"],
  // admin can access these routes
  admin: [/^\/admin/, "/posts"],
};

export async function middleware(request: NextRequest) {
  // to get current pathname
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      // when there will be no user, only then user can go to login/register page
      return NextResponse.next();
    } else {
      // if non logged in user try to hit the protected routes then redirecting to login page
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  //* Now here working on role based routes
  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// protected routes / middleware will only work when we go to these routes
export const config = {
  matcher: ["/posts", "/login", "/register", "/user/:page*", "/admin/:page*"],
};
