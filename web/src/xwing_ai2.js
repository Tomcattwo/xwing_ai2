// ***************************************************************************
// X-Wing Miniatures AI 2nd Edition - Javascript

// ****************************************************************************
// Constants

// ENEMY SHIP DIRECTIONS
var DIR_000 = 0;
var DIR_045 = 1;
var DIR_090 = 2;
var DIR_135 = 3;
var DIR_180 = 4;
var DIR_225 = 5;
var DIR_270 = 6;
var DIR_315 = 7;

var DIRECTION = [ "12", "1-2", "3", "4-5", "6", "7-8", "9", "10-11" ];

// HEADING
var AWAY = "Retreating";            // Heading away
var CLOSING = "Closing";            // Closing
var FAR = "Out of Range";           // Far
var STRESSED = "Stressed";          // Stressed

// ACTIONS
var TARGET_LOCK = 0x1;
var BARREL_ROLL = 0x2;
var BOOST       = 0x4;
var FOCUS       = 0x8;
var EVADE       = 0x10;
var CLOAKING    = 0x20;
var SLAM        = 0x40;
var ROTATE_ARC  = 0x80;

var COORDINATE   = 0x1000;
var JAM         = 0x2000;
var RELOAD     = 0x4000;
var REINFORCE   = 0x8000;

var CALCULATE   = 0x100;
var FOCUS2BARREL_ROLL = 0x200;
var BARREL_ROLL2LOCK = 0x400;
var BOOST2LOCK = 0x800;

var BOOST_D      = 0x10000;
var FOCUS2ROTATE = 0x20000;
var LOCK2ROTATE  = 0x40000;
var JAM_D        = 0x80000;

var REINFORCE_D   = 0x100000;
var RELOAD_D      = 0x200000;
var BARREL_ROLL_D = 0x400000;
var COORDINATE_D  = 0x800000;

var BARREL_ROLL2CALC = 0x1000000;
var BARREL_ROLL2FOCUS = 0x2000000;
var BOOST2CALC = 0x4000000;
var BOOST2FOCUS = 0x8000000;

var BARREL_ROLL2EVADE = 0x10000000;
var EVADE_D           = 0x20000000;
var ROTATE_ARC_D      = 0x40000000;
var EVADE_F           = 0x80000000;

var BARREL_ROLL_D2EVADE_D = 0x20400000;



// ACTIONS TEXT
var TARGET_LOCK_TEXT =  'Obtain <img src="img/action_targetlock.png" alt="Target-Lock"> on targeted ship as a free action.<br>';
TARGET_LOCK_TEXT += "Clear Target Lock at end of turn.";

var BARREL_ROLL_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc.';
var BARREL_ROLL_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc.';

var BARREL_ROLL_D_TEXT1 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc.';
var BARREL_ROLL_D_TEXT2 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc.';

var BOOST_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put target into AI ship\'s firing arc.';
var BOOST_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put the AI ship out of enemy ship firing arc.';

var BOOST_D_TEXT1 = 'Choose <img src="img/action_boost-red.png" alt="Boost"> if this will put target into AI ship\'s firing arc.';
var BOOST_D_TEXT2 = 'Choose <img src="img/action_boost-red.png" alt="Boost"> if this will put the AI ship out of enemy ship firing arc.';

var FOCUS_TEXT1 = 'If target is in a firing arc, choose <img src="img/action_focus.png" alt="Focus">';
var FOCUS_TEXT2 = 'Always use <img src="img/action_focus.png" alt="Focus">';

var EVADE_TEXT = 'Else choose <img src="img/action_evade.png" alt="Evade">';
var EVADE_D_TEXT = 'Else choose <img src="img/action_evade-red.png" alt="Evade">';
var EVADE_F_TEXT = 'Else spend a <img src="img/token_force.png" alt="Evade"> to choose <img src="img/action_evade-purple.png" alt="Evade">.';

var CLOAKING_TEXT = 'Cloak/Decloak <img src="img/action_cloak.png" alt="Cloak">';          // TODO

var SLAM_TEXT1 = 'Choose <img src="img/action_slam.png" alt="SLAM"> if this will put target into AI ship\'s firing arc.';
var SLAM_TEXT2 = 'Choose <img src="img/action_slam.png" alt="SLAM"> if this will put the AI ship out of enemy ship firing arc.'

