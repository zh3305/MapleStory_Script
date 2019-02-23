/* NPC版权: 至上冒险岛
	NPC名称: 		
	MAP(地图ID): 	        ()
	NPC类型: 		
   制作人：至上                 创建家族
*/

var status = 0;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendNext("拥有家族特有的纹章，可以增加成员的归属感，提高凝聚力。你还没做好制作家族徽章的准备吗？那就这么办吧。等你什么时候做好了准备，到时再来找我。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
            cm.sendSimple("你好！我是负责管理#b家族徽章#k的#b蕾雅#k。\r\n#b#L0#我想制作家族徽章。#l\r\n#L1#我想删除家族徽章。#l");
        } else {
            cm.sendOk("咦？你好像不是家族族长啊？家族徽章相关事务只有#r家族族长#k#r可以#k处理。");
            cm.dispose();
        }
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            if (cm.getPlayerStat("GRANK") == 1) {
                cm.sendYesNo("生成家族徽章需要 #b1,500,000 金币#k的费用。我来跟你说明一下，家族徽章是每个家族特有的纹章，会出现在家族名称的左边。怎么样？你想制作家族徽章吗？");
            } else {
                cm.sendOk("咦？你好像不是家族族长啊？家族徽章相关事务只有#r家族族长#k#r可以#k处理。");
                cm.dispose();
            }
        } else if (selection == 1) {
            cm.sendOk("还未完成.");
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel == 0) {
            cm.genericGuildMessage(18);
            cm.dispose();
        }
    }
}
