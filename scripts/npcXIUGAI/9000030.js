importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.tools); 

var status = 0;    //需要放上所有一些有用的物品
var typed=0;
var fee=0; 
var chance3 = (Math.floor(Math.random()*8)+1);
var chance = Math.floor(Math.random()*4+1); 
var dianjuan=35;  //购买20万点卷需要的羽翼币
var jindaizi=30;  //购买2个金袋子需要的羽翼币
var vip1=1;  //购买初级会员需要的羽翼币
var vip2=500;  //购买高级会员需要的羽翼币
var vip3=1500; //购买终极会员需要的羽翼币
var vip4=3000; //购买至尊会员需要的羽翼币
var vip1tovip2=500;  //初级会员升高级会员需要的羽翼币
var vip2tovip3=1000;  //高级会员升终极会员需要的羽翼币
var vip3tovip4=1500;  //终极会员升至尊会员需要的羽翼币
var shuangbei=30;   //购买双倍经验卡需要的羽翼币
var sibei=300;      //购买四倍经验卡需要的羽翼币
var pksibei=500;    //购买四倍PK无敌卡需要的羽翼币
var zjghm=50; //升级装备攻击力和魔法力需要的羽翼币
var taocan100=50;   //提升100套餐需要的羽翼币
var taocan200=100;   //提升200套餐需要的羽翼币
var taocan300=150;   //提升300套餐需要的羽翼币
var taocan400=200;   //提升300套餐需要的羽翼币
var taocan1000=500;  //提升1000套餐需要的羽翼币
var wenduji=150;     //购买温度计需要的羽翼币
var nanguadeng=130;  //购买南瓜灯笼需要的羽翼币
var bingdao=108;     //购买燃烧的冰刀需要的羽翼币
var huodao=100;      //购买燃烧的火焰刀需要的羽翼币
var langya=65;       //购买狼牙棒需要的羽翼币
var shengjics=10;    //升级装备可升级次数需要的羽翼币
var fbk=50;  //购买PK防暴卡需要的羽翼币       
var zsb=1;  //购买转生纪念币需要的羽翼币
var pkqkk=60;//购买PK战绩清空卡需要的羽翼币
var qhten=20;        //购买强化10次装备的道具需要的羽翼币
var qhfif=40;        //购买强化50次装备的道具需要的羽翼币
var qhone=70;        //购买强化100次装备的道具需要的羽翼币
var qhtwo=150;        //购买强化200次装备的道具需要的羽翼币

var zjqh=10000;        //进行装备终极强化需要的羽翼币

var zbjs=10;        //进行装备装备解锁需要的羽翼币

var cjqhyyb=10;        //进行初级强化需要的羽翼币
var cjqhjb=1;        //进行初级强化需要的金币

var gjqhyyb=30;        //进行高级强化需要的羽翼币
var gjqhjb=1000000000;        //进行高级强化需要的金币

var chaojqhyyb=80;        //进行超级强化需要的羽翼币
var chaojs=1000000000;        //进行超级强化需要的金币

var zzqhyyb=100;        //进行至尊强化需要的羽翼币
var zzqhjb=1000000000;        //进行至尊强化需要的金币


var luk =0 ;
var beilv = 0.3;   //副装备属性相加后相乘的倍率
var needap1 = 500; //需要的属性点
var aver = needap*0.1 ;
var needmon1 = 2000000000;  //需要的金钱
var needdona1 = 200; //需要的羽翼币


var gmmima =55555 ;

var yyb;


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*100);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*10+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*5+2);


var wqyoyo = Array(1452044, 1432038, 1372038, 1382036,1462039,1402037,1412026);//武器的ID
var change=Math.floor(Math.random()*3)+1;// 奖励机率,.
var changed=Math.floor(Math.random()*10)+2;// 数量机率.
var changeo=Math.floor(Math.random()*6);// 武器的随机率,6把.
var changew=Math.floor(Math.random()*100)+5;// 武器的攻击机率
var changem=Math.floor(Math.random()*100)+5;// 武器的魔法机率


var jkms;
var compchoice; 
var playerchoice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "#fUI/UIWindow.img/RpsGame/draw#"; 
var spacing = "                                   "; 
var beta = "#fUI/UIWindow.img/BetaEdition/BetaEdition#\r\n"; 
var winmatch = false; 
var losematch = false 
var drawmatch = false; 
var cost = 2000000; //需要多少钱玩,输多少.. 或者自己改..
var winmesos = 2000000; //赢钱，或者自己改
var items = new Array(2000005); //以此类推,这些东西是你想给玩家赢后的随机奖励,我写的这些是我乱添加的,你们要自己改掉,我不知道有没有这些东西..
var selectedType = -1; 
var selectedItem = -1; 
var map = 910000000; 
var textedd = new Array("祝你在MapleWings找到真心朋友","祝你在MapleWings冒险岛过得快乐","祝你在MapleWings找到真心朋友");

var test = 0;  //64
var wui = 0;
var fstype=0;
var selected = 1;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);

var t=new Array("存钱","取钱","查看","开户");
var money=new Array("100W","300W","500W","1000W","1E","10E","20E"); 
var money1=new Array("1000000","3000000","5000000","10000000","100000000","1000000000","2000000000"); 
var x=0;

var text;
var fee;
var chance = Math.floor(Math.random()*4+1);
var music = Array("Bgm00/SleepyWood", "Bgm00/FloralLife", "Bgm00/GoPicnic", "Bgm00/Nightmare", "Bgm00/RestNPeace",
"Bgm01/AncientMove", "Bgm01/MoonlightShadow", "Bgm01/WhereTheBarlogFrom", "Bgm01/CavaBien", "Bgm01/HighlandStar", "Bgm01/BadGuys",
"Bgm02/MissingYou", "Bgm02/WhenTheMorningComes", "Bgm02/EvilEyes", "Bgm02/JungleBook", "Bgm02/AboveTheTreetops",
"Bgm03/Subway", "Bgm03/Elfwood", "Bgm03/BlueSky", "Bgm03/Beachway", "Bgm03/SnowyVillage",
"Bgm04/PlayWithMe", "Bgm04/WhiteChristmas", "Bgm04/UponTheSky", "Bgm04/ArabPirate", "Bgm04/Shinin'Harbor", "Bgm04/WarmRegard",
"Bgm05/WolfWood", "Bgm05/DownToTheCave", "Bgm05/AbandonedMine", "Bgm05/MineQuest", "Bgm05/HellGate",
"Bgm06/FinalFight", "Bgm06/WelcomeToTheHell", "Bgm06/ComeWithMe", "Bgm06/FlyingInABlueDream", "Bgm06/FantasticThinking",
"Bgm07/WaltzForWork", "Bgm07/WhereverYouAre", "Bgm07/FunnyTimeMaker", "Bgm07/HighEnough", "Bgm07/Fantasia",
"Bgm08/LetsMarch", "Bgm08/ForTheGlory", "Bgm08/FindingForest", "Bgm08/LetsHuntAliens", "Bgm08/PlotOfPixie",
"Bgm09/DarkShadow", "Bgm09/TheyMenacingYou", "Bgm09/FairyTale", "Bgm09/FairyTalediffvers", "Bgm09/TimeAttack",
"Bgm10/Timeless", "Bgm10/TimelessB", "Bgm10/BizarreTales", "Bgm10/TheWayGrotesque", "Bgm10/Eregos",
"Bgm11/BlueWorld", "Bgm11/Aquarium", "Bgm11/ShiningSea", "Bgm11/DownTown", "Bgm11/DarkMountain",
"Bgm12/AquaCave", "Bgm12/DeepSee", "Bgm12/WaterWay", "Bgm12/AcientRemain", "Bgm12/RuinCastle", "Bgm12/Dispute",
"Bgm13/CokeTown", "Bgm13/Leafre", "Bgm13/Minar'sDream", "Bgm13/AcientForest", "Bgm13/TowerOfGoddess",
"Bgm14/DragonLoad", "Bgm14/HonTale", "Bgm14/CaveOfHontale", "Bgm14/DragonNest", "Bgm14/Ariant", "Bgm14/HotDesert",
"Bgm15/MureungHill", "Bgm15/MureungForest", "Bgm15/WhiteHerb", "Bgm15/Pirate", "Bgm15/SunsetDesert",
"BgmEvent/FunnyRabbit", "BgmEvent/FunnyRabbitFaster",
"BgmGL/amoria", "BgmGL/chapel", "BgmGL/cathedral", "BgmGL/Amorianchallenge",
"BgmJp/Feeling", "BgmJp/BizarreForest", "BgmJp/Hana", "BgmJp/Yume", "BgmJp/Bathroom", "BgmJp/BattleField", "BgmJp/FirstStepMaster");
var chanceo=(Math.floor(Math.random()*8)+1);
var selected;
var typedd=5120000;


var beauty = 0;
var hair = Array(34210, 34050, 34240, 33160);
var hairnew = Array();
var colors = Array();



var haircolor = Array();
var skin = Array(0, 1, 2, 3, 4);
var hair1 = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740);
var face1 = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022);
var facenew = Array();


var face0 = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024);
var hair0 = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30090, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30680, 30690, 30700, 30710, 30720, 30730, 30750, 30760, 30780, 307090, 30800, 30810);


var maps = Array( 
Array("新手帽子",1002562,3000), 
Array("钢管",1322006,1500), 
Array("枫之谷伞",1302058,1200), 
Array("玩具匠人的锤子",1422036,2000), 
Array("清酒",1422011,1500), 
Array("南瓜糖罐",1302034,1500), 
Array("玩具匠人帽",1002677,1500), 
Array("独立日纪念头盔",1002527,10000), 
Array("圣诞鹿帽",1002717,15000), 
Array("燃烧的火焰刀",1302063,20000), 
Array("尊贵沙发",3010012,18888) 
); 
var selectedMap = -1; 

var needyyb = 2;
var needjb = 100000000;

var needyyb1 = 1;
var needjb1 = 50000000;

var needap = 0;
var needsp = 0;
var needdona = 5;
var needmon = 100000000;
var slot;
var item;
var qty;
var display;
var playernumber = Math.floor(Math.random()*4+1);
var types=new Array("━═☆装备栏☆═━","━═☆消耗栏☆═━","━═☆任务栏☆═━","━═☆杂物栏☆═━","━═☆现金栏☆═━");
var itemname;



function start() { 
status = -1; 
action(1, 0, 0); 
} 

