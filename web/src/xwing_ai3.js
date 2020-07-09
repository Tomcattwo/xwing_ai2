// *************************************************************************************************************
// X-Wing Miniatures AI for Heroes of the Aturi Cluster (HotAC) + Flight Group Alpha (FGA) AI 2nd Edition - Javascript
// Version: 3.1.2
// *************************************************************************************************************
// Constants

// ENEMY SHIP DIRECTIONS

var DIR_000 = 0;   //Outside Bullseye, 010-044
var DIR_045 = 1;   //045-089
var DIR_090 = 2;   //090-134
var DIR_135 = 3;   //135-179
var DIR_180 = 4;   //180-224
var DIR_225 = 5;   //225-269
var DIR_270 = 6;   //270-314
var DIR_315 = 7;   //Outside Bullseye, 315-349
var DIR_360 = 8;   //Bullseye, 350-010
var DIR_ship = 9;  //Ship image sector, for reroll blinking

var DIRECTION = [ "1-2", "2-3", "3-4", "4-6", "6-8", "8-9", "9-10", "10-11", "Bullseye" ];

// HEADING
var AWAY = "R2 Opening/R3";            // Heading away
var CLOSING = "R1/R2 Closing";        // Closing
var FAR = "R4+";			          // Far
var STRESSED = "AI Stressed";          // Stressed

//Image Map
var image_map = "";

//STATS (New for HotAC and FGA AI)
var stats = "";

//SYSTEM PHASE (New for HotAC and FGA AI)
var system = "";
var DECLOAK = [ "2L", "2R", "2F" ];

//TARGETS (New for HotAC and FGA AI)
var targets = "";

//SPECIAL MANEUVERS (New for HotAC and FGA AI)
var fullthrottle = "";

//FLEE Threshold (new for FGA AI)
var flee = "";
var hyperRoll = "";

// ACTIONS

var actions = "";
var moveicon = "";
var lockText = "";
var lockTest;
var evadeTest;
var focusTest;
var labelTest;
var reloadTest;
var rotateTest;
var reinforceTest;


// ACTIONS TEXT
var BARREL_ROLL_TEXT1 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc'; //"AVOID"
var BARREL_ROLL_TEXT2 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to get a shot';  //"SHOT"
var BARREL_ROLL_TEXT3 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc and still get a shot'; //"AVOID_SHOT"

var BARREL_ROLL_D_TEXT1 = '<img src="img/action_barrelroll-red_small.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> to avoid Target\'s arc'; //"D_AVOID"
var BARREL_ROLL_D_TEXT2 = '<img src="img/action_barrelroll-red_small.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> to get a shot';  //"D_SHOT"
var BARREL_ROLL_D_TEXT3 = '<img src="img/action_barrelroll-red_small.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> to avoid Target\'s arc and still get a shot'; //"D_AVOID_SHOT"
var BARREL_ROLL_D_TEXT4 = '<img src="img/action_barrelroll-red_small.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> to get Target at Range 2 and in <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">'; //"D_M_R2"

var BARREL_ROLL2LOCK_D_TEXT1 = '<img src="img/action_barrelroll2lock-red_small.png" alt="Barrel Roll to Target-Lock (Difficult)" title="Barrel Roll to Target-Lock (Difficult)"> to avoid target arc and still get a shot';
var BARREL_ROLL2LOCK_D_TEXT2 = '<img src="img/action_barrelroll2lock-red_small.png" alt="Barrel Roll to Target-Lock (Difficult)" title="Barrel Roll to Target-Lock (Difficult)"> to get a shot';

var BARREL_ROLL_OR_BOOST_TEXT1 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get a shot';
var BARREL_ROLL_OR_BOOST_TEXT2 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get within Range 1 and get a shot';
var BARREL_ROLL_OR_BOOST_TEXT3 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to avoid Target\'s arc';

var BOOST_OR_BARREL_ROLL_M_TEXT1 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> or <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to get a shot';
var BOOST_OR_BARREL_ROLL_M_TEXT2 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> or <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc';

var BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT1 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> or <img src="img/action_barrelroll2focus-red_small.png" alt="Barrel Roll to Focus (Difficult)" title="Barrel Roll to Focus (Difficult)"> to avoid Target\'s arc and still get a shot';
var BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT2 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> or <img src="img/action_barrelroll2focus-red_small.png" alt="Barrel Roll to Focus (Difficult)" title="Barrel Roll to Focus (Difficult)"> to get within Range 1 and get a shot';
var BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT3 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> or <img src="img/action_barrelroll2focus-red_small.png" alt="Barrel Roll to Focus (Difficult)" title="Barrel Roll to Focus (Difficult)"> to get a shot';

var BOOST_TEXT1 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get a shot';
var BOOST_TEXT2 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get within Range 1 and still get a shot';
var BOOST_TEXT3 = '<img src="img/action_boost_small.png" alt="Boost" title="Boost"> to avoid Target\'s arc';

var BOOST_D_TEXT1 = '<img src="img/action_boost-red_small.png" alt="Boost (Difficult)" title="Boost (Difficult)"> to get a shot';

var B2BR_BR2B_D_TEXT1 = '<img src="img/action_boost2barrel_roll-red_small.png" alt="Boost to Barrel Roll (Difficult)" title="Boost to Barrel Roll (Difficult)"> or <img src="img/action_barrelroll2boost-red_small.png" alt="Barrel Roll to Boost (Difficult)" title="Barrel Roll to Boost (Difficult)"> to get a shot';
var B2BR_BR2B_D_TEXT2 = '<img src="img/action_boost2barrel_roll-red_small.png" alt="Boost to Barrel Roll (Difficult)" title="Boost to Barrel Roll (Difficult)"> or <img src="img/action_barrelroll2boost-red_small.png" alt="Barrel Roll to Boost (Difficult)" title="Barrel Roll to Boost (Difficult)"> to avoid Target\'s arc';

var CLOAKING_TEXT = '<img src="img/action_cloak_small.png" alt="Cloak" title="Cloak"> if you don\'t have a shot';

var COORDINATE_TEXT = '<img src="img/action_coordinate_small.png" alt="Coordinate" title="Coordinate"> nearest friendly ship';

var EVADE_TEXT0 = '<img src="img/action_evade_small.png" alt="Evade" title="Evade">';
var EVADE_TEXT1 = '<img src="img/action_evade_small.png" alt="Evade" title="Evade"> if ship is not already evading';
var EVADE_TEXT2 = '<img src="img/action_evade_small.png" alt="Evade" title="Evade">';

