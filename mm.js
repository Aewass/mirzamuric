function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copyText"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    alert('Email copied to clipboard!')
    window.getSelection().removeAllRanges(); // to deselect
}