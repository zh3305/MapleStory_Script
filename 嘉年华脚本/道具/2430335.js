/* 
 * 2431390 - ×øÆï À³¸ñË¹µÄ²òÈ® ÓÀ¾Ã
 */
var period = 90;
var mountSkillId = 10001136;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}