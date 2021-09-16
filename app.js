const CLiENT_SECRET = "da931e8a3f19400580c8bf707ba6ce83";
const CLIENT_KEY = "e139a0fc9290404996790866f596dd74";
const API_URL = "";
var API_AUTHTOKEN = "";
const start = Date.now();
// request AUTH tokem from spotify
//
// response example:
// {"access_token":"BQDpzpwBFc-ZmisxTcuf6EJxKS-oNkcPOI0GDCToOQ2aLuS3q9qKaG3lEIiTD-P8ojtSZZMo38IoI9XiCg0","token_type":"Bearer","expires_in":3600}
function getAuthToken() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://accounts.spotify.com/api/token", false);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader(
    "Authorization",
    "Basic ZTEzOWEwZmM5MjkwNDA0OTk2NzkwODY2ZjU5NmRkNzQ6ZGE5MzFlOGEzZjE5NDAwNTgwYzhiZjcwN2JhNmNlODM="
  );

  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
      var temp = JSON.parse(xhr.responseText);
      API_AUTHTOKEN = temp.access_token;
    }
  };
  xhr.send("grant_type=client_credentials");
}

function getAuth() {
  if (API_AUTHTOKEN == "" || start > Date.now() + 3600) {
    getAuthToken();
  }
}

getAuth();

function getArtist(name) {
  console.log(API_AUTHTOKEN);

  var xhr = new XMLHttpRequest();

  //TODO: Encode name in approperate format for URI to accept Cyrillics
  xhr.open(
    "GET",
    "https://api.spotify.com/v1/search?q=" + name + "&type=artist&limit=1",
    false
  );

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Authorization", "Bearer " + API_AUTHTOKEN);
  console.log("Bearer " + API_AUTHTOKEN);
  xhr.onreadystatechange = function () {
    // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE) {
      var temp = JSON.parse(xhr.responseText);
      console.log(temp["artists"]);
    }
  };
  xhr.send("");
}

getArtist("Pink Floyd");
getArtist("KISS");
