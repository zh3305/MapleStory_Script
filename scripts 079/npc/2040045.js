importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//美化!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员

//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
if(cm.getChar().getVip() <= 0){
var vipstr = "普通玩家";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员①";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员②";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员③";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员④";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑤";					
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"会员⑥";					
}
var textz = "#r"+cm.mxdmz()+"冒险岛#k,元宝商城.\r\n#r"+ttt2+"#k新武器#r"+ttt2+"#k新坐骑#r"+ttt2+"#k新椅子\r\n#b  会员等级:#r"+vipstr+"  #b剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  \r\n  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次#b修炼:#r" + cm.getChar().getRw15() + "#k#b 点\r\n ";
//textz += "#b--------------------#r我们一直在努力#b--------------------\r\n ";

textz += "#L1#"+ttt+" 元宝购买 #e>>>>#n#r 新颖玩具#d [娱乐必备]#b#l\r\n ";

textz += "#L2#"+ttt+" 元宝购买 #e>>>>#n#r 超炫椅子#d [娱乐必备]#b#l\r\n ";

textz += "#L3#"+ttt+" 元宝购买 #e>>>>#n#r 靓丽骑宠#d [娱乐必备]#b#l\r\n ";

//textz += "#L4#"+ttt+" 元宝购买 #e>>>>#n#r 属性勋章#d #l\r\n ";

textz += "#L5#"+ttt+" 元宝购买 #e>>>>#n#r 漂亮帽子#d [娱乐必备]#b#l\r\n ";

//textz += "#L6#"+ttt+" 元宝购买 #e>>>>#n#r 腰带吊坠#d #l\r\n ";

textz += "#L7#"+ttt+" 元宝购买 #e>>>>#n#r 自创装备#d [强力推荐]#b#l\r\n ";

textz += "#L8#"+ttt+" 元宝购买 #e>>>>#n#r 必成卷轴#d [强者必须]#b#l\r\n ";

textz += "#L9#"+ttt+" 元宝购买 #e>>>>#n#r 修炼点数#d [强力推荐]#b#l\r\n ";

//textz += "#L10#"+ttt+" 元宝购买 #e>>#n#r 重生装备#d #l\r\n\r\n";

//textz += "#L11#"+ttt+" 元宝购买 #e>>#n#r 商城点卷#d #l\r\n ";

textz += "#L12#"+ttt+" 元宝购买 #e>>>>#n#r PK吸血卡#d [王者必备]#b#l\r\n ";

textz += "#L13#"+ttt+" 元宝购买 #e>>>>#n#r 转生道具#d [冲转必须]#b#l\r\n ";

//textz += "#L14#"+ttt+" 元宝购买 #e>>>>#n#r 木妖邮票#b #l\r\n ";

//textz += "\r\n#b--------------------#r请支持5元冒险岛#b-------------------";

