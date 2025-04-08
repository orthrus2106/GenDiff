import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import compareObjects from '../src/compareObjects.js';
import stylish from '../src/formatters/stylish.js';
import plain from '../src/formatters/plain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two flat json objects', () => {
  const file1 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file1_json.json'), 'utf-8'),
  );
  const file2 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file2_json.json'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected/expected_flat_json.txt'),
    'utf-8',
  ).trim();
  const result = stylish(compareObjects(file1, file2));
  expect(result).toBe(expected);
});

test('compare two flat yaml objects', () => {
  const file1 = yaml.load(
    fs.readFileSync(getFixturePath('testing-files/file1_yaml.yml'), 'utf-8'),
  );
  const file2 = yaml.load(
    fs.readFileSync(getFixturePath('testing-files/file2_yaml.yml'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected/expected_flat_yaml.txt'),
    'utf-8',
  ).trim();
  const result = stylish(compareObjects(file1, file2));
  expect(result).toBe(expected);
});

test('compare two depth json objects', () => {
  const file1 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file1_json_deep.json'), 'utf-8'),
  );
  const file2 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file2_json_deep.json'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected/expected_depth_json.txt'),
    'utf-8',
  ).trim();
  const result = stylish(compareObjects(file1, file2));
  expect(result).toBe(expected);
});

test('compare two depth json objects plain format', () => {
  const file1 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file1_json_deep.json'), 'utf-8'),
  );
  const file2 = JSON.parse(
    fs.readFileSync(getFixturePath('testing-files/file2_json_deep.json'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected/expected_plain.txt'),
    'utf-8',
  );
  const result = plain(compareObjects(file1, file2));
  expect(result).toBe(expected);
});
