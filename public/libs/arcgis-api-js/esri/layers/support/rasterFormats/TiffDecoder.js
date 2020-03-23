// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["./Jpg","./Zlib"],function(Pa,ka){var Qa=function(){var a=new ArrayBuffer(4),g=new Uint8Array(a),a=new Uint32Array(a);g[0]=1;g[1]=2;g[2]=3;g[3]=4;return 67305985===a[0]},fb=function(){var a=[];a[254]="NEWSUBFILETYPE";a[255]="SUBFILETYPE";a[256]="IMAGEWIDTH";a[257]="IMAGELENGTH";a[258]="BITSPERSAMPLE";a[259]="COMPRESSION";a[262]="PHOTOMETRICINTERPRETATION";a[263]="THRESHHOLDING";a[264]="CELLWIDTH";a[265]="CELLLENGTH";a[266]="FILLORDER";a[269]="DOCUMENTNAME";a[270]="IMAGEDESCRIPTION";a[271]=
"MAKE";a[272]="MODEL";a[273]="STRIPOFFSETS";a[274]="ORIENTATION";a[277]="SAMPLESPERPIXEL";a[278]="ROWSPERSTRIP";a[279]="STRIPBYTECOUNTS";a[280]="MINSAMPLEVALUE";a[281]="MAXSAMPLEVALUE";a[282]="XRESOLUTION";a[283]="YRESOLUTION";a[284]="PLANARCONFIGURATION";a[285]="PAGENAME";a[286]="XPOSITION";a[287]="YPOSITION";a[288]="FREEOFFSETS";a[289]="FREEBYTECOUNTS";a[290]="GRAYRESPONSEUNIT";a[291]="GRAYRESPONSECURVE";a[292]="T4OPTIONS";a[293]="T6OPTIONS";a[296]="RESOLUTIONUNIT";a[297]="PAGENUMBER";a[300]="COLORRESPONSEUNIT";
a[301]="TRANSFERFUNCTION";a[305]="SOFTWARE";a[306]="DATETIME";a[315]="ARTIST";a[316]="HOSTCOMPUTER";a[317]="PREDICTOR";a[318]="WHITEPOINT";a[319]="PRIMARYCHROMATICITIES";a[320]="COLORMAP";a[321]="HALFTONEHINTS";a[322]="TILEWIDTH";a[323]="TILELENGTH";a[324]="TILEOFFSETS";a[325]="TILEBYTECOUNTS";a[326]="BADFAXLINES";a[327]="CLEANFAXDATA";a[328]="CONSECUTIVEBADFAXLINES";a[330]="SUBIFD";a[332]="INKSET";a[333]="INKNAMES";a[334]="NUMBEROFINKS";a[336]="DOTRANGE";a[337]="TARGETPRINTER";a[338]="EXTRASAMPLES";
a[339]="SAMPLEFORMAT";a[340]="SMINSAMPLEVALUE";a[341]="SMAXSAMPLEVALUE";a[342]="TRANSFERRANGE";a[347]="JPEGTABLES";a[512]="JPEGPROC";a[513]="JPEGIFOFFSET";a[514]="JPEGIFBYTECOUNT";a[515]="JPEGRESTARTINTERVAL";a[517]="JPEGLOSSLESSPREDICTORS";a[518]="JPEGPOINTTRANSFORM";a[519]="JPEGQTABLES";a[520]="JPEGDCTABLES";a[521]="JPEGACTABLES";a[529]="YCBCRCOEFFICIENTS";a[530]="YCBCRSUBSAMPLING";a[531]="YCBCRPOSITIONING";a[532]="REFERENCEBLACKWHITE";a[33550]="GEOPIXELSCALE";a[33922]="GEOTIEPOINTS";a[33432]="COPYRIGHT";
a[42112]="GDAL_METADATA";a[42113]="GDAL_NODATA";a[50844]="RPCCOEFFICIENT";a[34735]="GEOKEYDIRECTORY";a[34736]="GEODOUBLEPARAMS";a[34737]="GEOASCIIPARAMS";return a}(),Ra=[0,1,1,2,4,8,1,1,2,4,8,4,8],Sa=function(a,g){var t="UNKNOWN";3===a?t="F32":1===a?8>=g?t="U8":16>=g?t="U16":32>=g&&(t="U32"):2===a&&(8>=g?t="S8":16>=g?t="S16":32>=g&&(t="S32"));return t};return{decode:function(a){var g,t=new DataView(a,0,8),Ta=t.getUint16(0,!1),X;if(18761===Ta)X=!0;else if(19789===Ta)X=!1;else throw"unexpected endianess byte";
if(42!==t.getUint16(2,X))throw"unexpected tiff identifier";var gb=t.getUint32(4,X);g=X;var Y,za,la,Aa,Z,ma,aa,Ua,Va,Ba,ba;Y=gb;for(var Ca=[];Y;){za=(new DataView(a,Y,2)).getUint16(0,g);la=Y+2;Y=(new DataView(a,la+12*za,4)).getUint32(0,g);Ba={};for(Aa=0;Aa<za;Aa++)if(Z=new DataView(a,la,12),ma=Z.getUint16(0,g),aa=Z.getUint16(2,g),Ua=Z.getUint32(4,g),Va=Z.getUint32(8,g),la+=12,!(7===aa||12<aa)){var hb=ba={fieldTag:ma,fieldType:aa,fieldValueCount:Ua,fieldValueOffset:Va},r=a,x=g,E=[],na=ba.fieldType,
oa=ba.fieldValueCount,S=ba.fieldValueOffset,n=S,Da=Ra[na],Wa=8*Da,ib=oa*Da,Xa=oa*Ra[na]*8,q=void 0,F=void 0;if(32>=Xa)if(x||(S>>>=32-Xa),1===oa)E=[S];else for(F=0;F<oa;F++)E.push(S<<Wa*F>>>32-Wa);else for(n=S;n<S+ib;n+=Da){switch(na){case 1:q=(new DataView(r,n,1)).getUint8(0);break;case 2:q=(new DataView(r,n,1)).getUint8(0);break;case 3:q=(new DataView(r,n,2)).getUint16(0,x);break;case 4:q=(new DataView(r,n,4)).getUint32(0,x);break;case 5:q=(new DataView(r,n,4)).getUint32(0,x)/(new DataView(r,n+4,
4)).getUint32(0,x);break;case 6:q=(new DataView(r,n,1)).getInt8(0);break;case 8:q=(new DataView(r,n,2)).getInt16(0,x);break;case 9:q=(new DataView(r,n,4)).getInt32(0,x);break;case 10:q=(new DataView(r,n,4)).getInt32(0,x)/(new DataView(r,n+4,4)).getInt32(0,x);break;case 11:q=(new DataView(r,n,4)).getFloat32(0,x);break;case 12:q=(new DataView(r,n,8)).getFloat64(0,x);break;case 7:q=null;break;default:q=null}E.push(q)}if(2===na){for(var T="",Ea=E,E=[],F=0;F<Ea.length;F++)0===Ea[F]&&""!==T?(E.push(T),
T=""):T+=String.fromCharCode(Ea[F]);""===T&&0!==E.length||E.push(T)}hb.fieldValues=E;var jb=Ba,Fa=fb[ma];void 0===Fa&&(Fa="unknown"+ma);jb[Fa]={type:aa,values:ba.fieldValues}}Ca.push(Ba)}if(0===Ca.length)throw"no valid image file directory";var z,h,b=Ca[0],U=void 0===b.GDAL_NODATA||null===b.GDAL_NODATA?null:parseFloat(b.GDAL_NODATA.values[0]);if(b.TILEOFFSETS){var Ya,A,G,kb=Qa()===g,J=b.TILEOFFSETS?b.TILEOFFSETS.values:void 0;if(void 0===J)h=void 0;else{var K=b.TILEBYTECOUNTS.values,L=b.TILEWIDTH.values[0],
V=b.TILELENGTH.values[0],W=b.IMAGEWIDTH.values[0],Ga=b.IMAGELENGTH.values[0],H=W*Ga,u=b.BITSPERSAMPLE.values[0],k=b.SAMPLESPERPIXEL.values[0],ca=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:1,pa=Sa(ca,u);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";var y=b.COMPRESSION?b.COMPRESSION.values[0]:1;if(1!==y&&6!==y&&8!==y&&32946!==y)throw console.log("this compression is not supported at this moment"),
"this compression is not supported at this moment";if(3<ca)h=void 0;else{3===ca?(A=new Float32Array(H*k),G=Float32Array):1===ca?8>=u?(A=new Uint8Array(H*k),G=Uint8Array):16>=u?(A=new Uint16Array(H*k),G=Uint16Array):32>=u&&(A=new Uint32Array(H*k),G=Uint32Array):2===ca&&(8>=u?(A=new Int8Array(H*k),G=Int8Array):16>=u?(A=new Int16Array(H*k),G=Int16Array):32>=u&&(A=new Int32Array(H*k),G=Int32Array));var d,da,l,ea,Ha,Ia,Ja,Ka,qa,ra,Za,$a,B,e,M,La,sa,Ma,ab=Math.ceil(W/L);if(0===u%8)for(d=0;d<J.length;d++){Ia=
Math.floor(d/ab)*V;Ja=d%ab*L;Ka=(Ia*W+Ja)*k;if("U8"===pa||"S8"===pa||kb)if(8===y||32946===y)e=new Uint8Array(a,J[d],K[d]),sa=new ka(e),Ma=sa.getBytes(),B=new ArrayBuffer(Ma.length),e=new Uint8Array(B),e.set(Ma),e.length!==L*V*k*u/8&&console.log("tile byte counts is different than expected");else if(6===y){e=new Uint8Array(a,J[d],K[d]);var ta=new Pa;ta.parse(e);var bb=ta.getData(ta.width,ta.height);B=new ArrayBuffer(bb.length);e=new Uint8Array(B);e.set(bb)}else 1===y&&(K[d]!==L*V*k*u/8&&console.log("tile byte counts is different than expected"),
B=a.slice(J[d],J[d]+K[d]));else switch(8===y||32946===y?(e=new Uint8Array(a,J[d],K[d]),sa=new ka(e),e=sa.getBytes(),B=new ArrayBuffer(e.length),M=new Uint8Array(B),e.length!==L*V*k*u/8&&console.log("tile byte counts is different than expected")):1===y&&(K[d]!==L*V*k*u/8&&console.log("tile byte counts is different than expected"),B=new ArrayBuffer(K[d]),e=new Uint8Array(a,J[d],K[d]),M=new Uint8Array(B)),pa){case "U16":case "S16":for(l=0;l<e.length;l+=2)M[l]=e[l+1],M[l+1]=e[l];break;case "U32":case "S32":case "F32":for(l=
0;l<e.length;l+=4)M[l]=e[l+3],M[l+1]=e[l+2],M[l+2]=e[l+1],M[l+3]=e[l]}Ya=new G(B);ra=0;qa=Ka;$a=Math.min(L,W-Ja);Za=Math.min(V,Ga-Ia);for(ea=0;ea<Za;ea++)for(qa=Ka+ea*W*k,ra=ea*L*k,Ha=0;Ha<$a*k;Ha++,qa++,ra++)A[qa]=Ya[ra]}var ua={width:W,height:Ga,pixelType:pa};if(1===k)ua.pixels=[A];else for(ua.pixels=[],d=0;d<k;d++){La=new G(H);for(da=0;da<H;da++)La[da]=A[da*k+d];ua.pixels.push(La)}h=ua}}}else if(b.STRIPOFFSETS){var cb,C,I,lb=Qa()===g,N=b.STRIPOFFSETS?b.STRIPOFFSETS.values:void 0;if(void 0===N)h=
void 0;else{var O=b.STRIPBYTECOUNTS.values,fa=b.ROWSPERSTRIP.values,P=b.IMAGEWIDTH.values[0],ga=b.IMAGELENGTH.values[0],Q=P*ga,v=b.BITSPERSAMPLE.values[0],p=b.SAMPLESPERPIXEL.values[0],ha=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:1,va=Sa(ha,v);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";var w=b.COMPRESSION?b.COMPRESSION.values[0]:1;if(1!==w&&6!==w&&8!==w&&32946!==w)throw console.log("compressed tiff is not supported at this moment"),
"compressed tiff is not supported at this moment";if(3<ha)h=void 0;else{3===ha?(C=new Float32Array(Q*p),I=Float32Array):1===ha?8>=v?(C=new Uint8Array(Q*p),I=Uint8Array):16>=v?(C=new Uint16Array(Q*p),I=Uint16Array):32>=v&&(C=new Uint32Array(Q*p),I=Uint32Array):2===ha&&(8>=v?(C=new Int8Array(Q*p),I=Int8Array):16>=v?(C=new Int16Array(Q*p),I=Int16Array):32>=v&&(C=new Int32Array(P*ga*p),I=Int32Array));var c,ia,m,db,D,f,R,Na,wa,Oa,ja=fa;if(0===v%8)for(c=0;c<N.length;c++){db=c*fa*P*p;ja=(c+1)*fa>ga?ga-c*
fa:fa;if("U8"===va||"S8"===va||lb)if(8===w||32946===w)f=new Uint8Array(a,N[c],O[c]),wa=new ka(f),Oa=wa.getBytes(),D=new ArrayBuffer(Oa.length),f=new Uint8Array(D),f.set(Oa),f.length!==ja*P*p*v/8&&console.log("strip byte counts is different than expected");else if(6===w){f=new Uint8Array(a,N[c],O[c]);var xa=new Pa;xa.parse(f);var eb=xa.getData(xa.width,xa.height);D=new ArrayBuffer(eb.length);f=new Uint8Array(D);f.set(eb)}else 1===w&&(O[c]!==ja*P*p*v/8&&console.log("strip byte counts is different than expected"),
D=a.slice(N[c],N[c]+O[c]));else switch(6===w||8===w||32946===w?(f=new Uint8Array(a,N[c],O[c]),wa=new ka(f),f=wa.getBytes(),D=new ArrayBuffer(f.length),R=new Uint8Array(D),f.length!==ja*P*p*v/8&&console.log("strip byte counts is different than expected")):1===w&&(O[c]!==ja*P*p*v/8&&console.log("strip byte counts is different than expected"),D=new ArrayBuffer(O[c]),f=new Uint8Array(a,N[c],O[c]),R=new Uint8Array(D)),va){case "U16":case "S16":for(m=0;m<f.length;m+=2)R[m]=f[m+1],R[m+1]=f[m];break;case "U32":case "S32":case "F32":for(m=
0;m<f.length;m+=4)R[m]=f[m+3],R[m+1]=f[m+2],R[m+2]=f[m+1],R[m+3]=f[m]}cb=new I(D);C.set(cb,db)}var ya={width:P,height:ga,pixelType:va};if(1===p)ya.pixels=[C];else for(ya.pixels=[],c=0;c<p;c++){Na=new I(Q);for(ia=0;ia<Q;ia++)Na[ia]=C[ia*p+c];ya.pixels.push(Na)}h=ya}}}if(null!==U){h.maskData=new Uint8Array(h.width*h.height);if(1E24<Math.abs(U))for(z=0;z<h.width*h.height;z++)h.maskData[z]=1E-6>Math.abs((h.pixels[0][z]-U)/U)?0:1;else for(z=0;z<h.width*h.height;z++)h.maskData[z]=h.pixels[0][z]===U?0:1;
h.noDataValue=U}return h}}});