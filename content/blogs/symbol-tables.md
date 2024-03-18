+++
title = 'Symbol Tables'
date = 2024-03-09T13:55:43+05:30
draft = false
+++


|   |   |
|---|---|
|1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9|from manimlib import *<br><br>class SquareToCircle(Scene):<br>    def construct(self):<br>        circle = Circle()<br>        circle.set_fill(BLUE, opacity=0.5)<br>        circle.set_stroke(BLUE_E, width=4)<br><br>        self.add(circle)|

And run this command:

manimgl start.py SquareToCircle

A window will pop up on the screen. And then you can :

- scroll the middle mouse button to move the screen up and down
    
- hold down the z on the keyboard while scrolling the middle mouse button to zoom the screen
    
- hold down the s key on the keyboard and move the mouse to pan the screen
    
- hold down the d key on the keyboard and move the mouse to change the three-dimensional perspective.
    

Finally, you can close the window and exit the program by pressing q.

Run this command again:

manimgl start.py SquareToCircle -os