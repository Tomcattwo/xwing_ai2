// ****************************************************************************
// X-Wing Miniatures AI - Ships 2nd Generation
// Generated: 2020-05-19 20:39:36

var VERSION = "2.0.2";


// ****************************************************************************
// Alpha-Class Star Wing

var alpha = {};
alpha.name = "Alpha-Class Star Wing";
alpha.image = "img/alpha.png";
alpha.faction = "Empire";
alpha.simple = [ F(1), BL(2), F(2), BR(2) ];
alpha.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), F(3), BR(3), TR(3) ];
alpha.difficult = [ F(4) ];
alpha.actions = [ 'TARGET_LOCK', 'FOCUS', 'SLAM', 'RELOAD' ];

alpha.closing = [];
alpha.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
alpha.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
alpha.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
alpha.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
alpha.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
alpha.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

alpha.away = [];
alpha.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
alpha.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
alpha.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
alpha.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
alpha.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
alpha.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

alpha.far = [];
alpha.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
alpha.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
alpha.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
alpha.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

alpha.stressed = [];
alpha.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
alpha.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
alpha.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
alpha.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
alpha.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
alpha.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// ARC-170 Starfighter

var arc170 = {};
arc170.name = "ARC-170 Starfighter";
arc170.image = "img/ship_arc170.png";
arc170.faction = "Rebel";
arc170.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
arc170.normal = [ TL(2), TR(2), BL(3), F(3), BR(3) ];
arc170.difficult = [ TR(3), TL(3), F(4), K(4) ];
arc170.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

arc170.closing = [];
arc170.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
arc170.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
arc170.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
arc170.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
arc170.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
arc170.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
arc170.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
arc170.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

arc170.away = [];
arc170.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
arc170.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
arc170.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
arc170.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
arc170.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
arc170.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
arc170.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
arc170.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

arc170.far = [];
arc170.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
arc170.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
arc170.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
arc170.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
arc170.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
arc170.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
arc170.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
arc170.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

arc170.stressed = [];
arc170.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
arc170.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
arc170.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
arc170.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
arc170.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// ARC-170 Starfighter

var arc170R = {};
arc170R.name = "ARC-170 Starfighter";
arc170R.image = "img/arc170.png";
arc170R.faction = "Republic";
arc170R.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
arc170R.normal = [ TL(2), TR(2), BL(3), F(3), BR(3) ];
arc170R.difficult = [ TR(3), TL(3), F(4), K(4) ];
arc170R.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

arc170R.closing = [];
arc170R.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
arc170R.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
arc170R.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
arc170R.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
arc170R.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
arc170R.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
arc170R.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
arc170R.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

arc170R.away = [];
arc170R.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
arc170R.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
arc170R.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
arc170R.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
arc170R.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
arc170R.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
arc170R.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
arc170R.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

arc170R.far = [];
arc170R.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
arc170R.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
arc170R.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
arc170R.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
arc170R.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
arc170R.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
arc170R.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
arc170R.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

arc170R.stressed = [];
arc170R.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
arc170R.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
arc170R.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170R.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170R.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
arc170R.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
arc170R.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
arc170R.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Auzituck Gunship

var auzituck = {};
auzituck.name = "Auzituck Gunship";
auzituck.image = "img/auzituck.png";
auzituck.faction = "Rebel";
auzituck.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
auzituck.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
auzituck.difficult = [ STA(0) ];
auzituck.actions = [ 'FOCUS', 'BARREL_ROLL_D', 'REINFORCE' ];

auzituck.closing = [];
auzituck.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
auzituck.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
auzituck.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
auzituck.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
auzituck.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
auzituck.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

auzituck.away = [];
auzituck.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
auzituck.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
auzituck.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
auzituck.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
auzituck.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
auzituck.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

auzituck.far = [];
auzituck.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
auzituck.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
auzituck.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
auzituck.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

auzituck.stressed = [];
auzituck.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
auzituck.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
auzituck.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
auzituck.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// RZ-1 A-Wing

var awing = {};
awing.name = "RZ-1 A-Wing";
awing.image = "img/awing.png";
awing.faction = "Rebel";
awing.simple = [ F(2), F(3), F(4), F(5), TL(2), BL(2), BR(2), TR(2) ];
awing.normal = [ TL(1), TL(3), BL(3), BR(3), TR(1), TR(3) ];
awing.difficult = [ SLL(3), K(5), SLR(3) ];
awing.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE' ];

awing.closing = [];
awing.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(5), SLR(3) ];
awing.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
awing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(3) ];
awing.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), SLR(3) ];
awing.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
awing.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), SLL(3) ];
awing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(3) ];
awing.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

awing.away = [];
awing.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
awing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
awing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
awing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), SLL(3), SLR(3) ];
awing.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
awing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), SLR(3), SLL(3) ];
awing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
awing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

awing.far = [];
awing.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
awing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
awing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
awing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
awing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), SLR(3) ];
awing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
awing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
awing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

awing.stressed = [];
awing.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
awing.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
awing.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
awing.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
awing.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
awing.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
awing.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
awing.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Belbullab-22 Heavy Starfighter

var belbullab = {};
belbullab.name = "Belbullab-22 Heavy Starfighter";
belbullab.image = "img/belbullab-22.png";
belbullab.faction = "Seperatist";
belbullab.simple = [ BL(2), F(2), BR(2), F(3) ];
belbullab.normal = [ TL(1), BL(1), BR(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4), F(5) ];
belbullab.difficult = [ TL(3), TR(3), SLL(3), SLR(3) ];
belbullab.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2FOCUS_D', 'BOOST2FOCUS_D' ];

belbullab.closing = [];
belbullab.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), SLL(3), SLL(3) ];
belbullab.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
belbullab.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
belbullab.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
belbullab.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(5), BR(2), BR(2), BR(3), BR(3), TR(3) ];
belbullab.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
belbullab.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
belbullab.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

belbullab.away = [];
belbullab.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
belbullab.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
belbullab.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
belbullab.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), SLL(3), SLR(3), SLR(3) ];
belbullab.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
belbullab.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), SLR(3), SLL(3), SLL(3) ];
belbullab.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
belbullab.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

belbullab.far = [];
belbullab.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
belbullab.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
belbullab.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
belbullab.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
belbullab.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
belbullab.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
belbullab.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
belbullab.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

belbullab.stressed = [];
belbullab.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
belbullab.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
belbullab.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
belbullab.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
belbullab.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
belbullab.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
belbullab.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
belbullab.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// A/SF-01 B-Wing

var bwing = {};
bwing.name = "A/SF-01 B-Wing";
bwing.image = "img/bwing.png";
bwing.faction = "Rebel";
bwing.simple = [ BL(1), F(1), F(2), F(3), BR(1) ];
bwing.normal = [ TL(2), BL(2), BR(2), TR(2),  ];
bwing.difficult = [ TRL(1), TL(1), BL(3), F(4), BR(3), TR(1), TRR(1), K(2) ];
bwing.actions = [ 'TARGET_LOCK', 'BARREL_ROLL', 'FOCUS2BARREL_ROLL_D' ];

bwing.closing = [];
bwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(2), TRR(1) ];
bwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
bwing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), TRR(1) ];
bwing.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), TRR(1) ];
bwing.closing[4] = [ TL(2), F(4), TR(2), K(2), K(2), TRL(1), TRL(1), TRR(1), TRR(1), TRR(1) ];
bwing.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), TRL(1) ];
bwing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), TRL(1) ];
bwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

bwing.away = [];
bwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
bwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bwing.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
bwing.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), TRL(1), TRR(1) ];
bwing.away[4] = [ TL(2), TR(2), TR(2), K(2), K(2), TRL(1), TRL(1), TRR(1), TRR(1), TRR(1) ];
bwing.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), TRR(1), TRL(1) ];
bwing.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
bwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

bwing.far = [];
bwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
bwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bwing.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(2), TRR(1) ];
bwing.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bwing.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

bwing.stressed = [];
bwing.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
bwing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
bwing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bwing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bwing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// CR90 Corellian Corvette

var corvette = {};
corvette.name = "CR90 Corellian Corvette";
corvette.image = "img/corvette.png";
corvette.faction = "Rebel";
corvette.simple = [ BL(2), F(2), BR(2), F(3) ];
corvette.normal = [ BL(1), F(1), BR(1) ];
corvette.difficult = [ BL(0), STA(0), BR(0), BL(3), BR(3), F(4), F(5) ];
corvette.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE_D', 'REINFORCE', 'JAM' ];

corvette.closing = [];
corvette.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
corvette.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
corvette.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
corvette.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
corvette.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
corvette.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
corvette.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
corvette.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

corvette.away = [];
corvette.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
corvette.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
corvette.away[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
corvette.away[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
corvette.away[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
corvette.away[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
corvette.away[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
corvette.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

corvette.far = [];
corvette.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
corvette.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
corvette.far[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
corvette.far[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
corvette.far[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
corvette.far[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
corvette.far[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
corvette.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

corvette.stressed = [];
corvette.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
corvette.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
corvette.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// C-ROC Cruiser (Syndicate Smugglers)

var crocscum = {};
crocscum.name = "C-ROC Cruiser (Syndicate Smugglers)";
crocscum.image = "img/croc.png";
crocscum.faction = "Scum";
crocscum.simple = [ F(1), F(2) ];
crocscum.normal = [ BL(1), BR(1), BL(2), BR(2), F(3) ];
crocscum.difficult = [ BL(0), STA(0), BR(0), BL(3), BR(3), F(4), F(5) ];
crocscum.actions = [ 'TARGET_LOCK', 'FOCUS', 'REINFORCE_D', 'COORDINATE_D', 'JAM' ];

crocscum.closing = [];
crocscum.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
crocscum.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
crocscum.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
crocscum.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
crocscum.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
crocscum.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
crocscum.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
crocscum.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

crocscum.away = [];
crocscum.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
crocscum.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
crocscum.away[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocscum.away[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocscum.away[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
crocscum.away[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocscum.away[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocscum.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

crocscum.far = [];
crocscum.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
crocscum.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
crocscum.far[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocscum.far[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocscum.far[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
crocscum.far[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocscum.far[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocscum.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

crocscum.stressed = [];
crocscum.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
crocscum.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
crocscum.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
crocscum.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
crocscum.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
crocscum.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
crocscum.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
crocscum.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// C-ROC Cruiser (Seperatist Privateers)

var crocsep = {};
crocsep.name = "C-ROC Cruiser (Seperatist Privateers)";
crocsep.image = "img/croc.png";
crocsep.faction = "Seperatist";
crocsep.simple = [ F(1), F(2) ];
crocsep.normal = [ BL(1), BR(1), BL(2), BR(2), F(3) ];
crocsep.difficult = [ BL(0), STA(0), BR(0), BL(3), BR(3), F(4), F(5) ];
crocsep.actions = [ 'TARGET_LOCK', 'FOCUS', 'JAM', 'REINFORCE_D', 'COORDINATE_D' ];

crocsep.closing = [];
crocsep.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
crocsep.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
crocsep.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
crocsep.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
crocsep.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
crocsep.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
crocsep.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
crocsep.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

crocsep.away = [];
crocsep.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
crocsep.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
crocsep.away[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocsep.away[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocsep.away[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
crocsep.away[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocsep.away[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocsep.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

crocsep.far = [];
crocsep.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
crocsep.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
crocsep.far[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocsep.far[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
crocsep.far[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
crocsep.far[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocsep.far[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
crocsep.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

crocsep.stressed = [];
crocsep.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
crocsep.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
crocsep.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
crocsep.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
crocsep.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
crocsep.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
crocsep.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
crocsep.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// Customized YT-1300 Light Freighter

var custfalcon = {};
custfalcon.name = "Customized YT-1300 Light Freighter";
custfalcon.image = "img/lando_falcon.png";
custfalcon.faction = "Scum";
custfalcon.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
custfalcon.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
custfalcon.difficult = [ SLL(3), SLR(3), K(4) ];
custfalcon.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'BOOST_D' ];

custfalcon.closing = [];
custfalcon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(3) ];
custfalcon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
custfalcon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLR(3) ];
custfalcon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), SLR(3) ];
custfalcon.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
custfalcon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), SLL(3) ];
custfalcon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLL(3) ];
custfalcon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

custfalcon.away = [];
custfalcon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
custfalcon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
custfalcon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
custfalcon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(3), SLR(3) ];
custfalcon.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
custfalcon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(3), SLL(3) ];
custfalcon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
custfalcon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

custfalcon.far = [];
custfalcon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
custfalcon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
custfalcon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
custfalcon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
custfalcon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(3) ];
custfalcon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
custfalcon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
custfalcon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

custfalcon.stressed = [];
custfalcon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
custfalcon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
custfalcon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
custfalcon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
custfalcon.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
custfalcon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
custfalcon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
custfalcon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// VT-49 Decimator

var decimator = {};
decimator.name = "VT-49 Decimator";
decimator.image = "img/decimator.png";
decimator.faction = "Empire";
decimator.simple = [ BL(1), F(1), F(2), BR(1) ];
decimator.normal = [ TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
decimator.difficult = [ TL(1), TR(1) ];
decimator.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'COORDINATE_D', 'REINFORCE' ];

decimator.closing = [];
decimator.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
decimator.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
decimator.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
decimator.closing[3] = [ BR(1), BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
decimator.closing[4] = [ TL(2), TL(3), TL(3), F(3), F(4), F(4), TR(2), TR(2), TR(3), TR(3) ];
decimator.closing[5] = [ BL(1), BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
decimator.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
decimator.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

decimator.away = [];
decimator.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
decimator.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
decimator.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
decimator.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.away[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
decimator.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
decimator.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

decimator.far = [];
decimator.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
decimator.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
decimator.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
decimator.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

decimator.stressed = [];
decimator.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
decimator.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
decimator.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
decimator.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Delta-7 Aethersprite

var delta7 = {};
delta7.name = "Delta-7 Aethersprite";
delta7.image = "img/delta-7.png";
delta7.faction = "Republic";
delta7.simple = [ BL(1), BR(1), BL(2), F(2), BR(2), F(3) ];
delta7.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4), F(5) ];
delta7.difficult = [ SLL(2), SLR(2), K(4), K(5) ];
delta7.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE_F' ];

delta7.closing = [];
delta7.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), SLL(2) ];
delta7.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
delta7.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLL(2) ];
delta7.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLL(2) ];
delta7.closing[4] = [ TL(2), F(5), TR(2), K(4), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2) ];
delta7.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLR(2) ];
delta7.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLR(2) ];
delta7.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

delta7.away = [];
delta7.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
delta7.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
delta7.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
delta7.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(2), SLR(2) ];
delta7.away[4] = [ TL(2), TR(2), TR(2), K(4), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2) ];
delta7.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(2), SLL(2) ];
delta7.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
delta7.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

delta7.far = [];
delta7.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
delta7.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
delta7.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
delta7.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
delta7.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(5), SLR(2) ];
delta7.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
delta7.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
delta7.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

delta7.stressed = [];
delta7.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
delta7.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
delta7.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
delta7.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
delta7.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
delta7.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
delta7.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
delta7.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Escape Craft

var escape = {};
escape.name = "Escape Craft";
escape.image = "img/escape_craft.png";
escape.faction = "Scum";
escape.simple = [ BL(1), F(1), BR(1), F(2) ];
escape.normal = [ BL(2), BR(2), BL(3), F(3), BR(3) ];
escape.difficult = [ STA(0), TL(2), TR(2), K(3) ];
escape.actions = [ 'FOCUS', 'BARREL_ROLL', 'COORDINATE_D' ];

escape.closing = [];
escape.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), K(3), K(3), STA(0), STA(0) ];
escape.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
escape.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
escape.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
escape.closing[4] = [ BL(2), BL(3), BL(3), F(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
escape.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
escape.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
escape.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

escape.away = [];
escape.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
escape.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
escape.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
escape.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
escape.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
escape.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
escape.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
escape.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

escape.far = [];
escape.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
escape.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
escape.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
escape.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
escape.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
escape.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
escape.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
escape.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

escape.stressed = [];
escape.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
escape.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3) ];
escape.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
escape.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
escape.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
escape.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
escape.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
escape.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3) ];

// ****************************************************************************
// E-Wing

var ewing = {};
ewing.name = "E-Wing";
ewing.image = "img/ewing.png";
ewing.faction = "Rebel";
ewing.simple = [ F(1), BL(1), F(2), BR(1), F(3), F(4) ];
ewing.normal = [ BL(2), BR(2), TL(2), TR(2), BL(3), BR(3), TL(3), TR(3), F(5) ];
ewing.difficult = [ TL(1), TR(1), SLL(3), SLR(3), K(4) ];
ewing.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2LOCK_D', 'BOOST2LOCK_D', 'EVADE' ];

ewing.closing = [];
ewing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(3) ];
ewing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
ewing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ewing.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ewing.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ewing.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ewing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ewing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

ewing.away = [];
ewing.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
ewing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ewing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ewing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(3), SLR(3) ];
ewing.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ewing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(3), SLL(3) ];
ewing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ewing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ewing.far = [];
ewing.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
ewing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ewing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(3) ];
ewing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ewing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ewing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ewing.stressed = [];
ewing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(5) ];
ewing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
ewing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
ewing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ewing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ewing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Modified YT-1300 Light Freighter

var falcon = {};
falcon.name = "Modified YT-1300 Light Freighter";
falcon.image = "img/falcon.png";
falcon.faction = "Rebel";
falcon.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
falcon.normal = [ TL(2), TL(3), BL(1), BL(3), F(4), BR(1), BR(3), TR(2), TR(3) ];
falcon.difficult = [ SLL(3), SLR(3), K(4) ];
falcon.actions = [ 'TARGET_LOCK', 'FOCUS', 'BOOST_D', 'ROTATE_ARC' ];

falcon.closing = [];
falcon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(3) ];
falcon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
falcon.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLR(3) ];
falcon.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), SLR(3) ];
falcon.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
falcon.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), SLL(3) ];
falcon.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLL(3) ];
falcon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

falcon.away = [];
falcon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
falcon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
falcon.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
falcon.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(3), SLR(3) ];
falcon.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
falcon.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(3), SLL(3) ];
falcon.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
falcon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

falcon.far = [];
falcon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
falcon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
falcon.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
falcon.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
falcon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(3) ];
falcon.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
falcon.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
falcon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

falcon.stressed = [];
falcon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
falcon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
falcon.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
falcon.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
falcon.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
falcon.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
falcon.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
falcon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Fang Fighter (Protectorate)

var fang = {};
fang.name = "Fang Fighter (Protectorate)";
fang.image = "img/ship_protectorate.png";
fang.faction = "Scum";
fang.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
fang.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
fang.difficult = [ K(4), TRL(2), TRR(2) ];
fang.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2FOCUS_D', 'BOOST2FOCUS_D' ];

fang.closing = [];
fang.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), TRR(2) ];
fang.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
fang.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRR(2) ];
fang.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRR(2) ];
fang.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
fang.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRL(2) ];
fang.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRL(2) ];
fang.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

fang.away = [];
fang.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
fang.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
fang.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
fang.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(2), TRR(2) ];
fang.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
fang.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(2), TRL(2) ];
fang.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
fang.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

fang.far = [];
fang.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
fang.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
fang.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
fang.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
fang.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(2) ];
fang.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
fang.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
fang.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

fang.stressed = [];
fang.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
fang.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
fang.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
fang.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
fang.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
fang.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
fang.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
fang.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Fireball Racer

var fireball = {};
fireball.name = "Fireball Racer";
fireball.image = "img/Fireball.png";
fireball.faction = "Resistance";
fireball.simple = [ BL(1), F(1), BR(1), F(2) ];
fireball.normal = [ TL(1), TR(1), TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
fireball.difficult = [ TL(3), TR(3), F(4), TRL(3), TRR(3) ];
fireball.actions = [ 'FOCUS', 'BARREL_ROLL', 'SLAM', 'EVADE' ];

fireball.closing = [];
fireball.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), TRL(3), TRL(3) ];
fireball.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
fireball.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TRL(3), TRL(3) ];
fireball.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TRL(3), TRL(3) ];
fireball.closing[4] = [ TL(3), F(4), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
fireball.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TRR(3), TRR(3) ];
fireball.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TRR(3), TRR(3) ];
fireball.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

fireball.away = [];
fireball.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
fireball.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
fireball.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
fireball.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRR(3), TRR(3) ];
fireball.away[4] = [ TL(3), TR(3), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
fireball.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRL(3), TRL(3) ];
fireball.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
fireball.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

fireball.far = [];
fireball.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
fireball.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
fireball.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
fireball.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
fireball.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), TRR(3), TRR(3) ];
fireball.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
fireball.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
fireball.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

fireball.stressed = [];
fireball.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
fireball.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
fireball.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
fireball.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
fireball.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
fireball.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
fireball.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
fireball.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Firespray-31 (Scum)

var firesprays = {};
firesprays.name = "Firespray-31 (Scum)";
firesprays.image = "img/slave1.png";
firesprays.faction = "Scum";
firesprays.simple = [ F(1), F(2), F(3), BL(1), BR(1) ];
firesprays.normal = [ TL(1), TL(2), BL(2), BL(3), F(4), BR(2), BR(3), TR(1), TR(2) ];
firesprays.difficult = [ K(4), TRL(3), TRR(3) ];
firesprays.actions = [ 'TARGET_LOCK', 'FOCUS', 'BOOST', 'REINFORCE_D' ];

firesprays.closing = [];
firesprays.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), TRR(3) ];
firesprays.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
firesprays.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRR(3) ];
firesprays.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRR(3) ];
firesprays.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
firesprays.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRL(3) ];
firesprays.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRL(3) ];
firesprays.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

firesprays.away = [];
firesprays.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
firesprays.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
firesprays.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
firesprays.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRL(3), TRR(3) ];
firesprays.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
firesprays.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRR(3), TRL(3) ];
firesprays.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
firesprays.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

firesprays.far = [];
firesprays.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
firesprays.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
firesprays.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
firesprays.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
firesprays.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), TRR(3) ];
firesprays.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
firesprays.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
firesprays.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

firesprays.stressed = [];
firesprays.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
firesprays.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
firesprays.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
firesprays.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
firesprays.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
firesprays.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
firesprays.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
firesprays.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// VCX-100 Light Freighter (Ghost)

var ghost = {};
ghost.name = "VCX-100 Light Freighter (Ghost)";
ghost.image = "img/ghost.png";
ghost.faction = "Rebel";
ghost.simple = [ F(1), BR(2), BL(2), F(2) ];
ghost.normal = [ BR(1), BL(1), BL(3), BR(3), TR(2), TL(2), F(3), F(4) ];
ghost.difficult = [ TL(1), TR(1), TR(3), TL(3), K(4) ];
ghost.actions = [ 'TARGET_LOCK', 'FOCUS', 'REINFORCE' ];

ghost.closing = [];
ghost.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
ghost.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
ghost.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
ghost.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
ghost.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ghost.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
ghost.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
ghost.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

ghost.away = [];
ghost.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ghost.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ghost.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ghost.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
ghost.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ghost.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
ghost.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ghost.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ghost.far = [];
ghost.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ghost.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ghost.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ghost.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ghost.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
ghost.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ghost.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ghost.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ghost.stressed = [];
ghost.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ghost.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ghost.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ghost.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ghost.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ghost.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ghost.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ghost.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Gozanti-class Imperial Cruiser

var gozanti = {};
gozanti.name = "Gozanti-class Imperial Cruiser";
gozanti.image = "img/gozanti.png";
gozanti.faction = "Empire";
gozanti.simple = [ F(1), F(2), F(3) ];
gozanti.normal = [ BL(1), BR(1) ];
gozanti.difficult = [ BL(0), STA(0), BR(0), BL(2), BR(2), F(4) ];
gozanti.actions = [ 'TARGET_LOCK', 'FOCUS', 'REINFORCE', 'COORDINATE', 'JAM' ];

gozanti.closing = [];
gozanti.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
gozanti.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
gozanti.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
gozanti.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
gozanti.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
gozanti.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
gozanti.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
gozanti.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

gozanti.away = [];
gozanti.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
gozanti.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
gozanti.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozanti.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozanti.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
gozanti.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozanti.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozanti.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

gozanti.far = [];
gozanti.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
gozanti.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
gozanti.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozanti.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozanti.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
gozanti.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozanti.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozanti.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

gozanti.stressed = [];
gozanti.stressed[0] = [ BL(1), BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
gozanti.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozanti.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozanti.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozanti.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozanti.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];
gozanti.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];
gozanti.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];

// ****************************************************************************
// Gozanti-class Cruiser

var gozantifo = {};
gozantifo.name = "Gozanti-class Cruiser";
gozantifo.image = "img/gozanti.png";
gozantifo.faction = "First Order";
gozantifo.simple = [ F(1), F(2), F(3) ];
gozantifo.normal = [ BL(1), BR(1) ];
gozantifo.difficult = [ BL(0), STA(0), BR(0), BL(2), BR(2), F(4) ];
gozantifo.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE', 'REINFORCE', 'JAM' ];

gozantifo.closing = [];
gozantifo.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
gozantifo.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
gozantifo.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
gozantifo.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
gozantifo.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
gozantifo.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
gozantifo.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
gozantifo.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

gozantifo.away = [];
gozantifo.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
gozantifo.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
gozantifo.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozantifo.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozantifo.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

gozantifo.far = [];
gozantifo.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
gozantifo.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
gozantifo.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
gozantifo.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozantifo.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
gozantifo.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

gozantifo.stressed = [];
gozantifo.stressed[0] = [ BL(1), BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
gozantifo.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozantifo.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozantifo.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozantifo.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
gozantifo.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];
gozantifo.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];
gozantifo.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];

// ****************************************************************************
// Heavy Missile Platform (HMP) Droid Gunship

var hmp = {};
hmp.name = "Heavy Missile Platform (HMP) Droid Gunship";
hmp.image = "img/hmp_droid_gunship.png";
hmp.faction = "Seperatist";
hmp.simple = [ F(1), TL(2), F(2), TR(2) ];
hmp.normal = [ BL(2), BR(2), TL(3), F(3), TR(3) ];
hmp.difficult = [ STA(0), BL(1), BR(1), BL(3), BR(3), F(4), F(5) ];
hmp.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BARREL_ROLL_D', 'RELOAD2CALC' ];

hmp.closing = [];
hmp.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
hmp.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
hmp.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
hmp.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
hmp.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(5), BR(2), BR(2), BR(3), BR(3), TR(3) ];
hmp.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
hmp.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
hmp.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

hmp.away = [];
hmp.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
hmp.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
hmp.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
hmp.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
hmp.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
hmp.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
hmp.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
hmp.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

hmp.far = [];
hmp.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
hmp.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
hmp.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
hmp.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
hmp.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hmp.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
hmp.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
hmp.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

hmp.stressed = [];
hmp.stressed[0] = [ BL(2), BL(2), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
hmp.stressed[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hmp.stressed[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
hmp.stressed[3] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
hmp.stressed[4] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BR(2), BR(2), BR(2), BR(2), BR(2) ];
hmp.stressed[5] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
hmp.stressed[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
hmp.stressed[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

// ****************************************************************************
// YV-666 Light Freighter (Hound's Tooth)

var houndstooth = {};
houndstooth.name = "YV-666 Light Freighter (Hound's Tooth)";
houndstooth.image = "img/houndstooth.png";
houndstooth.faction = "Scum";
houndstooth.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
houndstooth.normal = [ BL(2), BR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
houndstooth.difficult = [ STA(0), TL(2), TR(2) ];
houndstooth.actions = [ 'TARGET_LOCK', 'FOCUS', 'REINFORCE' ];

houndstooth.closing = [];
houndstooth.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
houndstooth.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
houndstooth.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
houndstooth.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

houndstooth.away = [];
houndstooth.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
houndstooth.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
houndstooth.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
houndstooth.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

houndstooth.far = [];
houndstooth.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
houndstooth.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
houndstooth.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
houndstooth.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

houndstooth.stressed = [];
houndstooth.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
houndstooth.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
houndstooth.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
houndstooth.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
// HWK-290 Light Freighter

var hwk290 = {};
hwk290.name = "HWK-290 Light Freighter";
hwk290.image = "img/hwk290.png";
hwk290.faction = "Rebel";
hwk290.simple = [ BL(1), F(1), F(2), F(3), BR(1) ];
hwk290.normal = [ TL(2), BL(2), BL(3), F(4), BR(2), BL(3), TR(2) ];
hwk290.difficult = [ STA(0), TL(3), TR(3) ];
hwk290.actions = [ 'LOCK2ROTATE_D', 'FOCUS2ROTATE_D', 'ROTATE_ARC', 'BOOST_D', 'JAM_D' ];

hwk290.closing = [];
hwk290.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
hwk290.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
hwk290.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hwk290.closing[4] = [ TL(2), TL(3), TL(3), F(3), F(4), F(4), TR(2), TR(2), TR(3), TR(3) ];
hwk290.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hwk290.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

hwk290.away = [];
hwk290.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
hwk290.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hwk290.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hwk290.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290.away[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hwk290.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hwk290.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hwk290.far = [];
hwk290.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
hwk290.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hwk290.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hwk290.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hwk290.stressed = [];
hwk290.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
hwk290.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
hwk290.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// HWK-290 Light Freighter (Scum)

var hwk290S = {};
hwk290S.name = "HWK-290 Light Freighter (Scum)";
hwk290S.image = "img/hwk290.png";
hwk290S.faction = "Scum";
hwk290S.simple = [ BL(1), F(1), F(2), F(3), BR(1) ];
hwk290S.normal = [ TL(2), BL(2), BL(3), F(4), BR(2), BR(3), TR(2) ];
hwk290S.difficult = [ STA(0), TL(3), TR(3) ];
hwk290S.actions = [ 'LOCK2ROTATE_D', 'FOCUS2ROTATE_D', 'ROTATE_ARC', 'BOOST_D', 'JAM_D' ];

hwk290S.closing = [];
hwk290S.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
hwk290S.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
hwk290S.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.closing[4] = [ TL(2), TL(3), TL(3), F(3), F(4), F(4), TR(2), TR(2), TR(3), TR(3) ];
hwk290S.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

hwk290S.away = [];
hwk290S.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
hwk290S.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hwk290S.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.away[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hwk290S.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hwk290S.far = [];
hwk290S.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
hwk290S.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hwk290S.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hwk290S.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hwk290S.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hwk290S.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hwk290S.stressed = [];
hwk290S.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
hwk290S.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
hwk290S.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290S.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290S.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// Hyena-class Droid Bomber

var hyena = {};
hyena.name = "Hyena-class Droid Bomber";
hyena.image = "img/hyena_droid_ bomber.png";
hyena.faction = "Seperatist";
hyena.simple = [ TL(2), F(2), TR(2), F(3) ];
hyena.normal = [ TL(1), F(1), TR(1), BL(2), BR(2), TL(3), TR(3), F(4) ];
hyena.difficult = [ BL(1), BR(1), TRL(2), TRR(2), K(2), F(5) ];
hyena.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BARREL_ROLL2LOCK_D', 'RELOAD_D' ];

hyena.closing = [];
hyena.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(2), TRR(2) ];
hyena.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
hyena.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), TRR(2) ];
hyena.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), TRR(2) ];
hyena.closing[4] = [ TL(3), F(5), TR(3), K(2), K(2), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
hyena.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), TRL(2) ];
hyena.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), TRL(2) ];
hyena.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

hyena.away = [];
hyena.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
hyena.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hyena.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hyena.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(2), TRL(2), TRR(2) ];
hyena.away[4] = [ TL(3), TR(3), TR(3), K(2), K(2), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
hyena.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(2), TRR(2), TRL(2) ];
hyena.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hyena.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hyena.far = [];
hyena.far[0] = [ BL(2), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(2) ];
hyena.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hyena.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hyena.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hyena.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(2), TRR(2) ];
hyena.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hyena.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hyena.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hyena.stressed = [];
hyena.stressed[0] = [ BL(2), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
hyena.stressed[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
hyena.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hyena.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hyena.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
hyena.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
hyena.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
hyena.stressed[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

// ****************************************************************************
// Hyena Droid Bomber/DBS-32C

var hyenadbs32c = {};
hyenadbs32c.name = "Hyena Droid Bomber/DBS-32C";
hyenadbs32c.image = "img/hyena_droid_ bomber.png";
hyenadbs32c.faction = "Seperatist";
hyenadbs32c.simple = [ TL(2), F(2), TR(2), F(3) ];
hyenadbs32c.normal = [ TL(1), F(1), TR(1), BL(2), BR(2), TL(3), TR(3), F(4) ];
hyenadbs32c.difficult = [ BL(1), BR(1), TRL(2), TRR(2), K(2), F(5) ];
hyenadbs32c.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BARREL_ROLL2LOCK_D', 'JAM_D' ];

hyenadbs32c.closing = [];
hyenadbs32c.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(2), TRR(2) ];
hyenadbs32c.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
hyenadbs32c.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), TRR(2) ];
hyenadbs32c.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), TRR(2) ];
hyenadbs32c.closing[4] = [ TL(3), F(5), TR(3), K(2), K(2), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
hyenadbs32c.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), TRL(2) ];
hyenadbs32c.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), TRL(2) ];
hyenadbs32c.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

hyenadbs32c.away = [];
hyenadbs32c.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
hyenadbs32c.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hyenadbs32c.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
hyenadbs32c.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(2), TRL(2), TRR(2) ];
hyenadbs32c.away[4] = [ TL(3), TR(3), TR(3), K(2), K(2), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
hyenadbs32c.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(2), TRR(2), TRL(2) ];
hyenadbs32c.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
hyenadbs32c.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hyenadbs32c.far = [];
hyenadbs32c.far[0] = [ BL(2), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(2) ];
hyenadbs32c.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(3) ];
hyenadbs32c.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hyenadbs32c.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
hyenadbs32c.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(2), TRR(2) ];
hyenadbs32c.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hyenadbs32c.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
hyenadbs32c.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(3) ];

hyenadbs32c.stressed = [];
hyenadbs32c.stressed[0] = [ BL(2), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
hyenadbs32c.stressed[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
hyenadbs32c.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hyenadbs32c.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hyenadbs32c.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
hyenadbs32c.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
hyenadbs32c.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
hyenadbs32c.stressed[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

// ****************************************************************************
// IG-2000 Agressor Assault Fighter

var ig2000 = {};
ig2000.name = "IG-2000 Agressor Assault Fighter";
ig2000.image = "img/ig2000.png";
ig2000.faction = "Scum";
ig2000.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), BL(3), F(3), BR(3) ];
ig2000.normal = [ TL(1), TR(1), TL(2), TR(2), F(4) ];
ig2000.difficult = [ SLL(3), SLR(3), K(4) ];
ig2000.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BOOST', 'EVADE' ];

ig2000.closing = [];
ig2000.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(3) ];
ig2000.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
ig2000.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ig2000.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ig2000.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ig2000.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ig2000.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ig2000.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

ig2000.away = [];
ig2000.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ig2000.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
ig2000.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
ig2000.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLL(3), SLR(3) ];
ig2000.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ig2000.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLR(3), SLL(3) ];
ig2000.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
ig2000.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

ig2000.far = [];
ig2000.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ig2000.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
ig2000.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), SLR(3) ];
ig2000.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

ig2000.stressed = [];
ig2000.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
ig2000.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
ig2000.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
ig2000.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Kihraxz Fighter

var kihraxz = {};
kihraxz.name = "Kihraxz Fighter";
kihraxz.image = "img/kihraxz.png";
kihraxz.faction = "Scum";
kihraxz.simple = [ BL(1), BR(1), BL(2), F(2), BR(2), F(3) ];
kihraxz.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
kihraxz.difficult = [ TRL(2), TRR(2), K(4) ];
kihraxz.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL' ];

kihraxz.closing = [];
kihraxz.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), TRR(2) ];
kihraxz.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
kihraxz.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRR(2) ];
kihraxz.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRR(2) ];
kihraxz.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
kihraxz.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRL(2) ];
kihraxz.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRL(2) ];
kihraxz.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

kihraxz.away = [];
kihraxz.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
kihraxz.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
kihraxz.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRL(2), TRR(2) ];
kihraxz.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
kihraxz.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRR(2), TRL(2) ];
kihraxz.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

kihraxz.far = [];
kihraxz.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
kihraxz.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
kihraxz.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), TRR(2) ];
kihraxz.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

kihraxz.stressed = [];
kihraxz.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(2), F(3), F(3), F(3), F(4), F(4) ];
kihraxz.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
kihraxz.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
kihraxz.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// M-12L Kimogila Fighter

var kimogila = {};
kimogila.name = "M-12L Kimogila Fighter";
kimogila.image = "img/kimogila.png";
kimogila.faction = "Scum";
kimogila.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
kimogila.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3) ];
kimogila.difficult = [ TL(1), TR(1), K(4) ];
kimogila.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D', 'RELOAD' ];

kimogila.closing = [];
kimogila.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
kimogila.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
kimogila.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
kimogila.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
kimogila.closing[4] = [ TL(3), F(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
kimogila.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
kimogila.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
kimogila.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

kimogila.away = [];
kimogila.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
kimogila.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
kimogila.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
kimogila.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
kimogila.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
kimogila.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
kimogila.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
kimogila.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

kimogila.far = [];
kimogila.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
kimogila.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
kimogila.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
kimogila.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

kimogila.stressed = [];
kimogila.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
kimogila.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
kimogila.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
kimogila.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// BTL-S8 K-Wing

var kwing = {};
kwing.name = "BTL-S8 K-Wing";
kwing.image = "img/kwing.png";
kwing.faction = "Rebel";
kwing.simple = [ BL(1), BL(2), F(1), F(2) ];
kwing.normal = [ BR(2), TL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
kwing.difficult = [  ];
kwing.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'SLAM', 'RELOAD' ];

kwing.closing = [];
kwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(2) ];
kwing.closing[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.closing[3] = [ BR(2), BR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.closing[4] = [ BL(2), BL(3), F(2), BR(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.closing[5] = [ BL(2), BL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.closing[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

kwing.away = [];
kwing.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
kwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(2), TR(2) ];
kwing.away[2] = [ BR(2), BR(2), BR(3), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.away[4] = [ TL(2), BL(2), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.away[6] = [ BL(2), BL(2), BL(3), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(2), TL(2) ];

kwing.far = [];
kwing.far[0] = [ F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(2), BR(3) ];
kwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(2), TR(2) ];
kwing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(2), TL(2) ];

kwing.stressed = [];
kwing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
kwing.stressed[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3) ];
kwing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.stressed[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Low Altitude Attack Transport/improved (LAAT/i)

var laati = {};
laati.name = "Low Altitude Attack Transport/improved (LAAT/i)";
laati.image = "img/laati.png";
laati.faction = "Republic";
laati.simple = [ F(1), F(2) ];
laati.normal = [ BL(1), BR(1), TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
laati.difficult = [ STA(0), TL(3), TR(3), F(4) ];
laati.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'REINFORCE_D', 'RELOAD' ];

laati.closing = [];
laati.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
laati.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
laati.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
laati.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
laati.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
laati.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
laati.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
laati.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

laati.away = [];
laati.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
laati.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
laati.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
laati.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
laati.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
laati.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
laati.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
laati.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

laati.far = [];
laati.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
laati.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
laati.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
laati.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
laati.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
laati.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
laati.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
laati.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

laati.stressed = [];
laati.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
laati.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
laati.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
laati.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
laati.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
laati.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
laati.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
laati.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Lambda Shuttle

var lambda = {};
lambda.name = "Lambda Shuttle";
lambda.image = "img/lambda.png";
lambda.faction = "Empire";
lambda.simple = [ BL(1), F(1), F(2), BR(1) ];
lambda.normal = [ BL(2), F(3), BR(2) ];
lambda.difficult = [ TL(2), BL(3), STA(0), BR(3), TR(2) ];
lambda.actions = [ 'FOCUS', 'COORDINATE', 'REINFORCE', 'JAM_D' ];

lambda.closing = [];
lambda.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
lambda.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lambda.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
lambda.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
lambda.closing[4] = [ BL(2), BL(3), BL(3), F(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
lambda.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
lambda.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
lambda.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

lambda.away = [];
lambda.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
lambda.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
lambda.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
lambda.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
lambda.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
lambda.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
lambda.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
lambda.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

lambda.far = [];
lambda.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
lambda.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
lambda.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
lambda.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
lambda.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lambda.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
lambda.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
lambda.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

lambda.stressed = [];
lambda.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
lambda.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
lambda.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
lambda.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
lambda.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
lambda.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];
lambda.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];
lambda.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// Lancer Class Pursuit Craft (Shadow Caster)

var lancer = {};
lancer.name = "Lancer Class Pursuit Craft (Shadow Caster)";
lancer.image = "img/ship_lancer.png";
lancer.faction = "Scum";
lancer.simple = [ F(2), TL(2), BL(2), F(3), BR(2), TR(2), F(4) ];
lancer.normal = [ BL(1), F(1), BR(1), TL(2), BL(2), BR(2), TR(2), F(5) ];
lancer.difficult = [ K(5) ];
lancer.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'EVADE' ];

lancer.closing = [];
lancer.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(5), K(5) ];
lancer.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lancer.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
lancer.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
lancer.closing[4] = [ TL(2), F(5), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
lancer.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5) ];
lancer.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5) ];
lancer.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

lancer.away = [];
lancer.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
lancer.away[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lancer.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5), K(5) ];
lancer.away[4] = [ TL(2), TR(2), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
lancer.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5), K(5) ];
lancer.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
lancer.away[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

lancer.far = [];
lancer.far[0] = [ F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(1), BR(2) ];
lancer.far[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lancer.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.far[4] = [ TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
lancer.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
lancer.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
lancer.far[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

lancer.stressed = [];
lancer.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(5) ];
lancer.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lancer.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2) ];
lancer.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
lancer.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
lancer.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// M3-A Interceptor

var m3a = {};
m3a.name = "M3-A Interceptor";
m3a.image = "img/m3aInterceptor.png";
m3a.faction = "Scum";
m3a.simple = [ BL(1), BR(1), F(2), F(3) ];
m3a.normal = [ TL(1), TR(1), BL(2), BR(2), TL(2), TR(2), BL(3), BR(3), F(4), F(5) ];
m3a.difficult = [ K(3), K(5) ];
m3a.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

m3a.closing = [];
m3a.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
m3a.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
m3a.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
m3a.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
m3a.closing[4] = [ TL(2), F(5), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
m3a.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
m3a.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
m3a.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

m3a.away = [];
m3a.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
m3a.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
m3a.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
m3a.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), K(5), K(5) ];
m3a.away[4] = [ TL(2), TR(2), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
m3a.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), K(5), K(5) ];
m3a.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
m3a.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

m3a.far = [];
m3a.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
m3a.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
m3a.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(5), K(5) ];
m3a.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

m3a.stressed = [];
m3a.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
m3a.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
m3a.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
m3a.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// MG-100 StarFortress B-SF17

var mg100 = {};
mg100.name = "MG-100 StarFortress B-SF17";
mg100.image = "img/mg-100.png";
mg100.faction = "Resistance";
mg100.simple = [ BL(1), F(1), BR(1), F(2) ];
mg100.normal = [ TL(2), BL(2), BR(2), TR(2), F(3) ];
mg100.difficult = [ STA(0), TL(1), TR(1), BL(3), BR(3) ];
mg100.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'RELOAD' ];

mg100.closing = [];
mg100.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
mg100.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), STA(0) ];
mg100.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.closing[3] = [ BR(1), BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
mg100.closing[4] = [ TL(2), BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2) ];
mg100.closing[5] = [ BL(1), BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
mg100.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), STA(0) ];

mg100.away = [];
mg100.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
mg100.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
mg100.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
mg100.away[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
mg100.away[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
mg100.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

mg100.far = [];
mg100.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
mg100.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
mg100.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
mg100.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

mg100.stressed = [];
mg100.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
mg100.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
mg100.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mg100.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
mg100.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mg100.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// G-1A (Mist Hunter) Starfighter

var mistHunter = {};
mistHunter.name = "G-1A (Mist Hunter) Starfighter";
mistHunter.image = "img/mistHunter.png";
mistHunter.faction = "Scum";
mistHunter.simple = [ BL(1), F(1), BR(1), F(2) ];
mistHunter.normal = [ TL(2), BL(2), BR(2), TR(2), F(3) ];
mistHunter.difficult = [ STA(0), TL(1), TR(1), BL(3), BR(3), K(2), F(4), K(4) ];
mistHunter.actions = [ 'TARGET_LOCK', 'CALCULATE', 'JAM' ];

mistHunter.closing = [];
mistHunter.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), K(2), K(2), STA(0), STA(0) ];
mistHunter.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), STA(0) ];
mistHunter.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), K(2) ];
mistHunter.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), K(2) ];
mistHunter.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
mistHunter.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), K(2) ];
mistHunter.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), K(2) ];
mistHunter.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), STA(0) ];

mistHunter.away = [];
mistHunter.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
mistHunter.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
mistHunter.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4), K(4) ];
mistHunter.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
mistHunter.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4), K(4) ];
mistHunter.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

mistHunter.far = [];
mistHunter.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
mistHunter.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
mistHunter.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), K(4) ];
mistHunter.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

mistHunter.stressed = [];
mistHunter.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
mistHunter.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
mistHunter.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// Naboo Royal N-1 Starfighter

var n1 = {};
n1.name = "Naboo Royal N-1 Starfighter";
n1.image = "img/nabooN1.png";
n1.faction = "Republic";
n1.simple = [ BL(2), BR(2), F(2), BL(3), BR(3), F(3) ];
n1.normal = [ BL(1), F(1), BR(1), TL(2), TR(2), TL(3), TR(3), F(4), F(5) ];
n1.difficult = [ TRL(3), TRR(3) ];
n1.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST' ];

n1.closing = [];
n1.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), TRL(3), TRL(3) ];
n1.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
n1.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
n1.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
n1.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(5), BR(2), BR(2), BR(3), BR(3), TR(3) ];
n1.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
n1.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
n1.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

n1.away = [];
n1.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
n1.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
n1.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
n1.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRR(3), TRR(3) ];
n1.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
n1.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRL(3), TRL(3) ];
n1.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
n1.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

n1.far = [];
n1.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
n1.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
n1.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
n1.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
n1.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
n1.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
n1.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
n1.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

n1.stressed = [];
n1.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(5) ];
n1.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
n1.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
n1.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
n1.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
n1.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
n1.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
n1.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Nantex-class Starfighter

var nantex = {};
nantex.name = "Nantex-class Starfighter";
nantex.image = "img/Nantex.png";
nantex.faction = "Seperatist";
nantex.simple = [ BL(1), BR(1), BL(2), F(2), BR(2), BL(3), F(3), BR(3) ];
nantex.normal = [ TL(1), TR(1), TL(2), TR(2), TL(3), TR(3), F(4), F(5) ];
nantex.difficult = [ SLL(3), SLR(3), K(5) ];
nantex.actions = [ 'FOCUS', 'EVADE' ];

nantex.closing = [];
nantex.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(5), SLR(3) ];
nantex.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
nantex.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(3) ];
nantex.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), SLR(3) ];
nantex.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
nantex.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), SLL(3) ];
nantex.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(3) ];
nantex.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

nantex.away = [];
nantex.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
nantex.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
nantex.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
nantex.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), SLL(3), SLR(3) ];
nantex.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
nantex.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), SLR(3), SLL(3) ];
nantex.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
nantex.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

nantex.far = [];
nantex.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
nantex.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
nantex.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
nantex.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
nantex.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), SLR(3) ];
nantex.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
nantex.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
nantex.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

nantex.stressed = [];
nantex.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
nantex.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
nantex.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
nantex.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
nantex.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
nantex.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
nantex.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
nantex.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// YT-2400 Light Freighter

var outrider = {};
outrider.name = "YT-2400 Light Freighter";
outrider.image = "img/outrider.png";
outrider.faction = "Rebel";
outrider.simple = [ BL(1), F(1), F(2), BR(1) ];
outrider.normal = [ TL(1), TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(1), TR(2), TR(3) ];
outrider.difficult = [ K(4) ];
outrider.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC', 'BARREL_ROLL_D' ];

outrider.closing = [];
outrider.closing[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), K(4), K(4) ];
outrider.closing[1] = [ F(3), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
outrider.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
outrider.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
outrider.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
outrider.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
outrider.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
outrider.closing[7] = [ F(3), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

outrider.away = [];
outrider.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
outrider.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
outrider.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
outrider.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
outrider.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
outrider.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
outrider.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
outrider.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

outrider.far = [];
outrider.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
outrider.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
outrider.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
outrider.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
outrider.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
outrider.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
outrider.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
outrider.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

outrider.stressed = [];
outrider.stressed[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
outrider.stressed[1] = [ F(3), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
outrider.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
outrider.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
outrider.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
outrider.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
outrider.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
outrider.stressed[7] = [ F(3), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Phantom Attack Shuttle

var phantom = {};
phantom.name = "Phantom Attack Shuttle";
phantom.image = "img/ship_phantom.png";
phantom.faction = "Rebel";
phantom.simple = [ BL(1), F(1), BR(1), F(2) ];
phantom.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3), F(4) ];
phantom.difficult = [ TL(1), TR(1), TL(3), TR(3), K(4) ];
phantom.actions = [ 'FOCUS', 'BARREL_ROLL2EVADE_D', 'EVADE' ];

phantom.closing = [];
phantom.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
phantom.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
phantom.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
phantom.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
phantom.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
phantom.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
phantom.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
phantom.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

phantom.away = [];
phantom.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
phantom.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
phantom.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
phantom.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
phantom.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
phantom.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
phantom.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
phantom.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

phantom.far = [];
phantom.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
phantom.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
phantom.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
phantom.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
phantom.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
phantom.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
phantom.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
phantom.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

phantom.stressed = [];
phantom.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
phantom.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
phantom.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
phantom.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
phantom.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// JumpMaster 5000 (Punishing One)

var punishingOne = {};
punishingOne.name = "JumpMaster 5000 (Punishing One)";
punishingOne.image = "img/punishingOne.png";
punishingOne.faction = "Scum";
punishingOne.simple = [ F(1), BL(1), BL(2), BL(3), F(2), F(3) ];
punishingOne.normal = [ BR(1), BR(2), BR(3), TL(1), TL(2), F(4) ];
punishingOne.difficult = [ TR(1), TR(2), SLL(3), K(4) ];
punishingOne.actions = [ 'LOCK2ROTATE_D', 'FOCUS2ROTATE_D', 'BARREL_ROLL_D' ];

punishingOne.closing = [];
punishingOne.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
punishingOne.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
punishingOne.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
punishingOne.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
punishingOne.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), K(4), SLL(3), SLL(3), SLL(3), SLL(3) ];
punishingOne.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
punishingOne.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
punishingOne.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

punishingOne.away = [];
punishingOne.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
punishingOne.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
punishingOne.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
punishingOne.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
punishingOne.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), K(4), SLL(3), SLL(3), SLL(3), SLL(3) ];
punishingOne.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
punishingOne.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
punishingOne.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

punishingOne.far = [];
punishingOne.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
punishingOne.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
punishingOne.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
punishingOne.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
punishingOne.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), SLL(3), SLL(3) ];
punishingOne.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
punishingOne.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
punishingOne.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

punishingOne.stressed = [];
punishingOne.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
punishingOne.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3) ];
punishingOne.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
punishingOne.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
punishingOne.stressed[4] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
punishingOne.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
punishingOne.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3) ];

// ****************************************************************************
// Quadrijet Transfer Spacetug (Quadjumper)

var quadjumper = {};
quadjumper.name = "Quadrijet Transfer Spacetug (Quadjumper)";
quadjumper.image = "img/ship_quadjumper.png";
quadjumper.faction = "Scum";
quadjumper.simple = [ BL(2), F(2), BR(2), F(3) ];
quadjumper.normal = [ TL(1), BL(1), F(1), BR(1), TR(1), TL(2), TR(2), BL(3), BR(3) ];
quadjumper.difficult = [ SLL(2), SLR(2), RBL(1), R(2), RBR(1) ];
quadjumper.actions = [ 'FOCUS', 'BARREL_ROLL', 'EVADE_D' ];

quadjumper.closing = [];
quadjumper.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), SLL(2), RBL(1), R(2), R(2) ];
quadjumper.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), RBL(1) ];
quadjumper.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(2), RBL(1), RBL(1) ];
quadjumper.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(2), RBR(1) ];
quadjumper.closing[4] = [ TL(2), F(3), TR(2), SLL(2), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2), SLR(2) ];
quadjumper.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(2), RBR(1) ];
quadjumper.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(2), RBL(1), RBL(1) ];
quadjumper.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), RBL(1) ];

quadjumper.away = [];
quadjumper.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
quadjumper.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
quadjumper.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(2), SLR(2), SLR(2) ];
quadjumper.away[4] = [ TL(2), TR(2), TR(2), SLL(2), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2), SLR(2) ];
quadjumper.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(2), SLL(2), SLL(2) ];
quadjumper.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

quadjumper.far = [];
quadjumper.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
quadjumper.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
quadjumper.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), SLR(2), SLR(2) ];
quadjumper.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

quadjumper.stressed = [];
quadjumper.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
quadjumper.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
quadjumper.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
quadjumper.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Imperial Raider-class Corvette

var raider = {};
raider.name = "Imperial Raider-class Corvette";
raider.image = "img/raider.png";
raider.faction = "Empire";
raider.simple = [ BL(1), BR(1), F(2), F(3) ];
raider.normal = [ F(1), BL(2), BR(2), F(4) ];
raider.difficult = [ BL(0), STA(0), BR(0), BL(3), BR(3), F(5) ];
raider.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE', 'REINFORCE', 'JAM' ];

raider.closing = [];
raider.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
raider.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
raider.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
raider.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
raider.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
raider.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
raider.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
raider.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

raider.away = [];
raider.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
raider.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
raider.away[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
raider.away[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
raider.away[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
raider.away[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
raider.away[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
raider.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

raider.far = [];
raider.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
raider.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
raider.far[2] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
raider.far[3] = [ F(4), F(5), F(5), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3) ];
raider.far[4] = [ BL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
raider.far[5] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
raider.far[6] = [ F(4), F(5), F(5), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3) ];
raider.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];

raider.stressed = [];
raider.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
raider.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
raider.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
raider.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
raider.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// Resistance Transport Pod

var respod = {};
respod.name = "Resistance Transport Pod";
respod.image = "img/resistance_transport_pod.png";
respod.faction = "Resistance";
respod.simple = [ BL(1), F(1), BR(1), F(2) ];
respod.normal = [ TL(2), BL(2), BR(2), TR(2), F(3) ];
respod.difficult = [ TL(1), TR(1), BL(3), BR(3), F(4), K(3) ];
respod.actions = [ 'FOCUS', 'TARGET_LOCK_D', 'BARREL_ROLL_D', 'JAM_D' ];

respod.closing = [];
respod.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
respod.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
respod.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
respod.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
respod.closing[4] = [ TL(2), F(4), TR(2), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
respod.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
respod.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
respod.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

respod.away = [];
respod.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
respod.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
respod.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
respod.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3), K(3) ];
respod.away[4] = [ TL(2), TR(2), TR(2), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
respod.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3), K(3) ];
respod.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
respod.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

respod.far = [];
respod.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
respod.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
respod.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respod.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respod.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(3), K(3) ];
respod.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respod.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respod.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

respod.stressed = [];
respod.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
respod.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
respod.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respod.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respod.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respod.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respod.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respod.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// Resistance Transport Pod (BB8)

var respodbb8 = {};
respodbb8.name = "Resistance Transport Pod (BB8)";
respodbb8.image = "img/resistance_transport_pod.png";
respodbb8.faction = "Resistance";
respodbb8.simple = [ BL(1), F(1), BR(1), F(2) ];
respodbb8.normal = [ TL(2), BL(2), BR(2), TR(2), F(3) ];
respodbb8.difficult = [ TL(1), TR(1), BL(3), BR(3), F(4), K(3) ];
respodbb8.actions = [ 'CALCULATE', 'TARGET_LOCK_D', 'BARREL_ROLL_D', 'JAM_D'];

respodbb8.closing = [];
respodbb8.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
respodbb8.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
respodbb8.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
respodbb8.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
respodbb8.closing[4] = [ TL(2), F(4), TR(2), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
respodbb8.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
respodbb8.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
respodbb8.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

respodbb8.away = [];
respodbb8.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
respodbb8.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
respodbb8.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3), K(3) ];
respodbb8.away[4] = [ TL(2), TR(2), TR(2), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
respodbb8.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3), K(3) ];
respodbb8.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
respodbb8.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

respodbb8.far = [];
respodbb8.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
respodbb8.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
respodbb8.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(3), K(3) ];
respodbb8.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respodbb8.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respodbb8.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

respodbb8.stressed = [];
respodbb8.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
respodbb8.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
respodbb8.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
respodbb8.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respodbb8.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
respodbb8.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// Resistance Transport

var restransport = {};
restransport.name = "Resistance Transport";
restransport.image = "img/resistance_transport.png";
restransport.faction = "Resistance";
restransport.simple = [ BL(1), F(1), BR(1), F(2) ];
restransport.normal = [ TL(2), BL(2), BR(2), TR(2), F(3) ];
restransport.difficult = [ TL(1), TR(1), BL(3), BR(3), F(4), STA(0), RBL(1), RBR(1) ];
restransport.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE_D', 'JAM_D' ];

restransport.closing = [];
restransport.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), RBL(1), RBL(1), STA(0), STA(0) ];
restransport.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), RBL(1) ];
restransport.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), RBL(1), RBL(1), RBL(1) ];
restransport.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), RBR(1), RBR(1) ];
restransport.closing[4] = [ TL(2), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(2) ];
restransport.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), RBR(1), RBR(1) ];
restransport.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), RBL(1), RBL(1), RBL(1) ];
restransport.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), RBL(1) ];

restransport.away = [];
restransport.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
restransport.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
restransport.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
restransport.away[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
restransport.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
restransport.away[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
restransport.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
restransport.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

restransport.far = [];
restransport.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
restransport.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
restransport.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
restransport.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
restransport.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
restransport.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
restransport.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
restransport.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

restransport.stressed = [];
restransport.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
restransport.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
restransport.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
restransport.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
restransport.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
restransport.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
restransport.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
restransport.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// RZ-2 A-Wing

var rz2awing = {};
rz2awing.name = "RZ-2 A-Wing";
rz2awing.image = "img/rz-2_A-wing.png";
rz2awing.faction = "Resistance";
rz2awing.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), BL(3), F(3), BR(3), F(4), F(5) ];
rz2awing.normal = [ TL(1), TR(1), TL(3), TR(3) ];
rz2awing.difficult = [ SLL(3), SLR(3), K(5) ];
rz2awing.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE' ];

rz2awing.closing = [];
rz2awing.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(5), SLR(3) ];
rz2awing.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
rz2awing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(3) ];
rz2awing.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), SLR(3) ];
rz2awing.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
rz2awing.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), SLL(3) ];
rz2awing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(3) ];
rz2awing.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

rz2awing.away = [];
rz2awing.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
rz2awing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
rz2awing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
rz2awing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), SLL(3), SLR(3) ];
rz2awing.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
rz2awing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), SLR(3), SLL(3) ];
rz2awing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
rz2awing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

rz2awing.far = [];
rz2awing.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
rz2awing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
rz2awing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
rz2awing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
rz2awing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), SLR(3) ];
rz2awing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
rz2awing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
rz2awing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

rz2awing.stressed = [];
rz2awing.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
rz2awing.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
rz2awing.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
rz2awing.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
rz2awing.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
rz2awing.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
rz2awing.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
rz2awing.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Scavenged YT-1300 Light Freighter

var scavfalcon = {};
scavfalcon.name = "Scavenged YT-1300 Light Freighter";
scavfalcon.image = "img/scavenged_YT-1300.png";
scavfalcon.faction = "Resistance";
scavfalcon.simple = [ F(1), BL(2), F(2), BR(2) ];
scavfalcon.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), F(3), BR(3), TR(3) ];
scavfalcon.difficult = [ SLL(3), SLR(3), F(4) ];
scavfalcon.actions = [ 'TARGET_LOCK', 'FOCUS', 'ROTATE_ARC_D', 'BOOST_D' ];

scavfalcon.closing = [];
scavfalcon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), SLL(3), SLL(3) ];
scavfalcon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
scavfalcon.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
scavfalcon.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
scavfalcon.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
scavfalcon.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
scavfalcon.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
scavfalcon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

scavfalcon.away = [];
scavfalcon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
scavfalcon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scavfalcon.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
scavfalcon.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
scavfalcon.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
scavfalcon.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
scavfalcon.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
scavfalcon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scavfalcon.far = [];
scavfalcon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
scavfalcon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scavfalcon.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
scavfalcon.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
scavfalcon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
scavfalcon.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
scavfalcon.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
scavfalcon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scavfalcon.stressed = [];
scavfalcon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
scavfalcon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
scavfalcon.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(3) ];
scavfalcon.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(3) ];
scavfalcon.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
scavfalcon.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(3) ];
scavfalcon.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(3) ];
scavfalcon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Scurrg H-6 Bomber (Scum)

var scurrgs = {};
scurrgs.name = "Scurrg H-6 Bomber (Scum)";
scurrgs.image = "img/scurrg.png";
scurrgs.faction = "Scum";
scurrgs.simple = [ BL(1), F(1), BR(1), F(2) ];
scurrgs.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
scurrgs.difficult = [ TL(3), TR(3), TRL(3), TRR(3), F(4) ];
scurrgs.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

scurrgs.closing = [];
scurrgs.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), TRL(3), TRL(3) ];
scurrgs.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
scurrgs.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrgs.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrgs.closing[4] = [ TL(3), F(4), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrgs.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrgs.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrgs.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

scurrgs.away = [];
scurrgs.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
scurrgs.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrgs.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRR(3), TRR(3) ];
scurrgs.away[4] = [ TL(3), TR(3), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrgs.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRL(3), TRL(3) ];
scurrgs.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrgs.far = [];
scurrgs.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
scurrgs.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrgs.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), TRR(3), TRR(3) ];
scurrgs.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrgs.stressed = [];
scurrgs.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
scurrgs.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
scurrgs.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrgs.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrgs.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Sheathipede Shuttle (Phantom 2)

var sheathipede = {};
sheathipede.name = "Sheathipede Shuttle (Phantom 2)";
sheathipede.image = "img/sheathipede.png";
sheathipede.faction = "Rebel";
sheathipede.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
sheathipede.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), BR(3) ];
sheathipede.difficult = [ R(1), TL(3), TR(3), K(3), F(4) ];
sheathipede.actions = [ 'FOCUS', 'COORDINATE' ];

sheathipede.closing = [];
sheathipede.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), K(3), K(3), R(1), R(1) ];
sheathipede.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), R(1) ];
sheathipede.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
sheathipede.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
sheathipede.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
sheathipede.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
sheathipede.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
sheathipede.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), R(1) ];

sheathipede.away = [];
sheathipede.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
sheathipede.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
sheathipede.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
sheathipede.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
sheathipede.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
sheathipede.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
sheathipede.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
sheathipede.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

sheathipede.far = [];
sheathipede.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
sheathipede.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
sheathipede.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sheathipede.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sheathipede.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
sheathipede.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sheathipede.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sheathipede.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

sheathipede.stressed = [];
sheathipede.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
sheathipede.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
sheathipede.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
sheathipede.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
sheathipede.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
sheathipede.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
sheathipede.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
sheathipede.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Sith Infiltrator

var sithinf = {};
sithinf.name = "Sith Infiltrator";
sithinf.image = "img/sith_infiltrator.png";
sithinf.faction = "Seperatist";
sithinf.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
sithinf.normal = [ TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
sithinf.difficult = [ TL(1), TR(1), SLL(2), SLR(2), K(5) ];
sithinf.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

sithinf.closing = [];
sithinf.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(5), SLR(2) ];
sithinf.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
sithinf.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(2) ];
sithinf.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), SLR(2) ];
sithinf.closing[4] = [ TL(3), F(4), TR(3), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
sithinf.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), SLL(2) ];
sithinf.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(2) ];
sithinf.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

sithinf.away = [];
sithinf.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
sithinf.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
sithinf.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
sithinf.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), SLL(2), SLR(2) ];
sithinf.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
sithinf.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), SLR(2), SLL(2) ];
sithinf.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
sithinf.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

sithinf.far = [];
sithinf.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
sithinf.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
sithinf.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sithinf.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sithinf.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), SLR(2) ];
sithinf.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sithinf.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sithinf.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

sithinf.stressed = [];
sithinf.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
sithinf.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
sithinf.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sithinf.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
sithinf.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
sithinf.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sithinf.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
sithinf.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// StarViper

var starviper = {};
starviper.name = "StarViper";
starviper.image = "img/starviper.png";
starviper.faction = "Scum";
starviper.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
starviper.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
starviper.difficult = [ SLL(3), SLR(3) ];
starviper.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2FOCUS_D', 'BOOST2FOCUS_D' ];

starviper.closing = [];
starviper.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), SLL(3), SLL(3) ];
starviper.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
starviper.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
starviper.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
starviper.closing[4] = [ TL(2), F(4), TR(2), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
starviper.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
starviper.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
starviper.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

starviper.away = [];
starviper.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
starviper.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
starviper.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
starviper.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLR(3), SLR(3) ];
starviper.away[4] = [ TL(2), TR(2), TR(2), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
starviper.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLL(3), SLL(3) ];
starviper.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
starviper.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

starviper.far = [];
starviper.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
starviper.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
starviper.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), SLR(3), SLR(3) ];
starviper.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

starviper.stressed = [];
starviper.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
starviper.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
starviper.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
starviper.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// StarViper (Guri)

var starviper_guri = {};
starviper_guri.name = "StarViper (Guri)";
starviper_guri.image = "img/starviper.png";
starviper_guri.faction = "Scum";
starviper_guri.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
starviper_guri.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
starviper_guri.difficult = [ SLL(3), SLR(3) ];
starviper_guri.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BARREL_ROLL2CALC', 'BOOST2CALC' ];

starviper_guri.closing = [];
starviper_guri.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), SLL(3), SLL(3) ];
starviper_guri.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
starviper_guri.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
starviper_guri.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
starviper_guri.closing[4] = [ TL(2), F(4), TR(2), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
starviper_guri.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
starviper_guri.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
starviper_guri.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

starviper_guri.away = [];
starviper_guri.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
starviper_guri.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
starviper_guri.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
starviper_guri.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLR(3), SLR(3) ];
starviper_guri.away[4] = [ TL(2), TR(2), TR(2), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
starviper_guri.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLL(3), SLL(3) ];
starviper_guri.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
starviper_guri.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

starviper_guri.far = [];
starviper_guri.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
starviper_guri.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
starviper_guri.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper_guri.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper_guri.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), SLR(3), SLR(3) ];
starviper_guri.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper_guri.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper_guri.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

starviper_guri.stressed = [];
starviper_guri.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
starviper_guri.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
starviper_guri.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper_guri.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
starviper_guri.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
starviper_guri.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper_guri.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
starviper_guri.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// T-70 X-Wing

var t70xwing = {};
t70xwing.name = "T-70 X-Wing";
t70xwing.image = "img/t70xwing.png";
t70xwing.faction = "Resistance";
t70xwing.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
t70xwing.normal = [ TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
t70xwing.difficult = [ TRL(3), TRR(3), K(4) ];
t70xwing.actions = [ 'TARGET_LOCK', 'FOCUS', 'BOOST' ];

t70xwing.closing = [];
t70xwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), TRR(3) ];
t70xwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
t70xwing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRR(3) ];
t70xwing.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), TRR(3) ];
t70xwing.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
t70xwing.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), TRL(3) ];
t70xwing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRL(3) ];
t70xwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

t70xwing.away = [];
t70xwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
t70xwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
t70xwing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
t70xwing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(3), TRR(3) ];
t70xwing.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
t70xwing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(3), TRL(3) ];
t70xwing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
t70xwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

t70xwing.far = [];
t70xwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
t70xwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
t70xwing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
t70xwing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
t70xwing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(3) ];
t70xwing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
t70xwing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
t70xwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

t70xwing.stressed = [];
t70xwing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
t70xwing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
t70xwing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
t70xwing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
t70xwing.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
t70xwing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
t70xwing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
t70xwing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// TIE/ln Fighter

var tie = {};
tie.name = "TIE/ln Fighter";
tie.image = "img/tie.png";
tie.faction = "Empire";
tie.simple = [ F(2), BL(2), BR(2), F(3) ];
tie.normal = [ TL(1), TL(2), TL(3), BL(3), F(4), F(5), BR(3), TR(1), TR(2), TR(3) ];
tie.difficult = [ K(3), K(4) ];
tie.actions = [ 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

tie.closing = [];
tie.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
tie.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tie.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
tie.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
tie.closing[4] = [ TL(3), F(5), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
tie.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
tie.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
tie.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tie.away = [];
tie.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tie.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tie.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tie.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
tie.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
tie.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
tie.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tie.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tie.far = [];
tie.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tie.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tie.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tie.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tie.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tie.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tie.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tie.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tie.stressed = [];
tie.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
tie.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tie.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tie.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tie.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tie.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tie.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tie.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE Advanced x1

var tieAdvanced = {};
tieAdvanced.name = "TIE Advanced x1";
tieAdvanced.image = "img/TieAdvanced.png";
tieAdvanced.faction = "Empire";
tieAdvanced.simple = [ BL(1), BL(2), F(2), F(3), BR(1), BR(2) ];
tieAdvanced.normal = [ TL(2), TL(3), BL(3), F(1), F(4), F(5), BR(3), TR(2), TR(3) ];
tieAdvanced.difficult = [ K(4), TRL(3), TRR(3) ];
tieAdvanced.actions = [ 'TARGET_LOCK', 'FOCUS2BARREL_ROLL_D', 'BARREL_ROLL' ];

tieAdvanced.closing = [];
tieAdvanced.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), TRR(3) ];
tieAdvanced.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieAdvanced.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRR(3) ];
tieAdvanced.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), TRR(3) ];
tieAdvanced.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
tieAdvanced.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), TRL(3) ];
tieAdvanced.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRL(3) ];
tieAdvanced.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

tieAdvanced.away = [];
tieAdvanced.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieAdvanced.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(3), TRR(3) ];
tieAdvanced.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
tieAdvanced.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(3), TRL(3) ];
tieAdvanced.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAdvanced.far = [];
tieAdvanced.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieAdvanced.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(3) ];
tieAdvanced.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAdvanced.stressed = [];
tieAdvanced.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(5) ];
tieAdvanced.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
tieAdvanced.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// TIE/ag Aggressor

var tieAggressor = {};
tieAggressor.name = "TIE/ag Aggressor";
tieAggressor.image = "img/tie_aggressor.png";
tieAggressor.faction = "Empire";
tieAggressor.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
tieAggressor.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tieAggressor.difficult = [ K(4) ];
tieAggressor.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2EVADE_D' ];

tieAggressor.closing = [];
tieAggressor.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
tieAggressor.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieAggressor.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
tieAggressor.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
tieAggressor.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieAggressor.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
tieAggressor.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
tieAggressor.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

tieAggressor.away = [];
tieAggressor.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
tieAggressor.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAggressor.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieAggressor.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
tieAggressor.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieAggressor.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
tieAggressor.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieAggressor.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAggressor.far = [];
tieAggressor.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
tieAggressor.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAggressor.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAggressor.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAggressor.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tieAggressor.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAggressor.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAggressor.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAggressor.stressed = [];
tieAggressor.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
tieAggressor.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
tieAggressor.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAggressor.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAggressor.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
tieAggressor.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAggressor.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAggressor.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// TIE/sa Bomber

var tieBomber = {};
tieBomber.name = "TIE/sa Bomber";
tieBomber.image = "img/tieBomber.png";
tieBomber.faction = "Empire";
tieBomber.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
tieBomber.normal = [ TL(2), TL(3), BL(1), BL(3), F(4), BR(1), BR(3), TR(2), TR(3) ];
tieBomber.difficult = [ K(3), K(5) ];
tieBomber.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2LOCK_D', 'RELOAD_D' ];

tieBomber.closing = [];
tieBomber.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
tieBomber.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieBomber.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
tieBomber.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
tieBomber.closing[4] = [ TL(3), F(4), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
tieBomber.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
tieBomber.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
tieBomber.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

tieBomber.away = [];
tieBomber.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
tieBomber.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieBomber.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), K(5), K(5) ];
tieBomber.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
tieBomber.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), K(5), K(5) ];
tieBomber.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieBomber.far = [];
tieBomber.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
tieBomber.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieBomber.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), K(5) ];
tieBomber.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieBomber.stressed = [];
tieBomber.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
tieBomber.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
tieBomber.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
tieBomber.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// TIE/D Defender

var tieDefender = {};
tieDefender.name = "TIE/D Defender";
tieDefender.image = "img/tieDefender.png";
tieDefender.faction = "Empire";
tieDefender.simple = [ BL(1), BR(1), F(2), F(3), F(4), F(5) ];
tieDefender.normal = [ BL(2), BR(2), TL(3), BL(3), BR(3), TR(3), K(4) ];
tieDefender.difficult = [ TL(1), TR(1), TL(2), TR(2), K(2) ];
tieDefender.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE' ];

tieDefender.closing = [];
tieDefender.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(2), K(2) ];
tieDefender.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieDefender.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), K(2) ];
tieDefender.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), K(2) ];
tieDefender.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieDefender.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), K(2) ];
tieDefender.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), K(2) ];
tieDefender.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tieDefender.away = [];
tieDefender.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieDefender.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieDefender.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
tieDefender.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieDefender.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
tieDefender.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieDefender.far = [];
tieDefender.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieDefender.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieDefender.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tieDefender.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieDefender.stressed = [];
tieDefender.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
tieDefender.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
tieDefender.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
// TIE Advanced v1 (Inquisitor)

var tieInquisitor = {};
tieInquisitor.name = "TIE Advanced v1 (Inquisitor)";
tieInquisitor.image = "img/tieInquisitor.png";
tieInquisitor.faction = "Empire";
tieInquisitor.simple = [ TL(1), BL(1), BR(1), TR(1), F(2), F(3) ];
tieInquisitor.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tieInquisitor.difficult = [ TRL(2), TRR(2), K(4) ];
tieInquisitor.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2FOCUS_D', 'BOOST2FOCUS_D', 'EVADE' ];

tieInquisitor.closing = [];
tieInquisitor.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), TRR(2) ];
tieInquisitor.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieInquisitor.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRR(2) ];
tieInquisitor.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRR(2) ];
tieInquisitor.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
tieInquisitor.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRL(2) ];
tieInquisitor.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRL(2) ];
tieInquisitor.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tieInquisitor.away = [];
tieInquisitor.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieInquisitor.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInquisitor.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(2), TRR(2) ];
tieInquisitor.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
tieInquisitor.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(2), TRL(2) ];
tieInquisitor.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInquisitor.far = [];
tieInquisitor.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieInquisitor.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInquisitor.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(2) ];
tieInquisitor.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInquisitor.stressed = [];
tieInquisitor.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
tieInquisitor.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
tieInquisitor.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieInquisitor.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieInquisitor.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tieInquisitor.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieInquisitor.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieInquisitor.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE Interceptor

var tieInterceptor = {};
tieInterceptor.name = "TIE Interceptor";
tieInterceptor.image = "img/tieInterceptor.png";
tieInterceptor.faction = "Empire";
tieInterceptor.simple = [ F(2), F(3), F(4), TL(2), BL(2), BR(2), TR(2) ];
tieInterceptor.normal = [ TL(1), TL(3), BL(3), F(5), BR(3), TR(1), TR(3) ];
tieInterceptor.difficult = [ SLL(3), SLR(3), K(4) ];
tieInterceptor.actions = [ 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE' ];

tieInterceptor.closing = [];
tieInterceptor.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), SLR(3) ];
tieInterceptor.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tieInterceptor.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(3) ];
tieInterceptor.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(3) ];
tieInterceptor.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
tieInterceptor.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(3) ];
tieInterceptor.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(3) ];
tieInterceptor.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tieInterceptor.away = [];
tieInterceptor.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieInterceptor.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInterceptor.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(3), SLR(3) ];
tieInterceptor.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
tieInterceptor.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(3), SLL(3) ];
tieInterceptor.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieInterceptor.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInterceptor.far = [];
tieInterceptor.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieInterceptor.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInterceptor.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(3) ];
tieInterceptor.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInterceptor.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInterceptor.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInterceptor.stressed = [];
tieInterceptor.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
tieInterceptor.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tieInterceptor.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieInterceptor.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieInterceptor.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tieInterceptor.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieInterceptor.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieInterceptor.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE/ph Phantom

var tiePhantom = {};
tiePhantom.name = "TIE/ph Phantom";
tiePhantom.image = "img/tiePhantom.png";
tiePhantom.faction = "Empire";
tiePhantom.simple = [ BL(2), F(2), BR(2), F(3) ];
tiePhantom.normal = [ TL(1), TR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tiePhantom.difficult = [ K(3), K(4) ];
tiePhantom.actions = [ 'CLOAKING', 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

tiePhantom.closing = [];
tiePhantom.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
tiePhantom.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tiePhantom.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
tiePhantom.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
tiePhantom.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
tiePhantom.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
tiePhantom.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
tiePhantom.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tiePhantom.away = [];
tiePhantom.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
tiePhantom.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiePhantom.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiePhantom.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
tiePhantom.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
tiePhantom.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
tiePhantom.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiePhantom.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiePhantom.far = [];
tiePhantom.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
tiePhantom.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiePhantom.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePhantom.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePhantom.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tiePhantom.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePhantom.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePhantom.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiePhantom.stressed = [];
tiePhantom.stressed[0] = [ BL(2), F(2), F(2), F(2), F(3), F(3), F(3), F(4), F(4), BR(2) ];
tiePhantom.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiePhantom.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiePhantom.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiePhantom.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tiePhantom.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiePhantom.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiePhantom.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE/ca Punisher

var tiePunisher = {};
tiePunisher.name = "TIE/ca Punisher";
tiePunisher.image = "img/tiePunisher.png";
tiePunisher.faction = "Empire";
tiePunisher.simple = [ BL(1), F(1), BR(1), F(2) ];
tiePunisher.normal = [ BL(2), BR(2), TL(2), BL(3), F(3), BR(3), TR(2) ];
tiePunisher.difficult = [ STA(0), TL(3), TR(3), K(4) ];
tiePunisher.actions = [ 'TARGET_LOCK', 'FOCUS', 'BOOST2LOCK_D', 'BARREL_ROLL_D', 'RELOAD' ];

tiePunisher.closing = [];
tiePunisher.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), K(4), K(4), STA(0), STA(0) ];
tiePunisher.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
tiePunisher.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
tiePunisher.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
tiePunisher.closing[4] = [ TL(3), F(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tiePunisher.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
tiePunisher.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
tiePunisher.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

tiePunisher.away = [];
tiePunisher.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
tiePunisher.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiePunisher.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
tiePunisher.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tiePunisher.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
tiePunisher.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiePunisher.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiePunisher.far = [];
tiePunisher.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
tiePunisher.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiePunisher.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tiePunisher.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePunisher.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePunisher.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiePunisher.stressed = [];
tiePunisher.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
tiePunisher.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
tiePunisher.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiePunisher.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiePunisher.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiePunisher.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiePunisher.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiePunisher.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// TIE/sk Striker

var tieStriker = {};
tieStriker.name = "TIE/sk Striker";
tieStriker.image = "img/ship_tieStriker.png";
tieStriker.faction = "Empire";
tieStriker.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
tieStriker.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3) ];
tieStriker.difficult = [ K(1), SLL(2), SLR(2) ];
tieStriker.actions = [ 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

tieStriker.closing = [];
tieStriker.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(1), SLR(2) ];
tieStriker.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieStriker.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(1), SLR(2) ];
tieStriker.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(1), SLR(2) ];
tieStriker.closing[4] = [ TL(2), F(3), TR(2), K(1), K(1), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieStriker.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(1), SLL(2) ];
tieStriker.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(1), SLL(2) ];
tieStriker.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tieStriker.away = [];
tieStriker.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
tieStriker.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tieStriker.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(1), SLL(2), SLR(2) ];
tieStriker.away[4] = [ TL(2), TR(2), TR(2), K(1), K(1), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieStriker.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(1), SLR(2), SLL(2) ];
tieStriker.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tieStriker.far = [];
tieStriker.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
tieStriker.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tieStriker.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(1), SLR(2) ];
tieStriker.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tieStriker.stressed = [];
tieStriker.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
tieStriker.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
tieStriker.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
tieStriker.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE/ba Interceptor

var tieba = {};
tieba.name = "TIE/ba Interceptor";
tieba.image = "img/tie_ba.png";
tieba.faction = "First Order";
tieba.simple = [ TL(1), BL(1), BR(1), TR(1), BL(2), F(2), BR(2), F(3), F(4) ];
tieba.normal = [ TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(5) ];
tieba.difficult = [ SLL(2), SLR(2), K(5) ];
tieba.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST', 'EVADE' ];

tieba.closing = [];
tieba.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(5), SLR(2) ];
tieba.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieba.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), SLR(2) ];
tieba.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), SLR(2) ];
tieba.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieba.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), SLL(2) ];
tieba.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), SLL(2) ];
tieba.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tieba.away = [];
tieba.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieba.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieba.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieba.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), SLL(2), SLR(2) ];
tieba.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieba.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), SLR(2), SLL(2) ];
tieba.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieba.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieba.far = [];
tieba.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieba.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieba.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieba.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieba.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), SLR(2) ];
tieba.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieba.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieba.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieba.stressed = [];
tieba.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
tieba.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
tieba.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieba.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieba.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tieba.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieba.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieba.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE/fo Fighter

var tiefo = {};
tiefo.name = "TIE/fo Fighter";
tiefo.image = "img/tiefo.png";
tiefo.faction = "First Order";
tiefo.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
tiefo.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tiefo.difficult = [ SLL(2), SLR(2), K(4) ];
tiefo.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

tiefo.closing = [];
tiefo.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), SLR(2) ];
tiefo.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tiefo.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(2) ];
tiefo.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(2) ];
tiefo.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tiefo.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(2) ];
tiefo.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(2) ];
tiefo.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tiefo.away = [];
tiefo.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tiefo.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiefo.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiefo.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(2), SLR(2) ];
tiefo.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tiefo.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(2), SLL(2) ];
tiefo.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiefo.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiefo.far = [];
tiefo.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tiefo.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiefo.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiefo.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiefo.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(2) ];
tiefo.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiefo.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiefo.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiefo.stressed = [];
tiefo.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
tiefo.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiefo.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiefo.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiefo.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tiefo.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiefo.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiefo.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Mod TIE/ln Fighter (Mining Guild)

var tiemod = {};
tiemod.name = "Mod TIE/ln Fighter (Mining Guild)";
tiemod.image = "img/tie_miner.png";
tiemod.faction = "Scum";
tiemod.simple = [ BL(2), F(2), BR(2), F(3) ];
tiemod.normal = [ TL(1), TR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tiemod.difficult = [ K(3), F(5) ];
tiemod.actions = [ 'FOCUS', 'BARREL_ROLL', 'EVADE' ];

tiemod.closing = [];
tiemod.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
tiemod.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tiemod.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
tiemod.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
tiemod.closing[4] = [ TL(3), F(5), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
tiemod.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
tiemod.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
tiemod.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tiemod.away = [];
tiemod.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tiemod.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiemod.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiemod.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
tiemod.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
tiemod.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
tiemod.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiemod.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiemod.far = [];
tiemod.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tiemod.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiemod.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiemod.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiemod.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
tiemod.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiemod.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiemod.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiemod.stressed = [];
tiemod.stressed[0] = [ BL(2), F(2), F(2), F(2), F(3), F(3), F(3), F(4), F(4), BR(2) ];
tiemod.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiemod.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiemod.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiemod.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tiemod.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiemod.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiemod.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// TIE Reaper

var tiereaper = {};
tiereaper.name = "TIE Reaper";
tiereaper.image = "img/tie_reaper.png";
tiereaper.faction = "Empire";
tiereaper.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
tiereaper.normal = [ BL(2), BR(2), BL(3), BR(3) ];
tiereaper.difficult = [ STA(0), TL(1), TR(1), SLL(1), SLR(1), TL(2), TR(2) ];
tiereaper.actions = [ 'FOCUS', 'COORDINATE_D', 'JAM', 'EVADE' ];

tiereaper.closing = [];
tiereaper.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), SLL(1), SLL(1), STA(0), STA(0) ];
tiereaper.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), STA(0) ];
tiereaper.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
tiereaper.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
tiereaper.closing[4] = [ TL(2), BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2) ];
tiereaper.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
tiereaper.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
tiereaper.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), STA(0) ];

tiereaper.away = [];
tiereaper.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
tiereaper.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiereaper.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
tiereaper.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
tiereaper.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
tiereaper.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
tiereaper.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
tiereaper.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tiereaper.far = [];
tiereaper.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
tiereaper.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiereaper.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
tiereaper.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2), TR(2) ];
tiereaper.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tiereaper.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2), TL(2) ];
tiereaper.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
tiereaper.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tiereaper.stressed = [];
tiereaper.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
tiereaper.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3) ];
tiereaper.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
tiereaper.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3) ];
tiereaper.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
tiereaper.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
tiereaper.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3) ];
tiereaper.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(3), BL(3) ];

// ****************************************************************************
// TIE/sf Special Forces

var tiesf = {};
tiesf.name = "TIE/sf Special Forces";
tiesf.image = "img/ship_tiesf.png";
tiesf.faction = "First Order";
tiesf.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
tiesf.normal = [ TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tiesf.difficult = [ TL(1), TR(1), SLL(3), SLR(3) ];
tiesf.actions = [ 'LOCK2ROTATE', 'FOCUS2ROTATE', 'BARREL_ROLL2ROTATE', 'EVADE2ROTATE' ];

tiesf.closing = [];
tiesf.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), SLL(3), SLL(3) ];
tiesf.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tiesf.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
tiesf.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(3), SLL(3) ];
tiesf.closing[4] = [ TL(3), F(4), TR(3), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
tiesf.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
tiesf.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(3), SLR(3) ];
tiesf.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tiesf.away = [];
tiesf.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(5) ];
tiesf.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiesf.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiesf.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), SLL(3), SLR(3), SLR(3) ];
tiesf.away[4] = [ TL(3), TR(3), TR(3), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
tiesf.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), SLR(3), SLL(3), SLL(3) ];
tiesf.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiesf.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiesf.far = [];
tiesf.far[0] = [ BL(3), F(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), BR(3) ];
tiesf.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiesf.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiesf.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiesf.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), SLR(3), SLR(3) ];
tiesf.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiesf.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiesf.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiesf.stressed = [];
tiesf.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
tiesf.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
tiesf.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiesf.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiesf.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiesf.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiesf.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiesf.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// TIE/vn Silencer

var tiesilencer = {};
tiesilencer.name = "TIE/vn Silencer";
tiesilencer.image = "img/tie_silencer.png";
tiesilencer.faction = "First Order";
tiesilencer.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3), F(4), F(5) ];
tiesilencer.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3) ];
tiesilencer.difficult = [ SLL(3), SLR(3), K(4) ];
tiesilencer.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL', 'BOOST' ];

tiesilencer.closing = [];
tiesilencer.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), SLR(3) ];
tiesilencer.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tiesilencer.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(3) ];
tiesilencer.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(3) ];
tiesilencer.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
tiesilencer.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(3) ];
tiesilencer.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(3) ];
tiesilencer.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tiesilencer.away = [];
tiesilencer.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tiesilencer.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiesilencer.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiesilencer.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), SLL(3), SLR(3) ];
tiesilencer.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
tiesilencer.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), SLR(3), SLL(3) ];
tiesilencer.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiesilencer.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiesilencer.far = [];
tiesilencer.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tiesilencer.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiesilencer.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiesilencer.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiesilencer.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), SLR(3) ];
tiesilencer.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiesilencer.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiesilencer.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiesilencer.stressed = [];
tiesilencer.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
tiesilencer.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiesilencer.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiesilencer.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiesilencer.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
tiesilencer.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiesilencer.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiesilencer.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// V-19 Torrent

var torrent = {};
torrent.name = "V-19 Torrent";
torrent.image = "img/v-19.png";
torrent.faction = "Republic";
torrent.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
torrent.normal = [ TL(2), BL(2), BR(2), TR(2), F(4) ];
torrent.difficult = [ TL(1), TR(1), TRL(2), TRR(2), BL(3), BR(3), K(3) ];
torrent.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL2EVADE_D', 'EVADE' ];

torrent.closing = [];
torrent.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), TRR(2) ];
torrent.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
torrent.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), TRR(2) ];
torrent.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), TRR(2) ];
torrent.closing[4] = [ TL(2), F(4), TR(2), K(3), K(3), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
torrent.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), TRL(2) ];
torrent.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), TRL(2) ];
torrent.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

torrent.away = [];
torrent.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
torrent.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
torrent.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
torrent.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), TRL(2), TRR(2) ];
torrent.away[4] = [ TL(2), TR(2), TR(2), K(3), K(3), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
torrent.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), TRR(2), TRL(2) ];
torrent.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
torrent.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

torrent.far = [];
torrent.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
torrent.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
torrent.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
torrent.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
torrent.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(3), TRR(2) ];
torrent.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
torrent.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
torrent.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

torrent.stressed = [];
torrent.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
torrent.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
torrent.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
torrent.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
torrent.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
torrent.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
torrent.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
torrent.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// GR-75 Medium Transport

var transport = {};
transport.name = "GR-75 Medium Transport";
transport.image = "img/transport.png";
transport.faction = "Rebel";
transport.simple = [ BL(1), F(1), BR(1) ];
transport.normal = [ BL(2), F(2), BR(2) ];
transport.difficult = [ BL(0), STA(0), BR(0), F(3), F(4) ];
transport.actions = [ 'FOCUS', 'REINFORCE_D', 'COORDINATE', 'JAM', 'TARGET_LOCK_D' ];

transport.closing = [];
transport.closing[0] = [ BL(0), F(1), F(1), F(1), F(2), F(2), F(2), BR(0), STA(0), STA(0) ];
transport.closing[1] = [ F(1), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1), STA(0), STA(0) ];
transport.closing[2] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
transport.closing[3] = [ F(1), F(1), F(2), BR(0), BR(0), BR(0), BR(0), BR(1), BR(1), BR(1) ];
transport.closing[4] = [ BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), BR(0), BR(0), BR(1), BR(1) ];
transport.closing[5] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
transport.closing[6] = [ F(1), F(1), F(2), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1) ];
transport.closing[7] = [ F(1), BL(0), BL(0), BL(0), BL(0), BL(1), BL(1), BL(1), STA(0), STA(0) ];

transport.away = [];
transport.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
transport.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
transport.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
transport.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
transport.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

transport.far = [];
transport.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
transport.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
transport.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
transport.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
transport.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

