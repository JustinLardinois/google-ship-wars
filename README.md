My code from the [Google Ship Wars](http://shipwars.io:8080/) event at UCSC on
Friday, May 22, 2015.

Ship Wars is a browser game that Google uses at developer conferences and
university events. The player writes code to control a spaceship, and then
has their ship
[compete against other players](http://shipwars.io:8080/station.html).
Check out the [manual](http://shipwars.io:8080/game/manual.pdf)
[(archive)](http://web.archive.org/web/20150523023249/http://shipwars.io:8080/game/manual.pdf)
for more details.

My ship is designed to move at a constant speed, change direction randomly,
and shoot at the enemy ship whenever it comes within a distance ring or
enters a cone of view behind my ship. The erraticness of direction changes,
the size of the ring and cone, and whether the ring and cone are even used
can be controlled by tweaking the values of global variables.
