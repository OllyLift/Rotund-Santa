var elements = document.getElementsByTagName('*');
var buzzWords = [
    {"key":/issue/gi, "val":"mystical beast"},
    {"key":/clear your cache/gi, "val":"PRAY TO THE GODS"},
    {"key":/pivot grid/gi, "val":"fancy paper weight"},
    {"key":/R&D/gi, "val":"bird people"},
    {"key":/5.5.4/gi,"val":"digital messiah"},
    {"key":/AIP/gi,"val":"popularity contest"},
    {"key":/KPI/gi,"val":"Key Performance Indicator"},
    {"key":/hours entry app/gi,"val":"root canal"},
    {"key":/DITO/gi,"val":"colonoscopy"},
    {"key":/allocation/gi,"val":"slave auction"},
    {"key":/HBG/gi,"val":"Hours Billing Group"},
    {"key":/Wendy Salas/gi,"val":"Wendingo"},
    {"key":/feedback/gi,"val":"holla back"},
    {"key":/Aaron James/gi,"val":"Stairway to Meatloaf"},
    {"key":/Joshua Hiller/gi,"val":"Wixxerd"},
    {"key":/Colin Hayes/gi,"val":"Seyah Niloc"}
];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            for(var h=0;h<buzzWords.length;h++){
                var text = node.nodeValue;
                var replacedText = text.replace(buzzWords[h].key, buzzWords[h].val);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }

        }
    }
}