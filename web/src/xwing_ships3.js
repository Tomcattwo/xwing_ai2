// ****************************************************************************
// X-Wing Miniatures Heroes of the Aturi Cluster (HotAC) + Flight Group Alpha (FGA) AI - Ships 2nd Edition
// Generated: By hand on 18 June 2020, 2100
// NOTE: FGA AI contains the 27 ships used in the FGA game and includes all the HotAC AI - Both campaigns can be played using this single app
// NOTE: FGA AI only uses 6 maneuver possibilities (vice 10) and includes a NEW "Full Front Bullseye" location (9 possible target locations: 0-8 [8 is the Bullseye])

var VERSION = "3.1.3";

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
tie.init = "1-orange.png";
tie.pilot = "Academy Pilot";
tie.stats = "stats_tie.png";
tie.icons = "icons_tie.png";
tie.table = "table_tie.png";
tie.ability = [ 'NONE' ];
tie.flee = [ '0' ];
tie.threshold = "0";

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
tie.far[2] = [ K(3), K(3), K(3), TR(1), TR(1), TR(1) ];
tie.far[3] = [ K(3), K(3), K(3), K(3), TR(1), TR(1) ];
tie.far[4] = [ K(3), K(3), K(3), K(3), TL(1), TL(1) ];
tie.far[5] = [ K(3), K(3), K(3), TL(1), TL(1), TL(1) ];
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
tieInterceptor.init = "1-orange.png";
tieInterceptor.pilot = "ALPHA Squadron Pilot";
tieInterceptor.stats = "stats_interceptor.png";
tieInterceptor.icons = "icons_interceptor.png";
tieInterceptor.table = "table_interceptor.png";
tieInterceptor.ability = [ 'AUTOTHRUSTERS' ];
tieInterceptor.flee = [ '0' ];
tieInterceptor.threshold = "0";

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
tieInterceptor.stressed[2] = [ TL(2), TR(2), TR(2), TR(2), BL(2), F(4) ];
tieInterceptor.stressed[3] = [ TL(2), TL(2), TL(2), TR(2), TR(2), F(4) ];
tieInterceptor.stressed[4] = [ TR(2), TR(2), TR(2), TL(2), TL(2), F(4) ];
tieInterceptor.stressed[5] = [ TR(2), TL(2), TL(2), TL(2), BL(2), F(4) ];
tieInterceptor.stressed[6] = [ TL(2), TL(2), BR(2), BL(2), BL(2), F(4) ];
tieInterceptor.stressed[7] = [ BR(2), BL(2), BL(2), F(2), F(2), F(4) ];
tieInterceptor.stressed[8] = [ TL(2), TR(2), F(2), F(2), F(2), F(2) ];

// ****************************************************************************
// TIE Advanced x1

var tieAdvanced = {};
tieAdvanced.name = "TIE Advanced x1";
tieAdvanced.image = "img/TieAdvanced.png";
tieAdvanced.faction = "Empire";
tieAdvanced.simple = [ BL(1), BL(2), F(2), F(3), BR(1), BR(2) ];
tieAdvanced.normal = [ TL(2), TL(3), BL(3), F(1), F(4), F(5), BR(3), TR(2), TR(3) ];
tieAdvanced.difficult = [ K(4), TRL(3), TRR(3) ];
tieAdvanced.actions = [ 'TARGET_LOCK_M', 'FOCUS2BARREL_ROLL_D_M', 'BARREL_ROLL_M_AVOID', 'FOCUS' ];
tieAdvanced.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
tieAdvanced.attacks = [ 'LOCKED_ADV' ];
tieAdvanced.init = "2-orange.png";
tieAdvanced.pilot = "TEMPEST Squadron Pilot";
tieAdvanced.stats = "stats_advanced.png";
tieAdvanced.icons = "icons_advanced.png";
tieAdvanced.table = "table_advanced.png";
tieAdvanced.ability = [ 'ADVANCED_TARGETING_COMPUTER' ];
tieAdvanced.flee = [ '2BL', '2BL', '2BR', '2BR', '2F', '2F' ];
tieAdvanced.threshold = "0";

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
tieAdvanced.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
tieAdvanced.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
tieAdvanced.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
tieAdvanced.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), TR(3) ];
tieAdvanced.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), TL(3) ];
tieAdvanced.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
tieAdvanced.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
tieAdvanced.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
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
tieBomber.init = "2-orange.png";
tieBomber.pilot = "SCIMITAR Squadron Pilot";
tieBomber.stats = "stats_bomber.png";
tieBomber.icons = "icons_bomber.png";
tieBomber.table = "table_bomber.png";
tieBomber.ability = [ 'NIMBLE_BOMBER' ];
tieBomber.flee = [ '0' ];
tieBomber.threshold = "0";

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
tieDefender.actions = [ 'TARGET_LOCK_M', 'BARREL_ROLL_OR_BOOST', 'EVADE', 'FOCUS' ];
tieDefender.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
tieDefender.attacks = [ 'LOCKED_DEF' ];
tieDefender.init = "1-orange.png";
tieDefender.pilot = "DELTA Squadron Pilot";
tieDefender.stats = "stats_defender.png";
tieDefender.icons = "icons_defender.png";
tieDefender.table = "table_defender.png";
tieDefender.ability = [ 'FULL_THROTTLE' ];
tieDefender.flee = [ '1BL', '1BR', '4F', '4F', '5F', '5F' ];
tieDefender.threshold = "0";

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
tiePhantom.init = "3-orange.png";
tiePhantom.pilot = "IMDAAR Test Pilot";
tiePhantom.stats = "stats_phantom.png";
tiePhantom.icons = "icons_phantom.png";
tiePhantom.table = "table_phantom.png";
tiePhantom.ability = [ 'STYGIUM_ARRAY' ];
tiePhantom.flee = [ '2BL', '2BL', '2BR', '2BR', '2F', '3F' ];
tiePhantom.threshold = "0";

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
lambda.init = "1-orange.png";
lambda.pilot = "OMICRON Group Pilot";
lambda.stats = "stats_lambda.png";
lambda.icons = "icons_lambda.png";
lambda.table = "table_lambda.png";
lambda.ability = [ 'NONE' ];
lambda.flee = [ '1BL', '1BR', '1F', '1F', '2F', '2F' ];
lambda.threshold = "5";

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
// VT-49 Decimator

var decimator = {};
decimator.name = "VT-49 Decimator";
decimator.image = "img/decimator.png";
decimator.faction = "Empire";
decimator.simple = [ BL(1), F(1), F(2), BR(1) ];
decimator.normal = [ TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(2), TR(3) ];
decimator.difficult = [ TL(1), TR(1) ];
decimator.actions = [ 'ROTATE_ARC', 'TARGET_LOCK_M', 'REINFORCE', 'FOCUS', 'COORDINATE_D' ];
decimator.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
decimator.attacks = [ 'LOCKED_DEC', 'GUNNER_DEC' ];
decimator.init = "2-orange.png";
decimator.pilot = "Patrol Leader";
decimator.stats = "stats_decimator.png";
decimator.icons = "icons_decimator.png";
decimator.table = "table_decimator.png";
decimator.ability = [ 'NONE' ];
decimator.flee = [ '1BL', '1BR', '1F', '1F', '2F', '2F' ];
decimator.threshold = "0";

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
// Z-95-AF4 Headhunter

var z95 = {};
z95.name = "Z-95-AF4 Headhunter";
z95.image = "img/z95.png";
z95.faction = "Rebel";
z95.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
z95.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
z95.difficult = [ K(3), K(4) ];
z95.actions = [ 'TARGET_LOCK', 'BARREL_ROLL_D_AVOID_SHOT', 'FOCUS_SHOT', 'BARREL_ROLL_D_SHOT', 'BARREL_ROLL_D_AVOID', 'FOCUS' ];
z95.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
z95.attacks = [ 'LOCKED_Z95' ];
z95.init = "1-orange.png";
z95.pilot = "Bandit Squadron Escort";
z95.stats = "stats_z95.png";
z95.icons = "icons_z95.png";
z95.table = "table_z95.png";
z95.ability = [ 'NONE' ];
z95.flee = [ '2BL', '2BR', '2F', '2F', '3F', '3F' ];
z95.threshold = "2";

z95.closing = [];
z95.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(1), BR(2) ];
z95.closing[1] = [ K(4), K(3), K(3), TR(2), TR(2), TR(2) ];
z95.closing[2] = [ K(3), K(3), K(3), BR(1), TR(2), TR(2) ];
z95.closing[3] = [ K(4), K(4), K(3), K(3), TR(2), TR(2) ];
z95.closing[4] = [ K(4), K(4), K(3), K(3), TL(2), TL(2) ];
z95.closing[5] = [ K(3), K(3), K(3), BL(1), TL(2), TL(2) ];
z95.closing[6] = [ K(4), K(3), K(3), TL(2), TL(2), TL(2) ];
z95.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(1), BL(2) ];
z95.closing[8] = [ K(3), K(3), F(1), F(1), F(2), F(2) ];

z95.away = [];
z95.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
z95.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
z95.away[2] = [ K(4), K(3), K(3), K(3), TR(2), TR(2) ];
z95.away[3] = [ K(3), K(3), TR(2), TR(2), TR(2), TR(2) ];
z95.away[4] = [ K(3), K(3), TL(2), TL(2), TL(2), TL(2) ];
z95.away[5] = [ K(4), K(3), K(3), K(3), TL(2), TL(2) ];
z95.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
z95.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
z95.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

z95.far = [];
z95.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
z95.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
z95.far[2] = [ K(3), K(3), K(3), TR(3), TR(3), TR(3) ];
z95.far[3] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
z95.far[4] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
z95.far[5] = [ K(3), K(3), K(3), TL(3), TL(3), TL(3) ];
z95.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
z95.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
z95.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

z95.stressed = [];
z95.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
z95.stressed[1] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
z95.stressed[2] = [ TR(2), TR(2), BR(2), BR(2), BR(2), BR(2) ];
z95.stressed[3] = [ F(1), F(1), BR(2), BR(2), BR(2), TR(3) ];
z95.stressed[4] = [ F(1), F(1), BL(2), BL(2), BL(2), TL(3) ];
z95.stressed[5] = [ TL(2), TL(2), BL(2), BL(2), BL(2), BL(2) ];
z95.stressed[6] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
z95.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
z95.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// T-65 X-Wing

