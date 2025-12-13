export interface UserProfile {
    name: string | null;       
    avatar_url: string;
    followers: number | null;
    following: number | null;
    bio: string | null;
    location: string | null;
}

export async function getUserDetails(username: string): Promise<UserProfile> {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json();
    const { name, avatar_url, followers, following, bio, location } = data;
    return { name, avatar_url, followers, following, bio, location } ;
}

/**
 * If I want to use axios then I have to install it first
 * If I will use (fetch) then it is available in javascript as well next js
 * Here fetch is provided by next-js
 * http://localhost:3000/users/Amrita
 * Here users/Amrita2222 is a routes
 * If I will work on backend then it is provided by the backend developers
 * users/:name
 */