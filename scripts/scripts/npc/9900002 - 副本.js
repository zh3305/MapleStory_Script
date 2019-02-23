/*
 脚本功能：拍卖脚本V2版
 */

var a = 0;


//是否活动，名字，模式，类别

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
       		cm.sendNext("你好，在我这里你可以进行武器合成，想了解一下吗？\r\n\r\n#d#e#L1#我想先了解一下#l\r\n#L2##r我要进行合成#k#l");
		} else if (a == 1) {
			if (selection==1) {
				cm.sendPrev("武器合成系统只限150级及以上的武器，#r且主副武器必须相同#k，合成不会影响主装备的属性，合成时，请将#e#d主武器#k#n穿戴在身上，将#d#e副武器#n#k放入装备栏的第一格，合成最大次数为5次：#r\r\n第一次的成功率为#b100%#r，攻击增加#b20#r点\r\n第二次的成功率为#b80%#r，攻击增加#b30#r点\r\n第三次的成功率为#b70%#r，攻击增加#b50#r点\r\n第四次的成功率为#b50%#r，攻击增加#b80#r点\r\n第五次成功率为#b30%#r，攻击增加#b120#r点\r\n\r\n#e* 合成失败，副装备将丢失");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendYesNo("合成存在风险，您是否已经阅读了使用说明？是否继续进行合成？");
			}
        } else if (a==2){
			
			//cm.changeStat(-11, 6, 999);
		  //cm.getPlayer().equipChanged();
			var equip = cm.getInventory(-1).getItem(-11);
			if (equip==null) {
				cm.sendOk("请将主武器穿戴在身上，副武器放置在装备栏的第一格。");
				cm.dispose();
				return ;
			}
			var itemMyId = equip.getItemId();
			var itemMyLevel = cm.getReqLevel(itemMyId);
			var oid = equip.getEquipOnlyId();
			var count = cm.getBossLog("武器合成"+oid);
			if (itemMyLevel < 150) {
				cm.sendOk(itemMyLevel+"您的武器不符合条件，必须150级或以上的武器才能进行合成。");
				cm.dispose();
				return ;
			}
			if (count >= 5) {
				cm.sendOk("您当前的武器已经达到最大合成上限，不能再继续合成了。");
				cm.dispose();
				return ;
			}
			var itemFirstId = cm.getInventory(1).getItem(1).getItemId();
			if (itemFirstId != itemMyId) {
				cm.sendOk("您的主副武器类型不同，无法进行合成。请检查：\r\n\r\n#r1.主武器是否已经穿戴在身上\r\n2.副武器是否放置在装备栏的第一格");
				cm.dispose();
				return ;
			}
			var successRate = false;
			var upAtk = 0;
			var randomRate = Math.floor(Math.random()*100);
			switch(count) {
				case 0:
					successRate=true;
					upAtk = 20;
				break;
				case 1:
					if (randomRate<80) {
						successRate=true;
					}
					upAtk = 30;
				break;
				case 2:
					if (randomRate<70) {
						successRate=true;
					}
					upAtk = 50;
				break;
				case 3:
					if (randomRate<50) {
						successRate=true;
					}
					upAtk = 80;
				break;
				case 4:
					if (randomRate<30) {
						successRate=true;
					}
					upAtk = 120;
				break;
			}
			cm.removeItem(1, 1, 1);
			if (successRate) {
				var item = equip.copy();
				var Watk = item.getWatk();
				var Matk = item.getMatk();
			 // cm.sendOk(oid+" "+itemMyId+" "+itemFirstId+" "+Watk);
			 	cm.setBossLog("武器合成"+oid, 1);
				if (Watk>Matk) {
				cm.changeStat(-11, 6, Watk+upAtk);
				} else {
				cm.changeStat(-11, 7, Matk+upAtk);
				}
				cm.sendOk("合成成功了！快看看！");
				cm.dispose();
			} else {
				cm.sendOk("真不幸，合成失败了，副武器消失了。");
				cm.dispose();
			}
		}
    }//mode
}//f

