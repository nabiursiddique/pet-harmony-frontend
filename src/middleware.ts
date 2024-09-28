import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Role = keyof typeof roleBasedRoutes;

const AuthRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  // user can access these routes (/^\/profile/ means starting with /profile)
  user: [/^\/profile/, "/found-items"],
  // admin can access these routes
  admin: [/^\/admin/],
};

export function middleware(request: NextRequest) {
  // to get current pathname
  const { pathname } = request.nextUrl;

  // const user = {
  //   name: "Nabiur Siddique",
  //   token: "alsdflsa",
  //   role: "user",
  // };

  const user = null;

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      // when there will be no user, only then user can go to login/register page
      return NextResponse.next();
    } else {
      // if non logged in user try to hit the protected routes then redirecting to login page
      return NextResponse.redirect(new URL("/login", request.url));
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
  matcher: ["/found-items", "/login", "/register", "/profile"],
};
