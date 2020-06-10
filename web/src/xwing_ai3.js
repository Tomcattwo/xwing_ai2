// *************************************************************************************
// X-Wing Miniatures AI for Heroes of the Aturi Cluster (HotAC) 2nd Edition - Javascript
// Version: 3.0.0
// *************************************************************************************
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

var DIRECTION = [ "1-2", "2-3", "3-4", "4-6", "6-8", "8-9", "9-10", "10-11", "Bullseye" ];

// HEADING
var AWAY = "R2 Opening/R3";            // Heading away
var CLOSING = "R1/R2 Closing";        // Closing
var FAR = "R4+";			          // Far
var STRESSED = "AI Stressed";          // Stressed

//STATS (New for HotAC AI only)
var stats = "";

//SYSTEM PHASE (New for HotAC AI only)
var system = "";
var DECLOAK = [ "2L", "2R", "2F" ];

//TARGETS (New for HotAC AI only)
var targets = "";

//SPECIAL MANEUVERS (New for HotAC AI only)
var fullthrottle = "";

// ACTIONS

var actions = "";
var lockTest;
var evadeTest;

// ACTIONS TEXT
var BARREL_ROLL_TEXT1 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc';
var BARREL_ROLL_TEXT2 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to get a shot';
var BARREL_ROLL_TEXT3 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc and still get a shot';
var BARREL_ROLL_TEXT4 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> Only if Target has <u>already</u> moved: <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> to avoid Target\'s arc';

var BARREL_ROLL2LOCK_D_TEXT1 = '<img src="img/action_barrelroll2lock-red_small.png" alt="Barrel Roll to Target-Lock (Difficult)" title="Barrel Roll to Target-Lock (Difficult)"> to avoid target arc and still get a shot';
var BARREL_ROLL2LOCK_D_TEXT2 = '<img src="img/action_barrelroll2lock-red_small.png" alt="Barrel Roll to Target-Lock (Difficult)" title="Barrel Roll to Target-Lock (Difficult)"> to get a shot';

var BARREL_ROLL_OR_BOOST_TEXT1 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get a shot';
var BARREL_ROLL_OR_BOOST_TEXT2 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to get within Range 1 and get a shot';
var BARREL_ROLL_OR_BOOST_TEXT3 = '<img src="img/action_barrelroll_small.png" alt="Barrel Roll" title="Barrel Roll"> or <img src="img/action_boost_small.png" alt="Boost" title="Boost"> to avoid Target\'s arc';

var B2BR_BR2B_D_TEXT1 = '<img src="img/action_boost2barrel_roll-red_small.png" alt="Boost to Barrel Roll (Difficult)" title="Boost to Barrel Roll (Difficult)"> or <img src="img/action_barrelroll2boost-red_small.png" alt="Barrel Roll to Boost (Difficult)" title="Barrel Roll to Boost (Difficult)"> to get a shot';
var B2BR_BR2B_D_TEXT2 = '<img src="img/action_boost2barrel_roll-red_small.png" alt="Boost to Barrel Roll (Difficult)" title="Boost to Barrel Roll (Difficult)"> or <img src="img/action_barrelroll2boost-red_small.png" alt="Barrel Roll to Boost (Difficult)" title="Barrel Roll to Boost (Difficult)"> to avoid Target\'s arc';

var CLOAKING_TEXT = '<img src="img/action_cloak_small.png" alt="Cloak" title="Cloak"> if you don\'t have a shot';

var COORDINATE_TEXT = '<img src="img/action_coordinate_small.png" alt="Coordinate" title="Coordinate"> nearest friendly ship';

var EVADE_TEXT1 = '<img src="img/action_evade_small.png" alt="Evade" title="Evade">';
var EVADE_TEXT2 = '<img src="img/action_evade_small.png" alt="Evade" title="Evade"> if ship is not already evading';

var FOCUS_TEXT1 = '<img src="img/action_focus_small.png" alt="Focus" title="Focus">';
var FOCUS_TEXT2 = '<img src="img/action_focus_small.png" alt="Focus" title="Focus"> if you have a shot';

var FOCUS2BARREL_ROLL_D_TEXT1 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to avoid Target arc and still get a shot';
var FOCUS2BARREL_ROLL_D_TEXT2 = '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to get a shot';

var F2B_F2BR_D_TEXT1 = '<img src="img/action_focus2boost-red_small.png" alt="Focus to Boost (Difficult)" title="Focus to Boost (Difficult)"> or <img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> to avoid Target\'s arc and still get a shot';
var F2B_F2BR_D_TEXT2 = '<img src="img/action_focus2barrel_roll-red_small.png" alt="Focus to Barrel Roll (Difficult)" title="Focus to Barrel Roll (Difficult)"> or <img src="img/action_focus2boost-red_small.png" alt="Focus to Boost (Difficult)" title="Focus to Boost (Difficult)"> to get a shot';