var ROTATE_ARC_TEXT = 'If no target in AI Turret Arc, <img src="img/action_rotatearc.png" alt="Rotate Arc"> to target an enemy ship.'; 	// TODO
var ROTATE_ARC_D_TEXT = 'If no target in AI Turret Arc, <img src="img/action_rotatearc-red.png" alt="Rotate Arc"> to target an enemy ship.';

var COORDINATE_TEXT = '<img src="img/action_coordinate.png" alt="Coordinate"> the action of a friendly ship at range 1-2.';      // TODO
var COORDINATE_D_TEXT = '<img src="img/action_coordinate-red.png" alt="Coordinate"> the action of a friendly ship at range 1-2.';

var JAM_TEXT = 'Give a <img src="img/action_jam.png" alt="jam"> token to an enemy ship at range 1.';                    // TODO
var JAM_D_TEXT = 'Give a <img src="img/action_jam-red.png" alt="jam"> token to an enemy ship at range 1.';

var RELOAD_TEXT = '<img src="img/action_reload.png" alt="Reload"> to recover 1 <img src="img/token_charge.png" alt="charge"> on a <img src="img/token_torpedo.png" alt="torpedo">, <img src="img/token_missile.png" alt="missile"> or <img src="img/token_mine.png" alt="mine"> upgrade.';            // TODO
var RELOAD_D_TEXT = '<img src="img/action_reload-red.png" alt="Reload"> to recover 1 <img src="img/token_charge.png" alt="charge"> on a <img src="img/token_torpedo.png" alt="torpedo">, <img src="img/token_missile.png" alt="missile"> or <img src="img/token_mine.png" alt="mine"> upgrade.';

var REINFORCE_TEXT = 'Gain 1 fore or aft <img src="img/action_reinforce.png" alt="reinforce"> token.'; // TODO
var REINFORCE_D_TEXT = 'Gain 1 fore or aft <img src="img/action_reinforce-red.png" alt="reinforce"> token.';

var CALCULATE_TEXT = 'Gain 1 <img src="img/action_calculate.png" alt="calculate"> token.';

var FOCUS2BARREL_ROLL_TEXT1 = 'Choose <img src="img/action_focus.png" alt="Focus"> if target is in a firing arc.';
var FOCUS2BARREL_ROLL_TEXT2 = 'Choose <img src="img/action_focus.png" alt="Focus"> then <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc.';
var FOCUS2BARREL_ROLL_TEXT3 = 'Choose <img src="img/action_focus.png" alt="Focus"> then <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc ';

var BARREL_ROLL2LOCK_TEXT = 'OPTIONAL: If target is in AI firing arc, obtain <img src="img/action_targetlock-red.png" alt="Target-Lock"> on targeted ship.<br>';
BARREL_ROLL2LOCK_TEXT += "Clear Target Lock at end of turn.";

var BOOST2LOCK_TEXT = 'OPTIONAL: If target in AI firing arc, obtain <img src="img/action_targetlock-red.png" alt="Target-Lock"> on targeted ship.<br>';
BOOST2LOCK_TEXT += "Clear Target Lock at end of turn.";

var FOCUS2ROTATE_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_focus.png" alt="Focus"> then <img src="img/action_rotatearc-red.png" alt="Rotate Arc"> to target an enemy ship.';
var LOCK2ROTATE_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_targetlock.png" alt="Target-Lock"> then <img src="img/action_rotatearc-red.png" alt="Rotate Arc"> to target an enemy ship.';

var BARREL_ROLL2CALC_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="calculate"> token.';
var BARREL_ROLL2CALC_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="calculate"> token.';

var BARREL_ROLL2FOCUS_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus-red.png" alt="Focus">.';
var BARREL_ROLL2FOCUS_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus-red.png" alt="Focus">.';

var BOOST2CALC_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put target into AI ship\'s firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="calculate"> token.';
var BOOST2CALC_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="calculate"> token.';

var BOOST2FOCUS_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus-red.png" alt="Focus">.';
var BOOST2FOCUS_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus-red.png" alt="Focus">.';

var BARREL_ROLL2EVADE_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If AI is in a firing arc, choose <img src="img/action_evade-red.png" alt="Evade">.';
var BARREL_ROLL2EVADE_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_evade-red.png" alt="Evade">.';

var BARREL_ROLL_D2EVADE_D_TEXT1 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If AI is in a firing arc, choose <img src="img/action_evade-red.png" alt="Evade">.';
var BARREL_ROLL_D2EVADE_D_TEXT2 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_evade-red.png" alt="Evade">.';


