importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

function start() {
var ptyz = 10; //设置购买单件需要的元宝
var gjyz = 10; //设置购买单件需要的元宝


if (cm.getLevel() > 1 ) {  
    cm.sendSimple("#r注:#b如果坐骑穿上了，使用骑宠技能，无法坐上坐骑的玩家请使用以下方法\r\n先找机器人购买#v1902000#和#v1912000#，穿上坐骑，再把#v1902000#和#v1912000#穿上即可。\r\n#L0##v1902028#[兑换]#L77##v1902061#[兑换]#L78##v1902059#[兑换]\r\n#L79##v1902060#[兑换]#L80##v1902056#[兑换]#L81##v1902044#[兑换]\r\n#L82##v1902043#[兑换]#L83##v1902047#[兑换]#L84##v1902034#[兑换]\r\n#L85##v1902037#[兑换]#L86##v1902055#[兑换]#L87##v1902040#[兑换]\r\n#L88##v1902041#[兑换]#L89##v1902042#[兑换]#L90##v1902057#[兑换]\r\n#L91##v1902049#[兑换]#L92##v1902050#[兑换]#L93##v1902051#[兑换]\r\n#L94##v1902024#[兑换]#L163##v1902053#[兑换]#L164##v1902054#[兑换]");
    } else {
    cm.sendOk("找我什么事，想要启动我的力量吗，你需要足够的条件")
    }
}
function action(mode, type, selection) {
var ptyz = 10; //设置购买单件需要的元宝
var gjyz = 10; //设置购买单件需要的元宝
cm.dispose();
if  (selection == 0) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902028,1); 
cm.gainItem(1912021,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 77) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902061,1); 
cm.gainItem(1912054,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 78) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902059,1); 
cm.gainItem(1912052,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 79) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902060,1); 
cm.gainItem(1912053,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 80) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902056,1); 
cm.gainItem(1912049,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 81) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902044,1); 
cm.gainItem(1912037,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 82) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902043,1); 
cm.gainItem(1912036,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 83) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902047,1); //直升飞机
cm.gainItem(1912040,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 84) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902034,1); //机器人
cm.gainItem(1912027,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 85) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902037,1); //超级飞船
cm.gainItem(1912030,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 86) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902055,1); //蝙蝠船
cm.gainItem(1912048,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 87) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902040,1); //机械师
cm.gainItem(1912033,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 88) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902041,1); //幼龙
cm.gainItem(1912034,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 89) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902042,1); //神龙
cm.gainItem(1912035,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 90) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902057,1); //莱格斯的豺犬
cm.gainItem(1912050,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 91) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902049,1); //小牛
cm.gainItem(1912042,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 92) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902050,1); //摩托
cm.gainItem(1912043,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 93) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902051,1); //飞船
cm.gainItem(1912044,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 94) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902052,1); //天马
cm.gainItem(1912045,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 163) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902053,1); //黑龙
cm.gainItem(1912046,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 164) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902054,1); //海盗船
cm.gainItem(1912047,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("抱歉你没有#v4031250#"); 
cm.dispose();   
}
}
}