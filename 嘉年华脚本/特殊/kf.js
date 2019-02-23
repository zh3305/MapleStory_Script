var status;
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品图标
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
	cm.dispose();
	return;
    } else if (mode == 1){
	status++;
    } else {
	status--;
    }

    switch (status) {
        case 0: 
	    cm.sendOk("#b#r#e"+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+" "+wn1+"\r\n#d棉花冒险岛 #r送#b10#r万点卷及#b50#r元余额 可以购买礼包点卷\r\n#d客服QQ:#r3122262134  （领取余额发游戏名给客服）\n\r #dQQ群②：#r458569952  （群①已满） \n\r #d官网：#b www.223mh.com  \n\r #r特色：#d本服新发型脸型免费换市场7洞，金币可换点卷！\n\r\n\r #r"+icon5+" 本服仿官，职业技能修复比较好，欢迎大家来玩！");
            cm.dispose();
            break;
        case 1: // 请保证背包有3~4空格在领取，以免造成损失！#k\n\r #v4001839# x#r500#k #v2431724# x#r1#k #v2049116# x#r10#k #v5062024# x#r10#k #v4001715# x#r1#k(卖商店获取1E金币) #b以及点卷20W，余额50元！
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
