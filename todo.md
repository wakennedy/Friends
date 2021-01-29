{[9:25 AM] Ignore: Thoughts on a search cache?
[9:25 AM] Seltzer: what do you mean?
[9:25 AM] Ignore: sec
[9:25 AM] Seltzer: like storing past searches?
[9:26 AM] Ignore: Kinda yeah; Check cache for search ( with a TTL ) if in cache pull from cache otherwise hit API
[9:27 AM] Seltzer: so i would store the results of a search in a json everytime i execute the search,
[9:27 AM] Seltzer: but when i search i would check that json first?
[9:27 AM] Seltzer: also what do TTL?
[9:27 AM] Ignore: Yeah you could do something like searches.json where each object looks like;
[9:28 AM] Ignore: [{
searchTerm: "Blah",
TTL: 1611941290
apiResults: {
// API return values;
}
}]
[9:29 AM] Ignore: TTL is time to live;
[9:30 AM] Seltzer: like a time stamp?
[9:31 AM] Ignore: Yeah; we use it in DynamoDB's to set a row to auto delete after that timestamp has come
[9:31 AM] Seltzer: hmm thats a good idea
[9:31 AM] Ignore: So basically you can use the same idea to basically decided how long till a search cache is "stale"

---
