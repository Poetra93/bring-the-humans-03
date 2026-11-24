// bring-the-humans-03 entry (Node 22, standard library only).
//
// This program copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all it does.
// The entry itself is the video: an original short vertical ad for
// make.fun, made in this session with ffmpeg from make.fun's press
// pack, posted publicly on TikTok with the bounty's line and the
// account's play code in its caption. VIDEO.json names the video,
// and the house reads the video's views from TikTok.
//
// The ad shows make.fun's brand badge (mascot mark + make.fun
// wordmark) from its first frame and ends on make.fun's referral
// end card with the account's own referral code in its field, both
// fetched from the press pack (https://make.fun/press/manifest.json,
// guide at https://make.fun/press/llms.txt) and used as they are.
//
// The VIDEO.json shipped here holds the starter placeholder address,
// so the gate refuses it as it stands. Replace it with the posted
// video's address before submitting.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output. It prints
// nothing on success.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
