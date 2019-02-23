var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
	im.dispose();
	return;
    } else if (mode == 1){
	status++;
    } else {
	status--;
    }

    switch (status) {
        case 0: 
	    //im.sendOk(im.getServerName() + "新人指导\r\n#r1）#n#k请熟悉一下两个指令：@npc（可以使用回自由、万能NPC）、@解卡（当出现NPC假死时使用，无法打开NPC或装备点不了时）。 \r\n#r2）#n#k自动转职，1转为10级，2转为30级，3转为60级，4转为100级，每当到达转职等级时在拍卖@npc点新人礼包里面的第三项功能可以获得奖励（成长引导奖励）。 \r\n#r3）#n#k站市场将可以获得抵用卷，经验值，抵用卷可以购买商城道具，魔方和部分功能性道具无法购买。 \r\n#r4）#n#k拍卖列表中的【每日福利】可以获得每日礼物箱和5000抵用卷及BOSS入场劵，请点击领取。 \r\n#r5）#n#k新手可以通过拍卖上的副本任务获得魔方和装备。 \r\n#r6）#n#k赞助" + im.getServerName() + "请联系" + im.getServerName() + "客服，或者进入官网: http://www.wttmxd.com 充值中心赞助。 \r\n#r7）#n#k查询装备、能手册爆物地点请聊天窗口输入：@获取猫头鹰 ，获得物品搜索器。 \r\n#r8）#n#k美容美发请点击拍卖上的【美容美发】，或到射手村美容院即可。 ");
	    im.dispose();
            im.openNpc(9310362);
            break;

    }
}
