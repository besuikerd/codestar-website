export function getBackgroundsSVG() {

  const svg_part1 = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n'
                + '<defs><linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n';

  const svg_part2 = '</linearGradient></defs>\n<rect x="0" y="0" width="1" height="1" fill="url(#gradient)" />\n</svg>';

  let backgrounds = [];
  let colors = ['#030815','#041b36','#052d57','#073b72','#0c4d90','#1464af','#2b7ec5','#4e9bd5','#7bb9e5','#aad6f4'];

  for (var i = 0; i < 9; ++i) {
    let svg = svg_part1;
    svg += '<stop stop-color="' + colors[i] + '" offset="0"/><stop stop-color="' + colors[i+1] + '" offset="1"/>\n';
    svg += svg_part2;
    svg = 'url(data:image/svg+xml;base64,' + window.btoa(svg) + ')';
    backgrounds.push(svg);
  }

  return backgrounds;
}

export function getGradients() {

  let backgrounds = [];
  let filters = [];
  let colors = ['#030815','#041b36','#052d57','#073b72','#0c4d90','#1464af','#2b7ec5','#4e9bd5','#7bb9e5','#aad6f4'];

  for (var i = 0; i < 9; ++i) {
    let css = [];
    css.push(colors[i]); // Solid color fallback for very old browsers that don't support any of the following
    css.push('-moz-linear-gradient(top, ' + colors[i] + ' 0%, ' + colors[i+1] + ' 100%)');
    css.push('-webkit-gradient(linear, left top, left bottom, color-stop(0%,' + colors[i] + '), color-stop(100%,' + colors[i+1] + '))');
    css.push('-webkit-linear-gradient(top, ' + colors[i] + ' 0%, ' + colors[i+1] + ' 100%)');
    css.push('-o-linear-gradient(top, ' + colors[i] + ' 0%, ' + colors[i+1] + ' 100%)');
    css.push('-ms-linear-gradient(top, ' + colors[i] + ' 0%, ' + colors[i+1] + ' 100%)');
    css.push('linear-gradient(to bottom, ' + colors[i] + ' 0%, ' + colors[i+1] + ' 100%)');
    backgrounds.push(css);

    // IE < 10
    // TODO: For some reason the gradient is horizontal, even though GradientType=0.
    filters.push('filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'' + colors[i] + '\, endColorstr=\'' + colors[i+1] + '\',GradientType=0 )');
  }

  return { 'backgrounds': backgrounds, 'filters' : filters};

}
