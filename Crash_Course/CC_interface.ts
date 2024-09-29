
// TypeScript Crash Course on Youtube!!!
function interfaces(){
function addTwoNumbers(a: number, b: number): number {
    return a+b
}

//--
// Interfaces
//

interface Author {
    name: string
    avatar: string
}

const authorOne: Author = {name: 'mario', avatar: '/img/mario.png'}

interface Post{
    title: string
    body: string
    tags: string[]
    create_at: Date
    author: Author
}

const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
}

//as fcn args
function createPost(post: Post): void{
    console.log(`Created post ${post.title} by ${post.author.name}`)
}

createPost(newPost)

//with arrays

let posts: Post[] = []

posts.push(newPost)
}