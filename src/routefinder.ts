export function findShortestPaths(stations, routes) {

    var table = [];
    var tickets = [];

    function addOptions(station, distance) {
        for (var k = 0; k < routes[station].length; k++) {
            if (routes[station][k] > 0 && distances[k] == -1 && (options[k] == -1 || routes[station][k] + distance < options[k])) {
                options[k] = routes[station][k] + distance;
            }
        }
    }

    for (var i = 0; i < routes.length; i++) {
        var options = routes[i].slice();
        var distances = [];
        for (var j = 0; j < stations.length; j++) { distances[j] = -1; }
        var go = true;

        while (go) {
            var len = 1000;
            var pick = -1;

            for (var k = 0; k < options.length; k++) {
                if (options[k] > 0 && options[k] < len) {
                    pick = k;
                    len = options[k]
                }
            }

            if (pick != -1) {
                distances[pick] = len;
                options[pick] = -1;
                addOptions(pick, len);
            }
            else {
                go = false;
            }
        }

        table.push(distances);
    }

    for (i = 0; i < table.length; i++) {
        for (j = 0; j < table[i].length; j++) {
            if (routes[i][j] <= 0 && i < j && j < table[i].length) { tickets.push([stations[i], stations[j], Number(table[i][j])]); }
        }
    }
    return tickets;
}

export function getRandomRoute (max) {
    return Math.floor(Math.random() * max);

}