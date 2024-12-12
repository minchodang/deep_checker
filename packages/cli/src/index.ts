import { Command } from 'commander'
import { checkAndInstallDependencies } from './checkAndInstallDependencies'

const program = new Command()

program
  .name('dep-checker')
  .version('0.0.1')
  .description('Analyze package.json for missing dependencies')
  .option('-p, --path <path>', 'Path to package.json', './package.json')
  .action((cmd) => {
    // `cmd.path`로 사용자가 입력한 경로를 받아서 전달합니다.
    checkAndInstallDependencies(cmd.path)
  })

program.parse(process.argv)
