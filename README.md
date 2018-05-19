In another demo from the amazing Wes Bos's [JavaScript 30](https://javascript30.com) demo, we're using the [HTML `<video>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), but stripping the not-so-great default controls and installing our own, improved UI. Plus adding some features like skip ahead and playback scrubber.

Embedding a video is easy enough, but it'd be great to have a better handle on the viewing experience, especially if you've got multiple videos for your site—you can customize the UI to match your needs.

The controls—like sliders—seem a bit wonky cross-browser. Wes was awesome and provided the default styles, like he does for every exercise. His lesson didn't go into detail about the styles, but in looking at the stylesheet, there's a whole section marked "`unholy css to style input type="range" `". So that got me curious, and I spent some time dissecting those specific styles, which I go into below. This is going to be a loooooong post because I want to break down not just the script, but the styles too.

What I'm learning:

1. Working with HTML5 Video Player
2. Hiding the default controls, and creating custom ones, like skip ahead and playback speed control
3. Specifics of styling the video elements and `input` controls in Webkit browsers


Check out:

[My blog post](add link)

[Codepen](https://codepen.io/whyohengee/pen/RyEeMr?editors=0010)

[Github Pages](add link)