import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { checkAndInstallTypePackage } from './installTypes'

const checkAndInstallDependencies = (packageJsonPath: string) => {
  const fullPath = path.resolve(packageJsonPath)

  if (!fs.existsSync(fullPath)) {
    console.error('Error: package.json not found!')
    process.exit(1)
  }

  const packageJson = JSON.parse(fs.readFileSync(fullPath, 'utf-8'))
  const { dependencies = {}, devDependencies = {} } = packageJson
  const allDeps = { ...dependencies, ...devDependencies }

  Object.keys(allDeps).forEach((dep) => {
    if (!fs.existsSync(path.resolve('node_modules', dep))) {
      console.log(`Installing missing dependency: ${dep}`)
      execSync(`npm install ${dep}`)
    }

    checkAndInstallTypePackage(dep)
  })
}

export { checkAndInstallDependencies }