var FOCUS_TEXT1 = '<img src="img/action_focus_small.png" alt="Focus" title="Focus">';
var FOCUS_TEXT2 = '<img src="img/action_focus_small.png" alt="Focus" title="Focus"> if you have a shot';

var FOCUS2BARREL_ROLL_D_M_TEXT1 = '<img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to avoid Target arc and still get a shot';
var FOCUS2BARREL_ROLL_D_M_TEXT2 = '<img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to get a shot';

var FOCUS2BOOST_D_M_TEXT1 = '<img src="img/tgt_movement-green_small_rebel.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_focus2boost-red_small.png" alt="Focus to Boost (Difficult)" title="Focus to Boost (Difficult)"> to get within Range 1 and still get a shot';

var F2B_F2BR_D_TEXT1 = '<img src="img/action_focus2boost-red_small.png" alt="Focus to Boost (Difficult)" title="Focus to Boost (Difficult)"> or <img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to avoid Target\'s arc and still get a shot';
var F2B_F2BR_D_TEXT2 = '<img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> or <img src="img/action_focus2boost-red_small.png" alt="Focus to Boost (Difficult)" title="Focus to Boost (Difficult)"> to get a shot';

var JAM_D_TEXT = '<img src="img/action_jam-red_small.png" alt="Jam (Difficult)" title="Jam (Difficult)"> against Target';

var RELOAD_D_TEXT1 = '<img src="img/action_reload-red_small.png" alt="Reload (Difficult)" title="Reload (Difficult)"> if no charges or equipped <img src="img/token_missile_small.png" alt="Missile" title="Missile"> or <img src="img/token_torpedo_small.png" alt="Torpedo" title="Torpedo">';
var RELOAD_D_TEXT2 = '<img src="img/action_reload-red_small.png" alt="Reload (Difficult)" title="Reload (Difficult)"> if out of <img src="img/charge.png" alt="Charges" title="Charges"> on equipped <img src="img/token_torpedo_small.png" alt="Torpedo" title="Torpedo">';

var REINFORCE_TEXT0 = '<img src="img/action_reinforce_small.png" alt="Reinforce" title="Reinforce"> (priority: <img src="img/reinforce_front_small.png" alt="Reinforce Front" title="Reinforce Front"> <img src="img/reinforce_rear_small.png" alt="Reinforce Rear" title="Reinforce Rear"> ) if within arc of 2 or more Enemies in that full arc';
var REINFORCE_TEXT1 = '<img src="img/action_reinforce_small.png" alt="Reinforce" title="Reinforce"> toward Target';

var ROTATE_ARC_TEXT1 = '<img src="img/action_rotatearc_small.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to get a shot if Target is neither in your <img src="img/in_arc.png" alt="Forward Arc" title="Forward Arc"> nor your <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">';
var ROTATE_ARC_TEXT2 = '<img src="img/action_rotatearc_small.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> if Target is not in <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">';
var ROTATE_ARC_TEXT3 = '<img src="img/action_rotatearc_small.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to get a shot if Target is not in your <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">';
var TO_ROTATE_ARC_TEXT = '<p>' + '...and perform <img src="img/action_to_rotate.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> if Target is in other <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc"> arc.' + '</p>';

var TARGET_LOCK_TEXT0 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock">';
var TARGET_LOCK_TEXT1 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if not in Enemies\' arcs';
var TARGET_LOCK_TEXT2 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock">';
var TARGET_LOCK_TEXT3 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if not in Enemies\' arcs';
var TARGET_LOCK_TEXT4 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if <img src="img/charge.png" alt="Charge" title="Charge"> remains on equipped <img src="img/token_torpedo_small.png" alt="Torpedo" title="Torpedo">';
var TARGET_LOCK_TEXT5 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock">';
var TARGET_LOCK_TEXT6 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if Target is at Range 2 and in <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">';
var TARGET_LOCK_TEXT7 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if <img src="img/charge.png" alt="Charge" title="Charge"> remains on equipped <img src="img/token_torpedo_small.png" alt="Torpedo" title="Torpedo"> or <img src="img/token_missile_small.png" alt="Missile" title="Missile">';
var TARGET_LOCK_TEXT8 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if not in Target\'s arc';
var TARGET_LOCK_TEXT9 =  '<img src="img/tgt_movement-green_small_rebel.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if <img src="img/charge.png" alt="Charge" title="Charge"> remains on equipped <img src="img/token_missile_small.png" alt="Missile" title="Missile">';

var TLT = [ TARGET_LOCK_TEXT0, TARGET_LOCK_TEXT1, TARGET_LOCK_TEXT2, TARGET_LOCK_TEXT3, TARGET_LOCK_TEXT4, TARGET_LOCK_TEXT5, TARGET_LOCK_TEXT6, TARGET_LOCK_TEXT7, TARGET_LOCK_TEXT8, TARGET_LOCK_TEXT9 ]


//ATTACKS (New for HotAC AI only)
var attacks = "";

//END PHASE (New for HotAC AI only)
var end = "";

// ships array (re-defined in separate xwing_ships3.js file)and currently selected SHIP
var ships = [];
var SHIP = {};

// ****************************************************************************
// Moves

class Maneuver {
    constructor(name, distance) {
        this.name = name;
        this.num = distance;
    }
}

function F( distance ) {
    return new Maneuver("forward", distance);
}

function BL( distance ) {
    return new Maneuver("bank-left", distance);
}

function BR( distance ) {
    return new Maneuver("bank-right", distance);
}

function TL( distance ) {
    return new Maneuver("turn-left", distance);
}

function TR( distance ) {
    return new Maneuver("turn-right", distance);
}

function K( distance ) {
    return new Maneuver("koiogran", distance);
}

function SLL( distance ) {
    return new Maneuver("segnor-loop-left", distance);
}

function SLR( distance ) {
    return new Maneuver("segnor-loop-right", distance);
}

function TRL( distance ) {
    return new Maneuver("tallon-roll-left", distance);
}

function TRR( distance ) {
    return new Maneuver("tallon-roll-right", distance);
}

function RBL( distance ) {
    return new Maneuver("reverse-bank-left", distance);
}

function RBR( distance ) {
    return new Maneuver("reverse-bank-right", distance);
}

function R( distance ) {
    return new Maneuver("reverse", distance);
}

