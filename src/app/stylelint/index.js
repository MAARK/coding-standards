import fs from 'fs'
import path from 'path'
import { actionText, dim } from 'src/utils/log-style'
import {
  addScripts,
  createPackageJson,
  installDependencies
} from 'src/utils/npm'
import { askLintChoices, getLintChoices } from 'src/utils/prompts'

function copyFiles(eslintConfig) {
  const templates = path.join(__dirname, '../src/app/stylelint/templates')
  const stylelintPath = path.join(templates, 'stylelint.js')
  const stylelintContent = fs.readFileSync(stylelintPath, 'utf8')

  fs.writeFileSync(
    '.stylelintrc.js',
    stylelintContent.replace('{config}', eslintConfig),
    'utf8'
  )
}

async function stylelint() {
  const baseConfigPath = path.join(__dirname, '../configs/stylelint')
  const stylelintChoices = getLintChoices({ baseConfigPath })
  const { lintChoice } = await askLintChoices(stylelintChoices)
  const choice = stylelintChoices.find(
    (stylelintChoice) => stylelintChoice.name === lintChoice
  )

  await createPackageJson()

  await installDependencies(choice.devDependencies)

  copyFiles(lintChoice)

  addScripts({
    'code-config:stylelint': "stylelint '**/*.{css,scss}'",
    'code-config:stylelint-fix': "stylelint '**/*.{css,scss}' --fix"
  })
}

export function stylelintDoc() {
  console.log(
    `\n\t${actionText(
      'stylelint'
    )}\t- Load Stylelint configuration following Maark's guidelines`
  )
  console.log(`\n\t\t\t  ${dim('e.g. code-config stylelint')}`)
}

export default stylelint
