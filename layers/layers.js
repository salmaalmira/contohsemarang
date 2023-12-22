var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'man_made': 'man_made', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'toilet:facilities': 'toilet:facilities', 'kitchen:facilities': 'kitchen:facilities', 'evacuation_center': 'evacuation_center', 'ground_floor:height': 'ground_floor:height', 'religion': 'religion', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'man_made': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'toilet:facilities': '', 'kitchen:facilities': '', 'evacuation_center': '', 'ground_floor:height': '', 'religion': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'man_made': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'toilet:facilities': 'no label', 'kitchen:facilities': 'no label', 'evacuation_center': 'no label', 'ground_floor:height': 'no label', 'religion': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});