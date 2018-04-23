function readTextFile(filepath) {
    var file = File.createFromNsIFile(filepath);
    console.log(file);
    file.open("r"); // open file with read access
    var str = "";
    while (!file.eof) {
        // read each line of text
        str += file.readln() + "\n";
    }
    file.close();
    alert(str);
    return;

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("/home/wzs21/logs.txt");

//for window
//readTextFile("file:///C:/your/path/to/file.txt");