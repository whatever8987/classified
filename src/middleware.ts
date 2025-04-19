import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_TOKEN_KEY = 'authToken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_TOKEN_KEY)?.value;
  const isLoginPage = request.nextUrl.pathname.startsWith('/login');
  const isRegisterPage = request.nextUrl.pathname.startsWith('/register');
  const isAIMarketingTool = request.nextUrl.pathname.startsWith('/ai-marketing-tool'); // Protect AI Marketing Tool

  // Allow access to home page and location pages without authentication
  if (!token && !isLoginPage && !isRegisterPage && !isAIMarketingTool) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated and trying to access login, register or AI marketing tool
  if (!token && (isLoginPage || isRegisterPage || isAIMarketingTool)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If authenticated, redirect from login or register page to home
  if (token && (isLoginPage || isRegisterPage)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

