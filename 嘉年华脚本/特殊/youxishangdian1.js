/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
======>OdinMS NX Npc<======
by [GM]Fatality of FusionMS
*/
function start() {
	var text ="#r你好,我这里有一些装备出售,你可以看下哟#k\r\n";
	text +="#L1#70级法师装备#l #L2#70级飞侠装备#l\r\n#L3#70级战士装备#l #L4#70级弓手装备#l\r\n";
	text +="#L13#70级海盗装备#l\r\n\r\n ---------------------------------------------\r\n";
	//text +="#L5#80-90级法师装备#l #L6#80-90级飞侠装备#l\r\n";
	//text +="#L7#80-90级战士装备#l #L8#80-90级弓手装备#l\r\n#L14#80-90级海盗装备#l\r\n\r\n";
	//text +="---------------------------------------------\r\n";
	//text +="#L9#100-110级法师装备#l #L10#100-110级飞侠装备#l\r\n#L11#100-110级战士装备#l #L12#100-110级弓手装备#l\r\n";
	//text +="#L15#100-110级海盗装备#l\r\n\r\n ---------------------------------------------\r\n";
	text +="#L16#110级全职业武器#l";
	text +="#L17#幻影职业武器#l";
	cm.sendSimple (text);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {
		cm.openShop (5001);
	} else if (selection == 2) {
		cm.openShop (5002);
	} else if (selection == 3) {
		cm.openShop (5003);
	} else if (selection == 4) {
		cm.openShop (5004);
    	} else if (selection == 5) {
		cm.openShop (5007);
    	} else if (selection == 6) {
		cm.openShop (5008);
    	} else if (selection == 7) {
		cm.openShop (5009);
    	} else if (selection == 8) {
		cm.openShop (4001);
   	} else if (selection == 9) {
		cm.openShop (4002);
    	} else if (selection == 10) {
		cm.openShop (4003);
    	} else if (selection == 11) {
		cm.openShop (4004);
    	} else if (selection == 12) {
		cm.openShop (4005);
	} else if (selection == 13) {
		cm.openShop (3001);
	} else if (selection == 14) {
		cm.openShop (3002);
	} else if (selection == 15) {
		cm.openShop (3003);
	} else if (selection == 16) {
		cm.openShop (6000);
	} else if (selection == 17) {
		cm.openShop (6001);
    	} else {
		cm.dispose();
	}
}
	