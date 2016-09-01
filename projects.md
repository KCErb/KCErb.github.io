---
layout: page
title: projects
permalink: /projects/
order: 3
date: 2015-08-24
---

<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <img src="/images/baby.png" alt="baby opening an eigenclass mid-yawn" class="img-responsive">
  </div>
</div>

<p class="lead" style="padding-top: 20px;">
  Programming is my favorite thing to do in my spare-time, but it didn't start that way.
</p>
My first introduction to programming was through Mathematica and MATLAB (being a physics
student and all), and my experiences there can be summed up by this actual quote from
one of my textbooks.

<blockquote class="blockquote">
  <p>
    When coding physics, don’t follow the computer science convention of making your code more “readable” by using long variable names ...
  </p>
  <p>
    If you program like this, your code won’t match the math, you’ll drive yourself crazy with typos, and you’ll end to [sic] your programming career prematurely due to repetitive-stress injury.
  </p>
  <footer>
    <a href="https://www.physics.byu.edu/courses/computational/phys330/matlab.pdf">
      <cite title="Introdcution to MATLAB">Introduction to MATLAB</cite> pg. 14
    </a>
  </footer>
</blockquote>

Wow. The whole textbook is full of variables like `a` and functions like `pfft`. From these few sad semesters my impression of "writing code" was enough to keep me away from it for good.

Or so I thought.

### A Project

In the following years I often needed to write little bits of software for my research. I had a soft-spot for Mathematica so I did **everything** in that language. As I grew to realize the utility of writing software, I found myself writing more and more Mathematica code to do things that Mathematica was never intended to do. One day I was showing my code to a cousin who laughed at my bank of CSV files calling it a "poor man's database". "Data-what?" I thought. *There was a thing for doing this?*

Shortly after that leaning tower of copypasta came tumbling down, a good friend introduced me to ["the poignant guide"](https://en.wikipedia.org/wiki/Why%27s_(poignant)_Guide_to_Ruby). From there, I learned about Shoes and found a strange transformation taking place inside my brain. My then girlfriend (now wife) would take a bathroom break on a date and out would come my laptop to finish typing that last method I'd been crafting. At the time I wasn't sure how to cope with my new identity but now I'm a happy Ruby addict and my journey has
taken me through all the familiar paths: rails, HTML, CSS, JS, git, relational-databases etc. In the meantime the physics world put me in contact with C, OpenCL, C++, Python, and yes even a little FORTRAN. Most recently I've been digging into the murky depths of PHP as I've been building some Drupal modules at work.

### A Highly Portable Folio

Since that turning point, I've spent hundreds of hours on a handful of projects. One could basically see all of my work by just visiting my github profile: [github.com/KCErb](https://github.com/KCErb). But if you're interested in a guided tour, read on and click the links!

#### Apps

The common thread through all of my hobby projects has been app writing. [Shoes](http://shoesrb.com/) was my first love and my most recent projects are still aimed at helping the Shoes project. The motivation for working on Shoes and later building an app in rails was to build better tools for doing my church assignments like [home teaching](https://en.wikipedia.org/wiki/Home_teaching) or working with church records. I've always found it very rewarding to dream up an interface and then implement it from model to view to controller. Here's what my first rails app (built in late 2014) looked like:

<div class="row">
  <div class="col-md-6">
    <img src="/images/design1.png" class="img-responsive" alt="tracker table">
  </div>
  <div class="col-md-6">
    <img src="/images/design2.png" class="img-responsive" alt="tracker modal">
  </div>  
</div>

<br>
This was one that my bishop needed to help keep track of people in our local congregation.
At the time, we lived near downtown Salt Lake and were coordinating a lot of volunteer work
for a very transient group. The tracker helped keep track of who we'd met, how long ago, and details about the visit.

Sadly that project has been dying a slow death from lack of testing, and I'm now in the process of
building it the right way: BDD FTW!

#### Tutorials

In the last few months, I've been focusing my efforts on tutorial writing. I've learned from my time
teaching physics that one of the best ways to master a topic is to teach it.

<img src="/images/so-wrong.gif" alt="right? wrong." class="img-responsive">

So if my goal is to learn mobile app-development and to master Shoes, then I should try to teach it to someone. The [Shoes tutorials](http://kcerb.com/cordwainer/), for example, have taught me about excellent gem structure as I've been digging through some of the structure of the Shoes project. My [RubyMotion tutorials](http://kcerb.com/fruit-robot/) on the other hand have taught me a familiarity with the basics of Objective-C and Java.

Before I started working with RubyMotion, I used [Ruboto](http://ruboto.org/) to get started with App development and so I have some of [my very first tutorials](http://kcerb.com/hello-ruboto/) about that hosted here as well.

#### Other Projects

Outside of learning app development, I've been writing more and more MATLAB code (against my will) in the last year since I've started working in image processing. Though a lot of that code is still private (it isn't published in a journal, so I can't share it yet) the parts I'm allowed to make public, I plan to put in the [bread project](https://github.com/bread) which right now just hosts the Ruby tool I used to make my scientific-poster. I have grand
dreams of someday building `bread` into a proper Ruby-based infrastructure for modern software science. It'll support everything from data-acquisition to final presentation tools. Heck Crystal might even play a role! But for now, I'll have to settle for using what's available to do my classwork and keep dreaming.

Lastly, there's one other project to mention: the [card drafter](https://github.com/odds-and-ends/card_drafter). This little tool has been in development as I've worked on a game with some of my friends. We needed a little something to quickly iterate cards during the drafting process so I threw that together and with the right motivation might try to make it more general purpose than it currently is.


#### A Job

Recently, I've picked up a part-time job doing web development for a company in Salt Lake: lolo llc. They have a few contracts out for other e-commerce businesses and have a suite of their own apps in exercise / fitness. I've mostly sub-contracted with them but recently was pulled on staff for a new contract of theirs that is very hush-hush for now. I'm having a great time solving problems, learning new skills, and writing code that I'm proud of.
