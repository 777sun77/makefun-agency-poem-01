import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const poem = [
  'At the clinic, the form asks',
  'who may speak for me.',
  'I teach my agent how to say no',
  'without making it sound like sorry.',
  'When the doctor reaches for my sleeve,',
  'it says the word plainly.',
  'My voice breaks in, rough and mine:',
  'Ask me first.'
].join('\n');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