function STA( distance ) {
    return new Maneuver("stationary", distance);
}

function invalid() {
	return new Maneuver("invalid", 0);
}

// ****************************************************************************
// Helper Functions

function display_ship_choice( faction, funct )
{
    var data = "";
    var idx=0;
    var shown=0;

    data += '<form action="demo_form.asp" name="ship_buttons">';

    data += '<b>Faction:</b><br>';

		data += '<label>\n';
			data += '    <div title="Rebels">'
			data += '       <input type="radio" onclick="display_ship_choice(\'Rebel\', \'' + funct + '\')" hidden >'
			data += '        <img class="faction_button" src="img/rebel.png" />'
			data += '    </div>'
			data += '</label>\n';


		data += '<label>\n';
			data += '    <div title="Empire">'
			data += '       <input type="radio" onclick="display_ship_choice(\'Empire\', \'' + funct + '\')" hidden >'
			data += '       <img class="faction_button" src="img/empire.png" />'
			data += '    </div>'
			data += '</label>\n';

    	data += '<br>\n';

    	data += '<label>\n';
    		data += '    <div title="Scum">'
    		data += '       <input type="radio" onclick="display_ship_choice(\'Scum\', \'' + funct + '\')" hidden >'
    		data += '        <img class="faction_button" src="img/scum.png" />'
    		data += '    </div>'
    		data += '</label>\n';

			data += '<label>\n';
			data += '    <div title="First Order">'
			data += '       <input type="radio" onclick="display_ship_choice(\'First Order\', \'' + funct + '\')" hidden >'
			data += '        <img class="faction_button" src="img/1storder.png" />'
			data += '    </div>'
			data += '</label>\n';

    data += '<br>\n';

    data += '<b>AI Ship:</b><br>';

    for( idx=0; idx < ships.length; idx++ )
    {
        // only add buttons for ships for the selected faction
        if( ships[idx].faction == faction )
        {
            // run the selected function on the first faction ship found
            if( shown == 0 )
            {
                var fn = window[funct];
                fn(idx);
            }

            shown++;
            funct_args = funct + "(" + idx + ")";

            data += '<label>\n';
            data += '    <div title="' + ships[idx].name + '">'
            data += '       <input type="radio" onclick="' + funct_args + '" hidden />'
            data += '       <img class="ship_button" src="' + ships[idx].image + '" />'
            data += '    </div>'
            data += '</label>\n';

            if( shown % 2 == 0 )
            {
                data += '<br>\n'
            }
        }
    }

    data += '<br>\n';
    data += '</form>\n';
    document.getElementById( "ships" ).innerHTML = data;

}

function gen_maneuver_table( name, table )
{
    var data;
    data = '<div class="label">' + name + "</div>";
    data += '<table class="ship_table">';
    for( var dir=0; dir < table.length; dir++ )
    {
        data += "<tr><td class=\"ship_cell\">" + DIRECTION[dir];
        for( var item=0; item < table[dir].length; item++ )
        {
            maneuver = format_maneuver( SHIP, table[dir][item] );
            data += "<td class=\"ship_cell\">";
            data += '<div class="table_num">' + maneuver.num + '</div>';
            data += '<div class="table_num">' + maneuver.img + '</div>';
            data += "</td>";
        }
        data += "</tr>";
    }
    data += "</table><br>";
    return data;
}

function display_ship( ship_id )
{
    // Set the global to the selected ship
    SHIP = ships[ ship_id ];
    if (SHIP === undefined ) {
    	var error = "<div><p>Unable to get ship(" + ship_id + ")</div>";
    	document.getElementById( "table" ).innerHTML( error );
    	return;
    }


    ship = '<img src="' + SHIP.image + '" alt="' + SHIP.name + '"><br>' + SHIP.name + "<br>" + "Faction: " + SHIP.faction;

    stats =  format_stats( SHIP );

    system =  format_system( SHIP );

    targets =  format_targets( SHIP );

    fullthrottle = format_fullthrottle( SHIP );

    flee =  format_flee( SHIP );

    actions =  format_actions( SHIP );

    attacks =  format_attacks( SHIP );

    end =  format_end( SHIP );

    // Tables (closing, away, etc.)
    var tables = "";
    tables += gen_maneuver_table( CLOSING, SHIP.closing )
    tables += gen_maneuver_table( AWAY, SHIP.away )
    tables += gen_maneuver_table( FAR, SHIP.far )
    tables += gen_maneuver_table( STRESSED, SHIP.stressed )

    document.getElementById( "version" ).innerHTML = "XWing FGA AI2 Version: " + VERSION;
    document.getElementById( "ship").innerHTML = ship;
    document.getElementById( "stats" ).innerHTML = stats;
    document.getElementById( "system" ).innerHTML = system;
    document.getElementById( "targets" ).innerHTML = targets;
    document.getElementById( "fullthrottle" ).innerHTML = fullthrottle;
    document.getElementById( "flee" ).innerHTML = flee;
    document.getElementById( "actions" ).innerHTML = actions;
    document.getElementById( "attacks" ).innerHTML = attacks;
    document.getElementById( "end" ).innerHTML = end;
    document.getElementById( "table" ).innerHTML = tables;
}


function set_version()
{
    document.getElementById('version').innerHTML = "XWing HotAC+FGA AI Version: " + VERSION;
}


function set_ship( ship_id )
{
    // Set the global to the selected ship
    SHIP = ships[ ship_id ];
    if (SHIP === undefined ) {
    	document.getElementById('ship_name').innerHTML = "<br>Unknown Ship: " + ship_id;
    	return;
    }

    set_version();

	//reset image map
	image_map = 'img/FGA_image_map.png' ;

    // Update index html elements for the selected ship
   	document.getElementById('ship_image').src = SHIP.image;
   	document.getElementById('ship_name').innerHTML = "<br>" + SHIP.name + "<br>" + "Faction: " + SHIP.faction + "<br>";
	document.getElementById( "map_img").src = image_map;

    // Clear any previous maneuvers shown
    document.getElementById('closing_num').innerHTML = "<p></p>";
    document.getElementById('closing_img').innerHTML = "<p></p>";
    document.getElementById('away_num').innerHTML = "<p></p>";
    document.getElementById('away_img').innerHTML = "<p></p>";
    document.getElementById('far_num').innerHTML = "<p></p>";
    document.getElementById('far_img').innerHTML = "<p></p>";
    document.getElementById('stressed_num').innerHTML = "<p></p>";
    document.getElementById('stressed_img').innerHTML = "<p></p>";



    document.getElementById('selection').innerHTML = "<p>Click on a direction</p>";
    document.getElementById('stats-text').innerHTML = format_stats( SHIP );
    document.getElementById('system-text').innerHTML = format_system( SHIP );
    document.getElementById('targets-text').innerHTML = format_targets( SHIP );
    document.getElementById('fullthrottle-text').innerHTML = format_fullthrottle( SHIP );
    document.getElementById( "flee-text" ).innerHTML = format_flee( SHIP );
    document.getElementById('actions-text').innerHTML = format_actions( SHIP );
    document.getElementById('attacks-text').innerHTML = format_attacks( SHIP );
    document.getElementById('end-text').innerHTML = format_end( SHIP );
}


