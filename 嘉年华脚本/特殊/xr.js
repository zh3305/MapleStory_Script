var status = 0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var eff = "#fUI/UIWindowBT.img/WorldMap/BtNext/mouseOver/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var eff4 = "#fUI/Basic/BtHide3/mouseOver/0#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var fff ="#fUI/UIWindow.img/Quest/icon6/0#";
var aaa ="#fUI/Login.img/WorldNotice/2/0#";
var ttt ="#fUI/UIWindow.img/Quest/icon7/0#";
var kkk6 ="#fEffect/ItemEff/1004125/effect/default/0#";
var kkk5 ="#fEffect/ItemEff/1102672/effect/swingP1/0#";
var kkk4 ="#fEffect/ItemEff/1102617/effect/shoot2/0#";
var kkk3 ="#fEffect/Tomb/condition1/land/0#";
var kkk99 ="#fEffect/ItemEff/2420004/1/0#";
var kkk2 ="#fEffect/CharacterEff/moveRandomSprayEff/DAShieldChasing/effect/3/0#";
var kkk1 ="#fEffect/CharacterEff/moveRandomSprayEff/chillingStep/effect/0/0#";
var kkk ="#fEffect/CharacterEff/1051296/1/0#";
var zzz ="#fUI/UIWindow.img/Quest/icon5/0#";
var yyy ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var rrr ="#fUI/UIWindow2.img/Quest/list/recommendTitle#";
var ccc ="#fUI/UIWindowBT.img/WorldMap/BtHome/normal/0#";
var hhh ="#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";
var sz1 ="#fEffect/BasicEff/MainNotice/Content/Number/1/0#";
var kkk ="#fEffect/CharacterEff/1051294/2/0#";
var kkk8 ="#fEffect/CharacterEff/farmEnterTuto/mouseClick/3#";
var uiq ="#fEffect/CharacterEff/1082565/2/0#";
var uiq1 ="#fEffect/CharacterEff/1082565/1/0#";
var uiq2 ="#fEffect/CharacterEff/1082565/4/0#";
var uiq3 ="#fEffect/CharacterEff/1082565/0/0#";
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz1 = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var tz51 = "#fEffect/CharacterEff/1082588/1/0#";  //绿点
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //音符蓝
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var yun ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#";  //警灯
var wn2 = "#fUI/UIWindowTW.img/TimeCapsule/BtClose/disabled/0#";  //叉叉
var wn3 = "#fUI/Basic.img/ComboBox/disabled/1#";  //白条
var wn4 = "#fUI/Basic.img/ComboBox3/mouseOver/1#";  //黄条
var wn5 = "#fUI/Basic.img/Cursor/17/16#";  //黄色圈
var wn6 = "#fUI/Basic.img/Cursor/34/0#";  //圈
var wn7 = "#fUI/Basic.img/Cursor/43/3#";  //蓝圈
var wn8 = "#fUI/CashShop.img/CSBargainSale/BtLeft/normal/0#";  //黄色左
var wn9 = "#fUI/CashShop.img/CSBargainSale/BtRight/normal/0#";  //黄色右
var wn10 = "#fUI/CashShop.img/CSBeauty/tip/hair#";  //发型提示
var wn11= "#fUI/CashShop.img/CSBeauty/hairColor/Enable/0#";  //黑
var wn12 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/1#";  //红
var wn13 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/2#";  //橙
var wn14 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/3#";  //黄
var wn15 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/4#";  //绿
var wn16 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/5#";  //亲
var wn17 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/6#";  //紫
var wn18 = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/7#";  //褐
var wn19 = "#fUI/CashShop.img/CSEffect/event/0#";  //活动图标
var wn20 = "#fUI/CashShop.img/CSEffect/hot/0#";  //人气图标
var wn21 = "#fUI/CashShop.img/CSEffect/mileage/0#";  //积分图标
var wn22 = "#fUI/CashShop.img/CSEffect/new/0#";  //新品图标
var wn23 = "#fUI/CashShop.img/CSEffect/sale/0#";  //折扣图标
var wn24 = "#fUI/CashShop.img/CSEffect/time/0#";  //限量图标
var wp110 = "#fUI/CashShop.img/CSEffect/number/0#";  //数字 后面改数字0-9
var wp111 = "#fUI/CashShop.img/CSEffect/number/1#";  //数字 后面改数字0-9
var wp112 = "#fUI/CashShop.img/CSEffect/number/2#";  //数字 后面改数字0-9
var wp113 = "#fUI/CashShop.img/CSEffect/number/3#";  //数字 后面改数字0-9
var wp114 = "#fUI/CashShop.img/CSEffect/number/4#";  //数字 后面改数字0-9
var wp115 = "#fUI/CashShop.img/CSEffect/number/5#";  //数字 后面改数字0-9
var wp116 = "#fUI/CashShop.img/CSEffect/number/6#";  //数字 后面改数字0-9
var wp117 = "#fUI/CashShop.img/CSEffect/number/7#";  //数字 后面改数字0-9
var wp118 = "#fUI/CashShop.img/CSEffect/number/8#";  //数字 后面改数字0-9
var wp119 = "#fUI/CashShop.img/CSEffect/number/9#";  //数字 后面改数字0-9
var wp2 = "#fUI/CashShop.img/CSIcon/0#";  //男图标 0男-1女
var wp3 = "#fUI/CashShop.img/CSStatus/BtCharge/mouseOver/0#";  //充值图标
var wp4 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/0#";  //武器开头
var wp5 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/1#";  //帽子
var wp6 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/2#";  //披风
var wp7 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/3#";  //长袍
var wp8 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/4#";  //上衣
var wp9 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/5#";  //裤子
var wp10 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/6#";  //鞋子
var wp11 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/7#";  //手套
var wp12 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/8#";  //饰品
var wp13 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/9#";  //眼饰
var wp14 = "#fUI/CashShop.img/CSSubTabBar/Tab/4/Disable/10#";  //效果结尾
var wp15 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/0#";  //斜线美化
var wp16 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/1#";  //斜线美化
var wp17 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/2#";  //斜线美化
var wp18 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/3#";  //斜线美化
var wp19 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/4#";  //斜线美化
var wp20 = "#fUI/mapleBingo.img/mapleBingo/lineAni/0/5#";  //斜线美化
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#";  //星星图标
var wi2 = "#fUI/SoulUI.img/DungeonMap/icon/soulFragment/0#";  //菱形图标
var wi3 = "#fUI/SoulUI.img/DungeonMap/icon/soulTrap/0#";  //骷髅图标
var wi4 = "#fUI/SoulUI.img/DungeonMap/icon/warpGate/0#";  //圆点图标
var wi5 = "#fUI/SoulUI.img/DungeonParty/backgrnd2#";  //毛莫
var wi6 = "#fUI/StarCityUI.img/Board_Friend/list/0/5/selected#";  //剪刀石头布
var wi7 = "#fUI/StarCityUI.img/Board_GameRank/tab/enabled/0#";  //游戏排行
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var wi9 = "#fUI/StarCityUI.img/Board_GameRank/user/shining#";  //紫色条
var wi11 = "#fUI/UIPVP.img/ChampionMark/4#";  //徽章黄色
var wi12 = "#fUI/UIPVP.img/DmgEffect/DmgRed/excellentCritical#";  //特别危险蓝//"+wp110+""+wp111+""+wp112+""+wp113+""+wp114+""+wp115+""+wp116+""+wp117+""+wp118+""+wp119+"
var wi13 = "#fUI/UIPVP.img/DmgEffect/DmgBlue/excellentCritical#";  //特别危险绿
var wi14 = "#fUI/UIPVP.img/MiniMapIcon/star#";  //黄星星
var wi15 = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#";  //蓝星星
var wn60 = "#fMob/0100101.img/die1/1#";  //蜗牛
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var f1 ="#fUI/UIWindow2.img/Quest/list/recommendTitle#";//推荐
var f2 ="#fUI/UIWindowBT.img/WorldMap/BtHome/normal/0#";//小房子
var f3 ="#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";//Q1
var f4 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//蓝心
var f5 = "#fUI/UIWindowBT.img/WorldMap/BtNext/mouseOver/0#";//绿箭头 亮的 左
var f6 = "#fUI/UIWindowBT.img/WorldMap/BtNext/normal/0#";//绿箭头 暗的 左
var f7 = "#fUI/UIWindowBT.img/WorldMap/BtBefore/mouseOver/0#";//绿箭头 亮的 指着右
var f8 = "#fUI/UIWindowBT.img/WorldMap/BtBefore/normal/0#";//绿箭头 暗的 指着右
var f9 = "#fUI/UIWindowBT.img/WorldMap/BtAnother/normal/0#";//蓝方星星
var d1 = "#fUI/UIWindowBT.img/WorldMap/NoticeIcon/0#";//信封
var d2 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/energy/0#";//红条 左边开始端
var d3 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/energy/1#";//红条 中间端
var d4 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/energy/2#";//红条 右边结尾端
var d5 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/level/0#";//绿条 左边开始端
var d6 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/level/1#";//绿条 中间端
var d7 = "#fUI/UIWindowBT.img/VesselUI/shipinfo/gauge/level/2#";//绿条 右边结尾端
var d8 = "#fUI/UIWindowBT.img/Shaman_LevelUpIncentive/LevelUpPresent/clear#";//熊爪
var d9 = "#fUI/UIWindowBT.img/Shaman_LevelUpIncentive/LevelUpIncentivePopUp/failed#";//请确认背包
var d10 = "#fUI/UIWindow.img/Shop/meso#";//金币图标
var d11 ="#fUI/UIWindow.img/Quest/icon6/0#";
var d12 ="#fUI/Login.img/WorldNotice/2/0#";//奖章
var d13 ="#fUI/UIWindowBT.img/WorldMap/BtHome/normal/0#";//房子
var d14 = "#fUI/UIWindowBT.img/WorldMap/Btnavi/normal/0#";//湾箭头
var hwtext=new Array("人长得漂亮不如活得漂亮！","当裤子失去皮带，才懂得什麽叫做依赖。","烟不听话，所以我们'抽烟'。","你发怒一分钟，便失去60秒的幸福。","当男人遇见女人，从此只有纪念日，没有独立日。","路见不平一声吼，吼完继续往前走。","幸福是个比较级，要有东西垫底才感觉得到。","知识就像内裤，看不见但很重要","作为失败的典型，你实在是太成功了","女人喜欢长得坏坏的男人，不是喜欢长坏了的男人","跌倒了，爬起来再哭","你若流泪，先湿的是我的心","让未来到来，让过去过去","我自横刀向天笑，笑完之后去睡觉","别跟我谈感情，谈感情伤钱","孤单是一个人的狂欢，狂欢是一群人的孤单","姐不是收破烂的，做不到让你随喊随到","我不是草船，你的贱别往我这发","你的矮是终身的，我的胖却是暂时的","別在无聊的时候來找我，不然显得我是多余的","姐不是电视机，不要老是盯着姐看","即使你已名花有主、我也要移花接木","心里只有你一个频道 最可恨的是还没有广告","给你最大的报复，就是活的比你幸福","要不是老师说不能乱扔垃圾，不然我早把你扔出去","没有癞蛤蟆，天鹅也会寂寞","我是光棍我可耻，我给国家浪费纸","人生没有如果，只有后果和结果","你那么有钱 为什么不让鬼来推磨？","别把人和狗相提并论，狗最起码忠诚","生活嘛，就是生下来，活下去","当你披上了婚纱 我也披上了袈裟","趁着年轻把能干的坏事都干了吧，没几年了","我人生只会两件事 1 这也不会 2 那也不会","出租车司机，司机中的战斗机，噢耶! ","思想有多远，你就给我滚多远!","人生最大的悲哀是青春不在,青春痘却还在。","最简单的长寿秘决:保持呼吸，不要断气~","打死我也不说，你们还没使美人计呢!","不要和我比懒,我懒得和你比","我不是个随便的人 我随便起来不是人","不怕虎一样的敌人，就怕猪一样的队友","老虎不发威 你当我是HELLO KITTY！","吃自助最高境界：扶墙进，扶墙出。","爷爷都是从孙子走过来的……","夏天就是不好，穷的时候我连西北风都没得喝","没什么事就不要找我，有事了更不要找我。","我想早恋，可是已经晚了……","钱可以解决的问题都不是问题。","天哪，我的衣服又瘦了！","不吃饱哪有力气减肥啊？","连广告也信，读书读傻了吧？","人怕出名猪怕壮，男怕没钱女怕胖。","如果有钱也是一种错，我情愿一错再错","命运负责洗牌，但是玩牌的是我们自己！","好好活着，因为我们会死很久!","人又不聪明，还学人家秃顶！","我总在牛a与牛c之间徘徊。","不怕被人利用，就怕你没用。","鄙视我的人这么多，你算老几? ","秀发去无踪，头屑更出众！","春色满园关不住，我诱红杏出墙来。","问世间情为何物？一物降一物","bmw是别摸我，msn是摸死你","女为悦己者容,男为悦己者穷！ ","念了十几年书，还是幼儿园比较好混");
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
	        var hwchance= Math.floor(Math.random()*hwtext.length);
			cm.sendSimple("" + e + "  " + e + "  " + e + "  " + e + "  " + e + "   " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "\r\n               < #e#r#h ##k#n >\r\n #k#b幽默时刻:#r"+hwtext[hwchance]+"#k\r\n          #b 服务器当前时间：#r" + hour +":" + minute + ":" + second + "      \r\n#b" + e + "  " + e + "  " + e + "  " + e + "  " + e + "   " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "  " + e + "\r\n#L3##n#b" + icon5 + " 大转盘 #n#r[新椅子/暴君/FFN/道具等！#n] #e5000点卷/次#n#l\r\n\r\n\#L2##b" + wn16 + " 特效戒指#l  #L7##b" + wn16 + " 购买坐骑#l  #L9##b" + wn16 + " 购买宠物#l \r\n#L10##b" + wn17 + " 枫叶交换#l  #L11##b" + wn17 + " #r免费余额#n#l  #L12##b" + wn17 + " #r金币交换#n#l\r\n#L15##b" + wn15 + " #r抵#b机器人#n#l  #L17##b" + wn15 + " #b金币中介#n#l\r\n\r\n#L13##b" + icon6 + " #d#e隐藏的箱子 #r#n[超大椅子/暴君/FFN武器防具自选箱子]#n#l\r\n#L14##b" + icon3 + " #d#e召唤的怪物 #r#n[星星/抵用卷/闪炫魔方/未知金币包]#n#l");
		} else if (status == 1) {
			if (selection == 1) {
                    cm.dispose();
		    cm.openNpc(9000154,1);
			}
			if (selection == 2) {
                        cm.dispose();
		        cm.openNpc(9310470,"txjz");
			}
			if (selection == 7) {
                        cm.dispose();
		        cm.openNpc(9310470,"chongqi");
			}
			if (selection == 9) {
                        cm.dispose();
		        cm.openNpc(9310470,"0");
			}
			if (selection == 10) {
                        cm.dispose();
		        cm.openNpc(9000041);
			}
			if (selection == 11) {
                        cm.dispose();
		        cm.openNpc(9310470,"hqye1");
			}
			if (selection == 12) {
                        cm.dispose();
		        cm.openNpc(9310470,"jbhdj");
			}
			if (selection == 13) {
                        cm.dispose();
		        cm.openNpc(9310470,"RandBox");
			}
			if (selection == 14) {
                        cm.dispose();
		        //cm.warp(109090103,0);
                        cm.openNpc(9310470,"zhaohuan");
			}
			if (selection == 15) {
                        cm.dispose();
		        cm.openNpc(9310470,"dyj1");
			}
			if (selection == 16) {
                        cm.dispose();
		        cm.openNpc(9000038,"chongqi");
			}
			if (selection == 17) {
                        cm.dispose();
		        cm.openNpc(9310470,"ypzj");
			}
			if (selection == 18) {
                        cm.dispose();
		        cm.openNpc(9100000,14);
			}
			if (selection == 19) {
                        cm.dispose();
		        cm.openNpc(9310471);
			}
			if (selection == 20) {
                        cm.dispose();
		        cm.openNpc(9900001,3014);
			}
			if (selection == 21) {
                        cm.dispose();
		        cm.openNpc(9900001,90);
			}
			if (selection == 22) {
                        cm.dispose();
		        cm.openNpc(9120106,3);
			}
			if (selection == 25) {
                        cm.dispose();
		        cm.openNpc(9000154,25);
			}
			if (selection == 23) {
                        cm.dispose();
		        cm.openNpc(9000154,26);
			}
			if (selection == 3) {
			//if(minute >= 1 && minute <= 59){
                    cm.dispose();
		    cm.openNpc(9310470,3);
			//}else{
                        //cm.dispose();
			//cm.sendOk(">当前时间：#r<" + year +"年"+ month +"月"+ day + "日"+ hour +"时"+ minute +"分"+ second +"秒>\r\n#b 注：每小时30分开启，时限5分钟。");
			//}
			}
			if (selection == 4) {
			if(minute >= 40 && minute <= 45){
                    cm.dispose();
		    cm.openNpc(9000154,4);
			}else{
                        cm.dispose();
			cm.sendOk(">当前时间：#r<" + year +"年"+ month +"月"+ day + "日"+ hour +"时"+ minute +"分"+ second +"秒>\r\n#b 注：每小时40分开启。时限5分钟。");
			//cm.sendOk("该活动已经结束！");
			}
			}
			if (selection == 5) {
			if(hour == 10 && minute <= 2 ){
                    cm.dispose();
		    cm.openNpc(9900006,5);
			}else{
                        cm.dispose();
			cm.sendOk(">当前时间：#r<" + year +"年"+ month +"月"+ day + "日"+ hour +"时"+ minute +"分"+ second +"秒>\r\n #b注：大转盘活动每早上晚上10点开启。时限2分钟。");
			}
			}
			if (selection == 6) {
			if(minute >= 1 && minute <= 59){
                    cm.dispose();
		    cm.openNpc(9000154,6);
			}else{
                        cm.dispose();
			cm.sendOk(">当前时间：#r<" + year +"年"+ month +"月"+ day + "日"+ hour +"时"+ minute +"分"+ second +"秒>\r\n#b 注：每小时40分开启。时限5分钟。");
			//cm.sendOk("该活动已经结束！");
			}
			}
		}
	}
}    