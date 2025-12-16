
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { CommentDetails } from '@/api/comment.api'

function CommentCard({id, name, email, body } : CommentDetails) {
  return (
        <Card className=''>
            <CardHeader>
                <CardTitle>
                   <p> Id : {id}</p>
                </CardTitle>
            </CardHeader>
            <CardDescription className='px-6'>
                <p>Name : {name}</p>
                  <p> Email: {email}</p>
            </CardDescription>
            <CardContent>
                <p>Body : <span className='text-gray-500 text-sm'> {body}</span></p>
            </CardContent>
        </Card>
  )
}

export default CommentCard