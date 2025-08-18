"use client"
import { OrganizationList } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";


export function OrgSelectView() {
    const sp = useSearchParams();
    const redirectUrl = sp.get("redirectUrl") ?? "/";
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Organization</h1>
            <p className="mb-8">Please fill out the form below to create a new organization.</p>
            {/* Add your organization creation form here */}
            <OrganizationList 
             afterSelectOrganizationUrl={redirectUrl}
             afterCreateOrganizationUrl={redirectUrl}
             hidePersonal
             skipInvitationScreen
            />
        </div>
    );
}