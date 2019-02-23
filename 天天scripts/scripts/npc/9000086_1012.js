var status = 0; 

var mds;
var name;
var maple;

var hair;

var jobs;

var nes2400 = 111;


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


             mds = "#r ┈┈┈━═☆#i4251202##r    英雄觉醒    #i4251202# #r☆═━┈┈┈ \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = name + "欢迎您进入 ☆英雄觉醒☆ ！\r\n#d每一名冒险家都是英雄！Maplewing世界需要你们来守护！\r\n现在只要岛民们对Maplewing的贡献点足够，我们将会让每一名岛民都可以成为英雄！！\r\n#r注意：只有冒险家职业为新手时才可以进行觉醒！\r\n#b请选择您需要的觉醒服务：#r\r\n";

             mss += "#L2400#幻影之觉醒#l     #L2300#精灵王之觉醒#l     ";

               cm.sendSimple(mds + mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 2400:
/*
           if (maple >= nes2400) {

            hair = cm.getPlayerStat("HAIR");

            cm.changeJob(jobs);
             cm.sendOk(mds + "#d觉醒成功！！！！ ");
             cm.dispose();

           } else {

             cm.sendOk(mds + "您的贡献点不足 " + nes2400 + "！无法进行  #r幻影之觉醒 ");

             cm.dispose();



           }
*/


             cm.sendOk(mds + "暂时不开放  #r幻影之觉醒 ");

             cm.dispose();

            break;

        case 2300:

            cm.dispose();

            cm.sendOk(mds + "敬请期待！");

            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;
            } 
        } 
    } 
}  
