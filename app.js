const CLiENT_SECRET = "da931e8a3f19400580c8bf707ba6ce83";
const CLIENT_KEY = "e139a0fc9290404996790866f596dd74";
const API_URL = "";
var API_AUTHTOKEN = "";
let selectedArtists = [];

const start = Date.now();

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
      selectedArtists.push(temp["artists"]);
      console.log(selectedArtists);

      localStorage.setItem(searchArtist.value, JSON.stringify(selectedArtists));

      document.getElementById("searchArtist").value = "";
      // console.log(temp["artists"]);
    }
  };
  xhr.send("");
}
Object.keys(localStorage).forEach(function (key) {
  artistObj = JSON.parse(localStorage.getItem(key));
  artistList = document.createElement("li");
  artistList.innerText = artistObj;
  console.log(artistList);
});
