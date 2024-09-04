// TEMPORARY DATA

const users = [
    {id:1, name: 'Rodney'},
    {id:2, name: 'Lei'},
]

const posts = [
    {id:1, title: 'Yeah buddy', body: 'Like weight baby', userId: 1},
    {id:2, title: 'Putangina', body: 'Tanginang yan', userId: 2},
    {id:3, title: 'Wohoi', body: 'gegeegg', userId: 3},
    {id:2, title: 'Joke', body: 'hehehe', userId: 4},
]

export const getPosts = () => {
    return posts;
}

export const getPost = (id) => {
    const post= posts.find(post => post.id === parseInt(id));
    return post;
}

export const getUsers = async (id) => {
    const user = users.find(user => user.id === parseInt(id));
    return user;
}