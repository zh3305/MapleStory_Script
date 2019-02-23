/*
	内容：个人排行榜
*/

var status = -1;
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
var tz8 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
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
var ca = java.util.Calendar.getInstance();
var day = ca.get(java.util.Calendar.DATE);//获取日
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		var text = "#e#b         ┏   "+tz13+"《榜上有名》"+tz13+"   ┓ #r\r\n";
		text += "\t\t   #L2#"+tz11+"本月充值排行榜"+tz11+"#l\r\n";
		text += "\t\t   #L0#"+tz11+"世界等级排行榜"+tz11+"#l  #g#L111#"+tz14+"领取勋章"+tz14+"#l#k\r\n";
		text += "\t\t   #L4#"+tz11+"#r世界富豪排行榜"+tz11+"#l  #g#L112#"+tz14+"领取勋章"+tz14+"#l#k\r\n";
		//text += "\t\t#L5#种植高手排行榜#l\r\n";
		//text += "\t\t   #L1#"+tz11+"魅力人气排行榜"+tz11+"#l\r\n";
		text += "\t\t   #L1#"+tz11+"#r魅力人气排行榜"+tz11+"#l  #g#L113#"+tz14+"领取勋章"+tz14+"#l#k\r\n";
		text += "\t\t   #r#L3#"+tz11+"十大家族排行榜"+tz11+"#l\r\n";
		text += "\r\n#e#b         ┗                      ┛\r\n";
		cm.sendSimpleS(text,2);
	} else if (status == 1) {
		if (selection == 0) {
			//var list = cm.getRankingTopInstance().getLevelRank().iterator();
			var conn = cm.getConnection();
			var sql = "select name,level from characters where gm<=0 order by  level desc, exp desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var result = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 个人等级排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e等级#n\t\t #e#n\r\n";
			for (var i = 1; i <= 10; i++) {
				if (!result.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += result.getString("name");
				for (var j = 16 - result.getString("name").getBytes().length; j > 0 ; j--) {
					text += " ";
				}
				text += "\t " + result.getString("level");
				
				text += "\t\t\t #k";

				text += "\r\n";
			}
			result.close();
			pstmt.close();
			cm.sendOkS(text, 3);
			cm.dispose();
		} else if (selection == 1) {
			var conn = cm.getConnection();
			var sql = "select name,fame,gender from characters where gm<=0 order by fame desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var list = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 魅力人气排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵称#n\t\t  #e人气#n\t\t  #e称号#n\r\n";
			for (var i = 1; i <= 10; i++) {
				if (!list.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += list.getString("name");
				for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
					text += " ";
				}

				// 填充人气度
				text += "\t " + list.getInt("fame");
				var famevalues = list.getInt("fame");
				var famelength = 0;
				while (famevalues > 0) {
					famevalues = Math.floor(famevalues/10);
					famelength += 1;
				}
				for (var j = 8 - famelength; j > 0; j--) {
					text += " ";
				}

				if (i == 1) {
					if (list.getInt("gender") == 0) {
						text += "★世界偶像★#k";
					} else {
						text += "★初衷宝贝★#k";
					}
				} else if (i == 2) {
					text += "\t #k";
				} else if (i == 3) {
					text += "\t #k";
				}
				text += "\r\n";
			}
			list.close();
			pstmt.close();
			cm.sendOkS(text, 3);
			cm.dispose();
		} else if (selection == 2) {
			var conn = cm.getConnection();
			var sql = "select h.accname,h.leiji,h.payUsed,h.name,a.name from hypay h, accounts a where h.accname=a.name AND a.gm<=0 AND h.leiji>0 order by leiji desc limit 100;";
			var pstmt = conn.prepareStatement(sql);
			var list = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 充值排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n     #e玩家昵称#n\t\t #e充值金额#n\t\t#e称号#n\r\n";
			for (var i = 1; i <= 20; i++) {
				if (!list.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += list.getString("name");
				for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
					text += " ";
				}

				// 填充人气度
				text += "\t " + list.getInt("leiji");
				var famevalues = list.getInt("leiji");
				var famelength = 0;
				while (famevalues > 0) {
					famevalues = Math.floor(famevalues/10);
					famelength += 1;
				}
				for (var j = 8 - famelength; j > 0; j--) {
					text += " ";
				}

				if (i == 1) {
					if (list.getInt("leiji") >= 10000) {
						text += " ★世界神豪★#k";
					} else {
						text += " ★土豪★#k";
					}
				} else if (i == 2) {
					text += "\t #k";
				} else if (i == 3) {
					text += "\t #k";
				}
				text += "\r\n";
			}
			list.close();
			pstmt.close();
			cm.sendOkS(text, 3);
			cm.dispose();
		} else if (selection == 3) {
			var conn = cm.getConnection();
			var sql = "select c.name as leadername, g.name from characters c, guilds g where g.leader=c.id order by g.gp desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var list = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 十大家族排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e家族名称#n\t\t    #e族长#n\t\t\r\n";
			for (var i = 1; i <= 10; i++) {
				if (!list.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += list.getString("name");
				for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
					text += " ";
				}

				// 填充族长名称
				text += "\t " + list.getString("leadername");
				var leadername = list.getString("leadername");
				
				for (var j = 16 - list.getString("leadername").getBytes().length; j > 0; j--) {
					text += " ";
				}

				
					text += "\t #k";
				
				text += "\r\n";
			}
			list.close();
			pstmt.close();
			cm.sendOkS(text, 3);
			cm.dispose();
		} else if (selection == 4) {
			var conn = cm.getConnection();
			var sql = "select name,meso from characters where gm<=0 order by meso desc limit 20;";
			var pstmt = conn.prepareStatement(sql);
			var list = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 世界富豪排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵称#n\t\t  #e资产#n\t\t  #e称号#n\r\n";
			for (var i = 1; i <= 20; i++) {
				if (!list.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += list.getString("name");
				for (var j = 16 - list.getString("name").getBytes().length; j > 0; j--) {
					text += " ";
				}

				// 填充资产
				var zc = ""+(list.getLong("meso")/100000000).toFixed(2)+"亿";
				text += "  " + zc;
				var totalmoney = list.getLong("meso");
				var totalmoneylength = 0;
				while (totalmoney > 0) {
					totalmoney = Math.floor(totalmoney/10);
					totalmoneylength += 1;
				}
				for (var j = 8 - totalmoneylength; j > 0; j--) {
					text += " ";
				}

				
				text += "#k\r\n";
			}
			list.close();
			pstmt.close();
			cm.sendOkS(text, 3);
			cm.dispose();
		} else if (selection == 5) {
		/*
			var conn = cm.getConnection();
			var sql = "select c.name,g.level from characters c, memory_garden g where c.gm<=0 and c.id=g.charid order by g.level desc, g.exp desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var result = pstmt.executeQuery();
			var text = "\t\t\t\t#e#d★ 种植高手排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e花园等级#n\t\t #e称号#n\r\n";
			for (var i = 1; i <= 10; i++) {
				if (!result.next()) {
					break;
				}
				if (i == 1) {
					text += "#r";
				} else if (i == 2) {
					text += "#g";
				} else if (i == 3) {
					text += "#b";
				}
				text += "\t " + i + "\t\t ";
				
				// 填充名字空格
				text += result.getString("name");
				for (var j = 16 - result.getString("name").getBytes().length; j > 0 ; j--) {
					text += " ";
				}
				text += "\t " + result.getString("level");
				if (i == 1) {
					text += "\t\t ★天工开物★#k";
				} else if (i == 2) {
					text += "\t\t ★妙手回春★#k";
				} else if (i == 3) {
					text += "\t\t ★熟能生巧★#k";
				}
				text += "\r\n";
			}
			result.close();
			pstmt.close();
			cm.sendOkS(text, 3);*/
			cm.dispose();
		} else if (selection == 111) {
			var conn = cm.getConnection();
			var sql = "select name,level from characters where gm<=0 order by  level desc, exp desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var result = pstmt.executeQuery();
			result.next()
			var name = result.getString("name");
			if (cm.getChar().getName()==name){
				if (cm.getDaysPQLog("等级勋章",3)==0){
					cm.setPQLog("等级勋章",1);
					cm.gainItem(1142110,1,3);
					cm.worldSpouseMessage(0x0F,"[排行提示]:玩家 "+ cm.getChar().getName() +" 领取了等级第一勋章(3天)！！！");
				}else{
					cm.sendOk("对不起，勋章每3天领取一次。");
				}
			}else{
				cm.sendOk("对不起，你不是第一名。");
			}
			cm.dispose();
		} else if (selection == 112) {
			var conn = cm.getConnection();
			var sql = "select name,meso from characters where gm<=0 order by meso desc limit 20;";
			var pstmt = conn.prepareStatement(sql);
			var result = pstmt.executeQuery();
			result.next()
			var name = result.getString("name");
			if (cm.getChar().getName()==name){
				if (cm.getDaysPQLog("富豪勋章",3)==0){
					cm.setPQLog("富豪勋章",1);
					cm.gainItem(1142617,1,3);
					cm.worldSpouseMessage(0x0F,"[排行提示]:玩家 "+ cm.getChar().getName() +" 领取了富豪第一勋章(3天)！！！");
				}else{
					cm.sendOk("对不起，勋章每3天领取一次。");
				}
			}else{
				cm.sendOk("对不起，你不是第一名。");
			}
			cm.dispose();
		} else if (selection == 113) {
			var conn = cm.getConnection();
			var sql = "select name,fame,gender from characters where gm<=0 order by fame desc limit 10;";
			var pstmt = conn.prepareStatement(sql);
			var result = pstmt.executeQuery();
			result.next()
			var name = result.getString("name");
			if (cm.getChar().getName()==name){
				if (cm.getDaysPQLog("人气勋章",3)==0){
					cm.setPQLog("人气勋章",1);
					cm.gainItem(1142003,1,3);
					cm.worldSpouseMessage(0x0F,"[排行提示]:玩家 "+ cm.getChar().getName() +" 领取了人气王第一勋章(3天)！！！");
				}else{
					cm.sendOk("对不起，勋章每3天领取一次。");
				}
			}else{
				cm.sendOk("对不起，你不是第一名。");
			}
			cm.dispose();
		}
	}
}
