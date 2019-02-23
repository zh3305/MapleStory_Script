/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*	
	Author: Traitor
	Map(s):	Mu Lung Dojo Entrance
	Desc:   Sends the entrance message or the taunt message from that dojo guy
*/
var messages = Array("想挑战武陵道场…还真有勇气！", "我等你！还有勇气的话，欢迎再来挑战！", "挑战武陵道场的家伙，我一定会让他(她)后悔！！", "想被称呼为失败者吗？欢迎来挑战！");

function start(ms) {
    if (ms.getPlayer().getMap().getId() == 925020000) {
        ms.getPlayer().startMapEffect(messages[Math.floor(Math.random() * messages.length)], 5120024);
    } else {
        ms.getPlayer().resetEnteredScript();
        ms.getPlayer().startMapEffect("哈哈！让我看看你，我不会让你离开的。除非你先打败我！", 5120024);
    }
}
