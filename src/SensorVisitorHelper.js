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
      "UserManagement",
      "UM_Authentication",
      "UM_UpdatePassword",
      "UM_SecurityType",
      "UM_UP_ByUser",
      "UM_Registration",
      "UM_R_ByAdmin",
      "UM_UserCRUD",
      "UM_R_Anonymous",
      "UM_A_RememberPass",
      "UM_A_RecoverPass",
      "UM_AccountActivation",
      "UM_AA_ByEmail",
      "UM_AA_ByAdmin",
      "UM_UpdateEmail",
      "UM_UserProfile",
      "UM_ST_JWT",
      "UM_UP_ByAdmin",
      "DM_DI_DF_CSV",
      "DM_DI_DataFeeding",
      "DM_DataInput",
      "GUI_Menu",
      "GUI_M_Position",
      "GUI_M_Top",
      "MV_MM_MultipleMapViewer",
      "MV_MM_MMV_MapSelectorInMenuElement",
      "MV_Clustering",
      "DM_GT_Sequence",
      "D_GitLabRunner",
      "Deploy",
      "T_GIS",
      "T_MailSender",
      "T_EntitiesInformation",
      "T_FileUploader",
      "MV_MS_GeoJSON",
      "MV_MS_GJ_Cached",
      "T_Quartz",
      "SensorViewer",
      "SV_LayerManager",
      "SV_LM_Opacity",
      "SV_LM_Order",
      "SV_LM_Visibility",
      "SV_LM_Center",
      "SV_LM_ShowWMSStyle",
      "SV_LM_DownloadLayer",
      "SV_Legend",
      "SV_L_Static",
      "SV_L_Dynamic",
      "SV_L_CustomRanges",
      "SV_FiltersBox",
      "SV_FB_SpatialDimension",
      "SV_FB_TemporalDimension",
      "SV_TimelineBox",
      "SV_TB_RealTime",
      "SV_Popup",
      "SV_P_Histogram",
      "SV_Data",
      "SV_D_DataInsertion",
      "SV_D_DI_Producers",
      "SV_D_DI_Consumers",
      "SV_D_ArtificialGenerator",
      "SV_D_ADG_Entities",
      "SV_D_ADG_Sensors",
      "SV_D_ADG_Dimensions",
      "SV_Rasters",
    ],
    data: {
      basicData: {
        name: spec.name,
        index: {
          component: "STATIC",
          view: "welcome",
        },
        languages: spec.languages,
        packageInfo: spec.packageInfo,
        SRID: `${spec.srid}`,
      },
      dataModel: {
        entities: spec.entities,
        enums: [],
      },
      dataWarehouse: {
        sensors: spec.dataWarehouse.sensors,
        sensorGroups: spec.dataWarehouse.sensorGroups,
      },
      forms: [],
      lists: [],
      menus: [],
      mapViewer: {
        maps: spec.maps,
        layers: spec.layers,
        styles: spec.styles,
      },
      statics: [],
    },
  };

  if (spec.extra) {
    newSpec.data.basicData.extra = spec.extra;
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
