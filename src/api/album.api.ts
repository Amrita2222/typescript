

export interface AlbumDetails{
    id:number;
   url: string;
}

export async function  getAlbum():Promise<AlbumDetails[]>  {
   const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
   const data: AlbumDetails[] = await response.json();
   return data;
}