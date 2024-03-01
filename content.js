(function() {
  const logoLink = document.getElementById('logo');
  const hiddenDiv = logoLink.querySelector('div[hidden]');
  const yoodleRenderer = logoLink.querySelector('ytd-yoodle-renderer');
  const bigYoodleDiv = document.getElementById('big-yoodle');

  logoLink.removeAttribute('href');
  yoodleRenderer.setAttribute('hidden', '');
  hiddenDiv.removeAttribute('hidden');
  bigYoodleDiv.parentNode.removeChild(bigYoodleDiv);
})();