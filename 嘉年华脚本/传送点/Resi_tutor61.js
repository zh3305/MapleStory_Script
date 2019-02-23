function enter(pi) {
    if (pi.getInfoQuest(89741).equals("arr1=o;arr0=o;mo1=o;mo2=o;mo3=o")) {
        pi.updateInfoQuest(89741, "arr2=o;arr1=o;arr0=o;mo1=o;mo2=o;mo3=o");
    	pi.openNpc(2159008);
    	return true;
    }
    return false;
}
