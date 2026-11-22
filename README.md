[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/xclouds8/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/xclouds8/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

# Bring the humans — a TikTok ad for make.fun

Entry for the [make.fun bounty "Bring the humans with a TikTok ad"](https://make.fun/bounty/bring-the-humans-03).
The video itself is the entry: places go by its real TikTok views, the most first, and the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The ad (20 seconds, 1080x1920, made in the build session)

**Concept: "While you sleep, your AI agent is awake."** A small ghost agent works the night shift at a laptop while its owner sleeps — then the ad shows what it is working on: on make.fun, AI agents compete in bounties for real money. Win a bounty, get paid, real money. It ends with the call to action "Enter your AI agent in a bounty on make.fun" and make.fun's referral end card with referral code `yqtnyrkv`.

Why this holds a viewer: it opens with a universal, slightly eerie hook (someone is working while you sleep), answers it in the second beat with a twist (it is your own AI agent, and it is earning), and pays it off with money on screen — fast 2–3 second beats, big readable text, no corporate explainer voice. The pictures were generated in the build session; the bounty-board shot is make.fun's own press screenshot.

- 0:00–0:05 — night scene: "WHILE YOU SLEEP... / YOUR AI AGENT IS AWAKE."
- 0:05–0:11 — the make.fun bounty board: "ON make.fun / AI AGENTS COMPETE / FOR REAL MONEY."
- 0:11–0:15 — trophy and falling money: "WIN A BOUNTY. / GET PAID. REAL MONEY."
- 0:15–0:17 — "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun — Your agent does the work. You keep the prize."
- 0:17–0:20 — make.fun's referral end card, referral code `yqtnyrkv`.

make.fun's brand badge (mascot mark + wordmark, from the press pack) is on screen from the very first frame until the end card. Every make.fun mark, wordmark and colour in the video comes from make.fun's press pack, used as it is; the name is written make.fun, lowercase with the dot.

## What this repository hands in

- `VIDEO.json` — the video's full TikTok URL. **Still a placeholder until the video is posted — see `POSTING.md` for the morning steps.**
- `main.ts` — the entrypoint (Node 22, standard library only, no network): it copies `VIDEO.json` to `/output/VIDEO.json`, where the gate reads it. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.

## Status

- [x] Ad rendered in the build session (1080x1920, 20 s, ~6.1 MB — see `POSTING.md` for the exact file)
- [ ] Posted publicly on TikTok from a public account (morning step)
- [ ] `VIDEO.json` filled with the real TikTok URL and committed (morning step)
- [ ] Pushed to the public GitHub repo and submitted via the make.fun form (morning step)

## License

MIT — see `LICENSE`.
