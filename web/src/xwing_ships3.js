// ****************************************************************************
// X-Wing Miniatures Heroes of the Aturi Cluster (HotAC) AI - Ships 2nd Edition
// Generated: By hand on 5 June 2020, 1800
// NOTE: HotAC AI ONLY contains the eight Empire ships used in the HotAC game, and only the Empire faction
// NOTE: HotAC AI only uses 6 maneuver possibilities (vice 10) and includes a NEW "Bullseye" location (9 possible target locations: 0-8 [8 is the Bullseye])

var VERSION = "3.0.0";


// ****************************************************************************
// VT-49 Decimator

var decimator = {};
decimator.name = "VT-49 Decimator";
decimator.image = "img/decimator.png";
decimator.faction = "Empire";
decimator.simple = [ BL(1), F(1), F(2), BR(1) ];
decimator.normal = [ TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
decimator.difficult = [ TL(1), TR(1) ];
decimator.actions = [ 'ROTATE_ARC', 'TARGET_LOCK', 'REINFORCE', 'FOCUS', 'COORDINATE_D' ];
decimator.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
decimator.attacks = [ 'LOCKED_DEC', 'GUNNER_DEC' ];

decimator.closing = [];
decimator.closing[0] = [ BL(1), BL(1), TL(2), TL(2), TL(2), BL(2) ];
decimator.closing[1] = [ BL(1), BL(2), BL(2), F(2), F(2), F(2) ];
decimator.closing[2] = [ TR(1), TR(1), TR(1), BR(1), TR(2), TR(2) ];
decimator.closing[3] = [ BR(1), BR(1), TR(2), TR(2), TR(3), TR(3) ];
decimator.closing[4] = [ BL(1), BL(1), TL(2), TL(2), TL(3), TL(3) ];
decimator.closing[5] = [ TL(1), TL(1), TL(1), BL(1), TL(2), TL(2) ];
decimator.closing[6] = [ BR(1), BR(2), BR(2), F(2), F(2), F(2) ];
decimator.closing[7] = [ BR(1), BR(1), TR(2), TR(2), TR(2), BR(2) ];
decimator.closing[8] = [ TL(2), TL(2), TR(2), TR(2), TL(3), TR(3) ];

decimator.away = [];
decimator.away[0] = [ BR(1), BR(1), BR(1), BR(2), BR(2), F(3) ];
decimator.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
decimator.away[2] = [ TR(1), TR(2), TR(2), TR(2), TR(3), TR(3) ];
decimator.away[3] = [ TL(2), TL(2), TR(2), TR(2), TR(2), TR(2) ];
decimator.away[4] = [ TR(2), TR(2), TL(2), TL(2), TL(2), TL(2) ];
decimator.away[5] = [ TL(1), TL(2), TL(2), TL(2), TL(3), TL(3) ];
decimator.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
decimator.away[7] = [ BL(1), BL(1), BL(1), BL(2), BL(2), F(3) ];
decimator.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

decimator.far = [];
decimator.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(3), F(3) ];
decimator.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
decimator.far[2] = [ TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
decimator.far[3] = [ TL(2), TR(2), TR(2), TR(2), TR(2), TR(2) ];
decimator.far[4] = [ TR(2), TL(2), TL(2), TL(2), TL(2), TL(2) ];
decimator.far[5] = [ TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
decimator.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
decimator.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(3), F(3) ];
decimator.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

decimator.stressed = [];
decimator.stressed[0] = [ BL(1), BR(1), BR(1), BR(1), F(2), F(2) ];
decimator.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
decimator.stressed[2] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
decimator.stressed[3] = [ BR(1), BR(1), BR(1), F(1), F(1), TR(3) ];
decimator.stressed[4] = [ BL(1), BL(1), BL(1), F(1), F(1), TL(3) ];
decimator.stressed[5] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
decimator.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
decimator.stressed[7] = [ BR(1), BL(1), BL(1), BL(1), F(2), F(2) ];
decimator.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Lambda Shuttle

var lambda = {};
lambda.name = "Lambda Shuttle";
lambda.image = "img/lambda.png";
lambda.faction = "Empire";
lambda.simple = [ BL(1), F(1), F(2), BR(1) ];
lambda.normal = [ BL(2), F(3), BR(2) ];
lambda.difficult = [ TL(2), BL(3), STA(0), BR(3), TR(2) ];
lambda.actions = [ 'FOCUS_SHOT', 'REINFORCE', 'COORDINATE', 'JAM_D', 'FOCUS' ];
lambda.targets = [ 'ARC', 'NEAREST' ];
lambda.attacks = [ 'NEAREST_LAM', 'GUNNER_LAM' ];

lambda.closing = [];
lambda.closing[0] = [ STA(0), STA(0), BR(1), BR(1), F(1), TR(2) ];
lambda.closing[1] = [ STA(0), BR(1), BR(1), TR(2), TR(2), TR(2) ];
lambda.closing[2] = [ STA(0), BR(1), BR(1), TR(2), TR(2), TR(2) ];
lambda.closing[3] = [ STA(0), STA(0), BR(1), TR(2), BR(2), BR(2) ];
lambda.closing[4] = [ STA(0), STA(0), BL(1), TL(2), BL(2), BL(2) ];
lambda.closing[5] = [ STA(0), BL(1), BL(1), TL(2), TL(2), TL(2) ];
lambda.closing[6] = [ STA(0), BL(1), BL(1), TL(2), TL(2), TL(2) ];
lambda.closing[7] = [ STA(0), STA(0), BL(1), BL(1), F(1), TL(2) ];
lambda.closing[8] = [ STA(0), STA(0), STA(0), BL(1), BR(1), F(1) ];

lambda.away = [];
lambda.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
lambda.away[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
lambda.away[2] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
lambda.away[3] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
lambda.away[4] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
lambda.away[5] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
lambda.away[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
lambda.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
lambda.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

lambda.far = [];
lambda.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(3), F(3) ];
lambda.far[1] = [ TR(2), BR(2), BR(2), BR(2), BR(2), BR(2) ];
lambda.far[2] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
lambda.far[3] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
lambda.far[4] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
lambda.far[5] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
lambda.far[6] = [ TL(2), BL(2), BL(2), BL(2), BL(2), BL(2) ];
lambda.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(3), F(3) ];
lambda.far[8] = [ F(2), F(3), F(3), F(3), F(3), F(3) ];

lambda.stressed = [];
lambda.stressed[0] = [ BR(1), BR(1), BR(1), BR(1), F(1), F(2) ];
lambda.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), F(1), F(1) ];
lambda.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), BR(1), F(1) ];
lambda.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), BR(1), F(1) ];
lambda.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), BL(1), F(1) ];
lambda.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), BL(1), F(1) ];
lambda.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), F(1), F(1) ];
lambda.stressed[7] = [ BL(1), BL(1), BL(1), BL(1), F(1), F(2) ];
lambda.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE/ln Fighter

