//  export class Music{
//     mId:number
//     mName:string
//     singer:string
//     genre:string
//     rating:number
//     constructor(id:number,mName:string,name:string,genre:string,rating:number)
//     {
// this.mId=id
// this.mName=mName
// this.singer=name
// this.genre=genre
// this.rating=rating
//     }
// }
export interface music{
    mId:number
    mName:string
    singer:string
    rating:number
    album:string
    song:string
    ReleaseDate:Date
}
