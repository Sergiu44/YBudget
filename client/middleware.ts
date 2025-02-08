import { NextResponse } from "next/server";
import { auth } from "./app/configs/auth";

export default auth((req) => {
  if (!req.auth) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.append("X-Redirect-Skip-Assets", "false");
    return NextResponse.redirect("http://localhost:3000/auth/login", {
      headers: requestHeaders,
    });
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!auth/login|auth/get-started|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
