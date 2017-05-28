
                    var styleCache_ng3857={}
                    var style_ng3857 = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 6, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(227,26,28,1.0)"})})
                        })
                        ];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_ng3857[key]){
                            var text = new ol.style.Text({
                                  font: '9.0px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_ng3857[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_ng3857[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };