# Code configurations

[![badge][badge]][npm-repo] [![badge-ci][badge-ci]][CircleCI]

[badge]: https://img.shields.io/badge/%40maarkllc%2Fcode--config-v1.1.0-blue
[npm-repo]: https://www.npmjs.com/package/@maarkllc/code-config

[badge-ci]: https://circleci.com/gh/MAARK/code-config.svg?style=shield
[CircleCI]: https://app.circleci.com/pipelines/github/MAARK/code-config

Collection of linter configurations and tools to enforce consistent code style
and format according to Maark's recommendations.

## Usage

Directly using `npx`

```shell
npx @maarkllc/code-config eslint
```

Or you can install Howl-CLI globally and use `howl`

```shell
npm i -g @maarkllc/code-config

howl eslint
```

## Available commands

* `eslint` To install an ESLint configuration
* `stylelint` To install a Stylelint configuration

## Supported configurations by linter

The idea is to have a structure of configurations that extend from each other
as needed depending on the project stack, it is important to define rules to be
able to identify anti-patterns and code-smells for specific known libraries.
[This diagram][diagram] helps illustrate the possible configurations:

```mermaid
%%{init: {'theme':'base'}}%%
graph TD
    subgraph Legend
        L1[Available]:::available --> L2[Not ready]
    end

    A[eslint/js/base]:::available ---> B[eslint/js/react]:::available
    A --> eslint/js/vue
    A --> eslint/js/angular
    B --> eslint/js/next

    eslint/ts/base --> eslint/ts/angular
    C[stylelint/css/base]:::available --> stylelint/scss/base:::available

    classDef available stroke:#0B410E,fill:#94D1BE
```

### ESLint

- `eslint/js/base`: It extends from [Airbnb] base configuration.
- `eslint/js/react`: It extends from `eslint/js/base` and Airbnb full
  configuration and hooks rules.

### Stylelint

- `stylelint/css/base`: It extends from `stylelint-config-standard`.
- `stylelint/scss/base`: It extends from `stylelint/css/base` and
  `stylelint-config-standard-scss`.

## Development

For more information please refer to the [documentation].

[documentation]: ./docs/README.md

[ESLint]: https://eslint.org/
[Prettier]: https://prettier.io/
[Stylelint]: https://stylelint.io/
[Airbnb]: https://github.com/airbnb/javascript

[diagram]: https://mermaid.live/edit#pako:eNp1Uk1vwjAM_StRuIKgE5flgETX3tgu22ktB7d1S7c0qRIXDSH--0IDlI_Nhyh-fn62Ze95rgvkglcG2g37iFLFnNku88AKK1SFB4-2CpLlFmoJmcS1EALODptMFmz1lLxpYgah2K190iXbv8sErawVTb_sNAP7oOFEwiuKU8rphnOS6csNvG33TwBU1UkwPhjeBRX-UKpOfXqUfFvXRLpTeUks7ST2sdz-PcaCDRx7Jt2O4cVyCdZGWLIh25LR3yhGs3AezOJxWUspRs_zKAhjPuYNmgbqwm1sf1RIOW2wwZQL9z0WSXmqDo4HHen3ncq5INPhmHdtAYRRDW6vDRclSOvQFtSn1oPvWXFRkzYXEHv31d9Jfy6HX_JNuoQ
