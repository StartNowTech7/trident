import { NextResponse } from 'next/server';

// Security headers applied to all routes
export function middleware(request) {
    const response = NextResponse.next();

    // Security headers temporarily disabled for testing robots.txt indexing
    // response.headers.set('X-Frame-Options', 'DENY');
    // response.headers.set('X-Content-Type-Options', 'nosniff');
    // response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|manifest\\.json|opensearch\\.xml|.*\\..*).*)'],
};