cm.sendSimple (textz);   

}else if (status == 1) {
var viplevel = cm.getChar().getVip();
if  (selection == 1) { 
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#b以下物品每个10元宝.\r\n#L32#"+ttt+" 购买七夕游戏玩具 #l  #L33#"+ttt+" 购买枫叶大奖旗子 #l\r\n#L34#"+ttt+" 购买调色板的玩具 #l  #L35#"+ttt+" 购买圣诞树的玩具 #l\r\n#L36#"+ttt+" 购买乌龙茶的玩具 #l  #L37#"+ttt+" 购买令路灯的玩具 #l\r\n#L38#"+ttt+" 购买白日剑的玩具 #l  #L39#"+ttt+" 购买南瓜灯笼玩具 #l\r\n#L40#"+ttt+" 购买温度计的玩具 #l  #L41#"+ttt+" 购买龙背刃的玩具 #l\r\n#L42#"+ttt+" 购买燃烧的火焰刀 #l  #L43#"+ttt+" 购买火柴游戏玩具 #l\r\n#L44#"+ttt+" 购买火炬游戏玩具 #l  #L45#"+ttt+" 购买七彩霓虹灯泡 #l\r\n#L46#"+ttt+" 购买樱花伞的玩具 #l  #L47#"+ttt+" 购买钓鱼竿的玩具 #l\r\n#L48#"+ttt+" 购买冻冻鱼的玩具 #l  #L49#"+ttt+" 购买圣诞拐杖玩具 #l");


}else if  (selection == 2) { 
//cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#b以下物品每个10元宝.\r\n#L50#"+ttt+" 购买蓝环凳的椅子 #l  #L51#"+ttt+" 购买黑环凳的椅子 #l\r\n#L52#"+ttt+" 购买红环凳的椅子 #l  #L53#"+ttt+" 购买黄环凳的椅子 #l\r\n#L54#"+ttt+" 购买绿环凳的椅子 #l  #L55#"+ttt+" 购买海盗俘虏椅子 #l\r\n#L56#"+ttt+" 购买暖暖桌的椅子 #l  #L57#"+ttt+" 购买浪漫秋千椅子 #l\r\n#L58#"+ttt+" 购买魔女的飞扫把 #l  #L59#"+ttt+" 购买同一伞下椅子 #l\r\n#L60#"+ttt+" 购买呼噜床的椅子 #l  #L61#"+ttt+" 购买血色玫瑰椅子 #l\r\n#L62#"+ttt+" 购买世界末日椅子 #l  #L63#"+ttt+" 购买露水的坐椅子 #l\r\n#L64#"+ttt+" 购买巨无霸品克缤 #l  #L65#"+ttt+" 购买小品克缤椅子 #l\r\n#L66#"+ttt+" 购买为音乐狂椅子 #l  #L67#"+ttt+" 购买猫头鹰的椅子 #l\r\n#L68#"+ttt+" 购买电视宅人椅子 #l  #L69#"+ttt+" 购买财神坐的椅子 #l\r\n#L70#"+ttt+" 购买虎虎生威椅子 #l  #L71#"+ttt+" 购买篝火坐的椅子 #l\r\n#L72#"+ttt+" 购买浴桶坐的椅子 #l  #L73#"+ttt+" 购买爱心坐的椅子 #l\r\n#L74#"+ttt+" 购买风吹稻香椅子 #l  #L75#"+ttt+" 购买巧克蛋糕恋人 #l");
cm.openNpc(9310023);

}else if  (selection == 3) { 
cm.sendSimple("#r注:#b如果坐骑穿上了，使用骑宠技能，无法坐上坐骑的玩家请使用以下方法\r\n先找机器人购买#v1902000#和#v1912000#，穿上坐骑，再把#v1902000#和#v1912000#穿上即可。\r\n#L76##v1902028#[15元宝]#L77##v1902061#[15元宝]#L78##v1902059#[15元宝]\r\n#L79##v1902060#[15元宝]#L80##v1902056#[15元宝]#L81##v1902044#[15元宝]\r\n#L82##v1902043#[15元宝]#L83##v1902047#[15元宝]#L84##v1902034#[15元宝]\r\n#L85##v1902037#[15元宝]#L86##v1902055#[15元宝]#L87##v1902040#[15元宝]\r\n#L88##v1902041#[15元宝]#L89##v1902042#[15元宝]#L90##v1902057#[10元宝]\r\n#L91##v1902049#[10元宝]#L92##v1902050#[10元宝]#L93##v1902051#[10元宝]\r\n#L94##v1902024#[10元宝]#L163##v1902053#[10元宝]#L164##v1902054#[10元宝]");


}else if  (selection == 5) { 
cm.sendSimple("#b\r\n#L121#"+ttt+" [#r5元宝#b]购买#v1002424##l  #L122#"+ttt+" [#r5元宝#b]购买#v1002425##l\r\n#L123#"+ttt+" [#r5元宝#b]购买#v1002663##l  #L124#"+ttt+" [#r5元宝#b]购买#v1002677##l\r\n#L125#"+ttt+" [#r5元宝#b]购买#v1002699##l  #L126#"+ttt+" [#r5元宝#b]购买#v1002723##l\r\n#L127#"+ttt+" [#r5元宝#b]购买#v1002728##l  #L128#"+ttt+" [#r5元宝#b]购买#v1002798##l\r\n#L129#"+ttt+" [#r5元宝#b]购买#v1002850##l  #L130#"+ttt+" [#r5元宝#b]购买#v1002851##l\r\n#L131#"+ttt+" [#r5元宝#b]购买#v1002799##l  #L132#"+ttt+" [#r10元宝#b]购买#v1002926##l\r\n#L133#"+ttt+" [#r10元宝#b]购买#v1002357##l  #L134#"+ttt+" [#r10元宝#b]购买#v1002743##l\r\n#L135#"+ttt+" [#r10元宝#b]购买#v1002744##l  #L136#"+ttt+" [#r10元宝#b]购买#v1002745##l\r\n#L137#"+ttt+" [#r10元宝#b]购买#v1002746##l  #L138#"+ttt+" [#r10元宝#b]购买#v1002742##l\r\n#L139#"+ttt+" [#r5元宝#b]购买#v1002901##l  #L140#"+ttt+" [#r5元宝#b]购买#v1002902##l\r\n#L141#"+ttt+" [#r5元宝#b]购买#v1002939##l  #L142#"+ttt+" [#r5元宝#b]购买#v1002980##l\r\n#L143#"+ttt+" [#r5元宝#b]购买#v1003032##l  #L144#"+ttt+" [#r5元宝#b]购买#v1003033##l\r\n#L145#"+ttt+" [#r5元宝#b]购买#v1003034##l  #L146#"+ttt+" [#r5元宝#b]购买#v1003035##l");


}else if  (selection == 7) { 
cm.openNpc( 9201081);

}else if  (selection == 8) { 
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,元宝商城,一张卷轴#k1元宝.#b\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L16#"+ttt+" 购买手套攻击卷轴 #l  #L17#"+ttt+" 购买拳套攻击卷轴 #l\r\n#L18#"+ttt+" 购买战枪攻击卷轴 #l  #L19#"+ttt+" 购买双手剑攻卷轴 #l\r\n#L20#"+ttt+" 购买单手剑攻卷轴 #l  #L21#"+ttt+" 购买矛器攻击卷轴 #l\r\n#L22#"+ttt+" 购买短杖魔力卷轴 #l  #L23#"+ttt+" 购买长杖魔力卷轴 #l\r\n#L24#"+ttt+" 购买耳环智力卷轴 #l  #L25#"+ttt+" 购买鞋子跳跃卷轴 #l\r\n#L26#"+ttt+" 购买短剑攻击卷轴 #l  #L27#"+ttt+" 购买弓箭攻击卷轴 #l");

}else if  (selection == 9) { 
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,下元宝商城.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L95#"+ttt+" [#r10元宝#b]购买12000修炼点#l  \r\n#L96#"+ttt+" [#r25元宝#b]购买37500修炼点#l  \r\n#L97#"+ttt+" [#r50元宝#b]购买75000修炼点#l    \r\n#L98#"+ttt+" [#r100元宝#b]购买150000修炼点#l  \r\n#L99#"+ttt+" [#r200元宝#b]购买300000修炼点#r[hot]#l");


}else if  (selection == 10) { 
cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,元宝商城,.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L100#"+ttt+" [#r50元宝#b]购买战士重生装备套装#l  \r\n#L101#"+ttt+" [#r50元宝#b]购买飞侠重生装备套装#l  \r\n#L102#"+ttt+" [#r50元宝#b]购买弓手重生装备套装#l    \r\n#L103#"+ttt+" [#r50元宝#b]购买法师重生装备套装#l  \r\n#L104#"+ttt+" [#r50元宝#b]购买海盗重生装备套装#l");


}else if  (selection == 11) { 
cm.sendSimple(""+cm.mxdmz()+"冒险岛#k,元宝商城,.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L147#"+ttt+" 购买10万点卷[#r10元宝#b]#l#L148#"+ttt+" 购买20万点卷[#r15元宝#b]#l\r\n#L149#"+ttt+" 购买30万点卷[#r20元宝#b]#l#L150#"+ttt+" 购买50万点卷[#r40元宝#b] #l");

}else if  (selection == 12) { 
cm.sendSimple(""+cm.mxdmz()+"冒险岛#k,元宝商城,.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L151#"+ttt+" 购买双倍PK与PK吸血3000合成卡[#r20元宝#b]#l\r\n#L152#"+ttt+" 购买四倍PK与PK吸血5000合成卡[#r50元宝#b]#l");

}else if  (selection == 13) { 
cm.sendSimple(""+cm.mxdmz()+"冒险岛#k,元宝商城,.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L155#"+ttt+" 购买五个圣杯[#r1元宝#b]#l#L156#"+ttt+" 购买十个圣杯[#r2元宝#b]#l\r\n#L157#"+ttt+" 购二十个圣杯[#r3元宝#b]#l#L158#"+ttt+" 购三十个圣杯[#r4元宝#b] #l");

}else if  (selection == 14) { 
cm.sendSimple(""+cm.mxdmz()+"冒险岛#k,元宝商城,.\r\n#b  		剩余元宝:#r" + cm.getChar().getzb() + "#k#b 块  #b转生:#r" + cm.getChar().getReborns() + "#k#b 次\r\n#b\r\n#L159#"+ttt+" 购买五个邮票[#r15元宝#b]#l#L160#"+ttt+" 购买十个邮票[#r30元宝#b]#l\r\n#L161#"+ttt+" 购二十个邮票[#r50元宝#b]#l#L162#"+ttt+" 购三十个邮票[#r70元宝#b] #l");

}






}else if  (selection == 16) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040807,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044403,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043703,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043803,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040710,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043303,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044503,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


