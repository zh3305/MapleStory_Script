var status = 0; 

var mds;
var name;
var maple;

var md1;
var md2;
var md3;

var dsd;

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


             mds = "#r ┈┈┈━═☆#i4251202##r    副本专区    #i4251202# #r☆═━┈┈┈ \r\n\r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = name + " #d欢迎您进入 副本专区 ！#b\r\n以下是本期开放的副本：#r\r\n#L100601#趣味粉色扎昆#l\r\n   ";



               cm.sendSimple(mds + mss); 


        } else if (status == 1) { 

        switch (selection) {

        case 100601:

            dsd = 100;

            md1 = mds + "目前您选择的是 趣味粉色扎昆 副本！\r\n#b以下是该副本的说明：\r\n来自异时空的传话：\r\n#k这里是OS4...重复,这里是OS4听到了吗？我怀疑这对讲机到底管不管用。两小时过去了，而且它...喂，听到了吗？嘿！冒险家！你和BOSS怪物战斗过吗？我们一直劲力于扎昆克隆实验。对亏惊人的OS4技术，你可以无限次的拿扎昆当你的沙包，只要你想！#r\r\n\r\n- #e远征队参加资格#n：120级以上\r\n- #e参加人员#n：粉色扎昆远征队\r\n- #e移动方法#n：副本传送\r\n- #e最终奖励#n：#i4310034# #t4310034#\r\n\r\n#r注意：如果进入准备地图想要退出，请在对话框输入@hg！\r\n现在你需要去准备地图么？";

           cm.sendYesNo(md1);

            break;

        case 2300:

            cm.dispose();

            cm.sendOk(mds + "敬请期待！");

            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;


            } // switch 



        } else if (status == 2) { 

               if (dsd == 100) {
                    cm.warp(689010000, 0);
                    cm.sendOk(mds + "\r\n我已经将您已经到达目的地！\r\n#b(挑战粉色扎昆会获得意外奖励!)\r\n如果想出去请用#b @hg #k命令回城");
                    cm.dispose();


               }



        } status == 2


    } 
}  