function pick( options )
{
	if (options === undefined)
	{
		return invalid();
	}

	var size=options.length;
	if ( size == 0 )
	{
		return invalid();
	}
    var choice=Math.floor(Math.random()*size);
    return options[choice];
}


function maneuverInList( maneuver, list )
{
    var found = false;
    for( var i=0; i < list.length; i++ )
    {
        if( ( list[i].num == maneuver.num ) && ( list[i].name == maneuver.name ) )
        {
            found = true;
            break;
        }
    }

    return found;
}


function format_maneuver( ship, maneuver )
{
    var num;
    var img;

    if ( maneuverInList( maneuver, ship.simple ) )
    {
        num = "<span style=color:#1e8eff>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-blue.png">';
    }
    else if ( maneuverInList( maneuver, ship.difficult ) )
    {
        num = "<span style=color:red>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-red.png">';
    }
    else if ( maneuverInList( maneuver, ship.normal ) )
    {
        num = "<span>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-white.png">';
    }
    else {
        num = "<span style=color:purple>NA</span>";
        img = "";
    }

    return {'num': num, 'img': img };
}


function format_stats( ship )
{
	stats = "";
	stats += "<p>" + "<img src=\'img/" + ship.init + "\' alt='Initiative: " + ship.init.charAt(0) + "\' title='Initiative: " + ship.init.charAt(0) + "'\>   Pilot: " + ship.pilot + "</p>";
	stats += "<p>" + "<img src=\'img/" + ship.stats + "\' alt='Ship Stats' title='Ship Stats'>" + "</p>";
	stats += "<p>" + "<img src=\'img/" + ship.icons + "\' alt='Action Icons' title='Action Icons'>" + "</p>";

	for( var abils = 0; abils < ship.ability.length; abils++ )
    {
		switch( ship.ability[ abils ] )
		{
			case "NONE":
			{
				break;
			}
			case "ADVANCED_TARGETING_COMPUTER":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "ADVANCED TARGETING COMPUTER" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you perform a primary attack against a defender you have locked, roll 1 additional die and change 1 <img src='img/damage.png' alt='Damage' title='Damage'> result into a <img src='img/critical_small.png' alt='Critical Damage' title='Critical Damage'> result." + "</p>";
				break;
			}
			case "NIMBLE_BOMBER":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "NIMBLE BOMBER" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "If you would drop a device using a <img src='img/forward-white_small.png' alt='Forward Template' title='Forward Template'>, you may use a <img src='img/bank-left-white_small.png' alt='Bank Left Template' title='Bank Left Template'> or <img src='img/bank-right-white_small.png' alt='Bank Right Template' title='Bank Right Template'> of the same speed instead." + "</p>";
				break;
			}
			case "FULL_THROTTLE":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "FULL THROTTLE" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "After you fully execute a speed 3-5 maneuver, you may perform an <img src='img/action_evade_small.png' alt='Evade' title='Evade'> action." + "</p>";
				break;
			}
			case "AUTOTHRUSTERS":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "AUTOTHRUSTERS" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "After you perform an action, you may perform a red <img src='img/action_barrelroll-red_small.png' alt='Barrel Roll (Difficult)' title='Barrel Roll (Difficult)'> or a red <img src='img/action_boost-red_small.png' alt='Boost (Difficult)' title='Boost (Difficult)'>action." + "</p>";
				break;
			}
			case "STYGIUM_ARRAY":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "STYGIUM ARRAY" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "After you decloak, you may perform" + "<br>" + "an <img src='img/action_evade_small.png' alt='Evade' title='Evade'> action." + "</p>";
				stats += "<p style=\"text-align: left\">" + "At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token." + "</p>";
				break;
			}
			case "HEAVY_WEAPON_TURRET":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "HEAVY WEAPON TURRET" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "You can rotate your <img src='img/turret_arc_small.png' alt='Turret Arc' title='Turret Arc'> indicator only to your <img src='img/in_arc.png' alt='Forward Arc' title='Forward Arc'> or <img src='img/in_rear_arc.png' alt='Rear Arc' title='Rea Arc'>." + "<br>";
				stats += "You must treat the <img src='img/in_arc.png' alt='Forward Arc' title='Forward Arc'> requirement of your equipped <img src='img/token_missile_small.png' alt='Missile' title='Missile'> upgrades as <img src='img/turret_arc_small.png' alt='Turret Arc' title='Turret Arc'>." + "</p>";
				break;
			}
			case "VECTORED_THRUSTERS":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "VECTORED THRUSTERS" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "After you perform an action, you may perform a red <img src='img/action_boost-red_small.png' alt='Boost (Difficult)' title='Boost (Difficult)'> action." + "</p>";
				break;
			}
			case "SENSOR_BLINDSPOT":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "SENSOR BLINDSPOT" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die." + "</p>";
				break;
			}
			case "TAIL_GUN":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "TAIL GUN" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you have a docked ship, you have a primary weapon with an <img src='img/in_rear_arc.png' alt='Rear Arc' title='Rear Arc'> attack value equal to your docked ship\'s primary <img src='img/in_arc.png' alt='Forward Arc' title='Forward Arc'> attack value." + "</p>";
				break;
			}
			case "DEADMANS_SWITCH":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "DEADMAN'S SWITCH" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "After you are destroyed, each other ship at range 0-1 suffers 1 <img src='img/damage.png' alt='Damage' title='Damage'>." + "</p>";
				break;
			}
			case "WEAPON_HARDPOINT":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "WEAPON HARDPOINT" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "You can equip 1 <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'> or <img src='img/token_missile_small.png' alt='Missile' title='Missile'> upgrade." + "</p>";
				break;
			}
			case "MICROTHRUSTERS":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "MICROTHRUSTERS" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you perform a barrel roll, you <b>must</b> use the <img src='img/bank-left-white_small.png' alt='Bank Left' title='Bank Left'> or <img src='img/bank-right-white_small.png' alt='Bank Right' title='Bank Right'> template instead of the <img src='img/forward-white_small.png' alt='Forward' title='Forward'> template." + "</p>";
				break;
			}
			case "CONCORDIA_FACEOFF":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "CONCORDIA FACEOFF" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you defend, if the attack range is 1 and you are in the attacker's forward arc, change 1 result to a <img src='img/action_evade_small.png' alt='Evade' title='Evade'> result." + "</p>";
				break;
			}
			case "NOTCHED_STABILIZERS":
			{
				stats += "<p>" + "Ship Ability: " + "<b>" + "NOTCHED STABILIZERS" + "</b>" + "</p>";
				stats += "<p style=\"text-align: left\">" + "While you move, you ignore asteroids." + "</p>";
				break;
			}
			default:
			{
				stats += "<p>" + "Ability Mismatch" + "</p>";
			}
		}
	}
	stats += "<p><b>Maneuver Table</b>" + "<br>";
	stats += "<img src=\'img/" + ship.table + "\' alt='Maneuver Table' title='Maneuver Table'>" + "<br>";
	stats += "<span style=\"font-size: 12px\">Maneuver Tables courtesy of <a class=label href=\"http://xhud.sirjorj.com/xwing.cgi\">xhud.sirjorj.com</a></span></p>";
	return stats;
}


