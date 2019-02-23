function act() {
    var em = rm.getEventManager("Pirate");
    if (em != null) {
        rm.mapMessage(5, "入口已被关闭!");
        em.setProperty("stage4", parseInt(em.getProperty("stage4")) + 1);
        if (em.getProperty("stage4").equals("4")) { //all 5 done
                rm.mapMessage(6, "所有入口已被关闭!");
        }
    }
}