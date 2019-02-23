
/* 
*活动脚本 
*/ 
var status = 0; 
var p;
  
function start() { 
status = -1; 
action(1, 0, 0); 
p = im.getChar();
} 
  
function action(mode, type, selection) { 
if (mode == -1) { 
im.dispose(); 
} else { 
if (mode == 0 && status == 0) { 
im.dispose(); 
return; 
} 
if (mode == 1) 
status++; 
else 
status--; 
if (status == 0) { 

im.sendSimple("#e#b=============请认真看清楚后确定===============#k\r\n\r\n\r\n亲爱的土豪,欢迎使用.提升250功能哟.怎么样? 考虑清楚了吗? 确定要使用吗?\r\n\r\n\r\n   #L1##r★兔花花★  点击提升到250级.#k#l\r\n\r\n\r\n#e#b==============欢迎您的下次光临阿==============#k\r\n");  
} else if (status == 1) { 
if (selection == 1) { 
if(im.getChar().getLevel() <= 252) {
im.gainItem(2431399,-1);
p.setLevel(251);
p.levelUp();
p.setVip(0);
im.sendOk("\r\n\r\n    #e#r ★冒险岛★ 恭喜您等级提升到250级！#k");

//im.worldMessage(0x2,"『Vip系统』【" + im.getChar().getName() +"】玩家升级成为本服[Vip6],大家一起祝贺吧!");
im.dispose(); 
} else { 
im.sendOk("#e提示#k：你等级超过249了。");  
im.dispose(); 
} 
mode = 1; 
status = -1; 
} 
} 
} 
} 
