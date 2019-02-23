var status = 0; 

var mms;
var mds;
var name;
var maple;

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

             mss = mds + name + " 欢迎您进入 委托任务 ！\r\n#d在这里你可以领取到多种多样的委托任务！他会有很多的贡献点、活跃点、万级金币、亿级金币、特殊物品奖励哦！\r\n当然你也可以发布委托任务，但你需要支付一定的奖励的哦！\r\n#b请选择您需要的服务：#e#r\r\n\r\n#L101301#领取系统委托任务#l       #L101302#领取玩家委托任务#l\r\n\r\n#L101303#发布委托任务#l\r\n\r\n#L101304#领取系统委托奖励#l       #L101305#领取玩家委托奖励#l \r\n";


               cm.sendSimple(mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 101301:
            cm.dispose();
            cm.openNpc(9000086, 101301);

            break;

        case 100802:

            break;

        case 101302:
            cm.dispose();
          //  cm.openNpc(9000086, 101302);
            cm.sendOk("暂时不开放！这是 商业服专用！");
            break;

        case 101303:
            cm.dispose();
          //  cm.openNpc(9000086, 101303);
            cm.sendOk("暂时不开放！这是 商业服专用！");
            break;

        case 101304:
            cm.dispose();
            cm.openNpc(9000086, 101304);

            break;

        case 101305:
            cm.dispose();
          //  cm.openNpc(9000086, 101305);
            cm.sendOk("暂时不开放！这是 商业服专用！");

            break;



        case 100888:

            break;



        case 100887:

            break;



            } // switch 



        } else if (status == 2) { 


                 cm.dispose();



        } else if (status == 3) { 

                 cm.dispose();


        } else if (status == 4) { 

                 cm.dispose();




        } else if (status == 5) { 


                 cm.dispose();




        } status == 5








    } 
}  