var xwing = {};
xwing.name = "T-65 X-Wing";
xwing.image = "img/xwing.png";
xwing.faction = "Rebel";
xwing.simple = [ F(1), BL(1), BR(1), F(2), BL(2), BR(2) ];
xwing.normal = [ TL(2), TL(3), BL(3), F(3), F(4), BR(3), TR(2), TR(3) ];
xwing.difficult = [ TRL(3), TRR(3), K(4) ];
xwing.actions = [ 'TARGET_LOCK_M', 'BARREL_ROLL_M_AVOID_SHOT', 'BARREL_ROLL_M_SHOT', 'BARREL_ROLL_M_AVOID', 'FOCUS' ];
xwing.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
xwing.attacks = [ 'LOCKED_X' ];
xwing.init = "2-orange.png";
xwing.pilot = "Blue Squadron Escort";
xwing.stats = "stats_xwing.png";
xwing.icons = "icons_xwing.png";
xwing.table = "table_xwing.png";
xwing.ability = [ 'NONE' ];
xwing.flee = [ '1F', '1F', '1BL', '1BR', '2F', '2F' ];
xwing.threshold = "2";

xwing.closing = [];
xwing.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(1), BR(2) ];
xwing.closing[1] = [ K(4), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
xwing.closing[2] = [ TRR(3), TRR(3), TRR(3), BR(1), TR(2), TR(2) ];
xwing.closing[3] = [ K(4), K(4), TRR(3), TRR(3), TR(2), TR(2) ];
xwing.closing[4] = [ K(4), K(4), TRL(3), TRL(3), TL(2), TL(2) ];
xwing.closing[5] = [ TRL(3), TRL(3), TRL(3), BL(1), TL(2), TL(2) ];
xwing.closing[6] = [ K(4), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
xwing.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(1), BL(2) ];
xwing.closing[8] = [ K(4), K(4), F(1), F(1), F(2), F(2) ];

xwing.away = [];
xwing.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
xwing.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
xwing.away[2] = [ K(4), TRR(3), TRR(3), TRR(3), TR(2), TR(2) ];
xwing.away[3] = [ TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
xwing.away[4] = [ TRR(3), TRR(3), TRL(3), TRL(3), TRL(3), TRL(3) ];
xwing.away[5] = [ K(4), TRL(3), TRL(3), TRL(3), TL(2), TL(2) ];
xwing.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
xwing.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
xwing.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

xwing.far = [];
xwing.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
xwing.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
xwing.far[2] = [ TRR(3), TRR(3), TRR(3), TR(3), TR(3), TR(3) ];
xwing.far[3] = [ TRR(3), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
xwing.far[4] = [ TRL(3), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
xwing.far[5] = [ TRL(3), TRL(3), TRL(3), TL(3), TL(3), TL(3) ];
xwing.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
xwing.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
xwing.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

xwing.stressed = [];
xwing.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
xwing.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
xwing.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
xwing.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), TR(3) ];
xwing.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), TL(3) ];
xwing.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
xwing.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
xwing.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
xwing.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// BTL-A4 Y-Wing

var ywinga4 = {};
ywinga4.name = "BTL-A4 Y-Wing";
ywinga4.image = "img/ywing.png";
ywinga4.faction = "Rebel";
ywinga4.simple = [ BL(1), BR(1), F(1), F(2) ];
ywinga4.normal = [ TL(2), BL(2), BL(3), F(3), BR(2), BR(3), TR(2) ];
ywinga4.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywinga4.actions = [ 'TARGET_LOCK', 'ROTATE_ARC', 'FOCUS_SHOT', 'BARREL_ROLL_D_SHOT', 'RELOAD_D', 'FOCUS' ];
ywinga4.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
ywinga4.attacks = [ 'LOCKED_Y' ];
ywinga4.init = "2-orange.png";
ywinga4.pilot = "Gray Squadron Bomber";
ywinga4.stats = "stats_ywing.png";
ywinga4.icons = "icons_ywing.png";
ywinga4.table = "table_ywing.png";
ywinga4.ability = [ 'NONE' ];
ywinga4.flee = [ '1F', '1BL', '1BL', '1BR', '1BR', '2F' ];
ywinga4.threshold = "2";

ywinga4.closing = [];
ywinga4.closing[0] = [ K(4), K(4), BR(1), BR(1), BL(2), BL(2) ];
ywinga4.closing[1] = [ BL(1), BL(2), BL(2), BL(2), F(2), F(2) ];
ywinga4.closing[2] = [ K(4), BR(1), BR(1), BR(1), TR(2), TR(2) ];
ywinga4.closing[3] = [ F(1), F(1), TR(2), TR(2), F(2), F(2) ];
ywinga4.closing[4] = [ F(1), F(1), TL(2), TL(2), F(2), F(2) ];
ywinga4.closing[5] = [ K(4), BL(1), BL(1), BL(1), TL(2), TL(2) ];
ywinga4.closing[6] = [ BR(1), BR(2), BR(2), BR(2), F(2), F(2) ];
ywinga4.closing[7] = [ K(4), K(4), BL(1), BL(1), BR(2), BR(2) ];
ywinga4.closing[8] = [ K(4), F(1), F(1), F(1), F(2), F(2) ];

ywinga4.away = [];
ywinga4.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
ywinga4.away[1] = [ BR(1), TR(2), TR(2), TR(2), BR(2), TR(3) ];
ywinga4.away[2] = [ K(4), K(4), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.away[3] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.away[4] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
ywinga4.away[5] = [ K(4), K(4), TL(2), TL(2), TL(2), TL(2) ];
ywinga4.away[6] = [ BL(1), TL(2), TL(2), TL(2), BL(2), TL(3) ];
ywinga4.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
ywinga4.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

ywinga4.far = [];
ywinga4.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(3), F(3) ];
ywinga4.far[1] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3) ];
ywinga4.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3) ];
ywinga4.far[3] = [ K(4), K(4), TR(2), TR(2), TR(2), TR(2) ];
ywinga4.far[4] = [ K(4), K(4), TL(2), TL(2), TL(2), TL(2) ];
ywinga4.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3) ];
ywinga4.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3) ];
ywinga4.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(3), F(3) ];
ywinga4.far[8] = [ F(3), F(3), F(3), F(4), F(4), F(4) ];

ywinga4.stressed = [];
ywinga4.stressed[0] = [ BR(1), BR(1), BR(1), BR(2), F(2), F(2) ];
ywinga4.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
ywinga4.stressed[2] = [ BR(1), BR(1), BR(1), TR(2), TR(2), TR(2) ];
ywinga4.stressed[3] = [ BR(1), BR(1), BR(1), F(1), F(1), TR(2) ];
ywinga4.stressed[4] = [ BL(1), BL(1), BL(1), F(1), F(1), TL(2) ];
ywinga4.stressed[5] = [ BL(1), BL(1), BL(1), TL(2), TL(2), TL(2) ];
ywinga4.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
ywinga4.stressed[7] = [ BL(1), BL(1), BL(1), BL(2), F(2), F(2) ];
ywinga4.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// RZ-1 A-Wing

var awing = {};
awing.name = "RZ-1 A-Wing";
awing.image = "img/awing.png";
awing.faction = "Rebel";
awing.simple = [ F(2), F(3), F(4), F(5), TL(2), BL(2), BR(2), TR(2) ];
awing.normal = [ TL(1), TL(3), BL(3), BR(3), TR(1), TR(3) ];
awing.difficult = [ SLL(3), K(5), SLR(3) ];
awing.actions = [ 'TARGET_LOCK_M', 'FOCUS_M_SHOT', 'EVADE', 'BOOST_OR_BARREL_ROLL_M_SHOT', 'FOCUS2BOOST_D_M_SHOT', 'BOOST_OR_BARREL_ROLL_M_AVOID', 'TARGET_LOCK', 'FOCUS_M' ];
awing.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
awing.attacks = [ 'LOCKED_A' ];
awing.init = "1-orange.png";
awing.pilot = "Phoenix Squadron";
awing.stats = "stats_awing.png";
awing.icons = "icons_awing.png";
awing.table = "table_awing.png";
awing.ability = [ 'VECTORED_THRUSTERS' ];
awing.flee = [ '2BL', '2BR', '4F', '4F', '5F', '5F' ];
awing.threshold = "2";

awing.closing = [];
awing.closing[0] = [ SLL(3), SLL(3), SLL(3), TR(1), BR(2), BR(2) ];
awing.closing[1] = [ K(5), SLL(3), SLL(3), TR(1), TR(1), TR(1) ];
awing.closing[2] = [ SLL(3), SLL(3), SLL(3), TR(1), TR(2), TR(2) ];
awing.closing[3] = [ K(5), K(5), SLL(3), SLL(3), TR(2), TR(2) ];
awing.closing[4] = [ K(5), K(5), SLR(3), SLR(3), TL(2), TL(2) ];
awing.closing[5] = [ SLR(3), SLR(3), SLR(3), TL(1), TL(2), TL(2) ];
awing.closing[6] = [ K(5), SLR(3), SLR(3), TL(1), TL(1), TL(1) ];
awing.closing[7] = [ SLR(3), SLR(3), SLR(3), TL(1), BL(2), BL(2) ];
awing.closing[8] = [ K(5), SLR(3), SLR(3), SLL(3), SLL(3), F(2) ];

awing.away = [];
awing.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
awing.away[1] = [ TR(2), TR(2), BR(2), BR(2), TR(3), TR(3) ];
awing.away[2] = [ SLR(3), SLR(3), SLL(3), TR(2), TR(2), TR(2) ];
awing.away[3] = [ SLL(3), SLL(3), TR(2), TR(2), TR(2), TR(2) ];
awing.away[4] = [ SLR(3), SLR(3), TL(2), TL(2), TL(2), TL(2) ];
awing.away[5] = [ SLL(3), SLL(3), SLR(3), TL(2), TL(2), TL(2) ];
awing.away[6] = [ TL(2), TL(2), BL(2), BL(2), TL(3), TL(3) ];
awing.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
awing.away[8] = [ F(2), F(2), F(3), F(3), F(3), F(3) ];

awing.far = [];
awing.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
awing.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
awing.far[2] = [ SLL(3), SLL(3), SLL(3), TR(1), TR(1), TR(1) ];
awing.far[3] = [ SLL(3), SLL(3), SLL(3), TR(2), TR(2), TR(2) ];
awing.far[4] = [ SLR(3), SLR(3), SLR(3), TL(2), TL(2), TL(2) ];
awing.far[5] = [ SLR(3), SLR(3), SLR(3), TL(1), TL(1), TL(1) ];
awing.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
awing.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
awing.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

