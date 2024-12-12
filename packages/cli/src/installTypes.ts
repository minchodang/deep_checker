import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const checkAndInstallTypePackage = (packageName: string) => {
  const typePackage = `@types/${packageName}`
  const typePackagePath = path.resolve('node_modules', typePackage)

  if (!fs.existsSync(typePackagePath)) {
    console.log(`Installing missing type dependency: ${typePackage}`)
    execSync(`npm install ${typePackage}`)
  }
}

export { checkAndInstallTypePackage }
