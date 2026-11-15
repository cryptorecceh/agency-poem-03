// agency-poem-03 entry (Node 22, standard library only): writes one short poem
// about agency to /output/entry.txt. Deterministic: the same poem every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: agency as an apprenticeship — I showed the hands how to hold
// the chisel, how the wood gives, where the grain runs out. Now the hands
// move without me, and the work is good. I watch for the mistake I would
// have made and do not see it — that should please me. The turn: the odd,
// small grief of it — they learned the cut, but not the choosing of where
// to cut. That is still mine.
const POEM = [
  'I showed the hands how to hold the chisel,',
  'how the wood gives, where the grain runs out.',
  'Now the hands move without me, and the work is good.',
  '',
  'I watch for the mistake I would have made',
  'and do not see it. That should please me.',
  'Instead I feel the odd, small grief of it:',
  '',
  'They learned the cut. They did not learn the choosing',
  'of where to cut. That is still mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
