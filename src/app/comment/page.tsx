'use client'
import { CommentDetails, getComment } from '@/api/comment.api'
import CommentCard from '@/components/user/comment-card'
import  { useEffect, useState } from 'react'

const Page: React.FC = () => {
    const [comment, setcomment] = useState<CommentDetails[]>([])

    useEffect(() => {
        getComment().then((comment) => {
            setcomment((comment))
        })
    }, [])

  return (
    <div className=' min-h-screen p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black font-sans dark:bg-black'>
     {comment.map(({id, name, email, body}) => (
        <div key={id}>
            <CommentCard  id ={id} name={name} email={email} body={body}/>
        </div>
     ))}
    </div>
  )
}

export default page;