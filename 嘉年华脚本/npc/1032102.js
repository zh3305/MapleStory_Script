/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：宠物复活 进化
 *  @Author Kent 
 */

var status = 0;
var pet = null;
var theitems = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("好吧,那么下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("我可以帮助你复活宠物，进化宠物. #b\r\n#L0#进化宠物龙.#l\r\n#L1#进化罗伯.#l\r\n#L2#复活我的宠物.#l#k");
        } else if (status == 1) {
            if (selection == 0) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000028 && currentpet.getPetItemId() < 5000034 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("你不满足要求。 你需要 #i5380000##t5380000#, \n\r和其中一个\n\r #d#i5000029##t5000029##k,\n\r #g#i5000030##t5000030##k,\n\r #b#i5000032##t5000032##k,\n\r #e#i5000033##t5000033##n \n\r 且需要15级以上. 请确认.");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var rand = 0;
                    var after = id;
                    while (after == id) {
                        rand = 1 + Math.floor(Math.random() * 10);
                        if (rand >= 1 && rand <= 3) {
                            after = 5000030;
                        } else if (rand >= 4 && rand <= 6) {
                            after = 5000032;
                        } else if (rand >= 7) {
                            after = 5000033;
                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的龙已经进化啦!! 进化前是 #i" + id + "##t" + id + "#, 现在它是 #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }
            } else if (selection == 1) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000047 && currentpet.getPetItemId() < 5000054 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("你不满足要求。 你需要 #i5380000##t5380000#,\n\r 和其中一个\n\r #g#i5000048##t5000048##k, \n\r#r#i5000049##t5000049##k,\n\r #b#i5000050##t5000050##k,\n\r #d#i5000051##t5000051##k,\n\r #d#i5000052##t5000052##k,\n\r #e#i5000053##t5000053##n \n\r且需要15级以上. 请确认。");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var rand = 0;
                    var after = id;
                    while (after == id) {
                        rand = 1 + Math.floor(Math.random() * 9);
                        if (rand >= 1 && rand <= 2) {
                            after = 5000049;
                        } else if (rand >= 3 && rand <= 4) {
                            after = 5000050;
                        } else if (rand >= 5 && rand <= 6) {
                            after = 5000051;
                        } else if (rand >= 7 && rand <= 8) {
                            after = 5000052;
                        } else if (rand == 9) {
                            after = 5000053;
                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的罗伯已经进化啦!! 进化前是#i" + id + "##t" + id + "#, 现在它是 #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }
            } else if (selection == 2) { //revive	
                var inv = cm.getInventory(5);
                var pets = cm.getPlayer().getPets(); //includes non-summon
                for (var i = 0; i <= inv.getSlotLimit(); i++) {
                    var it = inv.getItem(i);
                    if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() >= -1 && it.getExpiration() < cm.getCurrentTime()) {
                        theitems.push(it);
                    }
                }
                if (theitems.length <= 0) {
                    cm.sendOk("你没有失去魔法的宠物.");
                    cm.dispose();
                } else if (!cm.haveItem(5180000, 1)) {
                    cm.sendOk("你需要 #v5180000# #t5180000#.");
                    cm.dispose();
                } else {
                    var selStr = "你想将什么宠物恢复到原来状态呢？请选择想要复原的宠物……";
                    cm.sendPetRevive(selStr, theitems);
                }
            }
        } else if (status == 2) {
            if (theitems.length <= 0) {
                cm.sendOk("你没有过期的宠物.");
            } else {
                cm.getPlayer().getPetByUniqueId(selection).setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.updatePet(cm.getPlayer().getPetByUniqueId(selection));
                cm.sendOk("由于专属生命水的神奇力量，宠物又恢复了生机。");
                cm.gainItem(5180000, -1);
            }
            cm.dispose();
        }
    }
}