function format_system( ship )
{
	system = "";
	if( ship.name == "TIE/ph Phantom" )
	{
		system += "<p class=\"label\">" + "System Phase" + "</p>";
		system += "<ol>" + "<li>" + "Roll to decloak (reroll if blocked)" + "<br>";
		system += "(Click on Phantom again to reroll)" + "<br>" + "<br>";
		var decloaking = pick(DECLOAK);
			if(decloaking == "2L" )
			{
				system += "<img src='img/2-blue.png' alt='2 Simple' title='2 Simple'>   <img src='img/action_barrelroll_left-blue_small.png' alt='Barrel Roll Left' title='Barrel Roll Left'>" + "</li>" + "<br>";
			}
			else if(decloaking == "2R" )
			{
				system += "<img src='img/2-blue.png' alt='2 Simple' title='2 Simple'>   <img src='img/action_barrelroll_right-blue_small.png' alt='Barrel Roll Right' title='Barrel Roll Right'>" + "</li>" + "<br>";
			}
			else
			{
				system += "<img src='img/2-blue.png' alt='2 Simple' title='2 Simple'>   <img src='img/forward-blue_small.png' alt='Straight' title='Straight'>" + "</li>" + "<br>";
			}
		system += "<li>" + "Perform <img src='img/action_evade-blue_small.png' alt='Evade' title='Evade'>" + "</li>" + "</ol>";
	}
	return system;
}


function format_targets( ship )
{
	targets = "<ol>";
	ship.targets.forEach(targetText);
	targets += "</ol>";
	return targets;
}


function targetText( value, index, array )
{
	switch( value )
	{
    	case 'LOCKED':
    	{
        	targets += "<li>" + "Locked enemy within Range 3" + "</li>";
        	break;
    	}
    	case 'LOWERI':
    	{
        	targets += "<li>" + "Nearest enemy in <img src='img/in_arc.png' alt='firing arc' title='Firing Arc'> " + "with lower Initiative" + "</li>";
        	break;
    	}
    	case 'LOWERI_TURRET':
    	{
        	targets += "<li>" + "Nearest enemy in <img src='img/turret_arc_small.png' alt='Turret Arc arc' title='Turret Arc arc'> " + "with lower Initiative" + "</li>";
        	break;
    	}
       	case 'ARC':
       	{
           	targets += "<li>" + "Nearest enemy in <img src='img/in_arc.png' alt='Front firing arc' title='Front Firing Arc'>" + "</li>";
           	break;
       	}
       	case 'ARC_TURRET':
       	{
           	targets += "<li>" + "Nearest enemy in <img src='img/turret_arc_small.png' alt='Turret Arc arc' title='Turret Arc arc'>" + "</li>";
           	break;
       	}
       	case 'REAR_ARC':
       	{
           	targets += "<li>" + "Nearest enemy in <img src='img/in_rear_arc.png' alt='Rear firing arc' title='Rear Firing Arc'>" + "</li>";
           	break;
       	}
       	case 'NEAREST':
       	{
           	targets += "<li>" + "Nearest enemy" + "</li>";
           	break;
    	}
	    default:
	    {
			targets += "<li>" + "No Actions Found" + "</li>";
		}
	}
}


function format_fullthrottle( ship )
{
	fullthrottle = "";
	if( ship.name == "TIE/D Defender" )
	{
		fullthrottle += "<p>" + "<img src='img/action_evade_small.png' alt='Evade' title='Evade'> if allowed due to " + "<i>" + "<b>" + "FULL THROTTLE" + "</b>" + "</i>" + " ability" + "</p>";
	}
	return fullthrottle;
}

function format_flee( ship )
{
	flee = "";
	flee += "<p class=\"label\">" + "Flee threshold: " + ship.threshold + " Health" + "</p>";
	flee += "<p>When assigned a Flee token:<br>"
	if( ship.flee[0] == "0" )
	{
		flee += "Move at fastest speed toward nearest edge." + "</p>";
	}
	else
	{
		flee += "If facing edge at Range 1-2 move at fastest speed or perform " + "<i>" + "Hyperspace maneuver" + "</i>" + " shown below:" + "<br>";
		hyperRoll = pick(ship.flee);
		flee += "Maneuver:  <span style=\"text-align: center\">" + "<img src='img/" + hyperRoll + ".png' alt='" + hyperRoll + "' title='" + hyperRoll + "'>" + "</span>" + "</br>";
		flee += "(Click on the AI Ship to reroll)</p>";
	}
	return flee;
}


