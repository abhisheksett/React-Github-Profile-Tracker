import axios from 'axios';

let getRepos = function(username){
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

let getUserInfo = function(username){
  return axios.get(`https://api.github.com/users/${username}`);
}

let helper = {
  getGithubInfo: function(username){
    return axios.all([getRepos(username), getUserInfo(username)]).then((arr) => {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      }
    }).catch((data)=>{
      Promise.reject(data);
    });
  }
};

module.exports = helper;
