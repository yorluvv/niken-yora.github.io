# Portfolio Theme Template Map

Purpose: this file explains the project structure, what each file does, and how to reuse this portfolio as a template with a different visual theme.

## Project Snapshot

- Style: cinematic, soft, dreamy portfolio template
- Current theme: sunset sky / evening clouds
- Stack: HTML, CSS, Vanilla JavaScript, Chart.js
- Deployment: GitHub Pages

## What To Edit First

1. Edit `data/profile.js` for name, nickname, summary, and About copy.
2. Edit `data/projects.js` for project cards.
3. Edit `data/certs.js` for certificates and competitions.
4. Edit `data/skills.js` for radar chart values and skill labels.
5. Edit `data/blog.js` for blog or writeup entries.
6. Edit `index.html` and `style.css` only if you want to change structure, layout, or theme direction.

## How To Change The Theme

If you want to make the portfolio look different while keeping the same structure, change these first:

1. Update the color tokens in `style.css` under `:root`.
2. Replace the hero visuals in the top section of `index.html`.
3. Adjust the ambient background effects in `style.css` and `utils/particles.js`.
4. Swap accent language in titles, labels, and section tags.
5. Rework card surfaces, borders, and shadows so they match the new theme.
6. Keep the same content flow: hero, about, skills, credentials, projects, blog, contact.

Theme direction for this version:

- sunset sky
- soft evening clouds
- warm orange glow
- pink and purple horizon
- dreamy glass cards
- calm floating cloud particles

Visual references that fit this structure:

- langit senja dengan gradasi oranye, pink, ungu, dan biru gelap
- awan tipis yang bergerak pelan di background
- card transparan seperti glassmorphism
- border lembut seperti cahaya matahari sore
- efek partikel ringan seperti kabut atau awan kecil
- hero section dengan suasana tenang, hangat, dan cinematic

## Repo Layout

```text
portfolio/
|-- index.html
|-- style.css
|-- app.js
|-- plan.md
|-- README.md
|-- contoh.html
|-- data/
|   |-- profile.js
|   |-- projects.js
|   |-- certs.js
|   |-- skills.js
|   `-- blog.js
|-- components/
|   |-- renderProjects.js
|   |-- renderCerts.js
|   |-- renderSkills.js
|   |-- renderStats.js
|   `-- renderBlog.js
`-- utils/
    |-- animations.js
    |-- chart.js
    |-- filters.js
    |-- helpers.js
    `-- particles.js
```

## File Guide

### `index.html`

- Main page structure.
- Contains hero, about, skills, credentials, projects, blog, contact, and footer sections.
- For this theme, use wording and visuals related to sunset, sky, clouds, warm light, and calm atmosphere.
- Important mount points:
  - `#particles`
  - `#ticks-container`
  - `#skills-list`
  - `#skillsChart`
  - `#certs-grid`
  - `#projects-grid`
  - `#blog-grid`

### `style.css`

- Global theme, typography, layout, cards, ambient effects, and responsive rules.
- Use this file for spacing, color, surface treatment, motion, and mobile adjustments.
- This is the main file to swap when changing the visual theme.
- For the sunset sky theme, focus on:
  - warm sunset gradients
  - soft cloud-like surfaces
  - semi-transparent cards
  - glowing orange and pink accents
  - smooth shadows
  - calm floating animations

Suggested color direction:

```css
:root {
  --bg-deep: #1f2147;
  --bg-mid: #6d4bbd;
  --bg-warm: #ff7a59;
  --bg-soft: #ffd1a1;
  --text-main: #fff7ef;
  --text-muted: #f8d8c4;
  --accent: #ffb86b;
  --accent-pink: #ff8fb3;
  --card-bg: rgba(255, 255, 255, 0.14);
  --card-border: rgba(255, 255, 255, 0.28);
  --shadow: rgba(41, 24, 80, 0.35);
}
```

### `app.js`

- Main bootstrap file.
- Imports data modules, renders sections, and starts animations, filters, chart, and contact form behavior.
- Usually does not need major changes for the sunset theme unless you rename classes or add new animation behavior.

