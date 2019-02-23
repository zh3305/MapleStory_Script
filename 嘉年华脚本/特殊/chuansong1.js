/* Joyce
	Event NPC
*/

var status = -1;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var maps = Array(
             500000000,
		910001000,
		931000500,
        104000000,
        100000000,
        101000000,
        102000000,
        103000000,
        120000000,
        105000000,
        200000000,
        211000000,
        550000000,
        230000000,
        222000000,
        262010000,
        220000000,
        701000000,
        250000000,
        702000000,
        260000000,
        600000000,
        703000000,
        240000000,
        261000000,
        221000000,
        251000000,
        300000000,
        270000000,
        702100000,
        800000000,
        130000000,
        310000000); 


var monstermaps = Array(
Array(50000,0,"大蘑菇（适合 1级 ~ 10级 的玩家）"), 
Array(100010100,0,"梦境小道（适合 3级 ~ 10级 的玩家）"),
Array(101020100,0,"接近鸟的地方（适合 10级 ~ 30级 的玩家）"),
Array(310040400,0,"矿石路（适合 30级 ~ 50级 的玩家）"),
//Array(101040001,0,"野猪的领地（适合 45级 ~ 60级 的玩家）"),
Array(102030400,0,"灰烬之地（适合 50级 ~ 70级 的玩家）"),
Array(105010301,0,"蚂蚁洞2（适合 55级 ~ 70级 的玩家）"),
Array(551000200,0,"大红花路2（适合 60级 ~ 80级 的玩家）"),
//Array(925100100,0,"海盗船#r[荣誉勋章爆率高]#b（适合 60级 ~ 80级 的玩家）"),
Array(600020300,0,"机械蜘蛛洞穴（适合 70级 ~ 80级 的玩家）"),
Array(702010000,0,"山脚（适合 80级 ~ 90级 的玩家）"),
Array(220060000,0,"扭曲的时间<1>（适合 90级 ~ 100级 的玩家）"),
Array(541010010,0,"幽灵船2#r[星星爆率高]#b（适合 100级 ~ 110级 的玩家）"),
Array(220060200,0,"扭曲的时间<3>（适合 110级 ~ 120级 的玩家）"),
Array(220060201,0,"时间异常之地（适合 120级以上 的玩家）"),
Array(240040510,0,"死龙巢穴（适合 130级以上 的玩家）"),
Array(270030100,0,"忘却之路1（适合 140级 的玩家）"),
Array(271000100,0,"黑暗圣地（适合 150级 的玩家）"),
Array(703001200,0,"外星人占领地A区3（适合 150级 的玩家）"),
Array(273040100,0,"荒废的发掘地区2（适合 180级 的玩家）"),
Array(310070100,0,"机械坟墓入口 （适合 200级以上 的玩家"),
Array(310070210,0,"天际线1（适合 210级以上 的玩家"),
Array(310070300,0,"黑色天堂甲板1（适合 220级以上 的玩家"),
Array(310070330,0,"黑色天堂甲板3（适合 230级以上 的玩家"),
Array(310070480,0,"黑色天堂内部迷宫6（适合 240级以上 的玩家")										
										); 


var bossmap = Array(
Array(220080000,0,"[普通] 挑战帕普拉图斯！"),
Array(551030100,0,"[普通] 暴力熊、心疤狮王！"),
Array(541020800,0,"[世界BOSS] 新加坡 - 千年树精王遗迹Ⅱ"),
Array(211070000,0,"[班·雷昂] 狮子王之城 - 接见室走廊"),
Array(211042300,0,"#r[普通/进阶]艰苦洞穴 - 扎昆"),
Array(240040700,0,"#r[普通/进阶]生命之穴 - 暗黑龙王（仅限1线)"),
Array(270050000,0,"#r[普通/混沌]时间裂缝 - 品克缤"),
Array(703020000,0,"#r[进阶]底下钻探机 - 强化钻机"),
Array(272020110,0,"#r[黑暗军团]次元裂缝 - 阿卡勒伊祭坛"),
Array(262030000,0,"#r[黑暗军团]解放阿斯旺 - 希拉之塔"),
Array(105200000,0,"#r[巨大树根] 鲁塔比斯 - 四大天王BOSS"),
//Array(300030300,0,"[普通] 妖精女王-艾菲尼娅"),
Array(271040000,0,"#r[骑士团] 女皇 - 希纳斯的庭院"),
Array(863000100,0,"#d[噩梦的牢笼] 心树守护者之地 - 贝勒德入口(New~)"),	
Array(807300100,0,"#d[噩梦的牢笼]通往秘密祭坛的路 - 森兰丸（New~)"),
Array(401060000,0,"[噩梦的牢笼] 暴君城堡战场 - 暴君麦格纳斯(New~)")									
										); 
		
var tiaotiaomaps = Array(
//Array(100000202,0,"宠物公园（每日任务-射手跳跳）"),
//Array(220000006,0,"玩具城宠物训练场（每日任务-玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心脏）"),
Array(109040001,0,"向高地<第1阶段> (共4阶段）"),
Array(910130000,0,"忍苦树林 (第1阶段) "),
Array(109030001,0,"上楼~上楼~<第1阶段> （上楼找出口）"),
Array(910360002,0,"第一区域 （地铁b1）"),
Array(910360102,0,"第一区域 （地铁b2）"),
Array(910360203,0,"第一区域 （地铁b3）")							
										); 




