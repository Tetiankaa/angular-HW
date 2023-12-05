const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;

const urls = {
  users,
  posts:{
    byUserId:(id:number):string=>`${users}/${id}/posts`
  }
}

export {
  urls
}

