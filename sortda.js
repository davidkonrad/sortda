/*!
 * javascript array sort with respect of danish characters
 * supports æ, ø, å and aa (double-a)
 *
 * Copyright 2013 David Konrad
 * davidkonrad at gmail dot com
 *
 * Released under the MIT license
 * - and any other open source free to misuse license
 * 
 */

// aamodes
var AA_FIRST =	1,  // aa is sorted to the beginning of the array, before a
    AA_LAST  =	2,  // the default - aa is sorted to the end of the array, after å
    AA_ARING =	3;  // aa is considered equal with å

Array.prototype.sortDa = function(aamode) {
	this.sort(function(a,b) {
	    var d, e, f;
	    aamode = (typeof aamode == "undefined") ? AA_LAST : aamode;
	    function intArray(c) {
	        var array=[];
	        c=c.toLowerCase();
	        for (var i=0;i<c.length;i++) {
	            if (c.substr(i,2)==='aa') {
					switch (aamode) {
						case AA_FIRST : 
							array.push(0);
							break;
						case AA_ARING : 
							array.push(299);
							break;
						default :
			                array.push(300); 
							break;
					}
					i=i+1;
	            } else {
	                switch (c.charCodeAt(i)) {
	                    case 229 : //å
	                        array.push(299);
	                        break;
	                    case 248 : //ø
	                        array.push(298);
	                        break;
	                    case 230 : //æ
	                        array.push(297);
	                        break;
	                    default : 
	                        array.push(c.charCodeAt(i));
	                        break;
	                }
	            }
	        }
	        return array;
	    }
	    d=intArray(a), e=intArray(b);
	    for (f=0;f<d.length;f++) {
	        if (d[f]!=e[f]) {
	            return d[f]-e[f];
	        }
	    }
	});
	return this;
};

