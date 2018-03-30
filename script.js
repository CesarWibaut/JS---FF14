function afficher(data, div){
    var table = $(div +" #CombatJobs");
    var res = "";
    var total=0;
    var nb = 0;
    for(var i in data){
        res += "<tr>";
        res += "<td><div class=nop>" + data[i].name + "</div></td>";
        res += "<td>" + data[i].level + "</td>";
        total += data[i].level;
        res += "<td>" + Math.floor(data[i].exp.total_percent) + "</td>";
        res += "</td>";
        nb++;
    }
    table.append(res);
    $(div + " #total").append(total);
    $(div + " #moyenne").append(total/nb);
}
function oui(div, id){
    $.ajax({
        type: "GET",
        url: "https://api.xivdb.com/character/"+id+"?data=achievements_possibles", 
        dataType: "json",
        success: function (response) {
            console.log(response);
            $(div +" img").attr("src",response.data.avatar);
            afficher(response.data.classjobs, div);
        }
    });
}

