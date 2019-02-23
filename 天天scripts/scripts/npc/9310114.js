/*
³é½±¸±±¾
*/

function start()
{
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection)
{
	cm.gainItem(04033297,1);
   cm.gainMeso(200*10000);
	 cm.warp(910000000, 0);
   cm.dispose();
}
