export interface Job {
  // id: number,
  // title: string,
  // desc: string,
  // image: string,
  // duration: string,
  // balance : number,
  // view_count : number,
  // adress:string,
  // status : number,
  // user_id: number,
  // cat_id:number,
  // created_at:number
  id: number,
  title: string,
  desc: string,
  image: string,
  duration: string,
  balance : number,
  view_count : number,
  adress:string,
  status : number,
  user_id: number,
  cat_id:number,
  created_at:number,
  user:{
    name : string,
    email:string
  },
  category:{
    name : string
  }
}