var JAM_D_TEXT = '<img src="img/action_jam-red_small.png" alt="Jam (Difficult)" title="Jam (Difficult)"> against Target';

var RELOAD_D_TEXT = '<img src="img/action_reload-red_small.png" alt="Reload (Difficult)" title="Reload (Difficult)"> if no charges or equipped <img src="img/token_missile_small.png" alt="Missile" title="Missile"> or <img src="img/token_torpedo_small.png" alt="Torpedo" title="Torpedo">';

var REINFORCE_TEXT = '<img src="img/action_reinforce_small.png" alt="Reinforce" title="Reinforce"> (priority: <img src="img/reinforce_front_small.png" alt="Reinforce Front" title="Reinforce Front"> <img src="img/reinforce_rear_small.png" alt="Reinforce Rear" title="Reinforce Rear"> ) if within arc of 2 or more Enemies in that full arc';

var ROTATE_ARC_TEXT = '<img src="img/action_rotatearc_small.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to get a shot if Target is neither in your <img src="img/in_arc.png" alt="Forward Arc" title="Forward Arc"> nor your <img src="img/turret_arc_small.png" alt="Turret Arc" title="Turret Arc">';

var TARGET_LOCK_TEXT1 =  '<img src="img/tgt_movement-red_small.png" alt="Only if Target has not yet moved" title="Only if Target has not yet moved"> <img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock"> if not in Enemies\' arcs';
var TARGET_LOCK_TEXT2 =  '<img src="img/tgt_movement-green_small.png" alt="Only if Target has already moved" title="Only if Target has already moved"> <img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock">';
var TARGET_LOCK_TEXT3 =  '<img src="img/action_targetlock_small.png" alt="Target-Lock" title="Target Lock">';


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
			    data += '    <div title="Empire">'
			    data += '       <input type="radio" onclick="display_ship_choice(\'Empire\', \'' + funct + '\')" hidden >'
			    data += '       <img class="faction_button" src="img/empire.png" />'
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

    // image
    ship = '<img src="' + SHIP.image + '" alt="' + SHIP.name + '"><br>' + SHIP.name + "<br>" + "Faction: " + SHIP.faction;

    stats =  format_stats( SHIP );

    system =  format_system( SHIP );

    targets =  format_targets( SHIP );

    fullthrottle = format_fullthrottle( SHIP );

    actions =  format_actions( SHIP );

    attacks =  format_attacks( SHIP );

    end =  format_end( SHIP );

    // Tables (closing, away, etc.)
    var tables = "";
    tables += gen_maneuver_table( CLOSING, SHIP.closing )
    tables += gen_maneuver_table( AWAY, SHIP.away )
    tables += gen_maneuver_table( FAR, SHIP.far )
    tables += gen_maneuver_table( STRESSED, SHIP.stressed )

    document.getElementById( "version" ).innerHTML = "XWing HotAC AI2 Version: " + VERSION;
    document.getElementById( "ship").innerHTML = ship;
    document.getElementById( "stats" ).innerHTML = stats;
    document.getElementById( "system" ).innerHTML = system;
    document.getElementById( "targets" ).innerHTML = targets;
    document.getElementById( "fullthrottle" ).innerHTML = fullthrottle;
    document.getElementById( "actions" ).innerHTML = actions;
    document.getElementById( "attacks" ).innerHTML = attacks;
    document.getElementById( "end" ).innerHTML = end;
    document.getElementById( "table" ).innerHTML = tables;
}


function set_version()
{
    document.getElementById('version').innerHTML = "XWing HotAC AI2 Version: " + VERSION;
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


    // Update index html elements for the selected ship
   	document.getElementById('ship_image').src = SHIP.image;
   	document.getElementById('ship_name').innerHTML = "<br>" + SHIP.name + "<br>" + "Faction: " + SHIP.faction + "<br>";



    // Set faction specific target images
    for( var idx=0; idx < 8; idx++ ) {
       var target = "target" + idx
       var image  = "img/" + SHIP.faction + idx + ".png"
       document.getElementById(target).src = image;
    }

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
	var myStats = statsText( ship.name );
	return stats;
}


