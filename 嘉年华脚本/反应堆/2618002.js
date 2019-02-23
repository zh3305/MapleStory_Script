function act() {
    var em = rm.getEventManager("ZChaosPQ3");
        em.setProperty("stage5", parseInt(em.getProperty("stage5")) + 1);
  	rm.gainItem(4001133,-1);
    if (em != null && em.getProperty("stage5").equals("2")) {
	rm.mapMessage(6, "两侧大门已开启!");
    }
}
