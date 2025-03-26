import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import compareObjects from '../src/compareObjects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two flat objects', () => {
  const file1 = JSON.parse(
    fs.readFileSync(getFixturePath('file1.json'), 'utf-8'),
  );
  const file2 = JSON.parse(
    fs.readFileSync(getFixturePath('file2.json'), 'utf-8'),
  );
  const expected = fs.readFileSync(
    getFixturePath('expected_flat.txt'),
    'utf-8',
  ).trim();
  const result = compareObjects(file1, file2);
  expect(result).toBe(expected);
});
