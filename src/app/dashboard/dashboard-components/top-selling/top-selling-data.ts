export interface Product {
    image: string,
    username: string,
    email: string,
    address: string,
    phone: string,
    totalearning: number
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        username: 'Mina Isaac',
        email: 'mina@gmail.com',
        address: 'Cairo',
        phone: '01007979368',
        totalearning: 3500,
    } ,
    {
      image: 'assets/images/users/user2.jpg',
      username: 'Mina Isaac',
      email: 'mina@gmail.com',
      address: 'Minya',
      phone: '01007979368',
      totalearning: 5300,
  }

]