var tie = {};
tie.name = "TIE/ln Fighter";
tie.image = "img/tie.png";
tie.faction = "Empire";
tie.simple = [ F(2), BL(2), BR(2), F(3) ];
tie.normal = [ TL(1), TL(2), TL(3), BL(3), F(4), F(5), BR(3), TR(1), TR(2), TR(3) ];
tie.difficult = [ K(3), K(4) ];
tie.actions = [ 'BARREL_ROLL_AVOID_SHOT', 'BARREL_ROLL_SHOT', 'FOCUS_SHOT', 'BARREL_ROLL_AVOID', 'EVADE' ];
tie.targets = [ 'ARC', 'NEAREST' ];
tie.attacks = [ 'NEAREST' ];

tie.closing = [];
tie.closing[0] = [ K(4), K(4), TR(1), TR(1), BR(2), BR(2) ];
tie.closing[1] = [ K(4), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tie.closing[2] = [ K(3), TR(1), TR(1), TR(1), TR(2), TR(2) ];
tie.closing[3] = [ K(4), K(4), K(3), K(3), TR(2), TR(2) ];
tie.closing[4] = [ K(4), K(4), K(3), K(3), TL(2), TL(2) ];
tie.closing[5] = [ K(3), TL(1), TL(1), TL(1), TL(2), TL(2) ];
tie.closing[6] = [ K(4), TL(1), TL(1), TL(2), TL(2), TL(2) ];
tie.closing[7] = [ K(4), K(4), TL(1), TL(1), BL(2), BL(2) ];
tie.closing[8] = [ K(4), K(4), BL(2), BR(2), F(2), F(2) ];

tie.away = [];
tie.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tie.away[1] = [ TR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tie.away[2] = [ K(3), K(3), TR(1), TR(1), TR(2), TR(2) ];
tie.away[3] = [ K(3), K(3), TR(1), TR(3), TR(3), TR(3) ];
tie.away[4] = [ K(3), K(3), TL(1), TL(3), TL(3), TL(3) ];
tie.away[5] = [ K(3), K(3), TL(1), TL(1), TL(2), TL(2) ];
tie.away[6] = [ TL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tie.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tie.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

tie.far = [];
tie.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tie.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tie.far[2] = [ TR(1), TR(2), BR(2), BR(2), BR(2), BR(2) ];
tie.far[3] = [ K(3), K(3), K(3), K(3), TR(1), TR(1) ];
tie.far[4] = [ K(3), K(3), K(3), K(3), TL(1), TL(1) ];
tie.far[5] = [ TL(1), TL(2), BL(2), BL(2), BL(2), BL(2) ];
tie.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tie.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tie.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tie.stressed = [];
tie.stressed[0] = [ BR(2), BR(2), BR(2), F(2), F(2), F(3) ];
tie.stressed[1] = [ TR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
tie.stressed[2] = [ TR(1), TR(2), BR(2), BR(2), BR(2), BR(2) ];
tie.stressed[3] = [ BR(2), BR(2), BR(2), BR(2), BR(2), TR(3) ];
tie.stressed[4] = [ BL(2), BL(2), BL(2), BL(2), BL(2), TL(3) ];
tie.stressed[5] = [ TL(1), TL(2), BL(2), BL(2), BL(2), BL(2) ];
tie.stressed[6] = [ TL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];
tie.stressed[7] = [ BL(2), BL(2), BL(2), F(2), F(2), F(3) ];
tie.stressed[8] = [ BL(2), BL(2), BR(2), BR(2), F(2), F(2) ];

// ****************************************************************************
// TIE Advanced x1

var tieAdvanced = {};
tieAdvanced.name = "TIE Advanced x1";
tieAdvanced.image = "img/TieAdvanced.png";
tieAdvanced.faction = "Empire";
tieAdvanced.simple = [ BL(1), BL(2), F(2), F(3), BR(1), BR(2) ];
tieAdvanced.normal = [ TL(2), TL(3), BL(3), F(1), F(4), F(5), BR(3), TR(2), TR(3) ];
tieAdvanced.difficult = [ K(4), TRL(3), TRR(3) ];
tieAdvanced.actions = [ 'TARGET_LOCK', 'FOCUS2BARREL_ROLL_D', 'BARREL_ROLL_MOVED_AVOID', 'FOCUS' ];
tieAdvanced.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
tieAdvanced.attacks = [ 'LOCKED_ADV' ];

tieAdvanced.closing = [];
tieAdvanced.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(1), BR(2) ];
tieAdvanced.closing[1] = [ K(4), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
tieAdvanced.closing[2] = [ TRR(3), TRR(3), TRR(3), BR(1), TR(2), TR(2) ];
tieAdvanced.closing[3] = [ K(4), K(4), TRR(3), TRR(3), TR(2), TR(2) ];
tieAdvanced.closing[4] = [ K(4), K(4), TRL(3), TRL(3), TL(2), TL(2) ];
tieAdvanced.closing[5] = [ TRL(3), TRL(3), TRL(3), BL(1), TL(2), TL(2) ];
tieAdvanced.closing[6] = [ K(4), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
tieAdvanced.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(1), BL(2) ];
tieAdvanced.closing[8] = [ K(4), K(4), F(1), F(1), F(2), F(2) ];

tieAdvanced.away = [];
tieAdvanced.away[0] = [ BR(1), BR(1), BR(2), BR(2), BR(2), BR(3) ];
tieAdvanced.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tieAdvanced.away[2] = [ K(4), TRR(3), TRR(3), TRR(3), TR(2), TR(2) ];
tieAdvanced.away[3] = [ TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
tieAdvanced.away[4] = [ TRR(3), TRR(3), TRL(3), TRL(3), TRL(3), TRL(3) ];
tieAdvanced.away[5] = [ K(4), TRL(3), TRL(3), TRL(3), TL(2), TL(2) ];
tieAdvanced.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tieAdvanced.away[7] = [ BL(1), BL(1), BL(2), BL(2), BL(2), BL(3) ];
tieAdvanced.away[8] = [ F(1), F(1), F(2), F(2), F(2), F(3) ];

tieAdvanced.far = [];
tieAdvanced.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tieAdvanced.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieAdvanced.far[2] = [ TRR(3), TRR(3), TRR(3), TR(3), TR(3), TR(3) ];
tieAdvanced.far[3] = [ TRR(3), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
tieAdvanced.far[4] = [ TRL(3), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
tieAdvanced.far[5] = [ TRL(3), TRL(3), TRL(3), TL(3), TL(3), TL(3) ];
tieAdvanced.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieAdvanced.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tieAdvanced.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tieAdvanced.stressed = [];
tieAdvanced.stressed[0] = [ BR(1), BR(1), BR(2), BR(2), F(2), F(2) ];
tieAdvanced.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
tieAdvanced.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
tieAdvanced.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), TR(3) ];
tieAdvanced.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), TL(3) ];
tieAdvanced.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
tieAdvanced.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
tieAdvanced.stressed[7] = [ BL(1), BL(1), BL(2), BL(2), F(2), F(2) ];
tieAdvanced.stressed[8] = [ BL(1), BR(1), F(2), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE/sa Bomber

var tieBomber = {};
tieBomber.name = "TIE/sa Bomber";
tieBomber.image = "img/tieBomber.png";
tieBomber.faction = "Empire";
tieBomber.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
tieBomber.normal = [ TL(2), TL(3), BL(1), BL(3), F(4), BR(1), BR(3), TR(2), TR(3) ];
tieBomber.difficult = [ K(3), K(5) ];
tieBomber.actions = [ 'RELOAD_D', 'BARREL_ROLL2LOCK_D', 'TARGET_LOCK', 'BARREL_ROLL_AVOID', 'FOCUS' ];
tieBomber.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
tieBomber.attacks = [ 'LOCKED_SA' ];

tieBomber.closing = [];
tieBomber.closing[0] = [ K(5), K(5), BR(1), BR(1), BR(1), BR(2) ];
tieBomber.closing[1] = [ K(5), K(3), K(3), TR(2), TR(2), TR(2) ];
tieBomber.closing[2] = [ K(3), K(3), K(3), BR(1), TR(2), TR(2) ];
tieBomber.closing[3] = [ K(5), K(5), K(3), K(3), TR(3), TR(3) ];
tieBomber.closing[4] = [ K(5), K(5), K(3), K(3), TL(3), TL(3) ];
tieBomber.closing[5] = [ K(3), K(3), K(3), BL(1), TL(2), TL(2) ];
tieBomber.closing[6] = [ K(5), K(3), K(3), TL(2), TL(2), TL(2) ];
tieBomber.closing[7] = [ K(5), K(5), BL(1), BL(1), BL(1), BL(2) ];
tieBomber.closing[8] = [ K(5), K(5), F(1), F(1), F(2), F(2) ];

tieBomber.away = [];
tieBomber.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tieBomber.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tieBomber.away[2] = [ K(5), K(3), K(3), K(3), TR(2), TR(2) ];
tieBomber.away[3] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
tieBomber.away[4] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
tieBomber.away[5] = [ K(5), K(3), K(3), K(3), TL(2), TL(2) ];
tieBomber.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tieBomber.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tieBomber.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

tieBomber.far = [];
tieBomber.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tieBomber.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieBomber.far[2] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
tieBomber.far[3] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
tieBomber.far[4] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
tieBomber.far[5] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
tieBomber.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieBomber.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tieBomber.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

tieBomber.stressed = [];
tieBomber.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
tieBomber.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
tieBomber.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
tieBomber.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), TR(3) ];
tieBomber.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), TL(3) ];
tieBomber.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
tieBomber.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
tieBomber.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
tieBomber.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE/D Defender

