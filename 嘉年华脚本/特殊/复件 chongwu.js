var status = 0;
var pet = null;
var theitems = Array();
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("好的，下次再见。");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			if(cm.getSpace(5) < 2){
			       cm.sendOk("#b特殊#k包袱空间不足#r2#k个,请整理后在使用此功能");
				cm.dispose();
				return;
			}else{
            cm.sendSimple("我这里可以制作宠物！不定期删除和更新最新宠物。 #n\r\n\r\n#L0##r" + aaa + "免费获得绝版神宠。#k#l\r\n#L1##b" + aaa + "免费获得宠物机器人.#l\r\n#L2##b" + aaa + "复活我宝贝可爱的宠物#k#l\r\n\r\n#d注意:您的宠物需要15级\r\n#d请不要把宠物放进商场里不然会有可能取不回来哦#b\r\n在商城取不下来的宠物请选择他右键删除");
}
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
                    cm.sendOk("您的条件不符。 您必须要有 #i5380000##t5380000#, 以及任意一只15级以上的 #d#i5000029##t5000029##k 。\r\n\r\n您将会随机获得#r【由于绝版宠物较多一些稀有宠物不公布在】#k#r#i5000228##t5000228##k,#r#i5000229##t5000229##k,#r#i5000230##t5000230##k,#r#i5000237##t5000237##k,#r#i5000243##t5000243##k,#r#i5000244##t5000244##k,#r#i5000245##t5000245##k,#r#i5000284##t5000284##k,#r#i5000247##t5000247##k,#r#i5000285##t5000285##k,#r#i5000252##t5000252##k,#r#i5000288##t5000288##k,#r#i5000289##t5000289##k,#r#i5000290##t5000290##k,#r#i5000291##t5000291##k,#r#i5000292##t5000292##k,#r#i5000293##t5000293##k,#r#i5000294##t5000294##k,#r#i5000295##t5000295##k,#r#i5000324##t5000324##k,#r#i5000296##t5000296##k,#r#i5000297##t5000297##k,#r#i5000298##t5000298##k,#r#i5000369##t5000369##k,#r#i5000370##t5000370##k,#r#i5000371##t5000371##k,#r#i5000352##t5000352##k,#r#i5000353##t5000353##k,#r#i5000354##t5000354##k,#r#i5000375##t5000375##k,#r#i5000376##t5000376##k,#r#i5000377##t5000377##k,#r#i5000191##t5000191##k,#r#i5000382##t5000382##k,#r#i5000345##t5000345##k#r#i5000366##t5000366##k,#r#i5000367##t5000367##k,#r#i5000365##t5000365##k\r\n#e设置在15级或更高。请回来当你这样做的.#b#l");
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
                     rand = 1 + Math.floor(Math.random() * 98);
                       if (rand >= 1 && rand <= 2) {
                            after = 5000096;
                        } else if (rand >= 3 && rand <= 4) {
                            after = 5000026;
                        } else if (rand >= 5 && rand <= 6) {
                            after = 5000137;
						} else if (rand >= 7 && rand <= 8) {
                            after = 5000103;
						} else if (rand >= 9 && rand <= 10) {
                            after = 5000038;
						} else if (rand >= 11 && rand <= 12) {
                            after = 5000128;
						} else if (rand >= 13 && rand <= 14) {
                            after = 5000204;
						} else if (rand >= 15 && rand <= 16) {
                            after = 5000205;
						} else if (rand >= 17 && rand <= 18) {
                            after = 5000208;
						} else if (rand >= 19 && rand <= 20) {
                            after = 5000209;
						} else if (rand >= 21 && rand <= 22) {
                            after = 5000206;
						} else if (rand >= 23 && rand <= 24) {
                            after = 5000215;
						} else if (rand >= 25 && rand <= 26) {
                            after = 5000228;
						} else if (rand >= 27 && rand <= 28) {
                            after = 5000229;
						} else if (rand >= 29 && rand <= 30) {
                            after = 5000230;
						} else if (rand >= 31 && rand <= 32) {
                            after = 5000237;
						} else if (rand >= 33 && rand <= 34) {
                            after = 5000243;
						} else if (rand >= 35 && rand <= 36) {
                            after = 5000244;
						} else if (rand >= 37 && rand <= 38) {
                            after = 5000284;
						} else if (rand >= 39 && rand <= 40) {
                            after = 5000247;
						} else if (rand >= 41 && rand <= 42) {
                            after = 5000285;
						} else if (rand >= 43 && rand <= 44) {
                            after = 5000252;
						} else if (rand >= 45 && rand <= 46) {
                            after = 5000253;
						} else if (rand >= 47 && rand <= 48) {
                            after = 5000288;
						} else if (rand >= 49 && rand <= 50) {
                            after = 5000289;
						} else if (rand >= 51 && rand <= 52) {
                            after = 5000290;
						} else if (rand >= 53 && rand <= 54) {
                            after = 5000291;
						} else if (rand >= 55 && rand <= 56) {
                            after = 5000293;
						} else if (rand >= 57 && rand <= 58) {
                            after = 5000294;
						} else if (rand >= 59 && rand <= 60) {
                            after = 5000295;
						} else if (rand >= 61 && rand <= 62) {
                            after = 5000324;
						} else if (rand >= 62 && rand <= 63) {
                            after = 5000296;
						} else if (rand >= 64 && rand <= 65) {
                            after = 5000297;
						} else if (rand >= 66 && rand <= 67) {
                            after = 5000298;
						} else if (rand >= 68 && rand <= 69) {
                            after = 5000369;
						} else if (rand >= 70 && rand <= 71) {
                            after = 5000370;
						} else if (rand >= 72 && rand <= 73) {
                            after = 5000371;
						} else if (rand >= 74 && rand <= 75) {
                            after = 5000352;
						} else if (rand >= 76 && rand <= 77) {
                            after = 5000353;
						} else if (rand >= 78 && rand <= 79) {
                            after = 5000354;
						} else if (rand >= 80 && rand <= 81) {
                            after = 5000375;
						} else if (rand >= 82 && rand <= 83) {
                            after = 5000376;
						} else if (rand >= 84 && rand <= 85) {
                            after = 5000377;
						} else if (rand >= 86 && rand <= 87) {
                            after = 5000191;
						} else if (rand >= 88 && rand <= 89) {
                            after = 5000382;
						} else if (rand >= 90 && rand <= 91) {
                            after = 5000345;
						} else if (rand >= 92 && rand <= 93) {
                            after = 5000366;
						} else if (rand >= 94 && rand <= 95) {
                            after = 5000367;
						} else if (rand >= 96 && rand <= 97) {
                            after = 5000365;
						} else if (rand == 98) {
                            after = 5000292;
                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的宠物#i" + id + "##t" + id + "#,已经进化成#i" + after + "##t" + after + "#!");
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
                    cm.sendOk("您的条件不符。 您必须要有 #i5380000##t5380000#,  以及任意一只15级以上的 #g#i5000048##t5000048##k 。\r\n\r\n您将会随机获得:\r\n\r\n#r#i5000049##t5000049##k, #b#i5000050##t5000050##k, #d#i5000051##t5000051##k, #d#i5000052##t5000052##k, 和 #e#i5000053##t5000053##n");
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
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的宠物#i" + id + "##t" + id + "#,已经进化成 #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }
            } else if (selection == 2) { //复活宠物	
                var inv = cm.getInventory(5);
                var pets = cm.getPlayer().getPets(); //includes non-summon
                for (var i = 0; i <= inv.getSlotLimit(); i++) {
                    var it = inv.getItem(i);
                    if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() > 0 && it.getExpiration() < cm.getCurrentTime()) {
                        theitems.push(it);
                    }
                }
                if (theitems.length <= 0) {
                    cm.sendOk("没有可需要复活的宠物.");
                    cm.dispose();
                } else {
                    var selStr = "请选择需要复活的宠物，注意：必须要有#b#i5180000# #t5180000##k我才能帮您复活宠物。#b\r\n";
                    for (var i = 0; i < theitems.length; i++) {
                        selStr += "\r\n#L" + i + "##i" + theitems[i].getItemId() + "##t" + theitems[i].getItemId() + "##l";
                    }
                    cm.sendSimple(selStr);
                }
            }
        } else if (status == 2) {
            if (theitems.length <= 0) {
                cm.sendOk("没有可需要复活的宠物.");
            } else if (!cm.haveItem(5180000, 1)) {
                cm.sendOk("您好像还没有 #b#i5180000# #t5180000##k 吧.");
            } else {
                theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.getPlayer().fakeRelog();
                cm.sendOk("恭喜您复活宠物成功，宠物使用时间延长45天。");
                cm.gainItem(5180000, -1);
            }
            cm.dispose();
    }
}
}
