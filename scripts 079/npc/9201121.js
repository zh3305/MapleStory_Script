var status = 0; 
var types=new Array("装备栏[慎重]","消耗栏[慎重]","任务栏[慎重]","杂物栏[慎重]","现金栏[慎重]"); 
var selectedMap = -1; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
if (cm.getPlayer().getMapId() == 105050400 &&cm.haveItem(4001035)>=1){
cm.summonMob(8830000, 800000000, 10000, 1);//船长5E血
 cm.gainItem(4001035,-1);
cm.serverNotice("[任务]: 玩家 [" + cm.getPlayer() + "] 找到了愤怒的蝙蝠怪,他是否能获得进一步突破呢?");
cm.sendOk("不得不说你速度很快!"); 
cm.dispose();
}else if (cm.getPlayer().getMapId() == 677000013){
cm.sendOk("不得不说你速度很快!"); 
cm.dispose();
}else  {
   var a="当你的背包快满时.却满背包垃圾的时候,就来找我把.\r\n\r\n       吸收一切废物,哼(ˉ(∞)ˉ)唧\r\n#b" 
   for(var i=0;i<types.length;i++){ 
    a+= "\r\n#L" + i + "#" + types[ i ]+""; 
   } 
           cm.sendSimple(a); }
        } else if (status == 1) { 
           cm.deleteItem(selection+1); 
           cm.sendOk("清理成功!"); 
     cm.dispose(); 
        } 
        
        
    } 
} 
