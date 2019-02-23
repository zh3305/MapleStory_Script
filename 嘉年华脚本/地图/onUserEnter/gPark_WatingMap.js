function start() {
    if (ms.getInfoQuest(30200).isEmpty()) {
        ms.updateInfoQuest(30200, "count=0;date=16/04/06;cLevel=0000000;Tcount=1;set=1;clear=0;failed=0");
    }
    ms.dispose();
}