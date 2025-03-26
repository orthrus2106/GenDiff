import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import compareObjects from '../src/compareObjects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two flat json objects', () => {
  const file1 = JSON.parse(
    fs.readFileSync(getFixturePath('file1_json.json'), 'utf-8'),
  );
  const file2 = JSON.parse(
    fs.readFileSync(getFixturePath('file2_json.json'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected_flat_json.txt'),
    'utf-8',
  ).trim();
  const result = compareObjects(file1, file2);
  expect(result).toBe(expected);
});

test('compare two flat yaml objects', () => {
  const file1 = yaml.load(
    fs.readFileSync(getFixturePath('file1_yaml.yml'), 'utf-8'),
  );
  const file2 = yaml.load(
    fs.readFileSync(getFixturePath('file2_yaml.yml'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected_flat_yaml.txt'),
    'utf-8',
  ).trim();
  const result = compareObjects(file1, file2);
  expect(result).toBe(expected);
});
