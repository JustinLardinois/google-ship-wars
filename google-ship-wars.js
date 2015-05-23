function reset() {
	// how likely the ship is to randomly
	// change direction; should be < 1
	ERRATICNESS = 0.25;

	// how close to directly behind the enemy
	// ship has to be to fire
	FUDGE_FACTOR = 0.75;

	// how close the enemy should come before
	// firing
	SHOOTING_DISTANCE = 200;

	// if it should shoot when the enemy enters
	// a certain cone
	CONE = true;

	// if it should shoot when the enemy enters
	// a certain ring
	RING = true;

	warp(7);
}

function update() {
	// avoid moving in a straight line
	if(random() < ERRATICNESS)
	{
		turnTo(randomAngle());
	}

	if(CONE)
	{
		if(approx_eq(enemyBearing(),Math.PI,FUDGE_FACTOR))
		{
			fire(enemyBearing());
		}
	}

	if(RING)
	{
		if(enemyDistance() <= SHOOTING_DISTANCE)
		{
			fire(enemyBearing());
		}
	}
}

function approx_eq(value1,value2,delta)
{
	return value1 >= value2 - delta
		&& value1 <= value2 + delta;
}
