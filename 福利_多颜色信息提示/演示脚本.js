var laba = new Array(
        Array(0x00, "0x00 = °×É«"),
        Array(0x01, "0x01 = ÂÌÉ«"),
        Array(0x06, "0x06 = »ÒÉ«"),
        Array(0x07, "0x07 = »ÆÉ«"),
        Array(0x08, "0x08 = Ç³»Æ"),
        Array(0x09, "0x09 = À¶É«"),
        Array(0x0A, "0x0A = °×µ×ºÚ×Ö"),
        Array(0x0B, "0x0B = Ç³ºìÉ«"),
        Array(0x0C, "0x0C = °×µ×À¶×Ö"),
        Array(0x0D, "0x0D = ·Ûµ×Éî×ÏÉ«×Ö"),
        Array(0x0F, "0x0F = Éî»Æµ×ºÚ×Ö"),
        Array(0x10, "0x10 = ×ÏÉ«"),
        Array(0x11, "0x11 = ÂÌµ×ºÚ×Ö"),
        Array(0x14, "0x14 = Ç³À¶É«"),
        Array(0x16, "0x16 = À¶»ÆÀ¶3´Î"),
        Array(0x19, "0x19 = Ç³×ÏÉ«"),
        Array(0x1B, "0x1B = Ç³»ÆÉ«"),
        Array(0x1C, "0x1C = Éî»ÆÉ«ºÚÌå"),
        Array(0x1E, "0x1E = Éî×ÏÉ«"),
        Array(0x1F, "0x1F = Ç³ÂÌÉ«"),
        Array(0x20, "0x20 = °×µ×·Û×Ö"),
        Array(0x21, "0x21 = ºìµ×ºÚ×Ö"),
        Array(0x23, "0x23 = ºìµ×»Æ×Ö"),
        Array(0x24, "0x24 = ·Ûµ×ºÚ×Ö"),
        Array(0x25, "0x25 = Ç³»Æµ×ºÚ×Ö"),
        Array(0x26, "0x26 = ºìµ×Ç³»Æ×Ö"),
        Array(0x28, "0x28 = Éîºìµ×ºÚ×Ö"),
        Array(0x2A, "0x2A = ÉîºìÉ«")
    );

function start() {
    for (var i in laba) {
        cm.spouseMessage(laba[i][0], "ĞÅÏ¢ÑùÊ½Õ¹Ê¾£º" + laba[i][1]);
    }
    cm.dispose();
}