# Digitaltools
Digital tools to enhance Teaching, Learning and Assessment.

**Same Lesson, Every Learner** is the training space for the staff CPD session on Google for Education (Practice Sets, Interactive Video, Gemini in Classroom) and Wayground, aimed at FE college educators.

Live site: https://techntel4u.github.io/Digitaltools/

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Hub: join codes, today's question, three takeaways, and links to each step |
| `follow-along.html` | Step 1, during the session: each demo in running order, with click-paths |
| `choice-board.html` | Step 2, the 20-minute build: six tiles, inclusion challenges, stretch tasks |
| `explore.html` | Step 3, after the session: videos, help guides and certification, searchable |
| `wayground-guide.html` | The whole Wayground loop on one page, for new users |

## Editing

Plain HTML, no build step. Shared styles are in `assets/style.css` and small helpers (copy buttons, ticks, resource filters) in `assets/site.js`. Slide thumbnails for the demo lesson are in `assets/img/`, and the sample Wayground deck is in `downloads/`.

To change the Google Classroom code, search all pages for `brf3fe7o`.

## Ideas for your area (choice board)

The curriculum-area picker on `choice-board.html` is driven by `assets/areas.js`. To add or change an area, edit its entry in `AREAS` (ideas, AI prompt, Library search term and tools tip) and add its key to a group in `GROUPS`. A link such as `choice-board.html?area=maths` opens the page with that area already chosen.
