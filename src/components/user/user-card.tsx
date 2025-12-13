"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { UserProfile, getUserDetails } from "@/api/user.api"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function UserCard() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [error, setError] = useState<string>("")
  const [username, setUsername] = useState<string>("")

  useEffect(() => {
    getUserDetails("Amrita2222").then((user) => setUser(user)).catch(err => setError(err));
  }, [username])

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(username)
    getUserDetails(username).then((user) => setUser(user)).catch(err => setError(err));
  }
  
  return (

    <Card className="max-w-sm rounded-2xl shadow-md">
        <div>
            <Label htmlFor="username">User name</Label>
           <Input type="text"
           id="username"
           placeholder="Enter your user name" 
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
           <Button onClick={handleSubmit}>Submit</Button>
        </div>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={user?.avatar_url} alt="User Image" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">
            {user?.name}
          </h2>
          <p className="text-sm text-muted-foreground">Frontend Developer</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Following</span>
          <span className="font-medium">{ user?.following}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Bio</span>
          <span className="font-medium">{ user?.bio}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Address</span>
          <span className="font-medium text-right">{ user?.location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