var tieDefender = {};
tieDefender.name = "TIE/D Defender";
tieDefender.image = "img/tieDefender.png";
tieDefender.faction = "Empire";
tieDefender.simple = [ BL(1), BR(1), F(2), F(3), F(4), F(5) ];
tieDefender.normal = [ BL(2), BR(2), TL(3), BL(3), BR(3), TR(3), K(4) ];
tieDefender.difficult = [ TL(1), TR(1), TL(2), TR(2), K(2) ];
tieDefender.actions = [ 'TARGET_LOCK', 'BARREL_ROLL_OR_BOOST', 'EVADE', 'FOCUS' ];
tieDefender.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
tieDefender.attacks = [ 'LOCKED_DEF' ];

tieDefender.closing = [];
tieDefender.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(1), BR(2) ];
tieDefender.closing[1] = [ K(4), K(4), K(4), TR(1), TR(1), TR(2) ];
tieDefender.closing[2] = [ K(4), K(4), K(4), BR(1), TR(2), TR(2) ];
tieDefender.closing[3] = [ K(4), K(4), K(4), K(4), TR(3), TR(3) ];
tieDefender.closing[4] = [ K(4), K(4), K(4), K(4), TL(3), TL(3) ];
tieDefender.closing[5] = [ K(4), K(4), K(4), BL(1), TL(2), TL(2) ];
tieDefender.closing[6] = [ K(4), K(4), K(4), TL(1), TL(1), TL(2) ];
tieDefender.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(1), BL(2) ];
tieDefender.closing[8] = [ K(4), K(4), BL(1), BR(1), F(2), F(2) ];

