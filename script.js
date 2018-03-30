function afficher(data){
    var table = $("#CombatJobs");
    var res = "";
    var total=0;
    var nb = 0;
    for(var i in data){
        res += "<tr>";
        res += "<td><div class=nop>" + data[i].name + "</div></td>";
        res += "<td>" + data[i].level + "</td>";
        total += data[i].level;
        res += "<td>" + data[i].exp.total_percent + "</td>";
        res += "</td>";
        nb++;
    }
    table.append(res);
    $("#total").append(total);
    $("#moyenne").append(total/nb);
}

$.ajax({
    type: "GET",
    url: "https://api.xivdb.com/character/17495202?data=achievements_possibles",
    dataType: "json",
    success: function (response) {
        afficher(response.data.classjobs);
    }
});

