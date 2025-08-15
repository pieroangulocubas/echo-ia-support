"use client";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany, {})
  const addUser = useMutation(api.users.add)
  return (
    <>
      <Authenticated>  
        <UserButton />
        <h1 className="text-2xl font-bold">Convex + Clerk</h1>
        <div className="flex items-center justify-center min-h-svh">
          <p>App Web</p>
          <Button onClick={()=>addUser()}>Add User</Button>
          {JSON.stringify(users, null, 2)}
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}