awing.stressed = [];
awing.stressed[0] = [ TR(2), BR(2), BR(2), BR(2), F(2), F(2) ];
awing.stressed[1] = [ TR(2), TR(2), TR(2), BR(2), BR(2), TR(3) ];
awing.stressed[2] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
awing.stressed[3] = [ TR(2), TR(2), TR(2), TR(2), TR(3), F(5) ];
awing.stressed[4] = [ TL(2), TL(2), TL(2), TL(2), TL(3), F(5) ];
awing.stressed[5] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
awing.stressed[6] = [ TL(2), TL(2), TL(2), BL(2), BL(2), TL(3) ];
awing.stressed[7] = [ TL(2), BL(2), BL(2), BL(2), F(2), F(2) ];
awing.stressed[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

// ****************************************************************************
// A/SF-01 B-Wing

var bwing = {};
bwing.name = "A/SF-01 B-Wing";
bwing.image = "img/bwing.png";
bwing.faction = "Rebel";
bwing.simple = [ BL(1), F(1), F(2), F(3), BR(1) ];
bwing.normal = [ TL(2), BL(2), BR(2), TR(2),  ];
bwing.difficult = [ TRL(1), TL(1), BL(3), F(4), BR(3), TR(1), TRR(1), K(2) ];
bwing.actions = [ 'TARGET_LOCK_M', 'FOCUS2BARREL_ROLL_D_M', 'BARREL_ROLL_M_AVOID', 'FOCUS' ];
bwing.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
bwing.attacks = [ 'LOCKED_B' ];
bwing.init = "2-orange.png";
bwing.pilot = "Blue Squadron Pilot";
bwing.stats = "stats_bwing.png";
bwing.icons = "icons_bwing.png";
bwing.table = "table_bwing.png";
bwing.ability = [ 'NONE' ];
bwing.flee = [ '1F', '1F', '1BL', '1BR', '3F', '3F' ];
bwing.threshold = "2";

bwing.closing = [];
bwing.closing[0] = [ K(2), BR(1), BR(1), BR(1), BR(1), BR(2) ];
bwing.closing[1] = [ TR(1), TR(1), BR(1), TR(2), TR(2), TR(2) ];
bwing.closing[2] = [ K(2), K(2), K(2), BR(1), TR(2), TR(2) ];
bwing.closing[3] = [ K(2), K(2), TRL(1), TRL(1), TR(2), TR(2) ];
bwing.closing[4] = [ K(2), K(2), TRR(1), TRR(1), TL(2), TL(2) ];
bwing.closing[5] = [ K(2), K(2), K(2), BL(1), TL(2), TL(2) ];
bwing.closing[6] = [ TL(1), TL(1), BL(1), TL(2), TL(2), TL(2) ];
bwing.closing[7] = [ K(2), BL(1), BL(1), BL(1), BL(1), BL(2) ];
bwing.closing[8] = [ F(1), F(1), F(1), F(1), F(2), F(2) ];

bwing.away = [];
bwing.away[0] = [ BR(1), BR(1), BR(1), BR(2), BR(2), BR(3) ];
bwing.away[1] = [ BR(1), TR(2), TR(2), TR(2), TR(2), BR(2) ];
bwing.away[2] = [ K(2), TRR(1), TRR(1), TRR(1), TR(2), TR(2) ];
bwing.away[3] = [ K(2), K(2), TRR(1), TRR(1), TRR(1), TRR(1) ];
bwing.away[4] = [ K(2), K(2), TRL(1), TRL(1), TRL(1), TRL(1) ];
bwing.away[5] = [ K(2), TRL(1), TRL(1), TRL(1), TL(2), TL(2) ];
bwing.away[6] = [ BL(1), TL(2), TL(2), TL(2), TL(2), BL(2) ];
bwing.away[7] = [ BL(1), BL(1), BL(1), BL(2), BL(2), BL(3) ];
bwing.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

bwing.far = [];
bwing.far[0] = [ BR(2), BR(2), BR(2), BR(2), BR(3), BR(3) ];
bwing.far[1] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
bwing.far[2] = [ TRR(1), TRR(1), TR(2), TR(2), TR(2), TR(2) ];
bwing.far[3] = [ TRR(1), TRR(1), TRR(1), TR(2), TR(2), TR(2) ];
bwing.far[4] = [ TRL(1), TRL(1), TRL(1), TL(2), TL(2), TL(2) ];
bwing.far[5] = [ TRL(1), TRL(1), TL(2), TL(2), TL(2), TL(2) ];
bwing.far[6] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
bwing.far[7] = [ BL(2), BL(2), BL(2), BL(2), BL(3), BL(3) ];
bwing.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

bwing.stressed = [];
bwing.stressed[0] = [ BR(1), BR(1), BR(1), BR(2), F(2), F(2) ];
bwing.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
bwing.stressed[2] = [ BR(1), BR(1), BR(1), TR(2), TR(2), TR(2) ];
bwing.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), F(1), F(2) ];
bwing.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), F(1), F(2) ];
bwing.stressed[5] = [ BL(1), BL(1), BL(1), TL(2), TL(2), TL(2) ];
bwing.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
bwing.stressed[7] = [ BL(1), BL(1), BL(1), BL(2), F(2), F(2) ];
bwing.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// YT-2400 Light Freighter

var outrider = {};
outrider.name = "YT-2400 Light Freighter";
outrider.image = "img/outrider.png";
outrider.faction = "Rebel";
outrider.simple = [ BL(1), F(1), F(2), BR(1) ];
outrider.normal = [ TL(1), TL(2), TL(3), BL(2), BL(3), F(3), F(4), BR(2), BR(3), TR(1), TR(2), TR(3) ];
outrider.difficult = [ K(4) ];
outrider.actions = [ 'ROTATE_ARC', 'TARGET_LOCK_M', 'BARREL_ROLL_D_M_R2', 'FOCUS' ];
outrider.targets = [ 'LOCKED', 'LOWERI_TURRET', 'ARC_TURRET', 'NEAREST' ];
outrider.attacks = [ 'LOCKED_YT2400' ];
outrider.init = "1-orange.png";
outrider.pilot = "Wild Space Fringer";
outrider.stats = "stats_yt2400.png";
outrider.icons = "icons_yt2400.png";
outrider.table = "table_yt2400.png";
outrider.ability = [ 'SENSOR_BLINDSPOT' ];
outrider.flee = [ '1BL', '1BL', '1BR', '1F', '2F', '2F' ];
outrider.threshold = "2";

outrider.closing = [];
outrider.closing[0] = [ BL(1), BL(1), TL(2), TL(2), TL(2), BL(2) ];
outrider.closing[1] = [ BL(1), BL(2), BL(2), F(2), F(2), F(2) ];
outrider.closing[2] = [ F(1), F(1), F(1), BL(1), TR(2), TR(2) ];
outrider.closing[3] = [ K(4), K(4), K(4), TR(2), TR(2), TR(2) ];
outrider.closing[4] = [ K(4), K(4), K(4), TL(2), TL(2), TL(2) ];
outrider.closing[5] = [ F(1), F(1), F(1), BR(1), TL(2), TL(2) ];
outrider.closing[6] = [ BR(1), BR(2), BR(2), F(2), F(2), F(2) ];
outrider.closing[7] = [ BR(1), BR(1), TR(2), TR(2), TR(2), BR(2) ];
outrider.closing[8] = [ K(4), K(4), TL(2), TL(2), TR(2), TR(2) ];

outrider.away = [];
outrider.away[0] = [ BR(1), BR(1), BR(1), BR(2), BR(2), F(3) ];
outrider.away[1] = [ TR(1), BR(1), BR(2), BR(2), TR(2), TR(2) ];
outrider.away[2] = [ K(4), TR(1), TR(1), TR(1), TR(2), TR(2) ];
outrider.away[3] = [ TR(1), TR(1), TR(2), TR(2), TR(2), TR(2) ];
outrider.away[4] = [ TL(1), TL(1), TL(2), TL(2), TL(2), TL(2) ];
outrider.away[5] = [ K(4), TL(1), TL(1), TL(1), TL(2), TL(2) ];
outrider.away[6] = [ TL(1), BL(1), BL(2), BL(2), TL(2), TL(2) ];
outrider.away[7] = [ BL(1), BL(1), BL(1), BL(2), BL(2), F(3) ];
outrider.away[8] = [ F(1), F(2), F(2), F(2), F(2), F(3) ];

outrider.far = [];
outrider.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(3), F(3) ];
outrider.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
outrider.far[2] = [ K(4), K(4), K(4), TR(1), TR(1), TR(1) ];
outrider.far[3] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
outrider.far[4] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
outrider.far[5] = [ K(4), K(4), K(4), TL(1), TL(1), TL(1) ];
outrider.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
outrider.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(3), F(3) ];
outrider.far[8] = [ F(3), F(3), F(4), F(4), F(4), F(4) ];

outrider.stressed = [];
outrider.stressed[0] = [ BR(1), BR(1), F(1), F(1), F(2), F(2) ];
outrider.stressed[1] = [ BR(1), BR(1), F(1), F(2), F(2), F(2) ];
outrider.stressed[2] = [ TR(1), BR(1), BR(2), BR(2), BR(2), BR(2) ];
outrider.stressed[3] = [ TR(1), BR(1), BR(1), BR(1), BR(2), BR(2) ];
outrider.stressed[4] = [ TL(1), BL(1), BL(1), BL(1), BL(2), BL(2) ];
outrider.stressed[5] = [ TL(1), BL(1), BL(2), BL(2), BL(2), BL(2) ];
outrider.stressed[6] = [ BL(1), BL(1), F(1), F(2), F(2), F(2) ];
outrider.stressed[7] = [ BL(1), BL(1), F(1), F(1), F(2), F(2) ];
outrider.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Modified YT-1300 Light Freighter

var falcon = {};
falcon.name = "Modified YT-1300 Light Freighter";
falcon.image = "img/falcon.png";
falcon.faction = "Rebel";
falcon.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
falcon.normal = [ TL(2), TL(3), BL(1), BL(3), F(4), BR(1), BR(3), TR(2), TR(3) ];
falcon.difficult = [ SLL(3), SLR(3), K(4) ];
falcon.actions = [ 'ROTATE_ARC', 'BOOST_D', 'TARGET_LOCK', 'FOCUS' ];
falcon.targets = [ 'LOCKED', 'ARC_TURRET', 'NEAREST' ];
falcon.attacks = [ 'NEAREST_YT1300' ];
falcon.init = "1-orange.png";
falcon.pilot = "Outer Rim Smuggler";
falcon.stats = "stats_yt1300.png";
falcon.icons = "icons_yt1300.png";
falcon.table = "table_yt1300.png";
falcon.ability = [ 'NONE' ];
falcon.flee = [ '2BL', '2BR', '2F', '2F', '3F', '3F' ];
falcon.threshold = "2";

falcon.closing = [];
falcon.closing[0] = [ BL(1), BL(1), TL(2), TL(2), TL(2), BL(2) ];
falcon.closing[1] = [ BL(1), BL(2), BL(2), F(2), F(2), F(2) ];
falcon.closing[2] = [ SLL(3), SLL(3), BR(1), TR(2), TR(2), TR(2) ];
falcon.closing[3] = [ K(4), SLL(3), SLL(3), TR(2), TR(2), TR(2) ];
falcon.closing[4] = [ K(4), SLR(3), SLR(3), TL(2), TL(2), TL(2) ];
falcon.closing[5] = [ SLR(3), SLR(3), BL(1), TL(2), TL(2), TL(2) ];
falcon.closing[6] = [ BR(1), BR(2), BR(2), F(2), F(2), F(2) ];
falcon.closing[7] = [ BR(1), BR(1), TR(2), TR(2), TR(2), BR(2) ];
falcon.closing[8] = [ TL(2), TL(2), TR(2), TR(2), TL(3), TR(3) ];

