export interface PostDetails{
    id: number;
    title: string;
    body: string;
}

export async function getPost(): Promise<PostDetails[]>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post: PostDetails[] = await response.json();
    return post;
}
