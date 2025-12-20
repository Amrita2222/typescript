'use client'
import { AlbumDetails, getAlbum } from '@/api/album.api'
import Album from '@/components/user/album'
import {useState, useEffect} from 'react'

function page() {
    const [photos, setPhotos] = useState<AlbumDetails[]>([])  ;

    useEffect( () =>{
        getAlbum().then((photo) => setPhotos(photo))

    }, [])

  return (
    <div>
    {photos.map((photo) => (
        <div key={photo.id}>
           <Album  url={photo.url}/>
        </div>
    ))}  
    </div>
  )
}

export default page