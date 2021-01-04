// ***************************************************************************
// X-Wing Miniatures AI 2nd Edition - Javascript
// Version: 2.0.3
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

var actions = "";
var evadeTest;

// ACTIONS TEXT
var BARREL_ROLL_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc.';
var BARREL_ROLL_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc.';

var BARREL_ROLL_D_TEXT1 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put target into AI ship\'s firing arc.';
var BARREL_ROLL_D_TEXT2 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put the AI ship out of enemy ship firing arc.';

var BARREL_ROLL2CALC_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';
var BARREL_ROLL2CALC_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';

var BARREL_ROLL2EVADE_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If AI is in a firing arc, choose <img src="img/action_evade.png" alt="Evade" title="Evade">.';
var BARREL_ROLL2EVADE_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_evade.png" alt="Evade" title="Evade">.';

var BARREL_ROLL2EVADE_D_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If AI is in a firing arc, choose <img src="img/action_evade-red.png" alt="Evade (Difficult)" title="Evade (Difficult)">.';
var BARREL_ROLL2EVADE_D_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_evade-red.png" alt="Evade (Difficult)" title="Evade (Difficult)">.';

var BARREL_ROLL_D2EVADE_D_TEXT1 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put target into AI ship\'s firing arc. OPTIONAL: If AI is in a firing arc, choose <img src="img/action_evade-red.png" alt="Evade (Difficult)" title="Evade (Difficult)">.';
var BARREL_ROLL_D2EVADE_D_TEXT2 = 'Choose <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_evade-red.png" alt="Evade (Difficult)" title="Evade (Difficult)">.';

var BARREL_ROLL2FOCUS_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus.png" alt="Focus" title="Focus">.';
var BARREL_ROLL2FOCUS_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus.png" alt="Focus" title="Focus">.';

var BARREL_ROLL2FOCUS_D_TEXT1 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus-red.png" alt="Focus (Difficult)" title="Focus (Difficult)">.';
var BARREL_ROLL2FOCUS_D_TEXT2 = 'Choose <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus-red.png" alt="Focus (Difficult)" title="Focus (Difficult)">.';

var BARREL_ROLL2LOCK_TEXT = 'OPTIONAL: If target is in AI firing arc, obtain <img src="img/action_targetlock.png" alt="Target-Lock" title="Target-Lock"> on targeted ship.<br>';
BARREL_ROLL2LOCK_TEXT += 'Clear <img src="img/action_targetlock.png" alt="Target-Lock" title="Target-Lock"> at end of turn.';

var BARREL_ROLL2LOCK_D_TEXT = 'OPTIONAL: If target is in AI firing arc, obtain <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> on targeted ship.<br>';
BARREL_ROLL2LOCK_D_TEXT += 'Clear <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> at end of turn.';

var BARREL_ROLL2ROTATE_TEXT = 'OPTIONAL: If no target in AI Turret Arc, <img src="img/action_rotatearc.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to target an enemy ship.<br>';
var BARREL_ROLL2ROTATE_D_TEXT = 'OPTIONAL: If no target in AI Turret Arc, <img src="img/action_rotatearc-red.png" alt="Rotate Turret Arc (Difficult)" title="Rotate Turret Arc (Difficult)"> to target an enemy ship.';

var BOOST_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put target into AI ship\'s firing arc.';
var BOOST_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put the AI ship out of enemy ship firing arc.';

var BOOST_D_TEXT1 = 'Choose <img src="img/action_boost-red.png" alt="Boost (Difficult)" title="Boost (Difficult)"> if this will put target into AI ship\'s firing arc.';
var BOOST_D_TEXT2 = 'Choose <img src="img/action_boost-red.png" alt="Boost (Difficult)" title="Boost (Difficult)"> if this will put the AI ship out of enemy ship firing arc.';

var BOOST2CALC_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put target into AI ship\'s firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';
var BOOST2CALC_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';

var BOOST2FOCUS_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus.png" alt="Focus" title="Focus">.';
var BOOST2FOCUS_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus.png" alt="Focus" title="Focus">.';

