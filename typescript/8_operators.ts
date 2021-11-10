interface Person{
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age'

type User = {
    _id: number
    name: string
    emeil: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude < keyof User, '_id' | 'createdAt'>  //'name' | 'emeil'
type UserKeysNoMeta2 = Pick<User, 'name' | 'emeil'> //'_id' | 'createdAt'

let ul: UserKeysNoMeta1 = 'name'
// ul = '_id'