// const loginUser = (email, password) => {
//   setTimeout(() => {
//     console.log('Usuario logado.')
//     return ({ email });
//   }, 1500)

//   console.log('After setTimeout')
// }

// const user = loginUser("vitorhsilva@gmail.com", "231312");

// console.log({ user })

const loginUser = (email, password, seSucesso, seErro) => {
  setTimeout(() => {
    const erro = false

    if (erro) {
      return seErro(new Error('erro no login'))
    }

    console.log('Usuario logado.')
    seSucesso({email , password});
  }, 1500)

  console.log('After setTimeout')
}

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3'])
  }, 2000)
}


const getVideoDetails = (videos, callback) => {
  setTimeout(() => {
    callback({title: 'video title'})
  }, 2500)
}


const user = loginUser("vitorhsilva@gmail.com", "231312", 
(user) => {
  getUserVideos(user.email, (videos) => {
    console.log({videos})
    getVideoDetails(videos[0], (videoDetails) => {
      console.log({videoDetails})
    })
  })
}, (erro) => {
  console.log({ erro })
});
