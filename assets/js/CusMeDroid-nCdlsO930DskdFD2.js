/* Build on 12 May 2023, IyoRTML */
const mbrc=document.getElementById("mybarcode");const xbrc=document.getElementById("barcode");JsBarcode(xbrc,"https://cusmedroid.github.io",{fontSize:40,background:"#ffffff",lineColor:"#000000",margin:40});function ikeh(){let brc=mbrc.value;if(!brc){JsBarcode(xbrc,"https://cusmedroid.github.io",{fontSize:40,background:"#ffffff",lineColor:"#000000",margin:40})}else{JsBarcode(xbrc,brc,{fontSize:40,background:"#ffffff",lineColor:"#000000",margin:40})}}
