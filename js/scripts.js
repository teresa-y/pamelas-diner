function validate() {
    var zipcode = $("#zipcode").val();
    if (isNaN(zipcode)){
        alert("Zip code is not valid or not in a valid format.")
        return false;
    }
}

