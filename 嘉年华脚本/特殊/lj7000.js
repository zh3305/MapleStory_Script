var Icon ="#fEffect/ItemEff/1112811/0/0#";//黄金音符GuildMark/Mark/Animal/00002006/16#";
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var revenue = cm.getHyPay(3);
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendOk("\r\n\r\n\r\n\t#b当前累计充值：#r" + revenue.formatMoney(0, "") + " #b元 请继续加油！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt = Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n";
            txt += "#r [ #h # ] 累计充值达到 [ 7000 ] 将有丰厚礼品#k\r\n";
            txt += "#b  奖品道具全属性 [ #e#r150#n#b ] 分别 - 终极MX-131徽章 #r#z1182136# #k\r\n"
            txt += "#d 　　　　　当前累计充值：#r" + revenue.formatMoney(0, "") + "#d 元#k\r\n\r\n";
            txt += "　　　　　　　　　　　　 #i1182136# 　　　　　　　　　　\r\n\r\n";
            txt += "　　　　#b确认累计达标单击 [ #r是#b ]  否则 [ #r否#b ]#k\r\n\r\n\r\n";
            txt += Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n\r\n";
            cm.sendYesNo(txt);
        } else if (status == 1) {
            if (cm.getHyPay(3) >= 7000) {
                if (cm.getEventCount("累计奖品道具终极MX-徽章",1) < 1) {
                    		cm.gainItem(1182136,1);
                  //  var ii = cm.getItemInfo();
                   // var toDrop = ii.randomizeStats(ii.getEquipById(1182136)).copy(); // 生成一个Equip类 耳环
                  //  toDrop.setStr(150); //装备力量
                 //   toDrop.setDex(150); //装备敏捷
                 //   toDrop.setInt(150); //装备智力
                  //  toDrop.setLuk(150); //装备运气
                  //  toDrop.setAcc(150); //命中率
                 //   toDrop.setMatk(150); //魔法攻击
                //    toDrop.setWatk(150); //攻击攻击 
                 //   toDrop.setEnhance(20); //星级
                //    toDrop.setWdef(150);//物理防御
                //    toDrop.setMdef(150);//魔攻防御
                //    toDrop.setAvoid(100);//回避率
               //     toDrop.setHands(100);//手技
               //     toDrop.setSpeed(10);//移动速度
               //     toDrop.setJump(10);//跳跃
               //     toDrop.setOwner("累计充值");//签名
               //     toDrop.setBossDamage(30);//Boss 攻击百分比%
               //     toDrop.setIgnorePDR(30);//无视怪物防御
              //      toDrop.setTotalDamage(30);//总伤害
               //     toDrop.setAllStat(30);//所有属性
                    //toDrop.setLimitBreak(1000000);//伤害上限
               //     cm.addFromDrop(cm.getC(), toDrop, false);
                    
                    //cm.sendOkS("\r\n\r\n\t#b恭喜 [ #r#h ##b ] 玩家 领到了极品道具\r\n\r\n　 如道具丢失请联系客服并且需交纳 [ #r100 #b] 金额", 2);
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 7000 金额的极品道具【终极MX-131徽章】土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 7000 金额的极品道具【终极MX-131徽章】土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 7000 金额的极品道具【终极MX-131徽章】土豪阿");
                    cm.spouseMessage(0x23, "※累计超值※：恭喜玩家 " + cm.getChar().getName() + " 领到了超值累计 7000 金额的极品道具【终极MX-131徽章】土豪阿");
                    cm.playerMessage(1, "　" + cm.getChar().getName() + "\r\n\r\n恭喜领到累计超值道具【终极MX-131徽章】\r\n\r\n请联系客服帮你设置全150属性\r\n\r\n感谢你对兔花花的支持 祝您游戏愉快");
                    cm.setEventCount("累计奖品道具终极MX-徽章", 1);
                    cm.dispose();
                } else {
                    cm.sendOkS("\r\n\r\n#r\t\t尊敬的玩家 - 此项奖品终身只能一回", 3);
                    cm.dispose();
                    return;
                }
            } else {
                var ount = 7000 - cm.getHyPay(3);
                cm.sendOkS("\r\n\r\n#r　　　　　尊敬的玩家 - 当前累计未达标\r\n\r\n　　当前累计：#b" + cm.getHyPay(3) + "#r 元 还需充值：#b" +  ount + "#r 元 即可达标", 3);
                cm.dispose();
                return;
            }
        }
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};