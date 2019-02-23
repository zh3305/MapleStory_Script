importPackage(Packages.client.inventory);
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标

var status = 0;
var choose = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {


            var text = "亲爱的#r#h ##k您好，请选择你需要的功能！\r\n";  
           text += "#r#e#L4#" + yun + " 我要用1亿金币#b兑换#r1个#v4009370##l\r\n";
           text += "#r#e#L5#" + yun + " 我要用5亿金币#b兑换#r5个#v4009370##l\r\n";
           text += "#r#e#L3#" + yun + " 我要用1个#v4009370##b兑换#r1亿金币#l\r\n";
           text += "#r#e#L6#" + yun + " 我要用5个#v4009370##b兑换#r5亿金币#l\r\n";
           
			
            cm.sendSimple(text);

        } else if (status == 1) {
           
			switch(selection){
				case 1:
		                 cm.dispose();
                                cm.openNpc(9310005,"wugong");
					break;
				case 2:
					cm.sendYesNo("确定要用#v4000008#兑换500000000金币吗");
					break;
				case 3:
					cm.sendYesNo("确定要用1个#v4009370#兑换1亿金币吗");
					break;
				case 4:
					cm.sendYesNo("确定要用1亿金币兑换1个#v4009370#吗");
					break;
				case 5:
					cm.sendYesNo("确定要用5亿金币兑换5个#v4009370#吗");
					break;
				case 6:
					cm.sendYesNo("确定要用5个#v4009370#兑换5亿金币吗");
					break;
				case 7:
		                 cm.dispose();
                                cm.openShop(9010030);
					break;
				case 8:
		                 cm.dispose();
                                cm.openNpc(9310073,"xxdh1");
					break;
			}
			choose = selection;
        } else if (status == 2) {
            switch(choose){
				case 1:
					if(cm.haveItem(4000008, 200)) {
						cm.gainItem(4000008,-200);
						cm.gainMeso(100000000);
                                                cm.playerMessage(1, "恭喜您获得1E金币！");
                             cm.worldSpouseMessage(0x20, "[兑换金币] : 恭喜 " + cm.getChar().getName() + " 在市场相框NPC“憩吧”用200个道符兑换了1E金币");
					}else{
						cm.sendSimple("您背包没有200个#v4000008#");
					}
					cm.dispose();
					break;
				case 2:
					if(cm.haveItem(4000008, 1000)) {
						cm.gainItem(4000008,-1000);
						cm.gainMeso(500000000);
                                                cm.playerMessage(1, "恭喜您获得5E金币！");
                             cm.worldSpouseMessage(0x0D, "[兑换金币] : 恭喜 " + cm.getChar().getName() + " 在市场相框NPC“憩吧”用1000个道符兑换了5E金币");

					}else{
						cm.sendSimple("您背包没有1000个#v4000008#");
					}
					cm.dispose();
					break;
				case 3:
					if(cm.haveItem(4009370, 1)) {					
						cm.gainMeso(100000000);
						cm.gainItem(4009370, -1);
                                               // cm.playerMessage(1, "恭喜您获得200W金币！");
                              cm.sendOk("兑换成功：获得#r1亿金币!");
                             cm.worldSpouseMessage(0x0D, "[金币中介] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”用1个购物袋兑换了1亿金币");
					}else{
						cm.sendSimple("您背包没有1个#v4009370#");
					}
					cm.dispose();
					break;
				case 4:
					if (cm.getMeso() >= 100000000){			
						cm.gainMeso(-100000000);
						cm.gainItem(4009370, 1);
                                          // cm.playerMessage(1, "恭喜您获得1张！");
                            cm.sendOk("兑换成功：获得#r1个#v4009370#!");
 cm.worldSpouseMessage(0x0D, "[金币中介] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”用1亿金币兑换了1个购物袋！");
					}else{
						cm.sendSimple("您背包没有1亿金币！");
					}
					cm.dispose();
					break;
				case 5:
					if (cm.getMeso() >= 500000000){			
						cm.gainMeso(-500000000);
						cm.gainItem(4009370, 5);
                                          // cm.playerMessage(1, "恭喜您获得1张！");
                            cm.sendOk("兑换成功：获得#r5个#v4009370#!");
 cm.worldSpouseMessage(0x0D, "[金币中介] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”用5亿金币兑换了5个购物袋！");
					}else{
						cm.sendSimple("您背包没有5亿金币！");
					}
					cm.dispose();
					break;
				case 7:
		                 cm.dispose();
                                cm.openShop(9010030);
					break;
				case 6:
					if(cm.haveItem(4009370, 5)) {								cm.gainItem(4009370, -5);
						cm.gainMeso(500000000);

                                               // cm.playerMessage(1, "恭喜您获得200W金币！");
                              cm.sendOk("兑换成功：获得#r5亿金币!");
                             cm.worldSpouseMessage(0x0D, "[金币中介] : 恭喜 " + cm.getChar().getName() + " 在市场“雪人凯利”用5个购物袋兑换了5亿金币");
					}else{
						cm.sendSimple("您背包没有5个#v4009370#");
					}
					cm.dispose();
					break;
			}
		}
    }
}