falcon.away = [];
falcon.away[0] = [ BR(1), BR(1), BR(1), BR(2), BR(2), F(3) ];
falcon.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
falcon.away[2] = [ K(4), SLL(3), SLL(3), SLL(3), TR(2), TR(2) ];
falcon.away[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), SLL(3), SLL(3) ];
falcon.away[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
falcon.away[5] = [ K(4), SLR(3), SLR(3), SLR(3), TL(2), TL(2) ];
falcon.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
falcon.away[7] = [ BL(1), BL(1), BL(1), BL(2), BL(2), F(3) ];
falcon.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

falcon.far = [];
falcon.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
falcon.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
falcon.far[2] = [ SLL(3), SLL(3), SLL(3), TR(2), TR(2), TR(2) ];
falcon.far[3] = [ SLL(3), SLL(3), SLL(3), TR(2), TR(2), TR(2) ];
falcon.far[4] = [ SLR(3), SLR(3), SLR(3), TL(2), TL(2), TL(2) ];
falcon.far[5] = [ SLR(3), SLR(3), SLR(3), TL(2), TL(2), TL(2) ];
falcon.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
falcon.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
falcon.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

falcon.stressed = [];
falcon.stressed[0] = [ BR(1), BL(2), BR(2), BR(2), BR(2), BR(2) ];
falcon.stressed[1] = [ TR(2), BR(2), BR(2), BR(2), BR(2), BR(2) ];
falcon.stressed[2] = [ TR(2), TR(2), BR(2), BR(2), BR(2), BR(2) ];
falcon.stressed[3] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
falcon.stressed[4] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
falcon.stressed[5] = [ TL(2), TL(2), BL(2), BL(2), BL(2), BL(2) ];
falcon.stressed[6] = [ TL(2), BL(2), BL(2), BL(2), BL(2), BL(2) ];
falcon.stressed[7] = [ BL(1), BR(2), BL(2), BL(2), BL(2), BL(2) ];
falcon.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// VCX-100 Light Freighter (Ghost)

var ghost = {};
ghost.name = "VCX-100 Light Freighter (Ghost)";
ghost.image = "img/ghost.png";
ghost.faction = "Rebel";
ghost.simple = [ F(1), BR(2), BL(2), F(2) ];
ghost.normal = [ BR(1), BL(1), BL(3), BR(3), TR(2), TL(2), F(3), F(4) ];
ghost.difficult = [ TL(1), TR(1), TR(3), TL(3), K(4) ];
ghost.actions = [ 'ROTATE_ARC', 'TARGET_LOCK', 'FOCUS_SHOT', 'REINFORCE', 'FOCUS' ];
ghost.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
ghost.attacks = [ 'LOCKED_GHOST' ];
ghost.init = "2-orange.png";
ghost.pilot = "Lothal Rebel";
ghost.stats = "stats_ghost.png";
ghost.icons = "icons_ghost.png";
ghost.table = "table_ghost.png";
ghost.ability = [ 'TAIL_GUN' ];
ghost.flee = [ '1F', '2BL', '2BL', '2BR', '2BR', '2F' ];
ghost.threshold = "3";

ghost.closing = [];
ghost.closing[0] = [ BR(1), BR(1), BL(2), BL(2), BL(2), BR(2) ];
ghost.closing[1] = [ K(4), BL(2), BL(2), TR(2), TR(2), TR(2) ];
ghost.closing[2] = [ K(4), K(4), K(4), BR(1), TR(2), TR(2) ];
ghost.closing[3] = [ K(4), K(4), TL(2), TL(2), TR(2), TR(2) ];
ghost.closing[4] = [ K(4), K(4), TR(2), TR(2), TL(2), TL(2) ];
ghost.closing[5] = [ K(4), K(4), K(4), BL(1), TL(2), TL(2) ];
ghost.closing[6] = [ K(4), BR(2), BR(2), TL(2), TL(2), TL(2) ];
ghost.closing[7] = [ BL(1), BL(1), BR(2), BR(2), BR(2), BL(2) ];
ghost.closing[8] = [ K(4), F(1), TL(2), TL(2), TR(2), TR(2) ];

ghost.away = [];
ghost.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
ghost.away[1] = [ BR(1), TR(2), TR(2), BR(2), BR(2), TR(3) ];
ghost.away[2] = [ K(4), TR(1), TR(2), TR(2), TR(2), TR(2) ];
ghost.away[3] = [ K(4), K(4), TR(2), TR(2), TR(2), TR(2) ];
ghost.away[4] = [ K(4), K(4), TL(2), TL(2), TL(2), TL(2) ];
ghost.away[5] = [ K(4), TL(1), TL(2), TL(2), TL(2), TL(2) ];
ghost.away[6] = [ BL(1), TL(2), TL(2), BL(2), BL(2), TL(3) ];
ghost.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
ghost.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

ghost.far = [];
ghost.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
ghost.far[1] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
ghost.far[2] = [ K(4), K(4), K(4), TR(2), TR(2), TR(2) ];
ghost.far[3] = [ K(4), K(4), K(4), TR(2), TR(2), TR(2) ];
ghost.far[4] = [ K(4), K(4), K(4), TL(2), TL(2), TL(2) ];
ghost.far[5] = [ K(4), K(4), K(4), TL(2), TL(2), TL(2) ];
ghost.far[6] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
ghost.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
ghost.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

ghost.stressed = [];
ghost.stressed[0] = [ BR(1), BL(2), BR(2), BR(2), BR(2), BR(2) ];
ghost.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
ghost.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
ghost.stressed[3] = [ BR(1), BR(1), BR(1), TR(2), BR(2), BR(2) ];
ghost.stressed[4] = [ BL(1), BL(1), BL(1), TL(2), BL(2), BL(2) ];
ghost.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
ghost.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
ghost.stressed[7] = [ BL(1), BR(2), BL(2), BL(2), BL(2), BL(2) ];
ghost.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Z-95-AF4 Headhunter (Scum)

var z95S = {};
z95S.name = "Z-95-AF4 Headhunter (Scum)";
z95S.image = "img/z95S.png";
z95S.faction = "Scum";
z95S.simple = [ F(1), F(2), F(3), BL(2), BR(2) ];
z95S.normal = [ BL(1), BR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
z95S.difficult = [ K(3), K(4) ];
z95S.actions = [ 'TARGET_LOCK', 'FOCUS_SHOT', 'BARREL_ROLL_D_SHOT', 'FOCUS' ];
z95S.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
z95S.attacks = [ 'LOCKED_Z95S' ];
z95S.init = "1-orange.png";
z95S.pilot = "Binayre Pirate";
z95S.stats = "stats_z95_scum.png";
z95S.icons = "icons_z95_scum.png";
z95S.table = "table_z95_scum.png";
z95S.ability = [ 'DEADMANS_SWITCH' ];
z95S.flee = [ '2BL', '2BR', '2F', '2F', '3F', '3F' ];
z95S.threshold = "2";

z95S.closing = [];
z95S.closing[0] = [ K(4), K(4), BR(1), BR(1), BR(1), BR(2) ];
z95S.closing[1] = [ K(4), K(3), K(3), TR(2), TR(2), TR(2) ];
z95S.closing[2] = [ K(3), K(3), K(3), BR(1), TR(2), TR(2) ];
z95S.closing[3] = [ K(4), K(4), K(3), K(3), TR(2), TR(2) ];
z95S.closing[4] = [ K(4), K(4), K(3), K(3), TL(2), TL(2) ];
z95S.closing[5] = [ K(3), K(3), K(3), BL(1), TL(2), TL(2) ];
z95S.closing[6] = [ K(4), K(3), K(3), TL(2), TL(2), TL(2) ];
z95S.closing[7] = [ K(4), K(4), BL(1), BL(1), BL(1), BL(2) ];
z95S.closing[8] = [ K(3), K(3), F(1), F(1), F(2), F(2) ];

z95S.away = [];
z95S.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
z95S.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
z95S.away[2] = [ K(4), K(3), K(3), K(3), TR(2), TR(2) ];
z95S.away[3] = [ K(3), K(3), TR(2), TR(2), TR(2), TR(2) ];
z95S.away[4] = [ K(3), K(3), TL(2), TL(2), TL(2), TL(2) ];
z95S.away[5] = [ K(4), K(3), K(3), K(3), TL(2), TL(2) ];
z95S.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
z95S.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
z95S.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

z95S.far = [];
z95S.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
z95S.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
z95S.far[2] = [ K(3), K(3), K(3), TR(3), TR(3), TR(3) ];
z95S.far[3] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
z95S.far[4] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
z95S.far[5] = [ K(3), K(3), K(3), TL(3), TL(3), TL(3) ];
z95S.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
z95S.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
z95S.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

z95S.stressed = [];
z95S.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
z95S.stressed[1] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
z95S.stressed[2] = [ TR(2), TR(2), BR(2), BR(2), BR(2), BR(2) ];
z95S.stressed[3] = [ F(1), F(1), BR(2), BR(2), BR(2), TR(3) ];
z95S.stressed[4] = [ F(1), F(1), BL(2), BL(2), BL(2), TL(3) ];
z95S.stressed[5] = [ TL(2), TL(2), BL(2), BL(2), BL(2), BL(2) ];
z95S.stressed[6] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
z95S.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
z95S.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// BTL-A4 Y-Wing (Scum)

var ywinga4S = {};
ywinga4S.name = "BTL-A4 Y-Wing (Scum)";
ywinga4S.image = "img/ywingS.png";
ywinga4S.faction = "Scum";
ywinga4S.simple = [ BL(1), BR(1), F(1), F(2) ];
ywinga4S.normal = [ TL(2), BL(2), BL(3), F(3), BR(2), BR(3), TR(2) ];
ywinga4S.difficult = [ TL(3), TR(3), F(4), K(4) ];
ywinga4S.actions = [ 'TARGET_LOCK', 'ROTATE_ARC', 'FOCUS_SHOT', 'BARREL_ROLL_D_SHOT', 'RELOAD_D', 'FOCUS' ];
ywinga4S.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
ywinga4S.attacks = [ 'LOCKED_Y' ];
ywinga4S.init = "1-orange.png";
ywinga4S.pilot = "Crymorah Goon";
ywinga4S.stats = "stats_ywing_scum.png";
ywinga4S.icons = "icons_ywing_scum.png";
ywinga4S.table = "table_ywing_scum.png";
ywinga4S.ability = [ 'NONE' ];
ywinga4S.flee = [ '1F', '1BL', '1BL', '1BR', '1BR', '2F' ];
ywinga4S.threshold = "3";

ywinga4S.closing = [];
ywinga4S.closing[0] = [ K(4), K(4), BR(1), BR(1), BL(2), BL(2) ];
ywinga4S.closing[1] = [ BL(1), BL(2), BL(2), BL(2), F(2), F(2) ];
ywinga4S.closing[2] = [ K(4), BR(1), BR(1), BR(1), TR(2), TR(2) ];
ywinga4S.closing[3] = [ F(1), F(1), TR(2), TR(2), F(2), F(2) ];
ywinga4S.closing[4] = [ F(1), F(1), TL(2), TL(2), F(2), F(2) ];
ywinga4S.closing[5] = [ K(4), BL(1), BL(1), BL(1), TL(2), TL(2) ];
ywinga4S.closing[6] = [ BR(1), BR(2), BR(2), BR(2), F(2), F(2) ];
ywinga4S.closing[7] = [ K(4), K(4), BL(1), BL(1), BR(2), BR(2) ];
ywinga4S.closing[8] = [ K(4), F(1), F(1), F(1), F(2), F(2) ];

ywinga4S.away = [];
ywinga4S.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
ywinga4S.away[1] = [ BR(1), TR(2), TR(2), TR(2), BR(2), TR(3) ];
ywinga4S.away[2] = [ K(4), K(4), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.away[3] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.away[4] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
ywinga4S.away[5] = [ K(4), K(4), TL(2), TL(2), TL(2), TL(2) ];
ywinga4S.away[6] = [ BL(1), TL(2), TL(2), TL(2), BL(2), TL(3) ];
ywinga4S.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
ywinga4S.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

ywinga4S.far = [];
ywinga4S.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(3), F(3) ];
ywinga4S.far[1] = [ TR(2), TR(2), TR(2), TR(2), TR(3), TR(3) ];
ywinga4S.far[2] = [ TR(2), TR(2), TR(2), TR(2), TR(2), TR(3) ];
ywinga4S.far[3] = [ K(4), K(4), TR(2), TR(2), TR(2), TR(2) ];
ywinga4S.far[4] = [ K(4), K(4), TL(2), TL(2), TL(2), TL(2) ];
ywinga4S.far[5] = [ TL(2), TL(2), TL(2), TL(2), TL(2), TL(3) ];
ywinga4S.far[6] = [ TL(2), TL(2), TL(2), TL(2), TL(3), TL(3) ];
ywinga4S.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(3), F(3) ];
ywinga4S.far[8] = [ F(3), F(3), F(3), F(4), F(4), F(4) ];

ywinga4S.stressed = [];
ywinga4S.stressed[0] = [ BR(1), BR(1), BR(1), BR(2), F(2), F(2) ];
ywinga4S.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
ywinga4S.stressed[2] = [ BR(1), BR(1), BR(1), TR(2), TR(2), TR(2) ];
ywinga4S.stressed[3] = [ BR(1), BR(1), BR(1), F(1), F(1), TR(2) ];
ywinga4S.stressed[4] = [ BL(1), BL(1), BL(1), F(1), F(1), TL(2) ];
ywinga4S.stressed[5] = [ BL(1), BL(1), BL(1), TL(2), TL(2), TL(2) ];
ywinga4S.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
ywinga4S.stressed[7] = [ BL(1), BL(1), BL(1), BL(2), F(2), F(2) ];
ywinga4S.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// M3-A Interceptor

var m3a = {};
m3a.name = "M3-A Interceptor";
m3a.image = "img/m3aInterceptor.png";
m3a.faction = "Scum";
m3a.simple = [ BL(1), BR(1), F(2), F(3) ];
m3a.normal = [ TL(1), TR(1), BL(2), BR(2), TL(2), TR(2), BL(3), BR(3), F(4), F(5) ];
m3a.difficult = [ K(3), K(5) ];
m3a.actions = [ 'TARGET_LOCK', 'BARREL_ROLL_SHOT', 'FOCUS_SHOT', 'EVADE' ];
m3a.targets = [ 'ARC', 'NEAREST' ];
m3a.attacks = [ 'LOCKED_M3A' ];
m3a.init = "1-orange.png";
m3a.pilot = "Cartel Spacer";
m3a.stats = "stats_m3a.png";
m3a.icons = "icons_m3a.png";
m3a.table = "table_m3a.png";
m3a.ability = [ 'WEAPON_HARDPOINT' ];
m3a.flee = [ '1BL', '1BL', '1BR', '1BR', '2F', '3F' ];
m3a.threshold = "2";

m3a.closing = [];
m3a.closing[0] = [ K(3), K(3), K(3), TR(1), TR(1), BR(1) ];
m3a.closing[1] = [ K(5), K(5), TR(1), TR(1), TR(1), TR(2) ];
m3a.closing[2] = [ K(5), K(3), K(3), TR(1), TR(2), TR(2) ];
m3a.closing[3] = [ K(5), K(5), K(3), K(3), TR(2), TR(2) ];
m3a.closing[4] = [ K(5), K(5), K(3), K(3), TL(2), TL(2) ];
m3a.closing[5] = [ K(5), K(3), K(3), TL(1), TL(2), TL(2) ];
m3a.closing[6] = [ K(5), K(5), TL(1), TL(1), TL(1), TL(2) ];
m3a.closing[7] = [ K(3), K(3), K(3), TL(1), TL(1), BL(1) ];
m3a.closing[8] = [ K(5), K(5), K(3), K(3), BL(1), BR(1) ];

m3a.away = [];
m3a.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
m3a.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(2), TR(2) ];
m3a.away[2] = [ K(3), K(3), TR(1), TR(1), TR(2), TR(2) ];
m3a.away[3] = [ K(3), K(3), K(3), TR(2), TR(2), TR(2) ];
m3a.away[4] = [ K(3), K(3), K(3), TL(2), TL(2), TL(2) ];
m3a.away[5] = [ K(3), K(3), TL(1), TL(1), TL(2), TL(2) ];
m3a.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(2), TL(2) ];
m3a.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
m3a.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

