var elements = document.getElementsByTagName('*');
var buzzWords = [
    {"key":"issue", "val":"mystical beast"},
    {"key":"clear your cache", "val":"PRAY TO THE GODS"},
    {"key":"pivot grid", "val":"fancy paper weight"},
    {"key":"R&D", "val":"bird people"},
    {"key":"5.5.4","val":"digital messiah"},
    {"key":"AIP","val":"popularity contest"},
    {"key":"KPI","val":"worth to the company"},
    {"key":"hours entry app","val":"root canal"},
    {"key":"DITO","val":"colonoscopy"}
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