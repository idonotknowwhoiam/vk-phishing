const fs = require('fs')
const path = require('path')
const pkg = require('./package.json')

const currentPath = __dirname
const distPath = path.join(currentPath, process.env.DIST)

// function g(...p) {
//   return path.join(currentPath, ...p)
// }

function d(...p) {
  return path.join(distPath, ...p)
}

// fs.mkdirSync(distPath)

const newPackage = {
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  dependencies: pkg.dependencies,
  scripts: {
    start: pkg.scripts.start
  }
}

fs.writeFileSync(d('package.json'), JSON.stringify(newPackage), {
  encoding: 'utf8'
})
