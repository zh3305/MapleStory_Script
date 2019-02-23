var status = 0; 

var mms;
var mds;
var name;
var maple;
var 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 


             mds = "#r ┈┈┈━═☆#i4251202##r    委托任务    #i4251202# #r☆═━┈┈┈ \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = mds + name + " 欢迎您进入 委托任务 ！\r\n#b请选择您需要的服务：#e#r\r\n\r\n#L101301#领取委托任务#l \r\n\r\n#L101302#发布委托任务#l\r\n\r\n#L101303#领取委托奖励#l \r\n \r\n ";


               cm.sendSimple(mss); 


        } else if (status == 1) { 


        }



  }