var BOOST2FOCUS_D_TEXT1 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put target into AI ship\'s firing arc. OPTIONAL: If target is in a firing arc, choose <img src="img/action_focus-red.png" alt="Focus (Difficult)" title="Focus (Difficult)">.';
var BOOST2FOCUS_D_TEXT2 = 'Choose <img src="img/action_boost.png" alt="Boost" title="Boost"> if this will put the AI ship out of enemy ship firing arc. OPTIONAL: choose <img src="img/action_focus-red.png" alt="Focus (Difficult)" title="Focus (Difficult)">.';

var BOOST2LOCK_TEXT = 'OPTIONAL: If target in AI firing arc, obtain <img src="img/action_targetlock.png" alt="Target-Lock" title="Target-Lock"> on targeted ship.<br>';
BOOST2LOCK_TEXT += 'Clear <img src="img/action_targetlock.png" alt="Target-Lock" title="Target-Lock"> at end of turn.';

var BOOST2LOCK_D_TEXT = 'OPTIONAL: If target in AI firing arc, obtain <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> on targeted ship.<br>';
BOOST2LOCK_D_TEXT += 'Clear <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> at end of turn.';

var CALCULATE_TEXT = 'Always use <img src="img/action_calculate.png" alt="Calculate" title="Calculate"> if there are no more advantageous actions to take. Gain 1 <img src="img/action_calculate.png" alt="Calculate" title="Calculate"> token.';

var CLOAKING_TEXT = 'Cloak/Decloak <img src="img/action_cloak.png" alt="Cloak/Decloak" title="Cloak/Decloak">';

var COORDINATE_TEXT = '<img src="img/action_coordinate.png" alt="Coordinate" title="Coordinate"> the action of a friendly ship at range 1-2.';
var COORDINATE_D_TEXT = '<img src="img/action_coordinate-red.png" alt="Coordinate (Difficult)" title="Coordinate (Difficult)"> the action of a friendly ship at range 1-2.';

var EVADE_TEXT = 'Else choose <img src="img/action_evade.png" alt="Evade" title="Evade">';
var EVADE_D_TEXT = 'Else choose <img src="img/action_evade-red.png" alt="Evade (Difficult)" title="Evade (Difficult)">';
var EVADE_F_TEXT = 'Else spend a <img src="img/token_force.png" alt="Force token" title="Force token"> to choose <img src="img/action_evade-purple.png" alt="Evade (using The Force)" title="Evade (using The Force)">.';

var EVADE2ROTATE_TEXT = 'If AI ship is in an enemy firing arc, choose <img src="img/action_evade.png" alt="Evade" title="Evade">, then, if no target in AI Turret Arc, <img src="img/action_rotatearc.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to target an enemy ship.';
var EVADE2ROTATE_D_TEXT = 'If AI ship is in an enemy firing arc, choose <img src="img/action_evade.png" alt="Evade" title="Evade"> then, if no target in AI Turret Arc, <img src="img/action_rotatearc-red.png" alt="Rotate Turret Arc (Difficult)" title="Rotate Turret Arc (Difficult)"> to target an enemy ship.';

var FOCUS_TEXT1 = 'If target is in a firing arc, choose <img src="img/action_focus.png" alt="Focus" title="Focus">';
var FOCUS_TEXT2 = 'Always use <img src="img/action_focus.png" alt="Focus" title="Focus"> unless there are other more advantageous AI actions to take.';

var FOCUS2BARREL_ROLL_TEXT1 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> if target is in a firing arc.';
var FOCUS2BARREL_ROLL_TEXT2 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put target into AI ship\'s firing arc.';
var FOCUS2BARREL_ROLL_TEXT3 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_barrelroll.png" alt="Barrel Roll" title="Barrel Roll"> if this will put the AI ship out of enemy ship firing arc ';

var FOCUS2BARREL_ROLL_D_TEXT1 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> if target is in a firing arc.';
var FOCUS2BARREL_ROLL_D_TEXT2 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put target into AI ship\'s firing arc.';
var FOCUS2BARREL_ROLL_D_TEXT3 = 'Choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_barrelroll-red.png" alt="Barrel Roll (Difficult)" title="Barrel Roll (Difficult)"> if this will put the AI ship out of enemy ship firing arc ';

