"use client";
import { OrganizationList, OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany, {})
  const addUser = useMutation(api.users.add)
  return (
    <>
      <div className="flex flex-col justify-between items-center p-4 bg-gray-200"> 
        <UserButton />
        <OrganizationSwitcher hidePersonal />
        <h1 className="text-2xl font-bold m-auto">Convex + Clerk</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>App Web</p>
        <Button onClick={()=>addUser()}>Add User</Button>
        {JSON.stringify(users, null, 2)}
      </div>
    </>
  )
}
