/* 
 * 2431390 - 坐骑 骑士团战车 永久
 */
var period = 90;
var mountSkillId = 10001151;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}