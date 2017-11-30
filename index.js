const app = "I don't do much.";
const token = '237199e6fd113e31f54adb579164b2a45aab8577'
// secret code 237199e6fd113e31f54adb579164b2a45aab8577
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));