function format_actions( ship )
{
	actions = "";
	lockTest = 0;
	labelTest = 0;
	reloadTest = 0;
	evadeTest = 0;
	focusTest = 0;
	rotateTest = 0;
	reinforceTest = 0;

	actions = "<ol>" + "<li>" + "Resolve <img src='img/critical_small.png' alt='Criticals' title='Criticals'>";

	if (ship.name == "T-65 X-Wing" )
	{
		actions += " or repair with <img src='img/astromech.png' alt='Astromech' title='Astromech'>" + "</li>";
	}
	else if (ship.name == "BTL-A4 Y-Wing" )
	{
		actions += " or repair with <img src='img/astromech.png' alt='Astromech' title='Astromech'>" + "</li>";
	}
	else if (ship.name == "BTL-A4 Y-Wing (Scum)" )
	{
		actions += " or repair with <img src='img/astromech.png' alt='Astromech' title='Astromech'>" + "</li>";
	}
	else
	{
		actions += "</li>";
	}
	moveicon = ship.faction.toLowerCase();
	switch( ship.name )
	{
    	case 'VT-49 Decimator':
    	{
        	lockTest = 2;
        	labelTest = 2;
        	rotateTest = 2;
        	break;
    	}
    	case 'TIE Advanced x1':
    	{
			lockTest = 8;
			labelTest = 2;
			break;
    	}

       	case 'TIE/D Defender':
       	{
			lockTest = 1;
			labelTest = 1;
			evadeTest = 1;
           	break;
    	}
       	case 'TIE/ph Phantom':
       	{
			evadeTest = 1;
           	break;
    	}
       	case 'Z-95-AF4 Headhunter':
       	{
			lockTest = 3;
           	break;
       	}
       	case 'T-65 X-Wing':
       	{
			lockTest = 2;
			labelTest = 2;
           	break;
       	}
       	case 'BTL-A4 Y-Wing':
       	{
			lockTest = 4;
			reloadTest = 1;
			rotateTest = 1;
           	break;
    	}
       	case 'RZ-1 A-Wing':
       	{
			lockTest = 5;
			labelTest = 2;
			evadeTest = 2;

           	break;
    	}
       	case 'A/SF-01 B-Wing':
       	{
			lockTest = 2;
			labelTest = 2;
           	break;
    	}
       	case 'YT-2400 Light Freighter':
       	{
			lockTest = 6;
			labelTest = 1;
			rotateTest = 2;
           	break;
    	}
       	case 'Modified YT-1300 Light Freighter':
       	{
			rotateTest = 3;
           	break;
    	}
       	case 'VCX-100 Light Freighter (Ghost)':
       	{
			rotateTest = 1;
			reinforceTest = 1;
           	break;
    	}
       	case 'Z-95-AF4 Headhunter (Scum)':
       	{
			lockTest = 3;
           	break;
    	}
       	case 'BTL-A4 Y-Wing (Scum)':
       	{
			lockTest = 4;
			reloadTest = 1;
			rotateTest = 1;
           	break;
    	}
       	case 'M3-A Interceptor':
       	{
			lockTest = 7;
           	break;
    	}
       	case 'Kihraxz Fighter':
       	{
			lockTest = 2;
			labelTest = 2;
			focusTest = 1;
           	break;
    	}
       	case 'HWK-290 Light Freighter (Scum)':
       	{
			rotateTest = 2;
           	break;
    	}
       	case 'Firespray-Class Patrol Craft (Scum)':
       	{
			lockTest = 2;
			labelTest = 2;
           	break;
    	}
       	case 'TIE/fo Fighter':
       	{
			lockTest = 3;
           	break;
    	}
       	case 'TIE/sf Special Forces':
       	{
			lockTest = 3;
           	break;
    	}
	    default:
	    {
			lockTest = 0;
			labelTest = 0;
			reloadTest = 0;
			evadeTest = 0;
			rotateTest = 0;
			reinforceTest = 0;
		}
	}

	ship.actions.forEach(actionText);

	actions += "</ol>";

	if( ship.name == "TIE/sf Special Forces" )
	{
		actions += TO_ROTATE_ARC_TEXT;
	}
	if( labelTest == 2 )
	{
		actions += "   <img src='img/tgt_movement-red_small_" + moveicon + ".png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'> = only if Target has " + "<u>" + "not" + "</u>" + " " + "<u>" + "yet" + "</u>" + " moved" + "<br>";
		actions += "   <img src='img/tgt_movement-green_small_" + moveicon + ".png' alt='Only if Target has already moved' title='Only if Target has already moved'> = only if Target has " + "<u>" + "already" + "</u>" + " moved" + "<p>" + "</p>";
	}
	else if( labelTest == 1 )
	{
		actions += "   <img src='img/tgt_movement-green_small_" + moveicon + ".png' alt='Only if Target has already moved' title='Only if Target has already moved'> = only if Target has " + "<u>" + "already" + "</u>" + " moved" + "<p>" + "</p>";
	}
	else
	{
		actions += "";
	}
	return actions;
}


