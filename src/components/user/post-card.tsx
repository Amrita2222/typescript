
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostDetails } from '@/api/post.api'



function PostCard({id, title, body}: PostDetails) {

    
  return (
    <div className='bg-black  font-sans dark:bg-black'>
   <Card>
    <CardHeader>
        <CardTitle>Id: {id} </CardTitle>
    </CardHeader>
    <CardDescription>
        Title : {title}
    </CardDescription>
    <CardContent>
        body : {body}
    </CardContent>
   </Card>
   </div>
  )
}

export default PostCard