import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");

  const validUser = process.env.SITE_PASSWORD_USER || "freyer";
  const validPass = process.env.SITE_PASSWORD || "Freyer2026!Secure";

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    if (authValue) {
      const [user, pwd] = Buffer.from(authValue, "base64").toString("utf-8").split(":");
      if (user === validUser && pwd === validPass) {
        const response = NextResponse.next();
        response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
        return response;
      }
    }
  }

  return new NextResponse("Authentication required. Please enter credentials to view the Freyer International preview.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Freyer International Rebuild Preview"',
      "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
