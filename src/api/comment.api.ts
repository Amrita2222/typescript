export interface CommentDetails{
    id: number;
    name: string;
    email: string;
    body: string;
}

 export async function getComment() {
     const response = await fetch('https://jsonplaceholder.typicode.com/comments')
     const comments = await response.json()
     return comments;
}
