var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM', source: new ol.source.OSM()})]});
var lyr_ng3857 = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_ng3857}), 
                style: style_ng3857,
                title: "ng_3857"
            });

lyr_ng3857.setVisible(true);
var layersList = [baseLayer,lyr_ng3857];
