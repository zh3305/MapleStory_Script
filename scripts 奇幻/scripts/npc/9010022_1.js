/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：城镇地图
 */

var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() 
	{
    status = -1;
    action(1, 0, 0);}
function action(mode, type, selection) 
	{
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;}
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的  #r#h ##k  您好，想传送到什么地方:\r\n";
		selStr += "#L1#" + eff + "#b 明珠港#l"
        selStr += "#L2#" + eff + "#b 射手村#l"
		selStr += "#L3#" + eff + "#b 魔法密林#l"
		selStr += "#L4#" + eff + "#b 勇士部落#l"

		selStr += "#L5#" + eff + "#b 玩具城#l"
		selStr += "#L6#" + eff + "#b 神木村#l"
		selStr += "#L7#" + eff + "#b 林中之城#l"
		selStr += "#L8#" + eff + "#b 废弃都市#l"

		selStr += "#L9#" + eff + "#b 金海滩#l"
		selStr += "#L10#" + eff + "#b 埃欧雷#l"
		selStr += "#L11#" + eff + "#b 诺特勒斯#l"
		selStr += "#L12#" + eff + "#b 水下世界#l"

		selStr += "#L13#" + eff + "#b 万神殿#l"
		selStr += "#L14#" + eff + "#b 百草堂#l"
		selStr += "#L15#" + eff + "#b 阿里安特#l"
		selStr += "#L16#" + eff + "#b 玛加提亚#l"

		selStr += "#L17#" + eff + "#b 里恩岛#l"
		selStr += "#L18#" + eff + "#b 埃德尔#l"
		selStr += "#L19#" + eff + "#b 天空之城#l"
		selStr += "#L20#" + eff + "#b 时间神殿#l"

		selStr += "#L21#" + eff + "#b 武陵镇#l"
		selStr += "#L22#" + eff + "#b 阿尔泰#l"
		selStr += "#L23#" + eff + "#b 冰封雪域#l"
		selStr += "#L24#" + eff + "#b 赫里希安#l"
		//selStr += "#L25#" + eff + "#b 埃德尔斯坦#l"
	
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
                cm.warp(104000000);
		        cm.sendOk("欢迎您来到明珠港，祝您游戏愉快！");
				cm.dispose();
            break;
		case 2:
                cm.warp(100000000);
		        cm.sendOk("欢迎您来到射手村，祝您游戏愉快！");
				cm.dispose();
            break;
		case 3:
                cm.warp(101000000);
		        cm.sendOk("欢迎您来到魔法密林，祝您游戏愉快！");
				cm.dispose();
            break;
		case 4:
                cm.warp(102000000);
		        cm.sendOk("欢迎您来到勇士部落，祝您游戏愉快！");
				cm.dispose();
            break;
		case 5:
                cm.warp(220000000);
		        cm.sendOk("欢迎您来到玩具城，祝您游戏愉快！");
				cm.dispose();
            break;
		case 6:
                cm.warp(240000000);
		        cm.sendOk("欢迎您来到神木村，祝您游戏愉快！");
				cm.dispose();
            break;
		case 7:
                cm.warp(105000000);
		        cm.sendOk("欢迎您来到林中之城，祝您游戏愉快！");
				cm.dispose();
            break;
		case 8:
                cm.warp(103000000);
		        cm.sendOk("欢迎您来到废弃都市，祝您游戏愉快！");
				cm.dispose();
            break;
		case 9:
                cm.warp(120040000);
		        cm.sendOk("欢迎您来到金海滩，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 10:
                cm.warp(101050000);
		        cm.sendOk("欢迎您来到埃欧雷，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 11:
                cm.warp(120000000);
		        cm.sendOk("欢迎您来到诺特勒斯，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 12:
                cm.warp(230000000);
		        cm.sendOk("欢迎您来到水下世界，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 13:
                cm.warp(400000000);
		        cm.sendOk("欢迎您来到万神殿，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 14:
                cm.warp(251000000);
		        cm.sendOk("欢迎您来到百草堂，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 15:
                cm.warp(260000000);
		        cm.sendOk("欢迎您来到阿里安特，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 16:
                cm.warp(261000000);
		        cm.sendOk("欢迎您来到玛加提亚，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 17:
                cm.warp(140000000);
		        cm.sendOk("欢迎您来到里恩岛，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 18:
                cm.warp(325090010);
		        cm.sendOk("欢迎您来到埃德尔斯坦，祝您游戏愉快！");
				cm.dispose();
			break;
		case 19:
                cm.warp(200000000);
		        cm.sendOk("欢迎您来到天空之城，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 20:
                cm.warp(270000000);
		        cm.sendOk("欢迎您来到时间神殿，祝您游戏愉快！");
				cm.dispose();
            break;			
		
            			
		case 21:
                cm.warp(250000000);
		        cm.sendOk("欢迎您来到武陵，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 22:
                cm.warp(300000000);
		        cm.sendOk("欢迎您来到阿尔泰营地，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 23:
                cm.warp(211000000);
		        cm.sendOk("欢迎您来到冰封雪域，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 24:
                cm.warp(401000000);
		        cm.sendOk("欢迎您来到赫里希安反抗总部，祝您游戏愉快！");
				cm.dispose();
            break;			
		case 25:
                cm.warp(310000000);
				cm.dispose();
            break;
        
        }
    }
}
