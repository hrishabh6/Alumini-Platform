// middleware.js
import { NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(req) {

    const session = await auth()

    const { pathname } = req.nextUrl;

    // Define authentication-related pages
    const authPages = ["/sign-in", "/sign-up"];

    // If session exists, prevent access to sign-in and sign-up pages
    if (session && authPages.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
    }


    // Define required onboarding fields
    const requiredFields = [
        "role", "profileImage", "bio", "linkedin", "github", "portfolio",
        "company", "position", "startDate", "endDate", "isCurrentlyWorking",
        "college", "degree", "idCard", "fieldOfStudy", "rollNumber"
    ];

    // Check if all required fields are set in cookies
    const hasCompletedOnboarding = requiredFields.every(field =>
        req.cookies.get(`field_${field}`)?.value === "true"
    );

    
    

    // If onboarding is complete, prevent access to "/onboarding"
    if (hasCompletedOnboarding && pathname === "/onboarding") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|public|images|uploads|icons).*)",
    ],
};
