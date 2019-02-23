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

/**
 * Guild Alliance NPC
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
    //cm.sendOk("The Guild Alliance is currently under development.");
    //cm.dispose();
    partymembers = cm.getPartyMembers();
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("您好！我叫#b蕾那麗#k。\r\n#b#L0#請您告訴我公會聯盟是什麼？#l\r\n#L1#要成立公會聯盟的話應該怎麼做？#l\r\n#L2#我想成立公會聯盟。#l\r\n#L3#我想增加公會聯盟的公會數量。#l\r\n#L4#我想解散公會聯盟。#l");
    } else if (status == 1) {
        choice = selection;
        if (selection == 0) {
            cm.sendNext("多個公會結合在壹起成立的組織被稱為公會聯盟。我負責管理公會聯盟的有關事務。");
            cm.dispose();
        } else if (selection == 1) {
            cm.sendNext("想要成立公會聯盟的話，必須有2名公會會長組成組隊。其中隊長會成為公會聯盟的盟主。");
        } else if (selection == 2) {
            if (!cm.isLeader()) {
                cm.sendNext("只有公會會長可以創建公會聯盟。"); //Not real text
                cm.dispose();
            } else if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2) {
                cm.sendNext("必須要有2名公會會長組成組隊。"); //Not real text
                cm.dispose();
            } else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
                cm.sendOk("You cannot form a Guild Union until you own a guild");
                cm.dispose();
            } else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
                cm.sendOk("Your party member does not seem to own a guild.");
                cm.dispose();
            } else {
                var gs = cm.getGuild(cm.getPlayer().getGuildId());
                var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
                if (gs.getAllianceId() > 0) {
                    cm.sendOk("You cannot form a Guild Union if you are already affiliated with a different Union.");
                    cm.dispose();
                } else if (gs2.getAllianceId() > 0) {
                    cm.sendOk("Your party member is already affiliated with a guild union.");
                    cm.dispose();
                } else if (cm.partyMembersInMap() < 2) {
                    cm.sendOk("Get your other party member on the same map please.");
                    cm.dispose();
                } else
                    cm.sendYesNo("Oh, are you interested in forming a Guild Union?");
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("To increase the capacity, you will need to pay 10,000,000 mesos. Are you sure you wish to proceed?"); //ExpandGuild Text
            } else {
                cm.sendOk("只有公會聯盟盟主可以增加公會數量。");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
                cm.sendYesNo("妳確定要解散妳的公會聯盟？");
            } else {
                cm.sendOk("只有公會聯盟盟主可以解散公會聯盟。");
                cm.dispose();
            }
        }
    } else if (status == 2) {
        if (choice == 1) {
            cm.sendNext("2名公會會長組隊之後，需要5000萬金幣。這是創建公會聯盟所必需的手續費。");
        } else if (choice == 3) {
            cm.sendGetText("請輸入想要創建公會聯盟的名稱。(英文最多12字，中文最多6字)");
        } else if (choice == 3) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.sendOk("妳不能解散不存在的公會聯盟。");
                cm.dispose();
            } else {
                if (cm.addCapacityToAlliance()) {
                    cm.sendOk("You have added capacity to your alliance.");
                } else {
                    cm.sendOk("Your guild union has too much capacity already. 5 is the maximum.");
                }
                cm.dispose();
            }
        } else if (choice == 4) {
            if (cm.getPlayer().getGuildId() <= 0) {
                cm.sendOk("妳不能解散不存在的公會聯盟。");
                cm.dispose();
            } else {
                if (cm.disbandAlliance()) {
                    cm.sendOk("Your Guild Union has been disbanded");
                } else {
                    cm.sendOk("An error occured when disbanding the Guild Union");
                }
                cm.dispose();
            }
        }
    } else if (status == 3) {
        if (choice == 1) {
            cm.sendNext("另外還有壹個！如果已經加入其他公會聯盟的話，就無法建立新的公會聯盟！");
            cm.dispose();
        } else {
            guildName = cm.getText();
            cm.sendYesNo("妳確定使用 #b" + guildName + "#k 做為公會聯盟的名稱嗎？");
        }
    } else if (status == 4) {
        if (!cm.createAlliance(guildName)) {
            cm.sendNext("妳不能使用這個名稱"); //Not real text
            status = 1;
            choice = 2;
        } else
            cm.sendOk("妳已成功建立了公會聯盟。");
        cm.dispose();
    }
}