function action(mode, type, selection) { 
if (mode == -1) {
cm.dispose(); 
} else { 
if (status >= 0 && mode == 0) {
                
cm.sendOk("\r\n#d再见,如果你想好了要做什么,我会很乐意的为你服务的..");
cm.dispose();
return;                    
}
if (mode == 1) {
status++; 
}
else {
status--;
}
if (status == 0) { 

cm.mapMessage("[超级管理员]:最近新增加很多新功能，里面有很多稀有功能哦！来看看吧!!");
if(cm.getHour()>=0 && cm.getHour()>=12){
cm.changeMusic("BgmJp/FirstStepMaster");
}else if(cm.getHour()>=18 && cm.getHour()>=23){
cm.changeMusic("BgmJp/FirstStepMaster");
}else{
cm.changeMusic("BgmJp/FirstStepMaster");
}


if(cm.getChar().getMapId()==970010000){//判断NPC所在地图
if (cm.getChar().getVip() >= 1) {
cm.sendSimple("#dVIP玩家： #e#r[   #h #  ]#k  #n#d你好。欢迎来到VIP专属地图！\r\n#d以下是我们#rMapleWingsw#d为#rVIP#d的服务，请选择：\r\n#r#L100000#进入-----初级VIP 服务 #l\r\n\r\n #r#L200000#进入-----高级VIP 服务 #l #e\r\n\r\n#r#L300000#进入-----超级VIP 服务 #l \r\n\r\n#r#L400000#进入-----至尊VIP 服务 #l  \r\n\r\n#r#L500000#回自由市场 #l  "); 

}else{
cm.sendSimple("#d欢迎来到VIP专属地图。#r你不是VIP，我不能为你服务!请选择：\r\n\r\n#r#L500000#回自由市场 #l"); 
cm.dispose();
}


} else {
if(cm.getChar().getAccountID()==1){
cm.sendSimple("#d\r\n尊贵的管理员： #e#r[   #h #  ]#k  #n#d您好。#e\r\n#r以下是#r〖 7 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④#e\r\n#r#L5555#┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑤〖#b内含#r特色活动，#d活动物品兑换玩具永恒装备#b等服务#r〗⑤#e\r\n#r#L6666#┈┈┈┈┈┈━═☆超级项目⑥☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑥〖#b内含#r装备超级强化，#d武器升级，#r装备超合成#b等服务#r〗⑥#e\r\n#r#L7777#┈┈┈┈┈┈━═☆超级项目⑦☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑦〖#b内含#r特色活动(抽奖和下注)，#d副本挑战(密林)#b等服务#r〗⑦ \r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 你目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k您目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" #r\r\n#L888# 进入---推广员系统   #r\r\n#L999# 进入---终极管理员服务(密码)  "); 
cm.getChar().saveToDB(true,true);




 } else if(cm.getChar().getReborns()>=1){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你已经转生:    #r"+cm.getChar().getReborns()+"#d     次   #e\r\n#r以下是#r〖 7 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④#e\r\n#r#L5555#┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑤〖#b内含#r特色活动，#d活动物品兑换玩具永恒装备#b等服务#r〗⑤#e\r\n#r#L6666#┈┈┈┈┈┈━═☆超级项目⑥☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑥〖#b内含#r装备超级强化，#d武器升级，#r装备超合成#b等服务#r〗⑥#e\r\n#r#L7777#┈┈┈┈┈┈━═☆超级项目⑦☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑦〖#b内含#r特色活动(抽奖和下注)，#d副本挑战(密林)#b等服务#r〗⑦ \r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 你目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k您目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" #r\r\n#L888# 进入---推广员系统    #r\r\n#L999# 进入---终极管理员服务(密码)  "); 
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 200 ){

cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 200--255 之间。 #e\r\n#r以下是#r〖 7 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④#e\r\n#r#L5555#┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑤〖#b内含#r特色活动，#d活动物品兑换玩具永恒装备#b等服务#r〗⑤#e\r\n#r#L6666#┈┈┈┈┈┈━═☆超级项目⑥☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑥〖#b内含#r装备超级强化，#d武器升级，#r装备超合成#b等服务#r〗⑥#e\r\n#r#L7777#┈┈┈┈┈┈━═☆超级项目⑦☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑦〖#b内含#r特色活动(抽奖和下注)，#d副本挑战(密林)#b等服务#r〗⑦ \r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 你目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k您目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" #r\r\n#L888# 进入---推广员系统  "); 
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 150 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 150--200 之间。 #e\r\n#r以下是#r〖 6 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④#e\r\n#r#L5555#┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑤〖#b内含#r特色活动，#d活动物品兑换玩具永恒装备#b等服务#r〗⑤#e\r\n#r#L6666#┈┈┈┈┈┈━═☆超级项目⑥☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑥〖#b内含#r装备超级强化，#d武器升级，#r装备超合成#b等服务#r〗⑥\r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 120 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 120--150 之间。 #e\r\n#r以下是#r〖 5 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④#e\r\n#r#L5555#┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n ⑤〖#b内含#r特色活动，#d活动物品兑换玩具永恒装备#b等服务#r〗⑤\r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+"#r\r\n#L888# 进入---推广员系统   ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 100 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 100--120 之间。 #e\r\n#r以下是#r〖 4 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③  #e\r\n#r#L4444#┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈ #l \r\n\r\n#n④〖#b内含#r副本挑战，#d趣味娱乐，辅助和特殊功能#b等服务#r〗④\r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+"#r\r\n#L888# 进入---推广员系统   ");  
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 70 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 70--100 之间。 #e\r\n#r以下是#r〖 3 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l  \r\n\r\n#n②〖#b内含#r转生转职满技能，#b银行，#d练级刷钱地图#b等服务#r〗②#e\r\n#r#L3333#┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ #l \r\n\r\n#n③〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗③ \r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" #r\r\n#L888# 进入---推广员系统  ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 30 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 30--70 之间。 #e\r\n#r以下是#r〖 2 〗#e个超级项目：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①#e\r\n#r#L2222#┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈ #l \r\n\r\n#n②〖#d内含#r开房PK，#b清PK战绩,#d纪念币和金袋换取#b等服务#r〗②\r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 10 ){
cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#d现在你的等级已经在 10--30 之间。 #e\r\n#r以下是#r〖 1 〗#e个超级项目，请选择：#e\r\n#r#L1111#┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈ #l   \r\n\r\n#n①〖#b内含#rVIP兑换升级，#d使用冒险币购买 羽翼币 #b等服务#r〗①\r\n\r\n#n  #k现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.  #k你目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次  VIP等级为：#r"+cm.getChar().getVip()+" #r\r\n#L888# 进入---推广员系统  ");  
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 1 ){

cm.sendSimple("#d\r\n亲爱的： #e#r[#h #]#k  #n#d你好,我是MapleWings超级管理员。#e\r\n#r你还是新手请做完新手任务，升级到10以上，我才为你提供服务。#e\r\n#r以下是我提供服务要求：#e\r\n#k1. 升级到10  级以上，提供服务超级项目1个#e\r\n#k2. 升级到30  级以上，提供服务超级项目2个#e\r\n#k3. 升级到70  级以上，提供服务超级项目3个#e\r\n#b4. 升级到100级以上，提供服务超级项目4个#e\r\n#g5. 升级到120级以上，提供服务超级项目5个#e\r\n#d6. 升级到150级以上，提供服务超级项目6个#e\r\n#r7. 升级到200级以上，提供服务超级项目7个#e\r\n#r8. 转生1次以上后，提供服务超级项目7个#d\r\n 加油吧，努力升级，慢慢的享受乐趣！！不要急着升级！");  
cm.getChar().saveToDB(true,true);






}
}


} else if (status == 1) {


if (selection==999){
typed=999999999;
cm.sendGetText("#e\r\n┈┈┈┈┈┈┈━═☆终极管理员☆═━┈┈┈┈┈┈\r\n#r请输入管理员密码：\r\n#d(注意：不是GM请不要乱输入)");

} else if (selection==100000){
if (cm.getChar().getVip() >= 1) {
typed=100100;
cm.sendSimple("#d\r\n初级VIP玩家： #e#r[   #h #  ]#k  #n#d你好。欢迎来到VIP专属地图！\r\n#d以下是我们#rMapleWingsw#d为你提供的服务，请选择：#e\r\n#r#L100001#进入-----改变发型和发色服务 #l\r\n\r\n #r#L100002#进入-----初级VIP 专属商店 #l   "); 

}else{
cm.sendOk("#d欢迎来到VIP专属地图。#r你不是VIP，我不能为你服务!"); 
cm.dispose();
}

} else if (selection==200000){
if (cm.getChar().getVip() >= 2) {
typed=200100;
cm.sendSimple("#d\r\n高级VIP玩家： #e#r[   #h #  ]#k  #n#d你好。欢迎来到VIP专属地图！\r\n#d以下是我们#rMapleWingsw#d为你提供的服务，请选择：#e\r\n#r#L200001#进入-----高级VIP专属服务 #l\r\n\r\n #r#L200002#进入-----高级VIP 专属商店 #l   "); 

}else{
cm.sendOk("#d欢迎来到VIP专属地图。#r你不是高级VIP，我不能为你服务!"); 
cm.dispose();
}

} else if (selection==300000){
if (cm.getChar().getVip() >= 3) {
typed=300100;
cm.sendSimple("#d\r\n超级VIP玩家： #e#r[   #h #  ]#k  #n#d你好。欢迎来到VIP专属地图！\r\n#d以下是我们#rMapleWingsw#d为你提供的服务，请选择：#e\r\n#r#L300001#进入-----超级VIP专属服务 #l\r\n\r\n #r#L300002#进入-----超级VIP 专属商店 #l   "); 

}else{
cm.sendOk("#d欢迎来到VIP专属地图。#r你不是超级VIP，我不能为你服务!"); 
cm.dispose();
}
} else if (selection==400000){
if (cm.getChar().getVip() >= 4) {
typed=400100;
cm.sendSimple("#d\r\n尊贵的至尊VIP玩家： #e#r[   #h #  ]#k  #n#d您好。欢迎来到VIP专属地图！\r\n#d以下是我们#rMapleWingsw#d为您提供的服务，请选择：#e\r\n#r#L400001#进入-----至尊VIP专属服务 #l\r\n\r\n #r#L400002#进入-----至尊VIP 专属商店 #l   "); 

}else{
cm.sendOk("#d欢迎来到VIP专属地图。#r你不是超级VIP，我不能为你服务!"); 
cm.dispose();
}



} else if (selection==500000){
		cm.warp(910000000, 0);
		cm.dispose();
} else if (selection==888){
typed=888888888;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆推广员系统☆═━┈┈┈┈┈┈\r\n#n#r问:请问如何加入推广员和进行推广呢?\r\n#k#d答:您只需要把您的推广ID记下来,然后把你的朋友介绍过来,让他点击下面的验证推广员,在弹出来的框框中输您的推广ID就可以了.这样,你的朋友就变成你的推广玩家了.当然你的朋友还可以继续叫别的朋友来,然后把推广ID发给朋友的朋友也可以进行验证哟.\r\n#r问:验证推广员后有什么好处呢?#k\r\n#d答:当你介绍来的朋友达到#d5次转生#r以后,您就可以自动获得一点贡献点,当集满2点贡献点以后就可以在下面点击兑换羽翼币了(#r可以兑换200个羽翼币哦！#d).同时你还能得到丰富的奖励.\r\n#r#e#L810000000#开始验证推广员#l                #L1#兑换羽翼币#l#n\r\n\r\n#k您的推广ID是:#r"+cm.getChar().getAccountID()+"#k          您目前的贡献点是:#r"+cm.getgxd()+"#k...");

} else if (selection==1111){
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目①☆═━┈┈┈┈┈┈\r\n#d请选择你需要的服务：\r\n#n#L77777##r进入-----#e〖玩家专区〗#n#l #L88888##r进入-----#e〖VIP专区〗#n #l\r\n#r#L0#进入-----#e〖羽翼专区〗#n#l #r#L55555#进入-----#e〖强化专区〗#n#l \r\n\r\n(使用#d羽翼币#b在线购买#r会员和道具#k和#d免费成为VIP1)\r\n#n#L99999##d使用-----#e#r〖冒险币〗#d   #n购买#e  #r〖羽翼币〗 #l#n\r\n#L19##d进行-----#r#e慈善基金捐款#n#l \r\n#L200000000##d进入-----打怪掉落的冒险币自动捡取系统(#rVIP3-4专属服务)#l\r\n#L6012##d进行-----#e#r装备终极强化#l#n\r\n#L6200##d进行-----#e#r装备合成 #l#n \r\n#d#L1#升级-----#d武器攻击力和魔法力#r(装备要在第1格)#l \r\n#n#d#L2##b进入-----#r提升#b武器攻击力和魔法力套餐#r(装备要在第1格)#l \r\n#n#b#L4#使用-----羽翼币提升装备可升级次数#r(装备要在第1格) #l \r\n#n#L5006##d使用-----羽翼币购买#r玩具 #l \r\n#n#r#L3##d使用-----用羽翼币购买#r特殊玩具#d[NEW] #l \r\n#n#r#L6#查看如何获得羽翼币 #l \r\n#L7#查看如何加入会员与会员待遇详细介绍#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 3333) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目③☆═━┈┈┈┈┈┈ \r\n#d请选择你需要的服务：\r\n#n#L10#自杀[为情所杀?]#l\r\n#d#L11#创建-----房间与人PK[谁才是真正的英雄]#l#r \r\n#L12#换取-----转生纪念币#l           #L13#进行-----石头剪刀布#l\r\n#L14#进行-----变性手术[已开通]#l #L15#创建------友谊戒指#l\r\n#L16#使用-----金袋换15亿金币#l  #L17#使用-----15亿金币换金袋#l\r\n#L18##b清除-----PK战绩#l\r\n#L21##d进入------PK联盟(#r战国联盟)#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 2222) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目②☆═━┈┈┈┈┈┈\r\n#d请选择你所需要的服务：\r\n#n#d#L2000#转生服务#b [转生可以使你当得更加强大]#l\r\n#L2007##d1-4转转职服务#b [需要转生1次以上]#l\r\n#L2008##d银行存款系统#b [可以存下背包里多余的冒险币]#l\r\n#L2009##d激活所有技能#b [需要转生5次以上]#l\r\n#L2010##d重设/添加属性#b [快速加点/重设属性]#l\r\n#L2011##r玩家进入VIP刷钱地图#b [每天只可以进入10次] #r[Hot]#l\r\n#r#L2012##r查看综合排行榜#b [里面有很多类型的排行哦]#g [New]#l\r\n#r#L2013##r进入 【枫叶专属地图】 #b [里面有专属枫叶怪物]#l\r\n#r#L2014##r幸运抽奖 #b[可以抽到稀有玩具哦！30羽翼币/次]#g [New]#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 4444) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目④☆═━┈┈┈┈┈┈\r\n#d请选择你需要的服务：\r\n#r┈┈┈┈┈┈┈━═☆副本挑战☆═━┈┈┈┈┈┈┈\r\n#n#r#L4001#挑战大王蜈蚣#l#L4002##d挑战芙德莱#l#L4003##r挑战魔界之王#l\r\n\r\n#r#e┈┈┈┈┈┈┈━═☆趣味娱乐☆═━┈┈┈┈┈┈┈\r\n#n#L4004##d幸运赌博机#l#L4004##d金猪送财点播#l#L4006##r财富夺宝行动#l\r\n\r\n#r#e┈┈┈┈┈┈┈━═☆辅助功能☆═━┈┈┈┈┈┈┈\r\n#n#L4007##d全服超级喇叭#l#L4008##r全区超级无敌喊话#l#d#L4009#音乐歌曲点播#l\r\n\r\n#r#e┈┈┈┈┈┈┈━═☆特殊功能☆═━┈┈┈┈┈┈┈\r\n#L4010##k#n至尊家族屋管理#l#L4012##b给管理员发信息#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 5555) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目⑤☆═━┈┈┈┈┈┈\r\n#d请选择你所需要的服务：\r\n#n#L5001##b进入-----12点#d①号枫叶专属地图#r[HOT]#g[NEW]#b#l\r\n#b#L5002#进入-----15点#d②号枫叶专属地图#r[HOT]#g[NEW]#b☆═━┈#l\r\n#L5003##b参加收集-----#d人参宝宝#b活动 #r[HOT]#g[NEW]#l\r\n#n#L5004##d进入-----枫叶①号兑换处#l\r\n#L5005##d进入-----枫叶②号兑换处#l\r\n#L5007##d使用-----钥匙  换取   #r永恒装备#l\r\n#L5008##d使用-----#r永恒卷轴   #d换取   所有#dGM卷轴[成功率:100%]#l\r\n#L5009##d使用-----#r属性点换取稀有玩具以及其他物品#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 6666) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目⑥☆═━┈┈┈┈┈┈\r\n#d请选择你所需要的服务：#n\r\n#L6001##d增加-----#r装备物理攻击力#d#l#L6002##d增加-----#r装备物理魔法力#l\r\n#L6011##d增加-----#r装备可升级次数#l\r\n#L6003##d增加-----#r装备力量#l           #L6004##d增加-----#r装备敏捷#l\r\n#L6005##d增加-----#r装备智力#l           #L6006##d增加-----#r装备运气#l\r\n#L6013##d进行-----#r锁定或解锁装备#l\r\n#L6007##d增加-----#r装备命中率#l       #L6008##d增加-----#r装备躲避率#l\r\n#L6009##d增加-----#r装备物理防御#l   #L6010##d增加-----#r装备魔法防御#l\r\n#L6014##d清理-----#b背包垃圾#l\n\r\n#L6015##d检测-----#b道具栏使用个数#l#L6016##d修改-----#r装备名字#l\r\n\r\n\r\n#k#n你目前杀了#r" + cm.getChar().getPvpKills() +"#k人  被杀次数:#r" + cm.getChar().getPvpDeaths() +"#k次  羽翼币:#r" + cm.getDonatorPoints() + "#k个");
cm.getChar().saveToDB(true,true);
}else if (selection == 7777) {
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈━═☆超级项目⑦☆═━┈┈┈┈┈┈\r\n#d请选择你需要的服务：#n\r\n#L7001##d进入-----副本挑战(密林) #r[Hot]#g[New]\r\n#L7002##d进入-----特色活动 #r[Hot]#g[New]\r\n#L7003##d进入-----抽奖活动 #r[Hot]#g[New]");
cm.getChar().saveToDB(true,true);


}
} else if (status == 2) {
if (selection==0){
typed=1;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆羽翼币专区☆═━┈┈┈┈┈┈┈\r\n#n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.\r\n #L10000##d成为------#r初级VIP#d----------[需要转生#r1#d次以上]#l\r\n #L1#成为------#r高级VIP#d----------[需要羽翼币#r"+vip2+"#d个] #l \r\n #L2#成为------#r终级VIP#d----------[需要羽翼币#r"+vip3+"#d个] #l \r\n #L3#成为------#r至尊VIP#d----------[需要羽翼币#r"+vip4+"#d个] #l\r\n #L1000##rVIP1#d-----#r升级到-VIP2#d-----[需要羽翼币#r"+vip1tovip2+"#d个]#l\r\n #L4##rVIP2#d-----#r升级到-VIP3#d-----[需要羽翼币#r"+vip2tovip3+"#d个] #l\r\n #L8##rVIP3#d-----#r升级到-VIP4#d-----[需要羽翼币#r"+vip3tovip4+"#d个] #l\r\n #L10##k购买-----#r20万点卷#k---------[需要羽翼币#r"+dianjuan+"#k个] #l\r\n #L11##k购买-----#r两个金袋子#k-------[需要羽翼币#r"+jindaizi+"#k个] #l\r\n #L5##d购买-----#r2倍经验卡#d--------[需要羽翼币#r"+shuangbei+"#d个] #l\r\n #L6#购买-----#r4倍经验卡#d--------[需要羽翼币#r"+sibei+"#d个] #l\r\n #L7#购买-----#r4倍PK无敌卡#d----[需要羽翼币#r"+pksibei+"#d个] #l\r\n #L9#购买-----#r装备防暴卡#d-------[需要羽翼币#r"+fbk+"#d个] #l\r\n #L12#购买-----#r转生纪念币#d-------[需要羽翼币#r"+zsb+"#d个] #l\r\n #L13#购买-----#rPK战绩清空卡#d---[需要羽翼币#r"+pkqkk+"#d个] #l\r\n\r\n#r注：\r\n1.经验卡在VIP专用频道无法发挥其应有效果.\r\n2.购买至尊VIP4或者是Vip3升级成Vip4，都将送4倍PK卡一张..!"); 
}else if (selection==2000){
typed=3333;
var selStr = " #r#e\r\n┈┈┈┈┈┈┈━═☆转生服务☆═━┈┈┈┈┈┈┈\r\n#e你当前转生次数为：   #r"+cm.getChar().getReborns()+"   次\r\n#e#r					#L2001#转生详细介绍(必看)#l#n\r\n#k\r\n#L2002#普通玩家(200级转生)#b物品:1个转生币#v4001129#和5亿冒险币#l\r\n#L2003##r初级VIP(190级转生)#b物品:1个转生币#v4001129#和4亿冒险币#l\r\n#L2004##g高级VIP(180级转生)#b物品:1个转生币#v4001129#和3亿冒险币#l\r\n#L2005##d超级VIP(170级转生)#b物品:1个转生币#v4001129#和2亿冒险币#l\r\n\r\n#L2006##d至尊VIP(160级转生)#b物品:只需1亿冒险币#l";
cm.sendSimple(selStr);


}else if (selection==55555){
typed=55000;
cm.sendSimple("#e#r\r\n┈┈┈┈┈┈┈━═☆强化专区☆═━┈┈┈┈┈┈\r\n#n#d玩家： #e#r[#h #]#k  #n#d欢迎进入强化专区！这里是为想#r#e100%打造超强装备#n#d玩家所开放的专区！不过所需要的材料很多是少有的！需要的宝石也是十分稀有的！但可以去合成！但强化之后的装备的属性也是非常强大的！！！当然也会收取一定的费用！由于强化项目数量十分多，为了方便各位玩家。现在分成了3个分区！\r\n#d请选择你想要的进入的分区：#e\r\n#L55001##r   初级强化区   #l     #L55002#   高级强化区   #l\r\n\r\n#L55003##r   超级强化区   #l     #L55004#   至尊强化区   #l#n");


}else if (selection==2007){
if(cm.getChar().getReborns()>=1){
typed=3334;
cm.sendNext("#e\r\n┈┈┈┈┈┈━═☆转职服务☆═━┈┈┈┈┈┈\r\n#e\r\n#e#r[#h #]#k#n#d你好!!!#e\r\n①你现在的职业为：#r" + cm.getChar().getJob() + "\r\n#d②你现在的会员等级为：#r" + cm.getChar().getVip() + "#d级   \r\n③您当前转生次数为：#r" + cm.getChar().getReborns() +"#d次\r\n④PvP杀人次数为：#r" + cm.getChar().getPvpKills() +"#d次\r\n⑤PvP被杀次数为：#r" + cm.getChar().getPvpDeaths() +"#d次  ⑥您的属性为:力(#r" + cm.getPlayer().getStr() + ")#d敏(#r" + cm.getPlayer().getDex() + ")#d智(#r" + cm.getPlayer().getInt() + ")#d运(#r" + cm.getPlayer().getLuk() + ") \r\n  #e   \r\n ____________________________________________\r\n丨 #e#g■■■■■■■■#e#b现在的时间是: " + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒 #e#g■■■■■■■■■#d丨#d#e丨#g■■■■■■■■■ #b#n您当前的羽翼币是#e：" + cm.getDonatorPoints() + "个#g#e■■■■■■■■■■#d丨       ____________________________________________");
}else{
cm.sendOk("对不起，你现在还未转生1次以上，不能使用此服务");
cm.dispose();
}


} else if(typed==888888888){

if(selection==810000000){

if(cm.getChar().getReborns()>=5){

if(cm.getgxded('tgy')==1){

cm.sendOk("您已经验证过了,不能在进行验证,但是你可以把您的ID记好,让你的朋友来玩,然后叫他来这里填你的ID哟.这样你也可以免费得到羽翼币..!");
cm.dispose();
}else{
typed=800000000;
cm.sendGetNumber("#r#r请仔细确认后,在输入您的推广员ID:",1,1,999999);
}
			
}else{
cm.sendOk("失败了,很遗憾的告诉您:\r\n想要验证推广员ID,需要你目前转生等级达到#r5或者以上的次数#k才能进行验证..!");
cm.dispose();
}
}else if(selection==1){
if(cm.getgxd()>=2){
cm.sendOk("恭喜,您已经成功使用2个贡献点兑换了200个羽翼币.您目前共有"+cm.getDonatorPoints()+"个羽翼币.");
cm.gainDonatorPoints(200)
cm.setgxd(-2);
cm.dispose();
}else{
cm.sendOk("很遗憾，您目前没有足够的贡献点，至少需要#r2点#k才能换取,请下次在来吧.");
cm.dispose();
}
}



} else if(typed==999999999){

if (cm.getText() == gmmima) {
typed=900000000;
if(cm.getChar().getAccountID()==1){
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆终极管理员服务☆═━┈┈┈┈┈\r\n#r亲爱的：[   #h #  ]，请选择你想要的服务项目：#d\r\n#L98001#①终极GM专用商店#l  #r\r\n#L98002#②VIP等级提升#l #k\r\n#L98003#③所有职业#l  #k\r\n#L98004#④领取装备#l  #k\r\n#L98005#⑤各项属性点提升#l  #r\r\n#L98006#⑥发型专区#l");
} else {
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆终极管理员服务☆═━┈┈┈┈┈\r\n#r亲爱的：[   #h #  ]，请选择你想要的服务项目：#d\r\n#L98001#①终极GM专用商店#l    #r\r\n#L98006#②发型专区#l");
}
    } else {                         
cm.sendOk("你输入的密码错误");    
cm.dispose(); 
}



} else if(typed==400100){
if (selection == 400001) {
typed=400110;
cm.sendSimple("#r#e以下是至尊VIP服务，请选择:#k#k#b\r\n#L31#转职成GM#v1322013##l#L1##r转职成超级GM#k#v1002140##l\r\n\r\n#L2##g升120级#k#v1902002##k#k#l#L3##d一键加满所有技能#v1602000##k#k#l\r\n#r#e#L4#新手商店#v1702165##l\r\n\r\n#g#e#L0#一键设置为1000属性#k#k#k#v5050001##l#L33##r领取喇叭#v5390000##k#k\r\n\r\n#l\r\n\r\n#L5#法师装备#s2311004##l#L6##r战士装备#k#s1311006##l\r\n#L7##g飞侠装备#k#s4111002##l#d#L8#弓箭手装备#k#k#s3111004##l");
}else if (selection == 400002) {
typed=400210;
    cm.sendSimple("欢迎进入至尊VIP专属商店，请选择类型："
	+ "#b\r\n#L0#全战士装备"
	+ "#b\r\n#L1#全法师装备"
	+ "#b\r\n#L2#全弓手装备"
	+ "#b\r\n#L3#全飞侠装备"
	+ "#b\r\n#L4#玩家综合店"
	+ "#r\r\n#L5#GM综合店"
	+ "#r\r\n#L6#全枫叶装备"
	+ "#r\r\n#L7#全耳环项链"
	+ "#r\r\n#L8#全回程及任务奖品"
	+ "#r\r\n#L9#全GM卷轴"
	+ "#d\r\n#L11#Cash 戒指"
	+ "#d\r\n#L12#Cash 特效"
	+ "#d\r\n#L13#Cash 套装"
	+ "#d\r\n#L14#Cash 表情"
	+ "#d\r\n#L15#Cash 喇叭"
	+ "#d\r\n#L21#Cash 飞镖"
	+ "#d\r\n#L16#Cash 宠物"
	+ "#d\r\n#L17#Cash 宠物装备"
	+ "#k\r\n#L18#宠物书"
	+ "#k\r\n#L19#全药水"
	+ "#k\r\n#L20#全卷轴"
	+ "#k\r\n#L30#全海盗装备"
	+ "#k\r\n#L31#圣诞物品"
	+ "#k\r\n#L32#印第安装备"
	+ "#k\r\n#L33#全卷轴"
	+ "#k\r\n#L34#全消息"
	+ "#k\r\n#L35#披风"
	+ "#k\r\n#L36#家族标志"
	+ "#k\r\n#L37#点券之类的票"
	+ "#k\r\n#L38#宠物新道具"
	+ "#k\r\n#L39#全状态"
);
} 

} else if(typed==300100){
if (selection == 300002) {
typed=300210;
    cm.sendSimple("欢迎进入超级VIP专属服务，请选择："
	+ "#b\r\n#L3#冒险枫叶系列"
	+ "#b\r\n#L4#管理员100%卷系列"
	+ "#r\r\n#L6#战士装备系列"
	+ "#r\r\n#L7#法师装备系列"
	+ "#r\r\n#L8#飞侠装备系列"
	+ "#r\r\n#L9#弓箭手装备系列"
	+ "#r\r\n#L10#药水/辅助系列"
	+ "#d\r\n#L11#Cash特效系列"
	+ "#d\r\n#L12#Cash套装系列"
	+ "#d\r\n#L13#Cash表情系列"
	+ "#d\r\n#L14#Cash戒指系列"
	+ "#d\r\n#L15#Cash喇叭系列");

}else if (selection == 300001) {

cm.sendOk("暂不开放");
cm.dispose();
} 

} else if(typed==200100){
if (selection == 200001) {
typed=200110;
cm.sendSimple ("#d欢迎进入高级VIP专属服务,请选择：#r\r\n#L0#技能书#l\r\n#L1#假面#l\r\n#L2#椅子#l");
}else if (selection == 200002) {
typed=200210;
cm.sendSimple ("#d欢迎进入初级VIP专属商店！这里可以买到各职业套装、GM卷轴、现金套装。请选择：#r\r\n#L0#战士装备#l\r\n#L1#法师装备#l\r\n#L2#弓箭手装备#l\r\n#L3#飞侠装备#l\r\n#L4#100%GM卷#l\r\n#L5#心动系列#l\r\n#L6#透明系列#l\r\n#L7#雪人系列#l\r\n#L8#圣诞系列#l\r\n#L9#神话系列#l\r\n#L10#恶魔系列#l\r\n#L11#天使系列#l\r\n#L12#现金武器#l");


} 

} else if(typed==100100){
if (selection == 100001) {
if(cm.getChar().getGender() == 1) {
typed=100110;
cm.sendSimple("#d请选择你想要改变的服务：#r\r\n#L0#肤色#l\r\n#L1#发型#l\r\n#L2#头发颜色#l\r\n#L3#眼睛#l\r\n#L4#眼睛颜色#l");
}else {
typed=100120;
cm.sendSimple("#d请选择你想要改变的服务：#r\r\n#L0#肤色#l\r\n#L1#发型#l\r\n#L2#头发颜色#l\r\n#L3#眼睛#l\r\n#L4#眼睛颜色#l");


}

}else if (selection == 100002) {
typed=100210;
	cm.sendSimple ("#d欢迎进入初级VIP专属商店！请选择类别：#r\r\n#L14#特效#l\r\n#L15#祝福#l\r\n#L0#披风#l\r\n#L1#表情#l\r\n#L2#眼饰#l\r\n#L3#脸饰#l\r\n#L4#手套#l\r\n#L5#帽子#l\r\n#L6#帽子2#l\r\n#L7#套装#l\r\n#L8#上衣#l\r\n#L9#裤子#l\r\n#L10#戒指#l\r\n#L11#盾#l\r\n#L12#鞋子#l\r\n#L13#武器#l");

}

}else if (selection == 6200) {
typed=6210;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆在线装备合成☆═━┈┈┈┈┈┈\r\n#n#r你需要进行装备融合强化么?#k\r\n#b本次强化将需要#r三件相同装备!#k\r\n#g===================#d强化说明#g===================\r\n#b每次强化需要#r"+needmon+" #b 冒险币,#r"+needap+"#b 属性点,#r"+needdona+"#b 羽翼币\r\n#b装备栏第一格:辅助强化装备B#r(强化后自动消失)\r\n#b装备栏第二格:辅助强化装备C#r(强化后自动消失)\r\n#b装备栏第三格:#r(需要强化的装备A)\r\n#r注:装备栏的前三格不得为空,并且是3件相同的装备!\r\n#r警告:位置放错导致武器销毁,后果自负!\r\n#rPs:三件装备的属性不能超过32767,否则会导致强化失败!\r\n#g===================#k#d强化算法#k#g===================#k\r\nA属性#r(装备栏的第三格)#k=A属性+(B属性+C属性)*"+beilv*100+"%\r\n#g===================#k#d强化几率#k#g===================#k\r\n装备可升级次数小于15,成功率:#r30%#k\r\n装备可升级次数大于15小于25,成功率:#r50%#k\r\n装备可升级次数大于25小于35,成功率:#r90%");
cm.getChar().saveToDB(true,true);


}else if (selection==999){
typed=98000;
if (cm.getChar().getId() == 1) {
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆终极管理员服务☆═━┈┈┈┈┈\r\n#r亲爱的GM，请选择你想要的服务项目：#d\r\n#L98001#①终极GM专用商店#l  #r\r\n#L98002#②VIP等级提升#l #k\r\n#L98003#③所有职业#l  #k\r\n#L98004#④GM装备#l  #k\r\n#L98005#⑤各项属性点提升#l ");

    } else {                         
cm.sendOk("对不起，你不是管理员！");    //不满足条件执行这里的语句
cm.dispose(); 
}


}else if (selection==77777){
typed=77000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆玩家专区☆═━┈┈┈┈┈┈\r\n#d亲爱的： #e#r[#h #]#k  #n#d\r\n#d请选择你想要的服务项目：\r\n#L77002##r进入玩家戒指专属区#l #L77003##d进入转生戒指专属区#l\r\n\r\n#L77001##r领取玩家工资#l\r\n\r\n#d#L88005#打开百货商店#L88006#打开技能书商店#L88007#打开卷轴商店#l\r\n#L88008#打开宠物商店#l");



}else if (selection==88888){

if (cm.getChar().getVip() >= 1) {
typed=88000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆VIP专区☆═━┈┈┈┈┈┈\r\n#d亲爱的： #e#r[#h #]#k  #n#d，现在的你VIP等级为：#r"+cm.getChar().getVip()+"\r\n#d请选择你想要的服务项目：#e\r\n#L88800##r进入VIP专属戒指区#l\r\n\r\n#L88001##r进入VIP专属地图#l#n\r\n\r\n#d#L88005#打开百货商店#L88006#打开技能书商店#L88007#打开卷轴商店#l\r\n#L88008#打开宠物商店#l\r\n \r\n#e-------┈━═☆领取VIP工资☆═━┈---------\r\n\r\n#r#L88012#VIP1工资#l#L88013#VIP2工资#l#L88014#超级VIP工资#l#L88015#至尊VIP工资#l");

    } else {                         
cm.sendOk("对不起，你不是VIP玩家！要想使用此服务，请到前面成为VIP玩家");    //不满足条件执行这里的语句
cm.dispose(); 
}



}else if (selection==99999){
typed=99000;
cm.sendGetText("#e\r\n┈┈┈┈┈┈┈━═☆购买羽翼币☆═━┈┈┈┈┈┈\r\n#r请输入你要购买的羽翼币数量：\r\n#d(注：价格1E一个)");


}else if (selection == 7001) {
if(cm.getChar().getMapId()==910000000){//判断NPC所在地图
typed=7100;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆副本挑战☆═━┈┈┈┈┈┈┈\r\n#n#d请选择你想要服务：#r\r\n#L0#挑战神的领域[死亡城堡]#l\r\n#L1#挑战魔的领域[领地决判]#l\r\n#L2#挑战结界[未开放]#l\r\n#L3#关于挑战的说明[新人必看]#l");
}

}else if (selection == 7002) {
typed=7200;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆特色活动(抽奖)☆═━┈┈┈┈┈┈┈\r\n#r幸运大抽奖#k\r\n#e这是本服的特色之一,如果您对本活动感兴趣的话不妨来参与一下,您要是猜中了就会有大奖(极品装备,玩具)等着你来拿哟.下面请选择你需要的下注的方案.\r\n#e#r#L0#┈━═☆幸运50活动べ[需要任务品]#l\r\n#L1#┈━═☆幸运10活动べ[需要羽翼币]#l");

}else if (selection == 7003) {
typed=7300;
cm.sendNext("#e\r\n┈┈┈┈┈┈┈━═☆抽奖活动☆═━┈┈┈┈┈┈┈\r\n#d\r\n如果你有#e #b#v5220010##k#r一张高级快乐百宝券\r\n可以在我这里随机换取物品哦~!\r\n你可以挑战勇士之魂获得高级百宝券\r\n如果抽到独一无二的东东，可不要偷着乐哦！");





}else if (selection == 6016) {
typed=6160;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendGetText("#e\r\n┈┈┈┈┈┈━═☆修改装备名字☆═━┈┈┈┈┈┈\r\n你目前选择的是#r修改装备名字#b.\r\n你当前的第一格装备是:#v"+item.getItemId()+"\r\n\r\n如果你准备好了,请输入一个想印在这个装备上的名字吧,请注意你输入的字必须#r最少1个,最多6个#b.修复成功后会花掉你#r1个羽翼币#k\r\n#r暂时不支持中文.");
itemname = cm.getText();

}else if (selection == 6014) {
typed=6140;
var a ="#r#e\r\n┈┈┈┈┈┈┈━═☆清理背包☆═━┈┈┈┈┈┈┈\r\n请注意:此功能清理垃圾为不可挽回清理,所以请在清理前把重要的东西保存在仓库里:\r\n#b";
for(var i=0;i<types.length;i++) { 
a+= "\r\n#L" + i + "#" + types[ i ]+""; 
} 
cm.sendSimple(a);


}else if (selection == 6015) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot();
var use = cm.getChar().getInventory(MapleInventoryType.USE).getNextFreeSlot();
var etc = cm.getChar().getInventory(MapleInventoryType.ETC).getNextFreeSlot();
var cash = cm.getChar().getInventory(MapleInventoryType.CASH).getNextFreeSlot();
var g = "#e\r\n┈┈┈┈┈┈━═☆查询背包空格☆═━┈┈┈┈┈┈\r\n装备窗共有：#r"+(item-1)+"#k个物品\r\n消耗窗共有：#r"+(use-1)+"#k个物品\r\n其他窗共有：#r"+(etc-1)+"#k个物品\r\nCASH窗共有：#r"+(cash-1)+"#k个物品\r\n#b如果返回的是-2,代表你的这个窗口已装满了!";
cm.sendOk(g);



}else if (selection == 6013) {
typed=6130;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆锁定解锁装备☆═━┈┈┈┈┈┈\r\n#n你目前选择的是锁定解锁装备,装备锁定后装备无法交易,无法丢弃.就算帐号密码被别人知道也不怕.当然,如果你想拿锁定的装备给新手,我还可以帮你解锁呢!你想锁定装备还是解锁呢?\r\n\r\n#b#L1#锁定装备 #r[免费]\r\n#b#L2#解锁装备 #r[收费]");


}else if (selection == 6012) {
typed=6120;
var String = "#r#e\r\n┈┈┈┈┈┈━═☆装备终极强化☆═━┈┈┈┈┈┈\r\n#n#d你现在选择的是装备终极强化功能.可以帮助你把装备强化成为终极装备！\r\n终极强化条件说明：需要#r"+zjqh+"#d个羽翼币\r\n你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r#e强化后,装备全属性变成32000.\r\n\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));


}else if (selection == 6011) {
typed=6110;
cm.sendAcceptDecline("#r#e\r\n┈┈┈┈┈━═☆增加装备升级次数☆═━┈┈┈┈┈\r\n#n你目前选择的是#r增加装备砸卷次数#k,这项功能目前需要材料：#r10#k个黑水晶(#v4021008#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币.下面介绍一下条件:\r\n#b1.要升级的装备必须放在第一格.\r\n#r2.升级有一定的机率失败,请考虑在升级.\r\n#b3.升级成功后,你的第一格装备可升级次数增加1.\r\n4.升级失败后装备不消失.\r\n5.装备栏的第一格一定不能为空,否则你将不能接受.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");


}else if (selection == 6010) {
typed=6100;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈┈━═☆增加装备魔防☆═━┈┈┈┈┈\r\n#n你目前选择的是#r增加装备魔法防御#k,这项功能目前需要材料：#r10#k个紫矿石(#v4011005#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备魔法防御必须放在装备栏的第一格.\r\n#r2.增加装备魔法防御有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10魔法防御,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");


}else if (selection == 6009) {
typed=6090;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈━═☆增加增加装备物防☆═━┈┈┈┈┈\r\n#n你目前选择的是#r增加装备物理防御#k,这项功能目前需要材料：#r10#k个朱矿石(#v4011003#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备物理防御必须放在装备栏的第一格.\r\n#r2.增加装备物理防御有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10物理防御,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");

}else if (selection == 6008) {
typed=6080;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备躲避☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备躲避率#k,这项功能目前需要材料：#r10#k个蛋白石(#v4021004#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备躲避率必须放在装备栏的第一格.\r\n#r2.增加装备躲避率有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点躲避率,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");


}else if (selection == 6007) {
typed=6070;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备命中☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备命中率#k,这项功能目前需要材料：#r10#k个石榴石(#v4021000#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备命中率必须放在装备栏的第一格.\r\n#r2.增加装备命中率有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点命中率,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");

}else if (selection == 6006) {
typed=6060;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备运气☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备运气#k,这项功能目前需要材料：#r10#k个幸运水晶(#v4005003#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备运气必须放在装备栏的第一格.\r\n#r2.增加装备运气有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点运气,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");



}else if (selection == 6005) {
typed=6050;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备智力☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备智力#k,这项功能目前需要材料：#r10#k个智慧水晶(#v4005001#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备智力必须放在装备栏的第一格.\r\n#r2.增加装备智力有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点智力,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");




}else if (selection == 6004) {
typed=6040;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备敏捷☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备敏捷#k,这项功能目前需要材料：#r10#k个敏捷水晶(#v4005002#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备敏捷必须放在装备栏的第一格.\r\n#r2.增加装备敏捷有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点敏捷,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");




}else if (selection == 6003) {
typed=6030;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加装备力量☆═━┈┈┈┈┈┈\r\n你目前选择的是#r增加装备力量#k,这项功能目前需要材料：#r10#k个力量水晶(#v4005000#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备力量必须放在装备栏的第一格.\r\n#r2.增加装备力量有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10点力量,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");


}else if (selection == 6002) {
typed=6020;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加魔法力☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备魔法攻击力#k,这项功能目前需要材料：#r10#k个蓝宝石(#v4021005#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备魔法攻击力必须放在装备栏的第一格.\r\n#r2.增加装备魔法攻击力有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10魔法攻击力,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");


}else if (selection == 6001) {
typed=6010;
cm.sendAcceptDecline("#e\r\n┈┈┈┈┈┈━═☆增加攻击力☆═━┈┈┈┈┈┈\r\n#n你目前选择的是#r增加装备物理攻击力#k,这项功能目前需要材料：#r10#k个钻石(#v4021007#).手续费：#r"+needyyb+"#k个羽翼币和#r"+needjb+"#k金币,下面介绍一下条件:\r\n#b1.要增加装备物理攻击力必须放在装备栏的第一格.\r\n#r2.增加装备物理攻击力有一定机率失败,请考虑后在增加.\r\n#b3.增加成功后,你的装备增加10攻击力,砸卷次数减1.\r\n4.增加失败后装备不消失.\r\n#r注意:装备栏的第一格不能为空,否则你将不能点击接受,后果自负!");



}else if (selection == 5009) {
typed=5090;
var selStr = "#e\r\n┈┈┈┈┈━═☆属性点换装备☆═━┈┈┈┈┈\r\n#n你需要什么东西呢?哈哈,快选吧!说不定什么时候就下架咯,当然也可能会有新东西上架哦.#b"; 
for (var i = 0; i < maps.length; i++) { 
selStr += "\r\n#L" + i + "#" +"#i"+maps[i][1]+"#"+maps[i][0]+"["+maps[i][2]+"点]"; 
} 
selStr +="#k"; 
cm.sendSimple(selStr);


}else if (selection == 5008) {
typed=5080;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆100%必成卷兑换☆═━┈┈┈┈┈┈\r\n#d#n你给我一张卷轴,就是永恒卷轴#v4031612#,你可以用一张永恒卷轴和我换取以下的任何一张GM卷,砸卷成功率100%.#r永恒卷轴#v4031612#可以在时间神殿BOSS获得,也可在羽翼币专区购买或在活动中得到！\r\n#L1##v2040006#头盔防御诅咒卷轴\r\n#L2##v2040303#耳环智力诅咒卷轴\r\n#L3##v2040403#上衣防御诅咒卷轴\r\n#L4##v2040506#全身铠甲敏捷诅咒卷轴\r\n#L5##v2040507#全身铠甲防御诅咒卷轴\r\n#L6##v2040603#裤/裙防御诅咒卷轴\r\n#L7##v2040709#鞋子敏捷诅咒卷轴\r\n#L8##v2040710#鞋子跳跃诅咒卷轴\r\n#L9##v2040806#手套敏捷诅咒卷轴\r\n#L10##v2040903#盾牌防御诅咒卷轴\r\n#L11##v2041024#披风魔防诅咒卷轴\r\n#L12##v2041025#披风防御诅咒卷轴\r\n#L13##v2041200#暗黑龙王石\r\n#L14##v2043003#单手剑攻击诅咒卷轴\r\n#L15##v2043103#单手斧攻击诅咒卷轴\r\n#L16##v2043203#单手钝器攻击诅咒卷轴\r\n#L17##v2043303#短剑攻击诅咒卷轴\r\n#L18##v2043703#短杖魔力诅咒卷轴\r\n#L19##v2043803#长杖魔力诅咒卷轴\r\n#L20##v2044003#双手剑攻击诅咒卷轴\r\n#L21##v2044103#双手斧攻击诅咒卷轴\r\n#L22##v2044203#双手钝器攻击诅咒卷轴\r\n#L23##v2044303#枪攻击诅咒卷轴\r\n#L24##v2044403#矛攻击诅咒卷轴\r\n#L25##v2044503#弓攻击诅咒卷轴\r\n#L26##v2044603#弩攻击诅咒卷轴\r\n#L27##v2044703#拳套攻击诅咒卷轴");



}else if (selection == 5007) {
typed=5070;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆120级武器兑换☆═━┈┈┈┈┈┈\r\n#n你给我一把这样的钥匙#v4031072#,我可以用我的武器和你交换.#r钥匙 #v4031072# #b可以在#r金蛋#b爆. -#d 因为我这里不是VIP的专卖店.所以我只出售一点高级装备.\r\n#r#L1##v1372035#火灵珠短杖 \r\n#L2##v1372036#毒灵珠短杖 \r\n#L3##v1372037#冰灵珠短杖 \r\n#L4##v1372038#雷灵珠短杖 \r\n#L5##v1372039#爆炎之杖 \r\n#L6##v1372040#剧毒之杖 \r\n#L7##v1372041#寒冰之杖 \r\n#L8##v1372042#狂雷之杖\r\n#L9##v1382045#火灵珠长杖 \r\n#L10##v1382046#毒灵珠长杖 \r\n#L11##v1382047#冰灵珠长杖 \r\n#L12##v1382048#雷灵珠长杖 \r\n#L13##v1382049#朱雀长杖 \r\n#L14##v1382050#玄武长杖 \r\n#L15##v1382051#白虎长杖 \r\n#L16##v1382052#青龙长杖\r\n#L17##v1302081#永恒破甲剑\r\n#L18##v1312037#永恒断蚺斧\r\n#L19##v1322060#永恒惊破天\r\n#L20##v1322062#永恒骨头剑\r\n#L21##v1482023#永恒孔雀翎\r\n#L22##v1412033#永恒碎鼋斧\r\n#L23##v1402046#永恒玄冥剑");




}else if (selection == 5006) {
typed=5060;
cm.sendSimple("#e\r\n┈┈┈┈┈━═☆羽翼币兑换玩具☆═━┈┈┈┈┈\r\n#n#d你可以用羽翼币和我换取以下东西.\r\n#r您目前有 " + cm.getDonatorPoints() + "羽翼币\r\n#L0##v4001129#买转生币#k (20羽翼币)\r\n#L1##v1002140#买GM帽子#k(400羽翼币)\r\n#L3##v2340000#买祝福卷#k (5羽翼币) \r\n#L6##v1402040#买枫叶3年旗#k (30羽翼币)\r\n#L7##v1302024#买废报纸武器#k (30羽翼币)\r\n#L8##v1322003#棒棒果#k (10羽翼币)\r\n#L9##v1432009#木精灵枪#k (20羽翼币)\r\n#L10##v1302080#彩虹鞭子#k (50羽翼币)\r\n#L11##v1372017#领路灯#k (30羽翼币)\r\n#L12##v1302107#蓝色火眼刀#k (50羽翼币)\r\n#L13##v1302049#光线鞭子#k (35羽翼币)\r\n#L14##v1402013#日本地图#k (40羽翼币)\r\n#L15##v1092022#调色盘#k (35羽翼币)\r\n#L16##v1402014#温度计#k (40羽翼币)\r\n#L17##v1402044#南瓜灯笼#k (40羽翼币)\r\n#L18##v1402037#龙背刃#k (35羽翼币)\r\n#L19##v5000053#宠物大猩猩#k(100羽翼币)\r\n#L20##v1322027#平底窝#k (35羽翼币)\r\n#L21##v1012014#圣诞鹿鼻子#k (10羽翼币)\r\n#L22##v1302034#万圣节灯笼#k (35羽翼币)\r\n#L23##v1302063#燃烧火焰刀#k (35羽翼币)\r\n#L24##v1422011#酒瓶#k (35羽翼币)\r\n#L25##v1442046#超级滑板#k (20羽翼币)\r\n#L26##v1122014#永恒钻石项链#k (35羽翼币)\r\n#L27##v1122006#蓝色蝶型领结#k (35羽翼币)\r\n#L28##v1122001#绿色蝶型领结#k (35羽翼币)\r\n#L29##v1122002#红色蝶型领结#k (35羽翼币)\r\n#L30##v1122003#黄色蝶型领结#k (35羽翼币)\r\n#L31##v1122004#粉色蝶型领结#k (35羽翼币)\r\n#L32##v1122005#黑色蝶型领结#k (35羽翼币)");



}else if (selection == 5005) {
typed=5050;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆枫叶兑换处②☆═━┈┈┈┈┈\r\n#n#d这里是枫叶兑换处②,你可以使用#v4001126#向我换取经验,金钱,物品,装备。 #r \r\n#L500##v4001126#×2000=20亿金钱#l#L600##v4001126#×200=2亿金钱#l\r\n#L3##v4001126#×400=2亿经验#l#L4##v4001126#×200=1亿经验#l#d\r\n#L5##v4001126#×5000=VIP3刷级地图凭据#l\r\n#L9##v4001126#×200=2个羽翼币#L10##v4001126#×100=1个羽翼币#b\r\n#L12##v4001126#×3000=龙背刃");



}else if (selection == 5001) {
if (cm.getHour() < 12) {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else if (cm.getHour() > 13) {
cm.sendOk("活动时间已经过了.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else{
cm.warp(910000018,0);
cm.dispose(); }
}else if (selection == 5002) {
if (cm.getHour() < 15) {
cm.sendOk("活动时间还没到.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else if (cm.getHour() > 16) {
cm.sendOk("活动时间已经过了.\r\n#r现在服务器时间:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else{
cm.warp(910000019,0);
cm.dispose(); }


}else if (selection == 5003) {
typed=5030;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆特色活动☆═━┈┈┈┈┈┈┈\r\n#dGM他说,我们服的任务太少了.玩家会很容易玩腻的.所以GM他就添加了些任务系统...!下面,我就来介绍下这个任务的特点.!这个任务的名字就是:收集人参宝宝大赛.#d这个任务每天呢,会在每天晚上的19:00分开启.现在服务器时间是:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒参加的时间只有1小时.服务器时间如果到了晚上20:00时,就不能加入了.请玩家们要及时赶到我这参加噢!\r\n#r请注意:如果要参加收集人参宝宝大赛的时候,背宝是是不能携带有#v4000293#桔梗和#v4000294#老桔梗的.最后一关是个大BOSS,如果你把他杀死了,它100%会暴GM卷哦(GM卷成功率100%).\r\n\r\n#L1##g参赛时间到了,我要进去!\r\n#L2#时间还没到呢我要等下...");


}else if (selection == 5004) {
typed=5040;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆枫叶兑换处①☆═━┈┈┈┈┈┈\r\n#n这里是枫叶兑换处①你可以使用3000枚#v4001126#向我换取各种稀有的玩具哦!.#r#L6##v1402040#买枫叶3年旗#k#L7##v1302024#买废报纸武器#k#L8##v1322003#棒棒果#k#L9##v1432009#木精灵#k#L10##v1302080#彩虹鞭子#k#L11##v1372017#领路灯#k#L12##v1302107#蓝色火眼刀#k#L13##v1302049#光线鞭子#k#L14##v1402013#向日剑#k#L15##v1092022#调色盘#k#L16##v1402014#温度计#k#L17##v1402044#南瓜灯笼#k#L18##v1402037#龙背刃#k#L20##v1322027#平底窝#k#L21##v1012014#圣诞鹿鼻子#k#L22##v1302034#万圣节灯笼#k#L23##v1302063#燃烧火焰刀#k#L24##v1422011#酒瓶#k#L25##v1442046#超级滑板#k#L26##v1122014#永恒钻石项链#k#L27##v1122006#蓝色蝶型领结#k#L28##v1122001#绿色蝶型领结#k#L29##v1122002#红色蝶型领结#k#L30##v1122003#黄色蝶型领结#k#L31##v1122004#粉色蝶型领结#k#L32##v1122005#黑色蝶型领结#k");



}else if (selection == 4012) {
typed=4120;
cm.sendYesNo("#e\r\n┈┈┈┈┈┈━═☆给GM发短信☆═━┈┈┈┈┈┈\r\n#n你好,#h #,你想联系管理员吗?是不是想发邮件给他?今天我心情漂亮,多多少少也要收点钱吧?那么就收你100万冒险币好了.");


}else if (selection == 4011) {
typed=4110;
cm.sendSimple("#e\r\n┈┈┈┈┈┈━═☆变性手术☆═━┈┈┈┈┈#n你想转换为什么性别呢?\r\n#r#L16#转为男性(需要5个羽翼币)#l\r\n#L17#转为女性(需要5个羽翼币)#l");



}else if (selection == 4010) {
var h = "暂时不开放..";
cm.sendOk(h);
cm.dispose();

}else if (selection == 4009) {
typed=4090;
var jukebox = "#r#e\r\n┈┈┈┈┈┈━═☆音乐点播☆═━┈┈┈┈┈\r\n#n#d你想要播放什么音乐?\r\n";
for (var i = 0; i < music.length; i++)
jukebox += "\r\n#L" + i + "# " +music[i]+ "#l";
cm.sendSimple(jukebox);

}else if (selection == 4008) {
typed=4080;
cm.sendYesNo("#r#e\r\n┈┈┈┈┈┈━═☆全服超级喇叭☆═━┈┈┈┈┈┈\r\n#n#d发送一个[全服超级喇叭]需要消耗2个羽翼币哦!");



}else if (selection == 4007) {
typed=4070;
cm.sendSimple("#r#e┈┈┈━═☆请选择你想要发超级喇巴的类型☆═━┈┈┈\r\n#L0##v5120008##l#L1##v5120003##l#L2##v5120005##l#L3##v5120009#l#L4##v5121009#l");


}else if (selection == 4006) {
typed=4060;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈━═☆财富夺宝行动☆═━┈┈┈┈┈┈\r\n#n你有见过新装备吗?你有见过无数的装备从你身边飞过吗?你有见过无数装备可以直接捡吗?现在,给你机会,只要给我小小的手续费,我就能带你去有无数财宝的地图让你尽情享受.注意事项:#b\r\n1.进地图后你只有1分钟时间,装备将随机从你身上飞出来,随机的掉落在你的周围.\r\n2.进入条件.5个羽翼币.\r\n3.您必须组队,同时队里只能你一个人.\r\n#r此活动脚本意义:时间短,具有挑战性,装备好,有可能直接是金袋子或者是其它的好玩具,让你意想不到.");

}else if (selection == 4005) {
typed=4050;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈┈━═☆金猪点播☆═━┈┈┈┈┈┈┈\r\n#n没钱了吗？怎么样,点播一个?先看看注意事项吧:\r\n#r1.点播成功后,在各主城随机刷出金猪,你自己要去找哟~\r\n2.点播一次需要200片#枫叶.\r\n3.金猪有可能直接暴金袋子(价值15亿).\r\n\r\n#bOK,确定了就点击下一步吧..!");



}else if (selection == 4004) {
typed=4040;
var c = "#r#e\r\n┈┈┈┈┈┈┈━═☆冒险岛赌博机☆═━┈┈┈┈┈┈┈\r\n#n#e#r想参与金钱娱乐的游戏吗?哈哈 你先下注吧!";
cm.sendNext(c);

}else if (selection == 4003) {
typed=4030;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈┈━═☆挑战魔界之王☆═━┈┈┈┈┈┈┈\r\n#n#b想去挑战#r魔界之王#b吗?首先请看一下注意事项吧:\r\n#r1.必须组队前行,最少1名,最多六名~\r\n2.副本由队长申请，申请条件为200片枫叶.\r\n3.进入后限制5分钟,时间到后自动传出.\r\n4.此副本介绍:里面共有10只21亿血量的魔王,会施放各种技能,在此地图就如同下了地狱一般,每秒会掉落6000血,请勿必小心!\r\n\r\n#b准备好了,开始挑战吧..!");


}else if (selection == 4002) {
typed=4020;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈┈━═☆挑战芙德莱☆═━┈┈┈┈┈┈┈\r\n#n#b想去挑战#r芙德莱#b吗?首先请看一下注意事项吧:\r\n#r1.必须组队前行,最多两名,最少一名~\r\n2.点播一次需要10片#r枫叶.\r\n3.进入后限制3分钟,时间到后自动传出.\r\n4.进入后每秒会掉落3000血,请勿必小心！\r\n\r\n#bOK,开始挑战吧..!");

}else if (selection == 4001) {
typed=4010;
var a = "#r#e\r\n┈┈┈┈┈┈┈━═☆挑战大王蜈蚣☆═━┈┈┈┈┈┈┈\r\n#n勇者无畏的英雄你想帶着你的遠征隊員去挑战 #b大王蜈蚣#k 吗?那么你就必须满足以下几点:\r\n#r1.等级必须是150级以上!\r\n2.必须要开一个队伍!\r\n3.队伍里的人数必须有1人!\r\n#b如果您满足了以上几点,就能挑战大王蜈蚣了.";
cm.sendYesNo(a);


}else if (selection == 2014) {
var w = "#r#e\r\n┈┈┈┈┈┈┈━═☆幸运抽奖☆═━┈┈┈┈┈┈┈\r\n#n#b这里可以抽到你意想不到的东西哦.如果你有5羽翼币的话,#b[  羽翼币可以使用冒险币购买  ],可以在我这抽奖！能抽到很多稀有物品哦！如果你运气好的话,可能抽到羽翼币,那么我在此祝你祝你好运!";
cm.sendNext(w);
test=1;




}else if (selection == 2013) {
typed=3380;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆枫叶城☆═━┈┈┈┈┈┈┈\r\n#n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k,请问你想到哪？#L43#传送到【①号枫叶城】[需要一个#v4000415#](一次)#l\r\n#L44#传送到【②号枫叶城】[需要一个#v4031470#](一次)#l\r\n#L45#传送到刷骨龙地图[需要一个#v4031312#](一次)#l\r\n#L46#传送到刷蛋龙地图[需要一个#v4031311#](一次)#l"); 



}else if (selection==2012){
typed=3370;
var g = "#r#e\r\n┈┈┈┈┈┈┈━═☆排行榜☆═━┈┈┈┈┈┈┈\r\n#d#e#L33#【转生排行榜】#l #L34#〖家族排行榜〗#l#g#L35#【财富排行】#k\r\n\r\n#r#L36#【人气排行榜】#k #L37#〖PK排行榜〗#l\r\n\r\n#L38#【等级排行榜】#l#n #e#b#L39#〖被杀排行榜〗#k#l";
cm.sendSimple(g);


}else if (selection==2008){
typed=3340;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈┈━═☆银行☆═━┈┈┈┈┈┈┈\r\n#n欢迎使用 #bMapleWings的冒险岛银行系统#k 我的朋友!\r\n#r注意：要开户才可以存钱哦！"); 

}else if (selection==2009){
typed=3350;

cm.sendYesNo("#r#e\r\n┈┈┈┈┈┈━═☆激活所有技能☆═━┈┈┈┈┈┈\r\n#n#d你想   #r激活所有技能  #b么? \r\n你现在的职业为：#r" + cm.getChar().getJob() + " \r\n#d要求：你的转生次数要有    #r5   #d次以上。 \r\n#k现在你的转生次数为：  #r"+cm.getChar().getReborns()+" ");

}else if (selection==2010){
typed=3360;
var c ="#r#e\r\n┈┈┈┈┈┈┈━═☆重置属性and加属性☆═━┈┈┈┈┈┈┈\r\n#n你想重置你的属性吗?\r\n#L19#重置 力量(STR)#l\r\n#L20#重置敏捷(DEX)#l\r\n#L21#重置智力(INT)#l\r\n#L22#重置运气(LUK)#l\r\n#L23#添加所有能力点到力量 (STR)#l\r\n#L24#添加所有能力点到敏捷(DEX)#l\r\n#L25#添加所有能力点到智力(INT)#l\r\n#L26#添加所有能力点到运气(LUK)";
cm.sendSimple(c);

}else if (selection==2011){
if (cm.getLevel() < 120 ) {        
cm.sendOk("你等级还没够120级,所以GM交代我不能送你去VIP刷钱地图.");     
cm.dispose();
}else if (cm.getBossLog('shuaqian') >= 10) {
cm.sendOk("你今天已经进入过了10次VIP刷钱地图。你明天在来找我吧！");
cm.dispose();
}else{
cm.setBossLog('shuaqian');
cm.warp(910500000, 0);
cm.dispose();  
}

}else if (selection==16){
if(cm.haveItem(5200002,1)==true && cm.getMeso()<=600000000){
cm.gainMeso(1500000000);
cm.sendOk("恭喜，兑换成功。"); 
cm.gainItem(5200002,-1);
cm.dispose();
}else{
cm.sendOk("兑换失败，你没有金袋。或者你身上的钱总数超过了6亿!"); 
cm.dispose();
}
}else if (selection == 17) {
if(cm.getMeso()>=1500000000){
cm.sendOk("恭喜，兑换成功。"); 
cm.gainItem(5200002,1);
cm.gainMeso(-1500000000);
cm.dispose();
}else{
cm.sendOk("兑换失败，你没有足够的金币。"); 
cm.dispose();
}

}else if (selection == 19) {
typed=168;
cm.sendSimple("#r#e\r\n┈┈━═☆MapleWings冒险岛红十字会☆═━┈┈\r\n#n#d欢迎进入#rMapleWings冒险岛红十字会  #d我可以帮助您办理捐款手续！\r\n\r\n你当前的捐款总数为：#r"+cm.getjuankuan()+"  #d亿\r\n#L1##r我要捐款#d(最小起捐点 1 亿)\r\n#L2##b查看慈善排行榜");

}else if (selection == 15) {
typed=73;
cm.sendNext("#r#e\r\n┈┈┈┈┈┈━═☆创建友谊戒指☆═━┈┈┈┈┈┈\r\n#n创建友情戒指注意事项：#b\r\n1.创建成功后,双方都无法看到效果,只有下号再上号,就可以看到效果了.\r\n2.手续费一个金袋子一次.\r\n3.每个人限制带一个挚友戒指！如果你已经有一个了，就不要来找我了，多则无效。\r\n准备好了点击下一步吧.\r\n#rPs:当然,你也可以用命令送戒指:@ring [对方名字] [戒指编号] a～j为戒指编号.")



}else if (selection == 10) {
var statup = new java.util.ArrayList();
cm.getChar().setHp(0);
cm.getChar().setMp(0);
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(0)));
	statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MP, java.lang.Integer.valueOf(0)));
				cm.c.getPlayer().getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.serverNotice("『爱情宣言』：可怜的   『"+ cm.getChar().getName() +"』，情场失意，在市场惨烈自杀，大家安慰安慰它吧。"); 
cm.dispose();  

}else if (selection == 200000000) {
if (cm.getPlayer().getVip() < 3)
{
cm.sendOk("你不是本服的VIP3-4，所以我无法为你服务！");
cm.dispose();
}
else
{
if (cm.getPlayer().getDropmeso() == 1)
{
cm.sendSimple("#r#e\r\n┈┈┈┈━═☆关闭自动捡取冒险币功能☆═━┈┈┈┈\r\n#n#r亲爱的游戏玩家，本服务是为#rVIP3以上的会员#b提供打怪掉落冒险币自动捡取服务即：\r\n#r（可以把打怪得到的金钱自动存入背包）\r\n#d你当前的金钱自动捡取状态为：#r开启\r\n\r\n#L0#点击我关闭自动捡取金钱服务#l");
typed=171;
}
else if (cm.getPlayer().getDropmeso() == 0)
{
cm.sendSimple("#r#e\r\n┈┈┈┈━═☆开启自动捡取冒险币功能☆═━┈┈┈┈\r\n#n#b#r亲爱的游戏玩家，本服务是为#rVIP3以上的会员#b提供打怪掉落冒险币自动捡取服务即：\r\n#r（可以把打怪得到的金钱自动存入背包）\r\n#d你当前的金钱自动捡取状态为：#r关闭\r\n\r\n#L1#点击我开启自动捡取金钱服务#l");
typed=171;
}
}

}else if (selection == 21) {
typed=100000;
if (cm.getPlayer().getClan() == -1) {
cm.mapMessage("[超级管理员]：你还在忧虑什么呢?吴国还是魏国,都是很强大的呢.");
var text = "#fEffect/SetEff.img/14/effect/3##e#r魏国===[VS]===吴国#fEffect/SetEff.img/15/effect/3#\r\n#L0##n#b┈━═☆[加入魏国]#L1#[加入吴国]☆═━┈#l\r\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\r\n#e#r#L2#—━═☆等级排行榜#L3#财富排行榜☆═━—\r\n#L4#—━═☆杀人排行榜#L5#被杀排行榜☆═━—#l\r\n\r\n#k#n已杀人#r" + cm.getChar().getPvpKills() +"#k人|被杀#r" + cm.getChar().getPvpDeaths() +"#k次|羽翼币:#r" + cm.getDonatorPoints() + "#k个|NpcID:#r" + cm.getNpc() + "\r\n#k所属国家:未加入任何国家  所属派系:未加入任何派系";
cm.sendSimple(text);
}else if (cm.getPlayer().getClan() == 0) {
var text = "#fEffect/SetEff.img/14/effect/3##e#r魏国===[VS]===吴国#fEffect/SetEff.img/15/effect/3#\r\n#L6##n#b┈━═☆[查看魏国状态]#L7#[查看吴国状态]☆═━┈#l\r\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\r\n#e#r#L2#—━═☆等级排行榜#L3#财富排行榜☆═━—\r\n#L4#—━═☆杀人排行榜#L5#被杀排行榜☆═━—#l\r\n\r\n#k#n已杀人#r" + cm.getChar().getPvpKills() +"#k人|被杀#r" + cm.getChar().getPvpDeaths() +"#k次|羽翼币:#r" + cm.getDonatorPoints() + "#k个|NpcID:#r" + cm.getNpc() + "\r\n#k所属国家:魏国  所属派系:未加入任何派系";
cm.sendSimple(text);
}else if (cm.getPlayer().getClan() == 1) {
var text = "#fEffect/SetEff.img/15/effect/3##e#r吴国===[VS]===魏国#fEffect/SetEff.img/14/effect/3#\r\n#L7##n#b┈━═☆[查看吴国状态]#L6#[查看魏国状态]☆═━┈#l\r\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\r\n#e#r#L2#—━═☆等级排行榜#L3#财富排行榜☆═━—\r\n#L4#—━═☆杀人排行榜#L5#被杀排行榜☆═━—#l\r\n\r\n#k#n已杀人#r" + cm.getChar().getPvpKills() +"#k人|被杀#r" + cm.getChar().getPvpDeaths() +"#k次|羽翼币:#r" + cm.getDonatorPoints() + "#k个|NpcID:#r" + cm.getNpc() + "\r\n#k所属国家:吴国  所属派系:未加入任何派系";
cm.sendSimple(text);
}








}else if (selection == 18) {
typed=167;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆清空战绩☆═━┈┈┈┈┈┈┈\r\n#n只要你有#v4002000#，我可以帮您清空您的PK战绩哦！\r\n\r\n#b您当前的杀人次数："+cm.getPvpKills()+"   #r被杀的次数："+cm.getPvpDeaths()+"\r\n\r\n#L1#使用战绩清除道具清空杀人战绩#l\r\n\r\n#L2#使用战绩清除道具清空被杀次数#l");
}else if (selection == 17) {
if(cm.getMeso()>=1500000000){
cm.sendOk("恭喜，兑换成功。"); 
cm.gainItem(5200002,1);
cm.gainMeso(-1500000000);
cm.dispose();
}else{
cm.sendOk("兑换失败，你没有足够的金币。"); 
cm.dispose();
}
}else if (selection == 14) {
if (cm.haveItem(5200002,2)==false){
cm.sendOk("对不起你没有2个金袋子.目前手续费需要2个.");
cm.dispose();
}else
if (cm.getChar().getGender() == 0) {
cm.getChar().setGender(1);
cm.sendOk("#b恭喜你，手术非常的成功，扣除两个金袋子\r\n#r我已经把你变成了女性哦，快去做人妖吧。全服公告我就不发了，你自个乐去啦.");
cm.gainItem(5200002,-2);
cm.dispose();
}else{
cm.getChar().setGender(0);
cm.sendOk("#b恭喜你，手术非常的成功，扣除两个金袋子\r\n#r我已经把你变成了男性哦，你以后就可以泡妞啦。全服公告我就不发了，你自个乐去啦.");
cm.gainItem(5200002,-2);
cm.dispose();
}


}else if (selection==1){
typed=2;
cm.sendAcceptDecline("#r#e\r\n┈┈┈┈━═☆升级装备攻击里和魔法力☆═━┈┈┈┈\r\n#n你目前选择的是#r升级装备攻击力和魔法力#k.\r\n这项功能目前需要羽翼币#r"+zjghm+"#k个,下面介绍一下条件:\r\n#b1.要升级的装备必须放在第一格.\r\n2.升级有一定机率失败,请考虑后在升级.\r\n3.升级成功后,你的装备物理攻击和魔法攻击各增加10攻击力,砸卷次数减1.\r\n4.升级失败后装备不消失.\r\n#r现在时间:"+cm.getHour()+"点"+cm.getMin()+"分          您目前羽翼币余额:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==2){
typed=81;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendSimple("#r#e\r\n┈┈┈┈━═☆提升装备攻击里和魔法力☆═━┈┈┈┈\r\n#n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.\r\n你要砸的装备是：#v"+item.getItemId()+"#,如果不是要提升的装备,请将你要砸的装备放在装备窗第一格.#d\r\n #L0# 开始提升100套餐[需要"+taocan100+"个羽翼币] #l \r\n #L1# 开始提升200套餐[需要"+taocan200+"个羽翼币] #l \r\n #L2# 开始提升300套餐[需要"+taocan300+"个羽翼币] #l \r\n #L3# 开始提升400套餐[需要"+taocan400+"个羽翼币] #l\r\n #L4# 开始提升1000套餐[需要"+taocan1000+"个羽翼币] #l\r\n\r\n#r注：以上功能都是对攻击力和魔法力同时提升..!"); 
}else if (selection==3){
typed=82;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆购买玩具☆═━┈┈┈┈┈┈┈\r\n#n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.\r\n\r\n #L0##d 购买温度计[需要"+wenduji+"个羽翼币] #l \r\n #L1# 购买南瓜灯笼[需要"+nanguadeng+"个羽翼币] #l \r\n #L2# 购买燃烧的冰刀[需要"+bingdao+"个羽翼币] #l \r\n #L3# 购买火焰刀[需要"+huodao+"个羽翼币] #l\r\n #L4# 购买狼牙棒[需要"+langya+"个羽翼币] #l\r\n\r\n#r注：以上玩具都是稀世珍宝..!"); 
}else if (selection==4){//可升级次数
typed=111;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendAcceptDecline("#r#e\r\n┈┈┈┈┈━═☆增加装备升级次数☆═━┈┈┈┈┈\r\n#n你目前选择的是#r升级装备可升级次数#k.\r\n这项功能目前需要羽翼币#r"+shengjics+"#k个,下面介绍一下条件:\r\n1.要升级的装备必须放在第一格.您目前装备是：#v"+item.getItemId()+"#,如果不是要提升的装备,请将你要砸的装备放在装备窗第一格.\r\n2.#b升级有一定机率失败,请考虑后在升级.#k\r\n3.升级成功后,你的可升级次数增加1 .\r\n4.升级失败后装备不消失.\r\n#r确认没问题后，点击接受开始升级.\r\n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分          您目前羽翼币余额:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==5){
typed=3;
cm.sendSimple("#r#e\r\n┈━═☆购买稀有玩具☆═━┈\r\n#n现在时间:"+cm.getHour()+"点"+cm.getMin()+"分 您目前羽翼币:#r"+cm.getDonatorPoints()+"#k.\r\n点击各项查看装备属性和需要的羽翼币.\r\n #L0##b 购买GM帽 #l \r\n #L1# 购买工地手套 #l");
}else if (selection==6){
cm.sendOk("#b暂无回复");
cm.dispose(); 
}else if (selection==7){
cm.sendOk("#r#r#e\r\n┈┈┈┈┈┈┈━═☆VIP解答☆═━┈┈┈┈┈┈┈\r\n#n问：怎么加入VIP？\r\n#b答：首先你需要有足够的羽翼币，然后来这里加入（羽翼币可以使用冒险币购买，也可以通过任务~活动获得）。VIP1在1转后可以免费获得！.\r\n#r问：VIP2高级会员待遇如何?#b\r\n答:VIP2为本服高级会员，可以享受到PK2倍攻击力,每升一级加7点属性，泡点是普通会员的5倍，每天送2个转生币,6亿冒险币（高级VIP工资）,同时可以到VIP专属地图购买120极装备,和GM卷轴等等，应有尽有!\r\n#r问：VIP3超级会员待遇如何?#b\r\n答:VIP3超级会员除了能享受VIP2的功能以外，3倍PK攻击力,每升一级加8点属性，泡点是普通会员的6倍，可以去高级圣殿随意刷BOSS，购买祝福卷等，还有专用练级图，每天送4个转生币,9亿冒险币.\r\n#r问：VIP4至尊会员待遇如何?#b\r\n答:VIP4会员，除了能享受VIP2和VIP3的功能外，还享有上线4倍PK攻击力，秒杀人于无形，每升一级加9点属性，泡点是普通会员的7倍，还有专用的VIP4练级地图<里面的BOSS爽歪歪哟!>.同时每天可以无限领取点卷,每天可领两个金袋子(价值30亿冒险币)的工资,购买GM卷轴，发滚动喇巴公告,直接转生等！\r\n怎么样，心动不如行动，快快加入VIP的行列吧...!");
cm.dispose(); 
}


if (selection == 12) {
typed=26;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆兑换纪念币☆═━┈┈┈┈┈┈┈\r\n#n#d请选择一种换取方式:#r\r\n#L0#使用1个枫叶珠交换#l \r\n#L1#使用100个枫叶交换#l\r\n\r\n #n\r\n#k您目前已经杀了#r"+cm.getChar().getPvpKills()+"#k人   被杀次数:#r"+cm.getChar().getPvpDeaths()+"#k次     羽翼币:#r"+cm.getDonatorPoints()+"#k个");
} else if (selection == 13) {
typed=180;
cm.sendSimple("注意,胜利将获得200万奖励,失败则失去200万...\r\n" 
+ "#L0##fUI/UIWindow.img/RpsGame/Frock##l" 
+ "#L1##fUI/UIWindow.img/RpsGame/Fpaper##l" 
+ "#L2##fUI/UIWindow.img/RpsGame/Fscissor##l" 
); 
} else if (selection == 11) {
typed=5;
var selStr = "#r#e\r\n┈┈┈┈┈┈━═☆1对1开放PK功能☆═━┈┈┈┈┈┈\r\n#n你想要挑战你的队友吗？你够强大吗?我是#e#r1对1#k#nPk系统管理员.我可以提供给你单独的一个房间跟你的朋友较量.怎么样?\r\n#e#bPs:(10-14)的2线市场为1对1PK房间#k#n      #r注意：要到2线创建才可以哦! "; 
var pvproom = new Array( 
"\r\n"+ 
cm.getPvpRoom(map+10, 10), 
cm.getPvpRoom(map+11, 11)+"\r\n", 
cm.getPvpRoom(map+12, 12), 
cm.getPvpRoom(map+13, 13)+"\r\n", 
cm.getPvpRoom(map+14, 14), 
cm.getPvpRoom(map+14, 14));
for (var i = 0; i < pvproom.length; i++) { 
selStr += "" + pvproom[i] + ""; 
} 
cm.sendSimple(selStr); 
} 








} else if (status == 3) {



if(typed==6210){
typed=6211;
if (cm.getMeso() < needmon) {
cm.sendOk("#b武器强化需要#r"+needmon+"#b冒险币,您的冒险币不足!");
cm.dispose();                 
}
else if (cm.getDonatorPoints() < needdona)  {
cm.sendOk("#b武器强化需要#r"+needdona+"#b个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else {
if (cm.getChar().getRemainingAp() < needap)
{
cm.sendOk("#b武器强化需要#r"+needap+"#b点属性值,您剩余的属性值不足!"); 
cm.dispose();
} else {
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;

if (item3.getUpgradeSlots() <= 15) {
cm.sendAcceptDecline("#b您当前装备#v"+itemId3+"#的可升级次数为：#k#r("+item3.getUpgradeSlots()+"次)#k\r\n#b当前武器强化成功率为：#k#r30%#k\r\n#b今日武器强化失败次数为：#k#r"+cm.getExt('wqqhfail')+" 次#k\r\n#g===================#b属性对比#k#g===================#k\r\n#r  类  型              目前属性             增加属性          强化后属性#k\r\n#d力     量                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n敏     捷                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n智     力                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n运     气                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n速     度                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n命 中 率               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n躲 避 率               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n物理攻击             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\n魔法攻击             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n物理防御             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\n摩法防御             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");


} else if ((item3.getUpgradeSlots() >= 16)&&(item3.getUpgradeSlots() <= 25)) {
cm.sendAcceptDecline("#b您当前装备#v"+itemId3+"#的可升级次数为：#k#r("+item3.getUpgradeSlots()+"次)#k\r\n#b当前武器强化成功率为：#k#r50%#k\r\n#b今日武器强化失败次数为：#k#r"+cm.getExt('wqqhfail')+" 次#k\r\n#g===================#b属性对比#k#g===================#k\r\n#r  类  型              目前属性             增加属性          强化后属性#k\r\n#d力     量                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n敏     捷                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n智     力                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n运     气                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n速     度                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n命 中 率               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n躲 避 率               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n物理攻击             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\n魔法攻击             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n物理防御             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\n摩法防御             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");


} else if (item3.getUpgradeSlots() > 25) {

cm.sendAcceptDecline("#b您当前装备#v"+itemId3+"#的可升级次数为：#k#r("+item3.getUpgradeSlots()+"次)#k\r\n#b当前武器强化成功率为：#k#r90%#k\r\n#b今日武器强化失败次数为：#k#r"+cm.getExt('wqqhfail')+" 次#k\r\n#g===================#b属性对比#k#g===================#k\r\n#r  类  型              目前属性             增加属性          强化后属性#k\r\n#d力     量                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n敏     捷                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n智     力                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n运     气                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n速     度                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n命 中 率               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n躲 避 率               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n物理攻击             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\n魔法攻击             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n物理防御             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\n摩法防御             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");

}
}
}

} else if(typed==55000){
if (selection == 55001) {
typed=55100;
cm.sendSimple("#r#e\r\n┈┈┈┈┈┈┈━═☆初级强化区☆═━┈┈┈┈┈\r\n#n#d初级强化说明：\r\n#e#r强化成功率100%！#n所强化属性增加#e 111 #n  \r\n#d费用：需要#e#r"+cjqhyyb+"#d#n羽翼币  和  #e#r"+cjqhjb+"#d#n 金币. \r\n#d请选择你想要的强化项目：#r#e\r\n#L55101##r强化-----装备物理攻击力#l  #L55102#强化-----装备魔法攻击力   #l\r\n#L55103##r强化-----装备可升级次数#l#n\r\n\r\n#L55104##r强化-----装备力量属性#l        #L55105#强化-----装备敏捷属性#l\r\n#L55106##r强化-----装备智力属性#l        #L55107#强化-----装备运气属性#l#d\r\n#L55108##r强化-----装备命中属性#l        #L55109#强化-----装备回避属性#l\r\n#L55110#强化-----装备物防属性#l        #L55111#强化-----装备魔防属性#l");

} else if (selection == 55002) {
typed=55200;
cm.sendSimple("#e#r\r\n┈┈┈┈┈┈┈━═☆高级强化区☆═━┈┈┈┈┈\r\n#n#d高级强化说明：\r\n#e#r强化成功率100%！#n所强化属性增加#e 333 #n\r\n费用：需要#e#r"+gjqhyyb+"#n#d羽翼币 和  #e#r"+gjqhjb+"#d#n 金币.\r\n#d请选择你想要的强化项目：#r#e\r\n#L55201##r强化-----装备物理攻击力#l  #L55202#强化-----装备魔法攻击力#l\r\n#L55203##r强化-----装备可升级次数#l#n\r\n\r\n#L55204##r强化-----装备力量属性#l        #L55205#强化-----装备敏捷属性#l\r\n#L55206##r强化-----装备智力属性#l        #L55207#强化-----装备运气属性#l#d\r\n#L55208##r强化-----装备命中属性#l        #L55209#强化-----装备回避属性#l\r\n#L55210##r强化-----装备物防属性#l        #L55211#强化-----装备魔防属性#l");

} else if (selection == 55003) {
typed=55300;
cm.sendSimple("#e#r\r\n┈┈┈┈┈┈┈━═☆超级强化区☆═━┈┈┈┈┈\r\n#n#d初级强化说明：\r\n#e#r强化成功率100%！#n所强化属性增加#e 888 #n\r\n费用：需要#e#r"+chaojqhyyb+"#n#d羽翼币 和  #e#r"+chaojqhjb+"#d#n 金币.\r\n#d请选择你想要的强化项目：#r#e\r\n#L55301##r强化-----装备物理攻击力#l  #L55302#强化-----装备魔法攻击力#l\r\n#L55303##r强化-----装备可升级次数#l#n\r\n\r\n#L55304##r强化-----装备力量属性#l        #L55305#强化-----装备敏捷属性#l\r\n#L55306##r强化-----装备智力属性#l        #L55307#强化-----装备运气属性#l#d\r\n#L55308##r强化-----装备命中属性#l        #L55309#强化-----装备回避属性#l\r\n#L55310##r强化-----装备物防属性#l        #L55311#强化-----装备魔防属性#l");

} else if (selection == 55004) {
typed=55400;
cm.sendSimple("#e#r\r\n┈┈┈┈┈┈┈━═☆至尊强化区☆═━┈┈┈┈┈\r\n#n#d初级强化说明：\r\n#e#r强化成功率100%！#n所强化属性增加#e 1818 #n\r\n费用：需要#e#r"+zzqhyyb+"#n#d羽翼币 和  #e#r"+zzqhjb+"#d#n 金币.\r\n#d请选择你想要的强化项目：#r#e\r\n#L55401##r强化-----装备物理攻击力#l  #L55402#强化-----装备魔法攻击力#l\r\n#L55403##r强化-----装备可升级次数#l#n\r\n\r\n#L55404##r强化-----装备力量属性#l        #L55405#强化-----装备敏捷属性#l\r\n#L55406##r强化-----装备智力属性#l        #L55407#强化-----装备运气属性#l#d\r\n#L55408##r强化-----装备命中属性#l        #L55409#强化-----装备回避属性#l\r\n#L55410##r强化-----装备物防属性#l        #L55411#强化-----装备魔防属性#l");

}

} else if(typed==800000000){

qty=selection;
cm.addgxd(selection);
cm.setgxded('tgy');
cm.sendOk("恭喜,验证成功.获得特别奖励,注意查收哟,同时,你的朋友将获得一点贡献点.快去通知你的朋友吧..!");
cm.dispose();



} else if(typed==400210){
	if (selection == 0) {
            cm.openShop(501);
	} else if (selection == 1) {
            cm.openShop(502);
	} else if (selection == 2) {
            cm.openShop(503);
	} else if (selection == 3) {
            cm.openShop(504);
	} else if (selection == 4) {
            cm.openShop(800);
	} else if (selection == 5) {
            cm.openShop(900);
	} else if (selection == 6) {
            cm.openShop(901);
	} else if (selection == 7) {
            cm.openShop(902);
	} else if (selection == 8) {
            cm.openShop(903);
	} else if (selection == 9) {
            cm.openShop(904);
	} else if (selection == 10) {
            cm.openShop(905);
	} else if (selection == 11) {
            cm.openShop(906);
	} else if (selection == 12) {
            cm.openShop(907);
	} else if (selection == 13) {
            cm.openShop(908);
	} else if (selection == 14) {
            cm.openShop(909);
	} else if (selection == 15) {
            cm.openShop(911);
	} else if (selection == 16) {
            cm.openShop(912);
	} else if (selection == 17) {
            cm.openShop(913);
	} else if (selection == 18) {
            cm.openShop(105);
	} else if (selection == 19) {
            cm.openShop(910);
	} else if (selection == 20) {
            cm.openShop(108);
    } else if (selection == 21) {
            cm.openShop(914);
    } else if (selection == 30) {
            cm.openShop(505);
    } else if (selection == 31) {
            cm.openShop(915);
    } else if (selection == 32) {
            cm.openShop(916);
    } else if (selection == 33) {
            cm.openShop(917);
    } else if (selection == 34) {
            cm.openShop(918);
    } else if (selection == 35) {
            cm.openShop(919);
    } else if (selection == 36) {
            cm.openShop(920);
    } else if (selection == 37) {
            cm.openShop(921);
    } else if (selection == 38) {
            cm.openShop(922);
    } else if (selection == 39) {
            cm.openShop(923);

	} 


} else if(typed==400110){
if (selection == 0) {
wui = 1;
        var statup = new java.util.ArrayList();
        var p = cm.c.getPlayer();
        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
        p.setStr(1000);
        p.setDex(1000);
        p.setInt(1000);
        p.setLuk(1000);
        p.setRemainingAp (totAp - 3);
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));

        p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
        	cm.dispose();
			} else if (selection == 1) {
           cm.changeJob(net.sf.odinms.client.MapleJob.SUPERGM);
			} else if (selection == 2) {
                        cm.getPlayer().setLevel(120);
			} else if (selection == 3) {
                          cm.getPlayer().maxAllSkills();
                         cm.sendOk("成功~!");
			} else if (selection == 4) {
                         cm.openShop(1);
			} else if (selection == 5) {
                         cm.gainItem(1052076,1);
                         cm.gainItem(1072268,1);
                         cm.gainItem(1082164,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1382036,1);
			} else if (selection == 6) {
                         cm.gainItem(1002551,1);
                         cm.gainItem(1052075,1);
                         cm.gainItem(1072273,1);
                         cm.gainItem(1082168,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1402036,1);
                         cm.gainItem(1312031,1);
                         cm.gainItem(1412026,1);
                         cm.gainItem(1432038,1);
                         cm.gainItem(1322052,1);
                         cm.gainItem(1442045,1);
                         cm.gainItem(1402037,1);
			} else if (selection == 7) {
                         cm.gainItem(1002550,1);
                         cm.gainItem(1052072,1);
                         cm.gainItem(1072272,1);
                         cm.gainItem(1082167,1);
                         cm.gainItem(1092049,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1332050,1);
                         cm.gainItem(1472053,1);
                         cm.gainItem(1092049,1);
			} else if (selection == 8) {
                         cm.gainItem(1002547,1);
                         cm.gainItem(1052071,1);
                         cm.gainItem(1072269,1);
                         cm.gainItem(1082163,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1452044,1);
                         cm.gainItem(1462039,1);
			} else if (selection == 9) {
                         cm.gainMeso(100000000);
			} else if (selection == 10) {
                         cm.gainItem(1302024,1)
			} else if (selection == 11) {
                         cm.gainItem(1302021,1);
			} else if (selection == 12) {
                         cm.gainItem(1302049,1);
			} else if (selection == 13) {
                         cm.gainItem(1312012,1);
			} else if (selection == 14) {
                         cm.gainItem(1322003,1);
			} else if (selection == 15) {
                         cm.gainItem(1322012,1);
			} else if (selection == 16) {
                         cm.gainItem(1322027,1);
			} else if (selection == 17) {
                         cm.gainItem(1332021,1);
			} else if (selection == 18) {
                         cm.gainItem(1332032,1);
			} else if (selection == 19) {
                         cm.gainItem(1332053,1);
			} else if (selection == 20) {
                         cm.gainItem(1372017,1);
			} else if (selection == 21) {
                         cm.gainItem(1382015,1);
			} else if (selection == 22) {
                         cm.gainItem(1332030,1);
			} else if (selection == 23) {
                         cm.gainItem(1382016,1);
			} else if (selection == 24) {
                         cm.gainItem(1402013,1);
			} else if (selection == 25) {
                         cm.gainItem(1402014,1);
			} else if (selection == 26) {
                         cm.gainItem(1402017,1);
			} else if (selection == 27) {
                         cm.gainItem(1422011,1);
			} else if (selection == 28) {
                         cm.gainItem(1432009,1);
			} else if (selection == 29) {
                         cm.gainItem(1442018,1);
			} else if (selection == 30) {
                         cm.gainItem(1432039,1);
			} else if (selection == 32) {
                         cm.gainItem(1442023,1);
			} else if (selection == 31) {
                        cm.changeJob(net.sf.odinms.client.MapleJob.GM);
			} else if (selection == 33) {
                         cm.gainItem(5390000,100);
                         cm.gainItem(5390001,100);
                         cm.gainItem(5390002,100);
			} else if (selection == 34) {
                         cm.warp(100000000,0)
			} else if (selection == 35) {
                         cm.gainItem(1322013,1);
                         cm.gainItem(1042003,1);
                         cm.gainItem(1062007,1);
                         cm.gainItem(1002140,1);
} 



} else if(typed==300210){
	if (selection == 0) {
            cm.openShop(1337);
	} else if (selection == 1) {
            cm.openShop(901);
	} else if (selection == 2) {
            cm.openShop(901);
	} else if (selection == 3) {
            cm.openShop(901);
	} else if (selection == 4) {
            cm.openShop(904);
	} else if (selection == 5) {
            cm.openShop(1341);
	} else if (selection == 6) {
            cm.openShop(2000);
	} else if (selection == 7) {
            cm.openShop(2001);
	} else if (selection == 8) {
            cm.openShop(2003);
	} else if (selection == 9) {
            cm.openShop(2002);
	} else if (selection == 10) {
            cm.openShop(910);
	} else if (selection == 11) {
            cm.openShop(907);
	} else if (selection == 12) {
            cm.openShop(908);
	} else if (selection == 13) {
            cm.openShop(909);
	} else if (selection == 14) {
            cm.openShop(906);
	} else if (selection == 15) {
            cm.openShop(914);
	} else if (selection == 16) {
            cm.openShop(1352);
	} 



} else if(typed==200210){
if (selection == 0) {
		cm.openShop (2000);
	} else if (selection == 1) {
		cm.openShop (2001);
	} else if (selection == 2) {
		cm.openShop (2002);
	} else if (selection == 3) {
		cm.openShop (2003);
	} else if (selection == 4) {
		cm.openShop (2004);
	} else if (selection == 5) {
		cm.openShop (2005);
	} else if (selection == 6) {
		cm.openShop (2006);
	} else if (selection == 7) {
		cm.openShop (2007);
	} else if (selection == 8) {
		cm.openShop (2008);
	} else if (selection == 9) {
		cm.openShop (2009);
	} else if (selection == 10) {
		cm.openShop (2010);
	} else if (selection == 11) {
		cm.openShop (2011);
	} else if (selection == 12) {
		cm.openShop (2012);
	} else if (selection == 13) {
		cm.warp(910000000, 0);
		cm.dispose();
	} else {
		cm.dispose();
	}


} else if(typed==200110){
if (selection == 0) {
		cm.openShop (4001);
	} else if (selection == 1) {
		cm.openShop (4002);
	} else if (selection == 2) {
		cm.openShop (4003);
	} else {
		cm.dispose();
	}


} else if(typed==100210){
	if (selection == 0) {
		cm.openShop (1000);
	} else if (selection == 1) {
		cm.openShop (1001);
	} else if (selection == 2) {
		cm.openShop (1002);
	} else if (selection == 3) {
		cm.openShop (1003);
	} else if (selection == 4) {
		cm.openShop (1004);
	} else if (selection == 5) {
		cm.openShop (1005);
	} else if (selection == 6) {
		cm.openShop (1006);
	} else if (selection == 7) {
		cm.openShop (1007);
	} else if (selection == 8) {
		cm.openShop (1008);
	} else if (selection == 9) {
		cm.openShop (1009);
	} else if (selection == 10) {
		cm.openShop (1010);
	} else if (selection == 11) {
		cm.openShop (1011);
	} else if (selection == 12) {
		cm.openShop (1012);
	} else if (selection == 13) {
		cm.openShop (1013);
	} else if (selection == 14) {
		cm.openShop (1015);
	} else if (selection == 15) {
		cm.openShop (1016);
	} else {
		cm.dispose();
	}

} else if(typed==100120){
typed=100121;
if (selection == 0) {
				beauty = 11;
				cm.sendStyle("选择你喜欢的?", skin);
			} else if (selection == 1) {
				beauty = 12;
				hairnew = Array();
				for(var i = 0; i < hair0.length; i++) {
					hairnew.push(hair0[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("选择你喜欢的?", hairnew);
			} else if (selection == 2) {
				beauty = 13;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("选择你喜欢的?", haircolor);
			} else if (selection == 3) {
				beauty = 14;
				facenew = Array();
				for(var i = 0; i < face0.length; i++) {
					facenew.push(face0[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
				}
				cm.sendStyle("选择你喜欢的?", facenew);
			} else if (selection == 4) {
				beauty = 15;
				var current = cm.getChar().getFace()
 % 100 + 20000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("选择你喜欢的?", colors);
			}


} else if(typed==100110){
typed=100111;
			if (selection == 0) {
				beauty = 6;
				cm.sendStyle("选择你喜欢的?", skin);
			} else if (selection == 1) {
				beauty = 7;
				hairnew = Array();
				for(var i = 0; i < hair1.length; i++) {
					hairnew.push(hair1[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("选择你喜欢的?", hairnew);
			} else if (selection == 2) {
				beauty = 8;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("选择你喜欢的?", haircolor);
			} else if (selection == 3) {
				beauty = 9;
				facenew = Array();
				for(var i = 0; i < face1.length; i++) {
					facenew.push(face1[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
				}
				cm.sendStyle("选择你喜欢的?", facenew);
			} else if (selection == 4) {
				beauty = 10;
				var current = cm.getChar().getFace()
 % 100 + 21000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("选择你喜欢的?", colors);
			}



} else if(typed==900000000){

if (selection == 98001) {
cm.openShop(1091003);
cm.dispose();

} else if (selection == 98002) {
typed=98200000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆VIP等级提升☆═━┈┈┈┈┈┈\r\n #e#r请选择：  #d\r\n#L1# VIP -- 5 #l \r\n#L2# VIP -- 4 #l \r\n#L3# VIP -- 3 #l \r\n#L4# VIP -- 2 #l \r\n#L5# VIP -- 1 #l  ");


} else if (selection == 98003) {
typed=98300000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆所有职业☆═━┈┈┈┈┈┈\r\n #e#r请选择你想改变的职业：  #d\r\n#L1# 超级GM #l \r\n#L2# 管理员 #l \r\n#L3# 英雄 #l \r\n#L4# 隐侠 #l \r\n#L5# 侠盗 #l   \r\n#L6# 主教 #l  \r\n#L7# 火毒魔导师 #l  \r\n#L8# 冰雷魔导师 #l  \r\n#L9# 黑骑士 #l  \r\n#L10# 圣骑士 #l  \r\n#L11# 神射手 #l  \r\n#L12# 弩箭手 #l  \r\n#L13# 冲锋队长 #l  \r\n#L14# 船长 #l ");


} else if (selection == 98004) {
typed=98400000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆领取装备☆═━┈┈┈┈┈┈\r\n #e#r请选择你想要的套装：#r\r\n#L6# 全部领取 #l #d\r\n#L1# GM一套 #l  #r#L5# 领取--毁灭之剑 #l  #d\r\n#L2# 点装 #l \r\n#L3# 玩具 #l   \r\n#L4# 椅子 #l ");

} else if (selection == 98005) {
typed=98500000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆所有满属性☆═━┈┈┈┈┈\r\n #e#r请选择你想要的增加的属性：#r\r\n#L1# 属性全满 #l #d\r\n#L2# 力量全满 #l  #r#L3# 敏捷全满 #l  #d\r\n#L4# 智力全满 #l \r\n#L5# 运气全满 #l  ");



} else if (selection == 98006) {
typed=98600000;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆发型专区☆═━┈┈┈┈┈\r\n #e#r请选择你想要的服务：#r\r\n#L1# 换发型 #l #d\r\n#L2# 换发型颜色 #l   ");


}



} else if(typed==6160){
typed=6161;
itemname = cm.getText();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r修改名字#k的装备.\r\n你当前要#r修改名字#k的装备是:#v"+item.getItemId()+"#,修复成功后装备的名字将变为#r"+itemname+".\r\n#r如果确认完毕的话,请点击下一步!");


} else if(typed==6140){
cm.deleteItem(selection+1);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();



} else if(typed==7300){
typed=7301;
if (cm.haveItem(5220010)) {
			cm.sendYesNo("#d我看见你有#b#v5220010##k,你要使用它?");
			}
			else if (!cm.haveItem(5220010)) {
			cm.sendOk("#d你身上没有#b#v5220010##k，所以我不能帮你!.");
			cm.dispose();
			}



} else if(typed==7200){
if(selection==0){
typed=7201;
cm.sendNext("#r下注的条件与说明:#b\r\n1.需要#枫叶30片,火凤凰的卵1个(扎和闹钟暴)\r\n2.每人限定在每期下注一次.奖品为随机奖励(钱和超级极品装备).\r\n3.下注后,在系统公布号码后十分钟内来找我领取.如果在本期规定时间内未领取的.系统将视为自己放弃奖品.\r\n4.如遇服务器意外重启,在没有公布号码的时候,视为无效,不退回任务品,如果公布号码后,服务器被重启,可以在重启后领取奖品.");
}else if(selection==1){
typed=7202;
cm.sendNext("#r下注的条件与说明:#b\r\n1.需要5个羽翼币.\r\n2.每人限定在每期下注一次.奖品为随机奖励(钱和超级极品装备和玩具).\r\n3.下注后,在系统公布号码后十分钟内来找我领取.如果在本期规定时间内未领取的.系统将视为自己放弃奖品.\r\n4.如遇服务器意外重启,在没有公布号码的时候,视为无效,不退回任务品,如果公布号码后,服务器被重启,可以在重启后领取奖品.");
}


} else if(typed==77000){
if (selection == 77001) {
if (cm.getBossLog('playergz') >= 1) {
cm.sendOk("你今天已经领过了普通玩家工资。所以我不能在给你了，你明天在来找我吧！");
cm.dispose(); 
}else{
cm.gainMeso(200000000); 
cm.gainItem(4001129,1);
cm.gainItem(4021007,1);
cm.setBossLog('playergz');
cm.getPlayer().modifyCSPoints(1, 1000);
cm.sendOk("HOHO，你已经成功领取了普通玩家每天只能领2亿的工资+1个转生币+1000点卷+1个领取初级会员的物品。");
cm.dispose();
}


} else if (selection == 77002) {
typed=77777772000;
cm.sendSimple("#e\r\n┈┈┈┈┈━═☆玩家戒指专属区☆═━┈┈┈┈┈\r\n#d亲爱的： #e#r[#h #]#k  #n 欢迎进入玩家戒指专属区。\r\n玩家专属戒指领取要求：\r\n①领取初级玩家专属戒指#v1112309#,免费领取.\r\n#d②领取高级玩家专属戒指#v1112310#,#r需要等级达到100级以上.\r\n#d③领取超级玩家专属戒指#v1112311#,#r需要等级达到150级以上.\r\n#r④领取至尊玩家专属戒指#v1112300#,#d需要等级达到200级.\r\n#d你现在的等级为：#r"+cm.getChar().getLevel()+"#d\r\n#d请选择你想要的领取的戒指：\r\n#L77701##r初级玩家戒指#v1112309# #l #L77702##r高级玩家戒指#v1112310# #l\r\n#L77703##r超级玩家戒指#v1112311# #l #L77704##r至尊玩家戒指#v1112300# #l");

} else if (selection == 77003) {
typed=77777773000;

cm.sendSimple("#e\r\n┈┈┈┈┈━═☆转生戒指专属区☆═━┈┈┈┈┈\r\n#d亲爱的： #e#r[#h #]#k  #n 欢迎进入转生戒指专属区。\r\n转生专属戒指领取要求：\r\n①领取初级转生戒指#v1112303#,需要转生次数达到10次以上.\r\n#d②领取高级转生戒指#v1112304#,#r需要转生次数达到50次以上.\r\n#d③领取超级转生戒指#v1112305#,#r需要转生次数达到100次以上.\r\n#r④领取至尊转生戒指#v1112302#,#d需要转生次数达到200次以上.\r\n#d现在你已经转生:    #r"+cm.getChar().getReborns()+"#k     次#d\r\n#d请选择你想要的领取的戒指：\r\n#L77701##r初级转生戒指#v1112303# #l #L77702##r高级转生戒指#v1112304# #l\r\n#L77703##r超级转生戒指#v1112305# #l #L77704##r至尊转生戒指#v1112302# #l");

}else if (selection == 88005) {
cm.openShop(800);
cm.dispose();
}else if (selection == 88006) {
cm.openShop(109);
cm.dispose();
}else if (selection == 88007) {
cm.openShop(108);
cm.dispose();
}else if (selection == 88008) {
cm.openShop(912);
cm.dispose();
}

} else if(typed==88000){
if (selection == 88001) {
if(cm.getChar().getVip() < 1 ) {
cm.sendOk("对不起！你不是初级VIP会员所以我无法送你到初级VIP地图.");
cm.dispose();
}else{
cm.warp(970010000, 0); 
cm.dispose();
}
}else if (selection == 88002) {
if(cm.getChar().getVip() < 2 ) {
cm.sendOk("对不起！你不是高级VIP会员所以我无法送你到高级VIP地图.");
cm.dispose();
}else{
cm.warp(809050016, 0);
cm.dispose(); 
}
}else if (selection == 88003) {
if(cm.getChar().getVip() < 3 ) {
cm.sendOk("对不起！你不是超级VIP会员所以我无法送你到超级VIP地图.");
cm.dispose();
}else{
cm.warp(920010000, 0);
cm.dispose(); 
}
}else if (selection == 88004) {
if(cm.getChar().getVip() < 4 ) {
cm.sendOk("对不起！你不是至尊VIP会员所以我无法送你到至尊VIP地图.");
cm.dispose();
}else{
cm.warp(922020300, 0);
cm.dispose(); 
}


} else if (selection == 88800) {
typed=77777774000;
cm.sendSimple("#e\r\n┈┈┈┈┈━═☆VIP戒指专属区☆═━┈┈┈┈┈\r\n#d亲爱的： #e#r[#h #]#k  #n 欢迎进入VIP戒指专属区。\r\nVIP专属戒指领取要求：\r\n①领取初级VIP专属戒指#v1112306#,#r需要VIP等级达到2级以上.\r\n#d②领取高级VIP专属戒指#v1112307#,#r需要VIP等级达到2级以上.\r\n#d③领取超级VIP专属戒指#v1112308#,#r需要VIP等级达到3级以上.\r\n#r④领取至尊VIP专属戒指#v1112301#,#d需要VIP等级达到4级.\r\n#d你现在的VIP等级为：#r"+cm.getChar().getVip()+"#d\r\n#d请选择你想要的领取的戒指：\r\n#L77701##r初级VIP戒指#v1112306# #l #L77702##r高级VIP戒指#v1112307# #l\r\n#L77703##r超级VIP戒指#v1112308# #l #L77704##r至尊VIP戒指#v1112301# #l");




}else if (selection == 88005) {
cm.openShop(800);
cm.dispose();
}else if (selection == 88006) {
cm.openShop(109);
cm.dispose();
}else if (selection == 88007) {
cm.openShop(108);
cm.dispose();
}else if (selection == 88008) {
cm.openShop(912);
cm.dispose();


}else if (selection == 88012) {
if(cm.getChar().getVip() < 1 ) {
cm.sendOk("#e对不起！你不是VIP会员所以无法领取工资.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("抱歉，尊敬VIP会员你今天己经领取工资，请明天再来找我吧！");
cm.dispose(); 
}else{
cm.gainMeso(500000000); 
cm.gainItem(4001129,1);
cm.getPlayer().modifyCSPoints(1, 5000);
cm.setBossLog('vipgz');
cm.sendOk("成功领取");
cm.dispose();
}
}else if (selection == 88013) {
if(cm.getChar().getVip() < 2 ) {
cm.sendOk("对不起！你不是高级VIP会员无法领取工资.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("抱歉，尊敬高级VIP玩家你今天己经领取工资，请明天再来找我吧！");
cm.dispose(); 
}else{
cm.gainMeso(700000000); 
cm.gainItem(4001129,2);
cm.getPlayer().modifyCSPoints(1, 10000);
cm.setBossLog('vipgz');
cm.sendOk("成功领取");
cm.dispose();
}
}else if (selection == 88014) {
if(cm.getChar().getVip() < 3 ) {
cm.sendOk("对不起！你不是超级VIP会员无法领取工资.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("抱歉，尊敬的超级VIP玩家你今天己经领取工资，请明天再来找我吧！");
cm.dispose(); 
}else{
cm.gainMeso(1000000000); 
cm.gainItem(4001129,3);
cm.getPlayer().modifyCSPoints(1, 20000);
cm.setBossLog('vipgz');
cm.sendOk("成功领取");
cm.dispose();
}
}else if (selection == 88015) {
if(cm.getChar().getVip() < 4 ) {
cm.sendOk("对不起！你不是至尊VIP会员无法领取工资.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("抱歉，尊敬的至尊VIP玩家你今天己经领取工资，请明天再来找我吧！");
cm.dispose(); 
}else{
cm.gainMeso(1500000000); 
cm.getPlayer().modifyCSPoints(1, 50000);
cm.gainItem(4001129,4);
cm.setBossLog('vipgz');
cm.sendOk("成功领取");
cm.dispose();
}
}

} else if(typed==98000){

if (selection == 98001) {
cm.openShop(1091003);
cm.dispose();

} else if (selection == 98002) {
typed=98200;
cm.sendSimple("#e\r\n┈┈┈┈┈┈┈━═☆VIP等级提升☆═━┈┈┈┈┈┈\r\n #e#r请选择：  #d\r\n#L1# VIP -- 5 #l \r\n#L2# VIP -- 4 #l \r\n#L3# VIP -- 3 #l \r\n#L4# VIP -- 2 #l \r\n#L5# VIP -- 1 #l  ");




}


} else if(typed==7100){
if(selection==0){
typed=7101;
cm.sendYesNo("你想要进入 #rべ挑战神的领域[死亡城堡]#k 吗?\r\n价格计算:#b等级 x 1000000#k金币和20片#r枫叶.");
}else if(selection==1){
typed=7102;
cm.sendYesNo("你想要进入 #rべ挑战魔的领域[领地决判]#k 吗?\r\n价格计算:#b等级 x 1000000#k金币和10片#r枫叶.");
}else if(selection==2){
cm.dispose();
}else if(selection==3){
cm.sendOk("#r问:神的领域[死亡城堡]是一个什么样的副本,如何挑战?\r\n#b答:死亡城堡,是本服的特色副本之一,此副本开放时间为每一个小时开放一次,开放后,大家可以凭任务品进入,进入后将会刷出满屏的怪物供你升级,还有机会暴特殊装备和玩具.同时还会从其中的一个当中挑选出一位幸运玩家,这位玩家如果有家族,将会为家族赢得一点荣誉点.\r\n#r问:魔的领域[领地决判]是一个什么样的副本?\r\n#b答:这个副本跟死亡城堡差不多,但奖励的物品和怪物都不一样,具体自己去体验吧.\r\n#r问:挑战结界[未开放]暂时不作说明..\r\n#b答:暂时无说明,如果你有什么好的建议或者是你认为好玩的挑战副本,都可以给客服提出,采纳后会给予奖励.");
cm.dispose();
}

}else if(typed==7200){
if(selection==0){
typed=7201;
cm.sendNext("#r下注的条件与说明:#b\r\n1.需要#r枫叶30片,火凤凰的卵1个(火凤凰出)\r\n2.每人限定在每期下注一次.奖品为随机奖励(钱和超级极品装备).\r\n3.下注后,在系统公布号码后十分钟内来找我领取.如果在本期规定时间内未领取的.系统将视为自己放弃奖品.\r\n4.如遇服务器意外重启,在没有公布号码的时候,视为无效,不退回任务品,如果公布号码后,服务器被重启,可以在重启后领取奖品.");
}else if(selection==1){
typed=7202;
cm.sendNext("#r下注的条件与说明:#b\r\n1.需要5个羽翼币.\r\n2.每人限定在每期下注一次.奖品为随机奖励(钱和超级极品装备和玩具).\r\n3.下注后,在系统公布号码后十分钟内来找我领取.如果在本期规定时间内未领取的.系统将视为自己放弃奖品.\r\n4.如遇服务器意外重启,在没有公布号码的时候,视为无效,不退回任务品,如果公布号码后,服务器被重启,可以在重启后领取奖品.");
}


} else if(typed==99000){
typed=99001;
yyb = cm.getText();
cm.sendYesNo("#d你确定要购买 #r"+yyb+"#k #d个羽翼币吗？请先检查你有没有那么多钱哦！");





} else if(typed==6130){
if (selection == 1) {
typed=6131;
cm.sendGetNumber("请输入装备的顺序数字,我将为你解锁它.\r\n#b装备解锁后装备可以交易,可以丢弃.\r\n#r[注意:此功能只可使用与装备栏!]",1,1,100);
slot = selection;

} else if (selection == 2) {
typed=6132;
cm.sendGetNumber("请输入装备的顺序数字,我将为你解锁它.\r\n#b装备解锁后装备可以交易,可以丢弃.\r\n#d需要#r"+zbjs+"#d个羽翼币作为手续费.\r\n#r[注意:此功能只可使用与装备栏!]",1,1,100);
slot = selection;
}


} else if(typed==6120){
if (cm.getDonatorPoints() < zjqh) {
cm.sendOk("#d你没有#r"+zjqh+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
}else{
selected = selection;
cm.MakeGMItem(selected, cm.getP());
cm.gainDonatorPoints(-zjqh);
cm.sendOk("#r强化成功,请下线上线,或换线.然后查看您的装备栏");
cm.dispose();
}

} else if(typed==6110){
typed=6111;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newslots = (item.getUpgradeSlots()+1);
cm.sendAcceptDecline("#b请把你想增加砸卷次数的装备放在装备栏口的第一格,并且装备栏的第一格不能为空.否则你将不能成功.\r\n#r你当前需要升级砸卷次数的装备是:#v"+item.getItemId()+"#.砸卷次数为:("+item.getUpgradeSlots()+"次)#k.如果升级成功,那么装备的可升级次数将变为:"+newslots+"次");



} else if(typed==6100){
typed=6101;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newMdef = (item.getMdef()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加魔法防御#k的装备.\r\n你当前要#r增加魔法防御#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备魔法防御:#r"+item.getMdef()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备魔法防御将变为:#r"+newMdef+",可升级次数变为:"+newslots+"");

} else if(typed==6090){
typed=6091;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newWdef = (item.getWdef()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加物理防御#k的装备.\r\n你当前要#r增加物理防御#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备物理防御:#r"+item.getWdef()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备物理防御将变为:#r"+newWdef+",可升级次数变为:"+newslots+"");

} else if(typed==6080){
typed=6081;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newAvoid = (item.getAvoid()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加躲避率#k的装备.\r\n你当前要#r增加躲避率#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备躲避率:#r"+item.getAvoid()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备躲避率将变为:#r"+newAvoid+",可升级次数变为:"+newslots+"");



} else if(typed==6070){
typed=6071;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newAcc = (item.getAcc()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加命中率#k的装备.\r\n你当前要#r增加命中率#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备命中率:#r"+item.getAcc()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备命中率将变为:#r"+newAcc+",可升级次数变为:"+newslots+"");

} else if(typed==6060){
typed=6061;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newLuk = (item.getLuk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加运气#k的装备.\r\n你当前要#r增加运气#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备运气:#r"+item.getLuk()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备运气将变为:#r"+newLuk+",可升级次数变为:"+newslots+"");



} else if(typed==6050){
typed=6051;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newInt = (item.getInt()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加智力#k的装备.\r\n你当前要#r增加智力#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备智力:#r"+item.getInt()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备智力将变为:#r"+newInt+",可升级次数变为:"+newslots+"");


} else if(typed==6040){
typed=6041;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newDex = (item.getDex()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加敏捷#k的装备.\r\n你当前要#r增加敏捷#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备敏捷:#r"+item.getDex()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备敏捷将变为:#r"+newDex+",可升级次数变为:"+newslots+"");


} else if(typed==6030){
typed=6031;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newStr = (item.getStr()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加力量#k的装备.\r\n你当前要#r增加力量#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备力量:#r"+item.getStr()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备力量将变为:#r"+newStr+",可升级次数变为:"+newslots+"");



} else if(typed==6020){
typed=6021;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newMatk = (item.getMatk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加魔法力#k的装备.\r\n你当前要#r增加魔法力#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备魔法力:#r"+item.getMatk()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备魔法力将变为:#r"+newMatk+",可升级次数变为:"+newslots+"");


} else if(typed==6010){
typed=6011;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newWatk = (item.getWatk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("这一步很重要,请确认一下你要#r增加攻击力#k的装备.\r\n你当前要#r增加攻击力#k的装备是:#v"+item.getItemId()+"#\r\n\r\n#b目前装备攻击力:#r"+item.getWatk()+"   #b可升级次数为:#r"+item.getUpgradeSlots()+"    #b已升级次数:#r"+item.getLevel()+"\r\n\r\n如果升级成功,那么装备攻击力将变为:#r"+newWatk+",可升级次数变为:"+newslots+"");



} else if(typed==5090){
typed=5091;
selectedMap= selection; 
cm.sendYesNo("#e你真的想要 #b#i" + maps[selection][1] +"#"+ maps[selection][0]+ "#k 吗?这会花费你#r"+maps[selection][2]+"#k属性点"); 




} else if(typed==5080){
if (selection == 1) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040006,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 2) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040303,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 3) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040403,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 4) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040506,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 5) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040507,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 6) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040603,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040709,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040710,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040806,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040903,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041024,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041025,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041200,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043003,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043103,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043203,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043303,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043703,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 19) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043803,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044003,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044103,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044203,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044303,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044403,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044503,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044603,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4031612) == false){
cm.sendOk("对不起，你没有永恒卷轴。");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044703,1);
cm.sendOk("换取成功,快去砸极品装备吧");
cm.dispose(); }
}






} else if(typed==5070){
if (selection == 1) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372035,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 2) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372036,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 3) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372037,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 4) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372038,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 5) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372039,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 6) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372040,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 7) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372041,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 8) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372042,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 9) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382045,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 10) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382046,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 11) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382047,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 12) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382048,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 13) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382049,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 14) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382050,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 15) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382051,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 16) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382052,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 17) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1302081,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 18) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1312037,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 19) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1322060,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 20) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1322062,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 21) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1482023,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 22) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1412033,1);
cm.sendOk("换取成功");
cm.dispose(); }

} else if (selection == 23) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e抱歉你没有#v4031072#.所以我不能把装备交给你");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1402046,1);
cm.sendOk("换取成功");
cm.dispose(); }
}







} else if(typed==5060){
if (selection == 0) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(4001129,1);
cm.gainDonatorPoints(-20);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 1) {
if (cm.getDonatorPoints() >= 400) {
cm.gainItem(1002140,1);
cm.gainDonatorPoints(-400);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 3) {
if (cm.getDonatorPoints() >= 5) {
cm.gainItem(2340000,1);
cm.gainDonatorPoints(-5);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 6) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1402040,1);
cm.gainDonatorPoints(-30);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 7) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1302024,1);
cm.gainDonatorPoints(-30);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 8) {
if (cm.getDonatorPoints() >= 10) {
cm.gainItem(1322003,1);
cm.gainDonatorPoints(-10);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 9) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(1432009,1);
cm.gainDonatorPoints(-20);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 10) {
if (cm.getDonatorPoints() >= 50) {
cm.gainItem(1302080,1);
cm.gainDonatorPoints(-50);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 11) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1372017,1);
cm.gainDonatorPoints(-30);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 12) {
if (cm.getDonatorPoints() >= 50) {
cm.gainItem(1302107,1);
cm.gainDonatorPoints(-50);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 13) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1302049,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 14) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402013,1);
cm.gainDonatorPoints(-40);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 15) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1092022,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 16) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402014,1);
cm.gainDonatorPoints(-40);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 17) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402044,1);
cm.gainDonatorPoints(-40);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 18) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1402037,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 19) {
if (cm.getDonatorPoints() >= 100) {
cm.gainItem(5000053,1);
cm.gainDonatorPoints(-100);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 20) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1322027,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 21) {
if (cm.getDonatorPoints() >= 10) {
cm.gainItem(1012014,1);
cm.gainDonatorPoints(-10);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 22) {
if (cm.getDonatorPoints() >= 32) {
cm.gainItem(1302034,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 23) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1302063,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 24) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1422011,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 25) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(1442046,1);
cm.gainDonatorPoints(-20);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 26) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122014,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 27) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122006,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 28) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122001,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 29) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122002,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 30) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122003,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 31) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122004,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}else if (selection == 32) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122005,1);
cm.gainDonatorPoints(-35);
cm.sendOk("换取成功");
}else{
cm.sendOk("你的羽翼币不够");
cm.dispose(); }
}





} else if(typed==5050){
switch(selection) {
case 500:
if (cm.haveItem(4001126,2000)) {
cm.gainItem(4001126,-2000);
cm.gainMeso(2000000000);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有2000个#v4001126#.");
cm.dispose(); }
break;
case 600:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainMeso(200000000);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有200个#v4001126#.");
cm.dispose(); }
break;



case 1000:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainItem(4000415,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有200个#v4001126#.");
cm.dispose(); }
break;
case 1001:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031470,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有100个#v4001126#.");
cm.dispose(); }
break;

