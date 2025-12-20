'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react";

import { toast } from "sonner"
import { useRouter } from "next/navigation"


interface User {
  username: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter()

    const [userData, setUserData] = useState<User>({
      username: "doejohn",
      password: "test@123"
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }))
    }

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("LOGIN DETAILS: ", userData)
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(userData),
      })

      if (response.ok) {
        toast.success("Loggedin successfully")
        router.push("/")
      }
      console.log(response)
    } catch (error) {
      console.error("Error while logging : ", error)
    }
  }
    
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">User Name</FieldLabel>
                <Input
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </Field>
              
              <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input name="password" value={userData.password} onChange={handleChange} id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
