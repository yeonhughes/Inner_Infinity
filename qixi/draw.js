drawOnCanvas: function drawOnCanvas() {
                if (this.gl == null) return this;
                var gl = this.gl,
                    canvas = this.canvas,
                    settings = this.settings,
                    map = settings.map,
                    bounds = map.getBounds(),
                    topLeft = new BM.LatLng(bounds.getNorth(), bounds.getWest()),
                    offset = utils.latLonToPixel(topLeft.lat, topLeft.lng),
                    zoom = map.getZoom(),
                    scale = Math.pow(2, zoom),
                    mapMatrix = this.mapMatrix,
                    pixelsToWebGLMatrix = this.pixelsToWebGLMatrix;
                pixelsToWebGLMatrix.set([2 / canvas.width, 0, 0, 0, 0, -2 / canvas.height, 0, 0, 0, 0, 0, 0, -1, 1, 0, 1]); //set base matrix to translate canvas pixel coordinates -> webgl coordinates

                mapMatrix.set(pixelsToWebGLMatrix).scaleMatrix(scale).translateMatrix(-offset.x, -offset.y);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.vertexAttrib1f(gl.pointSize, this.pointSize()); // -- attach matrix value to 'mapMatrix' uniform in shader

                gl.uniformMatrix4fv(this.matrix, false, mapMatrix);
                gl.drawArrays(gl.POINTS, 0, settings.data.length);
                return this;
            },