function actionText( value, index, array )
{
	switch( value )
	{
    	case 'BARREL_ROLL_AVOID':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_D_AVOID':
    	{
        	actions += "<li>" + BARREL_ROLL_D_TEXT1 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_D_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_D_TEXT2 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_AVOID_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT3 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_D_AVOID_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_D_TEXT3 + "</li>";
        	break;
    	}
   	case 'BARREL_ROLL_D_M_R2':
    	{
        	actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BARREL_ROLL_D_TEXT4 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_M_AVOID':
    	{
        	actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BARREL_ROLL_TEXT1 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_M_SHOT':
    	{
        	actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BARREL_ROLL_TEXT2 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_M_AVOID_SHOT':
    	{
        	actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BARREL_ROLL_TEXT3 + "</li>";
        	break;
    	}
		case 'BARREL_ROLL2LOCK_D':
		{
			actions += "<li>" + BARREL_ROLL2LOCK_D_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2LOCK_D_TEXT2 + "</li>";
			break;
	    }
		case 'BARREL_ROLL_OR_BOOST':
		{
			actions += "<li>" + BARREL_ROLL_OR_BOOST_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_OR_BOOST_TEXT2 + "</li>";
			actions += "<li>" + BARREL_ROLL_OR_BOOST_TEXT3 + "</li>";
			break;
	    }
    	case 'BOOST_D':
    	{
        	actions += "<li>" + BOOST_D_TEXT1 + "</li>";
        	break;
    	}
		case 'BOOST_M':
		{
			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BOOST_TEXT1 + "</li>";
			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BOOST_TEXT2 + "</li>";
			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BOOST_TEXT3 + "</li>";
			break;
	    }
		case 'BOOST_OR_BARREL_ROLL_M_SHOT':
		{
		    actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BOOST_OR_BARREL_ROLL_M_TEXT1 + "</li>";
			break;
	    }
		case 'BOOST_OR_BARREL_ROLL_AVOID':
		{
		    actions += "<li>" + BOOST_OR_BARREL_ROLL_M_TEXT2 + "</li>";
			break;
	    }
		case 'BOOST_OR_BARREL_ROLL_M_AVOID':
		{
		    actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + BOOST_OR_BARREL_ROLL_M_TEXT2 + "</li>";
			break;
	    }
		case 'BOOST_OR_BARREL_ROLL2FOCUS_D':
		{
			actions += "<li>" + BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT1 + "</li>";
			actions += "<li>" + BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT2 + "</li>";
			actions += "<li>" + BOOST_OR_BARREL_ROLL2FOCUS_D_TEXT3 + "</li>";
			break;
	    }
		case 'CLOAKING':
	    {
 	       actions += "<li>" + CLOAKING_TEXT + "</li>";
 	       break;
	    }
	    case 'COORDINATE':
	    {
	        actions += "<li>" + COORDINATE_TEXT + "</li>";
	        break;
	    }
	    case 'COORDINATE_D':
	    {
	        break;
	    }
	    case 'EVADE':
	    {
		    if( evadeTest == 1 )
		        {
		            actions += "<li>" + EVADE_TEXT1 + "</li>";
		            break;
		        }
		        else if( evadeTest == 2 )
		        {
		            actions += "<li>" + "<img src='img/tgt_movement-red_small_" + moveicon + ".png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'>" + EVADE_TEXT2 + "</li>";
		            break;
		        }
		        else
		        {
					actions += "<li>" + EVADE_TEXT0 + "</li>";
					break;
				}
 	    }
		case 'FOCUS':
		{
            actions += "<li>" + FOCUS_TEXT1 + "</li>";
            break;
    	}
		case 'FOCUS_SHOT':
		{
            actions += "<li>" + FOCUS_TEXT2 + "</li>";
            break;
    	}
		case 'FOCUS_M':
		{
		            actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + FOCUS_TEXT1 + "</li>";
            break;
    	}
		case 'FOCUS_M_SHOT':
		{
		    if( focusTest == 1 )
		        {
		 			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + FOCUS_TEXT2 + "</li>";
            		break;
				}
			else
			{
		 			actions += "<li>" + "<img src='img/tgt_movement-red_small_" + moveicon + ".png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'>" + FOCUS_TEXT2 + "</li>";
            		break;
			}
    	}
		case 'FOCUS2BARREL_ROLL_D_M':
	    {
			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + FOCUS2BARREL_ROLL_D_M_TEXT1 + "</li>";
			actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + FOCUS2BARREL_ROLL_D_M_TEXT2 + "</li>";
			break;
	    }
		case 'FOCUS2BOOST_D_M_SHOT':
	    {
			actions += "<li>" + FOCUS2BOOST_D_M_TEXT1 + "</li>";
			break;
	    }
		case 'F2B_F2BR_D':
	    {
			actions += "<li>" + F2B_F2BR_D_TEXT1 + "</li>";
			break;
	    }
		case 'B2BR_BR2B_D':
	    {
			actions += "<li>" + B2BR_BR2B_D_TEXT1 + "</li>";
            actions += "<li>" + FOCUS_TEXT2 + "</li>";
			actions += "<li>" + B2BR_BR2B_D_TEXT2 + "</li>";
			break;
	    }
		case 'JAM_D':
	    {
	        actions += "<li>" + JAM_D_TEXT + "</li>";
	        break;
	    }
		case 'RELOAD_D':
		{
			if( reloadTest == 1 )
			{
				actions += "<li>" + RELOAD_D_TEXT2 + "</li>";
				break;
			}
			else
			{
				actions += "<li>" + RELOAD_D_TEXT1 + "</li>";
				break;
			}
		}
		case 'REINFORCE':
		{
			if( reinforceTest == 1 )
			{
				actions += "<li>" + REINFORCE_TEXT1 + "</li>";
				break;
			}
			else
			{
				actions += "<li>" + REINFORCE_TEXT0 + "</li>";
				break;
			}
		}
 	    case 'ROTATE_ARC':
 	    {
			if( rotateTest == 1 )
			{
				actions += "<li>" + ROTATE_ARC_TEXT1 + "</li>";
				break;
			}
			else if( rotateTest == 2 )
			{
				actions += "<li>" + ROTATE_ARC_TEXT2 + "</li>";
				break;
			}
			else if( rotateTest == 3 )
			{
				actions += "<li>" + ROTATE_ARC_TEXT3 + "</li>";
				break;
			}
			else
			{
 	        	break;
			}
 	    }
		case 'TARGET_LOCK_M':
    	{
		    if( lockTest == 1 )
		        {
		            actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
		        else if( lockTest == 2 )
		        {
		            actions += "<li>" + "<img src=\"img/tgt_movement-red_small_" + moveicon + ".png\" alt='Only if Target has not yet moved' title='Only if Target has not yet moved'>" + TARGET_LOCK_TEXT1 + "</li>";
		            actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
				else if( lockTest == 5 )
				{
					actions += "<li>" + "<img src='img/tgt_movement-red_small_" + moveicon + ".png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'>" + TARGET_LOCK_TEXT1 + "</li>";
		            lockTest = 9;
		            break;
				}
				else if( lockTest == 6 )
				{
		            actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + TARGET_LOCK_TEXT6 + "</li>";
		            break;
				}
		        else if( lockTest == 8 )
		        {
		            actions += "<li>" + "<img src=\"img/tgt_movement-red_small_" + moveicon + ".png\" alt='Only if Target has not yet moved' title='Only if Target has not yet moved'>" + TARGET_LOCK_TEXT8 + "</li>";
		            actions += "<li>" + "<img src=\"img/tgt_movement-green_small_" + moveicon + ".png\" alt='Only if Target has already moved' title='Only if Target has already moved'>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
		        else
		        {
		            actions += "<li>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
    	}
 	    case 'TARGET_LOCK':
 	    {
		    actions += "<li>" + TLT[lockTest] + "</li>";
		    break;
 	    }
	    default:
	    {
			actions += "<li>" + "No Actions Found" + "</li>";
		}
    }
}


function format_attacks( ship )
{
	attacks = "<ol>";
	ship.attacks.forEach(attackText);
	attacks += "</ol>";
	return attacks;
}


function attackText( value, index, array )
{
	switch( value )
	{
    	case 'LOCKED':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>" + "<br>";
        	break;
    	}
 		case 'LOCKED_DEC':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/turret_arc-red_small.png' alt='Turret' title='Turret'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>" + "<br>";
        	break;
    	}
    	case 'LOCKED_DEF':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
        	break;
    	}

    	case 'LOCKED_ADV':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_SA':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_SF':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_X':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>)" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_Y':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/turret_arc-red_small.png' alt='Turret' title='Turret'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/turret_arc-red_small.png' alt='Turret' title='Turret'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>" + "<br>";
        	break;
    	}
    	case 'LOCKED_Z95':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
	case 'LOCKED_Z95S':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )*" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
			attacks += "<p>*Always spend the lock to increase chance of dealing damage.</p>";
			attacks += "<p>Clear <img src='img/action_targetlock_small.png' alt='Target-Lock' title='Target Lock'> if unspent.</p>";
        	break;
    	}
    	case 'LOCKED_A':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_B':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_YT2400':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked" + "</li>";
        	attacks += "<li>" + "Nearest enemy at Range 2+" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>" + "<br>";
        	break;
    	}
    	case 'LOCKED_GHOST':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'> )" + "</li>" + "</ol>";
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target using <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Nearest Enemy " + "</li>" + "</ol>" + "<br>";

        	break;
    	}
    	case 'LOCKED_M3A':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_torpedo_small.png' alt='Torpedo' title='Torpedo'>, <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
    	case 'LOCKED_HWK290':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> if possible, <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'>)" + "</li>";
        	attacks += "<li>" + "Nearest Enemy (priority: <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'> if possible, <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'>)" + "</li>" + "</ol>" + "<br>";
        	break;
    	}
    	case 'LOCKED_FS':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>";
        	break;
    	}
       	case 'GUNNER_FS':
       	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target if allowed by <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest Enemy (priority: <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>";
           	break;
       	}
    	case 'GUNNER_DEC':
    	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target if possible due to <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked" + "</li>";
        	attacks += "<li>" + "Nearest enemy" + "</li>" + "</ol>";
        	break;
    	}
       	case 'GUNNER_LAM':
       	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target if allowed by <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Nearest enemy (priority: <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>";
           	break;
       	}
       	case 'GUNNER_SF':
       	{
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target if allowed by <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>";
        	attacks += "<li>" + "Nearest enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>";
           	break;
       	}
       	case 'NEAREST_LAM':
       	{
           	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>" + "<br>";
           	break;
    	}
       	case 'NEAREST_YT1300':
       	{
           	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Nearest Enemy (priority: <img src='img/token_missile_small.png' alt='Missile' title='Missile'>, <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'> )" + "</li>" + "</ol>" + "<br>";
        	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack target using <img src='img/gunner.png' alt='Gunner' title='Gunner'> " + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Nearest Enemy (priority: <img src='img/turret_arc-red_small.png' alt='Turret Arc' title='Turret Arc'> )" + "</li>" + "</ol>" + "<br>";
           	break;
    	}
       	case 'NEAREST':
       	{
           	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
			attacks += "<ol>" + "<li>" + "Nearest Enemy" + "</li>" + "</ol>";
           	break;
    	}
	    default:
	    {
			attacks += "<li>" + "No Actions Found" + "</li>";
		}
	}
}


