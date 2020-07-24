---
date: 2017-03-02
draft: true
---

# demo

**Note card** - the type of content that is fully displayed in the feed of the site - it is suitable for short notes (like this one), videos, podcasts, slides, etc.

Since this is markdown - here you can do _everything_ that allows you to do this format.

See below for examples of how you can use notes.

## Embed google presentation in a note

```HTML
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vThGw6fVolF-XuCkf9zru7Jdc4XTiUvc89ovDY3luRrfD0OUw3VVkoBJxe-NiM6jJ5q4egcRRQYU6i0/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
```

## Embed Codepen code in note

```HTML
<iframe height="565" style="width: 100%;" scrolling="no" title="Liquid button" src="https://codepen.io/electerious/embed/gOOLgjd?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/electerious/pen/gOOLgjd'>Liquid button</a> by Tobias Reich
  (<a href='https://codepen.io/electerious'>@electerious</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
```

## how to embed podcast in a note

In this case from simplecast, but you can use any other sources.

```HTML
<iframe
  height="200px"
  width="100%"
  frameborder="no"
  scrolling="no"
  seamless
  src="https://player.simplecast.com/62a1da0d-f39d-4d65-97d7-8faa48ae046f?dark=false"
></iframe>
```

This podcast on:

```HTML
<p>
<FontAwesomeIcon icon={['fab', 'google']} />&nbsp;<a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9YX3dTX1dZaA">Google Podcasts</a><br/>
<FontAwesomeIcon icon={['fab', 'apple']} />&nbsp;<a href="https://podcasts.apple.com/us/podcast/chats-with-kent-c-dodds/id1475543959">Apple Podcasts</a><br/>
<FontAwesomeIcon icon={['fab', 'spotify']} />&nbsp;<a href="https://open.spotify.com/show/7GkO2poedjbltWT5lduL5w">Spotify</a>
</p>
```

## How to embed YouTube videos in a link card

Link leads to this video on YouTube.

```MD
---
title: Video in Link Card
date: 2019-11-11
link: https://www.youtube.com/watch?v=7V6FFeZdFz4
tags: ['video', 'link']
---

<Embed
  src="https://www.youtube.com/embed/7V6FFeZdFz4"
/>
```

## Projects (any content with the "project" tag)

More about the `FeedItems` component in the docs: [gatsby-theme-chronoblog#feeditems-component](https://github.com/Chronoblog/gatsby-theme-chronoblog#feeditems-component)

This is convenient for creating pages with your works, portfolio, collecting articles of a certain subject in one place, etc.

If you do not need an extra page, just remove it from `src/pages/`, and remove link to this page from the main menu: `src/gatsby-theme-chronoblog/site-header.mdx`.

More about the additional site pages in the docs: [gatsby-theme-chronoblog#pages](https://github.com/Chronoblog/gatsby-theme-chronoblog#pages)
