sortda
======

Grammatical correct sorting of strings in the danish language. 
Supports the special danish characters `æ`, `ø`, `å` and `aa` (double a). 

----------

Grammatisk korrekt sortering af javascript arrays indeholdende danske bogstaver. Understøtter æ, ø, å og aa (dobbelt-a). 
Som valgfri parameter kan det angives om dobbelt-a skal sorteres før a, efter å (default, det grammatisk korrekte) eller ligestilles med å. 

Se http://sproget.dk/raad-og-regler/retskrivningsregler/retskrivningsregler/a7-1-6/a7-4-alfabetisk-rekkefolge.

----------

Usage `array.sortDa()`

```
array.sortDa(AA_FIRST) // aa is sorted to the beginning of the array, before a
array.sortDa(AA_LAST)  // aa is sorted to the end of the array, after å (default)
array.sortDa(AA_ARING) // aa is considered equal with å
```

**Demonstration**

Default browser `array.sort()` (in this case Chrome) :  
_Aakirkeby, Aalborg, Aalestrup, Aarhus, Albæk, Alem Kirkegård, Almind, Almindingen, Badskær Kirke, Bagå, Bådsgård Mark, Bådsgård Vig, Haarby Å, Haas, Halskov, Hastrup, Heerup, Hvidovre, Hågerup, København, Linette, Linned, Linné, Liseleje, Låsby, Lærkedal, Lærred, Læsø, Løftgaarde, Løftgårde, Løgstrup, Løgstør, Sorø, Sæby, Søllerød, Å Højrup, Ålestrup, Ørestaden_

`array.sortDa(AA_FIRST)` :   
 _Aakirkeby, Aalborg, Aalestrup, Aarhus, Albæk, Alem Kirkegård, Almind, Almindingen, Badskær Kirke, Bagå, Bådsgård Mark, Bådsgård Vig, Haarby Å, Haas, Halskov, Hastrup, Heerup, Hvidovre, Hågerup, København, Linette, Linned, Linné, Liseleje, Lærkedal, Lærred, Læsø, Løftgaarde, Løftgårde, Løgstrup, Løgstør, Låsby, Sorø, Sæby, Søllerød, Ørestaden, Å Højrup, Ålestrup_  

`array.sortDa()`, `array.sortDa(AA_LAST)` :   
_Albæk, Alem Kirkegård, Almind, Almindingen, Badskær Kirke, Bagå, Bådsgård Mark, Bådsgård Vig, Halskov, Hastrup, Heerup, Hvidovre, Hågerup, Haarby Å, Haas, København, Linette, Linned, Linné, Liseleje, Lærkedal, Lærred, Læsø, Løftgårde, Løftgaarde, Løgstrup, Løgstør, Låsby, Sorø, Sæby, Søllerød, Ørestaden, Å Højrup, Ålestrup, Aakirkeby, Aalborg, Aalestrup, Aarhus_

`array.sortDa(AA_ARING)` :   
_Albæk, Alem Kirkegård, Almindingen, Almind, Badskær Kirke, Bagå, Bådsgård Mark, Bådsgård Vig, Halskov, Hastrup, Heerup, Hvidovre, Hågerup, Haarby Å, Haas, København, Linette, Linned, Linné, Liseleje, Lærkedal, Lærred, Læsø, Løftgårde, Løftgaarde, Løgstrup, Løgstør, Låsby, Sorø, Sæby, Søllerød, Ørestaden, Å Højrup, Aakirkeby, Aalborg, Ålestrup, Aalestrup, Aarhus_

