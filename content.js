var elements = document.getElementsByTagName('*');
var buzzWords = [
    { "key": /issue/gi, "val": "mystical beast" },
    { "key": /clear your cache/gi, "val": "PRAY TO THE GODS" },
    { "key": /alt-right/gi, "val": "Nazi" },
    { "key": /donald trump/gi, "val": "Cheeto Faced Ass Clown" },
    { "key": /milo yiannopoulos/gi, "val": "Neo-Nazi Clown" },
    { "key": /betsy devos/gi, "val": "Death of Public Education" },
    { "key": /fake news/gi, "val": "news" },
    { "key": /fox news/gi, "val": "right-wing opinions" }
];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            for (var h = 0; h < buzzWords.length; h++) {
                var text = node.nodeValue;
                var replacedText = text.replace(buzzWords[h].key, buzzWords[h].val);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }

        }
    }
}