//玩具

}else if  (selection == 32) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1322051,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 33) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1432037,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 34) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1092022,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 35) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1332032,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 36) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1332021,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 37) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1372017,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 38) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402013,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 39) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402044,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 40) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402014,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 41) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402037,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 42) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302063,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 43) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302084,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 44) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302087,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 45) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302080,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 46) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402063,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 47) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1432039,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 48) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1442018,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 49) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1702166,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



//椅子开始

}else if  (selection == 50) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010029,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 51) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010030,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 52) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010031,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 53) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010032,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 54) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010033,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 55) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010028,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 56) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010021,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 57) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010036,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 58) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010043,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 59) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010044,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 60) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010054,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 61) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010057,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 62) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010058,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 63) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010068,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 64) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010070,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 65) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010073,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 66) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010075,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 67) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010077,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



}else if  (selection == 68) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010098,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 69) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010100,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 70) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010111,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 71) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012001,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 72) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012002,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 73) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012003,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 74) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012006,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 75) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012010,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//坐骑开始

}else if  (selection == 76) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902028,1); 
cm.gainItem(1912021,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 77) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902061,1); 
cm.gainItem(1912054,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 78) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902059,1); 
cm.gainItem(1912052,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 79) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902060,1); 
cm.gainItem(1912053,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 80) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902056,1); 
cm.gainItem(1912049,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 81) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902044,1); 
cm.gainItem(1912037,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 82) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902043,1); 
cm.gainItem(1912036,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 83) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902047,1); //直升飞机
cm.gainItem(1912040,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 84) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902034,1); //机器人
cm.gainItem(1912027,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 85) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902037,1); //超级飞船
cm.gainItem(1912030,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 86) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902055,1); //蝙蝠船
cm.gainItem(1912048,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 87) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902040,1); //机械师
cm.gainItem(1912033,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 88) { 
if(cm.getzb() >= 15) { 
cm.setzb(-10); 
cm.gainItem(1902041,1); //幼龙
cm.gainItem(1912034,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 89) { 
if(cm.getzb() >= 15) { 
cm.setzb(-10);
cm.gainItem(1902042,1); //神龙
cm.gainItem(1912035,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 90) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902057,1); //莱格斯的豺犬
cm.gainItem(1912050,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 91) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902049,1); //小牛
cm.gainItem(1912042,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 92) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902050,1); //摩托
cm.gainItem(1912043,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 93) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902051,1); //飞船
cm.gainItem(1912044,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 94) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902052,1); //天马
cm.gainItem(1912045,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 163) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902053,1); //黑龙
cm.gainItem(1912046,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 164) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902054,1); //海盗船
cm.gainItem(1912047,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


//永恒开始


}else if  (selection == 95) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainrw15(12000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 96) { 
if(cm.getzb() >= 25) { 
cm.setzb(-25);
cm.gainrw15(37500);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 97) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainrw15(75000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 98) { 
if(cm.getzb() >= 100) { 
cm.setzb(-100); 
cm.gainrw15(150000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 99) { 
if(cm.getzb() >= 200) { 
cm.setzb(-200);
cm.gainrw15(300000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//重生装备

}else if  (selection == 100) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002790,1); 
cm.gainItem(1052160,1); 
cm.gainItem(1082239,1); 
cm.gainItem(1072361,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1402047,1); 
cm.gainItem(1432049,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 101) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002793,1); 
cm.gainItem(1052163,1); 
cm.gainItem(1082242,1); 
cm.gainItem(1072364,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1332076,1); 
cm.gainItem(1472071,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 102) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(1002792,1); 
cm.gainItem(1052162,1); 
cm.gainItem(1082241,1); 
cm.gainItem(1072363,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1452059,1); 
cm.gainItem(1462051,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 103) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(1002791,1); 
cm.gainItem(1052161,1); 
cm.gainItem(1082240,1); 
cm.gainItem(1072362,1); 
cm.gainItem(1382059,1); 
cm.gainItem(1372045,1); 
cm.gainItem(1032031,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 104) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002794,1); 
cm.gainItem(1052164,1); 
cm.gainItem(1082243,1); 
cm.gainItem(1072365,1); 
cm.gainItem(1482024,1); 
cm.gainItem(1492025,1); 
cm.gainItem(1032031,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


//黄金武器

}else if  (selection == 105) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1302142,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 106) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1312056,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 107) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1322084,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 108) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1332114,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 109) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1372071,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 110) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1382093,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 111) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1402085,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 112) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1412055,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 113) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1422057,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 114) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1432075,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 115) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1442104,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 116) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1452100,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 117) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1462085,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 118) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1472111,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 119) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1482073,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 120) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1492073,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//帽子开始

}else if  (selection == 121) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002424,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 122) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002425,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 123) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002663,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 124) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002677,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 125) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002699,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 126) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002723,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 127) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002728,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 128) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002798,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 129) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002850,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 130) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002851,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 131) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002799,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 132) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002894,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 133) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002895,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 134) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002896,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 135) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002897,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 136) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002898,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 137) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002899,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 138) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002900,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 139) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002901,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 140) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002902,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 141) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002939,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 142) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002980,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}


}else if  (selection == 143) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003032,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 144) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003033,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 145) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003034,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 146) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003035,1); 
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//点卷购买

}else if  (selection == 147) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainNX(100000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 148) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainNX(200000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 149) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainNX(300000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 150) { 
if(cm.getzb() >= 40) { 
cm.setzb(-40); 
cm.gainNX(500000);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//PK道具卡

}else if  (selection == 151) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(5220010,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 152) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(5220000,1);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 153) { 
if(cm.getzb() >= 0) { 
cm.setzb(-0); 
//cm.gainNX(300000);
cm.sendOk("#b等待开放.");
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 154) { 
if(cm.getzb() >= 0) { 
cm.setzb(-0); 
//cm.gainNX(500000);
cm.sendOk("#b等待开放.");
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//购买圣杯

}else if  (selection == 155) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(4031454,5);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 156) { 
if(cm.getzb() >= 2) { 
cm.setzb(-2); 
cm.gainItem(4031454,10);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 157) { 
if(cm.getzb() >= 3) { 
cm.setzb(-3); 
cm.gainItem(4031454,20);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 158) { 
if(cm.getzb() >= 4) { 
cm.setzb(-4); 
cm.gainItem(4031454,30);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

//购买邮票

}else if  (selection == 159) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(4002002,5);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 160) { 
if(cm.getzb() >= 30) { 
cm.setzb(-30); 
cm.gainItem(4002002,10);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 161) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(4002002,20);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}

}else if  (selection == 162) { 
if(cm.getzb() >= 70) { 
cm.setzb(-70); 
cm.gainItem(4002002,30);
cm.sendOk("#b恭喜购买成功."); 
cm.dispose(); 
} else { 
cm.sendOk("#b你没有足够的元宝，请联系客服充值."); 
cm.dispose();   
}



					
}
}
}


