var extend = function(a) {
  return ([].slice.call(arguments, 1) || []).forEach(function(b) {
    if (b)
      for (var c in b) a[c] = b[c]
  }), a
};
module.exports = extend;