m3a.far = [];
m3a.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
m3a.far[1] = [ BR(3), BR(3), BR(3), TR(2), TR(2), TR(2) ];
m3a.far[2] = [ K(3), K(3), K(3), TR(1), TR(1), TR(1) ];
m3a.far[3] = [ K(3), K(3), K(3), K(3), TR(1), TR(1) ];
m3a.far[4] = [ K(3), K(3), K(3), K(3), TL(1), TL(1) ];
m3a.far[5] = [ K(3), K(3), K(3), TL(1), TL(1), TL(1) ];
m3a.far[6] = [ BL(3), BL(3), BL(3), TL(2), TL(2), TL(2) ];
m3a.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
m3a.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

m3a.stressed = [];
m3a.stressed[0] = [ BR(1), BR(1), BR(1), F(2), F(2), F(3) ];
m3a.stressed[1] = [ TR(1), BR(1), BR(1), BR(1), BR(1), BR(1) ];
m3a.stressed[2] = [ TR(1), TR(1), BR(1), BR(1), BR(1), BR(1) ];
m3a.stressed[3] = [ F(2), F(2), TR(2), TR(2), F(3), F(3) ];
m3a.stressed[4] = [ F(2), F(2), TL(2), TL(2), F(3), F(3) ];
m3a.stressed[5] = [ TL(1), TL(1), BL(1), BL(1), BL(1), BL(1) ];
m3a.stressed[6] = [ TL(1), BL(1), BL(1), BL(1), BL(1), BL(1) ];
m3a.stressed[7] = [ BL(1), BL(1), BL(1), F(2), F(2), F(3) ];
m3a.stressed[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

// ****************************************************************************
// Kihraxz Fighter

var kihraxz = {};
kihraxz.name = "Kihraxz Fighter";
kihraxz.image = "img/kihraxz.png";
kihraxz.faction = "Scum";
kihraxz.simple = [ BL(1), BR(1), BL(2), F(2), BR(2), F(3) ];
kihraxz.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
kihraxz.difficult = [ TRL(2), TRR(2), K(4) ];
kihraxz.actions = [ 'TARGET_LOCK_M', 'BARREL_ROLL_M_AVOID_SHOT', 'FOCUS_M_SHOT', 'BARREL_ROLL_M_AVOID', 'FOCUS'  ];
kihraxz.targets = [ 'LOCKED', 'LOWERI', 'ARC', 'NEAREST' ];
kihraxz.attacks = [ 'LOCKED_Z95' ];
kihraxz.init = "2-orange.png";
kihraxz.pilot = "Cartel Marauder";
kihraxz.stats = "stats_kihraxz.png";
kihraxz.icons = "icons_kihraxz.png";
kihraxz.table = "table_kihraxz.png";
kihraxz.ability = [ 'NONE' ];
kihraxz.flee = [ '2BL', '2BL', '2BR', '2BR', '2F', '3F' ];
kihraxz.threshold = "2";

kihraxz.closing = [];
kihraxz.closing[0] = [ K(4), K(4), K(4), BR(1), BR(1), BR(2) ];
kihraxz.closing[1] = [ K(4), TRR(2), TRR(2), TR(1), TR(1), TR(1) ];
kihraxz.closing[2] = [ K(4), K(4), TRR(2), TR(1), TR(2), TR(2) ];
kihraxz.closing[3] = [ K(4), K(4), TRR(2), TRR(2), TR(2), TR(2) ];
kihraxz.closing[4] = [ K(4), K(4), TRL(2), TRL(2), TL(2), TL(2) ];
kihraxz.closing[5] = [ K(4), K(4), TRL(2), TL(1), TL(2), TL(2) ];
kihraxz.closing[6] = [ K(4), TRL(2), TRL(2), TL(1), TL(1), TL(1) ];
kihraxz.closing[7] = [ K(4), K(4), K(4), BL(1), BL(1), BL(2) ];
kihraxz.closing[8] = [ K(4), K(4), BL(1), BL(1), BR(1), BR(1) ];

kihraxz.away = [];
kihraxz.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
kihraxz.away[1] = [ TR(1), BR(1), BR(2), BR(2), TR(2), TR(2) ];
kihraxz.away[2] = [ K(4), TRR(2), TRR(2), TRR(2), TR(1), TR(1) ];
kihraxz.away[3] = [ TRL(2), TRL(2), TRR(2), TRR(2), TRR(2), TRR(2) ];
kihraxz.away[4] = [ TRR(2), TRR(2), TRL(2), TRL(2), TRL(2), TRL(2) ];
kihraxz.away[5] = [ K(4), TRL(2), TRL(2), TRL(2), TL(1), TL(1) ];
kihraxz.away[6] = [ TL(1), BL(1), BL(2), BL(2), TL(2), TL(2) ];
kihraxz.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
kihraxz.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

kihraxz.far = [];
kihraxz.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
kihraxz.far[1] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
kihraxz.far[2] = [ TRR(2), TRR(2), TRR(2), TR(1), TR(1), TR(1) ];
kihraxz.far[3] = [ TRR(2), TRR(2), TRR(2), TR(1), TR(1), TR(1) ];
kihraxz.far[4] = [ TRL(2), TRL(2), TRL(2), TL(1), TL(1), TL(1) ];
kihraxz.far[5] = [ TRL(2), TRL(2), TRL(2), TL(1), TL(1), TL(1) ];
kihraxz.far[6] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
kihraxz.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
kihraxz.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

kihraxz.stressed = [];
kihraxz.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
kihraxz.stressed[1] = [ TR(1), TR(1), BR(1), BR(2), BR(2), BR(2) ];
kihraxz.stressed[2] = [ TR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
kihraxz.stressed[3] = [ TR(1), BR(1), BR(1), BR(2), BR(2), BR(2) ];
kihraxz.stressed[4] = [ TL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
kihraxz.stressed[5] = [ TL(1), BL(1), BL(1), BL(2), BL(2), BL(2) ];
kihraxz.stressed[6] = [ TL(1), TL(1), BL(1), BL(2), BL(2), BL(2) ];
kihraxz.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
kihraxz.stressed[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

// ****************************************************************************
// StarViper

var starviper = {};
starviper.name = "StarViper";
starviper.image = "img/starviper.png";
starviper.faction = "Scum";
starviper.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
starviper.normal = [ TL(1), TR(1), TL(2), TR(2), BL(3), BR(3), F(4) ];
starviper.difficult = [ SLL(3), SLR(3) ];
starviper.actions = [ 'TARGET_LOCK', 'BOOST_OR_BARREL_ROLL2FOCUS_D', 'BOOST_OR_BARREL_ROLL_AVOID', 'FOCUS' ];
starviper.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
starviper.attacks = [ 'LOCKED_X' ];
starviper.init = "2-orange.png";
starviper.pilot = "Black Sun Enforcer";
starviper.stats = "stats_starviper.png";
starviper.icons = "icons_starviper.png";
starviper.table = "table_starviper.png";
starviper.ability = [ 'MICROTHRUSTERS' ];
starviper.flee = [ '2BL', '2BR', '2F', '2F', '3F', '3F' ];
starviper.threshold = "2";

starviper.closing = [];
starviper.closing[0] = [ SLL(3), SLL(3), BR(1), BR(1), BR(1), BR(2) ];
starviper.closing[1] = [ SLL(3), SLL(3), TR(1), TR(1), TR(2), TR(2) ];
starviper.closing[2] = [ SLL(3), SLL(3), SLL(3), BR(1), TR(2), TR(2) ];
starviper.closing[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), TR(1), TR(1) ];
starviper.closing[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), TL(1), TL(1) ];
starviper.closing[5] = [ SLR(3), SLR(3), SLR(3), BL(1), TL(2), TL(2) ];
starviper.closing[6] = [ SLR(3), SLR(3), TL(1), TL(1), TL(2), TL(2) ];
starviper.closing[7] = [ SLR(3), SLR(3), BL(1), BL(1), BL(1), BL(2) ];
starviper.closing[8] = [ SLR(3), SLL(3), F(1), F(1), F(2), F(2) ];

starviper.away = [];
starviper.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
starviper.away[1] = [ TR(1), TR(2), TR(2), TR(2), TR(2), BR(2) ];
starviper.away[2] = [ SLR(3), SLL(3), SLL(3), SLL(3), TR(2), TR(2) ];
starviper.away[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), SLL(3), SLL(3) ];
starviper.away[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
starviper.away[5] = [ SLL(3), SLR(3), SLR(3), SLR(3), TL(2), TL(2) ];
starviper.away[6] = [ TL(1), TL(2), TL(2), TL(2), TL(2), BL(2) ];
starviper.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
starviper.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

starviper.far = [];
starviper.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
starviper.far[1] = [ TR(1), TR(1), TR(1), TR(2), TR(2), TR(2) ];
starviper.far[2] = [ SLR(3), SLR(3), SLR(3), TR(2), TR(2), TR(2) ];
starviper.far[3] = [ SLR(3), SLR(3), SLR(3), TR(2), TR(2), TR(2) ];
starviper.far[4] = [ SLL(3), SLL(3), SLL(3), TL(2), TL(2), TL(2) ];
starviper.far[5] = [ SLL(3), SLL(3), SLL(3), TL(2), TL(2), TL(2) ];
starviper.far[6] = [ TL(1), TL(1), TL(1), TL(2), TL(2), TL(2) ];
starviper.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
starviper.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

starviper.stressed = [];
starviper.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
starviper.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
starviper.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
starviper.stressed[3] = [ BR(1), BR(1), BR(1), TR(2), BR(2), BR(2) ];
starviper.stressed[4] = [ BL(1), BL(1), BL(1), TL(2), BL(2), BL(2) ];
starviper.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
starviper.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
starviper.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
starviper.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Fang Fighter (Protectorate)

var fang = {};
fang.name = "Fang Fighter";
fang.image = "img/ship_protectorate.png";
fang.faction = "Scum";
fang.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
fang.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
fang.difficult = [ K(4), TRL(2), TRR(2) ];
fang.actions = [ 'TARGET_LOCK', 'BOOST_OR_BARREL_ROLL2FOCUS_D', 'BOOST_OR_BARREL_ROLL_AVOID', 'FOCUS' ];
fang.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
fang.attacks = [ 'LOCKED_X' ];
fang.init = "1-orange.png";
fang.pilot = "Zealous Recruit";
fang.stats = "stats_fang.png";
fang.icons = "icons_fang.png";
fang.table = "table_fang.png";
fang.ability = [ 'CONCORDIA_FACEOFF' ];
fang.flee = [ '2TL', '2TR', '2BL', '2BL', '2BR', '2BR' ];
fang.threshold = "2";

fang.closing = [];
fang.closing[0] = [ K(4), K(4), TR(1), TR(1), BR(2), BR(2) ];
fang.closing[1] = [ K(4), K(4), TR(1), TR(1), TR(2), TR(2) ];
fang.closing[2] = [ K(4), K(4), TRR(2), TR(1), TR(2), TR(2) ];
fang.closing[3] = [ TRL(2), TRL(2), TRR(2), TRR(2), TR(2), TR(2) ];
fang.closing[4] = [ TRR(2), TRR(2), TRL(2), TRL(2), TL(2), TL(2) ];
fang.closing[5] = [ K(4), K(4), TRL(2), TL(1), TL(2), TL(2) ];
fang.closing[6] = [ K(4), K(4), TL(1), TL(1), TL(2), TL(2) ];
fang.closing[7] = [ K(4), K(4), TL(1), TL(1), BL(2), BL(2) ];
fang.closing[8] = [ K(4), K(4), BL(2), BR(2), F(2), F(2) ];

fang.away = [];
fang.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
fang.away[1] = [ TR(1), TR(2), TR(2), BR(2), TR(3), TR(3) ];
fang.away[2] = [ K(4), TRR(2), TRR(2), TRR(2), TR(2), TR(2) ];
fang.away[3] = [ TRL(2), TRL(2), TRR(2), TRR(2), TRR(2), TRR(2) ];
fang.away[4] = [ TRR(2), TRR(2), TRL(2), TRL(2), TRL(2), TRL(2) ];
fang.away[5] = [ K(4), TRL(2), TRL(2), TRL(2), TL(2), TL(2) ];
fang.away[6] = [ TL(1), TL(2), TL(2), BL(2), TL(3), TL(3) ];
fang.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
fang.away[8] = [ F(2), F(2), F(2), F(3), F(3), F(3) ];

fang.far = [];
fang.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
fang.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
fang.far[2] = [ TRR(2), TRR(2), TRR(2), TR(3), TR(3), TR(3) ];
fang.far[3] = [ TRR(2), TRR(2), TRR(2), TR(2), TR(2), TR(2) ];
fang.far[4] = [ TRL(2), TRL(2), TRL(2), TL(2), TL(2), TL(2) ];
fang.far[5] = [ TRL(2), TRL(2), TRL(2), TL(3), TL(3), TL(3) ];
fang.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
fang.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
fang.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

fang.stressed = [];
fang.stressed[0] = [ BR(2), BR(2), BR(2), F(2), F(3), F(3) ];
fang.stressed[1] = [ TR(2), TR(2), TR(2), BR(2), BR(2), BR(2) ];
fang.stressed[2] = [ TR(2), TR(2), TR(2), TR(2), BR(2), BR(2) ];
fang.stressed[3] = [ TR(2), TR(2), TR(2), BR(2), BR(2), F(2) ];
fang.stressed[4] = [ TL(2), TL(2), TL(2), BL(2), BL(2), F(2) ];
fang.stressed[5] = [ TL(2), TL(2), TL(2), TL(2), BL(2), BL(2) ];
fang.stressed[6] = [ TL(2), TL(2), TL(2), BL(2), BL(2), BL(2) ];
fang.stressed[7] = [ BL(2), BL(2), BL(2), F(2), F(3), F(3) ];
fang.stressed[8] = [ BL(2), BR(2), F(2), F(2), F(2), F(2) ];

// ****************************************************************************
// HWK-290 Light Freighter (Scum)

var hwk290S = {};
hwk290S.name = "HWK-290 Light Freighter (Scum)";
hwk290S.image = "img/hwk290_scum.png";
hwk290S.faction = "Scum";
hwk290S.simple = [ BL(1), F(1), F(2), F(3), BR(1) ];
hwk290S.normal = [ TL(2), BL(2), BL(3), F(4), BR(2), BR(3), TR(2) ];
hwk290S.difficult = [ STA(0), TL(3), TR(3) ];
hwk290S.actions = [ 'TARGET_LOCK', 'ROTATE_ARC', 'BOOST_D', 'FOCUS' ];
hwk290S.targets = [ 'LOCKED', 'ARC_TURRET', 'NEAREST' ];
hwk290S.attacks = [ 'LOCKED_HWK290' ];
hwk290S.init = "1-orange.png";
hwk290S.pilot = "Spice Runner";
hwk290S.stats = "stats_hwk290_scum.png";
hwk290S.icons = "icons_hwk290_scum.png";
hwk290S.table = "table_hwk290_scum.png";
hwk290S.ability = [ 'NONE' ];
hwk290S.flee = [ '1BL', '1BR', '2F', '2F', '3F', '3F' ];
hwk290S.threshold = "2";

hwk290S.closing = [];
hwk290S.closing[0] = [ STA(0), STA(0), F(1), F(1), BR(1), TL(2) ];
hwk290S.closing[1] = [ BL(1), TR(2), TR(2), BL(2), BL(2), BL(2) ];
hwk290S.closing[2] = [ STA(0), STA(0), STA(0), BR(1), TR(2), TR(2) ];
hwk290S.closing[3] = [ STA(0), STA(0), BR(1), BR(1), TR(2), BR(3) ];
hwk290S.closing[4] = [ STA(0), STA(0), BL(1), BL(1), TL(2), BL(3) ];
hwk290S.closing[5] = [ STA(0), STA(0), STA(0), BL(1), TL(2), TL(2) ];
hwk290S.closing[6] = [ BR(1), TL(2), TL(2), BR(2), BR(2), BR(2) ];
hwk290S.closing[7] = [ STA(0), STA(0), F(1), F(1), BL(1), TR(2) ];
hwk290S.closing[8] = [ STA(0), STA(0), STA(0), BL(1), BR(1), F(1) ];

hwk290S.away = [];
hwk290S.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
hwk290S.away[1] = [ BR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
hwk290S.away[2] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.away[3] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.away[4] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
hwk290S.away[5] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
hwk290S.away[6] = [ BL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
hwk290S.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
hwk290S.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

hwk290S.far = [];
hwk290S.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
hwk290S.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
hwk290S.far[2] = [ BR(1), BR(1), TR(2), TR(2), TR(2), TR(2) ];
hwk290S.far[3] = [ BR(1), BR(1), BR(1), TR(2), TR(2), TR(2) ];
hwk290S.far[4] = [ BL(1), BL(1), BL(1), TL(2), TL(2), TL(2) ];
hwk290S.far[5] = [ BL(1), BL(1), TL(2), TL(2), TL(2), TL(2) ];
hwk290S.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
hwk290S.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
hwk290S.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

hwk290S.stressed = [];
hwk290S.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
hwk290S.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), BR(1), TR(2) ];
hwk290S.stressed[2] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
hwk290S.stressed[3] = [ BR(1), BR(1), BR(1), BR(1), F(1), TR(2) ];
hwk290S.stressed[4] = [ BL(1), BL(1), BL(1), BL(1), F(1), TL(2) ];
hwk290S.stressed[5] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
hwk290S.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), BL(1), TL(2) ];
hwk290S.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
hwk290S.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Firespray-31 (Scum)

