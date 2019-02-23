function enter(pi) {
     if(pi.getPlayer().getMapId() == 105200110){
        pi.openNpc(1064013,2); //ÆÕÍ¨°ë°ë
     }else if(pi.getPlayer().getMapId() == 105200500){
        pi.openNpc(1064013,1); //½ø½×°ë°ë
     }else if(pi.getPlayer().getMapId() == 105200200){
        pi.openNpc(1064012,2); //ÆÕÍ¨Æ¤°£¶û
     }else if(pi.getPlayer().getMapId() == 105200600){
        pi.openNpc(1064012,1); //½ø½×Æ¤°£¶û
     }else if(pi.getPlayer().getMapId() == 105200400){
        pi.openNpc(1064015,2); //ÆÕÍ¨±´Â×
     }else if(pi.getPlayer().getMapId() == 105200800){
        pi.openNpc(1064015,1); //½ø½×±´Â×
     }else if(pi.getPlayer().getMapId() == 105200300){
        pi.openNpc(1064014,2); //ÆÕÍ¨ÑªÐÈÅ®»Ê
     }else if(pi.getPlayer().getMapId() == 105200700){
        pi.openNpc(1064014,1); //½ø½×ÑªÐÈÅ®»Ê
     }
}