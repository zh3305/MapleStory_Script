var status = 0; 
var fbwt = "";
var qdwt = "";
var qdwt2 = "";
var mms;
var mds;
var names;
var maples;
var wt = 1;
var kmob;
var neirong;
var fnpc;
var npc;
var maple;
var mapley;
var wmose;
var emose;
var nx;
var reward1item;
var itemsl;
var map;
var mob;
var nmob;
var item;
var nitem;
var hitem;
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

           qdwt = cm.委托信息(1, 2);
           mms =qdwt;


/*
          mds = "#r ┈┈┈━═☆#i4251202##r    委托任务    #i4251202# #r☆═━┈┈┈ \r\n";
          names = cm.getVipname();
          maples = cm.getMaplewing("maple");

          wt = cm.取得玩家委托任务信息("renwu1");
          kmob  = cm.取得玩家委托任务信息("mob1");

          name = cm.取得委托任务名称(1, wt);
          neirong = cm.取得委托任务名称(2, wt);
          fnpc = cm.取得委托任务信息("fnpc", wt);
          npc = cm.取得委托任务信息("npc", wt);
          maple = cm.取得委托任务信息("reward1maple", wt);
          mapley = cm.取得委托任务信息("reward2mapley", wt);
          wmose = cm.取得委托任务信息("reward3wmose", wt);
          emose = cm.取得委托任务信息("reward4emose", wt);
          nx = cm.取得委托任务信息("reward5nx", wt);
          rewarditem = cm.取得委托任务信息("rewarditem", wt);
          itemsl = cm.取得委托任务信息("itemsl", wt);
          map  = cm.取得委托任务信息("map", wt);
          mob = cm.取得委托任务信息("mob", wt);
          nmob = cm.取得委托任务信息("nmob", wt);
          item = cm.取得委托任务信息("item", wt);
          nitem = cm.取得委托任务信息("nitem", wt);
          hitem = cm.getPlayer().getItemQuantity(nitem);

          mms = "#d看看下面的委托任务#r#e" + name +"#n#d的详细信息吧，得赶紧完成呐！\r\n";
          mms += "#b委托任务编号：#e#r" + wt + "#n#b    委托任务名称：#r" + name + "\r\n";
          mms += "#b任务发布" + ((fnpc > 1000000) ? "玩家": "NPC") + "：#r" + ((fnpc > 1000000) ? cm.取得委托玩家名称(fnpc): "#p" + fnpc + "#") + "#b    委托任务交付NPC：#r#p" + npc + "#\r\n";
          mms += "#b任务奖励：\r\n#d贡献点" + ((maple > 0) ? " #r#e" + maple + "#n": " 无") + "  #d活跃点" + ((mapley > 0) ? " #e#r" + mapley + "#n": " 无") + "  #d万级余额" + ((wmose > 0) ? " #e#r" + wmose + "#n": " 无") + "  #d亿级余额" + ((emose > 0) ? " #e#r" + emose + "#n" : " 无") + "  #d点卷" + ((nx > 0) ? " #e#r" + nx + "#n" : " 无") + "  #d奖励物品" + ((rewarditem > 0) ? " #i" + rewarditem + ":#   数量 #e#r" + itemsl + "#n": " 无") + "\r\n";
          mms += "#b需要物品：#r" + ((item > 1000000)? "#i" + item + ":#  #b数量：#r" + nitem + "  #b已拥有数量：#r" + hitem + " ": " 无")+ "\r\n";
          mms += "#b目标怪物：#r#o" + mob + ":#    #b数量：#r" + nmob + "    #b已打猎数量：#r" + kmob + "\r\n";
          mms += "#b任务执行地点：#r" + ((map > 0) ? "#m" + map + "#":"任意地点") + "    #b地点编号：#r" + map + "\r\n  ";

*/

              cm.sendPlayerToNpc(mms);


           //  cm.sendOk(mms); 
             cm.dispose(); 

        } else if (status == 1) { 




            // qdwt = cm.委托详细信息(selection);

          //   cm.sendSimple(qdwt); 


        cm.dispose(); 

        }

     }

  }