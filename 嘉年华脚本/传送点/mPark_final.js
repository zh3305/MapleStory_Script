function enter(pi) {
    if (pi.getMap().getAllMonster().size() == 0) {
        if (pi.getParty() != null && pi.getParty().getMembers().size() < 2) {
			pi.gainItem(4310020, 10);
        } else if (pi.getParty() != null) {
			var a =  Math.random() * 10 + 20;
            pi.gainItem(4310020,a);
            pi.playerMessage(-5, "根据当前等级，额外获得" + a + "个 怪物公园纪念币。");
            pi.GainSpecial(3);
            if (pi.getEventCount("MonsterPark") < 10) {
                pi.setEventCount("MonsterPark");
                pi.EventGainNX();
                pi.gainNX(300);
            } else {
                pi.playerMessage(-5, "怪物公园每天每个帐号只能额外获得10次点卷奖励,您次数已经用完。");
            }
        }
        pi.warp(951000000, 0);
    } else {
        pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    }
}
