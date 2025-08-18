"use client";
import { SignUp } from "@clerk/nextjs";

export function SignUpView() {
    return (
        <div>
            <SignUp routing="hash" />
        </div>
    )
}