case 1002:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031311,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有100个#v4001126#.");
cm.dispose(); }
break;

case 1003:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031312,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有100个#v4001126#.");
cm.dispose(); }
break;


case 3:
if (cm.haveItem(4001126,40)) {
cm.gainItem(4001126,-40);
cm.gainExp([200000000]);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有40个#v4001126#.");
cm.dispose(); }
break;
case 4:
if (cm.haveItem(4001126,20)) {
cm.gainItem(4001126,-20);
cm.gainExp([100000000]);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有20个#v4001126#.");
cm.dispose(); }
break;
case 5:
if (cm.haveItem(4001126,5000)) {
cm.gainItem(4001126,-5000);
cm.gainItem(4031325,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有5000个#v4001126#.");
cm.dispose(); }
break;
case 6:
if (cm.haveItem(4001126,2000)) {
cm.gainItem(4001126,-2000);
cm.gainItem(2040006,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有2000个#v4001126#.");
cm.dispose(); }
break;
case 7:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.gainItem(1002551,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有3000个#v4001126#.");
cm.dispose(); }
break;
case 8:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.gainItem(1082230,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有3000个#v4001126#.");
cm.dispose(); }
break;
case 9:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainDonatorPoints(2);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有200个#v4001126#.");
cm.dispose(); }
break;
case 10:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainDonatorPoints(1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有100个#v4001126#.");
cm.dispose(); }
break;
case 11:
if (cm.haveItem(4001126,10000)) {
cm.gainItem(4001126,-10000);
cm.haveItem(4001120,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有10000个#v4001126#.");
cm.dispose(); }
break;
case 12:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.haveItem(1402037,1);
cm.sendOk("成功.");
cm.dispose();
}else{
cm.sendOk("你没有3000个#v4001126#.");
cm.dispose(); }
}







} else if(typed==5040){
if (selection == 6) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402040,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302024,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1322003,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1432009,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302080,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1372017,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302107,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302049,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402013,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4001007,3000)) {
cm.gainItem(1092022,1);
cm.gainItem(4001007,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402044,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402037,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1322027,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1012014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302034,1);
cm.gainItem(4001007,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302063,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1422011,1);
cm.gainItem(4001007,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1442046,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122006,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 28) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122001,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 29) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122002,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 30) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122003,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 31) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122004,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}else if (selection == 32) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122005,1);
cm.gainItem(4001126,-3000);
cm.sendOk("换取成功");
}else{
cm.sendOk("你没有3000个#v4001126#..");
cm.dispose(); }
}


 

} else if(typed==5030){
if (selection == 1) {
if (cm.getHour() < 19) {
cm.sendOk("活动时间还没到哦!请时间到了在来找我哦!\r\n#r现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else if (cm.getHour() > 20) {
cm.sendOk("活动时间已经过咯..下一次请注意时间哦!\r\n#r现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else if (cm.haveItem(4000293)) {
cm.sendOk("你的身上已经携带了#v4000293#.请扔掉后在来找我,谢谢!~");
cm.dispose();
}else if (cm.haveItem(4000294)) {
cm.sendOk("你的身上已经携带了#v4000294#.请扔掉后在来找我,谢谢!~");
cm.dispose();
}else{
cm.warp(251010200,0);
cm.sendOk("好了,我已经把你送到了活动地图..!加油吧!");
cm.dispose(); }
}else if (selection == 2) {
cm.dispose();
}





} else if(typed==4120){
typed=4121;
cm.sendGetText("好吧,把你要说的话输入在下面.");

} else if(typed==4110){

if (selection == 16) {
if (cm.getDonatorPoints() < 5) {
cm.sendOk("你没有足够的羽翼币.请联系GM购买");
cm.dispose();
}else if (cm.getChar().getGender() == 0) {
cm.sendOk("变性失败,你已经是男性.");
}else{
cm.gainDonatorPoints(-5);
cm.getChar().setGender(0);
cm.sendOk("变性成功,成功把你变成男性");
cm.dispose(); 
}

} else if (selection == 17) {
if (cm.getDonatorPoints() < 5) {
cm.sendOk("你没有足够的羽翼币.请联系西GM购买");
cm.dispose();
}else if (cm.getChar().getGender() == 1) {
cm.sendOk("变性失败,你已经是女性.");
}else{
cm.gainDonatorPoints(-5);
cm.getChar().setGender(1);
cm.sendOk("变性成功,成功把你变成女性");
cm.dispose();
}
}


} else if(typed==4090){
cm.changeMusic(music[selection]);
cm.sendOk("成功播放.");
cm.dispose();


} else if(typed==4080){
typed=4081;
cm.sendGetText("请输入喇叭内容");
message = cm.getText();



} else if(typed==4070){
if(selection==0){
typedd=5120008;
}else if(selection==1){
typedd=5120003;
}else if(selection==2){
typedd=5120005;
}else if(selection==3){
typedd=5120009;
}else if(selection==4){
typedd=5121009;
}
typed=4071;
cm.sendGetText("#r#r#e\r\n┈┈┈┈┈┈━═☆超级喇叭(祝福)☆═━┈┈┈┈┈┈\r\n开心的一天又开始呢!~~~\r\n#b我是本服#r超级喇巴使者#b,此喇巴非一般之喇巴,发送后全服的人都能以祝福的形式显示,比滚动喇巴更振汗,来一句?\r\n手续费嘛，哼哼,1个羽翼币1次..."); 


} else if(typed==4060){
if (cm.getDonatorPoints() < 5) {
cm.sendOk("对不起，你没有足够的羽翼币.");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if(cm.getParty().getMembers().size() > 1){
cm.sendOk("#e#r你只能单独前往，队里只能你一个人."); 
cm.dispose(); 
}
else if (!cm.isLeader()) {
cm.sendOk("#e#r请队长来跟我谈话."); 
cm.dispose(); 
}else{
var em = cm.getEventManager("wgquestitemdrop");
if (em == null) {
cm.sendOk("出错啦,请联系GM.");
cm.dispose();
} else {
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainDonatorPoints(-5);
cm.serverNotice("[NPC][超级管理员]玩家:" + cm.c.getPlayer().getName() + " 成功进入了财富领地,开始抢夺财宝! ~"); 
cm.serverNotice("[NPC][超级管理员]玩家:" + cm.c.getPlayer().getName() + " 成功进入了财富领地,开始抢夺财宝! ~");
cm.dispose();
}

} else if(typed==4050){
if(cm.haveItem(4001126,200)==true){
cm.summonMob(9500167,1,1000,1);
if (chanceo>=1 && chanceo <=200){
cm.zaohuanjz(9500167,400000000,100000000,1,100000000);
}else{
cm.zaohuanjz(9500167,400000000,100000000,1,101000000);
}
cm.serverNotice("[NPC][副本管理员]：玩家:"+cm.getChar().getName()+"成功召唤了送财金猪,大家快去找找藏在哪里呢~~");
cm.serverNotice("[NPC][副本管理员]：玩家:"+cm.getChar().getName()+"成功召唤了送财金猪,大家快去找找藏在哪里呢~~");
cm.serverNotice("[NPC][副本管理员]：玩家:"+cm.getChar().getName()+"成功召唤了送财金猪,大家快去找找藏在哪里呢~~");
cm.sendOk("恭喜,召唤成功.");
cm.gainItem(4001126,-200);
cm.dispose();
}else{
cm.sendOk("对不起,您没有足够枫叶,它的样子看起来像:#v4001126#..");
cm.dispose();
}


} else if (test == 1) {
if (cm.getDonatorPoints() >= 5) {
cm.gainDonatorPoints(-5);
if ((itemchance >= 1) && (itemchance <= 20)) {
cm.gainItem(2000004, itemamount);
}
else if ((itemchance >= 21) && (itemchance <= 40)) {
cm.gainItem(2020012, itemamount);
}
else if ((itemchance >= 41) && (itemchance <= 50)) {
cm.gainItem(2000005, itemamount);
}
else if ((itemchance >= 51) && (itemchance <= 60)) {
cm.gainItem(2030007, itemamount);
}
else if ((itemchance >= 61) && (itemchance <= 70)) {
cm.gainItem(2022027, itemamount);
}
else if (itemchance == 71) {
cm.gainItem(2040001, 1);
}
else if (itemchance == 72) {
cm.gainItem(2041002, 1);
}
else if (itemchance == 73) {
cm.gainItem(2040805, 1);
}
else if (itemchance == 74) {
cm.gainItem(2040702, 1);
}
else if (itemchance == 75) {
cm.gainItem(2043802, 1);
}
else if (itemchance == 76) {
cm.gainItem(2040402, 1);
}
else if (itemchance == 77) {
cm.gainItem(1002139, 1);
}
else if (itemchance == 78) {
cm.gainItem(1302022, 1);
}
else if (itemchance == 79) {
cm.gainItem(1322021, 1);
}	
else if (itemchance == 80) {
cm.gainItem(1322026, 1);
}	
else if (itemchance == 81) {
cm.gainItem(1302026, 1);
}
else if (itemchance == 82) {
cm.gainItem(1442017, 1);
}
else if (itemchance == 83) {
cm.gainItem(1082147, 1);
}	
else if (itemchance == 84) {
cm.gainItem(1102043, 1);
}
else if (itemchance == 85) {
cm.gainItem(1442016, 1);
}
else if (itemchance == 86) {
cm.gainItem(1402012, 1);
}
else if (itemchance == 87) {
cm.gainItem(1302027, 1);
}	
else if (itemchance == 88) {
cm.gainItem(1322027, 1);
}
else if (itemchance == 89) {
cm.gainItem(1322025, 1);
}
else if (itemchance == 90) {
cm.gainItem(1312012, 1);
}
else if (itemchance == 91) {
cm.gainItem(1062000, 1);
}
else if (itemchance == 92) {
cm.gainItem(1332020, 1);
}
else if (itemchance == 93) {
cm.gainItem(1402037, 1);
}
else if (itemchance == 94) {
cm.gainItem(1372002, 1);
}
else if (itemchance == 95) {
cm.gainItem(1002033, 1);
}
else if (itemchance == 96) {
cm.gainItem(1092022, 1);
}
else if (itemchance == 97) {
cm.gainItem(1302021, 1);
}
else if (itemchance == 98) {
cm.gainItem(1102041, 1);
}
else if (itemchance == 99) {
cm.gainItem(1102042, 1);
}
else if (itemchance == 100) {
cm.gainItem(1322024, 1);
}
else if (itemchance == 101) {
cm.gainItem(1082148, 1);
}
else if (itemchance == 102) {
cm.gainItem(1002012, 1);
}
else if (itemchance == 103) {
cm.gainItem(1322012, 1);
}
else if (itemchance == 104) {
cm.gainItem(1322022, 1);
}
else if (itemchance == 105) {
cm.gainItem(1002020, 1);
}
else if (itemchance == 106) {
cm.gainItem(1302013, 1);
}
else if (itemchance == 107) {
cm.gainItem(1082146, 1);
}
else if (itemchance == 108) {
cm.gainItem(1442014, 1);
}
else if (itemchance == 109) {
cm.gainItem(1002096, 1);
}
else if (itemchance == 110) {
cm.gainItem(1302017, 1);
}
else if (itemchance == 111) {
cm.gainItem(1442012, 1);
}
else if (itemchance == 112) {
cm.gainItem(1322010, 1);
}
else if (itemchance == 113) {
cm.gainItem(1442011, 1);
}
else if (itemchance == 114) {
cm.gainItem(1442018, 1);
}
else if (itemchance == 115) {
cm.gainItem(1092011, 1);
}
else if (itemchance == 116) {
cm.gainItem(1092014, 1);
}
else if (itemchance == 117) {
cm.gainItem(1302003, 1);
}
else if (itemchance == 118) {
cm.gainItem(1432001, 1);
}
else if (itemchance == 119) {
cm.gainItem(1312011, 1);
}
else if (itemchance == 120) {
cm.gainItem(1002088, 1);
}
else if (itemchance == 121) {
cm.gainItem(1041020, 1);
}
else if (itemchance == 122) {
cm.gainItem(1322015, 1);
}
else if (itemchance == 123) {
cm.gainItem(1442004, 1);
}
else if (itemchance == 124) {
cm.gainItem(1422008, 1);
}
else if (itemchance == 125) {
cm.gainItem(3010009, 1);
}
else if (itemchance == 126) {
cm.gainItem(1432000, 1);
}
else if (itemchance == 127) {
cm.gainItem(1382001, 1);
}
else if (itemchance == 128) {
cm.gainItem(1041053, 1);
}
else if (itemchance == 129) {
cm.gainItem(1060014, 1);
}
else if (itemchance == 130) {
cm.gainItem(1050053, 1);
}
else if (itemchance == 131) {
cm.gainItem(1051032, 1);
}
else if (itemchance == 132) {
cm.gainItem(1050073, 1);
}
else if (itemchance == 133) {
cm.gainItem(1061036, 1);
}
else if (itemchance == 134) {
cm.gainItem(1002253, 1);
}
else if (itemchance == 135) {
cm.gainItem(1002034, 1);
}
else if (itemchance == 136) {
cm.gainItem(1051025, 1);
}
else if (itemchance == 137) {
cm.gainItem(1050067, 1);
}
else if (itemchance == 138) {
cm.gainItem(1051052, 1);
}
else if (itemchance == 139) {
cm.gainItem(1002072, 1);
}
else if (itemchance == 140) {
cm.gainItem(1002144, 1);
}
else if (itemchance == 141) { 
cm.gainItem(1051054, 1);
}
else if (itemchance == 142) { 
cm.gainItem(1050069, 1);
}
else if (itemchance == 143) { 
cm.gainItem(1372007, 1);
}
else if (itemchance == 144) { 
cm.gainItem(1050056, 1);
}
else if (itemchance == 145) { 
cm.gainItem(1050074, 1);
}
else if (itemchance == 146) { 
cm.gainItem(1002254, 1);
}
else if (itemchance == 147) {
cm.gainItem(1002274, 1);
}
else if (itemchance == 148) { 
cm.gainItem(1002218, 1);
}
else if (itemchance == 149) { 
cm.gainItem(1051055, 1);
}
else if (itemchance == 150) { 
cm.gainItem(1382010, 1);
}
else if (itemchance == 151) { 
cm.gainItem(1002246, 1);
}
else if (itemchance == 152) { 
cm.gainItem(1050039, 1);
}
else if (itemchance == 153) { 
cm.gainItem(1382007, 1);
}
else if (itemchance == 154) { 
cm.gainItem(1372000, 1);
}
else if (itemchance == 155) { 
cm.gainItem(1002013, 1);
}
else if (itemchance == 156) { 
cm.gainItem(1050072, 1);
}
else if (itemchance == 157) { 
cm.gainItem(1002036, 1);
}
else if (itemchance == 158) { 
cm.gainItem(1002243, 1);
}
else if (itemchance == 159) { 
cm.gainItem(1372008, 1);
}
else if (itemchance == 160) { 
cm.gainItem(1382008, 1);
}
else if (itemchance == 161) { 
cm.gainItem(1382011, 1);
}
else if (itemchance == 162) { 
cm.gainItem(1092021, 1);
}
else if (itemchance == 163) { 
cm.gainItem(1051034, 1);
}
else if (itemchance == 164) { 
cm.gainItem(1050047, 1);
}
else if (itemchance == 165) { 
cm.gainItem(1040019, 1);
}
else if (itemchance == 166) { 
cm.gainItem(1041031, 1);
}
else if (itemchance == 167) { 
cm.gainItem(1051033, 1);
}
else if (itemchance == 168) { 
cm.gainItem(1002153, 1);
}
else if (itemchance == 169) { 
cm.gainItem(1002252, 1);
}
else if (itemchance == 170) { 
cm.gainItem(1051024, 1);
}
else if (itemchance == 171) { 
cm.gainItem(1002153, 1);
}
else if (itemchance == 172) { 
cm.gainItem(1050068, 1);
}
else if (itemchance == 173) { 
cm.gainItem(1382003, 1);
}
else if (itemchance == 174) { 
cm.gainItem(1382006, 1);
}
else if (itemchance == 175) { 
cm.gainItem(1050055, 1);
}
else if (itemchance == 176) { 
cm.gainItem(1051031, 1);
}
else if (itemchance == 177) { 
cm.gainItem(1050025, 1);
}
else if (itemchance == 178) { 
cm.gainItem(1002155, 1);
}
else if (itemchance == 179) { 
cm.gainItem(1002245, 1);
}
else if (itemchance == 180) { 
cm.gainItem(13720013, 1);
}
else if (itemchance == 181) { 
cm.gainItem(1452004, 1);
}
else if (itemchance == 182) { 
cm.gainItem(1452023, 1);
}
else if (itemchance == 183) { 
cm.gainItem(1060057, 1);
}
else if (itemchance == 184) { 
cm.gainItem(1040071, 1);
}
else if (itemchance == 185) { 
cm.gainItem(1002137, 1);
}
else if (itemchance == 186) { 
cm.gainItem(1462009, 1);
}
else if (itemchance == 187) { 
cm.gainItem(1452017, 1);
}
else if (itemchance == 188) { 
cm.gainItem(1040025, 1);
}
else if (itemchance == 189) { 
cm.gainItem(1041027, 1);
}
else if (itemchance == 190) { 
cm.gainItem(1452005, 1);
}
else if (itemchance == 191) { 
cm.gainItem(1452007, 1);
}
else if (itemchance == 192) { 
cm.gainItem(1061057, 1);
}
else if (itemchance == 193) { 
cm.gainItem(1472006, 1);
}
else if (itemchance == 194) { 
cm.gainItem(1472019, 1);
}
else if (itemchance == 195) { 
cm.gainItem(1060084, 1);
}
else if (itemchance == 196) { 
cm.gainItem(1472028, 1);
}
else if (itemchance == 197) { 
cm.gainItem(1002179, 1);
}
else if (itemchance == 198) { 
cm.gainItem(1082074, 1);
}
else if (itemchance == 199) { 
cm.gainItem(1332015, 1);
}
else if (itemchance == 200) { 
cm.gainItem(1432001, 1);
}
else if (itemchance == 201) { 
cm.gainItem(1060071, 1);
}
else if (itemchance == 202) { 
cm.gainItem(1472007, 1);
}
else if (itemchance == 203) { 
cm.gainItem(1472002, 1);
}
else if (itemchance == 204) { 
cm.gainItem(1051009, 1);
}
else if (itemchance == 205) { 
cm.gainItem(1061037, 1);
}
else if (itemchance == 206) { 
cm.gainItem(1332016, 1);
}
else if (itemchance == 207) { 
cm.gainItem(1332034, 1);
}
else if (itemchance == 208) { 
cm.gainItem(1472020, 1);
}
else if ((itemchance >= 209) && (itemchance <= 215)) { 
cm.gainItem(3010025, 1);
}
else if ((itemchance >= 216) && (itemchance <= 221)) { 
cm.gainItem(1302107, 1);
}
else if ((itemchance >= 222) && (itemchance <= 228)) { 
cm.gainItem(2022176, 100);
}
else if ((itemchance >= 228) && (itemchance <= 240)) { 
cm.gainItem(1442047, 1);
}
else if (itemchance >= 228) { 
cm.gainItem(1002140, 1);
}
else if (itemchance >= 234) { 
cm.gainItem(4001120, 1);
cm.sendOk("你的运气真好,居然抽到了初级VIP兑换凭据#v4001120#.");
cm.serverNotice("『抽奖公告』：恭喜"+ cm.getChar().getName() +" 玩家,在我们的新功能抽奖中抽到了初级VIP兑换凭据,大家一起祝贺他吧!");
}
else if (itemchance >= 260) { 
cm.gainItem(4001121, 1);
cm.sendOk("你的运气真好,居然抽到了高级VIP兑换凭据#v4001121#.");
cm.serverNotice("『抽奖公告』：恭喜"+ cm.getChar().getName() +" 玩家,在我们的新功能抽奖中抽到了高级VIP兑换凭据,大家一起祝贺他吧!");
}
else if (itemchance >= 279) { 
cm.gainItem(4001122, 1);
cm.sendOk("你的运气真好,居然抽到了超级VIP兑换凭据#v4001122#.");
cm.serverNotice("『抽奖公告』：恭喜"+ cm.getChar().getName() +" 玩家,在我们的新功能抽奖中抽到了超级VIP兑换凭据,大家一起祝贺他吧!");
                       }
else if (itemchance >= 287) { 
cm.gainItem(4001125, 1);
cm.sendOk("你的运气真好,居然抽到了至尊级VIP兑换凭据#v4001125#.");
cm.serverNotice("『抽奖公告』：恭喜"+ cm.getChar().getName() +" 玩家,在我们的新功能抽奖中抽到了至尊VIP兑换凭据,大家一起祝贺他吧!");
}
cm.dispose();
}else{
cm.sendOk("你没有5个羽翼币.");
cm.dispose();
}

} else if(typed==4040){
typed=4041;
var k = "你想下注多少金额呢?如果赢了的话可以获得双倍的收益,哈哈快输入金额吧!";
cm.sendGetText(k);

} else if(typed==4030){
if(cm.haveItem(4001126,200)==false){
cm.sendOk("对不起,你没有足够的枫叶：#v4001126#..");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r请队长来跟我谈话.");
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("对不起，此次挑战必须至少有1名队员."); 
cm.dispose();
}else{
var em = cm.getEventManager("wgquestmj");
if (em == null) {
cm.sendOk("出错啦,请联系GM.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainItem(4001126,-200);
cm.serverNotice("[NPC][挑战管理员]以玩家:" + cm.c.getPlayer().getName() + " 为首的强队开始对魔界之王展开了决斗! ~"); 
cm.serverNotice("[NPC][挑战管理员]以玩家:" + cm.c.getPlayer().getName() + " 为首的强队开始对魔界之王展开了决斗! ~");
cm.dispose();
}



} else if(typed==4020){
if(cm.haveItem(4001126,10)==false) {
cm.sendOk("对不起,你没有足够的枫叶：#v4001126#..");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r请队长来跟我谈话."); 
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("对不起，你当前只能有1个队员！"); 
cm.dispose();
}else{
var em = cm.getEventManager("wgquestwdc");
if (em == null) {
cm.sendOk("即将推出.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainItem(4001126,-10);
cm.serverNotice("[NPC][可乐管理员]玩家:" + cm.c.getPlayer().getName() + " 带着绝招,进入了BOSS地图开始挑战芙德莱~"); 
cm.dispose();
}


} else if(typed==4010){
if(cm.getLevel() < 150 ) {
cm.sendOk("你的等级不够150级,所以我不能送你进去!");
cm.dispose();
}
else if (cm.getPlayer().getParty() == null) { 
cm.sendOk("你好像还没有一个队伍,我是不能送你进去的."); 
cm.dispose();
}
else if (!cm.isLeader()) { 
cm.sendSimple("如果你想挑战一下蜈蚣, 那么你就你队长来和我谈"); 
cm.dispose();
}else{
var party = cm.getParty().getMembers();
var next = true; 
if (party.size() < 1){
cm.sendOk("需要1人以上才可以挑战.");
cm.dispose();
next = false;
}
if (next) { 
var em = cm.getEventManager("wgquest");
if (em == null) { 
cm.sendOk("此副本已经关闭!"); 
} else {  
em.startInstance(cm.getParty(),cm.getChar().getMap()); 
party = cm.getChar().getEventInstance().getPlayers(); 
cm.removeFromParty(4001008, party); 
cm.removeFromParty(4001007, party);  
} 
cm.serverNotice("『副本挑战』：哇."+ cm.getChar().getName() +" 玩家 远征队的英雄们带着他们的队员去挑战蜈蚣了,他是否能打败蜈蚣呢?");
cm.dispose(); 
}
}



} else if(typed==3380){

if (selection == 43) {
if (cm.haveItem(4000415) >= 1){
cm.gainItem(4000415,-1);
cm.warp(910000018,0); 
}else{
cm.sendOk("#e#b你没有1个#v4000415#.请到#r超级项目⑤  d枫叶兑换处② #b兑换");
cm.dispose(); 
}

} else if (selection == 44) {
if (cm.haveItem(4031470) >= 1){
cm.gainItem(4031470,-1);
cm.warp(910000015,0); 
}else{
cm.sendOk("#e#b你没有1个#v4031470#.请到#r超级项目⑤  d枫叶兑换处② #b兑换");
cm.dispose(); 
}

} else if (selection == 45) {
if (cm.haveItem(4031312) >= 1){ 
cm.gainItem(4031312,-1);
cm.warp(910000016,0);
}else{
cm.sendOk("#e#b你没有#v4031312#.请到#r超级项目⑤  d枫叶兑换处② #b兑换兑换");
cm.dispose();
}

} else if (selection == 46) {
if (cm.haveItem(4031311) >= 1){
cm.gainItem(4031311,-1);
cm.warp(910000017,0); 
}else{
cm.sendOk("#e#b你没有#v4031311#.请到#r超级项目⑤  d枫叶兑换处② #b兑换兑换");
cm.dispose(); 
}

}


} else if(typed==3370){

if (selection == 33) {
cm.MapleMSzs();
cm.dispose();

} else if (selection == 34) {
cm.displayGuildRanks();
cm.dispose();  

} else if (selection == 35) {
cm.MapleMSmeso(); 
cm.dispose(); 

} else if (selection == 36) {
cm.MapleMSfame(); 
cm.dispose(); 

} else if (selection == 37) {
cm.MapleMSpvpkills();
cm.dispose();  

} else if (selection == 38) {
cm.MapleMSlvl(); 
cm.dispose();  

} else if (selection == 39) {
cm.MapleMSpvpdeaths();
cm.dispose();  
}



} else if(typed==3360){

if (selection == 19) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getStr();
if (totAp < 30004) {
p.setStr(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的.你的能力已经被重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk("对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}

}else if (selection == 20) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getDex();
if (totAp < 30004) {
p.setDex(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的.你的能力已经被重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}

}else if (selection == 21) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getInt();
if (totAp < 30004) {
p.setInt(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}

}else if (selection == 22) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getLuk();
if (totAp < 30004) {
p.setLuk(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("对不起，你能剩余AP超过30004不能重置.");
cm.dispose();
}

}else if (selection == 23) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
if (newStr < 30000) {
p.setStr(newStr);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (newStr >= 30000) {
p.setStr(29999);
p.setRemainingAp (newStr - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
}

}else if (selection == 24) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();
if (newDex < 30000) {
p.setDex(newDex);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (newDex >= 30000) {
p.setDex(29999);
p.setRemainingAp (newDex - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
}

}else if (selection == 25) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newInt = p.getRemainingAp() + p.getInt();
if (newInt < 30000) {
p.setInt(newInt);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (newInt >= 30000) {
p.setInt(29999);
p.setRemainingAp (newInt - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
}

}else if (selection == 26) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {
p.setLuk(newLuk);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
} else if (newLuk >= 30000) {
p.setLuk(29999);
p.setRemainingAp (newLuk - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("好的，你的能力已经重置!");
cm.dispose();
}
}



} else if(typed==3350){

if(cm.getChar().getReborns()>=5){

cm.clearSkills(); 
cm.teachSkill(8,1,1);//Multipet skill 
cm.teachSkill(1003,1,1); 
cm.teachSkill(9001000,1,1); //Start of max-level "1" skills 
cm.teachSkill(9001001,1,1); 
cm.teachSkill(1006,1,1); 
cm.teachSkill(1004,1,1); 
cm.teachSkill(9001002,1,1); 
cm.teachSkill(9101000,1,1); 
cm.teachSkill(9101001,1,1); 
cm.teachSkill(9101002,1,1); 
cm.teachSkill(9101003,1,1); 
cm.teachSkill(9101004,1,1); 
cm.teachSkill(9101005,1,1); 
cm.teachSkill(9101006,1,1); 
cm.teachSkill(9101007,1,1); 
cm.teachSkill(9101008,1,1); 
cm.teachSkill(1121011,1,1); 
cm.teachSkill(1221012,1,1); 
cm.teachSkill(1321010,1,1); 
cm.teachSkill(2121008,1,1); 
cm.teachSkill(2221008,1,1); 
cm.teachSkill(2321009,1,1); 
cm.teachSkill(3121009,1,1); 
cm.teachSkill(3221008,1,1); 
cm.teachSkill(4121009,1,1); 
cm.teachSkill(4221008,1,1); //End of max-level "1" skills 
cm.teachSkill(1000002,8,8); //Start of max-level "8" skills 
cm.teachSkill(3000002,8,8); 
cm.teachSkill(4000001,8,8); //End of max-level "8" skills 
cm.teachSkill(1000001,10,10); //Start of max-level "10" skills 
cm.teachSkill(2000001,10,10); //End of max-level "10" skills 
cm.teachSkill(1000000,16,16); //Start of max-level "16" skills 
cm.teachSkill(2000000,16,16); 
cm.teachSkill(3000000,16,16); //End of max-level "16" skills 
cm.teachSkill(1001003,20,20); //Start of max-level "20" skills 
cm.teachSkill(1001004,20,20); 
cm.teachSkill(1001005,20,20); 
cm.teachSkill(2001002,20,20); 
cm.teachSkill(2001003,20,20); 
cm.teachSkill(2001004,20,20); 
cm.teachSkill(2001005,20,20); 
cm.teachSkill(3000001,20,20); 
cm.teachSkill(3001003,20,20); 
cm.teachSkill(3001004,20,20); 
cm.teachSkill(3001005,20,20); 
cm.teachSkill(4000000,20,20); 
cm.teachSkill(4001344,20,20); 
cm.teachSkill(4001334,20,20); 
cm.teachSkill(4001002,20,20); 
cm.teachSkill(4001003,20,20); 
cm.teachSkill(1101005,20,20); 
cm.teachSkill(1100001,20,20); //Start of mastery's 
cm.teachSkill(1100000,20,20); 
cm.teachSkill(1200001,20,20); 
cm.teachSkill(1200000,20,20); 
cm.teachSkill(1300000,20,20); 
cm.teachSkill(1300001,20,20); 
cm.teachSkill(3100000,20,20); 
cm.teachSkill(3200000,20,20); 
cm.teachSkill(4100000,20,20); 
cm.teachSkill(4200000,20,20); //End of mastery's 
cm.teachSkill(4201002,20,20); 
cm.teachSkill(4101003,20,20); 
cm.teachSkill(3201002,20,20); 
cm.teachSkill(3101002,20,20); 
cm.teachSkill(1301004,20,20); 
cm.teachSkill(1301005,20,20); 
cm.teachSkill(1201004,20,20); 
cm.teachSkill(1201005,20,20); 
cm.teachSkill(1101004,20,20); //End of boosters 
cm.teachSkill(1101006,20,20); 
cm.teachSkill(1201006,20,20); 
cm.teachSkill(1301006,20,20); 
cm.teachSkill(2101001,20,20); 
cm.teachSkill(2100000,20,20); 
cm.teachSkill(2101003,20,20); 
cm.teachSkill(2101002,20,20); 
cm.teachSkill(2201001,20,20); 
cm.teachSkill(2200000,20,20); 
cm.teachSkill(2201003,20,20); 
cm.teachSkill(2201002,20,20); 
cm.teachSkill(2301004,20,20); 
cm.teachSkill(2301003,20,20); 
cm.teachSkill(2300000,20,20); 
cm.teachSkill(2301001,20,20); 
cm.teachSkill(3101003,20,20); 
cm.teachSkill(3101004,20,20); 
cm.teachSkill(3201003,20,20); 
cm.teachSkill(3201004,20,20); 
cm.teachSkill(4100002,20,20); 
cm.teachSkill(4101004,20,20); 
cm.teachSkill(4200001,20,20); 
cm.teachSkill(4201003,20,20); //End of second-job skills and first-job 
cm.teachSkill(4211005,20,20); 
cm.teachSkill(4211003,20,20); 
cm.teachSkill(4210000,20,20); 
cm.teachSkill(4110000,20,20); 
cm.teachSkill(4111001,20,20); 
cm.teachSkill(4111003,20,20); 
cm.teachSkill(3210000,20,20); 
cm.teachSkill(3110000,20,20); 
cm.teachSkill(3210001,20,20); 
cm.teachSkill(3110001,20,20); 
cm.teachSkill(3211002,20,20); 
cm.teachSkill(3111002,20,20); 
cm.teachSkill(2210000,20,20); 
cm.teachSkill(2211004,20,20); 
cm.teachSkill(2211005,20,20); 
cm.teachSkill(2111005,20,20); 
cm.teachSkill(2111004,20,20); 
cm.teachSkill(2110000,20,20); 
cm.teachSkill(2311001,20,20); 
cm.teachSkill(2311005,30,30); 
cm.teachSkill(3100001,30,30);//Final Attack : Bow 
cm.teachSkill(3200001,30,30);//Final Attack : XBow 
cm.teachSkill(4120002,30,30);//Shadow Shifter 
cm.teachSkill(4220002,30,30);//Shadow Shifter 
cm.teachSkill(2310000,20,20); 
cm.teachSkill(1311007,20,20); 
cm.teachSkill(1310000,20,20); 
cm.teachSkill(1311008,20,20); 
cm.teachSkill(1210001,20,20); 
cm.teachSkill(1211009,20,20); 
cm.teachSkill(1210000,20,20); 
cm.teachSkill(1110001,20,20); 
cm.teachSkill(1111007,20,20); 
cm.teachSkill(1110000,20,20); //End of 3rd job skills 
cm.teachSkill(1121000,20,20); 
cm.teachSkill(1221000,20,20); 
cm.teachSkill(1321000,20,20); 
cm.teachSkill(2121000,20,20); 
cm.teachSkill(2221000,20,20); 
cm.teachSkill(2321000,20,20); 
cm.teachSkill(3121000,20,20); 
cm.teachSkill(3221000,20,20); 
cm.teachSkill(4121000,20,20); 
cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills 
cm.teachSkill(1321007,10,10); 
cm.teachSkill(1320009,25,25); 
cm.teachSkill(1320008,25,25); 
cm.teachSkill(2321006,10,10); 
cm.teachSkill(1220010,10,10); 
cm.teachSkill(1221004,19,19); 
cm.teachSkill(1221003,19,19); 
cm.teachSkill(1100003,30,30); 
cm.teachSkill(1100002,30,30); 
cm.teachSkill(1101007,30,30); 
cm.teachSkill(1200003,30,30); 
cm.teachSkill(1200002,30,30); 
cm.teachSkill(1201007,30,30); 
cm.teachSkill(1300003,30,30); 
cm.teachSkill(1300002,30,30); 
cm.teachSkill(1301007,30,30); 
cm.teachSkill(2101004,30,30); 
cm.teachSkill(2101005,30,30); 
cm.teachSkill(2201004,30,30); 
cm.teachSkill(2201005,30,30); 
cm.teachSkill(2301002,30,30); 
cm.teachSkill(2301005,30,30); 
cm.teachSkill(3101005,30,30); 
cm.teachSkill(3201005,30,30); 
cm.teachSkill(4100001,30,30); 
cm.teachSkill(4101005,30,30); 
cm.teachSkill(4201005,30,30); 
cm.teachSkill(4201004,30,30); 
cm.teachSkill(1111006,30,30); 
cm.teachSkill(1111005,30,30); 
cm.teachSkill(1111002,30,30); 
cm.teachSkill(1111004,30,30); 
cm.teachSkill(1111003,30,30); 
cm.teachSkill(1111008,30,30); 
cm.teachSkill(1211006,30,30); 
cm.teachSkill(1211002,30,30); 
cm.teachSkill(1211004,30,30); 
cm.teachSkill(1211003,30,30); 
cm.teachSkill(1211005,30,30); 
cm.teachSkill(1211008,30,30); 
cm.teachSkill(1211007,30,30); 
cm.teachSkill(1311004,30,30); 
cm.teachSkill(1311003,30,30); 
cm.teachSkill(1311006,30,30); 
cm.teachSkill(1311002,30,30); 
cm.teachSkill(1311005,30,30); 
cm.teachSkill(1311001,30,30); 
cm.teachSkill(2110001,30,30); 
cm.teachSkill(2111006,30,30); 
cm.teachSkill(2111002,30,30); 
cm.teachSkill(2111003,30,30); 
cm.teachSkill(2210001,30,30); 
cm.teachSkill(2211006,30,30); 
cm.teachSkill(2211002,30,30); 
cm.teachSkill(2211003,30,30); 
cm.teachSkill(2311003,30,30); 
cm.teachSkill(2311002,30,30); 
cm.teachSkill(2311004,30,30); 
cm.teachSkill(2311006,30,30); 
cm.teachSkill(3111004,30,30); 
cm.teachSkill(3111003,30,30); 
cm.teachSkill(3111005,30,30); 
cm.teachSkill(3111006,30,30); 
cm.teachSkill(3211004,30,30); 
cm.teachSkill(3211003,30,30); 
cm.teachSkill(3211005,30,30); 
cm.teachSkill(3211006,30,30); 
cm.teachSkill(4111005,30,30); 
cm.teachSkill(4111006,20,20); 
cm.teachSkill(4111004,30,30); 
cm.teachSkill(4111002,30,30); 
cm.teachSkill(4211002,30,30); 
cm.teachSkill(4211004,30,30); 
cm.teachSkill(4211001,30,30); 
cm.teachSkill(4211006,30,30); 
cm.teachSkill(1120004,30,30); 
cm.teachSkill(1120003,30,30); 
cm.teachSkill(1121008,30,30); 
cm.teachSkill(1121010,30,30); 
cm.teachSkill(1121006,30,30); 
cm.teachSkill(1121002,30,30); 
cm.teachSkill(1220005,30,30); 
cm.teachSkill(1221009,30,30); 
cm.teachSkill(1221007,30,30); 
cm.teachSkill(1221011,30,30); 
cm.teachSkill(1221002,30,30); 
cm.teachSkill(1320005,30,30); 
cm.teachSkill(1320006,30,30); 
cm.teachSkill(1321003,30,30); 
cm.teachSkill(1321002,30,30); 
cm.teachSkill(2121005,30,30); 
cm.teachSkill(2121003,30,30); 
cm.teachSkill(2121004,30,30); 
cm.teachSkill(2121002,30,30); 
cm.teachSkill(2121007,30,30); 
cm.teachSkill(2121006,30,30); 
cm.teachSkill(2221007,30,30); 
cm.teachSkill(2221006,30,30); 
cm.teachSkill(2221003,30,30); 
cm.teachSkill(2221005,30,30); 
cm.teachSkill(2221004,30,30); 
cm.teachSkill(2221002,30,30); 
cm.teachSkill(2321007,30,30); 
cm.teachSkill(2321003,30,30); 
cm.teachSkill(2321008,30,30); 
cm.teachSkill(2321005,30,30); 
cm.teachSkill(2321004,30,30); 
cm.teachSkill(2321002,30,30); 
cm.teachSkill(3120005,30,30); 
cm.teachSkill(3121008,30,30); 
cm.teachSkill(3121003,30,30); 
cm.teachSkill(3121007,30,30); 
cm.teachSkill(3121006,30,30); 
cm.teachSkill(3121002,30,30); 
cm.teachSkill(3121004,30,30); 
cm.teachSkill(3221006,30,30); 
cm.teachSkill(3220004,30,30); 
cm.teachSkill(3221003,30,30); 
cm.teachSkill(3221007,30,30);//snipe 
cm.teachSkill(3221005,30,30); 
cm.teachSkill(3221001,30,30); 
cm.teachSkill(3221002,30,30); 
cm.teachSkill(4121004,30,30); 
cm.teachSkill(4121008,30,30); 
cm.teachSkill(4121003,30,30); 
cm.teachSkill(4121006,30,30); 
cm.teachSkill(4121007,30,30); 
cm.teachSkill(4120005,30,30); 
cm.teachSkill(4221001,30,30); 
cm.teachSkill(4221007,30,30); 
cm.teachSkill(4221004,30,30); 
cm.teachSkill(4221003,30,30); 
cm.teachSkill(4221006,30,30); 
cm.teachSkill(4220005,30,30); 
cm.teachSkill(1221001,30,30); 
cm.teachSkill(1121001,30,30); 
cm.teachSkill(1321001,30,30); 
cm.teachSkill(2121001,30,30); 
cm.teachSkill(2221001,30,30); 
cm.teachSkill(2321001,30,30); 
cm.teachSkill(5000000,20,20); // Started PIRATE Job Skills for v62 // Started 1st Job PIRATE Skills 
cm.teachSkill(5001001,20,20); 
cm.teachSkill(5001002,20,20); 
cm.teachSkill(5001003,20,20); 
cm.teachSkill(5001005,10,10); // Ended 1st Job PIRATE Skills 
cm.teachSkill(5100000,10,10); // Started BRAWLER Skills 
cm.teachSkill(5100001,20,20); 
cm.teachSkill(5101002,20,20); 
cm.teachSkill(5101003,20,20); 
cm.teachSkill(5101004,20,20); 
cm.teachSkill(5101005,10,10); 
cm.teachSkill(5101006,20,20); 
cm.teachSkill(5101007,10,10); // Ended BRAWLER Skills 
cm.teachSkill(5200000,20,20); // Started GUNSLINGER Skills 
cm.teachSkill(5201001,20,20); 
cm.teachSkill(5201002,20,20); 
cm.teachSkill(5201003,20,20); 
cm.teachSkill(5201004,20,20); 
cm.teachSkill(5201005,10,10); 
cm.teachSkill(5201006,20,20); // Ended GUNSLINGER Skills 
cm.teachSkill(5110000,20,20); // Started MARAUDER Skills 
cm.teachSkill(5110001,40,40); 
cm.teachSkill(5111002,30,30); 
cm.teachSkill(5111004,20,20); 
cm.teachSkill(5111005,20,20); 
cm.teachSkill(5111006,30,30); // Ended MARAUDER Skills 
cm.teachSkill(5210000,20,20); // Started OUTLAW Skills 
cm.teachSkill(5211001,30,30); 
cm.teachSkill(5211002,30,30); 
cm.teachSkill(5211004,30,30); 
cm.teachSkill(5211005,30,30); 
cm.teachSkill(5211006,30,30); // Ended OUTLAW Skills 
cm.teachSkill(5121000,20,20); // Started BUCCANEER Skills 
cm.teachSkill(5121001,30,30); 
cm.teachSkill(5121002,30,30); 
cm.teachSkill(5121003,20,20); 
cm.teachSkill(5121004,30,30); 
cm.teachSkill(5121005,30,30); 
cm.teachSkill(5121007,30,30); 
cm.teachSkill(5121008,1,1); 
cm.teachSkill(5121009,20,20); 
cm.teachSkill(5121010,30,30); // Ended BUCCANEER Skills 
cm.teachSkill(5221000,20,20); // Started CORSAIR Skills 
cm.teachSkill(5220001,30,30); 
cm.teachSkill(5220002,20,20); 
cm.teachSkill(5221003,30,30); 
cm.teachSkill(5221004,30,30); 
cm.teachSkill(5221006,10,10); 
cm.teachSkill(5221007,30,30); 
cm.teachSkill(5221008,30,30); 
cm.teachSkill(5221009,20,20); 
cm.teachSkill(5221010,1,1); 
cm.teachSkill(5220011,20,20);
cm.getPlayer().maxAllSkills();
cm.sendOk("成功了！以后你可以随便转职都不用担心加技能。");

}else{
cm.sendOk("对不起，现在你的转生次数还没有 #r5 #k次以上。");

cm.dispose();
}




} else if(typed==3340){
typed=3341;
var a = "请选择你需要的功能.#b"; 
                    for (var i=0; i < t.length; i++) { 
                    a += "\r\n#L" + i + "#" + t[ i ]+""; 
                    } 
                  cm.sendSimple(a); 



} else if(typed==3334){
typed=3335;
if (cm.getLevel() < 255 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("#d对不起,你至少要达到 #r[8级#k] #d我才能为你服务!");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("#d我们需要集结魔法师的精神力去封印魔王的力量,#r管理员#k #d正在与魔王对抗,我们应该尽快赶过去支援他,因此你必须比其他职业提前进行修炼并领悟魔法的精髓,这是一条艰苦的道路,那么你想成为 #r魔法师#k #d么?");
                    status = 150;
                    
                } else {
                    cm.sendNext("#d祝贺你达到了 #r[10级]#k . #d那么你想选择的 #r[第一职业]#k #d是?");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("#d对不起,你必须达到 #r[30级]#k #d才能进行 #r[第二次转职]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("#d祝贺你达到了 #r[30级]#k ,#d你想转职为:\r\n#L0##r刺客#l\r\n#L1##r侠客#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("#d祝贺你达到了 #r[30级]#k ,#d你想转职为:\r\n#L2##r剑客#l\r\n#L3##r准骑士#l\r\n#L4##r枪战士#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("#d祝贺你达到了 #r[30级]#k ,#d你想转职为:\r\n#L5##r冰雷法师#l\r\n#L6##r火毒法师#l\r\n#L7##r牧师#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("#d祝贺你达到了 #r[30级]#k ,#d你想转职为:\r\n#L8##r猎人#l\r\n#L9##r弩手#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                cm.sendSimple("#d祝贺你达到了 #r[30级]#k ,#d你想转职为:\r\n#L10##r拳手#l\r\n#L11##r火枪手#l");

            } else if (cm.getLevel() < 70) {
                cm.sendNext("#d对不起,你必须达到 #r[70级]#k #d才能进行 #r[第三次转职]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 96;
                cm.sendYesNo("#d祝贺你达到了 #r[70级]#k ,#d你现在就要完成 #r[第三次转职]#k #d么?");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("#d对不起,你必须达到 #r[120级]#k #d才能进行 #r[第四次转职]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 138;
                cm.sendYesNo("#d祝贺你达到了 #r[120级]#k ,#d你现在就要完成 #r[第四次转职]#k #d么?");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("#d对不起,你已经完成了所有的转职!\r\n#d但是你可以 #r[转生]#k ,#d如过你想要转生，就请选择转生服务!");
                status = 98;
            } else if (cm.getLevel() >= 200) {
                cm.sendOk("#d啊哈... 伟大的 #r[#h #]#k #d,你已经通过一个漫长而充满挑战的道路,终于成为了风起云涌的人物.但这个世界阴暗的深处,被 #r[管理员]#k #d封印的魔王正蠢蠢欲动,它的残忍无人能及,你需要修炼的更加强大才能拯救所有的居民!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }







}else if(typed==82){
if (selection==0){
if(cm.getDonatorPoints()>=wenduji){
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.gainDonatorPoints(-wenduji);
cm.gainItem(1402014,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜~玩家:"+cm.getChar().getName()+"利用羽翼币购买到了稀世珍宝，快找它去看看吧~~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==1){
if(cm.getDonatorPoints()>=nanguadeng){
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.gainDonatorPoints(-nanguadeng);
cm.gainItem(1402044,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜~玩家:"+cm.getChar().getName()+"利用羽翼币购买到了稀世珍宝，快找它去看看吧~~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==2){
if(cm.getDonatorPoints()>=bingdao){
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.gainDonatorPoints(-bingdao);
cm.gainItem(1302106,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜~玩家:"+cm.getChar().getName()+"利用羽翼币购买到了稀世珍宝，快找它去看看吧~~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==3){
if(cm.getDonatorPoints()>=huodao){
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.gainDonatorPoints(-huodao);
cm.gainItem(1302063,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜~玩家:"+cm.getChar().getName()+"利用羽翼币购买到了稀世珍宝，快找它去看看吧~~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==4){
if(cm.getDonatorPoints()>=langya){
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.gainDonatorPoints(-langya);
cm.gainItem(1402029,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜~玩家:"+cm.getChar().getName()+"利用羽翼币购买到了稀世珍宝，快找它去看看吧~~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}

}else if(typed==180){
if (selection == 0) { 
 playerchoice = "rock"; 
} else if (selection == 1) { 
playerchoice = "paper"; 
} else if (selection == 2) { 
playerchoice = "scissor"; 
} 
var random = Math.floor(Math.random()*4); 
if (random <= 1) { 
compchoice = "rock"; 
} else if (random <= 2) { 
compchoice = "paper"; 
} else if (random <= 4) { 
compchoice = "scissor"; 
} 
typed=181;
cm.sendNext("这次的结果是...");

}else if(typed==171){
if (selection == 0)
{
cm.getPlayer().setDropmeso(0);
cm.sendOk("关闭打怪得到的钱自动存入背包成功！");
cm.dispose();
}
else if (selection == 1)
{
cm.getPlayer().setDropmeso(1);
cm.sendOk("开启打怪得到的钱自动存入背包成功！");
cm.dispose();
}
}else if(typed==168){
if (selection == 1) 
{
cm.sendGetText("#r你想捐款多少呢？我心爱的慈善玩家，请输入您的捐款金额\r\n#b单位：亿元");
typed=169;
}
else if (selection == 2) {
cm.MapleMSjk();
cm.dispose();
}
}else if(typed==167){
if (selection == 1)
{
if (cm.haveItem(4001110))
{
cm.gainItem(4002000,-1);
cm.getPlayer().setPvpKills(0);
cm.sendOk("清除杀人战绩成功！");
cm.dispose();
}
else
{
cm.sendOk("对不起，你没有我需要的东西，我不能帮你。");
cm.dispose();
}
}
else if (selection == 2) 
{
if (cm.haveItem(4001110))
{
cm.gainItem(4002000,-1);
cm.getPlayer().setPvpDeaths(0);
cm.sendOk("清除被杀战绩成功！");
cm.dispose();
}
else
{
cm.sendOk("对不起，你没有我需要的东西，我不能帮你。");
cm.dispose();
}
}
}else if(typed==73){
typed=74;
cm.sendSimple("请选择你要创建的戒指类型：\r\n#b#L0#四叶挚友戒指#l\r\n#L1#雏菊挚友戒指#l\r\n#L2#闪星挚友戒指#l");
}else if(typed==26){
if (selection == 0) { 
if (cm.haveItem(4031456,1)==true) {
cm.sendOk("抱歉你没有1个枫叶珠,所以无法兑换转生纪念币."); 
cm.dispose();
}else{
cm.gainItem(4031456,-1);
cm.gainItem(4001129,1);
cm.sendOk(",恭喜兑换成功！.");
cm.dispose();
}
}else if (selection == 1) {
if (cm.haveItem(4001126,100)==true) {
cm.sendOk("恭喜恭喜，换取成功！"); 
cm.gainItem(4001126,-100);
cm.gainItem(4001129,1);
cm.dispose();
}else{

cm.sendOK("对不起，你没有足够的 #r枫叶 #b,此物品的样子像#v4001126#.");
cm.dispose();
}
}else if (selection == 2) {	
cm.warp(211040800,0);
cm.dispose();
}



}else if(typed==100000){
typed=100001;
if (selection == 0) {
cm.setClan(0);
cm.sendOk("恭喜,你已经成功加入魏国!");
cm.dispose();

} else if (selection == 1) {
cm.setClan(1);
cm.sendOk("恭喜,你已经成功加入吴国!");
cm.dispose();

} else if (selection == 2) {
cm.MapleMSlvl();
cm.dispose();

} else if (selection == 3) {
cm.MapleMSmeso(); 
cm.dispose();

} else if (selection == 4) {
cm.MapleMSpvpkills();
cm.dispose();

} else if (selection == 5) {
cm.MapleMSpvpdeaths();
cm.dispose();

} else if (selection == 6) {
text = "\t\t\t\t\t\t\t\t#b魏国[Blue Selection]#k\r\n";
text += "========在这里你可以了解魏国[Blue]的更多情况========#b\r\n";
text += "#L0#查询魏国部落的 #e在线#n 人数#l\r\n";
text += "#L1#查询魏国部落的 #e全部#n 人数#l\r\n";
text += "#L2#查询魏国部落的 #e全部#n 玩家#l\r\n\r\n";
text += "#k#L3#上一页.#l  #L4#离开.#l";
cm.sendSimple(text);

} else if (selection == 7) {
text = "\t\t\t\t\t\t\t\t#r吴国[Red Selection]#k\r\n";
text += "========在这里你可以了解吴国[Red]的更多情况========#r\r\n";
text += "#L5#查询吴国部落的 #e在线#n 人数#l\r\n";
text += "#L6#查询吴国部落的 #e全部#n 人数#l\r\n";
text += "#L7#查询吴国部落的 #e全部#n 玩家#l\r\n\r\n";
text += "#k#L8#上一页.#l  #L9#离开.#l";
cm.sendSimple(text);
}



}else if(typed==5){
selectedroom = selection; 
var pvproom2 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14); 
if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 0) { 
cm.warp(map+pvproom2[selection]); 
cm.Charnotice(1, "成功创建一个房间。"); 
cm.dispose(); 
} else if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 2) { 
cm.sendOk("房间"+pvproom2[selectedroom]+"已准备完毕！"); 
cm.dispose(); 
} else { 
cm.warp(map+pvproom2[selectedroom]); 
cm.dispose(); 
}




}else if(typed==111){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
if(cm.getDonatorPoints()>=shengjics){
if(chance3==2 || chance3==5 || chance3==7 || chance3==9){
cm.sendOk("对不起，很郁闷,升级失败!..");
cm.gainDonatorPoints(-shengjics);
cm.dispose();
}else{
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-shengjics);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if(typed==81){
if (selection==0){
if(cm.getDonatorPoints()>=taocan100){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 100));
item.setWatk((item.getWatk() + 100));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-40);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==1){
if(cm.getDonatorPoints()>=taocan200){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 200));
item.setWatk((item.getWatk() + 200));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan200);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==110){
cm.dispose();
}else if (selection==2){
if(cm.getDonatorPoints()>=taocan300){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 300));
item.setWatk((item.getWatk() + 300));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan300);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==3){
if(cm.getDonatorPoints()>=taocan400){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 400));
item.setWatk((item.getWatk() + 400));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan400);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==4){
if(cm.getDonatorPoints()>=taocan1000){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 1000));
item.setWatk((item.getWatk() + 1000));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan1000);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升！！~");
cm.dispose();
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}

}else if(typed==3333){
if (selection == 2001) {
cm.sendOk("普通玩家限制转生次数为70次,转生后你能保留100点+转生次数*100点属性\r\n\r\n初级VIP限制转生次数为120次,转生后你能保留200点+转生次数*200点属性\r\n\r\n高级VIP限制转生次数为180次,转生后你能保留300点+转生次数*300点属性\r\n\r\n超级VIP限制转生次数为245次,转生后你能保留400点+转生次数*400点属性\r\n\r\n至尊VIP限制转生次数为300次,转生后你能保留500点+转生次数*500点属性\r\n\r\n\r\n         #r#e请注意:如有剩下的属性,请先把它加了.否则,转生后将会回收!");

}else if (selection == 2002) {
if (cm.getChar().getLevel() < 200) {
cm.sendOk("#e很抱歉,您是选择普通玩家转生,您的等级不够200级,所以我无法为你转生!");
cm.dispose(); 
}else if (cm.getMeso() < 500000000) {
cm.sendOk("#e很抱歉,你没有5亿金币,所以我不能帮你的忙哦.");
cm.dispose();
}else if (cm.getChar().getReborns() > 70) {
cm.sendOk("你是普通玩家,转生次数已超过70,所以不能再转了.");
cm.dispose();
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e抱歉你没有#v4001129#.所以无法进行转生\r\n#b请去兑换或购买  #b(或者去做任务获得)"); 
cm.dispose();
}else{      
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainItem(4001129,-1);
cm.gainReborns(1);
cm.gainMeso(-500000000);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4);  
var totAp = (cm.getChar().getReborns()+1)*100;
p.setRemainingAp (totAp+100);
cm.serverNotice("『转生信息』：恭喜普通玩家 "+ cm.getChar().getName() +" ,转生了,大家祝贺一起他吧!");
cm.sendOk("#e您做得非常好,★你已经成功#e转生#n了★.高兴吧!");
cm.dispose();
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();  

}


}else if (selection == 2003) {
if(cm.getChar().getLevel() < 190){ 
cm.sendOk("#e很抱歉,您选择的是初级VIP转生,所以你要190级才可以转生."); 
cm.dispose(); 
}else if(cm.getChar().getVip() < 1) {
cm.sendOk("#e很抱歉,你不是初级VIP,所以我不能为您服务初级VIP转生.");
cm.dispose();
}else if (cm.getChar().getReborns() > 120) {
cm.sendOk("你是初级VIP,转生次数已超过120,所以不能再转了.");
cm.dispose();
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e抱歉你没有#v4001129#.所以无法进行转生，请去兑换或购买  #b(或者去做任务获得)"); 
cm.dispose();
}else if (cm.getMeso() < 400000000) {
cm.sendOk("你的钱不够4亿.请检查."); 
cm.dispose();
}else if (cm.haveItem(4001129) == false){  
cm.sendOk("#e抱歉你没有#v4001129#,所以您无法进行转生，请去兑换或购买    \r\n#b(或者去做任务获得)"); 
cm.dispose();
}else{ 
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainItem(4001129,-1);
cm.gainReborns(1);
cm.gainMeso(-400000000);
var totAp = (cm.getChar().getReborns()+1)*200;
p.setRemainingAp (totAp+200);
cm.serverNotice("『转生信息』：恭喜初级VIP "+ cm.getChar().getName() +" ,转生了,大家祝贺一起他吧!");
cm.sendOk("#e您做得非常好,★你已经成功#e转生#n了★.高兴吧!");
cm.dispose();
 		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}

}else if (selection == 2004) {
if (cm.getChar().getLevel() < 180) {
cm.sendOk("很抱歉,你的等级不够180级无法为你投胎转世");
cm.dispose(); 
}else if(cm.getChar().getVip() < 2) {
cm.sendOk("#e很抱歉,你不是高级VIP,所以我不能为您服务高级VIP转生.");
cm.dispose(); 
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e抱歉你没有#v4001129#.所以无法进行转生，请去兑换或购买  #b(或者去做任务获得)"); 
cm.dispose();
}else if (cm.getChar().getReborns() > 180) {
cm.sendOk("你是高级VIP,转生次数已超过180,所以不能再转了.");
cm.dispose();
}else if (cm.getMeso() < 300000000) {
cm.sendOk("你的钱不够3亿.请检查."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-300000000); 
cm.gainItem(4001129,-1);
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*300;
p.setRemainingAp (totAp+300);
cm.serverNotice("『转生信息』：恭喜高级VIP "+ cm.getChar().getName() +" 转生了,大家祝贺他吧!");
cm.sendOk("#e您做得非常好, 你已经成功#e转生#n高兴吧！");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose(); 
}

}else if (selection == 2005) {
if (cm.getChar().getLevel() < 170) {
cm.sendOk("很抱歉,你的等级不够170级无法为你投胎转世");
cm.dispose(); 
}else if(cm.getChar().getVip() < 3) {
cm.sendOk("#e很抱歉,你不是超级VIP,所以我不能为您服务超级VIP转生.");
cm.dispose(); 
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e抱歉你没有#v4001129#.所以无法进行转生，请去兑换或购买  #b(或者去做任务获得)"); 
cm.dispose();
}else if (cm.getChar().getReborns() > 245) {
cm.sendOk("你是超级VIP,转生次数已超过245,所以不能再转了.");
cm.dispose();
}else if (cm.getMeso() < 200000000) {
cm.sendOk("你的钱不够2亿.请检查."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
//cm.unequipEverything()  (拖装备的语句)
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-200000000); 
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*400;
p.setRemainingAp (totAp+400);
cm.gainItem(4001129,-1);
cm.serverNotice("『转生信息』：恭喜超级VIP "+ cm.getChar().getName() +" 转生了,大家祝贺他吧!");
cm.sendOk("#e您做得非常好, 你已经成功#e转生#n高兴吧！");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}


}else if (selection == 2006) {
if (cm.getChar().getLevel() < 160) {
cm.sendOk("很抱歉,你的等级不够160级无法为你投胎转世");
cm.dispose(); 
}else if(cm.getChar().getVip() < 4) {
cm.sendOk("#e很抱歉,你不是至尊VIP,所以我不能为您服务至尊VIP转生.");
cm.dispose(); 
}else if (cm.getChar().getReborns() >= 300) {
cm.sendOk("你是至尊VIP,转生次数已超过300,所以不能再转了.");
cm.dispose();
}else if (cm.getMeso() < 100000000) {
cm.sendOk("你的钱不够1亿.请检查."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
//cm.unequipEverything()  (拖装备的语句)
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-100000000); 
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*500;
p.setRemainingAp (totAp+500);
cm.serverNotice("『转生信息』：恭喜至尊VIP "+ cm.getChar().getName() +" 转生了,大家祝贺他吧!");
cm.sendOk("#e您做得非常好, 你已经成功#e转生#n高兴吧！");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}



}


}else if(typed==1){
if (selection==0){
cm.dispose();


}else if (selection==10000){

if(cm.getChar().getVip()>=2){
cm.sendOk("#r对不起，你已经是VIP1以上的VIP了！.");
cm.dispose();
}else{

if(cm.getChar().getReborns()>=1){
cm.getChar().setVip(1);
cm.sendOk("#r恭喜，你已经成功加入初级VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为的初级VIP！");
}else{
cm.sendOk("#r对不起，你没有还没有转生1次以上.");
cm.dispose();
}
}

}else if (selection==1){
if(cm.getChar().getVip()>=3){
cm.sendOk("#r对不起，你已经是VIP2以上的VIP了！.");
cm.dispose();
}else{

if(cm.getDonatorPoints()>=vip2){
cm.getChar().setVip(2);
cm.gainDonatorPoints(-vip2);
cm.sendOk("#r恭喜，你已经成功加入高级VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为高级VIP！！");
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}

}else if (selection==2){
if(cm.getChar().getVip()>=4){

cm.sendOk("#r对不起，你已经是VIP3以上的VIP了！.");
cm.dispose();
}else{
if(cm.getDonatorPoints()>=vip3){
cm.gainDonatorPoints(-vip3);
cm.getChar().setVip(3);
cm.sendOk("#r恭喜，你成功加入终极VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为终级VIP！！！");
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}

}


}else if (selection==3){
if(cm.getChar().getVip()>=4){
cm.sendOk("#r对不起，你已经是至尊VIP了.");
cm.dispose();

}else{
if(cm.getDonatorPoints()>=vip4){
cm.gainDonatorPoints(-vip4);
cm.getChar().setVip(4);
cm.sendOk("#r恭喜，你成功加入至尊VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5221000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
} 

}

}else if (selection==4){
typed=15;
cm.sendNext("你目前选择的是#rV2升级到V3#k.\r\n这项功能目前需要羽翼币#r"+vip2tovip3+"#k个.\r\n如果确定了就开始升级了.\r\n#r现在时间:"+cm.getHour()+"点"+cm.getMin()+"分          您目前羽翼币余额:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==5){
if(cm.getDonatorPoints()>=shuangbei){
cm.gainDonatorPoints(-shuangbei);
cm.sendOk("#r恭喜，购买成功.羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5211018,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功购买双倍经验卡，升级无敌喽!..！");

}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==1000){
typed=1000;
cm.sendNext("你目前选择的是#rV1升级到V2#k.\r\n这项功能目前需要羽翼币#r"+vip1tovip2+"#k个.\r\n如果确定了就开始升级了.\r\n#r现在时间:"+cm.getHour()+"点"+cm.getMin()+"分          您目前羽翼币余额:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==6){
if(cm.getDonatorPoints()>=sibei){
if (cm.haveItem(5211018) == false){
cm.gainDonatorPoints(-sibei);
cm.sendOk("#r恭喜，购买成功羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);
cm.gainItem(5211018,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功购买四倍经验卡，升级无敌喽!..！");

}else{
cm.gainDonatorPoints(-sibei);
cm.sendOk("#r恭喜，购买成功羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);

cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功购买四倍经验卡，升级无敌喽!..！");
}

}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==7){
if(cm.getDonatorPoints()>=pksibei){
cm.gainDonatorPoints(-pksibei);
cm.sendOk("#r恭喜，购买成功.羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功购买四倍PK无敌卡！！！");


}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==8){
if(cm.getDonatorPoints()>=vip3tovip4){
if(cm.getChar().getVip()>=3){
cm.gainDonatorPoints(-vip3tovip4);
cm.getChar().setVip(4);
cm.sendOk("#r恭喜，你成功加入至尊VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5221000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"已经成功的成为至尊VIP！！！！");
}else{
cm.sendOk("#r对不起，你目前VIP等级不是VIP3.请先升到到VIP3");
cm.dispose();
} 
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 9) {
if(cm.getDonatorPoints()>=fbk){
cm.gainDonatorPoints(-fbk);
cm.sendOk("恭喜，你已经成功购买PK防暴卡。");
cm.gainItem(5060001,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了PK防暴卡！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 12) {
if(cm.getDonatorPoints()>=zsb){
cm.gainDonatorPoints(-zsb);
cm.sendOk("恭喜，你已经成功购买转生纪念币。");
cm.gainItem(4001129,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了转生纪念币！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 13) {
if(cm.getDonatorPoints()>=pkqkk){
cm.gainDonatorPoints(-pkqkk);
cm.sendOk("恭喜，你已经成功购买PK战绩清空票。");
cm.gainItem(4002000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了PK战绩清空票！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 14) {
if(cm.getDonatorPoints()>=qhten){
cm.gainDonatorPoints(-qhten);
cm.sendOk("恭喜，你已经成功购买强化装备10次的道具。");
cm.gainItem(4001120,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了强化装备10次的道具！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 15) {
if(cm.getDonatorPoints()>=qhfif){
cm.gainDonatorPoints(-qhfif);
cm.sendOk("恭喜，你已经成功购买强化装备50次的道具。");
cm.gainItem(4001121,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了强化装备50次的道具！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 16) {
if(cm.getDonatorPoints()>=qhone){
cm.gainDonatorPoints(-qhone);
cm.sendOk("恭喜，你已经成功购买强化装备100次的道具。");
cm.gainItem(4001122,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了强化装备100次的道具！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection == 17) {
if(cm.getDonatorPoints()>=qhtwo){
cm.gainDonatorPoints(-qhtwo);
cm.sendOk("恭喜，你已经成功购买强化装备200次的道具。");
cm.gainItem(4001126,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了强化装备200次的道具！！！");
}else{
cm.sendOk("#r对不起，你没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if (selection==11){
if(cm.getDonatorPoints()>=jindaizi){
cm.gainDonatorPoints(-jindaizi);
cm.sendOk("#r恭喜，你成功购买到2个金袋子.羽翼币余额:"+cm.getDonatorPoints());
cm.gainItem(5200002,2);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了金袋子，发财啦！");

}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
} 
}else if (selection==10){
if(cm.getDonatorPoints()>=dianjuan){
cm.gainDonatorPoints(-dianjuan);
cm.getPlayer().modifyCSPoints(1, 200000);
cm.sendOk("#r恭喜，你成功购买到20万点卷,请到商城查收.羽翼币余额:"+cm.getDonatorPoints());

cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[超级管理员]：刚才玩家"+cm.getChar().getName()+"成功利用羽翼币购买了点卷！");

}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}
}else if(typed==2){
typed=67;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
//var statup = new java.util.ArrayList();
cm.sendAcceptDecline("你要砸的装备是：#v"+item.getItemId()+"#\r\n#b\r\n#g目前装备属性:\r\n#b物理攻击力:#r"+item.getWatk()+"#b   魔法力:#r"+item.getMatk()+"  #b可升级次数为:#r"+item.getUpgradeSlots()+"#b 已升级次数:#r"+item.getLevel()+"\r\n#r----------------------------------------------------------------------\r\n#g如果升级成功,那么属性将变为:\r\n#b物理攻击:#r"+(item.getWatk()+10)+"#b   魔法攻击将:#r"+(item.getMatk()+10)+"#b   可升级次数:#r"+(item.getUpgradeSlots()-1)+"#d\r\n确认完毕后，点击接受开始升级..");

}







} else if (status == 4) {



if (typed==7101){//死亡城堡
var em = cm.getEventManager("wgquestxscb");
if (em == null || !em.getProperty("entryPossible").equals("true")) {
cm.sendOk("对不起,目前 #r死亡城堡#k 已经关闭[价格预计:#b"+cm.getChar().getLevel()*1000000+"#k金币].\r\n#r死亡城堡#k活动只在整点开放,会提前5分钟发送公告.");
} else if (cm.getMeso() < cm.getChar().getLevel()*100000 || cm.haveItem(4001126,20)==false) {
cm.sendOk("你没有足够的金币或者#d20#b片#枫叶.");
} else if (cm.getChar().getLevel() < 21) {
cm.sendOk("你至少要21级才能进入 #r领地的决判.#k");
} else if (cm.getChar().getLevel() >= 21 && cm.getChar().getLevel() < 31) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle1").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 31 && cm.getChar().getLevel() < 51) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle2").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 51 && cm.getChar().getLevel() < 71) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle3").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 71 && cm.getChar().getLevel() < 91) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle4").registerPlayer(cm.getChar());
} else {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle5").registerPlayer(cm.getChar());
}
cm.dispose();


}else if (typed==7102){//领地
var em = cm.getEventManager("lolcastle");
if (em == null || !em.getProperty("entryPossible").equals("true")) {
cm.sendOk("对不起,因为 #r领地的决判#k 已经关闭[价格预计:#b"+cm.getChar().getLevel()*1000000+"#k金币].\r\n#r领地的决判#k活动只在整点开放,会提前5分钟发送公告.");
} else if (cm.getMeso() < cm.getChar().getLevel()*100000 || cm.haveItem(4001126,10)==false) {
cm.sendOk("你没有足够的金币或者10片   #r枫叶  .");
} else if (cm.getChar().getLevel() < 21) {
cm.sendOk("你至少要21级才能进入 #r领地的决判.#k");
} else if (cm.getChar().getLevel() >= 21 && cm.getChar().getLevel() < 31) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle1").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 31 && cm.getChar().getLevel() < 51) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle2").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 51 && cm.getChar().getLevel() < 71) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle3").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 71 && cm.getChar().getLevel() < 91) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle4").registerPlayer(cm.getChar());
} else {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle5").registerPlayer(cm.getChar());
}
cm.dispose();





} else if(typed==99001){
if (cm.getMeso() < yyb * 100000000) {
cm.sendOk("#d噢，sorry。你还有那么多钱呢，去赚点钱再来吧！#e要1E一个哦");
cm.dispose();
}else{
cm.gainMeso(-yyb * 100000000);
cm.gainDonatorPoints(yyb);
cm.sendOk("恭喜，成功购买！");
cm.serverNotice("[公告]：玩家   [     "+ cm.getChar().getName() +"    ]  成功购买到  "+yyb+" 个羽翼币");	
cm.dispose();
}





} else if(typed==6211){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
if ((itemId1 == itemId2)&&(itemId1 == itemId3)) {
if (item.getUpgradeSlots() <= 15) {

if (chance <= 1) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#b强化失败,祝您下次好运!#k");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 2) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#b强化失败,祝您下次好运!#k");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 3) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.setBossLog('wqqhfail');
cm.sendOk("#b强化失败，祝您下次好运!#k");
cm.dispose();
}
else if (chance == 4) { 
cm.sendNext("#r确定要开始强化武器?");
typed=654321;
luk = 1 ;
}




}
else if ((item.getUpgradeSlots() >= 16)&&(item.getUpgradeSlots() <= 25))
{
if (chance <= 1) {        
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#b强化失败,祝您下次好运!");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 2) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.setBossLog('wqqhfail');
cm.sendOk("#b强化失败,祝您下次好运!#k");
cm.dispose();
}
else if (chance >= 3) {
cm.sendNext("强化成功,请按下一步#r增加装备属性.");
typed=654322;
luk = 1 ;
}
}
else if (item.getUpgradeSlots() > 25){

if (chance <= 1) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
cm.sendOk("#b强化失败,祝您下次好运!");
cm.setBossLog('wqqhfail');
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (chance >= 2) {
cm.sendNext("强化成功,请按下一步#r增加装备属性.");
typed=654322;
luk = 1 ;
}

}
} else{
cm.sendOk("#r抱歉,你没有收集三把相同的武器，或者武器位置错误!");
cm.dispose();   
}




} else if(typed==77777774000){

if (selection==77701){

if(cm.getChar().getVip() >= 1 ){

if (cm.haveItem(1112306) == false){
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r初级VIP戒指#v1112306#");
cm.dispose();
}
}else{
cm.sendOk("你的VIP等级没有达到要求，#r需要VIP等级达到1以上");
cm.dispose();
}


}else if (selection==77702){
if(cm.getChar().getVip() >= 2 ){
if (cm.haveItem(1112307) == false){
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r高级VIP戒指#v1112307#");
cm.dispose();
}
}else{
cm.sendOk("你的VIP等级没有达到要求，#r需要VIP等级达到2以上");
cm.dispose();
}

}else if (selection==77703){
if(cm.getChar().getVip() >= 3 ){
if (cm.haveItem(1112308) == false){
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r超级VIP戒指#v1112308#");
cm.dispose();
}
}else{
cm.sendOk("你的VIP等级没有达到要求，#r需要VIP等级达到3以上");
cm.dispose();
}

}else if (selection==77704){
if(cm.getChar().getVip() >= 4 ){
if (cm.haveItem(1112302) == false){
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r至尊VIP戒指#v1112301#");
cm.dispose();
}
}else{
cm.sendOk("你的VIP等级没有达到要求，#r需要VIP等级达到4以上");
cm.dispose();
}


}



} else if(typed==77777773000){

if (selection==77701){
if(cm.getChar().getReborns() >= 10 ){
if (cm.haveItem(1112303) == false){
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r初级转生戒指#v1112303#");
cm.dispose();
}
}else{
cm.sendOk("你的转生次数没有达到要求，#r需要转生次数达到10以上");
cm.dispose();
}


}else if (selection==77702){
if(cm.getChar().getReborns() >= 50 ){
if (cm.haveItem(1112304) == false){
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r高级转生戒指#v1112304#");
cm.dispose();
}
}else{
cm.sendOk("你的转生次数没有达到要求，#r需要转生次数达到50以上");
cm.dispose();
}

}else if (selection==77703){
if(cm.getChar().getReborns() >= 100 ){
if (cm.haveItem(1112305) == false){
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r超级转生戒指#v1112305#");
cm.dispose();
}
}else{
cm.sendOk("你的转生次数没有达到要求，#r需要转生次数达到100以上");
cm.dispose();
}

}else if (selection==77704){
if(cm.getChar().getReborns() >= 200 ){
if (cm.haveItem(1112301) == false){
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r至尊转生戒指#v1112302#");
cm.dispose();
}
}else{
cm.sendOk("你的转生次数没有达到要求，#r需要转生次数达到200以上");
cm.dispose();
}


}



} else if(typed==77777772000){

if (selection==77701){
if(cm.getLevel() >= 1 ){
if (cm.haveItem(1112309) == false){
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r初级玩家戒指#v1112309#");
cm.dispose();
}
}else{
cm.sendOk("你的等级没有达到要求，#r需要等级达到1级以上");
cm.dispose();
}


}else if (selection==77702){
if(cm.getLevel() >= 100 ){
if (cm.haveItem(1112310) == false){
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r高级玩家戒指#v1112310#");
cm.dispose();
}
}else{
cm.sendOk("你的等级没有达到要求，#r需要等级达到100级以上");
cm.dispose();
}

}else if (selection==77703){
if(cm.getLevel() >= 150 ){
if (cm.haveItem(1112311) == false){
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r超级玩家戒指#v1112311#");
cm.dispose();
}
}else{
cm.sendOk("你的等级没有达到要求，#r需要等级达到150级以上");
cm.dispose();
}

}else if (selection==77704){
if(cm.getLevel() >= 200 ){
if (cm.haveItem(1112300) == false){
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.sendOk("成功领取！");
cm.dispose();
}else{
cm.sendOk("抱歉,你已经拥有了 #r至尊玩家戒指#v1112300#");
cm.dispose();
}
}else{
cm.sendOk("你的等级没有达到要求，#r需要等级达到200级");
cm.dispose();
}


}





} else if(typed==98200){

if (selection == 1) {
cm.setVip(5);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 2) {
cm.setVip(4);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 3) {
cm.setVip(3);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 4) {
cm.setVip(2);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 5) {
cm.setVip(1);
cm.sendOk("提升成功！");
cm.dispose();
}




} else if(typed==7201){
typed=7203;
cm.sendSimple("欢迎来到幸运50,请选择你目前想做的:#b\r\n#L0#开始下注#l#L1#领取上期奖品#l#L2#查看本期幸运数字#l");
}else if (typed==7202){
typed=7204;
cm.sendSimple("欢迎来到幸运10,请选择你目前想做的:#b\r\n#L0#开始下注#l#L1#领取上期奖品#l#L2#查看本期幸运数字#l");




} else if(typed==7301){
cm.gainItem(5220010, -1);

			
			
			if ((itemchance >= 1) && (itemchance <= 71)) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得传说中的  豆豆票N张!!!");
			cm.gainItem(4110010, itemamount);
			}
			else if (itemchance == 72) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  天籁之音!");
			cm.gainItem(1702207 , 1);
			}
			else if (itemchance == 73) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得暗夜极光!");
			cm.gainItem(1702180 , 1);
			}
			else if (itemchance == 74) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得橡皮鸭子!");
			cm.gainItem(1702181 , 1);
			}
			else if (itemchance == 75) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  玄冰杖!");
			cm.gainItem(1702211 , 1);
			}
			else if (itemchance == 76) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得夕阳极光!");
			cm.gainItem(1702183  , 1);
			}
			else if (itemchance == 77) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  魔女的飞扫把!");
			cm.gainItem(3010043, 1);
			}
			else if (itemchance == 78) {
 cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  海豚相伴!");
			cm.gainItem(1702226 , 1);
			}
			else if (itemchance == 79) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得黑水灵附体!");
			cm.gainItem(1702186 , 1);
			}	
			else if (itemchance == 80) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得粉色极光!");
			cm.gainItem(1702188 , 1);
			}	
			else if (itemchance == 81) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  银狐!");
			cm.gainItem(1702237, 1);
			}
			else if (itemchance == 82) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得透明拳甲!");
			cm.gainItem(1702190 , 1);
			}
			else if (itemchance == 83) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蓝色激光!");
			cm.gainItem(1702191 , 1);
			}	
			else if (itemchance == 84) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得毛巾鞭!");
			cm.gainItem(1702193 , 1);
			}
			else if (itemchance == 85) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得龙珠杖!");
			cm.gainItem(1702195 , 1);
			}
			else if (itemchance == 86) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得小鸟依人!");
			cm.gainItem(1702196 , 1);
			}
			else if (itemchance == 87) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得彩虹雨伞!");
			cm.gainItem(1702199, 1);
			}	
			else if (itemchance == 88) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得透明雨伞!");
			cm.gainItem(1702200 , 1);
			}
			else if (itemchance == 89) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得骷髅棒!");
			cm.gainItem(1702201 , 1);
			}
			else if (itemchance == 90) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得粉嘟嘟大象!");
			cm.gainItem(1702202 , 1);
			}
			else if (itemchance == 91) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得纸扇!");
			cm.gainItem(1702204 , 1);
			}
			else if (itemchance == 92) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蜥蜴!");
			cm.gainItem(1702208, 1);
			}
			else if (itemchance == 93) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得驯鹿拐杖!");
			cm.gainItem(1702209 , 1);
			}
			else if (itemchance == 94) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得圣诞老爷爷");
			cm.gainItem(1702210, 1);
			}
			else if (itemchance == 95) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得龙杖!");
			cm.gainItem(1702212, 1);
			}
			else if (itemchance == 96) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得碎心枪!");
			cm.gainItem(1702213 , 1);
			}
			else if (itemchance == 97) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 求爱人!");
			cm.gainItem(5010005, 1);
			}
			else if (itemchance == 98) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 平衡器!");
			cm.gainItem(5010012, 1);
			}
			else if (itemchance == 99) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 烟火!");
			cm.gainItem(5010013, 1);
			}
			else if (itemchance == 100) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 韩国力量!");
                        cm.gainItem(5010020, 1);
			}
			else if (itemchance == 101) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 闪亮小星星!");
			cm.gainItem(5010022, 1);
			}
			else if (itemchance == 102) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 怦怦小红心!");
			cm.gainItem(5010023, 1);
			}
			else if (itemchance == 103) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 寒冰斗魂!");
			cm.gainItem(5010028, 1);
			}
			else if (itemchance == 104) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 红焰斗魂!");
			cm.gainItem(5010029, 1);
			}
			else if (itemchance == 105) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雷电斗魂!");
			cm.gainItem(5010030, 1);
			}
			else if (itemchance == 106) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 我的男友!");
			cm.gainItem(5010031, 1);
			}
			else if (itemchance == 107) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 我的女友!");
			cm.gainItem(5010032, 1);
			}
			else if (itemchance == 108) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010046, 1);
			}
			else if (itemchance == 109) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010048, 1);
			}
			else if (itemchance == 110) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 枫之冠!");
			cm.gainItem(5010049, 1);
			}
			else if (itemchance == 111) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 迪斯科!");
			cm.gainItem(5010066, 1);
			}
			else if (itemchance == 112) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 五周年纪念章!");
			cm.gainItem(5010086, 1);
			}
			else if (itemchance == 113) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 夜光!");
			cm.gainItem(5010999, 1);
			}
			else if (itemchance == 114) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得牛牛贺岁长袍!");
			cm.gainItem(1052179 , 1);
			}
			else if (itemchance == 115) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得一枝梅夜行服!");
			cm.gainItem(1052183 , 1);
			}
			else if (itemchance == 116) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得炫酷装!");
			cm.gainItem(1052185 , 1);
			}
			else if (itemchance == 117) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得学生服!");
			cm.gainItem(1052201 , 1);
			}
			else if (itemchance == 118) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得蓝色学生服!");
			cm.gainItem(1052204 , 1);
			}
			else if (itemchance == 119) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金鸡效果!");
			cm.gainItem(4290000, 1);
			}
			else if (itemchance == 120) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 过冬桌!");
			cm.gainItem(3010021, 1);
			}
			else if (itemchance == 121) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 骷髅椅!");
			cm.gainItem(3010027, 1);
			}
			else if (itemchance == 122) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 犯人专用!");
			cm.gainItem(3010028, 1);
			}
			else if (itemchance == 123) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运蓝环!");
			cm.gainItem(3010029, 1);
			}
			else if (itemchance == 124) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运黑环!");
			cm.gainItem(3010030, 1);
			}
			else if (itemchance == 125) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运红环!");
			cm.gainItem(3010031, 1);
			}
			else if (itemchance == 126) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运黄环!");
			cm.gainItem(3010032, 1);
			}
			else if (itemchance == 127) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 奥运绿环!");
			cm.gainItem(3010033, 1);
			}
			else if (itemchance == 128) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 飘香猪!");
			cm.gainItem(3010037, 1);
			}
			else if (itemchance == 129) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 透明座椅!");
			cm.gainItem(3010038, 1);
			}
			else if (itemchance == 130) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 寒冰椅!");
			cm.gainItem(3010045, 1);
			}
			else if (itemchance == 131) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 红龙的守护!");
			cm.gainItem(3010046, 1);
			}
			else if (itemchance == 132) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝龙的守护!");
			cm.gainItem(3010047, 1);
			}
			else if (itemchance == 133) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 冰屋!");
			cm.gainItem(3010049, 1);
			}
			else if (itemchance == 134) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 公主椅!");
			cm.gainItem(3010050, 1);
			}
			else if (itemchance == 135) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊熊床!");
			cm.gainItem(3010054, 1);
			}
			else if (itemchance == 136) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 巧克力靠椅!");
			cm.gainItem(3010059, 1);
			}
			else if (itemchance == 137) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 高达的守护!");
			cm.gainItem(3010069, 1);
			}
			else if (itemchance == 138) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 爱心椅!");
			cm.gainItem(3012003, 1);
			}
			else if (itemchance == 139) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 爱心标!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 140) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星之印!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 141) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 狐面!");
			cm.gainItem(1012159, 1);
			}
			else if (itemchance == 142) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金属眼睛!");
			cm.gainItem(1022020, 1);
			}
			else if (itemchance == 143) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 糖果眼睛!");
			cm.gainItem(1022075, 1);
			}
			else if (itemchance == 144) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 迷糊眼睛!");
			cm.gainItem(1022077, 1);
			}
			else if (itemchance == 145) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 舞会假面!");
			cm.gainItem(1022078, 1);
			}
			else if (itemchance == 146) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 墨镜!");
			cm.gainItem(1022083, 1);
			}
			else if (itemchance == 147) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 无神面具!");
			cm.gainItem(1022084, 1);
			}
			else if (itemchance == 148) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 幻灭面具!");
			cm.gainItem(1022085, 1);
			}
			else if (itemchance == 149) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 虚无面具!");
			cm.gainItem(1022086, 1);
			}
			else if (itemchance == 150) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 青蛙面具!");
			cm.gainItem(1022087, 1);
			}
			else if (itemchance == 151) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 老花镜!");
			cm.gainItem(1022090, 1);
			}
			else if (itemchance == 152) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雪花耳钉!");
			cm.gainItem(1032038, 1);
			}
			else if (itemchance == 153) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝牙耳机!");
			cm.gainItem(1032063, 1);
			}
			else if (itemchance == 154) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 风铃耳环!");
			cm.gainItem(1032073, 1);
			}
			else if (itemchance == 155) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 新年面纱!"); 
			cm.gainItem(1000029, 1);
			}
			else if (itemchance == 156) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 牡丹发夹!");
			cm.gainItem(1000034, 1);
			}
			else if (itemchance == 157) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 幻境!");
			cm.gainItem(1702214 , 1);
			}
			else if (itemchance == 158) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 透心凉冰糕!");
			cm.gainItem(1702230, 1);
			}
			else if (itemchance == 159) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 新娘婚纱!");
			cm.gainItem(1001043, 1);
			}
			else if (itemchance == 160) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 肥嘟嘟大象!");
			cm.gainItem(1702231, 1);
			}
			else if (itemchance == 161) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊帽子!");
			cm.gainItem(1001010, 1);
			}
			else if (itemchance == 162) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星纹打猎帽!");
			cm.gainItem(1002266, 1);
			}
			else if (itemchance == 163) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 摇滚帽!");
			cm.gainItem(1002299, 1);
			}
			else if (itemchance == 164) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 天使之环!");
			cm.gainItem(1002333, 1);
			}
                        else if (itemchance == 165) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 三节鞭!");
			cm.gainItem(1702215, 1);
			}
			else if (itemchance == 166) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 海星帽!");
			cm.gainItem(1002451, 1);
			}
			else if (itemchance == 167) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 绿水灵发夹!");
			cm.gainItem(1002477, 1);
			}
			else if (itemchance == 168) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 花蘑菇发夹!");
			cm.gainItem(1002478, 1);
			}
			else if (itemchance == 169) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 熊仔帽!");
			cm.gainItem(1002493, 1);
			}
			else if (itemchance == 170) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 安格拉毛线帽!");
			cm.gainItem(1002495, 1);
			}
			else if (itemchance == 171) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 光头佬!");
			cm.gainItem(1002498, 1);
			}
			else if (itemchance == 172) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 酷炫耳机!");
			cm.gainItem(1002542, 1);
			}
			else if (itemchance == 173) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 神笔!");
			cm.gainItem(1702233, 1);
			}
			else if (itemchance == 174) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 大蒜头!");
			cm.gainItem(1002543, 1);
			}
			else if (itemchance == 175) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 南瓜面具!");
			cm.gainItem(1002544, 1);
			}
			else if (itemchance == 176) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 金水灵帽!");
			cm.gainItem(1002545, 1);
			}
			else if (itemchance == 177) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 银水灵帽!");
			cm.gainItem(1002546, 1);
			}
			else if (itemchance == 178) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝海豚!");
			cm.gainItem(1702238, 1);
			}
			else if (itemchance == 179) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 黑猫面具!");
			cm.gainItem(1002549, 1);
			}
			else if (itemchance == 180) {
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 豺狼帽!"); 
			cm.gainItem(1002558, 1);
			}
			else if (itemchance == 181) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 青苹果帽!");
			cm.gainItem(1002562, 1);
			}
			else if (itemchance == 182) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 骷髅黑色小圆帽!");
			cm.gainItem(1002566, 1);
			}
			else if (itemchance == 183) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 邪神像!");
			cm.gainItem(1002581, 1);
			}
			else if (itemchance == 184) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心之杖!");
			cm.gainItem(1702216, 1);
			}
			else if (itemchance == 185) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小狗帽!");
			cm.gainItem(1002596, 1);
			}
			else if (itemchance == 186) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 雪犬帽!");
			cm.gainItem(1002597, 1);
			}
			else if (itemchance == 187) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 丫丫救生圈!");
			cm.gainItem(1702217, 1);
			}
			else if (itemchance == 188) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 八戒帽!");
			cm.gainItem(1002607, 1);
			}
			else if (itemchance == 189) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 课本帽!");
			cm.gainItem(1002653, 1);
			}
			else if (itemchance == 190) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 二周年菇菇面具!");
			cm.gainItem(1002654, 1);
			}
			else if (itemchance == 191) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小熊帽!");
			cm.gainItem(1002684, 1);
			}
			else if (itemchance == 192) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 草莓帽!");
			cm.gainItem(1002685, 1);
			}
			else if (itemchance == 193) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 哑铃!");
			cm.gainItem(1702218, 1);
			}
			else if (itemchance == 194) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 飞行伞!");
			cm.gainItem(1002726, 1);
			}
			else if (itemchance == 195) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小星星发夹!");
			cm.gainItem(1002699, 1);
			}
			else if (itemchance == 196) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 万圣节南瓜帽子!");
			cm.gainItem(1472028, 1);
			}
			else if (itemchance == 197) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小熊护耳!");
			cm.gainItem(1002722, 1);
			}
			else if (itemchance == 198) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心帽!");
			cm.gainItem(1002729, 1);
			}
			else if (itemchance == 199) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 小象!");
			cm.gainItem(1702178, 1);
			}
			else if (itemchance == 200) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 心帽!");
			cm.gainItem(1002731, 1);
			}
			else if (itemchance == 201) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 微笑帽!");
			cm.gainItem(1002735, 1);
			}
			else if (itemchance == 202) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 蓝格帽!");
			cm.gainItem(1002736, 1);
			}
			else if (itemchance == 203) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 兔兔护耳!");
			cm.gainItem(1002738, 1);
			}
			else if (itemchance == 204) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 火鸡帽!");
			cm.gainItem(1002742, 1);
			}
			else if (itemchance == 205) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 星星耳机!");
			cm.gainItem(1002747, 1);
			}
			else if (itemchance == 206) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 打猎帽!");
			cm.gainItem(1002759, 1);
			}
			else if (itemchance == 207) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 地球帽!");
			cm.gainItem(1002760, 1);
			}
			else if (itemchance == 208) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版 欧耶胜利发夹!");
			cm.gainItem(1002774, 1);
			}
			else if (itemchance == 209) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊帽子!");
			cm.gainItem(1002796, 1);
			}
			else if (itemchance == 210) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小恶魔角!");
			cm.gainItem(1002820, 1);
			}
			else if (itemchance == 211) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鸟窝!");
			cm.gainItem(1002822, 1);
			}
			else if (itemchance == 212) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巫毒头套!");
			cm.gainItem(1002823, 1);
			}
			else if (itemchance == 213) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002825, 1);
			}
			else if (itemchance == 214) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002826, 1);
			}
			else if (itemchance == 215) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002827, 1);
			}
			else if (itemchance == 216) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002828, 1);
			}
			else if (itemchance == 217) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002829, 1);
			}
			else if (itemchance == 218) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002830, 1);
			}
			else if (itemchance == 219) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002831, 1);
			}
			else if (itemchance == 220) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002832, 1);
			}
			else if (itemchance == 221) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002833, 1);
			}
			else if (itemchance == 222) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002834, 1);
			}
			else if (itemchance == 223) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002835, 1);
			}
			else if (itemchance == 224) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星座发夹!");
			cm.gainItem(1002836, 1);
			}
			else if (itemchance == 225) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  赤鬼面具!");
			cm.gainItem(1002837, 1);
			}
			else if (itemchance == 226) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鸡快跑!");
			cm.gainItem(1002840, 1);
			}
			else if (itemchance == 227) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002842, 1);
			}
			else if (itemchance == 228) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002843, 1);
			}
			else if (itemchance == 229) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猫耳!");
			cm.gainItem(1002844, 1);
			}
			else if (itemchance == 230) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小兔兔遮阳帽!");
			cm.gainItem(1002845, 1);
			}
			else if (itemchance == 231) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝天贝雷帽!");
			cm.gainItem(1002846, 1);
			}
			else if (itemchance == 232) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  青蛙头罩!");
			cm.gainItem(1002847, 1);
			}
			else if (itemchance == 233) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  章鱼烧!");
			cm.gainItem(1002848, 1);
			}
			else if (itemchance == 234) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熊猫宝贝猫!");
			cm.gainItem(1002849, 1);
			}
			else if (itemchance == 235) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞红发夹!");
			cm.gainItem(1002876, 1);
			}
			else if (itemchance == 236) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牛牛贺岁帽!");
			cm.gainItem(1002877, 1);
			}
			else if (itemchance == 237) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  乖娃娃绒线帽!");
			cm.gainItem(1002878, 1);
			}
			else if (itemchance == 238) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  遮风镜!");
			cm.gainItem(1002882, 1);
			}
			else if (itemchance == 239) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  拳击手套!");
			cm.gainItem(1702219, 1);
			}
			else if (itemchance == 240) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002888, 1);
			}
			else if (itemchance == 241) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明杖!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 242) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002890, 1);
			}
			else if (itemchance == 243) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉红缤缤!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 244) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丝带发箍!");
			cm.gainItem(1002892, 1);
			}
			else if (itemchance == 245) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  礼炮罐!");
			cm.gainItem(1702222, 1);
			}
			else if (itemchance == 246) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  时尚粉色头巾!");
			cm.gainItem(1002903, 1);
			}
			else if (itemchance == 247) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  旅行格子帽!");
			cm.gainItem(1002907, 1);
			}
			else if (itemchance == 248) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  忍者帽!");
			cm.gainItem(1002912, 1);
			}
			else if (itemchance == 249) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蝴蝶结!");
			cm.gainItem(1002913, 1);
			}
			else if (itemchance == 250) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  烟花棒!");
			cm.gainItem(1702223, 1);
			}
			else if (itemchance == 251) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色绅士帽!");
			cm.gainItem(1002921, 1);
			}
			else if (itemchance == 252) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝格套头帽!");
			cm.gainItem(1002923, 1);
			}
			else if (itemchance == 253) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红星帽!");
			cm.gainItem(1002928, 1);
			}
			else if (itemchance == 254) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  炫彩百搭帽!");
			cm.gainItem(1002929, 1);
			}
			else if (itemchance == 255) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  周年纪念帽!");
			cm.gainItem(1002930, 1);
			}
			else if (itemchance == 256) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑羊帽!");
			cm.gainItem(1002936, 1);
			}
			else if (itemchance == 257) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明武器!");
			cm.gainItem(1702224, 1);
			}
			else if (itemchance == 258) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蜜蜂头盔!");
			cm.gainItem(1002944, 1);
			}
			else if (itemchance == 259) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心电感应帽!");
			cm.gainItem(1002945, 1);
			}
			else if (itemchance == 260) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巧克力香蕉!");
			cm.gainItem(1702228, 1);
			}
			else if (itemchance == 261) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  花发圈!");
			cm.gainItem(1002951, 1);
			}
			else if (itemchance == 262) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  花发圈!");
			cm.gainItem(1002952, 1);
			}
			else if (itemchance == 263) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  大花帽!");
			cm.gainItem(1002953, 1);
			}
			else if (itemchance == 264) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤帽子!");
			cm.gainItem(1002957, 1);
			}
			else if (itemchance == 265) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  暗黑皇冠!");
			cm.gainItem(1002960, 1);
			}
			else if (itemchance == 266) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  外星人发夹!");
			cm.gainItem(1002961, 1);
			}
			else if (itemchance == 267) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牡丹发夹!");
			cm.gainItem(1002962, 1);
			}
			else if (itemchance == 268) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  糕饼帽子!");
			cm.gainItem(1002968, 1);
			}
			else if (itemchance == 269) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小黄狗发圈!");
			cm.gainItem(1002969, 1);
			}
			else if (itemchance == 270) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐面!");
			cm.gainItem(1002973, 1);
			}
			else if (itemchance == 271) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色飞狮帽!");
			cm.gainItem(1002974, 1);
			}
			else if (itemchance == 272) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  保姆发带!");
			cm.gainItem(1002976, 1);
			}
			else if (itemchance == 273) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熊猫耳!");
			cm.gainItem(1002978, 1);
			}
			else if (itemchance == 274) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  冲锋者头盔!");
			cm.gainItem(1002979, 1);
			}
			else if (itemchance == 275) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  天使之环!");
			cm.gainItem(1002983, 1);
			}
			else if (itemchance == 276) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  嘉年华帽!");
			cm.gainItem(1002984, 1);
			}
			else if (itemchance == 277) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蝴蝶夫人结!");
			cm.gainItem(1102060, 1);
			}
			else if (itemchance == 278) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红旗披风!");
			cm.gainItem(1102062, 1);
			}
			else if (itemchance == 279) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞披风!");
			cm.gainItem(1102065, 1);
			}
			else if (itemchance == 280) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  邪魔披风!");
			cm.gainItem(1102066, 1);
			}
			else if (itemchance == 281) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色报童包!");
			cm.gainItem(1102070, 1);
			}
			else if (itemchance == 282) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鸭绒被!");
			cm.gainItem(1102077, 1);
			}
			else if (itemchance == 283) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色报童包!");
			cm.gainItem(1102088, 1);
			}
			else if (itemchance == 284) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色报童包!");
			cm.gainItem(1102089, 1);
			}
			else if (itemchance == 285) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黄色报童包!");
			cm.gainItem(1102090, 1);
			}
			else if (itemchance == 289) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心心气球!");
			cm.gainItem(1102093, 1);
			}
			else if (itemchance == 290) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猴子尾巴!");
			cm.gainItem(1102094, 1);
			}
			else if (itemchance == 291) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  火箭炮!");
			cm.gainItem(1102107, 1);
			}
			else if (itemchance == 292) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  扁担水桶扁肩!");
			cm.gainItem(1102143, 1);
			}
			else if (itemchance == 293) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑骷髅海盗旗!");
			cm.gainItem(1102152, 1);
			}
			else if (itemchance == 294) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  死神镰刀!");
			cm.gainItem(1702229, 1);
			}
			else if (itemchance == 295) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蓝色天使背囊!");
			cm.gainItem(1102169, 1);
			}
			else if (itemchance == 296) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  3周年披风!");
			cm.gainItem(1102171, 1);
			}
			else if (itemchance == 297) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊披风!");
			cm.gainItem(1102175, 1);
			}
			else if (itemchance == 298) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  天使之翼!");
			cm.gainItem(1102184, 1);
			}
			else if (itemchance == 299) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  乖猫猫双肩包!");
			cm.gainItem(1102186, 1);
			}
			else if (itemchance == 300) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐狸尾巴!");
			cm.gainItem(1102187, 1);
			}
			else if (itemchance == 301) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狐狸尾巴!");
			cm.gainItem(1102188, 1);
			}
			else if (itemchance == 302) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玲珑彩灯!");
			cm.gainItem(1102199, 1);
			}
			else if (itemchance == 303) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  异界披风!");
			cm.gainItem(1102202, 1);
			}
			else if (itemchance == 304) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  火箭炮!");
			cm.gainItem(1102203, 1);
			}
			else if (itemchance == 305) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玫瑰角!");
			cm.gainItem(1102204, 1);
			}
			else if (itemchance == 306) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  蜜蜂屁股!");
			cm.gainItem(1102210, 1);
			}
			else if (itemchance == 307) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  残翼!");
			cm.gainItem(1102211, 1);
			}
			else if (itemchance == 308) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小强披风!");
			cm.gainItem(1102212, 1);
			}
			else if (itemchance == 309) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤的小尾巴!");
			cm.gainItem(1102213, 1);
			}
			else if (itemchance == 310) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  品克缤气球!");
			cm.gainItem(1102214, 1);
			}
			else if (itemchance == 311) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  气球串!");
			cm.gainItem(1102215, 1);
			}
			else if (itemchance == 312) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狼尾巴!");
			cm.gainItem(1102216, 1);
			}
			else if (itemchance == 313) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  妖狐尾!");
			cm.gainItem(1102217, 1);
			}
			else if (itemchance == 314) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版   仙女飘飘!");
			cm.gainItem(1102218, 1);
			}
			else if (itemchance == 315) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  4周年气球串!");
			cm.gainItem(1102219, 1);
			}
			else if (itemchance == 316) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  灰巾!");
			cm.gainItem(1102222, 1);
			}
			else if (itemchance == 317) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星之尾!");
			cm.gainItem(1102223, 1);
			}
			else if (itemchance == 318) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  水洗个性牛仔裤!");
			cm.gainItem(1062076, 1);
			}
			else if (itemchance == 319) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  海滩聊天戒指!");
			cm.gainItem(1112803, 1);
			}
			else if (itemchance == 320) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  巧克力聊天戒指!");
			cm.gainItem(1112806, 1);
			}
			else if (itemchance == 321) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉红糖果聊天戒指!");
			cm.gainItem(1112807, 1);
			}
			else if (itemchance == 322) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  超大红心环绕戒指!");
			cm.gainItem(1112905, 1);
			}
			else if (itemchance == 323) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  心心祝福戒指!");
			cm.gainItem(1112906, 1);
			}
			else if (itemchance == 324) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鱼戒指!");
			cm.gainItem(1112907, 1);
			}
			else if (itemchance == 325) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  饼干!");
			cm.gainItem(1092032, 1);
			}
			else if (itemchance == 326) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  邪神蚩尤战盾!");
			cm.gainItem(1092034, 1);
			}
			else if (itemchance == 327) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可乐战盾!");
			cm.gainItem(1092035, 1);
			}
			else if (itemchance == 328) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  鱼盾!");
			cm.gainItem(1092043, 1);
			}
			else if (itemchance == 329) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  无敌石板盾牌!");
			cm.gainItem(1092053, 1);
			}
			else if (itemchance == 330) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  透明盾!");
			cm.gainItem(1092064, 1);
			}
			else if (itemchance == 331) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  禁止吸烟盾!");
			cm.gainItem(1092063, 1);
			}
			else if (itemchance == 332) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  日式木屐!");
			cm.gainItem(1070002, 1);
			}
			else if (itemchance == 333) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  狗狗拖!");
			cm.gainItem(1072257 , 1);
			}
			else if (itemchance == 334) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  小鸡拖!");
			cm.gainItem(1072259 , 1);
			}
			else if (itemchance == 335) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  企鹅拖!");
			cm.gainItem(1072260 , 1);
			}
			else if (itemchance == 336) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色喷气鞋!");
			cm.gainItem(1072276, 1);
			}
			else if (itemchance == 337) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞鹿拖鞋!");
			cm.gainItem(1072278 , 1);
			}
			else if (itemchance == 338) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  夏其尔的鞋!");
			cm.gainItem(1072281 , 1);
			}
			else if (itemchance == 339) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  比耶莫特的鞋!");
			cm.gainItem(1072282 , 1);
			}
			else if (itemchance == 340) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  亚努斯的鞋!");
			cm.gainItem(1072283, 1);
			}
			else if (itemchance == 341) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  溜冰鞋!");
			cm.gainItem(1072322 , 1);
			}
			else if (itemchance == 342) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  星星拖鞋!");
			cm.gainItem(1072323 , 1);
			}
			else if (itemchance == 343) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  猪猪拖!");
			cm.gainItem(1072324 , 1);
			}
			else if (itemchance == 344) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黄水灵拖鞋!");
			cm.gainItem(1072326 , 1);
			}
			else if (itemchance == 345) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  足球钉鞋!");
			cm.gainItem(1072336 , 1);
			}
			else if (itemchance == 346) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  喜洋洋拖鞋!");
			cm.gainItem(1072337 , 1);
			}
			else if (itemchance == 347) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  粉嘟嘟大象拖!");
			cm.gainItem(1072348, 1);
			}
			else if (itemchance == 348) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光鞋!");
			cm.gainItem(1072384, 1);
			}
			else if (itemchance == 349) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  白凉鞋!");
			cm.gainItem(1072385, 1);
			}
			else if (itemchance == 350) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑色木托!");
			cm.gainItem(1072386 , 1);
			}
			else if (itemchance == 351) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  凯蒂鞋!");
			cm.gainItem(1072407, 1);
			}
			else if (itemchance == 352) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光大剑!");
			cm.gainItem(1702072, 1);
			}
			else if (itemchance == 353) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  红色铅笔!");
			cm.gainItem(1702087, 1);
			}
			else if (itemchance == 354) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其绝版  同在红伞下!");
			cm.gainItem(3010044, 1);
			}
			else if (itemchance == 355) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  绿蛙!");
			cm.gainItem(1702095, 1);
			}
			else if (itemchance == 356) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  玉兔手套!");
			cm.gainItem(1082169, 1);
			}
			else if (itemchance == 357) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电子表!");
			cm.gainItem(1082170, 1);
			}
			else if (itemchance == 358) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电子表!");
			cm.gainItem(1082171, 1);
			}
			else if (itemchance == 359) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  点点手套!");
			cm.gainItem(1082172, 1);
			}
			else if (itemchance == 360) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  绝缘手套!");
			cm.gainItem(1082173, 1);
			}
			else if (itemchance == 361) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  熔岩掌套!");
			cm.gainItem(1082224, 1);
			}
			else if (itemchance == 362) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  冰凌掌套!");
			cm.gainItem(1082225, 1);
			}
			else if (itemchance == 363) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  黑骷髅手套!");
			cm.gainItem(1082227, 1);
			}
			else if (itemchance == 364) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  飘飘蝴蝶结!");
			cm.gainItem(1082229, 1);
			}
			else if (itemchance == 365) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  经典名品手套!");
			cm.gainItem(1082231, 1);
			}
			else if (itemchance == 366) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  牛牛猪手套!");
			cm.gainItem(1082233, 1);
			}
			else if (itemchance == 367) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  可爱小绵羊手套!");
			cm.gainItem(1082247, 1);
			}
			else if (itemchance == 368) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  荧光亮丽手镯!");
			cm.gainItem(1082249, 1);
			}
			else if (itemchance == 369) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  喵喵手套!");
			cm.gainItem(1082250, 1);
			}
			else if (itemchance == 370) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  朋克手套!");
			cm.gainItem(1082251, 1);
			}
			else if (itemchance == 371) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  水洗个性牛仔裤!");
			cm.gainItem(1050065, 1);
			}
			else if (itemchance == 372) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  圣诞树!");
			cm.gainItem(3010048 , 1);
			}
			else if (itemchance == 373) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  月亮花朵发夹 !");
			cm.gainItem(1002812 , 1);
			}
			else if (itemchance == 374) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  圣诞钟!");
			cm.gainItem(1702100 , 1);
			}
			else if (itemchance == 375) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  雪片围脖!");
			cm.gainItem(1102196 , 1);
			}
			else if (itemchance == 376) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  中国结（红）!");
			cm.gainItem(1702116, 1);
			}
			else if (itemchance == 377) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  中国结（蓝）!");
			cm.gainItem(1702117, 1);
			}
			else if (itemchance == 378) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  亚努斯之剑 !");
			cm.gainItem(1702118, 1);
			}
			else if (itemchance == 379) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  夏其尔之剑!");
			cm.gainItem(1702119, 1);
			}
			else if (itemchance == 380) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  比耶莫特之剑!");
			cm.gainItem(1702120 , 1);
			}
			else if (itemchance == 381) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  倒霉效果!");
			cm.gainItem(4290001 , 1);
			}
			else if (itemchance == 382) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  礼物心心棒!");
			cm.gainItem(1702125 , 1);
			}
			else if (itemchance == 383) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  报喜鸟披风!");
			cm.gainItem(1702133 , 1);
			}
			else if (itemchance == 384) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  复仇拳!");
			cm.gainItem(1102197 , 1);
			}
			else if (itemchance == 385) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  雪之花!");
			cm.gainItem(1702136 , 1);
			}
			else if (itemchance == 386) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  丫丫救生圈!");
			cm.gainItem(1702137 , 1);
			}
			else if (itemchance == 387) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  金华火腿!");
			cm.gainItem(1702138 , 1);
			}
			else if (itemchance == 388) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  钩子拳套!");
			cm.gainItem(1702139 , 1);
			}
			else if (itemchance == 389) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  童年的秋千!");
			cm.gainItem(3010036 , 1);
			}
			else if (itemchance == 390) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  枫之光盾!");
			cm.gainItem(1092062 , 1);
			}
			else if (itemchance == 391) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  囧水灵!");
			cm.gainItem(1102208 , 1);
			}
			else if (itemchance == 392) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪光手指!");
			cm.gainItem(1702167 , 1);
			}
			else if (itemchance == 393) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  闪亮圣诞树!");
			cm.gainItem(1702168 , 1);
			}
			else if (itemchance == 394) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的 蓝心环绕戒指!");
			cm.gainItem(1112902 , 1);
			}
			else if (itemchance == 395) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  电击拳甲!");
			cm.gainItem(1702170 , 1);
			}
			else if (itemchance == 396) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  限量版沙滩拖鞋!");
			cm.gainItem(1072360 , 1);
			}
			else if (itemchance == 397) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  炎冰极光!");
			cm.gainItem(1702187 , 1);
			}
			else if (itemchance == 398) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得极其稀有的  星之小熊!");
			cm.gainItem(1702203 , 1);
			}
			else if (itemchance == 399) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得绝版  杀虫剂!");
			cm.gainItem(1702177, 1);
			}
			else if (itemchance >= 400) { 
cm.serverNotice("『高级百宝箱』：恭喜"+ cm.getChar().getName() +"，获得传说中的  豆豆票N张!!!");
			cm.gainItem(4110010, itemamount);
			}





                        cm.dispose();



} else if(typed==98600000){
typed=98600100;
 if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("选择你喜欢的?", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("选择你喜欢的?", haircolor);

}


} else if(typed==98500000){


if (selection == 1) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
var newDex = p.getRemainingAp() + p.getDex();
var newInt = p.getRemainingAp() + p.getInt();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newStr < 30000) {
p.setStr(30000);
p.setDex(30000);
p.setInt(30000);
p.setLuk(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d成功，你的#r 所有属性#d 已经重置为30000!");
cm.dispose();
} else if (newStr >= 30000) {

cm.sendOk ("#e对不起，你的 #r力量 #d已经超过30000，不能重置");
cm.dispose();

} else if (newDex >= 30000) {

cm.sendOk ("#e对不起，你的 #r敏捷 #d已经超过30000，不能重置");
cm.dispose();

} else if (newInt >= 30000) {

cm.sendOk ("#e对不起，你的 #r智力 #d已经超过30000，不能重置");
cm.dispose();

} else if (newLuk >= 30000) {

cm.sendOk ("#e对不起，你的 #r运气 #d已经超过30000，不能重置");
cm.dispose();
}



}else if (selection == 2) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();

