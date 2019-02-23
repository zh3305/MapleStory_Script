/* 
    暴力熊地图NPC传送脚本
    亲亲嘴冒险 芯碎王子修改
    非同意内禁止转载 

*/ 
function start() { 
 status = -1; 
 action(1, 0, 0); 
} 
function action(mode, type, selection) { 
 if (mode == -1 || mode == 0) { 
  cm.dispose(); 
  return; 
 } else { 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
   cm.sendYesNo("确定要离开吗?"); 
  } 
  else if(status == 1) { 
   cm.warp(910000000); 
   cm.dispose(); 
  } 
 } 
} 
