var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r请认真选择下面的防具,选错后果自负#k#n\r\n";
		selStr += "#L1##b"+z+" 漩涡双头杖 夜光法师#l\r\n";
		selStr += "#L2##b"+z+" 漩涡灵魂手铳 爆萌萝莉#l\r\n";
		selStr += "#L3##b"+z+" 漩涡恶魔剑 恶魔复仇者#l\r\n";
		selStr += "#L4##b"+z+" 漩涡锁链剑 尖兵#l\r\n";
		selStr += "#L5##b"+z+" 漩涡剑 单手剑#l\r\n";
		selStr += "#L6##b"+z+" 漩涡斧 单手斧#l\r\n";
		selStr += "#L7##b"+z+" 漩涡锤 单手钝器#l\r\n";
		selStr += "#L8##b"+z+" 漩涡匕首 双刀主刀#l\r\n";
		selStr += "#L9##b"+z+" 漩涡刀 双刀副刀#l\r\n";
		selStr += "#L10##b"+z+" 漩涡手杖 幻影手杖#l\r\n";
		selStr += "#L11##b"+z+" 漩涡短杖 法师短杖#l\r\n";
		selStr += "#L12##b"+z+" 漩涡长杖 法师长杖#l\r\n";
		selStr += "#L13##b"+z+" 漩涡双手剑 战士双手剑#l\r\n";
		selStr += "#L14##b"+z+" 漩涡双手战斧 战士双手斧#l\r\n";
		selStr += "#L15##b"+z+" 漩涡巨锤 战士双手钝器#l\r\n";
		selStr += "#L16##b"+z+" 漩涡矛 战士枪#l\r\n";
selStr += "#L17##b"+z+" 漩涡戟 战士矛#l\r\n";
selStr += "#L18##b"+z+" 漩涡弓 弓手弓#l\r\n";
selStr += "#L19##b"+z+" 漩涡弩 弓手弩#l\r\n";
selStr += "#L20##b"+z+" 漩涡拳甲 飞侠拳套#l\r\n";
selStr += "#L21##b"+z+" 漩涡冲拳 海盗指节#l\r\n";
selStr += "#L22##b"+z+" 漩涡手铳 海盗短枪#l\r\n";
selStr += "#L23##b"+z+" 漩涡双翼短杖 双弩#l\r\n";
selStr += "#L24##b"+z+" 漩涡手炮 海盗火炮#l\r\n";
selStr += "#L25##b"+z+" 漩涡虎梳魔法棒 林之灵#l\r\n";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            	im.gainItem(1212089,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励自选箱子获得了漩涡自选武器。");
				im.dispose();
            break;
		case 2:
            	im.gainItem(1222084,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 3:
            	im.gainItem(1232084,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 4:
            	im.gainItem(1242090,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 5:
            	im.gainItem(1302297,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 6:
            	im.gainItem(1312173,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 7:
            	im.gainItem(1322223,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 8:
            	im.gainItem(1332247,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 9:
            	im.gainItem(1342090,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 10:
            	im.gainItem(1362109,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 11:
            	im.gainItem(1372195,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 12:
            	im.gainItem(1382231,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 13:
            	im.gainItem(1402220,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 14:
            	im.gainItem(1412152,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 15:
            	im.gainItem(1422158,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 16:
            	im.gainItem(1432187,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 17:
            	im.gainItem(1442242,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 18:
            	im.gainItem(1452226,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 19:
            	im.gainItem(1462213,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 20:
            	im.gainItem(1472235,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 21:
            	im.gainItem(1482189,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 22:
            	im.gainItem(1492199,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 23:
            	im.gainItem(1522113,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 24:
            	im.gainItem(1532118,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
			case 25:
            	im.gainItem(1252033,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "『自选箱子』 : 恭喜 " + im.getPlayer().getName() + " 通过充值奖励箱子获得了漩涡自选武器。");
				im.dispose();
            break;
        }
    }
}
