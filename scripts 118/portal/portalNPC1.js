function enter(pi) {
      if (pi.getMapId() == 272020200) {
           if (pi.haveMonster(8860004)) {
        pi.openNpc(2144020);
           } else {
              if(pi.getMonsterCount(272020200) == 0) {
        pi.openNpc(2144016, 50);
       // pi.openNpc(2144017);
              } else {
       // pi.openNpc(2144016, 50);
        pi.openNpc(2144017);
       }
   } 

       } else {

        pi.openNpc(2144017);
    }

}