if (newStr < 30000) {
p.setStr(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("成功，你的力量已经重置为30000!");
cm.dispose();
} else if (newStr >= 30000) {

cm.sendOk ("对不起，你的力量已经超过30000，不能重置");
cm.dispose();
}


}else if (selection == 3) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();

if (newDex < 30000) {
p.setDex(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d成功，你的#r 敏捷#d 已经重置为30000!");
cm.dispose();

} else if (newDex >= 30000) {

cm.sendOk ("#e对不起，你的 #r敏捷 #d已经超过30000，不能重置");
cm.dispose();

}


}else if (selection == 4) {

var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();

var newInt = p.getRemainingAp() + p.getInt();

if (newInt < 30000) {

p.setInt(30000);

p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d成功，你的#r 智力#d 已经重置为30000!");
cm.dispose();


} else if (newInt >= 30000) {

cm.sendOk ("#e对不起，你的 #r智力 #d已经超过30000，不能重置");
cm.dispose();

}
}else if (selection == 5) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();

var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {

p.setLuk(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d成功，你的#r 运气#d 已经重置为30000!");
cm.dispose();

} else if (newLuk >= 30000) {

cm.sendOk ("#e对不起，你的 #r运气 #d已经超过30000，不能重置");
cm.dispose();
}




}


} else if(typed==55100){
if (selection == 55101) {
typed=551010;
var String = "#r#e\r\n┈┈┈┈┈┈━═☆强化装备物攻☆═━┈┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备物理攻击力#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等钻石(#v4250000#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备物理攻击属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55102) {
typed=551020;
var String = "#r#e\r\n┈┈┈┈┈┈━═☆强化装备魔攻☆═━┈┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备魔法攻击力#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等蓝宝石(#v4250100#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备魔法攻击属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55103) {
typed=551030;
var String = "#r#e\r\n┈┈┈┈┈━═☆强化装备可升级次数☆═━┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备可升级次数#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等黑水晶(#v4251300#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备可升级次数  #n增加   #e10  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55104) {
typed=551040;
var String = "#r#e\r\n┈┈┈┈┈━═☆强化装备力量属性☆═━┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备力量属性#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等力量水晶(#v4250800#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备力量属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55105) {
typed=551050;
var String = "#r#e\r\n┈┈┈┈┈━═☆强化装备敏捷属性☆═━┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备敏捷属性#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等力敏捷水晶(#v4251100#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备敏捷属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55106) {
typed=551060;
var String = "#r#e\r\n┈┈┈┈┈━═☆强化装备智力属性☆═━┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备智力属性#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等力智慧水晶(#v4250900#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备智力属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55107) {
typed=551070;
var String = "#r#e\r\n┈┈┈┈┈━═☆强化装备运气属性☆═━┈┈┈┈┈\r\n#n#d你现在选择的是#r#e强化装备运气属性#n#d\r\n#d强化条件说明：需要#r#e10#n#d个下等力幸运水晶(#v4251000#)\r\n#d你目前有#e#r " + cm.getDonatorPoints() + "#n#d羽翼币.\r\n#r强化后   #e装备运气属性  #n增加   #e111  #n.\r\n请选择你需要强化的装备：\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));



}

} else if(typed==100121){
if (beauty == 11){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 12){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 13){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 14){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 15){
				cm.setFace(colors[selection]);
			}



} else if(typed==100111){
if (beauty == 6){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 7){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 8){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 9){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 10){
				cm.setFace(colors[selection]);
			}


} else if(typed==98400000){
if (selection == 1) {
cm.gainItem(1002140,1);
cm.gainItem(1042003,1);
cm.gainItem(1062007,1);
cm.gainItem(1322013,1);
cm.sendOk("领取成功！");
cm.dispose();
}else if (selection == 2) {
cm.gainItem(1702211,1);
cm.gainItem(1702299,1);
cm.gainItem(1002667,1);
cm.gainItem(1032053,1);
cm.gainItem(1012028,1);
cm.gainItem(1051155,1);
cm.gainItem(1071020,1);
cm.gainItem(1051154,1);
cm.gainItem(1071007,1);
cm.gainItem(1112116,1);
cm.gainItem(1112226,1);
cm.gainItem(1082102,1);
cm.gainItem(1102184,1);
cm.gainItem(1051073,1);
cm.gainItem(1402063,1);
cm.sendOk("领取成功！");
cm.dispose();
}else if (selection == 3) {
cm.gainItem(1302080,1);
cm.gainItem(1302081,1);
cm.gainItem(1402046,1);
cm.gainItem(1382057,1);
cm.gainItem(1032019,1);
cm.gainItem(1902024,1);
cm.gainItem(1912017,1);
cm.gainItem(1902025,1);
cm.gainItem(1912018,1);
cm.sendOk("领取成功！");
cm.dispose();


}else if (selection == 4) {
cm.gainItem(3010018,1);
cm.gainItem(3010014,1);
cm.gainItem(3010048,1);
cm.gainItem(3012003,1);
cm.gainItem(3010045,1);
cm.gainItem(3010068,1);
cm.gainItem(3010048,1);
cm.gainItem(3010106,1);
cm.gainItem(3010044,1);
cm.gainItem(3010036,1);
cm.gainItem(3010025,1);
cm.gainItem(3010146,1);
cm.gainItem(3010145,1);
cm.sendOk("领取成功！");
cm.dispose();

}else if (selection == 5) {
cm.gainItem(1402061,1);
cm.sendOk("领取成功！");
cm.dispose();
}else if (selection == 6) {
cm.gainItem(1002140,1);
cm.gainItem(1042003,1);
cm.gainItem(1062007,1);
cm.gainItem(1322013,1);

cm.gainItem(1002667,1);
cm.gainItem(1032053,1);
cm.gainItem(1012028,1);
cm.gainItem(1051155,1);
cm.gainItem(1071020,1);
cm.gainItem(1051154,1);
cm.gainItem(1071007,1);
cm.gainItem(1112116,1);
cm.gainItem(1112226,1);
cm.gainItem(1082102,1);
cm.gainItem(1102184,1);
cm.gainItem(1051073,1);
cm.gainItem(1402063,1);


cm.gainItem(1302080,1);
cm.gainItem(1302081,1);
cm.gainItem(1402046,1);
cm.gainItem(1382057,1);
cm.gainItem(1032019,1);

cm.gainItem(3010018,1);
cm.gainItem(3010014,1);
cm.gainItem(3010048,1);
cm.gainItem(3012003,1);
cm.gainItem(3010045,1);
cm.gainItem(3010068,1);
cm.gainItem(3010048,1);
cm.gainItem(3010106,1);
cm.gainItem(3010044,1);
cm.gainItem(3010036,1);
cm.gainItem(3010025,1);
cm.gainItem(3010146,1);
cm.gainItem(3010145,1);

cm.gainItem(1402061,1);

cm.gainItem(2000005,2000);
cm.gainItem(2050004,500);
cm.sendOk("领取成功！");
cm.dispose();


}

} else if(typed==98300000){


if (selection == 1) {
cm.changeJob(MapleJob.SUPERGM);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 2) {
cm.changeJob(MapleJob.GM);
cm.sendOk("转职成功！");
cm.dispose();


}else if (selection == 3) {
cm.changeJob(MapleJob.HERO);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 4) {
cm.changeJob(MapleJob.NIGHTLORD);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 5) {
cm.changeJob(MapleJob.SHADOWER);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 6) {
cm.changeJob(MapleJob.BISHOP);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 7) {
cm.changeJob(MapleJob.FP_ARCHMAGE);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 8) {
cm.changeJob(MapleJob.IL_ARCHMAGE);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 9) {
cm.changeJob(MapleJob.DARKKNIGHT);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 10) {
cm.changeJob(MapleJob.PALADIN);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 11) {
cm.changeJob(MapleJob.BOWMASTER);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 12) {
cm.changeJob(MapleJob.MARKSMAN);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 13) {
cm.changeJob(MapleJob.BUCCANEER);
cm.sendOk("转职成功！");
cm.dispose();
}else if (selection == 14) {
cm.changeJob(MapleJob.CORSAIR);
cm.sendOk("转职成功！");
cm.dispose();
}



} else if(typed==98200000){

if (selection == 1) {
cm.setVip(5);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 2) {
cm.setVip(4);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 3) {
cm.setVip(3);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 4) {
cm.setVip(2);
cm.sendOk("提升成功！");
cm.dispose();
}else if (selection == 5) {
cm.setVip(1);
cm.sendOk("提升成功！");
cm.dispose();
}













} else if(typed==6161){
if (cm.getDonatorPoints() >= 1) {
itemname = cm.getText();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setOwner(itemname);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-1);
cm.sendOk("成功修改装备名字！");
cm.dispose();
}else{
cm.sendOk("你没有足够的羽翼币");
cm.dispose();
}



} else if(typed==6131){
typed=6133;
slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
if (item==0) {
cm.sendOk("你输入的物品位置没有装备!")
cm.dispose();
}
else
cm.sendYesNo("你确定要锁定下面这件装备吗?\r\n#v"+item.getItemId()+"")


} else if (typed==6132) {
if (cm.getDonatorPoints() < zbjs) {
cm.sendOk("#d你没有#r"+zbjs+"#d羽翼币,所以我不能帮你解锁"); 
cm.dispose();
}else{
typed=6134;
slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
if (item==0) {
cm.sendOk("你输入的物品位置没有装备!")
cm.dispose();
} else
cm.sendYesNo("你确定要解锁下面这件装备吗?\r\n#v"+item.getItemId()+"")

}




} else if(typed==6111){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b升级砸卷次数需要#r"+needap+"#b属性值,您的属性值不足!");
cm.dispose();
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备升级次数需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备升级次数需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4021008,10)) {
cm.sendOk("你的背包里没有#r10#k个黑水晶(#v4021008#)");
cm.dispose();
}
else
{
if (playernumber <= 1) {
cm.gainItem(4021008,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备升级次数失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，还行就不收取羽翼币了。#d祝你下次好运!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber >= 2) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b恭喜你成功啦!快快看你的包裹吧!");
cm.dispose();
}
else if (playernumber == 2) {
cm.gainItem(4021008,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备升级次数失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber == 3) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b恭喜你成功啦!快快看你的包裹吧!");
cm.dispose();
}
else if (playernumber >= 3) {
cm.gainItem(4021008,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备升级次数失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，还行就不收取羽翼币了。#d祝你下次好运!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber == 4) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b恭喜你成功啦!快快看你的包裹吧!");
cm.dispose();
}
}


} else if(typed==6101){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备魔法防御需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备魔法防御需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备魔防需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备魔防需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4011005,10)) {
cm.sendOk("你的背包里没有#r10#k个朱矿石(#v4011005#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMdef(item.getMdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加魔法防御成功.\r\n砸卷次数-1,魔法防御加10!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备魔防失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，还行就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备魔防失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMdef(item.getMdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加魔法防御成功.\r\n砸卷次数-1,魔法防御加10!");
cm.dispose();
}
}


} else if(typed==6091){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备物理防御需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备物理防御需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备物防需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备物防需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4011003,10)) {
cm.sendOk("你的背包里没有#r10#k个朱矿石(#v4011003#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备物防失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备物防失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWdef(item.getWdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理防御成功.\r\n砸卷次数-1,物理防御加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWdef(item.getWdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理防御成功.\r\n砸卷次数-1,物理防御加10!");
cm.dispose();
}
}



} else if(typed==6081){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备躲避率需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备躲避率需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备躲闪需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备躲闪需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4021004,10)) {
cm.sendOk("你的背包里没有#r10#k个石榴石(#v4021004#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备物防失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备躲闪失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAvoid(item.getAvoid() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加躲避率成功.\r\n砸卷次数-1,躲避率加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAvoid(item.getAvoid() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加躲避率成功.\r\n砸卷次数-1,躲避率加10!");
cm.dispose();
}
}


} else if(typed==6071){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备命中率需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备命中率需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备命中需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备命中需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4021000,10)) {
cm.sendOk("你的背包里没有#r10#k个石榴石(#v4021000#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备命中失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备命中失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAcc(item.getAcc() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加命中率成功.\r\n砸卷次数-1,命中率加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAcc(item.getAcc() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加命中率成功.\r\n砸卷次数-1,命中率加10!");
cm.dispose();
}
}



} else if(typed==6061){

if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备运气需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备运气需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备运气需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备运气需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4005003,10)) {
cm.sendOk("你的背包里没有#r10#k个幸运水晶(#v4005003#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备智力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备智力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加运气成功.\r\n砸卷次数-1,运气加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加运气成功.\r\n砸卷次数-1,运气加10!");
cm.dispose();
}
}

} else if(typed==6051){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备智力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备智力需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备智力需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备智力需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4005001,10)) {
cm.sendOk("你的背包里没有#r10#k个智慧水晶(#v4005001#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备智力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备智力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加智力成功.\r\n砸卷次数-1,智力加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加智力成功.\r\n砸卷次数-1,智力加10!");
cm.dispose();
}
}


} else if(typed==6041){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备敏捷需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备敏捷需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备敏捷需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备敏捷需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4005002,10)) {
cm.sendOk("你的背包里没有#r10#k个敏捷水晶(#v4005002#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加物装备敏捷失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备敏捷失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加敏捷成功.\r\n砸卷次数-1,敏捷加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加敏捷成功.\r\n砸卷次数-1,敏捷加10!");
cm.dispose();
}
}


} else if(typed==6031){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备力量需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备力量需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备力量需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备力量需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4005000,10)) {
cm.sendOk("你的背包里没有#r10#k个力量水晶(#v4005000#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备力量失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备力量失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加力量成功.\r\n砸卷次数-1,力量加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加力量成功.\r\n砸卷次数-1,力量加10!");
cm.dispose();
}
}


} else if(typed==6021){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备魔法力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备魔法力需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备魔法力需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备魔法力需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4021005,10)) {
cm.sendOk("你的背包里没有#r10#k个蓝宝石(#v4021005#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加装备魔法力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加装备魔法力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理魔法成功.\r\n砸卷次数-1,物理魔法加10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理魔法成功.\r\n砸卷次数-1,物理魔法加10!");
cm.dispose();
}
}



} else if(typed==6011){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备攻击力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b增加装备攻击力需要#r"+needsp+"#b点技能值,你剩余的技能值不足!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d增加装备攻击力需要#r"+needyyb+"#d个羽翼币,你的羽翼币不足!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d增加装备攻击力需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
}
else if (!cm.haveItem(4021007,10)) {
cm.sendOk("你的背包里没有#r10#k个钻石(#v4021007#)");
cm.dispose();

}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d增加物理攻击力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费,为了感谢你对我们MapleWings的支持，就不收取金币了。#d祝你下次好运!");
cm.dispose();

}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d增加物理攻击力失败，宝石没有全部融入装备。#r收取你一半的材料和手续费，为了感谢你对我们MapleWings的支持，就不收取羽翼币了。#d祝你下次好运!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理攻击成功.\r\n砸卷次数-1,物理攻击加10!");
cm.dispose();


}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜你,增加物理攻击成功.\r\n砸卷次数-1,物理攻击加10!");
cm.dispose();
}
}






} else if(typed==5091){
if (cm.getChar().getRemainingAp() < maps[selectedMap][2]) { 
cm.sendOk("你没有足够的属性点."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - maps[selectedMap][2]); 
cm.gainItem(maps[selectedMap][1],1); 
var statup = new java.util.ArrayList(); 

statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 

cm.dispose(); 
} 





} else if(typed==4121){
typed=4122;
shout = cm.getText();
cm.sendYesNo("你确定要发出去给管理员吗? \r\n<#b" + shout + "#k>确定是这些内容吗?\r\n如果你乱说话我们就把你送到监狱!");


} else if(typed==4081){
typed=4082;
message = cm.getText();
cm.sendYesNo("你确定要把 <" + message +">发出去吗?需要2个羽翼币哦!");


} else if(typed==4071){
if(cm.getDonatorPoints()>=1){
selected = cm.getText();
cm.superlaba(selected,typedd);
cm.gainDonatorPoints(-1);
cm.dispose();
}else{
cm.sendOk("#r对不起,你目前没有足够的羽翼币.");
cm.dispose();
}

} else if(typed==4041){
typed=4042;
fee = cm.getText();
cm.sendYesNo("你确定要下注 #r" + fee + "#k 冒险币吗?请先检查你有没有那么多钱哦!");


} else if(typed==3341){
typed=3342;
 x=selection;
          if(x==2)
          {
            cm.sendOk("您的存款有"+cm.getMoney()+" ");
            cm.dispose();
          }
          else if (x==3)
            {
                if(cm.addBank()>0)
                {
                    cm.sendOk("恭喜您,开户成功!"); 
                    }
                    else
                    {
                        cm.sendOk("很抱歉,开户失败!可能您已经开户过了哦!");
                    }
                    cm.dispose();
            }
          else
          {
          
          var b = " 请选择数量.#b"; 
                        for (var i=0; i < money.length; i++) { 
                        b += "\r\n#L" + i + "#" + money[ i ]+""; 
                        } 
                        cm.sendSimple(b); 
          }


} else if(typed==3335){
typed=3336;
if (selection == 0) {
                jobName = "刺客";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) {
                jobName = "侠客";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) {
                jobName = "剑客";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) {
                jobName = "准骑士";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) {
                jobName = "枪战士";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) {
                jobName = "冰雷法师";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) {
                jobName = "火毒法师";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) {
                jobName = "牧师";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) {
                jobName = "猎人";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) {
                jobName = "弩手";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
            if (selection == 10) {
                jobName = "拳手";
                job = net.sf.odinms.client.MapleJob.BRAWLER;
            }
            if (selection == 11) {
                jobName = "火枪手";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            cm.sendYesNo("#d你想成为 #r[" + jobName + "] #d吗?");






} else if(typed==100001){
if (selection == 0) {
cm.sendNextPrev("这里目前是 #b"+cm.getOnlineClanCount(0)+" #k个人在线.");

} else if (selection == 1) {
cm.sendNextPrev("一共有 #b"+cm.getOfflineClanCount(0)+" #k个人在这个部落里.");

} else if (selection == 2) {
var clanText = cm.getAllOfflineNamesFromClan(0);
if (clanText.equals(""))
cm.sendNextPrev("对不起,没有一个人在这个部落!");
else
cm.sendNextPrev("在这个部落的玩家有以下几个:\r\n#b" +clanText);

} else if (selection == 3) {
cm.sendNext("好了,请按下一页.就可以回到上一页了!");
status = -1;

} else if (selection == 4) {
cm.sendOk("再见,以后常来看我们的部落哦!");
cm.dispose();

} else if (selection == 5) {
cm.sendNextPrev("这里目前是 #r"+cm.getOnlineClanCount(1)+" #k个人在线.");

} else if (selection == 6) {
cm.sendNextPrev("一共有 #r"+cm.getOfflineClanCount(1)+" #k个人在这个部落里.");

} else if (selection == 7) {
var clanText = cm.getAllOfflineNamesFromClan(1);
if (clanText.equals(""))
cm.sendNextPrev("对不起,没有一个人在这个部落!");
else
cm.sendNextPrev("在这个部落的玩家有以下几个:\r\n#b" +clanText);

} else if (selection == 8) {
cm.sendNext("好了,请按下一页.就可以回到上一页了!");
status = -1;

} else if (selection == 9) {
cm.sendOk("再见,以后常来看我们的部落哦!");
cm.dispose();
}







} else if(typed==67){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
if (item.getUpgradeSlots()>0){
if(cm.getDonatorPoints()>=zjghm){
if(chance3>=1 && chance3<=3){
cm.sendOk("对不起，很郁闷,升级失败!..");
cm.gainDonatorPoints(-zjghm);
cm.dispose();
}else if(chance3>=4 && chance3<=6){
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
item.setMatk((item.getMatk() + 10));
item.setWatk((item.getWatk() + 10));
item.setLevel((item.getLevel() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-zjghm);
cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][羽翼币管理人员]：恭喜啊，贺喜啊~玩家:"+cm.getChar().getName()+"成功利用羽翼币将装备提升..大家尖叫祝贺吧~~");
cm.dispose();
}else if(chance3>=7 && chance3<=9){
cm.sendOk("对不起，很郁闷,升级失败!..");
cm.gainDonatorPoints(-zjghm);
cm.dispose();
}

}else{
cm.sendOk("对不起，你没有足够的羽翼币!..");
cm.dispose();
}
}else{
cm.sendOk("对不起，你目前装备可升级次数为0次，不能升级..");
cm.dispose();
}
}else if (selection==10000){
if(cm.haveItem(4021007)){
cm.getChar().setVip(1);
cm.gainItem(4021007, -1);
cm.sendOk("#r恭喜，你已经成功加入高级VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][VIP使者]:玩家"+cm.getChar().getName()+"已经成功的加入了本服的初级VIP！");
}else{
cm.sendOk("#r对不起，你没有一个#v4021007#.");
cm.dispose();
}
}else if(typed==74){
if (selection == 0) {
if (cm.haveItem(5200002)==true){
typed=75;
cm.sendGetText("请输入对方的名字，如果你打不出对方的名字，那么你可以右键点人物，然后点击名字储存，你就把对好的名字复制好了，在到这里按ctrl+v就粘贴好了.\r\n#r提醒：名字输入错了，可能钱，财，人全部空.后果自已负责。"); 
}else{
cm.sendOk("对不起你没有金袋子.目前手续费需要一个.");
cm.dispose();
}
}else if (selection == 1) {
if (cm.haveItem(5200002)==true){
typed=76;
cm.sendGetText("请输入对方的名字，如果你打不出对方的名字，那么你可以右键点人物，然后点击名字储存，你就把对好的名字复制好了，在到这里按ctrl+v就粘贴好了.\r\n#r提醒：名字输入错了，可能钱，财，人全部空.后果自已负责。"); 
}else{
cm.sendOk("对不起你没有金袋子.目前手续费需要一个.");
cm.dispose();
}
}else if (selection == 2) {
if (cm.haveItem(5200002)==true){
typed=77;
cm.sendGetText("请输入对方的名字，如果你打不出对方的名字，那么你可以右键点人物，然后点击名字储存，你就把对好的名字复制好了，在到这里按ctrl+v就粘贴好了.\r\n#r提醒：名字输入错了，可能钱，财，人全部空.后果自已负责。"); 
}else{
cm.sendOk("对不起你没有金袋子.目前手续费需要一个.");
cm.dispose();
}
}
}else if(typed==169){
jkms = cm.getText();
cm.sendYesNo("你确定要捐款 #r"+jkms+"#k 亿冒险币吗？请先检查你有没有那么多钱哦！");
typed=170;
}else if(typed==230){
cm.warp(211040800,0);
cm.dispose();

}else if(typed==181){
if (playerchoice == "rock" && compchoice == "rock") { 
cm.sendOk(Frock + spacing + rock + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else if (playerchoice == "rock" && compchoice == "paper") { 
cm.sendOk(Frock + spacing + paper + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("『娱乐公告』:哇.可怜的"+ cm.getChar().getName() +"，在石头剪刀布活动中失败了,大家一起为他祈祷吧!");
} else if (playerchoice == "rock" && compchoice == "scissor") { 
cm.sendOk(Frock + spacing + scissor + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("『娱乐公告』:恭喜"+ cm.getChar().getName() +",在石头剪刀布活动中胜利了!");
} else if (playerchoice == "paper" && compchoice == "rock") { 
cm.sendOk(Fpaper + spacing + rock + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("『娱乐公告』:恭喜"+ cm.getChar().getName() +",在石头剪刀布活动中胜利了!");
} else if (playerchoice == "paper" && compchoice == "paper") { 
cm.sendOk(Fpaper + spacing + paper + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else if (playerchoice == "paper" && compchoice == "scissor") { 
cm.sendOk(Fpaper + spacing + scissor + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("『娱乐公告』:哇.可怜的"+ cm.getChar().getName() +",在石头剪刀布活动中失败了,大家一起为他祈祷吧!");
} else if (playerchoice == "scissor" && compchoice == "rock") { 
cm.sendOk(Fscissor + spacing + rock + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("『娱乐公告』:哇.可怜的"+ cm.getChar().getName() +",在石头剪刀布活动中失败了,大家一起为他祈祷吧!");
} else if (playerchoice == "scissor" && compchoice == "paper") { 
cm.sendOk(Fscissor + spacing + paper + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("『娱乐公告』:恭喜"+ cm.getChar().getName() +",在石头剪刀布活动中胜利了!");
} else if (playerchoice == "scissor" && compchoice == "scissor") { 
cm.sendOk(Fscissor + spacing + scissor + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else { 
cm.sendOk("出错啦..请叫管理员修复！"); 
}
}

}else if(typed==1000){
if(cm.getDonatorPoints()>=vip1tovip2){
if(cm.getChar().getVip()>=1){
cm.gainDonatorPoints(-vip2tovip3);
cm.getChar().setVip(2);
cm.sendOk("#r恭喜，你成功加入高级VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[NPC][羽翼币交易员]:玩家"+cm.getChar().getName()+"已经成功的加入了本服的高级VIP，大家尖叫！");
}else{
cm.sendOk("#r对不起，你目前VIP等级不是VIP1.请先升到到VIP1");
cm.dispose();
}
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}
}else if(typed==15){
if(cm.getDonatorPoints()>=vip2tovip3){
if(cm.getChar().getVip()>=2){
cm.gainDonatorPoints(-vip2tovip3);
cm.getChar().setVip(3);
cm.sendOk("#r恭喜，你成功加入终极VIP行列!\r\n你现在的VIP等级："+cm.getChar().getVip()+".羽翼币余额:"+cm.getDonatorPoints());
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[NPC][VIP升级员]:玩家"+cm.getChar().getName()+"已经成功的加入了本服的终级VIP，大家尖叫！");
}else{
cm.sendOk("#r对不起，你目前VIP等级不是VIP2.请先升到到VIP2");
cm.dispose();
}
}else{
cm.sendOk("#r对不起，你目前没有足够的羽翼币.请查看如何获得羽翼币.");
cm.dispose();
}






} else if (status == 5) {


if(typed==7203){
var em = cm.getEventManager("wgquestluck");
if(selection==0){
if (em == null){
cm.sendOk("程序错误!");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("true")) {
cm.sendOk("对不起，目前已经被系统调整为 #r禁止#k 下注阶段.\r\n#b本期下注已被系统停止,请在下期来下注吧");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("linjiang")) {
cm.sendOk("#r对不起，目前是领奖时间,请稍候在来下注.");
cm.dispose();
} else if (cm.haveItem(4001126,30)==false || cm.haveItem(4001113,1)==false){
cm.sendOk("#r对不起，你目前没有足够的物品来进行此次下注..\r\n你需要有30个#v4001126#和1个#v4001113#才可以下注...");
cm.dispose();
} else if (cm.getBossLog('luk50')>0){
cm.sendOk("#r对不起，在本期你已经下注了.不能重复下注...");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("false")) {
typed=7205;
cm.sendGetNumber("#r请输入你想投注的号码:",1,1,50);
}
}else if(selection==2){
cm.sendOk("#r本期幸运数字是:"+cm.getnumluck(1)+".");
cm.dispose();
}else if(selection==1){
if(em.getProperty("entryPossible").equals("linjiang")==true){
if(cm.getluck(1)==cm.getnumluck(1)){
cm.delluck(1);
cm.sendOk("#r恭喜你,领奖成功,快去查看包包里面得了什么吧!");
if(change==1){
cm.gainItem(5200002,changed+5);
cm.gainItem(4001126,60);
}else if(change==2){
var newitems = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
var item = newitems.getEquipById(wqyoyo[changeo]);
item.setMatk((item.getMatk() + changem));
item.setWatk((item.getWatk() + changew));
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
}else if(change==3){
cm.gainItem(5200002,changed);
}
cm.serverNotice("[公告]恭喜,玩家:"+cm.getChar().getName()+"在幸运50活动中喜中超级大奖,大家一起祝福他吧..");
cm.dispose();
}else{
cm.sendOk("#r你好像没有中奖..!");
cm.dispose();
}
}else{
cm.sendOk("#r现在不是领奖时间..!");
cm.dispose();
}
}





}else if (typed==7204){
var em = cm.getEventManager("wgquestlucked");
if(selection==0){
if (em == null){
cm.sendOk("程序错误!");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("true")) {
cm.sendOk("对不起，目前已经被系统调整为 #r禁止#k 下注阶段.\r\n#b本期下注已被系统停止,请在下期来下注吧");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("linjiang")) {
cm.sendOk("#r对不起，目前是领奖时间,请稍候在来下注.");
cm.dispose();
} else if (cm.getDonatorPoints()<5){
cm.sendOk("#r对不起，你目前没有足够的羽翼币.");
cm.dispose();
} else if (cm.getBossLog('luk10')>0){
cm.sendOk("#r对不起，在本期你已经下注了.不能重复下注...");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("false")) {
typed=7206;
cm.sendGetNumber("#r请输入你想投注的号码:",1,1,10);
}
}else if(selection==2){
cm.sendOk("#r本期幸运数字是:"+cm.getnumluck(2)+".");
cm.dispose();
}else if(selection==1){
if(em.getProperty("entryPossible").equals("linjiang")==true){
if(cm.getluck(2)==cm.getnumluck(2)){
cm.delluck(2);
cm.sendOk("#r恭喜你,领奖成功,快去查看包包里面得了什么吧!");
if(change==1){
cm.gainItem(5200002,changed+5);
cm.gainItem(4001126,100);
}else if(change==2){
var newitems = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
var item = newitems.getEquipById(wqyoyo[changeo]);
item.setMatk((item.getMatk() + changem));
item.setWatk((item.getWatk() + changew));
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
}else if(change==3){
cm.gainItem(5200002,changed);
}
cm.serverNotice("[公告]恭喜,玩家:"+cm.getChar().getName()+"在幸运10活动中喜中超级大奖,大家一起祝福他吧..");
cm.dispose();
}else{
cm.sendOk("#r你好像没有中奖..!");
cm.dispose();
}
}else{
cm.sendOk("#r现在不是领奖时间..!");
cm.dispose();
}
}

} else if(typed==654322){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 5); // SPEED
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜您,武器强化成功\r\n装备各属性值上升!");
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();



} else if(typed==654321){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 5); // SPEED 
item.setUpgradeSlots((item.getUpgradeSlots() + 2));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r恭喜您,武器强化成功\r\n装备可升级次数+2,各属性值上升!");
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();




} else if(typed==98600100){
cm.dispose();

			
			if (beauty == 1){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 2){
				cm.setHair(haircolor[selection]);
			}


} else if(typed==551010){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备物理攻击属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4250000,10)) {
cm.sendOk("你的背包里没有#r10#k个下等钻石(#v4250000#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250000,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setWatk(item.getWatk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备物理攻击力增加 111 .");
}

} else if(typed==551020){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备魔法攻击属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4250100,10)) {
cm.sendOk("你的背包里没有#r10#k个下等蓝宝石(#v4250100#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250100,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setMatk(item.getMatk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备魔法攻击力增加 111 .");
}

} else if(typed==551030){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备可升级次数需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4251300,10)) {
cm.sendOk("你的背包里没有#r10#k个下等黑水晶(#v4251300#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251300,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setUpgradeSlots((item.getUpgradeSlots() + 10));
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备可升级次数增加 10 .");
}

} else if(typed==551040){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备力量属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4250800,10)) {
cm.sendOk("你的背包里没有#r10#k个下等力量水晶(#v4250800#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250800,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setStr(item.getStr() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备力量属性增加 111 .");
}

} else if(typed==551050){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备敏捷属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4251100,10)) {
cm.sendOk("你的背包里没有#r10#k个下等敏捷水晶(#v4251100#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251100,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setDex(item.getDex() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备敏捷属性增加 111 .");
}

} else if(typed==551060){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备智力属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4250900,10)) {
cm.sendOk("你的背包里没有#r10#k个下等智慧水晶(#v4250900#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250900,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setInt(item.getInt() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备智力属性增加 111 .");
}

} else if(typed==551070){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d你没有#r"+cjqhyyb+"#d羽翼币,所以我不能帮你强化"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#d强化装备运气属性需要#r"+needjb+"#d金币,你的金币不足!");
cm.dispose();
} else if (!cm.haveItem(4251000,10)) {
cm.sendOk("你的背包里没有#r10#k个下等幸运水晶(#v4251000#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251000,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setLuk(item.getLuk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r恭喜，强化装备成功！装备运气增加 111 .");
}




} else if(typed==6133){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem1(slot,true)
cm.sendOk("装备:#v"+item.getItemId()+"# 锁定成功!");
cm.dispose();




} else if(typed==6134){
cm.gainDonatorPoints(-zbjs);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem1(slot,false)
cm.sendOk("装备:#v"+item.getItemId()+"# 解锁成功!");
cm.dispose();



} else if(typed==4122){

if (cm.getMeso() >= 1000000) {
cm.gainMeso(-1000000);
cm.callGM(shout);
cm.sendOk("成功发送.");
cm.dispose();
}else{
cm.sendOk("你没有100万冒险币."); 
cm.dispose();
}


} else if(typed==4082){

if (cm.getDonatorPoints() < 2) {
cm.sendOk("我检查了下你的袋子,怎么没有2个羽翼币呢?");
cm.dispose();
}else{
cm.gainDonatorPoints(-2);
cm.sendOk("成功发送,请看聊天栏吧!");
cm.serverNotice("[全服超级喇叭者]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[全服超级喇叭者]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[全服超级喇叭者]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[全服超级喇叭者]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[全服超级喇叭者]" + cm.getChar().getName() + " : " + message+ "");
cm.dispose();
}

} else if(typed==4042){


if (cm.getMeso() < fee) {
cm.sendOk("哦呵，不好意思你没那么多钱了，去赚点钱再来吧，这可不是免费的!");
cm.dispose();
} else if (cm.getMeso() >= 1050000000) {
cm.sendOk("对不起,你的金币大于了10.5亿,所以不能参于此次下注!");
cm.dispose();
} else if (cm.getText() < 0) {
cm.sendOk("亏你想得出来，居然输入负数，一边去!");
cm.dispose();
} else {
if (chance <= 1) { 
cm.gainMeso(-fee); 
cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输个精光，大家一起为他祈祷吧！"); 
cm.dispose(); 
} 
else if (chance == 2) { 
cm.gainMeso(-fee); 
cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输个精光，大家一起为他祈祷吧！"); 
cm.dispose(); 
} 
else if (chance == 3) { 
cm.gainMeso(-fee); 
cm.sendNext("哦··你的运气不怎么好哦··哈哈 再来一把嘛!"); 
cm.serverNotice("『赌场公告』：哇.可怜的"+ cm.getChar().getName() +"，在赌场输个精光，大家一起为他祈祷吧！"); 
cm.dispose(); 
} 
else if (chance >= 4) { 
cm.gainMeso(fee * 2); 
cm.sendNext("#r哈哈，恭喜你#k! 你赢了! 看来你手气不错再来一把哈!"); 
cm.serverNotice("『赌场公告』：恭喜"+ cm.getChar().getName() +"，在赌场赢得大量金币，大家一起为他祝贺吧！"); 
cm.dispose();
}
}




} else if(typed==3342){
var choose=money1[selection];
          if(x==0)//存 
            { 
            if(cm.getMeso()<choose)
            {
                cm.sendOk("Oh,Sorry,您的钱不够!");    
            }
            else if(cm.addMoney(choose,0)>0)
                {
                cm.gainMeso(-choose);
                cm.sendOk("好的,已经存入!");
                }
                else
                {
                cm.sendOk("Error:请反馈给管理员!");

                }
                cm.dispose();
            } 
            else if(x==1)//取 
            { 
            if(cm.getMoney()<choose)
            {
                cm.sendOk("Oh,Sorry,您存款没有那么多呢!");    
            }
                else if(cm.addMoney(-choose,1)>0)
                {
                cm.gainMeso(choose);
                cm.sendOk("好的,请收好您的钱!");
                }
                else
                {
                cm.sendOk("Error:请反馈给管理员!");
                }
                cm.dispose();
              }
            
      
      
      else
      {
      cm.dispose();
      }







} else if(typed==3336){
            cm.changeJob(job);
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) { 
                // cm.teachSkill(4100000,20,20); //Claw Mastery
                // cm.teachSkill(4100001,30,30); //Critical Throw
                // cm.teachSkill(4100002,20,20); //Endure
                // cm.teachSkill(4101003,20,20); //Claw Booster
                // cm.teachSkill(4101004,20,20); //Haste
                // cm.teachSkill(4101005,30,30); //Drain
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                // cm.teachSkill(4200000,20,20); //Dagger Mastery
                // cm.teachSkill(4200001,20,20); //Endure
                // cm.teachSkill(4201002,20,20); //Dagger Booster
                // cm.teachSkill(4201003,20,20); //Haste
                // cm.teachSkill(4201004,30,30); //Steal
                // cm.teachSkill(4201005,30,30); //Savage Blow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                // cm.teachSkill(1100000,20,20); //Sword Mastery
                // cm.teachSkill(1100001,20,20); //Axe Mastery
                // cm.teachSkill(1100002,30,30); //Final Attack: Sword
                // cm.teachSkill(1100003,30,30); //Final Attack: Axe
                // cm.teachSkill(1101004,20,20); //Sword Booster
                // cm.teachSkill(1101005,20,20); //Axe Booster
                // cm.teachSkill(1101006,20,20); //Rage
                // cm.teachSkill(1101007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                // cm.teachSkill(1200000,20,20); //Sword Mastery
                // cm.teachSkill(1200001,20,20); //BW Mastery
                // cm.teachSkill(1200002,30,30); //Final Attack: Sword
                // cm.teachSkill(1200003,30,30); //Final Attack: BW
                // cm.teachSkill(1201004,20,20); //Sword Booster
                // cm.teachSkill(1201005,20,20); //BW Booster
                // cm.teachSkill(1201006,20,20); //Threaten
                // cm.teachSkill(1201007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                // cm.teachSkill(1300000,20,20); //Spear Mastery
                // cm.teachSkill(1300001,20,20); //Polearm Mastery
                // cm.teachSkill(1300002,30,30); //Final Attack: Spear
                // cm.teachSkill(1300003,30,30); //Final Attack: Polearm
                // cm.teachSkill(1301004,20,20); //Spear Booster
                // cm.teachSkill(1301005,20,20); //Polearm Booster
                // cm.teachSkill(1301006,20,20); //Iron Will
                // cm.teachSkill(1301007,30,30); //Hyper Body
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                // cm.teachSkill(2200000,20,20); //MP Eater
                // cm.teachSkill(2201001,20,20); //Meditation
                // cm.teachSkill(2201002,20,20); //Teleport
                // cm.teachSkill(2201003,20,20); //Slow
                // cm.teachSkill(2201004,30,30); //Cold Bean
                // cm.teachSkill(2201005,30,30); //Thunderbolt
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                // cm.teachSkill(2100000,20,20); //MP Eater
                // cm.teachSkill(2101001,20,20); //Meditation
                // cm.teachSkill(2101002,20,20); //Teleport
                // cm.teachSkill(2101003,20,20); //Slow
                // cm.teachSkill(2101004,30,30); //Fire Arrow
                // cm.teachSkill(2101005,30,30); //Poison Brace
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                // cm.teachSkill(2300000,20,20); //MP Eater
                // cm.teachSkill(2301001,20,20); //Teleport
                // cm.teachSkill(2301002,30,30); //Heal
                // cm.teachSkill(2301003,20,20); //Invincible
                // cm.teachSkill(2301004,20,20); //Bless
                // cm.teachSkill(2301005,30,30); //Holy Arrow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                // cm.teachSkill(3100000,20,20); //Bow Mastery
                // cm.teachSkill(3100001,30,30); //Final Attack: Bow
                // cm.teachSkill(3101002,20,20); //Bow Booster
                // cm.teachSkill(3101003,20,20); //Power Knock-Back
                // cm.teachSkill(3101004,20,20); //Soul Arrow: Bow
                // cm.teachSkill(3101005,30,30); //Arrow Bomb
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                // cm.teachSkill(3200000,20,20); //Crossbow Mastery
                // cm.teachSkill(3200001,30,30); //Final Attack: Crossbow
                // cm.teachSkill(3201002,20,20); //Crossbow Booster
                // cm.teachSkill(3201003,20,20); //Power Knock-Back
                // cm.teachSkill(3201004,20,20); //Soul Arrow: Crossbow
                // cm.teachSkill(3201005,30,30); //Iron Arrow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {

            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {

            }

            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();



} else if(typed==75){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112800);
cm.sendOk("恭喜，创建成功!");
cm.dispose();
}else if(typed==76){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112801);
cm.sendOk("恭喜，创建成功!");
cm.dispose();
}else if(typed==77){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112802);
cm.sendOk("恭喜，创建成功!");
cm.dispose();
}else if(typed==170){
if (cm.getMeso() < jkms * 100000000) {
cm.sendOk("噢，sorry。你还有那么多钱呢，去赚点钱再来吧！");
cm.dispose();
}else{
cm.gainMeso(-jkms * 100000000);
cm.gainjuankuan(jkms);
cm.sendOk("#r成功捐款！");
cm.dispose();
}
} 


} else if (status == 6) {
if(typed==7205){
qty=selection;
cm.setluck(qty,1);
cm.sendOk("#r恭喜,下注成功,请关注系统开奖通知!");
cm.setBossLog('luk50');
cm.gainItem(4001126,-30);
cm.gainItem(4001113,-1);
cm.dispose();
}else if (typed==7206){
qty=selection;
cm.setluck(qty,2);
cm.sendOk("#r恭喜,下注成功,请关注系统开奖通知!");
cm.setBossLog('luk10');
cm.gainDonatorPoints(-5);
cm.dispose();
}


        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 960;
                cm.sendYesNo("#d祝贺你达到了 #r[XXX级]#k #d,你现在就要完成 #r[第XXX次转职]#k #d么?");
            } else { 
                cm.dispose();
            }  
 








 } else if (status == 64) {
            // cm.teachSkill(4110000,20,20); //Alchemist
            // cm.teachSkill(4111001,20,20); //Meso Up
            // cm.teachSkill(4111002,30,30); //Shadow Partner
            // cm.teachSkill(4111003,20,20); //Shadow Web
            // cm.teachSkill(4111004,30,30); //Shadow Meso
            // cm.teachSkill(4111005,30,30); //Avenger
            // cm.teachSkill(4111006,20,20); //Flash Jump
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 67) {
            // cm.teachSkill(4210000,20,20); //Shield Mastery
            // cm.teachSkill(4211001,30,30); //Chakra
            // cm.teachSkill(4211002,30,30); //Assaulter
            // cm.teachSkill(4211003,20,20); //Pickpocket
            // cm.teachSkill(4211004,30,30); //Band of Thieves
            // cm.teachSkill(4211005,20,20); //Meso Guard
            // cm.teachSkill(4211006,30,30); //Meso Explosion
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 70) {
            // cm.teachSkill(3110000,20,20); //Thrust
            // cm.teachSkill(3110001,20,20); //Mortal Blow
            // cm.teachSkill(3111002,20,20); //Puppet
            // cm.teachSkill(3111003,30,30); //Inferno
            // cm.teachSkill(3111004,30,30); //Arrow Rain
            // cm.teachSkill(3111005,30,30); //Silver Hawk
            // cm.teachSkill(3111006,30,30); //Strafe
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 73) {
            // cm.teachSkill(3210000,20,20); //Thrust
            // cm.teachSkill(3210001,20,20); //Mortal Blow
            // cm.teachSkill(3211002,20,20); //Puppet
            // cm.teachSkill(3211003,30,30); //Blizzard
            // cm.teachSkill(3211004,30,30); //Arrow Eruption
            // cm.teachSkill(3211005,30,30); //Golden Eagle
            // cm.teachSkill(3211006,30,30); //Strafe
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 76) {
            // cm.teachSkill(2110000,20,20); //Partial Resistance
            // cm.teachSkill(2110001,30,30); //Element Amplification
            // cm.teachSkill(2111002,30,30); //Explosion
            // cm.teachSkill(2111003,30,30); //Poison Mist
            // cm.teachSkill(2111004,20,20); //Seal
            // cm.teachSkill(2111005,20,20); //Spell Booster
            // cm.teachSkill(2111006,30,30); //Element Composition
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 79) {
            // cm.teachSkill(2210000,20,20); //Partial Resistance
            // cm.teachSkill(2210001,30,30); //Element Amplification
            // cm.teachSkill(2211002,30,30); //Ice Strike
            // cm.teachSkill(2211003,30,30); //Thunder Spear
            // cm.teachSkill(2211004,20,20); //Seal
            // cm.teachSkill(2211005,20,20); //Spell Booster
            // cm.teachSkill(2211006,30,30); //Element Composition
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 82) {
            // cm.teachSkill(2310000,20,20); //Elemental Resistance
            // cm.teachSkill(2311001,20,20); //Dispel
            // cm.teachSkill(2311002,20,20); //Mystic Door
            // cm.teachSkill(2311003,30,30); //Holy Symbol
            // cm.teachSkill(2311004,30,30); //Shining Ray
            // cm.teachSkill(2311005,30,30); //Doom
            // cm.teachSkill(2311006,30,30); //Summon Dragon
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 85) {
            // cm.teachSkill(1110000,20,20); //Improving MP Recovery
            // cm.teachSkill(1110001,20,20); //Shield Mastery
            // cm.teachSkill(1111002,30,30); //Combo Attack
            // cm.teachSkill(1111003,30,30); //Panic: Sword
            // cm.teachSkill(1111004,30,30); //Panic: Axe
            // cm.teachSkill(1111005,30,30); //Coma: Sword
            // cm.teachSkill(1111006,30,30); //Coma: Axe
            // cm.teachSkill(1111007,20,20); //Armor Crash
            // cm.teachSkill(1111008,30,30); //Shout
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 88) {
            // cm.teachSkill(1210000,20,20); //Improving MP Recovery
            // cm.teachSkill(1210001,20,20); //Shield Mastery
            // cm.teachSkill(1211002,30,30); //Charged Blow
            // cm.teachSkill(1211003,30,30); //Fire Charge: Sword
            // cm.teachSkill(1211004,30,30); //Flame Charge: BW
            // cm.teachSkill(1211005,30,30); //Ice Charge: Sword
            // cm.teachSkill(1211006,30,30); //Blizzard Charge: BW
            // cm.teachSkill(1211007,30,30); //Thunder Charge: Sword
            // cm.teachSkill(1211008,30,30); //Lightning Charge: BW
            // cm.teachSkill(1211009,20,20); //Magic Crash
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 91) {
            // cm.teachSkill(1310000,20,20); //Elemental Resistance
            // cm.teachSkill(1311001,30,30); //Dragon Crusher: Spear
            // cm.teachSkill(1311002,30,30); //Dragon Crusher: Polearm
            // cm.teachSkill(1311003,30,30); //Dragon Fury: Spear
            // cm.teachSkill(1311004,30,30); //Dragon Fury: Polearm
            // cm.teachSkill(1311005,30,30); //Sacrifice
            // cm.teachSkill(1311006,30,30); //Dragon Roar
            // cm.teachSkill(1311007,20,20); //Power Crash
            // cm.teachSkill(1311008,20,20); //Dragon Blood
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
        } else if (status == 94) {

            cm.changeJob(MapleJob.MARAUDER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
        } else if (status == 97) {

            cm.changeJob(MapleJob.OUTLAW);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("#d祝你一路好运!");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 137;
                cm.sendYesNo("#d祝贺你达到了 #r[XXXX级]#k #d,你现在就要完成 #r[第XXXX次转职]#k #d么?");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 109) {
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 115) {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 118) {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 121) {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 124) {
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 127) {
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 130) {
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 133) {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 136) {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 139) {
            cm.changeJob(MapleJob.CORSAIR);
            cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                        cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 20) {
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("#d你去吧,希望你成为出色的 #r[魔法师]#k #d,也许不久的未来还能见到你!");
                cm.dispose();
            } else {
                cm.sendOk("#d你没有符合最小需求: #r[20 智力]#k #d!");
                cm.dispose();
            }
            
        } else if (status == 154) {
            cm.sendSimple("#d你想成为:#r\r\n#L0#战士#l\r\n#L1#魔法师#l\r\n#L2#弓箭手#l\r\n#L3#飞侠#l\r\n#L4#海盗#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "战士";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "魔法师";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "弓箭手";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "飞侠";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            if (selection == 4) {
                jobName = "海盗";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            cm.sendYesNo("#d你想成为: #r[" + jobName + "]#k #d吗?");
                        
                        
        } else if (status == 156) {
            if (job == net.sf.odinms.client.MapleJob.WARRIOR && cm.c.getPlayer().getStr() < 35) {
                cm.sendOk("#d你没有符合最小需求: #r[35 力量]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.MAGICIAN && cm.c.getPlayer().getInt() < 20) {
                cm.sendOk("#d你没有符合最小需求: #r[20 智力]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.BOWMAN && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d你没有符合最小需求: #r[25 敏捷]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.THIEF && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d你没有符合最小需求: #r[25 敏捷]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.PIRATE && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d你没有符合最小需求: #r[25 敏捷]#k #d!");
                cm.dispose();
            } else {
                cm.changeJob(job);
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                    // cm.teachSkill(1000000,16,16); //Improving HP Recovery
                    // cm.teachSkill(1000001,10,10); //Improving Max HP Increase
                    // cm.teachSkill(1000002,8,8);   //Endure
                    // cm.teachSkill(1001003,20,20); //Iron Body
                    // cm.teachSkill(1001004,20,20); //Power Strike
                    // cm.teachSkill(1001005,20,20); //Slash Blast
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                    // cm.teachSkill(2000000,16,16); //Improving MP Recovery
                    // cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                    // cm.teachSkill(2001002,20,20); //Magic Guard
                    // cm.teachSkill(2001003,20,20); //Magic Armor
                    // cm.teachSkill(2001004,20,20); //Energy Bolt
                    // cm.teachSkill(2001005,20,20); //Magic Claw
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                    // cm.teachSkill(3000000,16,16); //The Blessing of Amazon
                    // cm.teachSkill(3000001,20,20); //Critical Shot
                    // cm.teachSkill(3000002,8,8);   //The Eye of Amazon
                    // cm.teachSkill(3001003,20,20); //Focus
                    // cm.teachSkill(3001004,20,20); //Arrow Blow
                    // cm.teachSkill(3001005,20,20); //Double Shot
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                    // cm.teachSkill(4000000,20,20); //Nimble Body
                    // cm.teachSkill(4000001,8,8);   //Keen Eyes
                    // cm.teachSkill(4001002,20,20); //Disorder
                    // cm.teachSkill(4001003,20,20); //Dark Sight
                    // cm.teachSkill(4001334,20,20); //Double Stab
                    // cm.teachSkill(4001344,20,20); //Lucky Seven
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {

                }
                cm.sendOk("#d你去吧,希望你能好好运用,也许不久的未来还能见到你!");
                cm.dispose();
            }
            
          } else {
            cm.dispose();
          



















}







} 
}