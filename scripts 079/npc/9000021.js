
function start() {
    cm.sendSimple ("#k一个#b#v4031579##k可以换取各系永恒套装哦!\r\n#r请保证背包有8个以上的空间，兑换失败后果自负.\r\n#b#L2##fEffect/CharacterEff/1112905/0/1#战士永恒套[不带武器·只有防具]\r\n#b#L3##fEffect/CharacterEff/1112905/0/1#法师永恒套[不带武器·只有防具]#k\r\n#b#L4##fEffect/CharacterEff/1112905/0/1#弓手永恒套[不带武器·只有防具]#k\r\n#b#L5##fEffect/CharacterEff/1112905/0/1#飞侠永恒套[不带武器·只有防具]#k\r\n#b#L6##fEffect/CharacterEff/1112905/0/1#海盗永恒套[不带武器·只有防具]#k")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
            if (cm.getPlayer().getNX() >= 10000 ) {
            cm.sendOk("#d谢谢! 10亿金币已添加到您的帐户! 享受吧! #r赶快去挥霍金币吧!#k");
            cm.gainNX(-10000);
            cm.gainMeso(500000000);
            cm.modifyMeso(500000000, 0);//显示得点
            cm.dispose();
            }else{
            cm.sendOk("请确认你有10000点卷的时候在来兑换金币!");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.getMeso() >= 200000000) {
            cm.sendOk("谢谢! 2000 点卷已添加到您的帐户! 享受吧! #r赶快点拍卖购买你合适的【点装】吧!#k");
            cm.gainMeso(-200000000);
            cm.getNX(2000);
            cm.getNX(2000, 0);//显示得点
            cm.dispose();        
            }
            else{    
                cm.sendOk("请确认你有2亿的时候在来兑换元宝!");
                cm.dispose();
            };
        break;
        case 2:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("#d您的1个#v4031579#已被收回!为了回报你，我给你一套战士永恒套装!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072355, 1);
            cm.gainItem(1052155, 1);
            cm.gainItem(1082234, 1);
            cm.gainItem(1002776, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052155, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };    
        break;
        case 3:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("您的1个#v4031579#已被收回!为了回报你，我给你一套法师永恒套装!")
               cm.gainItem(4031579, -1);
               cm.gainItem(1072356, 1);
               cm.gainItem(1052156, 1);
               cm.gainItem(1082235, 1);
               cm.gainItem(1002777, 1);
               cm.gainItem(1112312, 1);
               cm.gainItem(1102172, 1);
               cm.gainItem(1032031, 1);
               cm.gainItem(1122012, 1);
                   cm.modifyItem(1072356, 1);
                   cm.modifyItem(1052156, 1);
                   cm.modifyItem(1082235, 1);
                   cm.modifyItem(1002777, 1);
                   cm.modifyItem(1112312, 1);
                   cm.modifyItem(1102172, 1);
                   cm.modifyItem(1032031, 1);
                   cm.modifyItem(1122012, 1);
                   cm.modifyItem(1092057, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 4:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("您的1个#v4031579#已被收回!为了回报你，我给你一套弓手永恒套装!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072357, 1);
            cm.gainItem(1052157, 1);
            cm.gainItem(1082236, 1);
            cm.gainItem(1002778, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052157, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };    
        break;
        case 5:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("您的1个#v4031579#已被收回!为了回报你，我给你一套飞侠永恒套装!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072358, 1);
            cm.gainItem(1052158, 1);
            cm.gainItem(1082237, 1);
            cm.gainItem(1002779, 1);;
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1472068, 1);
			cm.modifyItem(1332073, 1);
			cm.modifyItem(1332074, 1);
			cm.modifyItem(1072358, 1);
			cm.modifyItem(1052158, 1);
			cm.modifyItem(1082237, 1);
			cm.modifyItem(1002779, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092059, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 6:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("您的1个#v4031579#已被收回!为了回报你，我给你一套海盗永恒套装!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072359, 1);
            cm.gainItem(1052159, 1);
            cm.gainItem(1082238, 1);
            cm.gainItem(1002780, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1482023, 1);
			cm.modifyItem(1492023, 1);
			cm.modifyItem(1072359, 1);
			cm.modifyItem(1052159, 1);
			cm.modifyItem(1082238, 1);
			cm.modifyItem(1002780, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 7:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("您的1个#v4031579#已被收回!为了回报你，我给你一套战士永恒套装!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072355, 1);
            cm.gainItem(1052155, 1);
            cm.gainItem(1082234, 1);
            cm.gainItem(1002776, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
            cm.gainItem(1092058, 1);
			cm.modifyItem(1402046, 1);
			cm.modifyItem(1432047, 1);
			cm.modifyItem(1442063, 1);
			cm.modifyItem(1302081, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052155, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e你没有 #b1个#k #v4031579#")
                cm.dispose();    
            };  
        }
    }
