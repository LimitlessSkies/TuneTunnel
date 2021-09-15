Tune Tunnel

Using base64 encoded phrase of key + secret we can get token which allows us to do requests endpoint

curl -X "POST" -H "Authorization: Basic ZTEzOWEwZmM5MjkwNDA0OTk2NzkwODY2ZjU5NmRkNzQ6ZGE5MzFlOGEzZjE5NDAwNTgwYzhiZjcwN2JhNmNlODM=" -d grant_type=client_credentials https://accounts.spotify.com/api/token

Example of how to search for "AC/DC" using that token

curl -X "GET" "https://api.spotify.com/v1/search?q=ACDC&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCtbJ4qwdLfDvRBCsvVcHSzegbJ6oXcItligx3uKniP92ZxQ-WJyEXXZnKR_oJAj14lCF2QB_jmRYAvleVJlZg8nMKsp_R8TixPlRGhFgr8v4BjDM7_3iGFKg0xBbmOir1f6BbLvUU"