// SHIPS array and currently selected SHIP (re-defined in separate js file)
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
	data += '       <input type="radio" onclick="display_ship_choice(\'rebel\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/rebel.png" />'
	data += '    </div>'
	data += '</label>\n';

    data += '<label>\n';
    data += '    <div title="Empire">'
    data += '       <input type="radio" onclick="display_ship_choice(\'empire\', \'' + funct + '\')" hidden >'
    data += '       <img class="faction_button" src="img/empire.png" />'
    data += '    </div>'
    data += '</label>\n';

    data += '<br>\n';

    data += '<label>\n';
    data += '    <div title="Scum">'
    data += '       <input type="radio" onclick="display_ship_choice(\'scum\', \'' + funct + '\')" hidden >'
    data += '        <img class="faction_button" src="img/scum.png" />'
    data += '    </div>'
    data += '</label>\n';

    data += '<br>\n';

	data += '<label>\n';
	data += '    <div title="Resistance">'
	data += '       <input type="radio" onclick="display_ship_choice(\'resistance\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/resistance.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<label>\n';
	data += '    <div title="First Order">'
	data += '       <input type="radio" onclick="display_ship_choice(\'1storder\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/1storder.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<br>\n';

	data += '<label>\n';
	data += '    <div title="Republic">'
	data += '       <input type="radio" onclick="display_ship_choice(\'republic\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/republic.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<label>\n';
	data += '    <div title="Seperatist">'
	data += '       <input type="radio" onclick="display_ship_choice(\'seperatist\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/seperatist.png" />'
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

    actions =  format_actions( SHIP );

    // Tables (closing, away, etc.)
    var tables = "";
    tables += gen_maneuver_table( CLOSING, SHIP.closing )
    tables += gen_maneuver_table( AWAY, SHIP.away )
    tables += gen_maneuver_table( FAR, SHIP.far )
    tables += gen_maneuver_table( STRESSED, SHIP.stressed )

    document.getElementById( "version" ).innerHTML = VERSION;
    document.getElementById( "ship").innerHTML = ship;
    document.getElementById( "actions" ).innerHTML = actions;
    document.getElementById( "table" ).innerHTML = tables;
}