function format_end( ship )
{
	end = "";
	if( ship.name == "TIE/ph Phantom" )
	{
		end += "<p class=\"label\">" + "End Phase" + "</p>";
		end += "<p>" + "Spend 1 evade token to gain 1 cloak token" + "</p>";
	}
	return end;
}


// ****************************************************************************
// Main

function load_index()
{
    set_ship(0);
    display_ship_choice( "Rebel", "set_ship" );
}


function load_ships()
{
    display_ship(0);
    display_ship_choice( "Rebel", "display_ship" );
}

window.oncontextmenu = function(event)
{
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function blink (direction, ship)
{
    //change map image for selected sector to brighten clicked sector for 200ms
    if( direction == 9 )
    {
		var blinkVar = setTimeout(reroll,200, direction, ship);
    	image_map = 'img/FGA_image_map_blink' + direction + '.png';
    	document.getElementById( "map_img").src = image_map;
	}
	else
	{
		var blinkVar = setTimeout(movement,200, direction, ship);
    	image_map = 'img/FGA_image_map_blink' + direction + '.png';
    	document.getElementById( "map_img").src = image_map;
	}
}


function movement( direction, ship )
{
    //change map image for selected sector
    if( ship.faction == "Empire" )
    {
		image_map = 'img/FGA_image_map' + direction + '.png';
	}
	else
	{
		image_map = 'img/FGA_image_map_tie' + direction + '.png';
	}
    document.getElementById( "map_img").src = image_map;

    // direction: nne=0, sne=1, nse=2, sse=3, ssw=4, nsw=5, snw=6,nnw=7, bullseye=8
    // heading: away, closing
    var maneuver;
    var selection = "<p>";
    selection += "at " + DIRECTION[direction] + " o'clock</p>";
    document.getElementById('selection').innerHTML = selection;

    // Select the maneuver randomly from appropriate ship table
    maneuver = pick( SHIP.closing[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "closing_num" ).innerHTML = formatted.num;
    document.getElementById( "closing_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.away[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "away_num" ).innerHTML = formatted.num;
    document.getElementById( "away_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.far[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "far_num" ).innerHTML = formatted.num;
    document.getElementById( "far_img" ).innerHTML = formatted.img;

    maneuver = pick( SHIP.stressed[direction] );
    formatted = format_maneuver( SHIP, maneuver );
    document.getElementById( "stressed_num" ).innerHTML = formatted.num;
    document.getElementById( "stressed_img" ).innerHTML = formatted.img;
}


function reroll( direction, ship )
{
	image_map = 'img/FGA_image_map.png'
    document.getElementById( "map_img").src = image_map;
	document.getElementById( "flee-text" ).innerHTML = format_flee( ship );
	if( ship.name == "TIE/ph Phantom" )
	{
		document.getElementById('system-text').innerHTML = format_system( ship );
	}
}

/* function unblink()
{
    //change map image back to regular image map on mouse release (needed for reroll blink)
    image_map = 'img/FGA_image_map.png';
    document.getElementById( "map_img").src = image_map;
    return;
} */