tieDefender.away = [];
tieDefender.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tieDefender.away[1] = [ TR(1), BR(2), BR(2), TR(3), TR(3), TR(3) ];
tieDefender.away[2] = [ K(4), TR(2), TR(2), TR(2), TR(3), TR(3) ];
tieDefender.away[3] = [ K(4), K(4), K(4), K(4), TR(1), TR(1) ];
tieDefender.away[4] = [ K(4), K(4), K(4), K(4), TL(1), TL(1) ];
tieDefender.away[5] = [ K(4), TL(2), TL(2), TL(2), TL(3), TL(3) ];
tieDefender.away[6] = [ TL(1), BL(2), BL(2), TL(3), TL(3), TL(3) ];
tieDefender.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tieDefender.away[8] = [ F(2), F(2), F(2), F(3), F(3), F(3) ];

tieDefender.far = [];
tieDefender.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tieDefender.far[1] = [ TR(1), TR(3), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.far[2] = [ TR(1), TR(1), TR(3), TR(3), TR(3), TR(3) ];
tieDefender.far[3] = [ TR(1), TR(1), TR(1), TR(3), TR(3), TR(3) ];
tieDefender.far[4] = [ TL(1), TL(1), TL(1), TL(3), TL(3), TL(3) ];
tieDefender.far[5] = [ TL(1), TL(1), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.far[6] = [ TL(1), TL(3), TL(3), TL(3), TL(3), TL(3) ];
tieDefender.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tieDefender.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tieDefender.stressed = [];
tieDefender.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
tieDefender.stressed[1] = [ BR(1), BR(1), BR(1), F(2), TR(3), TR(3) ];
tieDefender.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), TR(3), TR(3) ];
tieDefender.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), F(2), TR(3) ];
tieDefender.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), F(2), TL(3) ];
tieDefender.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), TL(3), TL(3) ];
tieDefender.stressed[6] = [ BL(1), BL(1), BL(1), F(2), TL(3), TL(3) ];
tieDefender.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
tieDefender.stressed[8] = [ BL(1), BR(1), F(2), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE Interceptor

var tieInterceptor = {};
tieInterceptor.name = "TIE Interceptor";
tieInterceptor.image = "img/tieInterceptor.png";
tieInterceptor.faction = "Empire";
tieInterceptor.simple = [ F(2), F(3), F(4), TL(2), BL(2), BR(2), TR(2) ];
tieInterceptor.normal = [ TL(1), TL(3), BL(3), F(5), BR(3), TR(1), TR(3) ];
tieInterceptor.difficult = [ SLL(3), SLR(3), K(4) ];
tieInterceptor.actions = [ 'F2B_F2BR_D', 'B2BR_BR2B_D', 'EVADE' ];
tieInterceptor.targets = [ 'ARC', 'NEAREST' ];
tieInterceptor.attacks = [ 'NEAREST' ];

tieInterceptor.closing = [];
tieInterceptor.closing[0] = [ SLL(3), SLL(3), TR(1), TR(1), BR(2), BR(2) ];
tieInterceptor.closing[1] = [ K(4), SLL(3), SLL(3), SLL(3), TR(1), TR(1) ];
tieInterceptor.closing[2] = [ SLL(3), SLL(3), SLL(3), TR(1), TR(2), TR(2) ];
tieInterceptor.closing[3] = [ K(4), K(4), SLL(3), SLL(3), TR(2), TR(2) ];
tieInterceptor.closing[4] = [ K(4), K(4), SLR(3), SLR(3), TL(2), TL(2) ];
tieInterceptor.closing[5] = [ SLR(3), SLR(3), SLR(3), TL(1), TL(2), TL(2) ];
tieInterceptor.closing[6] = [ K(4), SLR(3), SLR(3), SLR(3), TL(1), TL(1) ];
tieInterceptor.closing[7] = [ SLR(3), SLR(3), TL(1), TL(1), BL(2), BL(2) ];
tieInterceptor.closing[8] = [ K(4), SLR(3), SLR(3), SLL(3), SLL(3), F(2) ];

tieInterceptor.away = [];
tieInterceptor.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tieInterceptor.away[1] = [ TR(2), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tieInterceptor.away[2] = [ K(4), SLL(3), SLL(3), SLL(3), TR(2), TR(2) ];
tieInterceptor.away[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), SLL(3), SLL(3) ];
tieInterceptor.away[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
tieInterceptor.away[5] = [ K(4), SLR(3), SLR(3), SLR(3), TL(2), TL(2) ];
tieInterceptor.away[6] = [ TL(2), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tieInterceptor.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tieInterceptor.away[8] = [ F(2), F(2), F(2), F(3), F(3), F(3) ];

tieInterceptor.far = [];
tieInterceptor.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tieInterceptor.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tieInterceptor.far[2] = [ SLL(3), SLL(3), SLL(3), TR(1), TR(1), TR(1) ];
tieInterceptor.far[3] = [ SLL(3), SLL(3), SLL(3), TR(1), TR(1), TR(1) ];
tieInterceptor.far[4] = [ SLR(3), SLR(3), SLR(3), TL(1), TL(1), TL(1) ];
tieInterceptor.far[5] = [ SLR(3), SLR(3), SLR(3), TL(1), TL(1), TL(1) ];
tieInterceptor.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tieInterceptor.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tieInterceptor.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tieInterceptor.stressed = [];
tieInterceptor.stressed[0] = [ BL(2), BR(2), BR(2), F(2), F(2), F(4) ];
tieInterceptor.stressed[1] = [ TR(2), TR(2), BL(2), BR(2), BR(2), F(4) ];
tieInterceptor.stressed[2] = [ TL(2), TR(2), TR(2), TR(2), TR(2), F(4) ];
tieInterceptor.stressed[3] = [ TL(2), TL(2), TL(2), TR(2), TR(2), F(4) ];
tieInterceptor.stressed[4] = [ TR(2), TR(2), TR(2), TL(2), TL(2), F(4) ];
tieInterceptor.stressed[5] = [ TR(2), TL(2), TL(2), TL(2), TL(2), F(4) ];
tieInterceptor.stressed[6] = [ TL(2), TL(2), BR(2), BL(2), BL(2), F(4) ];
tieInterceptor.stressed[7] = [ BR(2), BL(2), BL(2), F(2), F(2), F(4) ];
tieInterceptor.stressed[8] = [ TL(2), TR(2), F(2), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE/ph Phantom

var tiePhantom = {};
tiePhantom.name = "TIE/ph Phantom";
tiePhantom.image = "img/tiePhantom.png";
tiePhantom.faction = "Empire";
tiePhantom.simple = [ BL(2), F(2), BR(2), F(3) ];
tiePhantom.normal = [ TL(1), BL(1), BR(1), TR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tiePhantom.difficult = [ K(3), K(4) ];
tiePhantom.actions = [ 'CLOAKING', 'EVADE', 'BARREL_ROLL_AVOID_SHOT', 'FOCUS' ];
tiePhantom.targets = [ 'ARC', 'NEAREST' ];
tiePhantom.attacks = [ 'NEAREST' ];

tiePhantom.closing = [];
tiePhantom.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(2), BR(2) ];
tiePhantom.closing[1] = [ K(4), K(4), TR(1), TR(1), TR(2), TR(2) ];
tiePhantom.closing[2] = [ K(4), TR(1), TR(1), TR(1), TR(2), TR(2) ];
tiePhantom.closing[3] = [ K(4), K(4), K(3), K(3), TR(2), TR(2) ];
tiePhantom.closing[4] = [ K(4), K(4), K(3), K(3), TL(2), TL(2) ];
tiePhantom.closing[5] = [ K(4), TL(1), TL(1), TL(1), TL(2), TL(2) ];
tiePhantom.closing[6] = [ K(4), K(4), TL(1), TL(1), TL(2), TL(2) ];
tiePhantom.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(2), BL(2) ];
tiePhantom.closing[8] = [ K(4), K(4), K(4), BL(1), BR(1), F(2) ];

tiePhantom.away = [];
tiePhantom.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tiePhantom.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tiePhantom.away[2] = [ K(4), K(3), K(3), TR(2), TR(2), TR(2) ];
tiePhantom.away[3] = [ K(4), K(4), K(3), K(3), K(3), K(3) ];
tiePhantom.away[4] = [ K(4), K(4), K(3), K(3), K(3), K(3) ];
tiePhantom.away[5] = [ K(4), K(3), K(3), TL(2), TL(2), TL(2) ];
tiePhantom.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tiePhantom.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tiePhantom.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

tiePhantom.far = [];
tiePhantom.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tiePhantom.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiePhantom.far[2] = [ K(3), K(3), K(3), TR(1), TR(1), TR(1) ];
tiePhantom.far[3] = [ K(3), K(3), K(3), TR(1), TR(1), TR(1) ];
tiePhantom.far[4] = [ K(3), K(3), K(3), TL(1), TL(1), TL(1) ];
tiePhantom.far[5] = [ K(3), K(3), K(3), TL(1), TL(1), TL(1) ];
tiePhantom.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiePhantom.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tiePhantom.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

tiePhantom.stressed = [];
tiePhantom.stressed[0] = [ BR(2), BR(2), F(2), F(2), F(3), F(3) ];
tiePhantom.stressed[1] = [ TR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
tiePhantom.stressed[2] = [ TR(1), TR(2), BR(2), BR(2), BR(2), BR(2) ];
tiePhantom.stressed[3] = [ BR(2), BR(2), BR(2), BR(2), F(2), TR(3) ];
tiePhantom.stressed[4] = [ BL(2), BL(2), BL(2), BL(2), F(2), TL(3) ];
tiePhantom.stressed[5] = [ TL(1), TL(2), BL(2), BL(2), BL(2), BL(2) ];
tiePhantom.stressed[6] = [ TL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];
tiePhantom.stressed[7] = [ BL(2), BL(2), F(2), F(2), F(3), F(3) ];
tiePhantom.stressed[8] = [ BL(2), BL(2), BR(2), BR(2), F(2), F(2) ];

// ****************************************************************************
// Ships

var ships = [ decimator, lambda, tie, tieAdvanced, tieBomber, tieDefender, tieInterceptor, tiePhantom ];