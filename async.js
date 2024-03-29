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

const displayUser = async () => {
  try {
    //colocar o resolve do loginUser na variavel user
    const user = await loginUser('vitorhsilva@gmail.com', '2312313')
    //o await espera a promisse ser resolvida para ir para a proxima linha
    const videos = await getUserVideos(user.email)
    const videosDetails = await getVideoDetails(videos[0]) 

    console.log({ videosDetails})
  } catch (erro) {
    console.log({ erro })
  }
}

displayUser()