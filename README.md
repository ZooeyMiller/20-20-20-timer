## How do I use it?
1. Run `npm install -g 20-20-20-timer`
2. To start the timer run `twenty` in your terminal, and press `ctrl+c` to end the process. 
3. If you want your prompt back straight away you can run `twenty &`, and the timer will run in the background.
  * to bring it back into the foreground you can run `fg`
  * once it's in the foreground you can press `ctrl+c` as normal to end the process.

## Why?
Students at Founders and Coders are encouraged to engage in what we call 20-20-20 which is a way to deal with problems when we get stuck. Spend 20 minutes on your own/in your pair working on a problem, when that time is up you ask members of your cohort to help you out for 20 minutes, and when that time is up you spend 20 minutes with a mentor trying to solve the problem.<br>My trouble is, I never do this, I never acknowledge when 20 minutes has passed, I want an app to help me do this!

## What?
A command line app written in node.js, which will give desktop notifications at 20 minute intervals to let you know when to ask your cohort members or mentors

## How?

Using a setInterval to check the time passed since the process was started with the Javascript date object, and using the [node-notifier](https://www.npmjs.com/package/node-notifier) module for cross platform desktop notifications at 20 minute intervals.

## Basic plan

* run a terminal command, something like "twenty --start" -> Get a desktop notification saying "timer started, good luck"
* After 20 minutes pass get a desktop notification saying "your twenty minutes is up! ask a cohort member"
* after another 20 minutes get a desktop notification saying "another twenty minutes is up! ask a mentor"
* after the final 20 minutes is up get a desktop notification saying "the whole of the 20/20/20 is up, the timer has been reset. Hoep you found a solution!"
* run "twenty --stop" to stop, get a notification saying "problem solved! good job"
