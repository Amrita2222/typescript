import PostCard from "@/components/user/post-card";
import UserCard from "@/components/user/user-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <UserCard />
      
    </div>
  );
}
