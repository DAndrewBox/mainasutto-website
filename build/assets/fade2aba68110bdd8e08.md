## What a nice day for updates for god sake!

What should I say?, this week I did a lot of things to the game, and more than you expected! (maybe)

---

So, first of all, I implemented a **Bloom Shader** to the game in certain rooms (actually I want to use only on special moments or cutscenes of the game), I don't find the post from where I found the shader, but when I find it, I'll edit this post. :smiley:
Anyway, wasted almost 2 hours implementing the shader to my engine and make it work in a very small resolution (256x192), and after testing it with the actual most "powerful" animation in the game, the Save Game animation, whichs creates 144 particles every ~0.25sec, and this was the result with diverse quanty of particles activated on a very low specs PC (about a 2012 specs PC).

<div class="image-container">
<iframe width="640" height="385" src="https://www.youtube.com/embed/BHCrkzZU1uE" title="Devclip || Mainasutto (v0.45) - Save Animation (ON VERY LOW SPECS PCs)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

(100% vs 75% vs 50% particles w/Shader & w/o Shader)

</div>

After that, I fixed and added some extra frames to the jumping and falling animation to the Player to make it feel more alive. Also changing the crappy old jumping sound to one more "expected" to this kind of game. And the result is this:

<div class="image-container">

![Jump Animation](http://i.imgur.com/XYew91A.gif)

(New jump animation frames)

</div>

Actually I want to add some new frames to walk and run animation.
Also!, on my way to make the technical demo, **I was doing some mockups of the rooms**, and there are two of them, the main menu screen and maybe the boss fight room, I'll program it later. :smiley:

<div class="image-container">

![](http://i.imgur.com/8lcDndu.png)

(Boss Room?)

</div>

I did this today, but I was thinking on add some animations similar to the pause menu on this screen.

<div class="image-container">

![](http://i.imgur.com/p028rDe.png)

(Technical demo main menu)

</div>

Also, after a lot of coding and having fun with the particle effects of the save point, I made a **level up animation** and totally implemented in it. here is how it actually works.

```gml
// if Player name if less than 99, then:
HP_MAX = HP_MAX + 15;
STR = floor(STR + (1 + LVL)_(1/1.5));
DEF = ceil(DEF + (1 + LVL)_(1/2));
LCK = LCK + random_range(0.50,1);

// But INT works different:
if LVL mod 5 == 0 {
INT = INT+1;
};

// All valors clamped to a max of 999.
```

INT ~~ironically~~ actually makes the stamina grow on 5 by every 5 levels; and LCK regulate your drop chance and possibility of critical hits.
The animation looks like this btw:

<div class="image-container">

![](http://i.imgur.com/L8DZaEo.gif)

(Level Up Animation)

</div>

Also, few hours ago I painted with the PaintChainer algorithm some old sketches and **conceptual art to a physical case of the game**. These actually didn't look good at all, but it's something

<div class="grid-50-50">
<div class="image-container">

![](http://i.imgur.com/kctWift.jpg)

</div>

<div class="image-container">

![](http://i.imgur.com/KhzDsu7.jpg)

</div>
</div>

---

Aaaaand... That's all for this week.
Probably next week I won't post an update 'coz I have family issues and this week I won't be able to make much advance on the game~

So... See you in 2 weeks, maybe on 2 or 3 weeks I'll upload the demo :shrug:

By the way!, I'm making a Game Design Document (GDD) of the game :smiley:
