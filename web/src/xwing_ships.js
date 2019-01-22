// ****************************************************************************
// X-Wing Miniatures AI - Ships 
// Generated: 2019-01-21 20:20:45

var VERSION = "1.14.0";


// ****************************************************************************
// Alpha-Class Star Wing

var alpha = {};
alpha.name = "Alpha-Class Star Wing";
alpha.image = "img/alpha.png";
alpha.faction = "empire";
alpha.simple = [ BL(2), F(1), BR(2), F(2) ];
alpha.normal = [ TL(3), TR(3), TL(2), BL(1), BR(1), TR(2), BL(3), F(3), BR(3) ];
alpha.difficult = [ F(4) ];
alpha.actions = (FOCUS + SLAM + TARGET_LOCK + RECOVER);

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
// ARC-170

var arc170 = {};
arc170.name = "ARC-170";
arc170.image = "img/ship_arc170.png";
arc170.faction = "rebel";
arc170.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
arc170.normal = [ TL(2), TR(2), BL(3), F(3), BR(3) ];
arc170.difficult = [ TR(3), TL(3), F(4), K(4) ];
arc170.actions = (FOCUS + TARGET_LOCK);

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
// Auzituck Gunship

var auzituck = {};
auzituck.name = "Auzituck Gunship";
auzituck.image = "img/auzituck.png";
auzituck.faction = "rebel";
auzituck.simple = [ BL(1), F(1), BR(1), BL(2), F(2), F(3) ];
auzituck.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
auzituck.difficult = [ F(5) ];
auzituck.actions = (FOCUS + REINFORCE);

auzituck.closing = [];
auzituck.closing[0] = [ BL(1), BL(2), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2) ];
auzituck.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
auzituck.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
auzituck.closing[4] = [ TL(3), BL(2), BL(2), BL(3), F(5), BR(2), BR(2), BR(3), BR(3), TR(3) ];
auzituck.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
auzituck.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

auzituck.away = [];
auzituck.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
auzituck.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
auzituck.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
auzituck.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.away[4] = [ TL(3), BL(2), BL(2), BL(3), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
auzituck.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
auzituck.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

auzituck.far = [];
auzituck.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
auzituck.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
auzituck.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
auzituck.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

auzituck.stressed = [];
auzituck.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
auzituck.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
auzituck.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
auzituck.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(3), BR(1), BR(2), BR(3) ];
auzituck.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
auzituck.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// A-Wing

var awing = {};
awing.name = "A-Wing";
awing.image = "img/awing.png";
awing.faction = "rebel";
awing.simple = [ F(2), F(3), F(4), F(5), TL(2), BL(2), BR(2), TR(2) ];
awing.normal = [ TL(1), TL(3), BL(3), BR(3), TR(1), TR(3) ];
awing.difficult = [ K(3), K(5) ];
awing.actions = (TARGET_LOCK + BOOST + FOCUS + EVADE);

awing.closing = [];
awing.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
awing.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
awing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
awing.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
awing.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
awing.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
awing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
awing.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

awing.away = [];
awing.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
awing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
awing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
awing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), K(5), K(5) ];
awing.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
awing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), K(5), K(5) ];
awing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
awing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

awing.far = [];
awing.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
awing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
awing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
awing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
awing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), K(5) ];
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
// B/SF-17 Heavy Bomber

var bsf17 = {};
bsf17.name = "B/SF-17 Heavy Bomber";
bsf17.image = "img/mg-100.png";
bsf17.faction = "rebel";
bsf17.simple = [ BL(1), F(1), BR(1), F(2) ];
bsf17.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
bsf17.difficult = [ TL(1), TR(1), F(0) ];
bsf17.actions = (FOCUS + TARGET_LOCK);

bsf17.closing = [];
bsf17.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), F(1), BR(1) ];
bsf17.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
bsf17.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.closing[3] = [ BR(1), BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
bsf17.closing[4] = [ TL(2), BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2) ];
bsf17.closing[5] = [ BL(1), BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
bsf17.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

bsf17.away = [];
bsf17.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
bsf17.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bsf17.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
bsf17.away[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
bsf17.away[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
bsf17.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

bsf17.far = [];
bsf17.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
bsf17.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bsf17.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
bsf17.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

bsf17.stressed = [];
bsf17.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
bsf17.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
bsf17.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bsf17.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
bsf17.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
bsf17.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// B-Wing

var bwing = {};
bwing.name = "B-Wing";
bwing.image = "img/bwing.png";
bwing.faction = "rebel";
bwing.simple = [ BL(1), F(1), F(2), BR(1) ];
bwing.normal = [ TL(2), BL(2), F(3), BR(2), TR(2) ];
bwing.difficult = [ TL(1), BL(3), F(4), BR(3), TR(1), K(2) ];
bwing.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

bwing.closing = [];
bwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(2), K(2) ];
bwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
bwing.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), K(2) ];
bwing.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), K(2) ];
bwing.closing[4] = [ TL(2), F(4), TR(2), K(2), K(2), K(2), K(2), K(2), K(2), K(2) ];
bwing.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), K(2) ];
bwing.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), K(2) ];
bwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

bwing.away = [];
bwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
bwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bwing.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
bwing.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), K(2), K(2) ];
bwing.away[4] = [ TL(2), TR(2), TR(2), K(2), K(2), K(2), K(2), K(2), K(2), K(2) ];
bwing.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), K(2), K(2) ];
bwing.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
bwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

bwing.far = [];
bwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
bwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
bwing.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
bwing.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(2), K(2) ];
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
// Imperial Assault Carrier

var carrier = {};
carrier.name = "Imperial Assault Carrier";
carrier.image = "img/carrier.png";
carrier.faction = "empire";
carrier.simple = [  ];
carrier.normal = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3), F(4) ];
carrier.difficult = [  ];
carrier.actions = (RECOVER + REINFORCE + COORDINATE + TARGET_LOCK);

carrier.closing = [];
carrier.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
carrier.closing[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.closing[2] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.closing[3] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.closing[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
carrier.closing[5] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
carrier.closing[6] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
carrier.closing[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

carrier.away = [];
carrier.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
carrier.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
carrier.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
carrier.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
carrier.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

carrier.far = [];
carrier.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
carrier.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
carrier.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
carrier.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
carrier.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

carrier.stressed = [];
carrier.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
carrier.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
carrier.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
carrier.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
carrier.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
carrier.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
carrier.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// CR90 Corvette

var corvette = {};
corvette.name = "CR90 Corvette";
corvette.image = "img/corvette.png";
corvette.faction = "rebel";
corvette.simple = [  ];
corvette.normal = [ BL(1), BR(1), BL(2), F(2), BR(2), F(3), F(4) ];
corvette.difficult = [  ];
corvette.actions = (COORDINATE + RECOVER + REINFORCE + TARGET_LOCK);

corvette.closing = [];
corvette.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(1) ];
corvette.closing[1] = [ F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.closing[2] = [ F(2), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.closing[3] = [ F(2), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.closing[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
corvette.closing[5] = [ F(2), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.closing[6] = [ F(2), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.closing[7] = [ F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

corvette.away = [];
corvette.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
corvette.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
corvette.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
corvette.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
corvette.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

corvette.far = [];
corvette.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
corvette.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
corvette.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
corvette.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
corvette.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

corvette.stressed = [];
corvette.stressed[0] = [ BL(1), F(2), F(2), F(2), F(3), F(3), F(3), F(4), F(4), BR(1) ];
corvette.stressed[1] = [ F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
corvette.stressed[2] = [ F(2), F(3), F(4), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.stressed[3] = [ F(2), F(3), F(4), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
corvette.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
corvette.stressed[5] = [ F(2), F(3), F(4), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.stressed[6] = [ F(2), F(3), F(4), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
corvette.stressed[7] = [ F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// VT-49 Decimator

var decimator = {};
decimator.name = "VT-49 Decimator";
decimator.image = "img/decimator.png";
decimator.faction = "empire";
decimator.simple = [ BL(2), F(2), F(3), BR(2) ];
decimator.normal = [ TL(2), TL(3), BL(1), BL(3), F(1), F(4), BR(1), BR(3), TR(2), TR(3) ];
decimator.difficult = [  ];
decimator.actions = (FOCUS + TARGET_LOCK);

decimator.closing = [];
decimator.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
decimator.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
decimator.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
decimator.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
decimator.closing[4] = [ TL(2), TL(3), TL(3), F(3), F(4), F(4), TR(2), TR(2), TR(3), TR(3) ];
decimator.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
decimator.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
decimator.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

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
// E-Wing

var ewing = {};
ewing.name = "E-Wing";
ewing.image = "img/ewing.png";
ewing.faction = "rebel";
ewing.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
ewing.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
ewing.difficult = [ K(3), K(4) ];
ewing.actions = (BARREL_ROLL + EVADE + FOCUS + TARGET_LOCK);

ewing.closing = [];
ewing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
ewing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ewing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
ewing.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
ewing.closing[4] = [ TL(3), F(5), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
ewing.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
ewing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
ewing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ewing.away = [];
ewing.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
ewing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ewing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ewing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
ewing.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
ewing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
ewing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ewing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ewing.far = [];
ewing.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
ewing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ewing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ewing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
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
// YT-1300

var falcon = {};
falcon.name = "YT-1300";
falcon.image = "img/falcon.png";
falcon.faction = "rebel";
falcon.simple = [ F(1), F(2), BL(1), BR(1) ];
falcon.normal = [ TL(1), TL(2), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(1), TR(2) ];
falcon.difficult = [ K(3), K(4) ];
falcon.actions = (TARGET_LOCK + FOCUS);

falcon.closing = [];
falcon.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
falcon.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
falcon.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
falcon.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
falcon.closing[4] = [ TL(2), F(4), TR(2), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
falcon.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
falcon.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
falcon.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

falcon.away = [];
falcon.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
falcon.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
falcon.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
falcon.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(4), K(4) ];
falcon.away[4] = [ TL(2), TR(2), TR(2), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
falcon.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(4), K(4) ];
falcon.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
falcon.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

falcon.far = [];
falcon.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
falcon.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
falcon.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
falcon.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
falcon.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), K(4) ];
falcon.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
falcon.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
falcon.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

falcon.stressed = [];
falcon.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
falcon.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
falcon.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
falcon.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
falcon.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
falcon.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
falcon.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
falcon.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Ghost

var ghost = {};
ghost.name = "Ghost";
ghost.image = "img/ghost.png";
ghost.faction = "rebel";
ghost.simple = [ F(1), BL(2), F(2), BR(2) ];
ghost.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
ghost.difficult = [ TL(1), TR(1), TL(3), TR(3), K(5) ];
ghost.actions = (FOCUS + TARGET_LOCK + EVADE);

ghost.closing = [];
ghost.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(5), K(5) ];
ghost.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
ghost.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
ghost.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(5), K(5) ];
ghost.closing[4] = [ TL(3), F(4), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
ghost.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(5), K(5) ];
ghost.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), K(5) ];
ghost.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

ghost.away = [];
ghost.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ghost.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ghost.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ghost.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), K(5), K(5) ];
ghost.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
ghost.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), K(5), K(5) ];
ghost.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ghost.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ghost.far = [];
ghost.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ghost.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ghost.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ghost.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ghost.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), K(5) ];
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
// Hound's Tooth

var houndstooth = {};
houndstooth.name = "Hound's Tooth";
houndstooth.image = "img/houndstooth.png";
houndstooth.faction = "scum";
houndstooth.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
houndstooth.normal = [ BL(2), BR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
houndstooth.difficult = [ F(0), TL(2), TR(2) ];
houndstooth.actions = (TARGET_LOCK + FOCUS);

houndstooth.closing = [];
houndstooth.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), F(1), BR(1) ];
houndstooth.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
houndstooth.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
houndstooth.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(4), BR(2), BR(2), BR(3), BR(3), TR(3) ];
houndstooth.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
houndstooth.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

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
// HWK-290

var hwk290 = {};
hwk290.name = "HWK-290";
hwk290.image = "img/hwk290.png";
hwk290.faction = "rebel";
hwk290.simple = [ BL(1), F(1), F(2), BR(1) ];
hwk290.normal = [ TL(2), BL(2), F(3), BR(2), TR(2) ];
hwk290.difficult = [ BL(3), F(4), BR(3) ];
hwk290.actions = (FOCUS + TARGET_LOCK);

hwk290.closing = [];
hwk290.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
hwk290.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
hwk290.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.closing[4] = [ TL(2), TL(2), TL(2), F(3), F(4), F(4), TR(2), TR(2), TR(2), TR(2) ];
hwk290.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

hwk290.away = [];
hwk290.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
hwk290.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
hwk290.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.away[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

hwk290.far = [];
hwk290.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
hwk290.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
hwk290.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

hwk290.stressed = [];
hwk290.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
hwk290.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
hwk290.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
hwk290.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
hwk290.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// IG-2000

var ig2000 = {};
ig2000.name = "IG-2000";
ig2000.image = "img/ig2000.png";
ig2000.faction = "scum";
ig2000.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), BL(3), F(3), BR(3) ];
ig2000.normal = [ TL(1), TR(1), TL(2), TR(2) ];
ig2000.difficult = [ SLL(3), SLR(3), K(4) ];
ig2000.actions = (TARGET_LOCK + BOOST + FOCUS + BARREL_ROLL);

ig2000.closing = [];
ig2000.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(3) ];
ig2000.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
ig2000.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ig2000.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(3) ];
ig2000.closing[4] = [ TL(2), F(3), TR(2), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ig2000.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ig2000.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(3) ];
ig2000.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

ig2000.away = [];
ig2000.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
ig2000.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
ig2000.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
ig2000.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLL(3), SLR(3) ];
ig2000.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3) ];
ig2000.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLR(3), SLL(3) ];
ig2000.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
ig2000.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

ig2000.far = [];
ig2000.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
ig2000.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
ig2000.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), SLR(3) ];
ig2000.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

ig2000.stressed = [];
ig2000.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
ig2000.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
ig2000.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ig2000.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
ig2000.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ig2000.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Kihraxz

var kihraxz = {};
kihraxz.name = "Kihraxz";
kihraxz.image = "img/kihraxz.png";
kihraxz.faction = "scum";
kihraxz.simple = [ BL(1), BR(1), BL(2), F(2), BR(2) ];
kihraxz.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
kihraxz.difficult = [ K(4), K(5) ];
kihraxz.actions = (TARGET_LOCK + FOCUS);

kihraxz.closing = [];
kihraxz.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), K(4) ];
kihraxz.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
kihraxz.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
kihraxz.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
kihraxz.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), K(4), K(5), K(5), K(5), K(5) ];
kihraxz.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
kihraxz.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
kihraxz.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

kihraxz.away = [];
kihraxz.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
kihraxz.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
kihraxz.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(5), K(5) ];
kihraxz.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), K(4), K(5), K(5), K(5), K(5) ];
kihraxz.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(5), K(5) ];
kihraxz.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
kihraxz.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

kihraxz.far = [];
kihraxz.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
kihraxz.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
kihraxz.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kihraxz.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(5), K(5) ];
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
// M12-L Kimogila Fighter

var kimogila = {};
kimogila.name = "M12-L Kimogila Fighter";
kimogila.image = "img/kimogila.png";
kimogila.faction = "scum";
kimogila.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
kimogila.normal = [ BL(1), BR(1), TL(3), TR(3), BL(3), BR(3) ];
kimogila.difficult = [ TL(1), TR(1), TL(2), K(4), TR(2) ];
kimogila.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK + RECOVER);

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
kimogila.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
kimogila.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
kimogila.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
kimogila.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
// K-Wing

var kwing = {};
kwing.name = "K-Wing";
kwing.image = "img/kwing.png";
kwing.faction = "rebel";
kwing.simple = [ BL(1), F(1), BR(1), F(2) ];
kwing.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3) ];
kwing.difficult = [  ];
kwing.actions = (TARGET_LOCK + SLAM + FOCUS);

kwing.closing = [];
kwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
kwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
kwing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.closing[3] = [ BR(1), BR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.closing[4] = [ BL(2), BL(3), BL(3), F(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.closing[5] = [ BL(1), BL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

kwing.away = [];
kwing.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
kwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
kwing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.away[4] = [ TL(2), BL(2), BL(3), BL(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

kwing.far = [];
kwing.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
kwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(2) ];
kwing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(2) ];

kwing.stressed = [];
kwing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
kwing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
kwing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
kwing.stressed[4] = [ BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), BR(1), BR(1), BR(2), BR(3) ];
kwing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
kwing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Lambda Shuttle

var lambda = {};
lambda.name = "Lambda Shuttle";
lambda.image = "img/lambda.png";
lambda.faction = "empire";
lambda.simple = [ BL(1), F(1), F(2), BR(1) ];
lambda.normal = [ BL(2), F(3), BR(2) ];
lambda.difficult = [ TL(2), BL(3), F(0), BR(3), TR(2) ];
lambda.actions = (FOCUS + TARGET_LOCK);

lambda.closing = [];
lambda.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), F(1), BR(1) ];
lambda.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
lambda.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
lambda.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
lambda.closing[4] = [ BL(2), BL(3), BL(3), F(2), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
lambda.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
lambda.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
lambda.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

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
// M3-A Interceptor

var m3a = {};
m3a.name = "M3-A Interceptor";
m3a.image = "img/m3aInterceptor.png";
m3a.faction = "scum";
m3a.simple = [ BL(1), BR(1), BL(2), F(2), BR(2), F(3) ];
m3a.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
m3a.difficult = [ K(3), K(5) ];
m3a.actions = (BARREL_ROLL + TARGET_LOCK + FOCUS + EVADE);

m3a.closing = [];
m3a.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
m3a.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
m3a.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
m3a.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
m3a.closing[4] = [ TL(2), F(4), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
m3a.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
m3a.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
m3a.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

m3a.away = [];
m3a.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
m3a.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
m3a.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
m3a.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(5), K(5), K(5) ];
m3a.away[4] = [ TL(2), TR(2), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
m3a.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(5), K(5), K(5) ];
m3a.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
m3a.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

m3a.far = [];
m3a.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
m3a.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
m3a.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(5), K(5) ];
m3a.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

m3a.stressed = [];
m3a.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(2), F(3), F(3), F(3), F(4), F(4) ];
m3a.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(1), TR(2) ];
m3a.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
m3a.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
m3a.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
m3a.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Mist Hunter

var mistHunter = {};
mistHunter.name = "Mist Hunter";
mistHunter.image = "img/mistHunter.png";
mistHunter.faction = "scum";
mistHunter.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
mistHunter.normal = [ TL(2), BL(2), BR(2), TR(2), F(4) ];
mistHunter.difficult = [ TL(1), TR(1), BL(3), BR(3), K(3), K(4) ];
mistHunter.actions = (FOCUS + TARGET_LOCK + EVADE);

mistHunter.closing = [];
mistHunter.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
mistHunter.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
mistHunter.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
mistHunter.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
mistHunter.closing[4] = [ TL(2), F(4), TR(2), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
mistHunter.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
mistHunter.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
mistHunter.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

mistHunter.away = [];
mistHunter.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
mistHunter.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
mistHunter.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(4), K(4) ];
mistHunter.away[4] = [ TL(2), TR(2), TR(2), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
mistHunter.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(4), K(4) ];
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
mistHunter.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
mistHunter.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
mistHunter.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
mistHunter.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
mistHunter.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// YT-2400

var outrider = {};
outrider.name = "YT-2400";
outrider.image = "img/outrider.png";
outrider.faction = "rebel";
outrider.simple = [  ];
outrider.normal = [ TL(1), TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(1), TR(2), TR(3) ];
outrider.difficult = [ K(4) ];
outrider.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

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
// Phantom

var phantom = {};
phantom.name = "Phantom";
phantom.image = "img/ship_phantom.png";
phantom.faction = "rebel";
phantom.simple = [ BL(1), F(1), BR(1), F(2) ];
phantom.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), F(3), BR(3), F(4) ];
phantom.difficult = [ TL(1), TR(1), TL(3), TR(3), K(4) ];
phantom.actions = (FOCUS + BARREL_ROLL + EVADE);

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
// Phantom II Shuttle (Sheathipede)

var phantom2 = {};
phantom2.name = "Phantom II Shuttle (Sheathipede)";
phantom2.image = "img/sheathipede.png";
phantom2.faction = "rebel";
phantom2.simple = [ BL(2), F(1), BR(2), F(2), F(3) ];
phantom2.normal = [ TL(2), BL(1), BR(1), TR(2), BL(3), BR(3) ];
phantom2.difficult = [ TL(3), TR(3), F(4), K(3) ];
phantom2.actions = (FOCUS + COORDINATE + TARGET_LOCK);

phantom2.closing = [];
phantom2.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
phantom2.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
phantom2.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
phantom2.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
phantom2.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
phantom2.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
phantom2.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
phantom2.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

phantom2.away = [];
phantom2.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
phantom2.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
phantom2.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
phantom2.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
phantom2.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
phantom2.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
phantom2.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
phantom2.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

phantom2.far = [];
phantom2.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
phantom2.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
phantom2.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
phantom2.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
phantom2.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
phantom2.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
phantom2.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
phantom2.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

phantom2.stressed = [];
phantom2.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
phantom2.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
phantom2.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom2.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom2.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
phantom2.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
phantom2.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
phantom2.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Protectorate

var protectorate = {};
protectorate.name = "Protectorate";
protectorate.image = "img/ship_protectorate.png";
protectorate.faction = "scum";
protectorate.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
protectorate.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
protectorate.difficult = [ K(4), TRL(2), TRR(2) ];
protectorate.actions = (FOCUS + TARGET_LOCK + BARREL_ROLL + BOOST);

protectorate.closing = [];
protectorate.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), TRR(2) ];
protectorate.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
protectorate.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), TRR(2) ];
protectorate.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRR(2) ];
protectorate.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
protectorate.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRL(2) ];
protectorate.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), TRL(2) ];
protectorate.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

protectorate.away = [];
protectorate.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
protectorate.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
protectorate.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
protectorate.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), TRL(2), TRR(2) ];
protectorate.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), TRL(2), TRL(2), TRR(2), TRR(2), TRR(2) ];
protectorate.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), TRR(2), TRL(2) ];
protectorate.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
protectorate.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

protectorate.far = [];
protectorate.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
protectorate.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
protectorate.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
protectorate.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
protectorate.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), TRR(2) ];
protectorate.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
protectorate.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
protectorate.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

protectorate.stressed = [];
protectorate.stressed[0] = [ BL(2), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5), BR(2) ];
protectorate.stressed[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
protectorate.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
protectorate.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
protectorate.stressed[4] = [ TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(1), TR(1), TR(2), TR(3) ];
protectorate.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
protectorate.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
protectorate.stressed[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Punishing One

var punishingOne = {};
punishingOne.name = "Punishing One";
punishingOne.image = "img/punishingOne.png";
punishingOne.faction = "scum";
punishingOne.simple = [ TL(1), BL(1), F(1), BL(2), TL(2), F(2) ];
punishingOne.normal = [ TR(1), BR(1), TR(2), BR(2), BL(3), F(3), BR(2), F(4), SLL(2) ];
punishingOne.difficult = [ K(4), SLR(2) ];
punishingOne.actions = (FOCUS + TARGET_LOCK + BARREL_ROLL);

punishingOne.closing = [];
punishingOne.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), SLR(2) ];
punishingOne.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(1) ];
punishingOne.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLR(2) ];
punishingOne.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), SLR(2) ];
punishingOne.closing[4] = [ TL(2), F(4), TR(2), K(4), K(4), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
punishingOne.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), SLL(2) ];
punishingOne.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLL(2) ];
punishingOne.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(1) ];

punishingOne.away = [];
punishingOne.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
punishingOne.away[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
punishingOne.away[2] = [ BR(1), BR(2), BR(2), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
punishingOne.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), SLL(2), SLR(2) ];
punishingOne.away[4] = [ TL(2), TR(2), TR(2), K(4), K(4), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
punishingOne.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), SLR(2), SLL(2) ];
punishingOne.away[6] = [ BL(1), BL(2), BL(2), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.away[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

punishingOne.far = [];
punishingOne.far[0] = [ F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(1), BR(2) ];
punishingOne.far[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
punishingOne.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
punishingOne.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
punishingOne.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(4), SLR(2) ];
punishingOne.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.far[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

punishingOne.stressed = [];
punishingOne.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
punishingOne.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
punishingOne.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
punishingOne.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
punishingOne.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
punishingOne.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
punishingOne.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

// ****************************************************************************
// Quadjumper

var quadjumper = {};
quadjumper.name = "Quadjumper";
quadjumper.image = "img/ship_quadjumper.png";
quadjumper.faction = "scum";
quadjumper.simple = [ BL(2), F(2), BR(2), F(3) ];
quadjumper.normal = [ TL(1), F(1), TR(1), TL(2), TR(2), BL(3), BR(3) ];
quadjumper.difficult = [ SLL(2), SLR(2), RBL(1), R(1), RBR(1) ];
quadjumper.actions = (BARREL_ROLL + FOCUS);

quadjumper.closing = [];
quadjumper.closing[0] = [ BL(2), F(1), F(1), F(1), F(2), F(2), SLL(2), RBL(1), R(1), R(1) ];
quadjumper.closing[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), RBL(1) ];
quadjumper.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(2), RBL(1), RBL(1) ];
quadjumper.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(2), RBR(1) ];
quadjumper.closing[4] = [ TL(2), F(3), TR(2), SLL(2), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2), SLR(2) ];
quadjumper.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(2), RBR(1) ];
quadjumper.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(2), RBL(1), RBL(1) ];
quadjumper.closing[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), RBL(1) ];

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
quadjumper.stressed[0] = [ BL(2), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(2) ];
quadjumper.stressed[1] = [ F(1), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(2) ];
quadjumper.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
quadjumper.stressed[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2) ];
quadjumper.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
quadjumper.stressed[7] = [ F(1), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(2) ];

// ****************************************************************************
// Imperial Raider

var raider = {};
raider.name = "Imperial Raider";
raider.image = "img/raider.png";
raider.faction = "empire";
raider.simple = [  ];
raider.normal = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3), F(4) ];
raider.difficult = [  ];
raider.actions = (RECOVER + REINFORCE + COORDINATE + TARGET_LOCK);

raider.closing = [];
raider.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
raider.closing[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.closing[2] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.closing[3] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.closing[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
raider.closing[5] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
raider.closing[6] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
raider.closing[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

raider.away = [];
raider.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
raider.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
raider.away[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.away[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.away[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.away[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
raider.away[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
raider.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

raider.far = [];
raider.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
raider.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
raider.far[2] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.far[3] = [ F(3), F(4), F(4), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
raider.far[4] = [ BL(1), BL(1), BL(2), BL(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
raider.far[5] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
raider.far[6] = [ F(3), F(4), F(4), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
raider.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];

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
// Scurrg H-6 Bomber

var scurrg = {};
scurrg.name = "Scurrg H-6 Bomber";
scurrg.image = "img/scurrg.png";
scurrg.faction = "rebel";
scurrg.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
scurrg.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
scurrg.difficult = [ TRL(3), TRR(3), TL(3), F(5), TR(3) ];
scurrg.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

scurrg.closing = [];
scurrg.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), TRL(3), TRL(3) ];
scurrg.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
scurrg.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrg.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrg.closing[4] = [ TL(3), F(5), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrg.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrg.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrg.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

scurrg.away = [];
scurrg.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
scurrg.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrg.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
scurrg.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRR(3), TRR(3) ];
scurrg.away[4] = [ TL(3), TR(3), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrg.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRL(3), TRL(3) ];
scurrg.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
scurrg.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrg.far = [];
scurrg.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
scurrg.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrg.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrg.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrg.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), TRR(3), TRR(3) ];
scurrg.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrg.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrg.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrg.stressed = [];
scurrg.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
scurrg.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
scurrg.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrg.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrg.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrg.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrg.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrg.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Scurrg H-6 Bomber (Scum)

var scurrgs = {};
scurrgs.name = "Scurrg H-6 Bomber (Scum)";
scurrgs.image = "img/scurrg.png";
scurrgs.faction = "scum";
scurrgs.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
scurrgs.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
scurrgs.difficult = [ TRL(3), TRR(3), TL(3), F(5), TR(3) ];
scurrgs.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

scurrgs.closing = [];
scurrgs.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), TRL(3), TRL(3) ];
scurrgs.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
scurrgs.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrgs.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TRL(3), TRL(3) ];
scurrgs.closing[4] = [ TL(3), F(5), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrgs.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrgs.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRR(3) ];
scurrgs.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

scurrgs.away = [];
scurrgs.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
scurrgs.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrgs.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TRL(3), TRR(3), TRR(3) ];
scurrgs.away[4] = [ TL(3), TR(3), TR(3), TRL(3), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
scurrgs.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TRR(3), TRL(3), TRL(3) ];
scurrgs.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrgs.far = [];
scurrgs.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
scurrgs.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
scurrgs.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
scurrgs.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), TRR(3), TRR(3) ];
scurrgs.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
scurrgs.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

scurrgs.stressed = [];
scurrgs.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
scurrgs.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
scurrgs.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
scurrgs.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrgs.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
scurrgs.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Shadow Caster

var shadowCaster = {};
shadowCaster.name = "Shadow Caster";
shadowCaster.image = "img/ship_lancer.png";
shadowCaster.faction = "scum";
shadowCaster.simple = [ F(2), TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
shadowCaster.normal = [ BL(1), F(1), BR(1), TL(2), BL(2), BR(2), TR(2), F(5) ];
shadowCaster.difficult = [ K(5) ];
shadowCaster.actions = (FOCUS + TARGET_LOCK + EVADE + ROTATE_ARC);

shadowCaster.closing = [];
shadowCaster.closing[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), K(5), K(5) ];
shadowCaster.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
shadowCaster.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
shadowCaster.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
shadowCaster.closing[4] = [ TL(2), F(5), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
shadowCaster.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5) ];
shadowCaster.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5) ];
shadowCaster.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

shadowCaster.away = [];
shadowCaster.away[0] = [ F(5), F(5), F(5), F(5), F(5), F(5), F(5), F(5), F(5), F(5) ];
shadowCaster.away[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
shadowCaster.away[2] = [ BR(1), BR(2), BR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.away[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5), K(5) ];
shadowCaster.away[4] = [ TL(2), TR(2), TR(2), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
shadowCaster.away[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), K(5), K(5), K(5) ];
shadowCaster.away[6] = [ BL(1), BL(2), BL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
shadowCaster.away[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

shadowCaster.far = [];
shadowCaster.far[0] = [ F(5), F(5), F(5), F(5), F(5), F(5), F(5), F(5), BR(1), BR(2) ];
shadowCaster.far[1] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
shadowCaster.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.far[4] = [ TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), K(5), K(5) ];
shadowCaster.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
shadowCaster.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
shadowCaster.far[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

shadowCaster.stressed = [];
shadowCaster.stressed[0] = [ BL(1), BL(2), F(1), F(1), F(2), F(2), F(2), F(2), F(3), F(5) ];
shadowCaster.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(2), TR(2) ];
shadowCaster.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2) ];
shadowCaster.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
shadowCaster.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
shadowCaster.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(2), TL(2) ];

// ****************************************************************************
// Firespray-31

var slave1 = {};
slave1.name = "Firespray-31";
slave1.image = "img/slave1.png";
slave1.faction = "empire";
slave1.simple = [ F(1), F(2), BL(1), BR(1) ];
slave1.normal = [ TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
slave1.difficult = [ K(3), K(4) ];
slave1.actions = (TARGET_LOCK + FOCUS + EVADE);

slave1.closing = [];
slave1.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
slave1.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
slave1.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
slave1.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
slave1.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
slave1.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
slave1.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
slave1.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

slave1.away = [];
slave1.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
slave1.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
slave1.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
slave1.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(4), K(4) ];
slave1.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(4), K(4), K(4), K(4) ];
slave1.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(4), K(4) ];
slave1.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
slave1.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

slave1.far = [];
slave1.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
slave1.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
slave1.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
slave1.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
slave1.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
slave1.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
slave1.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
slave1.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

slave1.stressed = [];
slave1.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4) ];
slave1.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
slave1.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
slave1.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
slave1.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
slave1.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
slave1.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
slave1.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// StarViper

var starviper = {};
starviper.name = "StarViper";
starviper.image = "img/starviper.png";
starviper.faction = "scum";
starviper.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
starviper.normal = [ TL(1), TR(1), TL(2), BL(2), BR(2), TR(2), BL(3), BR(3), F(4) ];
starviper.difficult = [ SLL(3), SLR(3) ];
starviper.actions = (BARREL_ROLL + TARGET_LOCK + BOOST + FOCUS);

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
// T-70 X-Wing

var t70xwing = {};
t70xwing.name = "T-70 X-Wing";
t70xwing.image = "img/t70xwing.png";
t70xwing.faction = "rebel";
t70xwing.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
t70xwing.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
t70xwing.difficult = [ TRL(3), TRR(3), K(4) ];
t70xwing.actions = (FOCUS + TARGET_LOCK + BOOST);

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
// Tie Fighter

var tie = {};
tie.name = "Tie Fighter";
tie.image = "img/tie.png";
tie.faction = "empire";
tie.simple = [ F(2), BL(2), BR(2), F(3) ];
tie.normal = [ TL(1), TL(2), TL(3), BL(3), F(4), F(5), BR(3), TR(1), TR(2), TR(3) ];
tie.difficult = [ K(3), K(4) ];
tie.actions = (BARREL_ROLL + FOCUS + EVADE);

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
// Tie Advanced

var tieAdvanced = {};
tieAdvanced.name = "Tie Advanced";
tieAdvanced.image = "img/TieAdvanced.png";
tieAdvanced.faction = "empire";
tieAdvanced.simple = [ BL(1), BR(1), F(2), F(3) ];
tieAdvanced.normal = [ TL(2), TL(3), BL(2), BL(3), F(4), F(5), BR(2), BR(3), TR(2), TR(3) ];
tieAdvanced.difficult = [ K(4) ];
tieAdvanced.actions = (TARGET_LOCK + BARREL_ROLL + FOCUS + EVADE);

tieAdvanced.closing = [];
tieAdvanced.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), K(4) ];
tieAdvanced.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieAdvanced.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
tieAdvanced.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
tieAdvanced.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieAdvanced.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
tieAdvanced.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
tieAdvanced.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

tieAdvanced.away = [];
tieAdvanced.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieAdvanced.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
tieAdvanced.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieAdvanced.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
tieAdvanced.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAdvanced.far = [];
tieAdvanced.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieAdvanced.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tieAdvanced.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieAdvanced.stressed = [];
tieAdvanced.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
tieAdvanced.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
tieAdvanced.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.stressed[4] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3) ];
tieAdvanced.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// TIE Aggressor

var tieAggressor = {};
tieAggressor.name = "TIE Aggressor";
tieAggressor.image = "img/tie_aggressor.png";
tieAggressor.faction = "empire";
tieAggressor.simple = [ BL(2), F(1), BR(2), F(2), F(3) ];
tieAggressor.normal = [ TL(3), TR(3), TL(2), BL(1), BR(1), TR(2), BL(3), BR(3), F(4) ];
tieAggressor.difficult = [ K(4) ];
tieAggressor.actions = (FOCUS + BARREL_ROLL + TARGET_LOCK);

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
// Tie Bomber

var tieBomber = {};
tieBomber.name = "Tie Bomber";
tieBomber.image = "img/tieBomber.png";
tieBomber.faction = "empire";
tieBomber.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
tieBomber.normal = [ BL(1), BR(1), TL(3), BL(3), F(4), BR(3), TR(3) ];
tieBomber.difficult = [ TL(2), TR(2), K(5) ];
tieBomber.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

tieBomber.closing = [];
tieBomber.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(5), K(5) ];
tieBomber.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieBomber.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), K(5) ];
tieBomber.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(5), K(5) ];
tieBomber.closing[4] = [ TL(3), F(4), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
tieBomber.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(5), K(5) ];
tieBomber.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), K(5) ];
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
tieBomber.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
tieBomber.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieBomber.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieBomber.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
// Tie Defender

var tieDefender = {};
tieDefender.name = "Tie Defender";
tieDefender.image = "img/tieDefender.png";
tieDefender.faction = "empire";
tieDefender.simple = [ F(2), F(3), F(4), F(5) ];
tieDefender.normal = [ BL(1), BR(1), BL(2), BR(2), TL(3), BL(3), BR(3), TR(3), K(4) ];
tieDefender.difficult = [ TL(1), TR(1), TL(2), TR(2) ];
tieDefender.actions = (BARREL_ROLL + FOCUS + TARGET_LOCK);

tieDefender.closing = [];
tieDefender.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), K(4) ];
tieDefender.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieDefender.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(4), K(4) ];
tieDefender.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), K(4) ];
tieDefender.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieDefender.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), K(4) ];
tieDefender.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(4), K(4) ];
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
// Inquisitor's TIE

var tieInquisitor = {};
tieInquisitor.name = "Inquisitor's TIE";
tieInquisitor.image = "img/tieInquisitor.png";
tieInquisitor.faction = "empire";
tieInquisitor.simple = [ TL(1), BL(1), BR(1), TL(1), F(2), F(3), F(4) ];
tieInquisitor.normal = [ TL(2), BL(2), BR(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(5) ];
tieInquisitor.difficult = [ K(4) ];
tieInquisitor.actions = (BARREL_ROLL + TARGET_LOCK + FOCUS + BOOST);

tieInquisitor.closing = [];
tieInquisitor.closing[0] = [ BL(1), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(4), K(4) ];
tieInquisitor.closing[1] = [ F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tieInquisitor.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
tieInquisitor.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
tieInquisitor.closing[4] = [ TL(3), F(5), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieInquisitor.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
tieInquisitor.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
tieInquisitor.closing[7] = [ F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

tieInquisitor.away = [];
tieInquisitor.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieInquisitor.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInquisitor.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
tieInquisitor.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tieInquisitor.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
tieInquisitor.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInquisitor.far = [];
tieInquisitor.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieInquisitor.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInquisitor.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
tieInquisitor.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInquisitor.stressed = [];
tieInquisitor.stressed[0] = [ BL(1), BL(3), F(2), F(2), F(3), F(3), F(4), F(4), F(5), F(5) ];
tieInquisitor.stressed[1] = [ F(2), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(3) ];
tieInquisitor.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInquisitor.stressed[4] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(3), TL(3), TR(2), TR(3) ];
tieInquisitor.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieInquisitor.stressed[7] = [ F(2), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(3) ];

// ****************************************************************************
// Tie Interceptor

var tieInterceptor = {};
tieInterceptor.name = "Tie Interceptor";
tieInterceptor.image = "img/tieInterceptor.png";
tieInterceptor.faction = "empire";
tieInterceptor.simple = [ F(2), F(3), F(4), TL(2), BL(2), BR(2), TR(2) ];
tieInterceptor.normal = [ TL(1), TL(3), BL(3), F(5), BR(3), TR(1), TR(3) ];
tieInterceptor.difficult = [ K(3), K(5) ];
tieInterceptor.actions = (BARREL_ROLL + BOOST + FOCUS + EVADE);

tieInterceptor.closing = [];
tieInterceptor.closing[0] = [ BL(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), K(3), K(3) ];
tieInterceptor.closing[1] = [ F(2), BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), TR(1), TR(1) ];
tieInterceptor.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(3), K(3) ];
tieInterceptor.closing[3] = [ BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(3), K(3) ];
tieInterceptor.closing[4] = [ TL(3), F(5), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
tieInterceptor.closing[5] = [ BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(3), K(3) ];
tieInterceptor.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(3), K(3) ];
tieInterceptor.closing[7] = [ F(2), BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), TL(1), TL(1) ];

tieInterceptor.away = [];
tieInterceptor.away[0] = [ F(4), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), F(5) ];
tieInterceptor.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInterceptor.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(5), K(5), K(5) ];
tieInterceptor.away[4] = [ TL(3), TR(3), TR(3), K(5), K(5), K(5), K(5), K(5), K(5), K(5) ];
tieInterceptor.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(5), K(5), K(5) ];
tieInterceptor.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tieInterceptor.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tieInterceptor.far = [];
tieInterceptor.far[0] = [ BL(3), F(4), F(4), F(4), F(4), F(5), F(5), F(5), F(5), BR(3) ];
tieInterceptor.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tieInterceptor.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieInterceptor.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(5), K(5) ];
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
// Tie Phantom

var tiePhantom = {};
tiePhantom.name = "Tie Phantom";
tiePhantom.image = "img/tiePhantom.png";
tiePhantom.faction = "empire";
tiePhantom.simple = [ BL(2), F(2), BR(2), F(3) ];
tiePhantom.normal = [ TL(1), TR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tiePhantom.difficult = [ K(3), K(4) ];
tiePhantom.actions = (BARREL_ROLL + CLOAKING + EVADE + FOCUS);

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
// Tie Punisher

var tiePunisher = {};
tiePunisher.name = "Tie Punisher";
tiePunisher.image = "img/tiePunisher.png";
tiePunisher.faction = "empire";
tiePunisher.simple = [ BL(1), F(1), BR(1), F(2) ];
tiePunisher.normal = [ BL(2), BR(2), TL(3), BL(3), F(3), BR(3), TR(3) ];
tiePunisher.difficult = [ TL(2), TR(2), K(4) ];
tiePunisher.actions = (TARGET_LOCK + BOOST + FOCUS);

tiePunisher.closing = [];
tiePunisher.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
tiePunisher.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
tiePunisher.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
tiePunisher.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
tiePunisher.closing[4] = [ TL(3), F(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
tiePunisher.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
tiePunisher.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
tiePunisher.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

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
tiePunisher.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(3), TR(3) ];
tiePunisher.stressed[2] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.stressed[3] = [ TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.stressed[4] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tiePunisher.stressed[5] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePunisher.stressed[6] = [ TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tiePunisher.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(3), TL(3) ];

// ****************************************************************************
// TIE Striker

var tieStriker = {};
tieStriker.name = "TIE Striker";
tieStriker.image = "img/ship_tieStriker.png";
tieStriker.faction = "empire";
tieStriker.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
tieStriker.normal = [ TL(1), TR(1), TL(2), BL(2), BR(2), TR(2), BL(3), BR(3) ];
tieStriker.difficult = [ K(2), SLL(2), SLR(2) ];
tieStriker.actions = (FOCUS + BARREL_ROLL + FOCUS);

tieStriker.closing = [];
tieStriker.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(2), SLR(2) ];
tieStriker.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tieStriker.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), SLR(2) ];
tieStriker.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(2), SLR(2) ];
tieStriker.closing[4] = [ TL(2), F(3), TR(2), K(2), K(2), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieStriker.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(2), SLL(2) ];
tieStriker.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), SLL(2) ];
tieStriker.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tieStriker.away = [];
tieStriker.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
tieStriker.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tieStriker.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), K(2), SLL(2), SLR(2) ];
tieStriker.away[4] = [ TL(2), TR(2), TR(2), K(2), K(2), SLL(2), SLL(2), SLR(2), SLR(2), SLR(2) ];
tieStriker.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), K(2), SLR(2), SLL(2) ];
tieStriker.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
tieStriker.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tieStriker.far = [];
tieStriker.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
tieStriker.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tieStriker.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tieStriker.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), K(2), SLR(2) ];
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
// TIE/fo

var tiefo = {};
tiefo.name = "TIE/fo";
tiefo.image = "img/tiefo.png";
tiefo.faction = "empire";
tiefo.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
tiefo.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tiefo.difficult = [ SLL(2), SLR(2), K(4) ];
tiefo.actions = (FOCUS + TARGET_LOCK + BARREL_ROLL + EVADE);

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
// TIE Reaper

var tiereaper = {};
tiereaper.name = "TIE Reaper";
tiereaper.image = "img/tie_reaper.png";
tiereaper.faction = "empire";
tiereaper.simple = [ F(1), BL(2), F(2), BR(2), F(3) ];
tiereaper.normal = [ TL(1), BL(1), BR(1), TR(1) ];
tiereaper.difficult = [ F(0), SLL(1), SLR(1), TL(2), TR(2), BL(3), BR(3) ];
tiereaper.actions = (FOCUS + EVADE + JAM);

tiereaper.closing = [];
tiereaper.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), SLL(1), SLL(1) ];
tiereaper.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tiereaper.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(1), SLL(1) ];
tiereaper.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), SLL(1), SLL(1) ];
tiereaper.closing[4] = [ TL(2), F(3), TR(2), SLL(1), SLL(1), SLL(1), SLR(1), SLR(1), SLR(1), SLR(1) ];
tiereaper.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), SLR(1), SLR(1) ];
tiereaper.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(1), SLR(1) ];
tiereaper.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

tiereaper.away = [];
tiereaper.away[0] = [ F(2), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), F(3) ];
tiereaper.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiereaper.away[2] = [ BR(2), BR(3), BR(3), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
tiereaper.away[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), SLL(1), SLR(1), SLR(1) ];
tiereaper.away[4] = [ TL(2), TR(2), TR(2), SLL(1), SLL(1), SLL(1), SLR(1), SLR(1), SLR(1), SLR(1) ];
tiereaper.away[5] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), SLR(1), SLL(1), SLL(1) ];
tiereaper.away[6] = [ BL(2), BL(3), BL(3), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
tiereaper.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tiereaper.far = [];
tiereaper.far[0] = [ BL(3), F(2), F(2), F(2), F(2), F(3), F(3), F(3), F(3), BR(3) ];
tiereaper.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(1), TR(2) ];
tiereaper.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiereaper.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiereaper.far[4] = [ TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(2), TR(2), SLR(1), SLR(1) ];
tiereaper.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiereaper.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiereaper.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(1), TL(2) ];

tiereaper.stressed = [];
tiereaper.stressed[0] = [ BL(1), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3), BR(1) ];
tiereaper.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tiereaper.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1) ];
tiereaper.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1) ];
tiereaper.stressed[4] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TR(1), TR(1), TR(1), TR(1), TR(1) ];
tiereaper.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1) ];
tiereaper.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1) ];
tiereaper.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

// ****************************************************************************
// Special Forces TIE

var tiesf = {};
tiesf.name = "Special Forces TIE";
tiesf.image = "img/ship_tiesf.png";
tiesf.faction = "empire";
tiesf.simple = [ BL(1), F(1), BR(1), F(2), F(3) ];
tiesf.normal = [ TL(2), BL(2), BR(2), TR(2), BL(3), BR(3), F(4) ];
tiesf.difficult = [ TL(1), TR(1), TL(3), TR(3), SLL(3), SLR(3) ];
tiesf.actions = (FOCUS + TARGET_LOCK + BARREL_ROLL);

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
tiesf.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
tiesf.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
tiesf.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
tiesf.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), SLL(3), SLR(3), SLR(3) ];
tiesf.away[4] = [ TL(3), TR(3), TR(3), SLL(3), SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
tiesf.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), SLR(3), SLL(3), SLL(3) ];
tiesf.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
tiesf.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

tiesf.far = [];
tiesf.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
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
// TIE Silencer

var tiesilencer = {};
tiesilencer.name = "TIE Silencer";
tiesilencer.image = "img/tie_silencer.png";
tiesilencer.faction = "empire";
tiesilencer.simple = [ TL(1), BL(1), F(1), BR(1), TR(1), BL(2), F(2), BR(2), F(3), F(4) ];
tiesilencer.normal = [ TL(2), TR(2), TL(1), TR(1) ];
tiesilencer.difficult = [ TRL(3), TRR(3), K(4) ];
tiesilencer.actions = (FOCUS + TARGET_LOCK + BARREL_ROLL + BOOST);

tiesilencer.closing = [];
tiesilencer.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), TRR(3) ];
tiesilencer.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(2) ];
tiesilencer.closing[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), K(4), TRR(3) ];
tiesilencer.closing[3] = [ BR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), K(4), TRR(3) ];
tiesilencer.closing[4] = [ F(3), TR(1), TR(2), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
tiesilencer.closing[5] = [ BL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), K(4), TRL(3) ];
tiesilencer.closing[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), K(4), TRL(3) ];
tiesilencer.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(2) ];

tiesilencer.away = [];
tiesilencer.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
tiesilencer.away[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
tiesilencer.away[2] = [ BR(1), BR(2), BR(2), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tiesilencer.away[3] = [ TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), K(4), TRL(3), TRR(3) ];
tiesilencer.away[4] = [ TL(1), TR(1), TR(2), K(4), K(4), TRL(3), TRL(3), TRR(3), TRR(3), TRR(3) ];
tiesilencer.away[5] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), K(4), TRR(3), TRL(3) ];
tiesilencer.away[6] = [ BL(1), BL(2), BL(2), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
tiesilencer.away[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

tiesilencer.far = [];
tiesilencer.far[0] = [ BL(2), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(2) ];
tiesilencer.far[1] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2), TR(1), TR(2) ];
tiesilencer.far[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
tiesilencer.far[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
tiesilencer.far[4] = [ TL(1), TL(1), TL(2), TR(1), TR(1), TR(1), TR(2), TR(2), K(4), TRR(3) ];
tiesilencer.far[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
tiesilencer.far[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
tiesilencer.far[7] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2), TL(1), TL(2) ];

tiesilencer.stressed = [];
tiesilencer.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
tiesilencer.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
tiesilencer.stressed[2] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tiesilencer.stressed[3] = [ TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tiesilencer.stressed[4] = [ TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TR(1), TR(1), TR(1), TR(2) ];
tiesilencer.stressed[5] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
tiesilencer.stressed[6] = [ TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
tiesilencer.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

// ****************************************************************************
// Rebel Transport

var transport = {};
transport.name = "Rebel Transport";
transport.image = "img/transport.png";
transport.faction = "rebel";
transport.simple = [  ];
transport.normal = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3), F(4) ];
transport.difficult = [  ];
transport.actions = (COORDINATE + JAM + RECOVER + REINFORCE);

transport.closing = [];
transport.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), F(2), BR(1) ];
transport.closing[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.closing[2] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.closing[3] = [ F(1), F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.closing[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
transport.closing[5] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.closing[6] = [ F(1), F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.closing[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

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
transport.stressed[0] = [ BL(1), F(1), F(1), F(2), F(2), F(3), F(3), F(4), F(4), BR(1) ];
transport.stressed[1] = [ F(1), F(2), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
transport.stressed[2] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.stressed[3] = [ F(1), F(2), F(3), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
transport.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BR(1), BR(1), BR(2), BR(2) ];
transport.stressed[5] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.stressed[6] = [ F(1), F(2), F(3), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
transport.stressed[7] = [ F(1), F(2), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];

// ****************************************************************************
// Upsilon-class Shuttle

var upsilon = {};
upsilon.name = "Upsilon-class Shuttle";
upsilon.image = "img/ship_upsilon.png";
upsilon.faction = "empire";
upsilon.simple = [ F(1), BL(2), F(2), BR(2) ];
upsilon.normal = [ BL(1), BR(1), TL(2), TR(2), BL(3), F(3), BR(3) ];
upsilon.difficult = [ F(0), TL(1), TR(1), TL(3), TR(3) ];
upsilon.actions = (FOCUS + TARGET_LOCK + COORDINATE);

upsilon.closing = [];
upsilon.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), F(1), BR(1) ];
upsilon.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1) ];
upsilon.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
upsilon.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(1), TR(1), TR(2) ];
upsilon.closing[4] = [ TL(3), BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(3) ];
upsilon.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
upsilon.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1), TL(2) ];
upsilon.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(1), TL(1) ];

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
// U-Wing

var uwing = {};
uwing.name = "U-Wing";
uwing.image = "img/ship_uwing.png";
uwing.faction = "rebel";
uwing.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2) ];
uwing.normal = [ TL(2), TR(2), BL(3), F(3), BR(3), F(4) ];
uwing.difficult = [ F(0) ];
uwing.actions = (FOCUS + TARGET_LOCK);

uwing.closing = [];
uwing.closing[0] = [ BL(1), F(0), F(0), F(0), F(0), F(1), F(1), F(1), F(1), BR(1) ];
uwing.closing[1] = [ F(0), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
uwing.closing[2] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwing.closing[3] = [ BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2), TR(2) ];
uwing.closing[4] = [ BL(2), BL(3), BL(3), F(3), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
uwing.closing[5] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwing.closing[6] = [ BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2), TL(2) ];
uwing.closing[7] = [ F(0), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

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
// X-Wing

var xwing = {};
xwing.name = "X-Wing";
xwing.image = "img/xwing.png";
xwing.faction = "rebel";
xwing.simple = [ F(1), BL(1), BR(1), F(2) ];
xwing.normal = [ TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
xwing.difficult = [ K(4) ];
xwing.actions = (TARGET_LOCK + FOCUS);

xwing.closing = [];
xwing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
xwing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
xwing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
xwing.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
xwing.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
xwing.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
xwing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
xwing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

xwing.away = [];
xwing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
xwing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xwing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
xwing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
xwing.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
xwing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
xwing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
xwing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

xwing.far = [];
xwing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
xwing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
xwing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
xwing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
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
// Y-Wing

var ywing = {};
ywing.name = "Y-Wing";
ywing.image = "img/ywing.png";
ywing.faction = "rebel";
ywing.simple = [ F(1), F(2) ];
ywing.normal = [ TL(2), BL(1), BL(2), BL(3), F(3), BR(1), BR(2), BR(3), TR(2) ];
ywing.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywing.actions = (TARGET_LOCK + FOCUS);

ywing.closing = [];
ywing.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(4), K(4) ];
ywing.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
ywing.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4) ];
ywing.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(4), K(4) ];
ywing.closing[4] = [ TL(3), F(4), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywing.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(4), K(4) ];
ywing.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4) ];
ywing.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

ywing.away = [];
ywing.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
ywing.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywing.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
ywing.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(4), K(4), K(4) ];
ywing.away[4] = [ TL(3), TR(3), TR(3), K(4), K(4), K(4), K(4), K(4), K(4), K(4) ];
ywing.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(4), K(4), K(4) ];
ywing.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
ywing.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywing.far = [];
ywing.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
ywing.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
ywing.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywing.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
ywing.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(4), K(4) ];
ywing.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywing.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), TL(3) ];
ywing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

ywing.stressed = [];
ywing.stressed[0] = [ BL(1), BL(3), F(1), F(1), F(1), F(2), F(2), F(2), F(3), F(3) ];
ywing.stressed[1] = [ F(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(3), BR(3), TR(2), TR(2) ];
ywing.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywing.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
ywing.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywing.stressed[6] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
ywing.stressed[7] = [ F(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(3), BL(3), TL(2), TL(2) ];

// ****************************************************************************
// Z-95 Headhunter

var z95 = {};
z95.name = "Z-95 Headhunter";
z95.image = "img/z95.png";
z95.faction = "rebel";
z95.simple = [ F(1), F(2), BL(2), BR(2) ];
z95.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), F(3), BR(3), TR(3), F(4) ];
z95.difficult = [ K(3) ];
z95.actions = (FOCUS + TARGET_LOCK);

z95.closing = [];
z95.closing[0] = [ BL(1), F(1), F(1), F(1), F(1), F(2), F(2), F(2), K(3), K(3) ];
z95.closing[1] = [ F(1), BR(1), BR(1), BR(1), BR(1), BR(2), BR(2), BR(2), TR(2), TR(2) ];
z95.closing[2] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3) ];
z95.closing[3] = [ BR(1), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), K(3), K(3) ];
z95.closing[4] = [ TL(3), F(4), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
z95.closing[5] = [ BL(1), TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), K(3), K(3) ];
z95.closing[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3) ];
z95.closing[7] = [ F(1), BL(1), BL(1), BL(1), BL(1), BL(2), BL(2), BL(2), TL(2), TL(2) ];

z95.away = [];
z95.away[0] = [ F(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), F(4) ];
z95.away[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95.away[2] = [ BR(2), BR(3), BR(3), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3) ];
z95.away[3] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), K(3), K(3), K(3) ];
z95.away[4] = [ TL(3), TR(3), TR(3), K(3), K(3), K(3), K(3), K(3), K(3), K(3) ];
z95.away[5] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3), K(3), K(3), K(3) ];
z95.away[6] = [ BL(2), BL(3), BL(3), TL(2), TL(2), TL(2), TL(3), TL(3), TL(3), TL(3) ];
z95.away[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3), BL(3), BL(3), TL(2), TL(3) ];

z95.far = [];
z95.far[0] = [ BL(3), F(3), F(3), F(3), F(3), F(4), F(4), F(4), F(4), BR(3) ];
z95.far[1] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3), BR(3), BR(3), TR(2), TR(3) ];
z95.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.far[3] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3), TR(3), TR(3), TR(3), TR(3) ];
z95.far[4] = [ TL(2), TL(2), TL(3), TL(3), TR(2), TR(2), TR(3), TR(3), K(3), K(3) ];
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
// Ships

var ships = [ alpha, arc170, auzituck, awing, bsf17, bwing, carrier, corvette, decimator, ewing, falcon, ghost, houndstooth, hwk290, ig2000, kihraxz, kimogila, kwing, lambda, m3a, mistHunter, outrider, phantom, phantom2, protectorate, punishingOne, quadjumper, raider, scurrg, scurrgs, shadowCaster, slave1, starviper, t70xwing, tie, tieAdvanced, tieAggressor, tieBomber, tieDefender, tieInquisitor, tieInterceptor, tiePhantom, tiePunisher, tieStriker, tiefo, tiereaper, tiesf, tiesilencer, transport, upsilon, uwing, xwing, ywing, z95 ];