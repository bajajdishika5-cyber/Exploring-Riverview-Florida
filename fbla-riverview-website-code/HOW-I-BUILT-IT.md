# How I built this website — Explore Riverview, Florida
By Dishika Bajaj • FBLA Middle School • Exploring Website Design • 2026–2027

## The files — keep them together in one folder

| File | What it does — in simple words |
|---|---|
| `index.html` + 21 page files | The WORDS and PICTURES. One page per part of the visit — Home, Attractions, Events, Things to Do, Seasons, Food, and 15 more. Every heading, place, date, distance and link lives here. |
| `style.css` | The LOOK. Colours, fonts, sizes, boxes and layout. Change a colour here, the whole site changes. |
| `script.js` | The ACTIONS. 5 jobs, commented line by line: menu highlight, Secret Map filter, My Trip list, Day Trip finder, and back-to-top button. |

Open the site by double-clicking `index.html`. It opens in Chrome, Edge, Safari or Firefox. No install is needed.
Keep all the files in the same folder — if you move `index.html` alone, the colours and menu highlight will not load.

## How it was built — step by step

1. **Plan first, for a first-time visitor.** What would a stranger need in 1 minute? Riverview, on the Alafia River, near Tampa — then where to go, what to do, and how to plan.
2. **Write the content in rubric order.** Home → Attractions → Events → Things to Do → Seasons → Food → Day Trips → Secret Map → Plan Your Visit → Sources. That is the FBLA rating-sheet order, with the Secret Map as the extra that makes it stand out.
3. **Add real facts with real sources.** Showmen's Museum est. 2013, Alafia Scrub 80 acres, Bell Creek 477 acres, Triple Creek 1,200 acres, Busch Gardens 335 acres, Manatee Center record 2,100 manatees. Distances from MapSof and Rome2Rio — Clearwater 36.7 miles, Orlando 84.1 miles.
4. **Add day trips within 200 miles.** 13 places, nearest first: Clearwater Beach, Tarpon Springs (40 mi), Anna Maria Island (43 mi), St. Petersburg, LEGOLAND Florida, Weeki Wachee Springs, Sarasota, Orlando, Crystal River (84 mi), Kennedy Space Center, Fort Myers, Cocoa Beach, Daytona Beach (140 mi). Then add the Secret Map: 7 quests, 39 rare spots within 200 miles — Gibbons Preserve, Devil's Den, Caladesi Island, Caspersen Beach shark teeth, and bioluminescent kayaking.
5. **Style it.** River colours — teal green `#0b6b5a` and sunny orange `#ff8c42` — big headings, simple words, big real photos, cards for each place.
6. **Test it.** Click every menu link (22 pages, 0 missing). Check it on a phone, a tablet and a computer, in Chrome, Edge, Safari and Firefox. Test the code too: search 'cave' in the Secret Map (shows 1 spot — Devil's Den), pick the Islands quest (shows 5), pick 'Up to 15 miles' (shows 7), tap '+ My Trip' on Gibbons Preserve (My Trip becomes 1, and it stays saved after a reload), and type 'beach' in the Day Trip finder (shows 7 trips). All of that was tested and works.
7. **Keep a backup.** The competition-day folder has an offline multi-page copy (22 pages, all photos saved inside them) that works with no WiFi — open its `index.html`. This separate-code folder needs internet for its photos.

## 2-minute code tour — what to say when you show people the code

> "This is my website code. It is 3 kinds of files, not one big file, so I can show you how each part works.
>
> First, the page files, like `index.html` and `food.html`. These are the words. See here — `<h1>Explore Riverview, Florida</h1>` — that is the big title you see on the page. And here is a card for the Showmen's Museum, with the year 2013. If I change a word here, it changes on the website.
>
> Next, `style.css`. This is the look. See `background: #0b6b5a` — that is our river-teal colour. And this line makes the headings big. If I change this colour, the whole site changes colour.
>
> Last, `script.js`. This is the actions — 5 jobs, not 1. First, it lights up the menu link in yellow for the part you are on. Second, the Secret Map lets you search, pick a quest, and pick how far to go. Third, tap "+ My Trip" and it saves that spot to your trip list, even if you reload the page. Fourth, the Day Trip finder filters the table as you type. Fifth, a back-to-top button appears after you scroll down.
>
> That is it — words, look, and 5 small actions. Together they make a website that really works, not just a page to look at."

## A link that does NOT expire in 48 hours

Do NOT use a short-lived file link for next month — those links expire in about 48 hours.

For a permanent link, use one of these free options. Both keep the same folder of files, and the link stays up until you delete it.

### Easiest — Netlify Drop (no account needed to try, free)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder (`fbla-riverview-website-code`) onto the page.
3. Netlify gives you a link like `https://explore-riverview.netlify.app` — copy it.
4. That link does not expire in 48 hours. Test it on your phone, then write it on your closing slide and in your script.

### Also free and permanent — GitHub Pages
1. Make a free GitHub account, make a new repository called `explore-riverview`.
2. Upload the whole folder.
3. Go to Settings → Pages → Deploy from branch → Save.
4. Your link will be `https://YOUR-USERNAME.github.io/explore-riverview/` — it stays up until you delete the repository.

## On competition day — remember
- Demo the OFFLINE multi-page copy in the competition-day folder (open its `index.html`), not this folder and not a web link — internet may be unreliable and there is no electricity.
- Max 3 devices, only ONE facing the judges at a time. No projectors, no external speakers. Judges may see a link / QR code, but they may not click or scan it.
- Show the code files above only if a judge asks how you built it — the 7-minute talk is about the website, not the code.