var FOCUS2ROTATE_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_rotatearc.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to target an enemy ship.';
var FOCUS2ROTATE_D_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_focus.png" alt="Focus" title="Focus"> then <img src="img/action_rotatearc-red.png" alt="Rotate Turret Arc (Difficult)" title="Rotate Turret Arc (Difficult)"> to target an enemy ship.';

var JAM_TEXT = 'Give a <img src="img/action_jam.png" alt="Jam" title="Jam"> token to an enemy ship at range 1.';
var JAM_D_TEXT = 'Give a <img src="img/action_jam-red.png" alt="Jam (Difficult)" title="Jam (Difficult)"> token to an enemy ship at range 1.';

var RELOAD_TEXT = '<img src="img/action_reload.png" alt="Reload" title="Reload"> to recover 1 <img src="img/token_charge.png" alt="Charge token" title="Charge token"> on a <img src="img/token_torpedo.png" alt="Torpedo" title="Torpedo">, <img src="img/token_missile.png" alt="Missile" title="Missile"> or <img src="img/token_mine.png" alt="Mine" title="Mine"> upgrade.';
var RELOAD_D_TEXT = '<img src="img/action_reload-red.png" alt="Reload (Difficult)" title="Reload (Difficult)"> to recover 1 <img src="img/token_charge.png" alt="Charge token" title="Charge token"> on a <img src="img/token_torpedo.png" alt="Torpedo" title="Torpedo">, <img src="img/token_missile.png" alt="Missile" title="Missile"> or <img src="img/token_mine.png" alt="Mine" title="Mine"> upgrade.';

var RELOAD2CALC_TEXT = 'Choose <img src="img/action_reload.png" alt="Reload" title="Reload"> to recover 1 <img src="img/token_charge.png" alt="Charge token" title="Charge token"> on a <img src="img/token_torpedo.png" alt="Torpedo" title="Torpedo">, <img src="img/token_missile.png" alt="Missile" title="Missile"> or <img src="img/token_mine.png" alt="Mine" title="Mine"> upgrade. OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';

var REINFORCE_TEXT = 'If AI ship is in an enemy firing arc, gain 1 fore or aft <img src="img/action_reinforce.png" alt="Reinforce" title="Reinforce"> token.'; // TODO
var REINFORCE_D_TEXT = 'If AI ship is in an enemy firing arc, gain 1 fore or aft <img src="img/action_reinforce-red.png" alt="Reinforce (Difficult)" title="Reinforce (Difficult)"> token.';

var ROTATE_ARC_TEXT = 'If no target in AI Turret Arc, <img src="img/action_rotatearc.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to target an enemy ship.';
var ROTATE_ARC_D_TEXT = 'If no target in AI Turret Arc, <img src="img/action_rotatearc-red.png" alt="Rotate Turret Arc (Difficult)" title="Rotate Turret Arc (Difficult)"> to target an enemy ship.';
var ROTATE2CALC_D_TEXT = 'OPTIONAL: Gain 1 <img src="img/action_calculate-red.png" alt="Calculate (Difficult)" title="Calculate (Difficult)"> token.';

var SLAM_TEXT1 = 'Choose <img src="img/action_slam.png" alt="SLAM" title="SLAM"> if this will put target into AI ship\'s firing arc.';
var SLAM_TEXT2 = 'Choose <img src="img/action_slam.png" alt="SLAM" title="SLAM"> if this will put the AI ship out of enemy ship firing arc.'

var TARGET_LOCK_TEXT =  'Obtain <img src="img/action_targetlock.png" alt="Target-Lock" title="Target Lock"> on targeted ship as a free action.<br>';
TARGET_LOCK_TEXT += 'Clear <img src="img/action_targetlock.png" alt="Target-Lock" title="Target Lock"> at end of turn.';

