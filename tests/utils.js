import path from 'path'

// warms up the module cache. this import takes a while (>500ms)
import 'babel-eslint'

const testFilePath = relativePath => path.join(process.cwd(), './tests/files', relativePath);

export const FILENAME = testFilePath('foo.js');

const test = t =>
  Object.assign({
    filename: FILENAME,
  }, t, {
    parserOptions: Object.assign({
      sourceType: 'module',
      ecmaVersion: 6,
    }, t.parserOptions),
  });

export {
  test,
  testFilePath,
  FILENAME
}
