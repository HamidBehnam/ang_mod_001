/**
 * Created by hamidbehnam on 7/8/17.
 */

var path = require('path');

var ROOT = path.resolve(__dirname, '..');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

exports.root = root;
