"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts/auth-layout";
import { OrgSelectView } from "../views/org-select-view";

export function OrganizationGuard({ children }: { children: React.ReactNode }) {
    const {organization} = useOrganization()

    if(!organization) {
        return (
            <AuthLayout>
                <OrgSelectView />
            </AuthLayout>
        );
    }

    return (
        <div>
            {children}
        </div>
    );
}