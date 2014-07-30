/*! Esri-Leaflet - v0.0.1-beta.5 - 2014-06-17
*   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
*   Apache License*/
L.esri.Layers.HeatmapFeatureLayer=L.esri.Layers.FeatureManager.extend({initialize:function(a,b){L.esri.Layers.FeatureManager.prototype.initialize.call(this,a,b),b=L.setOptions(this,b),this._cache={},this._active={},this.heat=new L.heatLayer([],b)},onAdd:function(a){L.esri.Layers.FeatureManager.prototype.onAdd.call(this,a),this._map.addLayer(this.heat)},onRemove:function(a){L.esri.Layers.FeatureManager.prototype.onRemove.call(this,a),this._map.removeLayer(this.heat)},createLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b],d=c.id,e=new L.LatLng(c.geometry.coordinates[1],c.geometry.coordinates[0]);this._cache[d]=e,!this._active[d]&&(!this.options.timeField||this.options.timeField&&this._featureWithinTimeRange(c))&&(this._active[d]=e,this.heat._latlngs.push(e))}this.heat.redraw()},addLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b];if(!this._active[c]){var d=this._cache[c];this.heat._latlngs.push(d),this._active[c]=d}}this.heat.redraw()},removeLayers:function(a){for(var b=[],c=a.length-1;c>=0;c--){var d=a[c];this._active[d]&&delete this._active[d]}for(var e in this._active)b.push(this._active[e]);this.heat.setLatLngs(b)}}),L.esri.HeatmapFeatureLayer=L.esri.Layers.HeatmapFeatureLayer,L.esri.Layers.heatmapFeatureLayer=function(a,b){return new L.esri.Layers.HeatmapFeatureLayer(a,b)},L.esri.heatmapFeatureLayer=function(a,b){return new L.esri.Layers.heatmapFeatureLayer(a,b)}