function listPosts(jsondata) {
    document.write('<ul>');
    for (var i = 0; i < jsondata.feed.entry.length; i++) {
        for (var j = 0; j < jsondata.feed.entry[i].link.length; j++) {
            if (jsondata.feed.entry[i].link[j].rel == 'alternate') {
                break;
            }
        }
        var entryUrl = "'" + jsondata.feed.entry[i].link[j].href + "'";
        var entryTitle = jsondata.feed.entry[i].title.$t;
        var item = '<li>' + '<a href=' + entryUrl + '>' + entryTitle + '</a> </li>';
        document.write(item);
    }
    document.write('</ul>');
}