transport.stressed = [];
transport.stressed[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
transport.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.stressed[2] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.stressed[3] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
transport.stressed[5] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.stressed[6] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// Upsilon-class Command Shuttle

var upsilon = {};
upsilon.name = "Upsilon-class Command Shuttle";
upsilon.image = "img/ship_upsilon.png";
upsilon.faction = "First Order";
upsilon.simple = [ F(1), BL(2), F(2), BR(2) ];
upsilon.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), F(3), BR(3) ];
upsilon.difficult = [ STA(0), TL(1), TR(1), TL(3), TR(3) ];
upsilon.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE', 'REINFORCE', 'JAM' ];

upsilon.closing = [];
upsilon.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
upsilon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), STA(0) ];
upsilon.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
upsilon.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
upsilon.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(3) ];
upsilon.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
upsilon.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
upsilon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), STA(0) ];

upsilon.away = [];
upsilon.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
upsilon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
upsilon.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
upsilon.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
upsilon.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
upsilon.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
upsilon.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
upsilon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

upsilon.far = [];
upsilon.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
upsilon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
upsilon.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
upsilon.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
upsilon.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
upsilon.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
upsilon.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
upsilon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

upsilon.stressed = [];
upsilon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
upsilon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
upsilon.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
upsilon.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
upsilon.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
upsilon.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
upsilon.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
upsilon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// UT-60D U-Wing

var uwing = {};
uwing.name = "UT-60D U-Wing";
uwing.image = "img/ship_uwing.png";
uwing.faction = "Rebel";
uwing.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
uwing.normal = [ TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
uwing.difficult = [ STA(0) ];
uwing.actions = [ 'TARGET_LOCK', 'FOCUS', 'COORDINATE_D' ];

uwing.closing = [];
uwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
uwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
uwing.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwing.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwing.closing[4] = [ BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwing.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwing.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

uwing.away = [];
uwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
uwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
uwing.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwing.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwing.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwing.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwing.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

uwing.far = [];
uwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
uwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
uwing.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
uwing.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwing.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
uwing.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwing.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
uwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

uwing.stressed = [];
uwing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
uwing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwing.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwing.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwing.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
uwing.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwing.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// UT-60D U-Wing (K2SO)

var uwingk2so = {};
uwingk2so.name = "UT-60D U-Wing (K2SO)";
uwingk2so.image = "img/ship_uwing.png";
uwingk2so.faction = "Rebel";
uwingk2so.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
uwingk2so.normal = [ TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
uwingk2so.difficult = [ STA(0) ];
uwingk2so.actions = [ 'TARGET_LOCK', 'CALCULATE', 'COORDINATE_D' ];

uwingk2so.closing = [];
uwingk2so.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
uwingk2so.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
uwingk2so.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwingk2so.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwingk2so.closing[4] = [ BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwingk2so.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwingk2so.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwingk2so.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

uwingk2so.away = [];
uwingk2so.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
uwingk2so.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
uwingk2so.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwingk2so.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwingk2so.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwingk2so.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwingk2so.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwingk2so.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

uwingk2so.far = [];
uwingk2so.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
uwingk2so.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
uwingk2so.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
uwingk2so.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwingk2so.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
uwingk2so.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwingk2so.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
uwingk2so.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

uwingk2so.stressed = [];
uwingk2so.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
uwingk2so.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwingk2so.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwingk2so.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
uwingk2so.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
uwingk2so.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwingk2so.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
uwingk2so.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Vulture Class (Droid Fighter)

var vulture = {};
vulture.name = "Vulture Class (Droid Fighter)";
vulture.image = "img/vulture.png";
vulture.faction = "Seperatist";
vulture.simple = [ TL(2), F(2), TR(2), F(3), F(4) ];
vulture.normal = [ TL(1), TR(1), BL(2), BR(2), TL(3), TR(3), F(5) ];
vulture.difficult = [ K(1), TRL(2), TRR(2), BL(3), BR(3) ];
vulture.actions = [ 'TARGET_LOCK', 'CALCULATE', 'BARREL_ROLL2CALC' ];

vulture.closing = [];
vulture.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(1), TRR(2) ];
vulture.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
vulture.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(1), TRR(2) ];
vulture.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(1), TRR(2) ];
vulture.closing[4] = [ TL(3), F(5), TR(3), K(1), K(1), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
vulture.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(1), TRL(2) ];
vulture.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(1), TRL(2) ];
vulture.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

vulture.away = [];
vulture.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
vulture.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
vulture.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
vulture.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(1), TRL(2), TRR(2) ];
vulture.away[4] = [ TL(3), TR(3), TR(3), K(1), K(1), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
vulture.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(1), TRR(2), TRL(2) ];
vulture.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
vulture.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

vulture.far = [];
vulture.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
vulture.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
vulture.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
vulture.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
vulture.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(1), TRR(2) ];
vulture.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
vulture.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
vulture.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

vulture.stressed = [];
vulture.stressed[0] = [ BL(2), BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
vulture.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
vulture.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
vulture.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
vulture.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
vulture.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
vulture.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
vulture.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

// ****************************************************************************
// Xi-class Light Shuttle

var xi = {};
xi.name = "Xi-class Light Shuttle";
xi.image = "img/xi_shuttle.png";
xi.faction = "First Order";
xi.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
xi.normal = [ TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
xi.difficult = [ STA(0), TL(3), TR(3) ];
xi.actions = [ 'FOCUS', 'COORDINATE_D', 'JAM', 'TARGET_LOCK_D' ];

xi.closing = [];
xi.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), BR(1), STA(0), STA(0) ];
xi.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), STA(0) ];
xi.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
xi.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(3) ];
xi.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
xi.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
xi.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(3) ];
xi.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), STA(0) ];

xi.away = [];
xi.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
xi.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xi.away[2] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
xi.away[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
xi.away[4] = [ TL(3), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
xi.away[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
xi.away[6] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
xi.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

xi.far = [];
xi.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
xi.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xi.far[2] = [ BR(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), BR(3) ];
xi.far[3] = [ BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3), TR(3) ];
xi.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
xi.far[5] = [ BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3), TL(3) ];
xi.far[6] = [ BL(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), BL(3) ];
xi.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

xi.stressed = [];
xi.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
xi.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
xi.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
xi.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2), TR(2) ];
xi.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
xi.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
xi.stressed[6] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2), TL(2) ];
xi.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// T-65 X-Wing

var xwing = {};
xwing.name = "T-65 X-Wing";
xwing.image = "img/xwing.png";
xwing.faction = "Rebel";
xwing.simple = [ F(1), BL(1), BR(1), F(2), BL(2), BR(2) ];
xwing.normal = [ TL(2), TL(3), BL(3), F(3), F(4), BR(3), TR(2), TR(3) ];
xwing.difficult = [ TRL(3), TRR(3), K(4) ];
xwing.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL' ];

xwing.closing = [];
xwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), TRR(3) ];
xwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
xwing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRR(3) ];
xwing.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), TRR(3) ];
xwing.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
xwing.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), TRL(3) ];
xwing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRL(3) ];
xwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

xwing.away = [];
xwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
xwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xwing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
xwing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(3), TRR(3) ];
xwing.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
xwing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(3), TRL(3) ];
xwing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
xwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

xwing.far = [];
xwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
xwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xwing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(3) ];
xwing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
xwing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
xwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

xwing.stressed = [];
xwing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
xwing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
xwing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
xwing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
xwing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
xwing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// BTL-A4 Y-Wing

var ywinga4 = {};
ywinga4.name = "BTL-A4 Y-Wing";
ywinga4.image = "img/ywing.png";
ywinga4.faction = "Rebel";
ywinga4.simple = [ BL(1), BR(1), F(1), F(2) ];
ywinga4.normal = [ TL(2), BL(2), BL(3), F(3), BR(2), BR(3), TR(2) ];
ywinga4.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywinga4.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D', 'RELOAD_D' ];

ywinga4.closing = [];
ywinga4.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
ywinga4.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ywinga4.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
ywinga4.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
ywinga4.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywinga4.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
ywinga4.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
ywinga4.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ywinga4.away = [];
ywinga4.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ywinga4.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywinga4.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ywinga4.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
ywinga4.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywinga4.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
ywinga4.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ywinga4.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywinga4.far = [];
ywinga4.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ywinga4.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywinga4.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywinga4.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywinga4.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
ywinga4.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywinga4.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywinga4.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywinga4.stressed = [];
ywinga4.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
ywinga4.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ywinga4.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywinga4.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywinga4.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// BTL-A4 Y-Wing (Scum)

var ywinga4S = {};
ywinga4S.name = "BTL-A4 Y-Wing (Scum)";
ywinga4S.image = "img/ywingS.png";
ywinga4S.faction = "Scum";
ywinga4S.simple = [ BL(1), BR(1), F(1), F(2) ];
ywinga4S.normal = [ TL(2), BL(2), BL(3), F(3), BR(2), BR(3), TR(2) ];
ywinga4S.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywinga4S.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D', 'RELOAD_D' ];

ywinga4S.closing = [];
ywinga4S.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
ywinga4S.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ywinga4S.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
ywinga4S.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
ywinga4S.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywinga4S.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
ywinga4S.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
ywinga4S.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ywinga4S.away = [];
ywinga4S.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ywinga4S.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywinga4S.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ywinga4S.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
ywinga4S.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywinga4S.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
ywinga4S.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ywinga4S.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywinga4S.far = [];
ywinga4S.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ywinga4S.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywinga4S.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywinga4S.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywinga4S.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
ywinga4S.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywinga4S.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywinga4S.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywinga4S.stressed = [];
ywinga4S.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
ywinga4S.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ywinga4S.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywinga4S.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywinga4S.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// BTL-B Y-Wing

var ywingb = {};
ywingb.name = "BTL-B Y-Wing";
ywingb.image = "img/ywingB.png";
ywingb.faction = "Republic";
ywingb.simple = [ F(1), F(2) ];
ywingb.normal = [ BL(1), BR(1), TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
ywingb.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywingb.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D', 'RELOAD_D' ];

ywingb.closing = [];
ywingb.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
ywingb.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ywingb.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
ywingb.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
ywingb.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywingb.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
ywingb.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
ywingb.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ywingb.away = [];
ywingb.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ywingb.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywingb.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ywingb.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
ywingb.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywingb.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
ywingb.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ywingb.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywingb.far = [];
ywingb.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ywingb.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywingb.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywingb.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywingb.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
ywingb.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywingb.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywingb.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywingb.stressed = [];
ywingb.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
ywingb.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ywingb.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywingb.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywingb.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywingb.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywingb.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywingb.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Z-95-AF4 Headhunter

var z95 = {};
z95.name = "Z-95-AF4 Headhunter";
z95.image = "img/z95.png";
z95.faction = "Rebel";
z95.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
z95.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
z95.difficult = [ K(3), K(4) ];
z95.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

z95.closing = [];
z95.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
z95.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
z95.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
z95.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
z95.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
z95.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
z95.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
z95.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

z95.away = [];
z95.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
z95.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
z95.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
z95.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
z95.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
z95.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
z95.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

z95.far = [];
z95.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
z95.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
z95.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

z95.stressed = [];
z95.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
z95.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
z95.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
z95.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Z-95-AF4 Headhunter (Scum)

var z95S = {};
z95S.name = "Z-95-AF4 Headhunter (Scum)";
z95S.image = "img/z95S.png";
z95S.faction = "Scum";
z95S.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
z95S.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
z95S.difficult = [ K(3), K(4) ];
z95S.actions = [ 'TARGET_LOCK', 'FOCUS', 'BARREL_ROLL_D' ];

z95S.closing = [];
z95S.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
z95S.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
z95S.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
z95S.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
z95S.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
z95S.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
z95S.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
z95S.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

z95S.away = [];
z95S.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
z95S.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95S.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
z95S.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
z95S.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
z95S.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
z95S.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
z95S.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

z95S.far = [];
z95S.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
z95S.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95S.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95S.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95S.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
z95S.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95S.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95S.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

z95S.stressed = [];
z95S.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
z95S.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
z95S.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95S.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95S.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
z95S.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95S.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
z95S.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];


// ****************************************************************************
// Ships

var ships = [ alpha, arc170, arc170R, auzituck, awing, belbullab, bwing, corvette, crocscum, crocsep, custfalcon, decimator, delta7, escape, ewing, falcon, fang, fireball, firesprays, ghost, gozanti, gozantifo, hmp, houndstooth, hwk290, hwk290S, hyena, hyenadbs32c, ig2000, kihraxz, kimogila, kwing, laati, lambda, lancer, m3a, mg100, mistHunter, n1, nantex, outrider, phantom, punishingOne, quadjumper, raider, respod, respodbb8, restransport, rz2awing, scavfalcon, scurrgs, sheathipede, sithinf, starviper, starviper_guri, t70xwing, tie, tieAdvanced, tieAggressor, tieBomber, tieDefender, tieInquisitor, tieInterceptor, tiePhantom, tiePunisher, tieStriker, tieba, tiefo, tiemod, tiereaper, tiesf, tiesilencer, torrent, transport, upsilon, uwing, uwingk2so, vulture, xi, xwing, ywinga4, ywinga4S, ywingb, z95, z95S ];