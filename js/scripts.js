$(document).ready(function() {

  $("form#interests").submit(function(event) {
    $("#Golf_text").hide();
    $("#Basketball_text").hide();
    $("#Baseball_text").hide();
    $("#Sorry_text").hide();
    var sport = $("input:radio[name=sport]:checked").val();

    if (sport === 'Golf'){
      $("#Golf_text").show();
    }
    else if (sport === 'Basketball'){
      $("#Basketball_text").show();
    }
    else if (sport === 'Baseball'){
      $("#Baseball_text").show();
    }
    // else if (sport === 'other'){
    //   $("#Sorry_text").show();
    // }
    else
      $("#Sorry_text").show();
    // var weather = $("input:radio[name=weather]:checked").val();
    // var type = $("input:radio[name=type]:checked").val();
    // var transportation = $("input:radio[name=transportation]:checked").val();
    // var price = $("input:radio[name=price]:checked").val();
    //
    // if (sport === 'Africa' && "weather" === 'Dry' && "price" === 'Affordable' && "type" === 'Nature' && "transportation" === 'Boat' || 'Plane'){
    //   $("#Africa_text").show();
    // }
    // else if (sport === 'Europe' && "weather" === 'Humid' && "type" === 'History' && "price" === 'Expensive' && "transportation" === 'Boat' || 'Plane'){
    //   $("#Europe_text").show();
    // }
    // else if (sport === 'America' && "weather" === 'Dry' || 'Humid' && "type" === 'Fun' && "price" === 'Expensive' && "transportation" === 'Plane' || 'Car'){
    //   $("#America_text").show();
  event.preventDefault();
});
});
