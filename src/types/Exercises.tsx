export interface Exercise{
    id:string,
    name:string,
    bodyPart:string,
    equipment:string,
    gifUrl:string,
    target : string,
    instructions?:string
}

export interface SearchForm{
    search:string
}