function transformation(spec) {
  _relationships(spec);
  const newSpec = {
    features: [
      "GEMA_SPL",
      "DataManagement",
      "GraphicalUserInterface",
      "MapViewer",
      "Tools",
      "DM_SpatialDatabase",
      "DM_GenerationType",
      "DM_DataServer",
      "MV_MapServer",
      "MV_Tools",
      "MV_MapManagement",
      "DM_SD_PostGIS",
      "MV_T_Pan",
      "MV_T_Zoom",
      "DM_GT_Sequence",
      "MV_MM_MultipleMapViewer",
      "MV_MM_MMV_MapSelectorInMapViewer",
      "MV_MM_MMV_MapSelectorInMenuElement",
      "MV_MS_GeoServer",
      "GUI_Forms",
      "GUI_F_Editable",
      "GUI_F_Creatable",
      "GUI_F_Removable",
      "GUI_F_R_ConfirmationAlert",
      "GUI_Lists",
      "GUI_L_FormLink",
      "GUI_L_F_BasicSearch",
      "GUI_L_Filterable",
      "GUI_L_Sortable",
      "GUI_L_LocateInMap",
      "GUI_L_ViewListAsMap",
      "GUI_L_Export",
      "GUI_StaticPages",
      "MV_ContextInformation",
      "MV_CI_Scale",
      "MV_CI_Map",
      "MV_CI_CenterCoordinates",
      "MV_CI_Dimensions",
      "MV_DetailOnClick",
      "MV_LayerManagement",
      "MV_LM_CenterViewOnLayer",
      "MV_LM_Order",
      "MV_LM_Opacity",
      "MV_LM_HideLayer",
      "MV_LM_Style",
      "MV_LM_ExternalLayer",
      "MV_LM_StylePreview",
      "MV_T_Export",
      "MV_T_E_Type",
      "MV_T_E_F_URL",
      "MV_T_E_F_PDF",
      "MV_T_E_SetScale",
      "MV_T_E_ShowLegend",
      "MV_T_InformationMode",
      "MV_T_MeasureControl",
      "MV_T_M_Distance",
      "MV_T_M_Line",
      "MV_T_M_Polygon",
      "MV_T_ZoomWindow",
      "GUI_Menu",
      "GUI_M_Position",
      "GUI_M_Top",
      "DM_DataInput",
      "DM_DI_DataFeeding",
      "DM_DI_DF_Shapefile",
      "T_GIS",
      "T_EntitiesInformation",
      "D_C_Postgres",
      "D_C_Geoserver",
      "D_C_Nginx",
    ],
    basicData: {
      name: spec.name,
    },
    data: {
      dataModel: {
        entities: spec.entities,
        enums: [],
      },
    },
    mapViewer: {
      maps: spec.maps,
      layers: spec.layers,
      styles: spec.styles,
    },
  };

  if (spec.extra) {
    newSpec.basicData.extra = spec.extra;
  }

  return newSpec;
}

function _relationships(spec) {
  let source, target;

  spec.relationships.forEach((r) => {
    source = spec.getEntity(r.source);
    target = spec.getEntity(r.target);
    let sourceOwner = false;
    let targetOwner = false;
    let sourceMultiple = _multiple(r.sourceOpts.multiplicity);
    let targetMultiple = _multiple(r.targetOpts.multiplicity);
    if (sourceMultiple && !targetMultiple) {
      targetOwner = true;
    } else {
      sourceOwner = true;
    }

    source.properties.push({
      name: r.sourceOpts.label,
      class: target.name,
      owner: sourceOwner,
      bidirectional: r.targetOpts.label,
      multiple: sourceMultiple,
      required: _required(r.sourceOpts.multiplicity),
    });

    target.properties.push({
      name: r.targetOpts.label,
      class: source.name,
      owner: targetOwner,
      bidirectional: r.sourceOpts.label,
      multiple: targetMultiple,
      required: _required(r.targetOpts.multiplicity),
    });
  });
}

function _multiple(multiplicity) {
  return ["1..1", "0..1"].find((a) => a == multiplicity) == null;
}

function _required(multiplicity) {
  return ["1..1", "1..*"].find((a) => a == multiplicity) != null;
}

function getPropertyParams(symbols) {
  if (!symbols.length) return null;

  const ret = {};
  if (symbols.includes("identifier")) {
    ret.pk = true;
  }
  if (symbols.includes("required")) {
    ret.required = true;
  }
  if (symbols.includes("unique")) {
    ret.unique = true;
  }
  if (symbols.includes("display_string")) {
    ret.displayString = true;
  }
  return ret;
}

export { transformation, getPropertyParams };
