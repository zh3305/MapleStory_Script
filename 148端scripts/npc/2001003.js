/* RED 1st impact
    Straw Hat Snowman
    Made by Daenerys
*/

function start() {
    cm.sendSimple("Hello! I'm #p2001003#. I can take you to the room where the humongous Christmas tree is! For more information, talk to #b#p2001000##k. Which room will you enter?\r\n#b#L0#The room with the 1st tree#l\r\n#L1#The room with the 2nd tree#l\r\n#L2#The room with the 3rd tree#l\r\n#L3#The room with the 4th tree#l\r\n#L4#The room with the 5th tree#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000011 + selection, 0);
    }
    cm.dispose();
}
