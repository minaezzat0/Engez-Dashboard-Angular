// export interface Dashboard {
//   userCount : number ,
//   freelancerCount:number ,
//   totalTransaction : number ,
//   jobsDone:number ,
//   categoryCount:number ,
//   adminCount: number  ,
//   messagesCount:number

// }

export interface Dashboard {
  user_count : number ,
  freelancer_count:number ,
  totalTransaction : number ,
  job_count:number ,
  categories:number ,
  admin_count: number  ,
  messagesCount:number,
  contracts_value:number,
  contact_count: number,
  maxuser:{
    user:{name: string},
    contracts_value:number
  }
}
