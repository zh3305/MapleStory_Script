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

/* Dolphin in Aquaroad - Monster Riding Teacher
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple ("我是海豚出租车! 今天天气真好,你需要我为你服务么?\r\n#L0#学习骑术#l\r\n#L1#学习群宠#l\r\n#L2#去百草堂#l");
		} else if (status == 1) {
			if (selection == 0)
			{
				if(cm.getLevel() >= 70) {
					cm.teachSkill(1004, 1, 0);
					cm.sendOk("你已经学会了骑术技能.");
				} else {
					cm.sendOk("您的等级还不够学习骑术技能!请继续修炼吧!");
				}
				cm.dispose();
			} 
			else 	if (selection == 1)
			{
				if(cm.getLevel() >= 1) {
					cm.teachSkill(8, 1, 0);
					cm.sendOk("你已经学会了群宠技能.");
				} else {
					cm.sendOk("您的等级还不够学习群宠技能!请继续修炼吧!");
				}
				cm.dispose();
			} 

			 else {
				cm.sendNext ("好的, 下次见.祝你顺利");
			}
		} else if (status == 2) {
			cm.warp(251000100, 0);
			cm.dispose();
		}
	}
}	