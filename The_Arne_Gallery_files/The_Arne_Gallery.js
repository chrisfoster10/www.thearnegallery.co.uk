// Created by iWeb 3.0.4 local-build-20130107

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,343),url:'The_Arne_Gallery_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'The_Arne_Gallery_files/stroke_1.png'},{rect:new IWRect(1,-1,343,2),url:'The_Arne_Gallery_files/stroke_2.png'},{rect:new IWRect(344,-1,2,2),url:'The_Arne_Gallery_files/stroke_3.png'},{rect:new IWRect(344,1,2,343),url:'The_Arne_Gallery_files/stroke_4.png'},{rect:new IWRect(344,344,2,2),url:'The_Arne_Gallery_files/stroke_5.png'},{rect:new IWRect(1,344,343,2),url:'The_Arne_Gallery_files/stroke_6.png'},{rect:new IWRect(-1,344,2,2),url:'The_Arne_Gallery_files/stroke_7.png'}],new IWSize(345,345))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('The_Arne_Gallery_files/The_Arne_GalleryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