### `data/profile.js`

- Identity and profile copy.
- Use this for:
  - username
  - name
  - nickname
  - alias
  - summary
  - About text
- For this theme, profile copy can use softer wording such as calm, creative, warm, reflective, and atmospheric.

### `data/projects.js`

- Source data for project cards.
- Each item usually contains:
  - `category`
  - `type`
  - `title`
  - `desc`
  - `tags`
  - `link`
  - `cta`
- For this theme, project cards should look like floating panels above a sunset sky background.

### `data/certs.js`

- Source data for certificates and competitions.
- Each item usually contains:
  - `badge`
  - `issuer`
  - `name`
  - `related`
  - `status`
- The card style should use warm highlights and soft borders, like sunlight touching clouds.

### `data/skills.js`

- Skill labels and numeric levels.
- Used by the skill bars and the radar chart.
- The radar chart can use sunset-inspired accents such as orange, peach, pink, and purple.

### `data/blog.js`

- Blog/writeup entries.
- Each item usually contains:
  - `title`
  - `category`
  - `summary`
  - `link`
- Blog cards can use labels such as notes, reflections, sky log, or journal if you want the wording to match the sunset concept.

### `components/renderProjects.js`

- Renders project cards from `data/projects.js`.
- Keep the rendering logic the same.
- Only change classes if the new theme needs different visual styling.

### `components/renderCerts.js`

- Renders certificate cards from `data/certs.js`.
- Keep the same data-driven pattern.
- Use CSS to make each card match the sunset cloud style.

### `components/renderSkills.js`

- Renders skill bars from `data/skills.js`.
- Skill bars can be styled like glowing sunset lines or warm light trails.

### `components/renderStats.js`

- Renders profile stats if you decide to use them again later.
- Stats can be shown as small floating cloud cards or glowing sunset badges.

### `components/renderBlog.js`

- Renders blog cards from `data/blog.js`.
- Blog cards should keep the same structure while using softer surfaces and warm hover effects.

### `utils/chart.js`

- Builds the Chart.js radar chart from `data/skills.js`.
- Update chart colors to match the sunset palette.
- Suggested chart style:
  - line color: warm orange
  - fill color: transparent peach or pink
  - grid color: soft white transparency
  - label color: cream or light peach

### `utils/filters.js`

- Handles project filter buttons.
- Filter buttons can be styled like small sunset pills or cloud tabs.

### `utils/particles.js`

- Creates the ambient particle background.
- For this theme, change particle behavior into:
  - small drifting clouds
  - soft glowing dust
  - slow floating light particles
  - calm horizontal movement like wind
- Avoid underwater bubbles, dark sea particles, or cyber-style effects.

### `utils/animations.js`

- Handles navigation state, reveal animations, and skill animation triggers.
- Keep the same animation logic.
- Adjust animation feeling through CSS so elements appear softly, like clouds fading in during sunset.

### `utils/helpers.js`

- Shared helper functions for escaping and formatting content.
- Usually does not need changes for the theme.

## Edit Flow For A New Person

If someone wants to make this portfolio their own, follow this order:

1. Replace the values in `data/profile.js`.
2. Update projects in `data/projects.js`.
3. Update certificates in `data/certs.js`.
4. Update skills in `data/skills.js`.
5. Update blog entries in `data/blog.js`.
6. Change social links and contact info in `index.html`.
7. Decide the new theme direction.
8. Tweak `style.css` and `utils/particles.js` to match the new theme.
9. Adjust `index.html` only if the new theme needs a different hero structure or visual motif.

## Notes

- Keep the project simple and data-driven.
- Avoid changing the stack unless you really need to.
- If you add new content sections, keep the same pattern: data file -> render component -> mount point in HTML.
- This file is the quickest way to understand where each piece of content lives.
- Theme changes should mostly happen in `style.css`, not by rebuilding the whole layout from scratch.
- For this version, focus on changing the visual mood into sunset sky and clouds while keeping the original portfolio structure unchanged.
