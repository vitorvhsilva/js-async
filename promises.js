const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const erro = false
    if (erro) {
      reject(new Error('erro no login'))
    }
    console.log('user logado')
    resolve({email})

  })
}

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    console.log('getUserVideos')
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3'])
    }, 2000);
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    console.log('getVideoDetails')
    setTimeout(() => {
      resolve({title : 'video title'})
    }, 2500);
  })
}



//then executado se cair no resolve
//o then recebe tudo que passamos no resolve
//fazer o login do usuario, ENTAO se der certo executar o then
loginUser('vitorhsilva@gmail.com', '213231')
  .then((user) => getUserVideos(user.email))
  .then((video) => getVideoDetails(video[0]))
  .then((videoDetails) => console.log({ videoDetails }))
  .catch((erro) => console.log({ erro }))
//se nao der certo, logar o erro

//promise.all

const yt = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('videos from youtube')
  }, 2000)
})

const fb = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('posts from facebook')
  }, 3000)
})

Promise.all([yt, fb]).then((result) => {
  console.log({ result })
})