var TARGET_LOCK_D_TEXT =  'Obtain <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> on targeted ship.<br>';
TARGET_LOCK_D_TEXT += 'Clear <img src="img/action_targetlock-red.png" alt="Target-Lock (Difficult)" title="Target-Lock (Difficult)"> at end of turn.';

var LOCK2ROTATE_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_targetlock.png" alt="Target-Lock" title="Target Lock"> then <img src="img/action_rotatearc.png" alt="Rotate Turret Arc" title="Rotate Turret Arc"> to target an enemy ship.';
var LOCK2ROTATE_D_TEXT = 'If no target in AI Turret Arc, choose <img src="img/action_targetlock.png" alt="Target-Lock" title="Target Lock"> then <img src="img/action_rotatearc-red.png" alt="Rotate Turret Arc (Difficult)" title="Rotate Turret Arc (Difficult)"> to target an enemy ship.';

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

    data += '<br>\n';

	data += '<label>\n';
	data += '    <div title="Resistance">'
	data += '       <input type="radio" onclick="display_ship_choice(\'Resistance\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/resistance.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<label>\n';
	data += '    <div title="First Order">'
	data += '       <input type="radio" onclick="display_ship_choice(\'First Order\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/1storder.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<br>\n';

	data += '<label>\n';
	data += '    <div title="Republic">'
	data += '       <input type="radio" onclick="display_ship_choice(\'Republic\', \'' + funct + '\')" hidden >'
	data += '        <img class="faction_button" src="img/republic.png" />'
	data += '    </div>'
    data += '</label>\n';

    data += '<label>\n';
	data += '    <div title="Seperatist">'
	data += '       <input type="radio" onclick="display_ship_choice(\'Seperatist\', \'' + funct + '\')" hidden >'
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

    document.getElementById( "version" ).innerHTML = "XWingAI2 Version: " + VERSION;
    document.getElementById( "ship").innerHTML = ship;
    document.getElementById( "actions" ).innerHTML = actions;
    document.getElementById( "table" ).innerHTML = tables;
}


