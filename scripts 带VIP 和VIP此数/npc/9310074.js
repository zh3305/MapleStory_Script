function start() {
var s = 1;
if (s==1){
            var FantMap = cm.getMap(910000000);
            FantMap.resetReactors();//重置怪物
            FantMap.killAllMonsters(false);//删除所有怪物
}else{
    cm.spawnMob(8850011,0,0);
}
cm.dispose();
}
