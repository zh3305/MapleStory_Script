var status = 0;
var typed=0;

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
			cm.sendSimple("冒险岛上有人给你传话。\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list1#　　　　#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#d#L1#审判天鹰#l　　　　　　　#L8#粉色扎昆\r\n#L2#审判喷火龙#l　　　　　　#L9#怪物公园\r\n#L3#审判皮亚奴斯#l　　　　　#L10#全民运动会\r\n#L4#审判进阶/熔岩扎昆#l　　 #L11#玩具城组队任务\r\n#L5#审判进阶/暗黑龙王#l　　 #L12#探索未知的冒险岛大陆\r\n#L6#审判狮子王·班累昂\r\n#L7#审判时间宠儿·品克缤");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n栖息在格瑞芬多森林的奇妙的种族。长着独角兽的身体、秃鹫的翅膀和狮子的鼻子。自尊心很强，即使龙族也绝对不会退缩，在被称为龙族的土地的神木村扎下了巢穴。作为拥有很高的智能和名誉的种族，传说会向英雄表示服从。\r\n\r\n- #e推荐等级#n：100级以上\r\n- #e参加人员#n：单人/组队\r\n- #e移动方法#n：神木村森林深处\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4000243# #t4000243#");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\\r\n栖息在喷火龙栖息地的邪恶的龙族的一种。属于高级的龙族，非常聪明，会使用各种魔法。身体方面的能力也很强，拥有坚硬的皮甲和可以熔化钢铁的火焰。虽然体型较小，但是长有翅膀，可以飞行。过去曾经和刺猬族很友好，但是不知道为什么现在变成了敌对关系。\r\n\r\n- #e推荐等级#n：100级以上\r\n- #e参加人员#n：单人/组队\r\n- #e移动方法#n：神木村森林深处\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4000235# #t4000235#");
			} else if (selection == 3) {
				typed=3;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n在水下世界深海的深处，有一个名叫皮亚奴斯的怪物，它虽然被困在岩石中无法动弹，但却变得比以前更加凶暴。去消灭皮亚奴斯吧。\r\n\r\n- #e推荐等级#n：110级以上\r\n- #e参加人员#n：单人/组队\r\n- #e移动方法#n：深海危险洞穴深处\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4000175# #t4000175#");
			} else if (selection == 4) {
				typed=4;
				cm.sendYesNo("在冰峰雪域废矿深处，人们曾经崇拜的邪恶的扎昆树的石像变成了恐怖的对象。必须击退扎昆，拯救地下一族。\r\n\r\n- #e远征队参加资格#n\r\n   1) 普通模式：50级以上\r\n   2) 进阶模式：100级以上\r\n- #e参加人员#n：扎昆远征队、进阶扎昆远征队\r\n- #e移动方法#n：冰峰雪域废矿深处\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4001083# #t4001083#");
			} else if (selection == 5) {
				typed=5;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\\r\n消灭长期盘踞在米纳尔森林中的龙族的背叛者黑暗龙王，拯救九灵龙的蛋。\r\n\r\n- #e远征队参加资格#n\r\n   1) 普通模式：80级以上\r\n   2) 进阶模式：110级以上\r\n- #e参加人员#n：黑暗龙王远征队、进阶黑暗龙王远征队\r\n- #e移动方法#n：危险巢穴下方生命之穴\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4001430# #i4001430#");
			} else if (selection == 6) {
				typed=6;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n为了复仇而将灵魂卖给黑魔法师的男人——狮子王班·雷昂复活了。必须击败班·雷昂！\r\n\r\n-#e 远征队参加资格#n：120级以上\r\n- #e参加人员#n：班·雷昂远征队\r\n- #e移动方法#n：从冰峰雪域到狮子王之城\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4310010# #t4310010#");	
			} else if (selection == 7) {
				typed=7;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n时间神殿过去之路的尽头，怀有邪念的人通过女神的祭坛召唤出了异界的怪物。虽然看上去很好玩，但是却极度危险的怪物——品克缤！去击退品克缤吧。\r\n\r\n-#e 远征队参加资格#n：120级以上\r\n- #e参加人员#n：品克缤远征队\r\n- #e移动方法#n：从过去之路尽头到神殿废墟\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4032002# #t4032002#");
			} else if (selection == 8) {
				typed=8;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n这里是OS4...重复,这里是OS4听到了吗？我怀疑这对讲机到底管不管用。两小时过去了，而且它...喂，听到了吗？嘿！冒险家！你和BOSS怪物战斗过吗？我们一直劲力于扎昆克隆实验。对亏惊人的OS4技术，你可以无限次的拿扎昆当你的沙包，只要你想！\r\n\r\n- #e远征队参加资格#n：120级以上\r\n- #e参加人员#n：粉色扎昆远征队\r\n- #e移动方法#n：副本传送\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i2028091# #t2028091#");
			} else if (selection == 9) {
				typed=9;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n#b怪物公园#k是什么？呵呵，就是可以见到我休彼德蔓在冒险岛各地搜集到的特殊的怪物的地方。外貌……虽然都一样。但是消灭它们之后，你就知道有什么不同了，呵呵。你也知道，我一向重视和平和团结。为了让大家在一起享受快乐，我把怪物公园内的副本全部改成了#b组队游戏区域#k。虽然一个人也能进去，但是组队进去会更好。竟然会开放怪物公园，你又在打什么主意啊？呵呵呵，你在说什么呢……我只是想让大家开心罢了。别想太多，尽情地去玩吧。啊，对了，需要入场券才能进去，这个我不说你也知道吧？在普通地区打猎，可以获得#b#t4001513##k、#b#t4001515##k和#b#t4001521##k。搜集10张交给#b#p9071002##k，可以交换到一张入场券。\r\n\r\n- #e远征队推荐等级#n：10级以上\r\n- #e参加人员#n：单人/组队\r\n- #e限制时间#n：20分钟\r\n- #e移动方法#n：怪物公园吉普车\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4310020# #t4310020#");
			} else if (selection == 10) {
				typed=10;
				cm.sendNext("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n\r\n活动调整，等待开放！");
			} else if (selection == 11) {
				typed=11;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n出现了时空裂缝！为了阻止从裂缝中涌入的怪物，急需勇敢的冒险家们的帮助。和可以信任的同伴们合力拯救#m220000000#吧！\n必须击退怪物，解开各种难题，并在对#r#o9300012##k的战斗中获胜。\r\n\r\n- #e推荐等级#n：70级以上\r\n- #e参加人员#n：3~6人\r\n- #e限制时间#n：20分钟\r\n- #e移动方法#n：次元之镜\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集#i4031172# #t4031172#");
			} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n你了解冒险岛吗？你对它熟悉吗？那么请完成探索发现任务吧。让你体验一次正真的冒险之旅。\r\n- #e推荐等级#n：120级以上\r\n- #e参加人员#n：单人/组队\r\n- #e限制时间#n：无限制\r\n- #e移动方法#n：万能传送员\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n- #e任务物品#n：收集......");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getBossLog("天鹰任务") > 4) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4000243) >= 1) {
                    cm.gainItem(4000243,-1);
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("天鹰任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x1\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请在米纳尔森林深处，击退天鹰。\r\n#i4000243# #t4000243##e(#c4000243#/1)");
                    cm.dispose();
                }
			}
			if(typed==2){
                if (cm.getBossLog("喷火龙任务") > 4) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4000235) >= 1) {
                    cm.gainItem(4000235,-1);
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("喷火龙任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x1\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n米纳尔森林深处，击退喷火龙。\r\n#i4000235# #t4000235##e(#c4000235#/1)");
                    cm.dispose();
                }
			}
			if(typed==3){
                if (cm.getBossLog("鱼王任务") > 2) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4000175) >= 1) {
                    cm.gainItem(4000175,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("鱼王任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请在海底世界深处，击退皮亚奴斯。\r\n#i4000175# #t4000175##e(#c4000175#/1)");
                    cm.dispose();
                }
			}
			if(typed==4){
                if (cm.getBossLog("扎昆任务") > 2) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4001083) >= 1) {
                    cm.gainItem(4001083,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("扎昆任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请在冰峰雪域废矿深处，击退扎昆。\r\n#i4001083# #t4001083##e(#c4001083#/1)");
                    cm.dispose();
                }
			}
			if(typed==5){
                if (cm.getBossLog("黑龙任务") > 2) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4001430) >= 1) {
                    cm.gainItem(4001430,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("黑龙任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请消灭长期盘踞在米纳尔森林中的龙族的背叛者黑暗龙王。\r\n#i4001086# #t4001430#(#c4001430#/1)");
                    cm.dispose();
                }
			}
			if(typed==6){
                if (cm.getBossLog("狮子王任务") > 2) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4310010) >= 1) {
                    cm.gainItem(4310010,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("狮子王任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请在冰峰雪域深处，击退狮子王·班累昂。\r\n#i4310010# #t4310010##e(#c4310010#/1)");
                    cm.dispose();
                }
			}
			if(typed==7){
                if (cm.getBossLog("品克缤任务") > 2) {
                    cm.sendOk("你今天已经完成过2次任务，请明天在来。");
                    cm.dispose();
          }else if (cm.itemQuantity(4021010) >= 1) {
                    cm.gainItem(4021010,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("品克缤任务");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n正义币x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n经验值1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n请在时间神殿深处，击退时间宠儿·品克缤。\r\n#i4021010# #t4021010##e(#c4021010#/1)");
                    cm.dispose();
                }
			}
			if(typed==8){
                    if (cm.getLevel() >= 120) {
                    cm.warp(689010000, 0);
                    cm.sendOk("冒险岛上有人给你传话。\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n\r\n你已经到达目的地.(挑战粉色扎昆会获得意外奖励!)\r\n如果想出去请用#b @hg #k命令回城");
                    cm.dispose();
                } else {
                    cm.sendOk("冒险岛上有人给你传话。\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n对不起，只有120级以上的人才能进入。");
                    cm.dispose();
                }
            }
			if(typed==9){
                    cm.dispose();
		    cm.openNpc(9071003);
                }
			if(typed==10){
		    cm.dispose();
		    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n\r\n如果你有好的想法，提交至论坛：http://www.5ifly.com")
                }
			if(typed==11){
		    cm.dispose();
                    cm.warp(689010000, 0);
                }
			if(typed==12){
		    cm.dispose();
                    cm.sendOk("你想收集什么呢？");
                }
		}
	}
}