function set_version()
{
    document.getElementById('version').innerHTML = "XWingAI2 Version: " + VERSION;
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
    else if ( maneuverInList( maneuver, ship.force ) )
    {
        num = "<span style=color:purple>" + maneuver.num + "</span>";
        img = '<img src="img/' + maneuver.name + '-purple.png">';
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
	actions = "<ol>";
	if( ship.actions.indexOf("EVADE") != -1 )
	{
		evadeTest = 1;
	}
	else if( ship.actions.indexOf("EVADE_D") != -1 )
	{
		evadeTest = 1;
	}
	else if( ship.actions.indexOf("EVADE_F") != -1 )
	{
		evadeTest = 1;
	}
	else if( ship.actions.indexOf("EVADE2ROTATE") != -1 )
	{
		evadeTest = 1;
	}
	else if( ship.actions.indexOf("EVADE2ROTATE_D") != -1 )
	{
		evadeTest = 1;
	}
	else
	{
		evadeTest = 0;
	}
	ship.actions.forEach(actionText);
	actions += "</ol>";
	return actions;
}

function actionText( value, index, array )
{
	switch( value )
	{
    	case 'BARREL_ROLL':
    	{
        	actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
        	actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
        	break;
    	}
    	case 'BARREL_ROLL_D':
    	{
        	actions += "<li>" + BARREL_ROLL_D_TEXT1 + "</li>";
        	actions += "<li>" + BARREL_ROLL_D_TEXT2 + "</li>";
        	break;
    	}
		case 'BARREL_ROLL2CALC':
	    {
			actions += "<li>" + BARREL_ROLL2CALC_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2CALC_TEXT2 + "</li>";
			break;
	    }
		case 'BARREL_ROLL2EVADE':
		{
			actions += "<li>" + BARREL_ROLL2EVADE_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2EVADE_TEXT2 + "</li>";
			break;
	    }
		case 'BARREL_ROLL2EVADE_D':
		{
			actions += "<li>" + BARREL_ROLL2EVADE_D_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2EVADE_D_TEXT2 + "</li>";
			break;
	    }
		case 'BARREL_ROLL_D2EVADE_D':
		{
			actions += "<li>" + BARREL_ROLL_D2EVADE_D_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_D2EVADE_D_TEXT2 + "</li>";
			break;
	    }
	    case 'BARREL_ROLL2FOCUS':
	    {
			actions += "<li>" + BARREL_ROLL2FOCUS_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2FOCUS_TEXT2 + "</li>";
			break;
		}
	    case 'BARREL_ROLL2FOCUS_D':
	    {
			actions += "<li>" + BARREL_ROLL2FOCUS_D_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL2FOCUS_D_TEXT2 + "</li>";
			break;
		}
		case 'BARREL_ROLL2LOCK':
		{
			actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
			actions += "<li>" + BARREL_ROLL2LOCK_TEXT + "</li>";
			break;
	    }
		case 'BARREL_ROLL2LOCK_D':
		{
			actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
			actions += "<li>" + BARREL_ROLL2LOCK_D_TEXT + "</li>";
			break;
	    }
	    case 'BARREL_ROLL2ROTATE':
	    {
			actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
			actions += "<li>" + BARREL_ROLL2ROTATE_TEXT + "</li>";
			break;
		}
	    case 'BARREL_ROLL2ROTATE_D':
	    {
			actions += "<li>" + BARREL_ROLL_TEXT1 + "</li>";
			actions += "<li>" + BARREL_ROLL_TEXT2 + "</li>";
			actions += "<li>" + BARREL_ROLL2ROTATE_D_TEXT + "</li>";
			break;
		}
		case 'BOOST':
		{
			actions += "<li>" + BOOST_TEXT1 + "</li>";
		    actions += "<li>" + BOOST_TEXT2 + "</li>";
		    break;
    	}
 		case 'BOOST_D':
 		{
 			actions += "<li>" + BOOST_D_TEXT1 + "</li>";
 		    actions += "<li>" + BOOST_D_TEXT2 + "</li>";
 		    break;
     	}
	    case 'BOOST2CALC':
	    {
			actions += "<li>" + BOOST2CALC_TEXT1 + "</li>";
			actions += "<li>" + BOOST2CALC_TEXT2 + "</li>";
			break;
	    }
	    case 'BOOST2FOCUS':
	    {
			actions += "<li>" + BOOST2FOCUS_TEXT1 + "</li>";
			actions += "<li>" + BOOST2FOCUS_TEXT2 + "</li>";
			break;
	    }
	    case 'BOOST2FOCUS_D':
	    {
			actions += "<li>" + BOOST2FOCUS_D_TEXT1 + "</li>";
			actions += "<li>" + BOOST2FOCUS_D_TEXT2 + "</li>";
			break;
	    }
	    case 'BOOST2LOCK':
	    {
		    actions += "<li>" + BOOST_TEXT1 + "</li>";
		    actions += "<li>" + BOOST_TEXT2 + "</li>";
		    actions += "<li>" + BOOST2LOCK_TEXT + "</li>";
		    break;
 	    }
	    case 'BOOST2LOCK_D':
	    {
		    actions += "<li>" + BOOST_TEXT1 + "</li>";
		    actions += "<li>" + BOOST_TEXT2 + "</li>";
		    actions += "<li>" + BOOST2LOCK_D_TEXT + "</li>";
		    break;
 	    }
    	case 'CALCULATE':
	    {
		    actions += "<li>" + CALCULATE_TEXT + "</li>";
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
	        actions += "<li>" + COORDINATE_D_TEXT + "</li>";
	        break;
	    }
	    case 'EVADE':
	    {
	        actions += "<li>" + EVADE_TEXT + "</li>";
	        break;
 	    }
	    case 'EVADE_D':
	    {
	        actions += "<li>" + EVADE_D_TEXT + "</li>";
	        break;
 	    }
	    case 'EVADE_F':
	    {
	        actions += "<li>" + EVADE_F_TEXT + "</li>";
	        break;
 	    }
	    case 'EVADE2ROTATE':
	    {
			actions += "<li>" + EVADE2ROTATE_TEXT + "</li>";
			break;
		}
	    case 'EVADE2ROTATE_D':
	    {
			actions += "<li>" + EVADE2ROTATE_D_TEXT + "</li>";
			break;
		}
		case 'FOCUS':
		{
		    if( evadeTest == 0 )
		        {
		            actions += "<li>" + FOCUS_TEXT2 + "</li>";
		            break;
		        }
		        else
		        {
		            actions += "<li>" + FOCUS_TEXT1 + "</li>";
		            break;
		        }
    	}
		case 'FOCUS2BARREL_ROLL':
	    {
			actions += "<li>" + FOCUS2BARREL_ROLL_TEXT1 + "</li>";
			actions += "<li>" + FOCUS2BARREL_ROLL_TEXT2 + "</li>";
			actions += "<li>" + FOCUS2BARREL_ROLL_TEXT3 + "</li>";
			break;
	    }
		case 'FOCUS2BARREL_ROLL_D':
	    {
			actions += "<li>" + FOCUS2BARREL_ROLL_D_TEXT1 + "</li>";
			actions += "<li>" + FOCUS2BARREL_ROLL_D_TEXT2 + "</li>";
			actions += "<li>" + FOCUS2BARREL_ROLL_D_TEXT3 + "</li>";
			break;
	    }
 	    case 'FOCUS2ROTATE':
   		{
   	        actions += "<li>" + FOCUS2ROTATE_TEXT + "</li>";
   	        break;
   		}
 	    case 'FOCUS2ROTATE_D':
   		{
   	        actions += "<li>" + FOCUS2ROTATE_D_TEXT + "</li>";
   	        break;
   		}
		case 'JAM':
	    {
	        actions += "<li>" + JAM_TEXT + "</li>";
	        break;
	    }
		case 'JAM_D':
	    {
	        actions += "<li>" + JAM_D_TEXT + "</li>";
	        break;
	    }
		case 'RELOAD':
	    {
	        actions += "<li>" + RELOAD_TEXT + "</li>";
	        break;
	    }
		case 'RELOAD_D':
	    {
	        actions += "<li>" + RELOAD_D_TEXT + "</li>";
	        break;
	    }
	    case 'RELOAD2CALC':
	    {
			actions += "<li>" + RELOAD2CALC_TEXT + "</li>";
			break;
	    }
		case 'REINFORCE':
	    {
	        actions += "<li>" + REINFORCE_TEXT + "</li>";
	        break;
	    }
		case 'REINFORCE_D':
	    {
	        actions += "<li>" + REINFORCE_D_TEXT + "</li>";
	        break;
	    }
 	    case 'ROTATE_ARC':
 	    {
 	        actions += "<li>" + ROTATE_ARC_TEXT + "</li>";
 	        break;
 	    }
 	    case 'ROTATE_ARC_D':
 	    {
 	        actions += "<li>" + ROTATE_ARC_D_TEXT + "</li>";
 	        break;
 	    }
 	    case 'ROTATE2CALC_D':
 	    {
 	        actions += "<li>" + ROTATE_ARC_TEXT + "</li>";
 	        actions += "<li>" + ROTATE2CALC_D_TEXT + "</li>";
 	        break;
 	    }
 		case 'SLAM':
 		{
		    actions += "<li>" + SLAM_TEXT1 + "</li>";
		    actions += "<li>" + SLAM_TEXT2 + "</li>";
		    break;
        }
		case 'TARGET_LOCK':
    	{
		    actions += "<li>" + TARGET_LOCK_TEXT + "</li>";
		    break;
    	}
		case 'TARGET_LOCK_D':
    	{
		    actions += "<li>" + TARGET_LOCK_D_TEXT + "</li>";
		    break;
    	}
   		case 'LOCK2ROTATE':
	    {
	        actions += "<li>" + LOCK2ROTATE_TEXT + "</li>";
	        break;
	    }
   		case 'LOCK2ROTATE_D':
	    {
	        actions += "<li>" + LOCK2ROTATE_D_TEXT + "</li>";
	        break;
	    }
	    default:
	    {
			actions += "<li>" + "No Actions Found" + "</li>";
		}
    }
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
