var status = 0; 

var mds;

var md1;
var md2;
var md3;

var mdd = "#b";

var mss;

var dsd = 0;

var name;
var maple;

var mrfl1 = 5062001;//混沌神奇魔方
var mrfl2 = 5060006;//水晶八音盒
var mrfl3 = 5062000;//神奇魔方
var mrfl4 = 5062002;//高级神奇魔方
var mrfl5 = 5220040;//转蛋卷
var maple1 = 20923;
var wmose1 = 20923;

var mrdj = 2014923;//每日给的点卷

var gmrfl1 = 33;
var gmrfl2 = 33;
var gmrfl3 = 33;
var gmrfl4 = 10;
var gmrfl5 = 33;


var mms = "";


var cishu = 0;

var shuru;

var xuanze;
var nowgxs;
var bxx;
var itemxx;
var gitem;
var ngxs;
var mins;
var maxs;
var shul;
var mdss;



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


             mds = "#r ┈┈┈━═☆#i4251202##r    娱乐专区    #i4251202# #r☆═━┈┈┈ \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = mds + name + "欢迎您进入 娱乐专区 ！\r\n#b我们的口号是：#e#r娱乐娱乐！有你更好！#n\r\n#b目前您拥有的贡献点为：#e#r" + maple + "#n#d\r\n以下是本期开放的娱乐活动：#r\r\n\r\n#L101001#操作大考验#l    #L101002#送上真心祝福#l\r\n\r\n其他功能敬请期待！";


               cm.sendSimple(mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 101001:

              dsd = 100;

            md2 = mds + "#b你想锻炼你的键盘操作能力么？\r\n#d你想获得传说中的#i2430289:##t2430289:#吗？#b\r\n注：#i2430289:##r#t2430289:# #b里面装有许多稀世珍宝哦！#r\r\n\r\n想要就赶快参加下列娱乐之一吧！#b\r\n#L1#魔法密林-----娱乐跳跳#l \r\n#L2#林中之城-----娱乐跳跳#l";

                cm.sendSimple(md2);


            break;

        case 100802:

          //  cm.dispose();


            dsd = 200; 


                    for (var i = 0; i <= items.length; i++)
                    if ((i % 5 == 0) && (items[i + 1] >= 0)) {
                        mdd += "#i" + items[i] + ":# ";
                         cishu++;
                    if (cishu%7 == 0) {
                        mdd += "\r\n";
                    }

                    }


            cm.sendYesNo(mds + "#d欢迎您进入超级抽奖！\r\n您只需要花费#e#r" + chouj +"#n贡献点#d将有机会获得下列物品：\r\n" + mdd + "\r\n您需要进行超级抽奖么？");

            break;

        case 100899:
            cm.dispose();
        //    cm.openNpc(9000086, 5);
            break;


        case 100888:

            dsd = 888; 

            mms = "\r\n#b中秋假期礼物：\r\n#r贡献点：#e " + maple1 + " #n   万级金币：#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 - 10 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 - 10 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 - 5 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 - 10 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 - 10 + "  #r#e" + mrdj - 1000 + " #n#d抵用卷\r\n ";



               cm.sendOk(mds + mms + "\r\n中秋假期已经过去了哦！以上奖励只是为了怀念呐！\r\n没有领到的也不要灰心！敬请期待 国庆假期大礼哦！（绝对够大哦！！！）");

         //    cm.sendYesNo(mds + mms + "\r\n#b你现在要领取么？");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


            cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



        case 100887:

            dsd = 888; 

            mms = "\r\n#b迎新人礼物：\r\n#r贡献点：#e " + maple1 + " #n   万级金币：#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d抵用卷\r\n ";



             cm.sendYesNo(mds + mms + "\r\n#b你现在要领取么？");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


          //  cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



            } // switch 



        } else if (status == 2) { 

             xuanze = selection;


             nowgxs = cm.getMaplewing("maple");

             bxx = "\r\n\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n";




             if (dsd == 100) {

                if (xuanze == 1) {


// npc 1043001
                dsd = 1001;
                cm.warp(910130000, 0);
                cm.dispose();

                } else if (xuanze == 2) {

                dsd = 1002;

                cm.warp(910530000, 0);
                cm.dispose();

                }




            } else if (dsd == 200) {

               dsd = 2001;

               if ((cm.getMaplewing("maple") >= chouj)&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {
  
               cm.addMaplewing("maple", -chouj);

              var kitms =  cm.MaplwingSJTP(" 超级抽奖 ");

                mdss = mds + "\r\n#d抽奖成功！赶快看看聊天屏幕吧！\r\n您获得了以下物品：\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ";

               } else {

                mdss = mds + "\r\n#d抽奖失败！\r\n您的贡献点不足#e#r" + chouj + "#n#d！\r\n请在各个背包栏留出一个空位以上！\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ";

               }


              cm.sendSimple(mdss);


            } else if (dsd == 888) {



            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk(mds + "#k\r\n\r\n10级以下的不能参加活动。");
            } else if (cm.getSpace(5) < 5) {
                cm.sendOk(mds + "#k\r\n\r\n 迎新人礼物 领取失败，您的 特殊栏 空间不足。");

            } else {
                if (cm.getBossLog("最高的谢意") == 0) {

                    cm.addMaplewing("maple", maple1);
                    cm.addMaplewing("wmose", wmose1);

                    cm.gainItem(mrfl1, gmrfl1);//神奇魔方x3
		    cm.gainItem(mrfl2, gmrfl2);//管理员的祝福x3
                    cm.gainItemPeriod(mrfl3,gmrfl3,1);//高质地喇叭x10 
                    cm.gainItemPeriod(mrfl4,gmrfl4,1);//雇佣商人x1
                    cm.gainItemPeriod(mrfl5,gmrfl5,1);//转蛋卷x10
                    cm.gainNX(2, mrdj);//抵用卷 1000
                    cm.setBossLog("最高的谢意");


                    cm.sendOk(mds + "#g恭喜您成功领取 MapleWing准备的#e#r 为9月23号晚的失误致以最高的谢意#n#k ！" + mms);
                } else {
                    cm.sendOk(mds + " #k\r\n\r\n对不起， #e#r为9月23号晚的失误致以最高的谢意#n#k 只能领取一次。");
                }
            }
            cm.dispose();




        }//dsd




        } else if (status == 3) { 

              if (dsd == 1001) {
              shuru = selection;

              maple = cm.getMaplewing("maple");

              md3 = mds + "\r\n#rMapleWing贡献专区订单：\r\n#i" + gitem + ":##b#t" + gitem +":#  #d单价：#e#r" + ngxs + " #n#d贡献点   数量：#e#r" + shuru + " #n #d件 \r\n总计：#e#r" + (ngxs * shuru) + "  #n贡献点#n\r\n#b目前您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n#b兑换后您的贡献余额为：#e#r" + (maple - ngxs * shuru) + "#n\r\n\r\n#b您确定要兑换上述数量的物品？";

             cm.sendYesNo(md3);


            } else if (dsd == 2001) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }

            }


        } else if (status == 4) { 

               dsd = 4000;


            if ((maple >= (ngxs * shuru))&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {


                cm.addMaplewing("maple", -(ngxs * shuru));
                cm.gainItem(gitem, shuru);
                
                cm.sendSimple(mds + "\r\n#d兑换成功！您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n\r\n#i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d件已经放入您的背包！#r\r\n请注意查看！谢谢惠顾！！#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ");
                cm.worldMessage(-11,  "恭喜 " + name + " 从贡献专区成功兑换到稀有物品，大家一起恭喜他(她)吧！！")

           } else {

            cm.sendSimple(mds + "\r\n#d兑换失败！！您的贡献余额不足！！\r\n请在各个背包栏留出一个空位以上！\r\n无法兑换 #i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d件！#r\r\n\r\n#b目前您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ");


           }




        } else if (status == 5) { 


            if (dsd == 4000) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }



            }




        } status == 5








    } 
}  
