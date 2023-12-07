const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;
const posts = `${baseURL}/posts`;

const urls = {
  users:{
    base:users,
    byId:(id:number):string=>`${users}/${id}`
  },
  posts:{
    byId:(id:number):string=>`${posts}/${id}`,
    byUserId:(id:number):string=>`${users}/${id}/posts`
  },
  comments:{
    byPostId:(id:number):string=>`${posts}/${id}/comments`
  }
}

export {
  urls
}
