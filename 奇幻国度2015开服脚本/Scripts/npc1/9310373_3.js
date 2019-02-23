//积分活动
var status = 0;
var account=null;
var totalpay=0;
var ranking=0;
var cal = java.util.Calendar.getInstance();
var month = cal.get(java.util.Calendar.MONTH) + 1; //获得月份
var year = cal.get(java.util.Calendar.YEAR); //获得年份
var bosslogId = year+""+month+"月充值礼包";
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
			var payRanking = cm.getConnection().prepareStatement("select p.account, sum(p.rmb) as totalpay from paylog p, accounts a where a.name=p.account and a.gm<=0 and date_format(p.paytime,'%Y-%m')=date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH),'%Y-%m') GROUP BY p.account ORDER BY totalpay desc limit 10;").executeQuery();
			var flag = false;
			var myAccountName =getAccountName(cm.getPlayer().getId());
			while(payRanking.next()) {
				ranking++;
				account=payRanking.getString("account");
				totalpay=payRanking.getString("totalpay");
				if (account==myAccountName) {
					flag=true;
					break;
				}
			}
			payRanking.close();
			if (!flag) {
				cm.sendOk("您没有在上个月充值排行版之内，无法领取奖励。");
				cm.dispose();
				return;
			}
			var text = "您的账号：#b"+myAccountName+"#k\r\n您的充值金额：#r￥"+totalpay+"#k元\r\n您上个月的充值排名：#e#d"+ranking+"#n#k";
			text+="\r\n如以上信息有误，请联系管理员。";
			cm.sendYesNo(text+"\r\n\r\n#r请确认您的包裹有足够的空间#k，是否继续领取礼包？");
			//cm.dispose();
		} else if (status == 1) {
			if (cm.getBossLogAcc(bosslogId)==-1) {
				cm.sendOk("您已经领取过礼包了。");
				cm.dispose();
				return;
			}
			//ranking = 7;
			var nx=0;
			var text="！";
			switch(ranking) {
				case 1:
					cm.gainItem(2431725, 1);
					nx=gainNX(0.15);
					gainItemGift(1142499, 80, 10000, "★雄霸天下★");
					cm.gainItem(5062000, 50);
					cm.gainItem(5062002, 50);
					cm.gainItem(5062500, 50);
					text="以及大量魔方和一个蜡笔箱子，全属性80勋章！";
				break;
				case 2:
					gainItemGift(1142498, 50, 8000, "★横扫千军★");
					cm.gainItem(5062000, 50);
					cm.gainItem(5062002, 50);
					cm.gainItem(5062500, 50);
					nx=gainNX(0.15);
					text="以大量魔方和全属性50勋章！";
				break;
				case 3:
					gainItemGift(1142497, 30, 5000, "★潜龙勿用★");
					cm.gainItem(5062000, 30);
					cm.gainItem(5062002, 30);
					cm.gainItem(5062500, 30);
					nx=gainNX(0.15);
					text="以及大量魔方和全属性30勋章！";
				break;
				case 4:
				case 5:
				case 6:
					cm.gainItem(5062000, 10);
					cm.gainItem(5062002, 10);
					cm.gainItem(5062500, 10);
					text="以及少量魔方！";
					nx=gainNX(0.10);
				break;
				case 7:
				case 8:
				case 9:
				case 10:
					cm.gainItem(5062000, 5);
					cm.gainItem(5062002, 5);
					cm.gainItem(5062500, 5);
					text="以及少量魔方！";
					nx=gainNX(0.05);
				break;
			}
			cm.getPlayer().dropMessage(1, "领取了"+nx+"点卷"+text);
			cm.setBossLogAcc(bosslogId, -2);
			cm.worldSpouseMessage(0x15, "[充值排行礼包] : 恭喜排行第【"+ranking+"】的玩家 " + cm.getChar().getName() + " 领取了本月返利"+nx+"点卷！");
			cm.dispose();
		}
   }
}

function getAccountName(charid) {
	var sql = "select name from accounts where id = (select accountid from characters where id = "+charid+");";
	var accountQuery = cm.getConnection().prepareStatement(sql).executeQuery();
	var accountName = null;
	if (accountQuery.next())
		accountName = accountQuery.getString("name");
	accountQuery.close();
	return accountName;
}
function gainNX(percent) {
	var d=Math.floor(totalpay*percent)*500;
	cm.gainNX(1, d);
	return d;
}
function gainItemGift(itemid, attr, hpmp, owner) {
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp+30*86400*1000;
	var ii = cm.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(itemid)).copy(); // 生成一个Equip类                    
	toDrop.setStr(attr); //装备力量
	toDrop.setDex(attr); //装备敏捷
	toDrop.setInt(attr); //装备智力
	toDrop.setLuk(attr); //装备运气
	toDrop.setMatk(attr); //物理攻击
	toDrop.setWatk(attr); //魔法攻击 
	toDrop.setSpeed(attr); //移动速度
	toDrop.setHp(hpmp);
	toDrop.setMp(hpmp);
	toDrop.setJump(attr); //跳跃
	toDrop.setAcc(attr); //
	toDrop.setExpiration(expirationDate);
	toDrop.setOwner(owner);
	cm.addFromDrop(cm.getC(), toDrop, false);
}