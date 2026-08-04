# CustomTube-Forever

**CustomTube lives on.** The original CustomTube was discontinued in favour of StarTube, but the layout engine that made it great didn't go anywhere — it just needed someone to keep it running. This is that fork.

What if you could just CHOOSE your YouTube layout? Well, you still can. CustomTube-Forever lets you use almost any YouTube layout from 2008–2021, and it keeps working as YouTube changes underneath it.

> This is a community-maintained fork of [lightbeam24/CustomTube](https://github.com/lightbeam24/CustomTube). All original credit goes to the original author; see [Credits](#credits) and the bundled `LICENSE`. Replace the repo links below with your own once you've pushed.

----

![Mainfull](https://github.com/lightbeam24/CustomTube/assets/105595945/e9e27f41-4587-4f4c-b505-525520a62e73)

## Why this fork is fast

CustomTube-Forever keeps the original's front-end-only design, and that's the whole point.

StarTube and similar successors rely on **Vorapis 2013 (V3)** — a backend layer that sits between you and YouTube, intercepting and rewriting API responses before the page ever sees them. That's powerful, but it's also overhead on every request.

CustomTube-Forever doesn't do any of that. It's CSS and DOM work, applied directly in the page. No backend interception layer, no proxy, no extra round-trips. That's what made the original feel snappy compared to backend-driven alternatives, and this fork keeps it that way.

If you missed how light the old CustomTube felt, that's what you're getting back.

## Installation

The fork isn't on the add-on stores yet, so for now you load it from source.

**Firefox (temporary install):**
1. Download or clone this repo.
2. Go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on** and select the `manifest.json` inside the `firefox` folder.

Temporary add-ons are removed when you close Firefox — that's expected during active development. A signed build for permanent install is on the to-do list.

For reference, the **original** CustomTube (not this fork) is still listed here:

[![Firefox](https://blog.mozilla.org/addons/files/2015/11/get-the-addon.png)](https://addons.mozilla.org/en-CA/firefox/addon/customtube/)
[![Chrome](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/RQMv2HZ0v6NKfFn7XCeU.png?auto=format&w=228)](https://chromewebstore.google.com/detail/customtube/iedffooliepgabiihipcbokboecnfcbe)

## Privacy

CustomTube-Forever does not collect user data, exactly as the original didn't. It's a layout tool; there's nothing to collect and no reason to.

## Compatible extensions

Tested alongside these extensions/scripts:

- [Return YouTube Dislike](https://github.com/Anarios/return-youtube-dislike)
- [Annotations Restored for YouTube](https://github.com/isaackd/AnnotationsRestored)
- [uBlock Origin](https://github.com/gorhill/uBlock)
- [Restore YouTube Username from Handle to Custom](https://greasyfork.org/en/scripts/468740-restore-youtube-username-from-handle-to-custom)

Running it with other extensions or scripts often causes issues and isn't recommended.

If you have a user agent switcher installed, make sure it's disabled on youtube.com — otherwise you may be stuck on the default 2017 layout.

## Screenshots

![ss1](https://github.com/lightbeam24/CustomTube/assets/105595945/90283c3b-86ae-419d-9663-be540a929349)

![ss2](https://github.com/lightbeam24/CustomTube/assets/105595945/3c7345bf-c1f8-4378-9c29-7e1fcab8822e)

![ss7](https://github.com/lightbeam24/CustomTube/assets/105595945/ebb24f00-fa78-4fd5-a9b2-21764056e7d4)

![ss3](https://github.com/lightbeam24/CustomTube/assets/105595945/80af9f04-307d-479a-b3e0-8aa3e479fb4e)

![2011layout](https://github.com/lightbeam24/CustomTube/assets/105595945/ebed9e8a-5061-42bb-be13-92f5d0c3f400)

![2008layout](https://github.com/lightbeam24/CustomTube/assets/105595945/5966a02a-a501-4629-8fb2-bd6fc7967d18)

*(These are the original author's showcase images, hotlinked from the upstream repo. You may want to re-host your own once the fork has diverged.)*

## Credits

- Original project: [lightbeam24/CustomTube](https://github.com/lightbeam24/CustomTube). This fork would not exist without it.
- Logo made by UnderscoreAngel. [GitHub page](https://github.com/UnderscoreAngel)
- CustomTube shares a small amount of code with YouTube Redux, namely the code for managing user settings.
- The beta version makes use of the [Return YouTube Dislike API](https://returnyoutubedislike.com).

## License

This fork retains the original project's license — see the `LICENSE` file included in each build folder.
