function enter(pi) {
    if (pi.getInfoQuest(89741).equals("")) {
        pi.updateInfoQuest(89741, "arr0=o;mo1=o;mo2=o;mo3=o");
        pi.openNpc(2159001);
    	return true;
    }
    return false;
}
