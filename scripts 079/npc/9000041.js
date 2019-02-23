//Kippieeej for the base of the script, Mikethemak for editing it for this function.
var status = 0;

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
                cm.sendSimple("#r"+cm.mxdmz()+"冒险岛#k,银行系统\r\n#L1##b15亿 >>>> 1个木妖邮票.#k#l#L2##b木妖邮票 >>>> 14.5亿#k#l\r\n#L3##b10亿 >>>> 1个蓝蜗邮票.#k#l#L4##b蓝蜗邮票 >>>> 9.5亿#k#l\r\n#L5##b 5亿 >>>> 1个蜗牛邮票.#l#L6##b蜗牛邮票 >>>> 4.5亿#l");
        //cm.dispose();
            } else if (status == 1) {
            if (selection == 1) {
    if (cm.itemQuantity(4002002) >= 50) {
    cm.sendOk(" 你储存了足够的 #v4002002# 了, 你不能在存放更多的 #v4002002# 了");
    cm.dispose();
        }  else if (cm.getMeso() >= 1500000000) {
                    cm.gainMeso(-1500000000);                
                    cm.gainItem(4002002, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你根本没有15E，等你攒够钱在来找我换吧?");
                    cm.dispose();
                }                                
            } else if (selection == 2) {
        if (cm.getMeso() >= 647000000) {
        cm.sendOk("请花掉你身上的钱吧，强行兑换会使你的钱变成负数哦，呵呵");
                cm.dispose();
        } else if (cm.itemQuantity(4002002) >= 1) {
                    cm.gainMeso(1450000000);                
                    cm.gainItem(4002002, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你没有 #v4002002#. 不要想轻易在我这骗到任何东西!");
                    cm.dispose();
                }    
            } else if (selection == 3) {
    if (cm.itemQuantity(4002001) >= 50) {
    cm.sendOk(" 你有足够多的 #v4002001# 了, 试着兑换一部分 #v4002001# 再来找我兑换银袋.");
    cm.dispose();
    } else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(4002001, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你根本没有10E，等你攒够钱在来找我换吧?");
                    cm.dispose();
                  }
        } else if (selection == 4) {
        if (cm.getMeso() >= 1147000000) {
        cm.sendOk("请花掉你身上的钱吧，强行兑换会使你的钱变成负数哦，呵呵");
                cm.dispose();
                } else if (cm.itemQuantity(4002001) >= 1) {
                    cm.gainMeso(950000000);                
                    cm.gainItem(4002001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你根本就没有 #v4002001#. 挣够钱再来换吧我,这可不是免费服务!");
                    cm.dispose();
              }    
            } else if (selection == 5) {
    if (cm.itemQuantity(4002000) >= 50) {
    cm.sendOk(" 你有足够多的 #v4002000# 了, 先兑换一部分 #v4002000# 再来找我商量兑换铜币包的事");
    cm.dispose();
    } else if (cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);                
                    cm.gainItem(4002000, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你根本没有5E，等你攒够钱在来找我换吧?");
                    cm.dispose();
            }
                } else if (selection == 6) {
        if (cm.getMeso() >= 1647000000) {
        cm.sendOk("请花掉你身上的钱吧，强行兑换会使你的钱变成负数哦，呵呵");
                cm.dispose();
                } else if (cm.itemQuantity(4002000) >= 1) {
                    cm.gainMeso(450000000);                
                    cm.gainItem(4002000, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你根本就没有 #v4002000#. 挣够钱再来找我兑换吧!.");
                    cm.dispose();
                    }    
                }
            }
        }
    }
