/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/

var bossmaps = Array(					
    Array(211042400,0,"扎昆"), 
    Array(211042401,0,"进阶扎昆"),                
    Array(689010000,0,"粉色扎昆"),
    Array(240060200,0,"黑龙"), 
    Array(240060201,0,"进阶黑龙"), 
    Array(270050000,0,"pb-品克缤"), 
    Array(211070000,0,"狮子王"), 
    Array(105100100,0,"巨魔蝙蝠怪"), 
    Array(271040000,0,"希纳斯女皇"), 
    Array(802000210,0,"逆奥之城 - 防御塔 2100年"), 
    Array(802000410,0,"逆奥之城 - 高科区域 2102年"), 
    Array(802000610,0,"逆奥之城 - 天空大战舰甲板 2102年"), 
    Array(802000110,0,"逆奥之城 - 卡姆那"), 
    Array(802000710, 0,"逆奥之城 - 核心商业区 2102年"), 
    Array(802000800,0,"逆奥之城 - 商贸中心 2102年"), 
    Array(802000820,0,"逆奥之城 - 商贸中心顶楼"), 
    Array(262030000,0,"希拉之塔")					
);
var monstermaps = Array(
    Array(230040420,0,"鱼王"), 
    Array(220080001,0,"闹钟"), 
    Array(541020800,0,"千年树妖王"), 
    Array(551030200,0,"暴力熊"),
    Array(240020102,0,"格瑞芬多"),
    Array(240020402,0,"喷火龙"),
    Array(240040401,0,"蓝龙"),
    Array(270010500,0,"多多"),
    Array(270020500,0,"玄冰独角兽"),
    Array(270030500,0,"雷卡")
		); 
var townmaps = Array(		
    Array(104000000,0,"明珠港"), 
    Array(100000000,0,"射手村"), 
    Array(101000000,0,"魔法密林"), 
    Array(102000000,0,"勇士部落"), 
    Array(103000000,0,"废弃都市"), 
    Array(120000000,0,"诺特勒斯号码头"),

    Array(200000000,0,"天空之城"),
    Array(211000000,0,"冰峰雪域"), 
    Array(230000000,0,"水下世界"),  
    Array(222000000,0,"童话村"), 
    Array(220000000,0,"玩具城"),
    Array(701000000,0,"东方神州"),
    Array(250000000,0,"武陵"), 
    Array(702000000,0,"少林寺"), 
    Array(500000000,0,"泰国"),
    Array(260000000,0,"沙漠之城"), 
    Array(252000000,0,"黄金寺院"), 
    Array(600000000,0,"新叶城"), 
    Array(240000000,0,"神木村"), 
    Array(261000000,0,"马加提亚"), 

    Array(221000000,0,"地球防御本部"), 
    Array(251000000,0,"百草堂"),

    Array(550000000,0,"吉隆大都市"),
    Array(130000000,0,"圣地"),

    Array(551000000,0,"甘榜村"),

    Array(801000000,0,"昭和村"), 
    Array(540010000,0,"新加坡机场"),
    Array(541000000,0,"新加坡码头"),
    Array(300000000,0,"艾林森林"), 

    Array(270000100,0,"时间神殿"), 
    Array(702100000,0,"藏经阁"), 

    Array(800000000,0,"狗窝"), 

    Array(930000000,0,"毒雾森林"),
    Array(802000100,0,"古代森林"),

    Array(193000000,0,"网吧")
							);
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 3 && mode == 0) {
			cm.sendOk("下次再见!.");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}

               if (status == 0) {
                   cm.sendSimple("\r\n#L1#顶级道具获取#l\r\n#L0#传送#l");
               }
               else if (status == 1) {

                       

                   if (selection == 0) {
                       cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#普通地图#l\r\n#L1#野外boss地图#l\r\n#L2#远征队boss#l");
                   }
                   else if (selection == 1) {
       cm.dispose();
 cm.openNpc(9030000,4);
                   }
               }
               else if (status == 2) {
                   if (selection == 0) {
                        var selStr = "选择你的目的地吧.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
                   if (selection == 1) {
                       var selStr = "选择你的目的地吧.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "远征队boss需要通过npc入场#b";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
               }
            else if (status == 3) {
                if (towns == 1) {
                cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "? 价格:#r"+townmaps[selection][1]+"#k金币");
		chosenMap = selection;
                towns = 2;
                }
                else if (monsters == 1) {
                cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "? 价格:#r"+monstermaps[selection][1]+"#k金币");
                chosenMap = selection;
                monsters = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "? 价格:#r"+bossmaps[selection][1]+"#k金币");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 4) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
                else if (monsters == 2) {
                    if(cm.getMeso()>=monstermaps[chosenMap][1]){
                		cm.warp(monstermaps[chosenMap][0], 0);
                		cm.gainMeso(-monstermaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
                else if (bosses == 2) {
                    if(cm.getMeso()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);
                		cm.gainMeso(-bossmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("你没有足够的金币哦!");
                	}
                    cm.dispose();
                }
            }
              
            }
}
