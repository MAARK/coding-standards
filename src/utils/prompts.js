import { prompt } from 'enquirer'
import path from 'path'
import fs from 'fs'
import { actionText } from './log-style'
import { getDirectories } from './file-system'

export function askCoreCommands(choices) {
  console.log()
  return prompt([
    {
      type: 'autocomplete',
      name: 'coreCommands',
      message: 'What do you want to do?',
      choices: [...choices],
    },
  ])
}

export function getLintChoices({ baseConfigPath }) {
  const configPaths = getDirectories(baseConfigPath).filter((configPath) => {
    const indexPath = path.join(configPath, 'info.json')
    return fs.existsSync(indexPath)
  })

  return configPaths.map((configPath) => {
    const infoPath = path.join(configPath, 'info.json')
    return JSON.parse(fs.readFileSync(infoPath, 'utf8'))
  })
}

export function askLintChoices(choices) {
  const README = 'https://github.com/MAARK/code-config/blob/main/README.md'

  console.log('\n⚠️  This action will overwrite existing configuration files')
  console.log(`For more info: ${actionText(README)}\n`)

  return prompt([
    {
      type: 'autocomplete',
      name: 'lintChoice',
      message: 'Which configuration do you want to install?',
      choices: [...choices],
    },
  ])
}

export function askHookConfirmation() {
  return prompt([
    {
      type: 'confirm',
      name: 'hookChoice',
      message: 'Do you want to add Git hook configuration?',
    },
  ])
}

export function getHookChoices({ folderPath }) {
  return fs.readdirSync(folderPath)
}

export function askSmartLinting() {
  return prompt([
    {
      type: 'confirm',
      name: 'smartLinting',
      message: 'Do you want to use smart linting?',
    },
  ])
}

export function askHookChoices(choices) {
  console.log('\n⚠️  This action will overwrite existing configuration files')

  return prompt([
    {
      type: 'autocomplete',
      name: 'hookChoice',
      message:
        'Which configuration do you want to install? (select multiple with spacebar)',
      multiple: true,
      choices,
    },
  ])
}
