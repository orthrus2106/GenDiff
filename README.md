# GenDiff - Difference Calculator

**Gendiff** is a CLI app which compares two configuration files and shows the difference.  
Supports `.json`, `.yml`, and `.yaml` formats.  
Avilable three output formats: `stylish`, `plain`,  `json`.



## Installation

```bash
git https://github.com/orthrus2106/GenDiff.git
cd GenDiff
make install
```

## Usage
**Format:**
```bash
gendiff [options] <filepath1> <filepath2>
```
**More details:**
```bash
gendiff -h
```
**Examples:**
```bash
gendiff -f stylish file1.json file2.json # Stylish
gendiff -f plain file1.json file2.json # Plain
gendiff -f json file1.json file2.json # Json
```
## Demo videos
**Demonstration of deep comparing plain format:**

[Click!](https://asciinema.org/a/vWrBk2Ze5NgmYkn408w9tgKpY)

**Demonstration of deep comparing json format:**

[Click!](https://asciinema.org/a/R9aOS8A3d44JQeuEQOFy2Z4Pt)
## Available comands
**Dry publishing:**
```bash
make publish
```
**Linting:**
```bash
make lint
```
**Run tests:**
```bash
make test
```
**Tests coverage:**
```bash
make test-coverage
```
### Hexlet tests and linter status:
[![Actions Status](https://github.com/orthrus2106/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/orthrus2106/frontend-project-46/actions)
### Test coverage:
[![Test Coverage](https://api.codeclimate.com/v1/badges/a8153ce27c1fb797652c/test_coverage)](https://codeclimate.com/github/orthrus2106/frontend-project-46/test_coverage)