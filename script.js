const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const DescargaAPK = document.getElementById('apk');

function openMenu() {
  sideMenu.classList.add('open');
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
  document.body.style.overflow = 'hidden'; // evita scroll
}

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
  document.body.style.overflow = 'auto';
}

menuToggle.addEventListener('click', openMenu);

DescargaAPK.addEventListener('click', function() {
  const enlace = document.createElement('a');
  enlace.href = 'https://www.mediafire.com/file/v9372aw7s158af1/Sensia+v1.1.1.apk/file';
  enlace.download = 'SENSIA.apk';
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
});
