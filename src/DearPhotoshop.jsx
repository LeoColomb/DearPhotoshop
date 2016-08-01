#target photoshop
//
// DearPhotoshop
//
// Phtoshoping mise en abyme
// MIT License
// Copyright(c) Leo Colombaro
//

var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };

function DearPhotoshop() {
  // Dupliquer
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Photography");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(sTID('duplicate'), desc1, dialogMode);
  };

  // Intervertir
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Supprimer
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('delete'), undefined, dialogMode);
  };

  // Intervertir
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Transformation
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Rlt'), 4.5);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Rlt'), 4.49999999999997);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 98.5172981878089);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 97.9118329466357);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 0.91652564315462);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Bcbc'));
    executeAction(sTID('transform'), desc1, dialogMode);
  };

  // Transformation
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Rlt'), 1.97744165814493);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Rlt'), -4.73288664356903);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 99.3921645058767);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 99.9941731875442);
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Hrzn'), cTID('#Ang'), -1.18865863151709);
    desc3.putUnitDouble(cTID('Vrtc'), cTID('#Ang'), 0);
    desc1.putObject(cTID('Skew'), cTID('Pnt '), desc3);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), -0.61507294435482);
    var desc4 = new ActionDescriptor();
    desc4.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), -0.00003257293825);
    desc4.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), -0.00305254964209);
    desc1.putObject(cTID('Usng'), cTID('Pnt '), desc4);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Bcbc'));
    executeAction(sTID('transform'), desc1, dialogMode);
  };

  // Dupliquer
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Cadre");
    executeAction(sTID('duplicate'), desc1, dialogMode);
  };

  // Luminosité/Contraste
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Brgh'), 45);
    desc1.putInteger(cTID('Cntr'), 44);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Teinte/Saturation
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('H   '), 0);
    desc2.putInteger(cTID('Strt'), -36);
    desc2.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('hueSaturation'), desc1, dialogMode);
  };

  // Courbes
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Hrzn'), 11);
    desc3.putDouble(cTID('Vrtc'), 14);
    list2.putObject(cTID('Pnt '), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 255);
    desc4.putDouble(cTID('Vrtc'), 241);
    list2.putObject(cTID('Pnt '), desc4);
    desc2.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc2);
    var desc5 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc5.putReference(cTID('Chnl'), ref2);
    var list3 = new ActionList();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 0);
    desc6.putDouble(cTID('Vrtc'), 4);
    list3.putObject(cTID('Pnt '), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 250);
    desc7.putDouble(cTID('Vrtc'), 247);
    list3.putObject(cTID('Pnt '), desc7);
    desc5.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc5);
    var desc8 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc8.putReference(cTID('Chnl'), ref3);
    var list4 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 0);
    desc9.putDouble(cTID('Vrtc'), 33);
    list4.putObject(cTID('Pnt '), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putDouble(cTID('Hrzn'), 44);
    desc10.putDouble(cTID('Vrtc'), 53);
    list4.putObject(cTID('Pnt '), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Hrzn'), 114);
    desc11.putDouble(cTID('Vrtc'), 120);
    list4.putObject(cTID('Pnt '), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Hrzn'), 252);
    desc12.putDouble(cTID('Vrtc'), 231);
    list4.putObject(cTID('Pnt '), desc12);
    desc8.putList(cTID('Crv '), list4);
    list1.putObject(cTID('CrvA'), desc8);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('curves'), desc1, dialogMode);
  };

  // Teinte/Saturation
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('H   '), 0);
    desc2.putInteger(cTID('Strt'), -25);
    desc2.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('hueSaturation'), desc1, dialogMode);
  };

  // Luminosité/Contraste
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Brgh'), -25);
    desc1.putInteger(cTID('Cntr'), 17);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Niveaux
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc2.putReference(cTID('Chnl'), ref1);
    desc2.putDouble(cTID('Gmm '), 1.13);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc3.putReference(cTID('Chnl'), ref2);
    desc3.putDouble(cTID('Gmm '), 1.18);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(251);
    desc3.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc3);
    var desc4 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc4.putReference(cTID('Chnl'), ref3);
    desc4.putDouble(cTID('Gmm '), 1.12);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(251);
    desc4.putList(cTID('Otpt'), list3);
    list1.putObject(cTID('LvlA'), desc4);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('levels'), desc1, dialogMode);
  };

  // Luminosité/Contraste
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Brgh'), -3);
    desc1.putInteger(cTID('Cntr'), 29);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Transformation
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Rlt'), 5.6843418860808e-14);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Rlt'), 0);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 80);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 80);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Bcbc'));
    executeAction(sTID('transform'), desc1, dialogMode);
  };

  // Contour progressif
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 50);
    executeAction(sTID('feather'), desc1, dialogMode);
  };

  // Dupliquer
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Cadre2");
    executeAction(sTID('duplicate'), desc1, dialogMode);
  };

  // Définir
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Chnl'), "Cadre");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Soustraction
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Cadre2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    executeAction(sTID('subtract'), desc1, dialogMode);
  };

  // Créer
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Remplir
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 36.1614990234375);
    desc2.putDouble(cTID('Strt'), 0);
    desc2.putDouble(cTID('Brgh'), 66.2745098039216);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(sTID('fill'), desc1, dialogMode);
  };

  // Définir
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Définir
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('CBrn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Définir
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 71);
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Définir
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 53);
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Fusionner les calques
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Luminosité/Contraste
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Brgh'), 3);
    desc1.putInteger(cTID('Cntr'), 0);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Courbes
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Hrzn'), 0);
    desc3.putDouble(cTID('Vrtc'), 39);
    list2.putObject(cTID('Pnt '), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 255);
    desc4.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc4);
    desc2.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('curves'), desc1, dialogMode);
  };

  // Définir
  function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('CtrF'));
    desc3.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('GrFl'));
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 40);
    desc3.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 1);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 227.00000166893);
    desc4.putDouble(cTID('Grn '), 223.334627151489);
    desc4.putDouble(cTID('Bl  '), 214.5369592309);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putString(cTID('Nm  '), "Personnalisé");
    desc5.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc5.putDouble(cTID('Intr'), 2867);
    var list1 = new ActionList();
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 192.000003755093);
    desc7.putDouble(cTID('Grn '), 179.217900037766);
    desc7.putDouble(cTID('Bl  '), 162.634237110615);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 0);
    desc6.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc6);
    var desc8 = new ActionDescriptor();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 239.000000953674);
    desc9.putDouble(cTID('Grn '), 237.509720921516);
    desc9.putDouble(cTID('Bl  '), 230.564195215702);
    desc8.putObject(cTID('Clr '), sTID("RGBColor"), desc9);
    desc8.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc8.putInteger(cTID('Lctn'), 4096);
    desc8.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc8);
    desc5.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc10 = new ActionDescriptor();
    desc10.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc10.putInteger(cTID('Lctn'), 0);
    desc10.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc11.putInteger(cTID('Lctn'), 4096);
    desc11.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc11);
    desc5.putList(cTID('Trns'), list2);
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc5);
    desc3.putUnitDouble(cTID('Angl'), cTID('#Ang'), 105);
    desc3.putEnumerated(cTID('Type'), cTID('GrdT'), cTID('Lnr '));
    desc3.putBoolean(cTID('Rvrs'), false);
    desc3.putBoolean(cTID('Dthr'), false);
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    desc3.putBoolean(cTID('Algn'), true);
    var desc12 = new ActionDescriptor();
    desc12.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), 0);
    desc12.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), 0);
    desc3.putObject(cTID('Ofst'), cTID('Pnt '), desc12);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Sélectionner
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Arrière-plan");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Galerie d'effets de flou...
  function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(sTID("blurbType"), true);
    desc1.putInteger(cTID('VrsM'), 1);
    desc1.putInteger(cTID('VrsN'), 0);
    desc1.putInteger(sTID("blurbOpenPanel"), 0);
    desc1.putBoolean(sTID("blurbGeneralBlurEffectApplied"), true);
    desc1.putBoolean(sTID("blurbIrisBlurEffectApplied"), false);
    desc1.putBoolean(sTID("blurbLensTiltEffectApplied"), false);
    desc1.putBoolean(sTID("blurbSaveMaskChannel"), false);
    desc1.putBoolean(sTID("blurbHighQuality"), false);
    desc1.putDouble(sTID("blurbBoostHighlights"), 0);
    desc1.putDouble(sTID("blurbBokehColor"), 0);
    desc1.putDouble(sTID("blurbLightRangeLow"), 191.25);
    desc1.putDouble(sTID("blurbLightRangeHigh"), 255);
    desc1.putBoolean(sTID("blurbBlurEffectsEnabled"), true);
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(sTID("blurbWidgetType"), 0);
    desc2.putDouble(sTID("blurbWidgetLocationX"), 575);
    desc2.putDouble(sTID("blurbWidgetLocationY"), 424);
    desc2.putBoolean(sTID("blurbWidgetSelected"), true);
    desc2.putBoolean(sTID("blurbWidgetEffectEnabled"), true);
    desc2.putDouble(sTID("blurbWidgetMaskBleeding"), 0);
    desc2.putDouble(sTID("blurbWidgetFade"), 100);
    desc2.putDouble(sTID("blurbBoostHighlights"), 0);
    desc2.putDouble(sTID("blurbBokehColor"), 0);
    desc2.putDouble(sTID("blurbLightRangeLow"), 191.25);
    desc2.putDouble(sTID("blurbLightRangeHigh"), 255);
    desc2.putBoolean(sTID("blurbBlurEffectsEnabled"), true);
    desc2.putDouble(sTID("blurbGeneralBlurAmount"), 4);
    list1.putObject(sTID("blurbWidget"), desc2);
    desc1.putList(sTID("blurbWidgetList"), list1);
    executeAction(sTID('blurbTransform'), desc1, dialogMode);
  };

  step1();      // Dupliquer
  step2();      // Intervertir
  step3();      // Supprimer
  step4();      // Intervertir
  step5();      // Transformation
  step6();      // Transformation
  step7();      // Dupliquer
  step8();      // Luminosité/Contraste
  step9();      // Teinte/Saturation
  step10();      // Courbes
  step11();      // Teinte/Saturation
  step12();      // Luminosité/Contraste
  step13();      // Niveaux
  step14();      // Luminosité/Contraste
  step15();      // Transformation
  step16();      // Contour progressif
  step17();      // Dupliquer
  step18();      // Définir
  step19();      // Soustraction
  step20();      // Créer
  step21();      // Remplir
  step22();      // Définir
  step23();      // Définir
  step24();      // Définir
  step25();      // Définir
  step26();      // Fusionner les calques
  step27();      // Luminosité/Contraste
  step28();      // Courbes
  step29();      // Définir
  step30();      // Sélectionner
  step31();      // Galerie d'effets de flou...
};


function DearPolaroid() {
    return
};