function set_version()
{
    document.getElementById('version').innerHTML = VERSION;
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
   	document.getElementById('ship_name').innerHTML = "<br>" + SHIP.name + "<br>" + "Faction: " + SHIP.faction;


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

    document.getElementById('selection').innerHTML = "<p>Press a direction</p>";
    document.getElementById('actions-text').innerHTML = format_actions( SHIP );
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


function format_actions( ship )
{
    var actions = "<ol>";

    if( ship.actions & TARGET_LOCK )
    {
        actions += "<li>" + TARGET_LOCK_TEXT + "</li>";
    }

    if( ship.actions & FOCUS )
    {
        if( ship.actions & EVADE )
        {
            actions += "<li>" + FOCUS_TEXT1 + "</li>";
        }
        else
        {
            actions += "<li>" + FOCUS_TEXT2 + "</li>";
        }
    }

    if( ship.actions & BARREL_ROLL )
    {
        actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
        actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
    }

    if( ship.actions & BOOST )
    {
        actions += "<li>" + BOOST_TEXT1 + "</li>";
        actions += "<li>" + BOOST_TEXT2 + "</li>";
    }

    if( ship.actions & SLAM )
    {
        actions += "<li>" + SLAM_TEXT1 + "</li>";
        actions += "<li>" + SLAM_TEXT2 + "</li>";
    }

    if( ship.actions & FOCUS2BARREL_ROLL )
		    {
		actions += "<li>" + FOCUS2BARREL_ROLL_TEXT1 + "</li>";
		actions += "<li>" + FOCUS2BARREL_ROLL_TEXT2 + "</li>";
		actions += "<li>" + FOCUS2BARREL_ROLL_TEXT3 + "</li>";
    }

    if( ship.actions & BARREL_ROLL2LOCK )
		    {
		actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
		actions += "<li>" + BARREL_ROLL2LOCK_TEXT + "</li>";
		actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
    }

    if( ship.actions & BARREL_ROLL2CALC )
		    {
		actions += "<li>" + BARREL_ROLL2CALC_TEXT1 + "</li>";
		actions += "<li>" + BARREL_ROLL2CALC_TEXT2 + "</li>";
    }

    if( ship.actions & BARREL_ROLL2FOCUS )
			    {
			actions += "<li>" + BARREL_ROLL2FOCUS_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2FOCUS_TEXT2 + "</li>";
    }

    if( ship.actions & BARREL_ROLL2EVADE )
			    {
			actions += "<li>" + BARREL_ROLL2EVADE_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2EVADE_TEXT2 + "</li>";
    }

    if( ship.actions & BOOST2CALC )
			    {
			actions += "<li>" + BOOST2CALC_TEXT1 + "</li>";
			actions += "<li>" + BOOST2CALC_TEXT2 + "</li>";
    }

    if( ship.actions & BOOST2FOCUS )
				    {
				actions += "<li>" + BOOST2FOCUS_TEXT1 + "</li>";
				actions += "<li>" + BOOST2FOCUS_TEXT2 + "</li>";
    }

    if( ship.actions & BOOST2LOCK )
	    {
	    actions += "<li>" + BOOST_TEXT1 + "</li>";
	    actions += "<li>" + BOOST2LOCK_TEXT + "</li>";
	    actions += "<li>" + BOOST_TEXT2 + "</li>";
    }

    if( ship.actions & ROTATE_ARC )
    {
        actions += "<li>" + ROTATE_ARC_TEXT + "</li>";
    }

    if( ship.actions & FOCUS2ROTATE )
    {
        actions += "<li>" + FOCUS2ROTATE_TEXT + "</li>";
    }

    if( ship.actions & LOCK2ROTATE )
    {
        actions += "<li>" + LOCK2ROTATE_TEXT + "</li>";
    }

    if( ship.actions & BARREL_ROLL_D )
    {
        actions += "<li>" + BARREL_ROLL_D_TEXT1 + "</li>";
        actions += "<li>" + BARREL_ROLL_D_TEXT2 + "</li>";
    }

    if( ship.actions & BOOST_D )
    {
        actions += "<li>" + BOOST_D_TEXT1 + "</li>";
        actions += "<li>" + BOOST_D_TEXT2 + "</li>";
    }

    if( ship.actions & ROTATE_ARC_D )
	{
	    actions += "<li>" + ROTATE_ARC_D_TEXT + "</li>";
    }

    if( ship.actions & CALCULATE )
	    {
	    actions += "<li>" + CALCULATE_TEXT + "</li>";
    }

    if( ship.actions & CLOAKING )
    {
        actions += "<li>" + CLOAKING_TEXT + "</li>";
    }

    if( ship.actions & COORDINATE )
    {
        actions += "<li>" + COORDINATE_TEXT + "</li>";
    }

    if( ship.actions & COORDINATE_D )
    {
        actions += "<li>" + COORDINATE_D_TEXT + "</li>";
    }

    if( ship.actions & JAM )
    {
        actions += "<li>" + JAM_TEXT + "</li>";
    }

    if( ship.actions & JAM_D )
    {
        actions += "<li>" + JAM_D_TEXT + "</li>";
    }

    if( ship.actions & RELOAD )
    {
        actions += "<li>" + RELOAD_TEXT + "</li>";
    }

    if( ship.actions & RELOAD_D )
     {
         actions += "<li>" + RELOAD_D_TEXT + "</li>";
    }

    if( ship.actions & REINFORCE )
    {
        actions += "<li>" + REINFORCE_TEXT + "</li>";
    }

    if( ship.actions & REINFORCE_D )
    {
        actions += "<li>" + REINFORCE_D_TEXT + "</li>";
    }

    if( ship.actions & EVADE )
	    {
	        actions += "<li>" + EVADE_TEXT + "</li>";
    }

    if( ship.actions & EVADE_F )
		    {
		        actions += "<li>" + EVADE_F_TEXT + "</li>";
    }

    if( ship.actions & EVADE_D )
	    {
	        actions += "<li>" + EVADE_D_TEXT + "</li>";
    }

    actions += "</ol>";

    return actions;
}


// ****************************************************************************
// Main

function load_index()
{
    set_ship(0);
    display_ship_choice( "rebel", "set_ship" );
}


function load_ships()
{
    display_ship(0);
    display_ship_choice( "rebel", "display_ship" );
}


function movement( direction )
{
    // direction: n=0, ne=1, e=2, se=3, s=4, sw=5, w=6,nw=7
    // heading: away, closing
    var maneuver;
    var selection = "<p>";
    selection += "at " + DIRECTION[direction] + " o'clock</p>";
    document.getElementById('selection').innerHTML = selection;

    // Select the maneuver randonly from appropriate ship table
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
