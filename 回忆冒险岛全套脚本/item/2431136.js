/* 
 * 2431390 - ×øÆï ÓëÄãÏà°é°¢ÀòÑÇ ÓÀ¾Ã
 */
var period = 90;
var mountSkillId = 80001224;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, -1);
    im.dispose();
}