var yewaiguaimaps = Array(
//Array(100000202,0,"宠物公园（每日任务-射手跳跳）"),
//Array(220000006,0,"玩具城宠物训练场（每日任务-玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心脏）"),
Array(109040001,0,"向高地<第1阶段> (共4阶段）"),
Array(910130000,0,"忍苦树林 (第1阶段) "),
Array(109030001,0,"上楼~上楼~<第1阶段> （上楼找出口）"),
Array(910360002,0,"第一区域 （地铁b1）"),
Array(910360102,0,"第一区域 （地铁b2）"),
Array(910360203,0,"第一区域 （地铁b3）")							
										); 

	
										
var bossmaps = Array( 
220080000,//"[普通] 挑战帕普拉图斯！
551030100,//"[普通] 暴力熊、心疤狮王！"
541020800,//"[世界BOSS] 新加坡 - 千年树精王遗迹Ⅱ"),
211070000,//"[班·雷昂] 狮子王之城 - 接见室走廊"),
211042300,//"[简单/进阶] 1 2线为普通扎昆、3线为进阶扎昆！"),
240040700,//"[普通/进阶] 3线为进阶黑龙王，2和4线为普通黑龙王"),
270050000,//"[普通/混沌] 1线为普通品克缤，2线为混沌品克缤"),
703020000,//"#r[进阶]底下钻探机 - 强化钻机"),
272020110,//"[普通] 次元缝隙-阿卡伊勒祭坛"),
262030000,//"[黑暗军团]解放阿斯旺 - 希拉之塔"),
105200000,//"#r[巨大树根] 鲁塔比斯 - 四大天王BOSS 。"),
//300030300,//"[普通] 妖精女王-艾菲尼娅"),
271040000,//"[骑士团] 女皇 - 希纳斯的庭院"),
863000100,//"#d[噩梦的牢笼] 心树守护者之地 - 贝勒德入口(New~)"),
807300100,//"#d[森兰丸BOSS] 通往秘密祭坛的路(New~)"),	
401060000);//"[噩梦的牢笼] 暴君城堡战场 - 暴君麦格纳斯(New~)")


var selectedMap = -1;
var selectedArea = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

   if (status == 0) {
		cm.sendSimple("#L0#" + "BOSS传送#l\r\n#L20#");
		} else if (status == 1) {
	var selStr = "请选择您的目的地: #b";
    	if (selection == 0) {
            	for (var i = 0; i < maps.length; i++) {
                	selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            	}				
        } else if (selection == 2) {
            	cm.dispose();
            	cm.openNpc(9010022);
            	return;
        } else if (selection == 20) {
            	cm.dispose();
            	cm.openNpc(9010022,"xiaogua");
            	return;
        } else if (selection == 21) {
            	cm.dispose();
            	cm.warp(910002000,0);
            	return;
        } else if (selection == 18) {
			if (cm.getJob() == 3300 || cm.getJob() == 3310 || cm.getJob() == 3311 || cm.getJob() == 3312) {
			cm.warp(931000500,0);
			cm.dispose();
			return
			} else {
			cm.sendOk("你不是豹弩职业.我不能为你传送");
			cm.dispose();
            return;
			}
	} else if (selection == 8) {   	
                       for (var i = 0; i < tiaotiaomaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                       }	
	} else if (selection == 4) {
		//for (var i = 0; i < bossmaps.length; i++) {
                	//selStr += "\r\n#L" + i + "##m" + bossmaps[i] + "# #l";
            //	}	       	
                       for (var i = 0; i < bossmap.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmap[i][2] + "";
                       }
	} else if (selection == 8) {   	
                       for (var i = 0; i < tiaotiaomaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                       }	
 // } else if (selection == 7) {
        //for (var i = 0; i < tiaotiaomaps.length; i++) {
				//selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
					//}   
	} else if (selection == 5) {
			cm.warp(100000103,0);
			cm.dispose();
			return;
	} else if (selection == 7) {
			cm.warp(200000301,0);
			cm.dispose();
			return;
        } else {
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
	} 
        selectedArea = selection;
        cm.sendSimple(selStr);
    } else if (status == 2) {
        //cm.sendYesNo("看来这里的事情都已经处理完了啊。您真的要移动到 #m" + (selectedArea == 0 ? maps[selection] : monstermaps[selection]) + "# 吗？");
	cm.sendYesNo("看来这里的事情都已经处理完了啊。您真的要移动吗？");
        selectedMap = selection;
    } else if (status == 3) {
        if (selectedMap >= 0) {
		if(selectedArea == 0){
			cm.warp(maps[selectedMap],0);
		}else if(selectedArea == 4){
			cm.warp(bossmaps[selectedMap],0);
		}else if(selectedArea == 8){
			cm.warp(tiaotiaomaps[selectedMap][0],0);
		}else{
			cm.warp(monstermaps[selectedMap][0],0);
		}
            //cm.warp(selectedArea == 0 ? maps[selectedMap] : monstermaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        
    }
}