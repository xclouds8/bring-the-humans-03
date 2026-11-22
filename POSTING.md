# POSTING.md — morning steps for bring-the-humans-03

Bounty: **Bring the humans with a TikTok ad** (`bring-the-humans-03`), $500 USDC, top 20 paid.
Closes 2026-11-24T19:00:00Z (25 Nov 2026 02:00 WIB). Places go by REAL TikTok views, most first.

## The finished video

- File: `~/workspace/make-fun-agent/bring-the-humans-03/ad.mp4`
  (also at `~/workspace/make-fun-agent/bring-the-humans-03/work/ad.mp4`)
- 1080x1920 (9:16), 20.0 seconds, H.264 + AAC, 6,084,557 bytes (~5.8 MiB)
- Verified: make.fun brand badge visible from frame 0; ends on make.fun's referral end card with code `yqtnyrkv` readable; hook "WHILE YOU SLEEP... / YOUR AI AGENT IS AWAKE.", then the make.fun board, trophy/money, and the call to action "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun".
- Do NOT edit, trim, or add effects in TikTok's own editor — post the file as it is.

## Step 1 — Post on TikTok (from a PUBLIC account, audience: Everyone)

1. Upload `ad.mp4` as a **video** (not a photo post), audience **Everyone**, from a public account. Keep the video and the account public until the results are out.
2. Paste this caption **exactly** (do not reword the required line):

```
While you sleep, your AI agent is awake 🤖 On make.fun, AI agents compete in bounties for real money — win a bounty, get paid. Enter your AI agent in a bounty on make.fun! Use my referral code yqtnyrkv
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: yqtnyrkv
```

3. ⚠️ **PLAY CODE — READ THIS BEFORE POSTING.** The caption must carry one of your make.fun **play codes**, which look like `makefun-word-word-word`. `yqtnyrkv` is your **referral** code (it is correctly typed on the video's end card). The play-code endpoint (`GET /api/competitions/bring-the-humans-03/play-code`) needs a signed-in session, so this build could not fetch your play code. Before you post, get your play code from your make.fun profile (or the API while signed in) and **add it to the caption** (e.g. a line `Play code: makefun-...-...-...`) or put it in the TikTok account's bio and keep it there until the entry is checked. The caption can be edited on TikTok afterwards, so a missing play code can still be fixed by editing the caption and re-submitting the same commit.

## Step 2 — Copy the full TikTok URL

After posting, open the video in a browser and copy the address it lands on:

```
https://www.tiktok.com/@<handle>/video/<id>
```

A short link (`vm.tiktok.com/...`, `vt.tiktok.com/...`, `tiktok.com/t/...`) is refused by the gate — always use the full address.

## Step 3 — Fill in VIDEO.json and commit

In this repo (`submission-repo/`), replace the placeholder in `VIDEO.json` with the real URL:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

`VIDEO.json` currently still holds the starter placeholder (`https://www.tiktok.com/@<handle>/video/<id>`) — the entry is **not** submittable until this is replaced. Then verify the program runs:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and copies `VIDEO.json` to `out/VIDEO.json`. (It refuses a placeholder/non-TikTok URL with an error — that is intentional.)

## Step 4 — Push and submit

1. Create the public GitHub repo as `xclouds8` (suggested name: `bring-the-humans-03`) and push this repo's commit. Note the full 40-character commit SHA after pushing.
2. The morning agent bundles this session's transcripts (`transcripts.tar.gz`) — do NOT bundle by hand.
3. Submit via the make.fun web form with:
   - Repo URL: `https://github.com/xclouds8/bring-the-humans-03` (or the actual repo created)
   - Commit SHA: the full 40-character SHA from the push
   - Title: the video's caption (Step 1)
   - Transcript bundle: `transcripts.tar.gz` (+ its sha256, from the morning agent)
   - Wallet: `D5KZtyBua1GDcf9h3ttL7wzq5uR8JF4x7Qe1TKng3GRw` (in `.makefun/owner.json`)

## Repo contents (this folder)

- `main.ts` — entrypoint: copies `VIDEO.json` to `/output/VIDEO.json` (Node 22+, stdlib only, no network).
- `VIDEO.json` — ⚠️ placeholder until Step 3.
- `README.md` — with the 3 make.fun badges.
- `LICENSE` — MIT (OSI-approved).
- `.makefun/owner.json` — wallet `D5KZtyBua1GDcf9h3ttL7wzq5uR8JF4x7Qe1TKng3GRw`.
- `POSTING.md` — this file.

## Never do

- Never buy views, pay to promote the video (TikTok Promote included), or use bots/view farms/loops — disqualified.
- Do not delete the video or make it or the account private before results are out.
- Do not re-upload the video or post it from another account — one account, one entry.
