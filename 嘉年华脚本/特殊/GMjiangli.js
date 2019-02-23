
var List = Array(
			Array(2049124,10),
			Array(2340000,10),
			Array(4001839,5000),
			Array(2049702,5),

			///*Array(2049129,20),

			//Array(2340000,20),

			//Array(2049116,20),

			//Array(5150139,10),
			//Array(5152213,10),

			//Array(5150040,10),
			//Array(5072000,10),

			Array(5062000,30),//神奇魔方
			Array(5062002,20),//高级神奇魔方
			Array(5062009,20),//超级神奇魔方
			Array(5062500,20),//大师附加神奇魔方

			
			
			
			Array(5062024,5),//闪炫魔方
			
			Array(2431923,3),
			//Array(5072000,300),

			//Array(2,66666),
			Array(1,99999)
			//Array(4001440,1),
			//Array(2431923,3)


);

function start() {
	for (var i =0; i<List.length;i++ ){
    if (cm.getEventCount("GM奖励"+i)==0){
		if (List[i][0]==1||List[i][0]==2){
			cm.setEventCount("GM奖励"+i,1);
			cm.gainNX(List[i][0],List[i][1]);
		}else{
		cm.gainItem(List[i][0],List[i][1]);
		cm.setEventCount("GM奖励"+i,1);
		}
		cm.playerMessage(1, "奖励已经发放，请查收！");
		//cm.getPlayer().dropMessage(6, "[在线福利]：奖励已经发放，请查收 ");
		//break;
    }else{
		cm.getPlayer().dropMessage(6, "[在线福利]：已经领取过第"+(i+1)+"波福利");
	}
	}
	cm.dispose();
}