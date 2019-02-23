var status = 0;
var choice;
var scrolls = Array(
Array("新动物英雄团椅子", 3010737, 1500),
Array("新勇士们，我爱你~", 3011000, 2000),
Array("新Marry me椅子", 3010717, 1500),
Array("新森林中休息处椅子", 3010795, 1500),
Array("新巨无霸年夜饭椅子", 3010788, 2000),
Array("新惊人漫画椅子", 3014000, 1500),
Array("新蓝蓝波尼小屋椅子", 3010783, 1500),
Array("新进化椅子", 3010664, 1500),
Array("新爱琴海椅子", 3012019, 1500),
Array("新满目韩文椅子", 3010708, 1500),
Array("新金马祥云轿", 3010779, 1000),
Array("新抖动的舌头椅子", 3010794, 1500),
Array("新堆王冠椅子", 3010714, 1500),
Array("新惩戒之月妙椅子", 3010704, 1500),
Array("新鲨鱼激流勇进椅子", 3010690, 1500),
Array("新大黄鸭", 3010696, 1000),
Array("新桃樱芳菲椅", 3010806, 1500),
Array("新迷你玩具别墅椅子", 3010820, 1500),
Array("新兔兔郊游房车", 3010843, 1500),
Array("新实验室椅子", 3010688, 1500),
Array("巨无霸品克缤", 3010070, 1000),
Array("蛤蛤仙人椅", 3010621, 150),
Array("夏日西瓜冰椅子", 3010658, 1500), 
Array("深海章鱼", 3010527, 1500), 
Array("新海加顿之安息", 3010678, 1000),
Array("新浪漫长椅", 3010735, 1000),
Array("军团长椅子", 3010657, 1000), 
Array("雏祭娃娃3", 3010605, 1000),
Array("雏祭娃娃2", 3010604, 1000),
Array("雏祭娃娃1", 3010603, 1000),
Array("猫咪公园椅子", 3010511, 1000), 
Array("夏日喵喵椅子", 3010431, 1000), 
Array("大红灯笼椅", 3010495, 1000), 
Array("蘑菇朋友椅子", 3010423, 1000),
Array("天使舞台椅", 3010459, 1000), 
Array("兔子乘风椅", 3010453, 1000),
Array("欢乐相框椅子", 3010661, 1000), 
Array("冒险巴士站椅子", 3010659, 1000),
Array("怪蜀黍的泄愤桌", 3010620, 1000), 
Array("未上色的名画椅子", 3010606, 1000),
Array("完美的名画椅子", 3010608, 1000), 
Array("不是在做梦", 3010609, 1000),
Array("漫画书椅子", 3010591, 1000),
Array("雪狼战椅", 3010106, 1000), 
Array("浴桶", 3012002, 1000), 
Array("呼噜呼噜床", 3010054, 1000), 
Array("财神椅子", 3010100, 1000), 
Array("暖暖桌", 3010021, 1000), 
Array("奶黄包", 3010055, 1000), 
Array("风吹稻香", 3010085, 1000), 
Array("海盗的俘虏", 3010028, 1000), 
Array("摇滚之魂椅子", 3010116, 1000), 
Array("猫头鹰椅子", 3010077, 1000), 
Array("世界末日", 3010058, 1000), 
Array("骷髅宝座", 3010041, 1000), 
Array("帐篷", 3010133, 1000), 
Array("电视宅人", 3010098, 1000), 
Array("我爱巧克力火锅", 3012011, 1000), 
Array("巧克力蛋糕恋人", 3012010, 1000),
Array("鬼娃娃椅子", 3010085, 1000), 
Array("漂漂猪椅子", 3010094, 1000), 
Array("北极熊椅子", 3010099, 1000), 
Array("圣诞树椅子", 3010048, 1000), 
Array("虎虎生威椅子", 3010111, 1000), 
Array("魔法书椅子", 3010117, 1000), 
Array("暖炉椅", 3010292, 1000), 
Array("雪糕丸子椅", 3010055, 1000), 
Array("七夕椅子", 3010144, 1000), 
Array("龙神椅子", 3010137, 1000), 
Array("兔子椅子", 3010186, 1000), 
Array("古老录音机椅子", 3010205, 1000), 
Array("黑猫椅子", 3010208, 1000), 
Array("雪夜椅子", 3010170, 1000), 
Array("小幼龙椅子", 3010299, 1000), 
Array("兔子纪念版椅子", 3010053, 1000), 
Array("蛋糕椅子", 3010141, 1000), 
Array("HP椅子", 3010180, 1000), 
Array("MP椅子", 3010181, 1000), 
Array("无价之宝椅子", 3010195, 1000), 
Array("水果椅子", 3010280, 1000), 
Array("老奶奶读童话椅子", 3010320, 1000), 
Array("购物小推车椅子", 3010361, 1000), 
Array("熟睡的鸭子椅", 3010415, 1000), 
Array("幻影卡牌椅", 3010401, 1000),
Array("情书柜子", 3010112, 1000),
Array("糖果音符椅子", 3010118, 1000),
Array("都纳斯喷气椅子", 3010124, 1000),
Array("喧闹好友椅子", 3010207, 1000),
Array("星空椅子", 3010172, 1000),
Array("胡萝卜椅子", 3010183, 1000),
Array("水族馆椅子", 3010142, 1000),
Array("我爱蛋糕椅子", 3010220, 1000),
Array("绵羊酋长椅子", 3010219, 1000),
Array("月光仙子椅子", 3010226, 1000),
Array("动物之家椅子", 3010281, 1000),
Array("珍珠蚌椅子", 3010288, 1000),
Array("生如夏花椅子", 3010306, 1000),
Array("鬼节南瓜椅子", 3010279, 1000),
Array("与克里姆享受下午茶", 3010354, 1000),
Array("美容椅子", 3010357, 1000),
Array("水晶花园椅", 3010400, 1000),
Array("希拉的梳妆椅", 3010404, 1000),
Array("外形钻机椅子", 3010355, 1000),
Array("粉色扎昆椅子", 3010313, 1000),
Array("艾丽莎的双膝", 3010410, 1000),
Array("龙龙蛋壳椅", 3010107, 1000),
Array("露水椅子", 3010068, 1000),
Array("舒适大白熊椅子", 3010110, 1000),
Array("周年庆水晶枫叶椅", 3010145, 1000),
Array("大熊猫椅子", 3010078, 1000),
Array("肥猫猫椅子", 3010079, 1000),
Array("独角兽椅子", 3010135, 1000),
Array("诺勒特斯椅子", 3010286, 1000),
Array("噢我的女皇", 3010318, 1000),
Array("埃欧雷的小音乐会", 3010403, 1000),
Array("彩虹椅子", 3010362, 1000),
Array("兔子乘风椅", 3010453, 1000),
Array("蛇椅子", 3010583, 1000),
Array("TV椅子", 3010494, 1000),
Array("水晶椅子", 3010428, 1000),
Array("喧闹好友椅子", 3010207, 1000),
Array("罗曼蒂克天文台", 3010462, 1000),
Array("精灵王座", 3010287, 1000),
Array("爱心云朵椅", 3010454, 1000)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n兔兔币余额：#r" + cm.getrmb(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到精品玩具店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var rmb = scrolls[choice][2];
           if (cm.getRMB(1) < rmb) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addrmb(rmb);
                cm.gainItem(scrolls[choice][1], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}
function getRMB() {
	var ret = 0;
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("SELECT rmb FROM accounts WHERE id = ?");
    UpDateData.setInt(1, cm.getPlayer().getAccountID());
	var rs = UpDateData.executeQuery();
	if (rs.next())
	{
		ret = rs.getInt("rmb");
	}
	UpDateData.close();
	return ret;
}

function gainRMB(times) {
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("UPDATE accounts SET rmb = rmb + ? WHERE id = ?");
    UpDateData.setInt(1, times);
    UpDateData.setInt(2, cm.getPlayer().getAccountID());
	UpDateData.executeUpdate();
	UpDateData.close();
}