var firesprayS = {};
firesprayS.name = "Firespray-Class Patrol Craft (Scum)";
firesprayS.image = "img/slave1.png";
firesprayS.faction = "Scum";
firesprayS.simple = [ F(1), F(2), F(3), BL(1), BR(1) ];
firesprayS.normal = [ TL(1), TL(2), BL(2), BL(3), F(4), BR(2), BR(3), TR(1), TR(2) ];
firesprayS.difficult = [ K(4), TRL(3), TRR(3) ];
firesprayS.actions = [ 'TARGET_LOCK_M', 'BOOST_M', 'FOCUS' ];
firesprayS.targets = [ 'LOCKED', 'ARC', 'REAR_ARC', 'NEAREST' ];
firesprayS.attacks = [ 'LOCKED_FS', 'GUNNER_FS' ];
firesprayS.init = "2-orange.png";
firesprayS.pilot = "Bounty Hunter";
firesprayS.stats = "stats_firespray_scum.png";
firesprayS.icons = "icons_firespray_scum.png";
firesprayS.table = "table_firespray_scum.png";
firesprayS.ability = [ 'NONE' ];
firesprayS.flee = [ '1F', '1F', '2BL', '2BR', '3F', '3F' ];
firesprayS.threshold = "3";

firesprayS.closing = [];
firesprayS.closing[0] = [ F(1), F(1), BR(1), BR(1), BR(1), BR(2) ];
firesprayS.closing[1] = [ K(4), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
firesprayS.closing[2] = [ TRR(3), TRR(3), TRR(3), BR(1), TR(2), TR(2) ];
firesprayS.closing[3] = [ K(4), K(4), TRR(3), TRR(3), TR(2), TR(2) ];
firesprayS.closing[4] = [ K(4), K(4), TRL(3), TRL(3), TL(2), TL(2) ];
firesprayS.closing[5] = [ TRL(3), TRL(3), TRL(3), BL(1), TL(2), TL(2) ];
firesprayS.closing[6] = [ K(4), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
firesprayS.closing[7] = [ F(1), F(1), BL(1), BL(1), BL(1), BL(2) ];
firesprayS.closing[8] = [ K(4), K(4), F(1), F(1), F(2), F(2) ];

firesprayS.away = [];
firesprayS.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
firesprayS.away[1] = [ TR(2), TR(2), BR(2), BR(2), BR(3), BR(3) ];
firesprayS.away[2] = [ K(4), TRR(3), TRR(3), TRR(3), TR(2), TR(2) ];
firesprayS.away[3] = [ TRL(3), TRL(3), TRR(3), TRR(3), TRR(3), TRR(3) ];
firesprayS.away[4] = [ TRR(3), TRR(3), TRL(3), TRL(3), TRL(3), TRL(3) ];
firesprayS.away[5] = [ K(4), TRL(3), TRL(3), TRL(3), TL(2), TL(2) ];
firesprayS.away[6] = [ TL(2), TL(2), BL(2), BL(2), BL(3), BL(3) ];
firesprayS.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
firesprayS.away[8] = [ F(1), F(2), F(2), F(2), F(3), F(3) ];

firesprayS.far = [];
firesprayS.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
firesprayS.far[1] = [ TR(2), TR(2), TR(2), BR(3), BR(3), BR(3) ];
firesprayS.far[2] = [ TRR(3), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
firesprayS.far[3] = [ TRR(3), TRR(3), TRR(3), TR(2), TR(2), TR(2) ];
firesprayS.far[4] = [ TRL(3), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
firesprayS.far[5] = [ TRL(3), TRL(3), TRL(3), TL(2), TL(2), TL(2) ];
firesprayS.far[6] = [ TL(2), TL(2), TL(2), BL(3), BL(3), BL(3) ];
firesprayS.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
firesprayS.far[8] = [ F(3), F(4), F(4), F(4), F(4), F(4) ];

firesprayS.stressed = [];
firesprayS.stressed[0] = [ BR(1), BR(1), BR(2), F(2), F(2), F(2) ];
firesprayS.stressed[1] = [ BR(1), BR(1), TR(2), BR(2), BR(2), BR(2) ];
firesprayS.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
firesprayS.stressed[3] = [ BR(1), BR(1), BR(1), BR(2), BR(2), TR(2) ];
firesprayS.stressed[4] = [ BL(1), BL(1), BL(1), BL(2), BL(2), TL(2) ];
firesprayS.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
firesprayS.stressed[6] = [ BL(1), BL(1), TL(2), BL(2), BL(2), BL(2) ];
firesprayS.stressed[7] = [ BL(1), BL(1), BL(2), F(2), F(2), F(2) ];
firesprayS.stressed[8] = [ F(1), F(1), F(1), F(2), F(2), F(2) ];

// ****************************************************************************
// Mod TIE/ln Fighter (Mining Guild)

var tiemod = {};
tiemod.name = "Modified TIE/LN Fighter";
tiemod.image = "img/tie_miner.png";
tiemod.faction = "Scum";
tiemod.simple = [ BL(2), F(2), BR(2), F(3) ];
tiemod.normal = [ TL(1), TR(1), TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4) ];
tiemod.difficult = [ K(3), F(5) ];
tiemod.actions = [ 'BARREL_ROLL_AVOID_SHOT', 'BARREL_ROLL_SHOT', 'FOCUS_SHOT', 'BARREL_ROLL_AVOID', 'EVADE' ];
tiemod.targets = [ 'ARC', 'NEAREST' ];
tiemod.attacks = [ 'NEAREST' ];
tiemod.init = "1-orange.png";
tiemod.pilot = "Mining Guild Sentry";
tiemod.stats = "stats_tiemod.png";
tiemod.icons = "icons_tiemod.png";
tiemod.table = "table_tiemod.png";
tiemod.ability = [ 'NOTCHED_STABILIZERS' ];
tiemod.flee = [ '0' ];
tiemod.threshold = "1";

tiemod.closing = [];
tiemod.closing[0] = [ K(3), K(3), TR(1), TR(1), BR(2), BR(2) ];
tiemod.closing[1] = [ K(3), TR(1), TR(1), TR(2), TR(2), TR(2) ];
tiemod.closing[2] = [ K(3), TR(1), TR(1), TR(1), TR(2), TR(2) ];
tiemod.closing[3] = [ K(3), K(3), K(3), TR(1), TR(2), TR(2) ];
tiemod.closing[4] = [ K(3), K(3), K(3), TL(1), TL(2), TL(2) ];
tiemod.closing[5] = [ K(3), TL(1), TL(1), TL(1), TL(2), TL(2) ];
tiemod.closing[6] = [ K(3), TL(1), TL(1), TL(2), TL(2), TL(2) ];
tiemod.closing[7] = [ K(3), K(3), TL(1), TL(1), BL(2), BL(2) ];
tiemod.closing[8] = [ K(3), K(3), BL(2), BR(2), F(2), F(2) ];

tiemod.away = [];
tiemod.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tiemod.away[1] = [ TR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tiemod.away[2] = [ K(3), K(3), TR(1), TR(1), TR(2), TR(2) ];
tiemod.away[3] = [ K(3), K(3), TR(1), TR(3), TR(3), TR(3) ];
tiemod.away[4] = [ K(3), K(3), TL(1), TL(3), TL(3), TL(3) ];
tiemod.away[5] = [ K(3), K(3), TL(1), TL(1), TL(2), TL(2) ];
tiemod.away[6] = [ TL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tiemod.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tiemod.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

tiemod.far = [];
tiemod.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tiemod.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiemod.far[2] = [ K(3), K(3), K(3), TR(1), TR(1), TR(1) ];
tiemod.far[3] = [ K(3), K(3), K(3), K(3), TR(1), TR(1) ];
tiemod.far[4] = [ K(3), K(3), K(3), K(3), TL(1), TL(1) ];
tiemod.far[5] = [ K(3), K(3), K(3), TL(1), TL(1), TL(1) ];
tiemod.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiemod.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tiemod.far[8] = [ F(4), F(4), F(4), F(4), F(4), F(5) ];

tiemod.stressed = [];
tiemod.stressed[0] = [ BR(2), BR(2), BR(2), F(2), F(2), F(3) ];
tiemod.stressed[1] = [ TR(1), BR(2), BR(2), BR(2), BR(2), BR(2) ];
tiemod.stressed[2] = [ TR(1), TR(2), BR(2), BR(2), BR(2), BR(2) ];
tiemod.stressed[3] = [ BR(2), BR(2), BR(2), BR(2), BR(2), TR(3) ];
tiemod.stressed[4] = [ BL(2), BL(2), BL(2), BL(2), BL(2), TL(3) ];
tiemod.stressed[5] = [ TL(1), TL(2), BL(2), BL(2), BL(2), BL(2) ];
tiemod.stressed[6] = [ TL(1), BL(2), BL(2), BL(2), BL(2), BL(2) ];
tiemod.stressed[7] = [ BL(2), BL(2), BL(2), F(2), F(2), F(3) ];
tiemod.stressed[8] = [ BL(2), BL(2), BR(2), BR(2), F(2), F(2) ];

// ****************************************************************************
// TIE/fo Fighter

var tiefo = {};
tiefo.name = "TIE/fo Fighter";
tiefo.image = "img/tiefo.png";
tiefo.faction = "First Order";
tiefo.simple = [ TL(2), BL(2), F(2), BR(2), TR(2), F(3) ];
tiefo.normal = [ TL(1), TR(1), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tiefo.difficult = [ SLL(2), SLR(2), K(4) ];
tiefo.actions = [ 'TARGET_LOCK', 'BARREL_ROLL_AVOID_SHOT', 'FOCUS_SHOT', 'BARREL_ROLL_SHOT', 'BARREL_ROLL_AVOID', 'EVADE' ];
tiefo.targets = [ 'LOCKED', 'ARC', 'NEAREST' ];
tiefo.attacks = [ 'LOCKED' ];
tiefo.init = "1-orange.png";
tiefo.pilot = "EPSILON Squadron Cadet";
tiefo.stats = "stats_tiefo.png";
tiefo.icons = "icons_tiefo.png";
tiefo.table = "table_tiefo.png";
tiefo.ability = [ 'NONE' ];
tiefo.flee = [ '2BL', '2BL', '2BR', '2BR', '2F', '2F' ];
tiefo.threshold = "0";

tiefo.closing = [];
tiefo.closing[0] = [ SLL(2), SLL(2), TR(1), TR(1), BR(2), BR(2) ];
tiefo.closing[1] = [ K(4), K(4), SLL(2), SLL(2), TR(1), TR(1) ];
tiefo.closing[2] = [ SLL(2), SLL(2), SLL(2), TR(1), TR(2), TR(2) ];
tiefo.closing[3] = [ K(4), K(4), SLL(2), SLL(2), TR(2), TR(2) ];
tiefo.closing[4] = [ K(4), K(4), SLR(2), SLR(2), TL(2), TL(2) ];
tiefo.closing[5] = [ SLR(2), SLR(2), SLR(2), TL(1), TL(2), TL(2) ];
tiefo.closing[6] = [ K(4), K(4), SLR(2), SLR(2), TL(1), TL(1) ];
tiefo.closing[7] = [ SLR(2), SLR(2), TL(1), TL(1), BL(2), BL(2) ];
tiefo.closing[8] = [ K(4), K(4), BL(2), BR(2), F(2), F(2) ];

tiefo.away = [];
tiefo.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tiefo.away[1] = [ TR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tiefo.away[2] = [ K(4), SLL(2), SLL(2), SLL(2), TR(2), TR(2) ];
tiefo.away[3] = [ SLR(2), SLR(2), SLL(2), SLL(2), SLL(2), SLL(2) ];
tiefo.away[4] = [ SLL(2), SLL(2), SLR(2), SLR(2), SLR(2), SLR(2) ];
tiefo.away[5] = [ K(4), SLR(2), SLR(2), SLR(2), TL(2), TL(2) ];
tiefo.away[6] = [ TL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tiefo.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tiefo.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

tiefo.far = [];
tiefo.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tiefo.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiefo.far[2] = [ SLL(2), SLL(2), SLL(2), TR(1), TR(1), TR(1) ];
tiefo.far[3] = [ SLL(2), SLL(2), SLL(2), TR(1), TR(1), TR(1) ];
tiefo.far[4] = [ SLR(2), SLR(2), SLR(2), TL(1), TL(1), TL(1) ];
tiefo.far[5] = [ SLR(2), SLR(2), SLR(2), TL(1), TL(1), TL(1) ];
tiefo.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiefo.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tiefo.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tiefo.stressed = [];
tiefo.stressed[0] = [ BR(2), BR(2), BR(2), F(2), F(2), F(3) ];
tiefo.stressed[1] = [ TR(1), TR(2), TR(2), TR(2), TR(2), TR(2) ];
tiefo.stressed[2] = [ TR(1), TR(2), TR(2), TR(2), TR(2), BR(2) ];
tiefo.stressed[3] = [ TL(2), TL(2), TL(2), TR(2), TR(2), F(4) ];
tiefo.stressed[4] = [ TR(2), TR(2), TR(2), TL(2), TL(2), F(4) ];
tiefo.stressed[5] = [ TL(1), TL(2), TL(2), TL(2), TL(2), BL(2) ];
tiefo.stressed[6] = [ TL(1), TL(2), TL(2), TL(2), TL(2), TL(2) ];
tiefo.stressed[7] = [ BL(2), BL(2), BL(2), F(2), F(2), F(3) ];
tiefo.stressed[8] = [ BL(2), BL(2), BR(2), BR(2), F(2), F(2) ];

// ****************************************************************************
// TIE/sf Special Forces

var tiesf = {};
tiesf.name = "TIE/sf Special Forces";
tiesf.image = "img/ship_tiesf.png";
tiesf.faction = "First Order";
tiesf.simple = [ BL(1), F(1), BR(1), BL(2), F(2), BR(2), F(3) ];
tiesf.normal = [ TL(2), TR(2), TL(3), BL(3), BR(3), TR(3), F(4), F(5) ];
tiesf.difficult = [ TL(1), TR(1), SLL(3), SLR(3) ];
tiesf.actions = [ 'TARGET_LOCK', 'BARREL_ROLL_AVOID_SHOT', 'FOCUS_SHOT', 'BARREL_ROLL_SHOT', 'BARREL_ROLL_AVOID', 'EVADE' ];
tiesf.targets = [ 'LOCKED', 'ARC', 'REAR_ARC', 'NEAREST' ];
tiesf.attacks = [ 'LOCKED_SF', 'GUNNER_SF' ];
tiesf.init = "2-orange.png";
tiesf.pilot = "ZETA Squadron Survivor";
tiesf.stats = "stats_tiesf.png";
tiesf.icons = "icons_tiesf.png";
tiesf.table = "table_tiesf.png";
tiesf.ability = [ 'HEAVY_WEAPON_TURRET' ];
tiesf.flee = [ '2BL', '2BL', '2BR', '2BR', '3F', '3F' ];
tiesf.threshold = "0";

tiesf.closing = [];
tiesf.closing[0] = [ SLL(3), SLL(3), BR(1), BR(1), BR(1), BR(2) ];
tiesf.closing[1] = [ SLL(3), SLL(3), TR(1), TR(2), TR(2), TR(2) ];
tiesf.closing[2] = [ SLL(3), SLL(3), SLL(3), BR(1), TR(2), TR(2) ];
tiesf.closing[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), TR(2), TR(2) ];
tiesf.closing[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), TL(2), TL(2) ];
tiesf.closing[5] = [ SLR(3), SLR(3), SLR(3), BL(1), TL(2), TL(2) ];
tiesf.closing[6] = [ SLR(3), SLR(3), TL(1), TL(2), TL(2), TL(2) ];
tiesf.closing[7] = [ SLR(3), SLR(3), BL(1), BL(1), BL(1), BL(2) ];
tiesf.closing[8] = [ SLR(3), SLL(3), F(1), F(1), F(2), F(2) ];

tiesf.away = [];
tiesf.away[0] = [ BR(2), BR(2), BR(2), BR(3), BR(3), F(3) ];
tiesf.away[1] = [ TR(1), TR(2), BR(2), BR(2), TR(3), TR(3) ];
tiesf.away[2] = [ SLR(3), SLL(3), SLL(3), SLL(3), TR(2), TR(2) ];
tiesf.away[3] = [ SLR(3), SLR(3), SLL(3), SLL(3), SLL(3), SLL(3) ];
tiesf.away[4] = [ SLL(3), SLL(3), SLR(3), SLR(3), SLR(3), SLR(3) ];
tiesf.away[5] = [ SLL(3), SLL(3), SLR(3), SLR(3), TL(2), TL(2) ];
tiesf.away[6] = [ TL(1), TL(2), BL(2), BL(2), TL(3), TL(3) ];
tiesf.away[7] = [ BL(2), BL(2), BL(2), BL(3), BL(3), F(3) ];
tiesf.away[8] = [ F(2), F(2), F(2), F(2), F(3), F(3) ];

tiesf.far = [];
tiesf.far[0] = [ BR(3), BR(3), BR(3), BR(3), F(4), F(4) ];
tiesf.far[1] = [ TR(2), TR(2), TR(2), TR(3), TR(3), TR(3) ];
tiesf.far[2] = [ SLR(3), SLR(3), SLR(3), TR(2), TR(2), TR(2) ];
tiesf.far[3] = [ SLR(3), SLR(3), SLR(3), TR(2), TR(2), TR(2) ];
tiesf.far[4] = [ SLL(3), SLL(3), SLL(3), TL(2), TL(2), TL(2) ];
tiesf.far[5] = [ SLL(3), SLL(3), SLL(3), TL(2), TL(2), TL(2) ];
tiesf.far[6] = [ TL(2), TL(2), TL(2), TL(3), TL(3), TL(3) ];
tiesf.far[7] = [ BL(3), BL(3), BL(3), BL(3), F(4), F(4) ];
tiesf.far[8] = [ F(4), F(5), F(5), F(5), F(5), F(5) ];

tiesf.stressed = [];
tiesf.stressed[0] = [ BR(1), BR(1), BR(1), BR(2), BR(2), F(3) ];
tiesf.stressed[1] = [ BR(1), BR(1), BR(1), BR(1), TR(2), TR(2) ];
tiesf.stressed[2] = [ BR(1), TR(2), TR(2), BR(2), BR(2), BR(2) ];
tiesf.stressed[3] = [ BR(1), BR(1), BR(1), TR(2), BR(2), BR(2) ];
tiesf.stressed[4] = [ BL(1), BL(1), BL(1), TL(2), BL(2), BL(2) ];
tiesf.stressed[5] = [ BL(1), TL(2), TL(2), BL(2), BL(2), BL(2) ];
tiesf.stressed[6] = [ BL(1), BL(1), BL(1), BL(1), TL(2), TL(2) ];
tiesf.stressed[7] = [ BL(1), BL(1), BL(1), BL(2), BL(2), F(3) ];
tiesf.stressed[8] = [ BL(1), BL(1), BR(1), BR(1), F(2), F(2) ];

// ****************************************************************************

// Ships

var ships = [ tie, tieInterceptor, tieAdvanced, tieBomber, tieDefender, tiePhantom, lambda, decimator, z95, xwing, ywinga4, awing, bwing, outrider, falcon, ghost, z95S, ywinga4S, m3a, kihraxz, starviper, fang, hwk290S, firesprayS, tiemod, tiefo, tiesf ];