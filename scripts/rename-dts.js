import { rename } from 'fs'

rename('./dist/index.d.ts', './dist/fm-gofer.d.ts', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
