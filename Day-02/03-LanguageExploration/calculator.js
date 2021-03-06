function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array){
			var result = 0;
			for(var i=0;i<n.length;i++)
				result += parseArg(n[i]);
			return result;
		}
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}
/*
	arguments -> array like object containing all the values passed to the function during invocation
	this

*/