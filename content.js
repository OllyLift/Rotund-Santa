var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/issue/gi, "mystical beast");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
		        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/clear your cache/gi, "PRAY TO THE GODS");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
       if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/pivot grid/gi, "fancy paper weight");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
		if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/R&D/gi, "bird people");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
		if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/5.5.4/gi, "digital messiah");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}