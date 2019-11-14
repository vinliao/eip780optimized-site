## Notes to Jonas
After `npm i`, run `./node_modules/.bin/webpack index.js --mode=development --watch` to enable webpack and leave it running. The index.js file won't update if you don't run this.

## Notes to self
### Images details
1. First iteration is my attempt to design a form without prior design knowledge (it's super shitty)
2. After reading design book on design principle, I made the form align correctly and increase the contrast of the heading on the second iteration. Much better!
3. On the third iteration, I'm trying to contrast the heading with a black serif font. I also decrease the contrast of the labels, it's better but not much.
4. On the fourth iteration, I changed the heading into sans serif font and make it thicc (lato 900). Looks much better and more modern. I also changed the black background to hsl(0, 0%, 15%); to make it contrast less.

### Notes on visual heirarchy
One of the most important aspect when creating a website is visual hierarchy. Every element in a page has different importance, the level of importance depends on what I want the user to pay attention on. What I need to do as a site builder/designer is to make important element seem important so the user pay attention to that element.

One of the best way to make sometihng looks important is by using contrast. There are couple of important things I want the user to pay attention to in this page: the name of the algorithm that's being optimized, and the number of gas reduced. I increase the contrast of both by using black thick sans serif font on a black background. By doing so, I make the element dominates other element, and the user's attention will go there.

There's also other elements that is important but not as important as the dominant element, the secondary in terms of importance. In this case, it's the form submit button and the before and after numbers of the result. I contrast them, but not as much as the main element. In the former case, I just make it black background and changes color on hover, but it has a small serif font. On the latter case, I made the font size big, and surround it with smaller and faded out description around it.

The rest of the element that's not mentioned above is tertiary, it has the least importance out of all elements. This includes the form label, the number description and the back button at result page. I decrease the contrast of these elements so that the user won't pay much attention to it (it's not really important after all). I did that by fading out the text, and in the case of button, not using thick colors as background (only border).

By having these hierarchy of importance makes the site easier to understand. This is because I force their eyes to pay attention to things that's worth paying attention to. No or wrong visual hierarchy confuses the eyes, imagine the text "gas used" is a red color with 50px font size and 900 font weight, it confuses the eyes because it's not important. People's eyes will be confused when their attention is directed to things that are not important.

### Npm and webpack
One of the coolest challenge that I face as of this writing is to find out how to "import" web3 package into vanillajs. At the core of everything, to import something to a javascript file, I need to import the js file on the html, which will be available to javascript. Let's take the package `moment` for example.

If I want to use moment in vanilla js, I would just download moment, place it in my local folder and import that in my index.html file. A code example might be this:
`<script src="./moment.js"></script>`

Luckily, I don't need to manually search for the package moment, I can download it easily with the help of npm. After `npm install moment`, I can just do this on my html file.
`<script src="./node_modules/moment/moment.js"></script>`

Doing so will allow me to use moment in my js file. But there's a problem when I have multiple js package that I want to import, it will be a nuisance if I import it one by one in my html file. This is where webpack comes in. If we have our own js (e.g., index.js) then we use the require statement, it will show that require isn't available. Webpack solves this problem by taking the require statement and putting the content of the required package into a single file. This means we can "import" stuff from our js file, and use it in our browser. The cool thing about this webpack thing is that it takes all the imports that we make, then only output one file, which means we only have to have a single `<script>` tag in our html to import all our package in browser. 

Here's a simple code snippet to visualize what webpack does.

I have an index.js file that has these content.
```
var moment = require('moment');

console.log(moment);
```

But when I run those thing in the browser, it will spit out that it doesn't recognize require. This error occurs because we're using require in the browser. But we can process the index.js file with the help of webpack, which will output a single `main.js` file that will make the require statement browser compatible. I ran webpack by using `./node_modules/.bin/webpack index.js --mode=development`, which will take the index.js file and all the requires, then turn it into a browser compatible js file. In this case, it will be a `dist/main.js` file.

This means I can do
`<script src="./dist/mainjs"></script>` in my html file, which will have the console log that I written, and the moment variable. In summary, what webpack does is it "combines" packages and make it browser compatible, and this is the reason why front end development uses npm and node. At the end of the day, those requires when developing front end will be turned by webpack into browser compatible code.

Super cool!

### On babel
Now, after knowing what webpack does, how does babel fits in all these things? Babel just essentially transform (they use the term "transpile") es6 code into es5. It just basically turns `import` into `require`. After all the imports have been transpiled into require, then webpack will combine all the requires and spit out a single `/dist/main.js` file that we can import in our html file.

With npm, we can easily download and manage packages. With webpack, we can use the downloaded node packages, which are server-side packages and turn it into a browser compatible code. With babel, we can use advanced es6 features **(HELLO OBJECT DESCTRUCTURING :D)** without worrying about browser compatibility.

God dammit, now I understand how babel and webpack plays in front end development. It's such a cool thing!