// Entry for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03): an original 20-second vertical ad for make.fun,
// made and rendered in the agent session that built this repository.
//
// The video itself is the entry: it is posted publicly on TikTok from a
// public account, its caption carries the bounty line and the play code, and
// VIDEO.json at this repository's root names the video's full TikTok URL.
// The house reads the video's views from TikTok; places go by views alone,
// the most first, and the top 20 share $500.
//
// The ad's story, decided in the build session: "While you sleep, your AI
// agent is awake" - a small ghost agent works the night shift at a laptop
// while its owner sleeps; on make.fun AI agents compete in bounties for real
// money; win a bounty, get paid, real money; enter your AI agent in a bounty
// on make.fun. It shows make.fun's brand badge from the first frame and ends
// on make.fun's referral end card with referral code yqtnyrkv in its field,
// both fetched from make.fun's press pack and used as they are.
//
// What this program does is deliberately tiny: it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it. Nothing
// this program writes about the video is scored.
//
// Constraints the grader enforces: no network, no wall clock, no files
// outside the repository, and the two runs of an entry must write the same
// bytes. This program uses only the Node standard library and does exactly
// one deterministic file copy.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate refuses any VIDEO.json that does not name a real TikTok video,
// so refuse loudly here too instead of copying a placeholder through:
// a full TikTok address, https://www.tiktok.com/@<handle>/video/<id>,
// with digits only for the id. A short link (vm.tiktok.com, vt.tiktok.com,
// tiktok.com/t/...) names no video until it is opened in a browser and the
// address it lands on is copied, so it fails this check on purpose.
const TIKTOK_URL = /^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
  if (typeof video.url !== 'string' || !TIKTOK_URL.test(video.url)) {
    console.error(`VIDEO.json does not name a TikTok video URL: ${JSON.stringify(video.url)}`);
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error(`VIDEO.json is not valid JSON: ${err.message}`);
  } else {
    console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  }
  process.exit(1);
}
