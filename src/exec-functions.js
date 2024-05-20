function funcOne(data) {
  setTimeout(() => {
    console.log(`Show data funcOne ${JSON.stringify(data)}`)
  }, Math.random() * 1000)
}

const funcTwo = (data) => {
  setTimeout(() => {
    console.log(`Show data funcTwo ${JSON.stringify(data)}`)
  }, Math.random() * 1000)
}

const promiseOne = (data) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Show data promiseOne ${JSON.stringify(data)}`)
    resolve()
  }, Math.random() * 2000)
})

function promiseTwo(data, event) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Show data promiseTwo ${JSON.stringify(data)}`)
      if (event) this.emit('finish', 'FINISHED')
      resolve('FINISHED')
    }, Math.random() * 2000)
  })
}

module.exports = {
  funcOne,
  funcTwo,
  promiseOne,
  promiseTwo
}