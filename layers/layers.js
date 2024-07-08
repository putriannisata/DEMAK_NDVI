var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NDVI_Kecamatan_1 = new ol.format.GeoJSON();
var features_NDVI_Kecamatan_1 = format_NDVI_Kecamatan_1.readFeatures(json_NDVI_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_Kecamatan_1.addFeatures(features_NDVI_Kecamatan_1);
var lyr_NDVI_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_Kecamatan_1, 
                style: style_NDVI_Kecamatan_1,
                popuplayertitle: "NDVI_Kecamatan",
                interactive: true,
    title: 'NDVI_Kecamatan<br />\
    <img src="styles/legend/NDVI_Kecamatan_1_0.png" /> Lahan Tidak Bervegetasi<br />\
    <img src="styles/legend/NDVI_Kecamatan_1_1.png" /> Kehijauan Sangat Rendah<br />\
    <img src="styles/legend/NDVI_Kecamatan_1_2.png" /> Kehijauan Rendah<br />\
    <img src="styles/legend/NDVI_Kecamatan_1_3.png" /> Kehijauan Sedang<br />\
    <img src="styles/legend/NDVI_Kecamatan_1_4.png" /> Kehijauan Tinggi<br />'
        });
var format_Lokasi_Taman_Mangrove_2 = new ol.format.GeoJSON();
var features_Lokasi_Taman_Mangrove_2 = format_Lokasi_Taman_Mangrove_2.readFeatures(json_Lokasi_Taman_Mangrove_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_Taman_Mangrove_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_Taman_Mangrove_2.addFeatures(features_Lokasi_Taman_Mangrove_2);
var lyr_Lokasi_Taman_Mangrove_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_Taman_Mangrove_2, 
                style: style_Lokasi_Taman_Mangrove_2,
                popuplayertitle: "Lokasi_Taman_Mangrove",
                interactive: true,
                title: '<img src="styles/legend/Lokasi_Taman_Mangrove_2.png" /> Lokasi_Taman_Mangrove'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NDVI_Kecamatan_1.setVisible(true);lyr_Lokasi_Taman_Mangrove_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NDVI_Kecamatan_1,lyr_Lokasi_Taman_Mangrove_2];
lyr_NDVI_Kecamatan_1.set('fieldAliases', {'Keterangan': 'Keterangan', 'Kecamatan': 'Kecamatan', 'Luas': 'Luas', });
lyr_Lokasi_Taman_Mangrove_2.set('fieldAliases', {'Name': 'Name', 'Foto': 'Foto', });
lyr_NDVI_Kecamatan_1.set('fieldImages', {'Keterangan': 'TextEdit', 'Kecamatan': '', 'Luas': 'TextEdit', });
lyr_Lokasi_Taman_Mangrove_2.set('fieldImages', {'Name': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_NDVI_Kecamatan_1.set('fieldLabels', {'Keterangan': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_Lokasi_Taman_Mangrove_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_Lokasi_Taman_Mangrove_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});