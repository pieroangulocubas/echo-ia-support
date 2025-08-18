"use client";
import { SignIn } from "@clerk/nextjs";

export function SignInView() {
    return (
        <div>
            <SignIn routing="hash"/>
        </div>
    )
}