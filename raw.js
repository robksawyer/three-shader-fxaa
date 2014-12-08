var glslify = require('glslify')
var threeify = require('three-glslify')

var source = glslify({
    vertex: './vert.glsl',
    fragment: './frag.glsl',
    sourceOnly: true
})

console.log(JSON.stringify(source))