'use client'
import PostCard from '@/components/user/post-card'
import React, { useEffect, useState } from 'react'
import { getPost, PostDetails } from '@/api/post.api'

function Page() {
    const [post, setPost] = useState<PostDetails[]>([])
  
    useEffect(() => {
      getPost().then((post) => {
        setPost(post)
      })
    }, [])
  
    return (
      <div className='bg-gray-'>
        {post.map(({ id, title, body }) => (
          <div key={id}>
            <PostCard id={id} title={title} body={body} />
          </div>
        ))}
      </div>
    )
  }
  
  export default Page

/**
 * map(funtion)
 * map((post) => ({
 * <PostCard post={post}>
 * 
 * 
 * }))
 */