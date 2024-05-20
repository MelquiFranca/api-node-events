const { funcOne, funcTwo, promiseOne, promiseTwo } = require("./exec-functions")

const exec = async () => {
  console.time('EXEC')
  const data = { name: 'Melqui' }
  funcOne(data)
  funcTwo(data)
  promiseOne(data)
  promiseTwo(data).then((data) => {
    console.log(data)
    console.timeEnd('EXEC')
  })
}

exec()