function statsText( value, index, array )
{
	switch( value )
	{
    	case "VT-49 Decimator":
    	{
        	stats += "<p>" + "<img src='img/2-orange.png' alt='Initiative: 2' title='Initiative: 2'>   Pilot: Patrol Leader"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_decimator.png' alt='Stats: 3/0/12/4' title='Stats: 3/0/12/4'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_decimator.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
        	break;
    	}
    	case "Lambda Shuttle":
    	{
        	stats += "<p>" + "<img src='img/1-orange.png' alt='Initiative: 1' title='Initiative: 1'>   Pilot: OMICRON Group Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_lambda.png' alt='Stats: 3/2/1/6/4' title='Stats: 3/2/1/6/4'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_lambda.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
        	break;
    	}
    	case "TIE/ln Fighter":
    	{
        	stats += "<p>" + "<img src='img/1-orange.png' alt='Initiative: 1' title='Initiative: 1'>   Pilot: Academy Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_tie.png' alt='Stats: 2/3/3/0' title='Stats: 2/3/3/0'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_tie.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
        	break;
    	}
    	case "TIE Advanced x1":
    	{
        	stats += "<p>" + "<img src='img/2-orange.png' alt='Initiative: 2' title='Initiative: 2'>   Pilot: TEMPEST Squadron Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_advanced.png' alt='Stats: 2/3/3/2' title='Stats: 2/3/3/2'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_advanced.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
         	stats += "<p>" + "Ship Ability: ADVANCED TARGETING COMPUTER" + "</p>";
         	stats += "<p style=\"text-align: left\">" + "While you perform a primary attack against a defender you have locked, roll 1 additional die and change 1 <img src='img/damage.png' alt='Damage' title='Damage'> result into a <img src='img/critical_small.png' alt='Critical Damage' title='Critical Damage'> result." + "</p>";

        	break;
    	}
    	case "TIE/sa Bomber":
    	{
        	stats += "<p>" + "<img src='img/2-orange.png' alt='Initiative: 2' title='Initiative: 2'>   Pilot: SCIMITAR Squadron Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_bomber.png' alt='Stats: 2/2/6/0' title='Stats: 2/2/6/0'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_bomber.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
         	stats += "<p>" + "Ship Ability: NIMBLE BOMBER" + "</p>";
			stats += "<p style=\"text-align: left\">" + "If you would drop a device using a <img src='img/forward-white_small.png' alt='Forward Template' title='Forward Template'>, you may use a <img src='img/bank-left-white_small.png' alt='Bank Left Template' title='Bank Left Template'> or <img src='img/bank-right-white_small.png' alt='Bank Right Template' title='Bank Right Template'> of the same speed instead." + "</p>";
        	break;
    	}
    	case "TIE/D Defender":
    	{
        	stats += "<p>" + "<img src='img/1-orange.png' alt='Initiative: 1' title='Initiative: 1'>   Pilot: DELTA Squadron Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_defender.png' alt='Stats: 3/3/3/4' title='Stats: 3/3/3/4'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_defender.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
         	stats += "<p>" + "Ship Ability: FULL THROTTLE" + "</p>";
         	stats += "<p style=\"text-align: left\">" + "After you fully execute a speed 3-5 maneuver, you may perform an <img src='img/action_evade_small.png' alt='Evade' title='Evade'> action." + "</p>";
        	break;
    	}
    	case "TIE Interceptor":
    	{
        	stats += "<p>" + "<img src='img/1-orange.png' alt='Initiative: 1' title='Initiative: 1'>   Pilot: ALPHA Squadron Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_interceptor.png' alt='Stats: 3/3/3/0' title='Stats: 3/3/3/0'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_interceptor.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
         	stats += "<p>" + "Ship Ability: AUTOTHRUSTERS" + "</p>";
         	stats += "<p style=\"text-align: left\">" + "After you perform an action, you may perform a red <img src='img/action_barrelroll-red_small.png' alt='Barrel Roll (Difficult)' title='Barrel Roll (Difficult)'> or a red <img src='img/action_boost-red_small.png' alt='Boost (Difficult)' title='Boost (Difficult)'>action." + "</p>";

        	break;
    	}
    	case "TIE/ph Phantom":
    	{
        	stats += "<p>" + "<img src='img/3-orange.png' alt='Initiative: 3' title='Initiative: 3'>   Pilot: IMDAAR Test Pilot"  + "</p>";
        	stats += "<p>" + "<img src='img/stats_phantom.png' alt='Stats: 3/2/3/2' title='Stats: 3/2/3/2'>"  + "</p>";
         	stats += "<p>" + "<img src='img/icons_phantom.png' alt='Action Icons' title='Action Icons'>"  + "</p>";
         	stats += "<p>" + "Ship Ability: STYGIUM ARRAY" + "</p>";
         	stats += "<p style=\"text-align: left\">" + "After you decloak, you may perform" + "<br>" + "an <img src='img/action_evade_small.png' alt='Evade' title='Evade'> action." + "</p>";
         	stats += "<p style=\"text-align: left\">" + "At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token." + "</p>";
        	break;
    	}
	    default:
	    {
			stats += "<p>" + "No Stats Found" + "</p>";
		}
	}
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
        	targets += "<li>" + "Nearest enemy in <img src='img/in_arc.png' alt='firing arc' title='Firing Arc'> " + "with LOWER initiative" + "</li>";
        	break;
    	}
       	case 'ARC':
       	{
           	targets += "<li>" + "Nearest enemy in <img src='img/in_arc.png' alt='firing arc' title='Firing Arc'>" + "</li>";
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


function format_actions( ship )
{
	actions = "<ol>" + "<li>" + "Resolve <img src='img/critical_small.png' alt='Criticals' title='Criticals'>" + "</li>";
	if( ship.name == "VT-49 Decimator" )
	{
		lockTest = 1;
	}
	else if( ship.name == "TIE Advanced x1" )
	{
		lockTest = 1;
	}
	else if( ship.name == "TIE/sa Bomber" )
	{
		lockTest = 2;
	}
	else
	{
		lockTest = 0;
	}
	if( ship.name == "TIE/D Defender" )
	{
		evadeTest = 1;
	}
	else if( ship.name == "TIE/ph Phantom" )
	{
		evadeTest = 1;
	}
	else
	{
		evadeTest = 0;
	}
	ship.actions.forEach(actionText);
	actions += "</ol>";
	if( ship.name == "VT-49 Decimator" )
	{
		actions += "   <img src='img/tgt_movement-red_small.png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'> = only if Target has " + "<u>" + "not" + "</u>" + " " + "<u>" + "yet" + "</u>" + " moved" + "<br>";
		actions += "   <img src='img/tgt_movement-green_small.png' alt='Only if Target has already moved' title='Only if Target has already moved'> = only if Target has " + "<u>" + "already" + "</u>" + " moved" + "<p>" + "</p>";
	}
	else if( ship.name == "TIE Advanced x1" )
	{
		actions += "   <img src='img/tgt_movement-red_small.png' alt='Only if Target has not yet moved' title='Only if Target has not yet moved'> = only if Target has " + "<u>" + "not" + "</u>" + " " + "<u>" + "yet" + "</u>" + " moved" + "<br>";
		actions += "   <img src='img/tgt_movement-green_small.png' alt='Only if Target has already moved' title='Only if Target has already moved'> = only if Target has " + "<u>" + "already" + "</u>" + " moved" + "<p>" + "</p>";
	}
	else if( ship.name == "TIE/D Defender" )
	{
		actions += "   <img src='img/tgt_movement-green_small.png' alt='Only if Target has already moved' title='Only if Target has already moved'> = only if Target has " + "<u>" + "already" + "</u>" + " moved" + "<p>" + "</p>";
	}
	else
	{
		actions += " ";
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
    	case 'BARREL_ROLL_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_AVOID_SHOT':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT3 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_MOVED_AVOID':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT4 + "</li>";
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
		    if( evadeTest == 0 )
		        {
		            actions += "<li>" + EVADE_TEXT1 + "</li>";
		            break;
		        }
		        else
		        {
		            actions += "<li>" + EVADE_TEXT2 + "</li>";
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
		case 'FOCUS2BARREL_ROLL_D':
	    {
			actions += "<li>" + FOCUS2BARREL_ROLL_D_TEXT1 + "</li>";
			actions += "<li>" + FOCUS2BARREL_ROLL_D_TEXT2 + "</li>";
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
	        actions += "<li>" + RELOAD_D_TEXT + "</li>";
	        break;
	    }
		case 'REINFORCE':
	    {
	        actions += "<li>" + REINFORCE_TEXT + "</li>";
	        break;
	    }
 	    case 'ROTATE_ARC':
 	    {
 	        actions += "<li>" + ROTATE_ARC_TEXT + "</li>";
 	        break;
 	    }
		case 'TARGET_LOCK':
    	{
		    if( lockTest == 0 )
		        {
		            actions += "<li>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
		        else if( lockTest == 1 )
		        {
		            actions += "<li>" + TARGET_LOCK_TEXT1 + "</li>";
		            actions += "<li>" + TARGET_LOCK_TEXT2 + "</li>";
		            break;
		        }
		        else
		        {
		            actions += "<li>" + TARGET_LOCK_TEXT3 + "</li>";
		            break;
		        }
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
       	case 'NEAREST_LAM':
       	{
           	attacks += "<li>" + "<b>" + "<img src='img/attack_target.png' alt='attack target' title='Attack Target'> Attack Target" + "</b>" + "</li>";
        	attacks += "<ol>" + "<li>" + "Ship that is locked (priority: <img src='img/cannon.png' alt='Cannon' title='Cannon'>, <img src='img/in_arc_red.png' alt='Forward Arc' title='Forward Arc'>, <img src='img/in_rear_arc_red.png' alt='Rear Arc' title='Rear Arc'> )" + "</li>" + "</ol>" + "<br>";
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
    set_ship(1);
    display_ship_choice( "Empire", "set_ship" );
}


function load_ships()
{
    display_ship(1);
    display_ship_choice( "Empire", "display_ship" );
}


function movement( direction )
{
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
