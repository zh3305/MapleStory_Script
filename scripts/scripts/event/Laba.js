/var setupTask;

function init() {
	scheduleNew();
}

function scheduleNew() {
	var cal = java.util.Calendar.getInstance();
	cal.set(java.util.Calendar.HOUR, 0);
	cal.set(java.util.Calendar.MINUTE, 50);
	cal.set(java.util.Calendar.SECOND, 0);

	var nextTime = cal.getTimeInMillis();

	while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 1000 * 60;
	}
	setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	if (setupTask != null)
		setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
	weekday -= 1;
	scheduleNew();
	if (hour == 20 && (minute == 10) && (weekday == 6 || weekday == 2 || weekday == 4)) {
		em.broadcastServerMsg(5121040, " < ���̻ >���̻�Ѿ���ʼ �뵽�г���ţ����NPC���м��̻��", true);
	}
	if (min == 10) {
	    em.startSuperlabaed(5120079," ������ĩ������ֵ����30%�������20:00����YY27998K����",5121010);
	    //em.broadcastServerMsg(5120074,"����13������޻����ؿ���ʼ�ˡ�20���Ӻ󽫹ر��ˣ���ץ����ս��",true);
    }
	if (min == 25) {
	    em.broadcastServerMsg(5121001," ������ĩ������ֵ����30%�������20:00����YY27998K����",true);
	    //em.broadcastServerMsg(5120074,"����20������޻����ؿ���ʼ�ˡ�20���Ӻ󽫹ر��ˣ���ץ����ս��",true);
	}
	if (min == 45) {
		em.broadcastServerMsg(5121051, " ������ĩ������ֵ����30%�������20:00����YY27998K����", true);
		//em.broadcastServerMsg(5120074,"< ���﹥�� > ÿ�� �� ��21:00�������������һ�����ִ壬�񱩺��񣡡�",true);
	}
	if (hour == 21 && (minute == 00) && (weekday == 6 || weekday == 0)) {
		em.broadcastServerMsg(5121036, " < ���﹥���Ѿ����� >��������BOSSΧ��һ�����ִ壬��ʿ��ȥ�������ǰɣ�", true);
		//em.broadcastServerMsg(5121048,"ÿСʱ50���ӵĴ������г�<������>��ʼ�ˡ�5���Ӻ�رա�",true);
	}
	if (min == 50) {
		//em.startSuperlabaed("ÿСʱ����<��ս����>���г�������������,��ʿ�ǿ������������..",5121010);
		em.broadcastServerMsg(5120006, "ÿСʱ50��ʱ�� < ���� > ���г���������������,С�����ץ��ʱ������ҵ��..", true);
	} else if (min == 56) {
		em.broadcastServerMsg(5121040, " < ���̻ > ÿ�� �� �� �� 20:10�������̻Ӵ,�����ḻ���㱬��꣡��", true);
	}
}