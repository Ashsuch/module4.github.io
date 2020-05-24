/*
desired output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jennie
Hello Paul
Hello Frank
Hello tina
Hello Paula
Hello Laura
Good Bye Jim
*/
(function() {
    var names = ["Yaakov", "John", "Jen", "Jennie", "Paul", "Fana", "tina", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();