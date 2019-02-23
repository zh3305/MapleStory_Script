var status = 0;
var pet = null;
var theitems = Array();
var dingdan = Array("5000424", //羊咩咩
					"5000405", //绿色蜥蜴
					"5000406", //红色蜥蜴
					"5000407", //橙色蜥蜴
					"5000296", //恶魔小红
					"5000297", //恶魔小蓝
					"5000298", //恶魔小紫
					"5000433", //小尾羊
					"5000434", //小美羊
					"5000435",  //小肥羊
					"5000290", //天使提尔
					"5000291", //天使米尔
					"5000292"  //天使拉尔
					);
var superpet;
var jueding;
var eee1 = "#fUI/Basic/CheckBox3/0#";
var eee2 = "#fUI/Basic/CheckBox3/0#";

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
            cm.sendSimple("亲爱的#r #h ##k ，您好！欢迎来到#rChina冒险岛#k!!\r\n我是宠物魔法师 「新人指导」，只要你准备任意一只15级以上的 #b#i5000000##z5000000##k 或者是 #b#i5000001##z5000001##k，再加上一颗美丽的 #g#i5380000##z5380000##k，我就可以帮你完成心愿哦！你的宠物会神化成以下神宠：\r\n#v5000391##v5001006##v5001007##v5001008##v5000393##v5000255##v5000308##v5000307##v5000306##v5000305##v5000304##v5000303##v5000302##v5000301##v5000300##v5000382##v5000191##v5000387##v5000386##v5000385##v5000383##v5000377##v5000376##v5000375##v5000368##v5000367##v5000366##v5000365##v5000354##v5000353##v5000352##v5000371##v5000370##v5000369##v5000358##v5000324##v5000292##v5000291##v5000290##v5000264##v5000289##v5000288##v5000287##v5000285##v5000284##v5000274##v5000268##v5000267##v5000227##v5000345##v5000344##v5000343##v5000342##v5000332##v5000331##v5000330##v5000328##v5000322##v5000321##v5000320##v5000317##v5000282##v5000281##v5000283##v5000277##v5000276##v5000275##v5000273##v5000272##v5000271##v5000270##v5000261##v5000258##v5000257##v5000256##v5000251##v5000250##v5000249##v5000245##v5000244##v5000243##v5000237##v5000230##v5000229##v5000228##v5000225##v5000221##v5000217##v5000216##v5000215##v5000206##v5000205##v5000204##v5000203##v5000095##v5000093##v5000092##v5000091##v5000081##v5000036##v5000065##v5000060##v5000055##v5000296##v5000297##v5000298##b\r\n#L0#神宠的进化#l\r\n#L3#神宠的订单培养#e#r[#n#gNew#e#r]#n#k\r\n#L1##b宠物的复活#l#k");
        } else if (status == 1) {
            if (selection == 0) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 4999999 && currentpet.getPetItemId() < 5000002 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("您的条件不符。 您必须要有一颗美丽的 #g#i5380000##z5380000##k, 以及任意一只15级以上的 #b#i5000000##z5000000##k 或者是 #b#i5000001##z5000001##k。才可以进行宠物的神化!!!\r\n\r\n#r（注意：进化时，必须将宠物放出来，否则系统检测不到。）");
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
                        rand = Math.floor(Math.random() * 109);
                        /*if (rand == 1) {
                            after = 5000402; 
                        } else*/ 
						if (rand == 2) {
                            after = 5000391; 
                        } else if (rand == 3) {
                            after = 5001006; 
                        } else if (rand == 4) {
                            after = 5001007; 
                        } else if (rand == 5) {
                            after = 5001008; 
						} else if (rand == 6) {
                            after = 5000393; 
						} else if (rand == 7) {
                            after = 5000255; 
						} else if (rand == 8) {
                            after = 5000308; 
						} else if (rand == 9) {
                            after = 5000307; 
						} else if (rand == 10) {
                            after = 5000306; 
						} else if (rand == 11) {
                            after = 5000305; 
						} else if (rand == 12) {
                            after = 5000304; 
						} else if (rand == 13) {
                            after = 5000303; 
						} else if (rand == 14) {
                            after = 5000302; 
						} else if (rand == 15) {
                            after = 5000301; 
						} else if (rand == 16) {
                            after = 5000300; 
						} else if (rand == 17) {
                            after = 5000382; 
						} else if (rand == 18) {
                            after = 5000191; 
						} else if (rand == 19) {
                            after = 5000387; 
						} else if (rand == 20) {
                            after = 5000386; 
						} else if (rand == 21) {
                            after = 5000385; 
						} else if (rand == 22) {
                            after = 5000383; 
						} else if (rand == 23) {
                            after = 5000377; 
						} else if (rand == 24) {
                            after = 5000376; 
						} else if (rand == 25) {
                            after = 5000375; 
						} else if (rand == 26) {
                            after = 5000368; 
						} else if (rand == 27) {
                            after = 5000367; 
						} else if (rand == 28) {
                            after = 5000366; 
						} else if (rand == 29) {
                            after = 5000365; 
						} else if (rand == 30) {
                            after = 5000354; 
						} else if (rand == 31) {
                            after = 5000353; 
						} else if (rand == 32) {
                            after = 5000352; 
						} else if (rand == 33) {
                            after = 5000371; 
						} else if (rand == 34) {
                            after = 5000370; 
						} else if (rand == 35) {
                            after = 5000369; 
						} else if (rand == 36) {
                            after = 5000358; 
						} else if (rand == 37) {
                            after = 5000324; 
						} else if (rand == 38) {
                            after = 5000292; 
						} else if (rand == 39) {
                            after = 5000291; 
						} else if (rand == 40) {
                            after = 5000290; 
						} else if (rand == 41) {
                            after = 5000264; 
						} else if (rand == 42) {
                            after = 5000289; 
						} else if (rand == 43) {
                            after = 5000288; 
						} else if (rand == 44) {
                            after = 5000287; 
						} else if (rand == 45) {
                            after = 5000285; 
						} else if (rand == 46) {
                            after = 5000284; 
						} else if (rand == 47) {
                            after = 5000328; 
						} else if (rand == 48) {
                            after = 5000268; 
						} else if (rand == 49) {
                            after = 5000267; 
						} else if (rand == 50) {
                            after = 5000227; 
						} else if (rand == 51) {
                            after = 5000345; 
						} else if (rand == 52) {
                            after = 5000344; 
						} else if (rand == 53) {
                            after = 5000343; 
						} else if (rand == 54) {
                            after = 5000342; 
						} else if (rand == 55) {
                            after = 5000332; 
						} else if (rand == 56) {
                            after = 5000331; 
						} else if (rand == 57) {
                            after = 5000317; 
						} else if (rand == 58) {
                            after = 5000283; 
						} else if (rand == 59) {
                            after = 5000282; 
						} else if (rand == 60) {
                            after = 5000281; 
						} else if (rand == 61) {
                            after = 5000277; 
						} else if (rand == 62) {
                            after = 5000276; 
						} else if (rand == 63) {
                            after = 5000275; 
						} else if (rand == 64) {
                            after = 5000274; 
						} else if (rand == 65) {
                            after = 5000273; 
						} else if (rand == 66) {
                            after = 5000272; 
						} else if (rand == 67) {
                            after = 5000271; 
						} else if (rand == 68) {
                            after = 5000270; 
						} else if (rand == 69) {
                            after = 5000258; 
						} else if (rand == 70) {
                            after = 5000257; 
						} else if (rand == 71) {
                            after = 5000256; 
						} else if (rand == 72) {
                            after = 5000261; 
						} else if (rand == 73) {
                            after = 5000251; 
						} else if (rand == 74) {
                            after = 5000250; 
						} else if (rand == 75) {
                            after = 5000249; 
						} else if (rand == 76) {
                            after = 5000245; 
						} else if (rand == 77) {
                            after = 5000244; 
						} else if (rand == 78) {
                            after = 5000243; 
						} else if (rand == 79) {
                            after = 5000237; 
						} else if (rand == 80) {
                            after = 5000228; 
						} else if (rand == 81) {
                            after = 5000229;  
						} else if (rand == 82) {
                            after = 5000230;  
						} else if (rand == 83) {
                            after = 5000225;  
						} else if (rand == 84) {
                            after = 5000221;  
						} else if (rand == 85) {
                            after = 5000217;  
						} else if (rand == 86) {
                            after = 5000216;  
						} else if (rand == 87) {
                            after = 5000215;  
						} else if (rand == 88) {
                            after = 5000206;  
						} else if (rand == 89) {
                            after = 5000205;  
						} else if (rand == 90) {
                            after = 5000204;  
						} else if (rand == 91) {
                            after = 5000203;  
						} else if (rand == 92) {
                            after = 5000095;  
						} else if (rand == 93) {
                            after = 5000091;  
						} else if (rand == 94) {
                            after = 5000092;  
						} else if (rand == 95) {
                            after = 5000093;  
						} else if (rand == 96) {
                            after = 5000081;  
						} else if (rand == 97) {
                            after = 5000065;  
						} else if (rand == 98) {
                            after = 5000036;  
						} else if (rand == 99) {
                            after = 5000060; 
						} else if (rand == 100) {
                            after = 5000055; 
						} else if (rand == 101) {
                            after = 5000330; 
						} else if (rand == 102) {
                            after = 5000322; 
						} else if (rand == 103) {
                            after = 5000321; 
						} else if (rand == 104) {
                            after = 5000320; 
                        } else if (rand == 105) {
						    after = 5000296;
						} else if (rand == 106) {
						    after = 5000297;
						} else if (rand == 107) {
						    after = 5000298;
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
                    cm.sendOk("恭喜，你的#i" + id + "##z" + id + "#已经成功神化成#i" + after + "##z" + after + "#了!");
                    cm.worldSpouseMessage(0x11,"「宠物神化」：玩家 "+ cm.getChar().getName() +" 将他的宠物成功神化成了神宠，大家祝贺他（她）吧！");
					cm.dispose();
                }
			} else if (selection == 3) {
			        if(cm.haveItem(2430868)){
					eee2 = "#fUI/Basic/CheckBox3/1#";
					}
					if(cm.haveItem(5000000) || cm.haveItem(5000001)){
					eee1 = "#fUI/Basic/CheckBox3/1#";
					}
			        var selStr = "#g#e培养条件#k#n：1.拥有一只1级的 #i5000000# 或是 #i5000001# "+ eee1 +"\r\n           2.拥有一张 #v2430868# "+ eee2 +"\r\n如果满足以上条件，那么你就可以挑选要培养的宠物了，能培养的宠物有：";
                    for (var i = 0; i < dingdan.length; i++) {
                        selStr += "\r\n#L" + i + "##v" + dingdan[i] + "##z" + dingdan[i] + "##l";
                    }
                    cm.sendSimple(selStr);
					superpet = 2;
            } else if (selection == 1) { //复活宠物	
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
					superpet = 1;
                }
            }
        } else if (status == 2) {
		    if (superpet == 1){
            if (theitems.length <= 0) {
                cm.sendOk("没有可需要复活的宠物.");
				cm.dispose();
            } else if (!cm.haveItem(5180000, 1)) {
                cm.sendOk("您好像还没有 #b#i5180000# #t5180000##k 吧.");
				cm.dispose();
            } else {
                theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.getPlayer().fakeRelog();
                cm.sendOk("恭喜您复活宠物成功，宠物使用时间延长45天。");
                cm.gainItem(5180000, -1);
				cm.dispose();
            }
			} else if (superpet == 2){
			var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 4999999 && currentpet.getPetItemId() < 5000002 && currentpet.getLevel() >= 1) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(2430868, 1)) {
                    cm.sendOk("您的条件不符。 您必须要有 #g#i2430868##z2430868##k, 以及任意一只1级以上的 #b#i5000000##z5000000##k 或者是 #b#i5000001##z5000001##k。才可以进行宠物的神化!!!\r\n\r\n#r（注意：进化时，必须将宠物放出来，否则系统检测不到。）");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var after = id;
                        after = dingdan[selection]; 
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(2430868, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("恭喜，你的#i" + id + "##z" + id + "#已经成功神化成#i" + after + "##z" + after + "#了!");
                    cm.worldMessage(0x19,"「宠物神化」" + " : " + "：玩家 "+ cm.getChar().getName() +" 定制的神宠诞生了，大家祝贺他（她）吧！");
					cm.dispose();
                }
			}
        }
    }
}
