
import React, { JSX } from 'react'
import Image from 'next/image';
import { Card, CardContent,  CardHeader, CardTitle } from '../ui/card'

interface AlbumProps {
  url: string;
}
function Album({url} : AlbumProps): JSX.Element {
console.log(url)
  return (
   <Card> 
    <CardContent>
        <Image src={url}  alt='image'width={200} height={200}/>
    </CardContent>
   </Card>
  )
}

export default Album