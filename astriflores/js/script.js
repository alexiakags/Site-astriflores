document.addEventListener('DOMContentLoaded', function () {
  const sidenavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavs);

  document.querySelectorAll('.sidenav a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const instance = M.Sidenav.getInstance(document.querySelector('#mobile-menu'));
      if (instance) instance.close();
    });
  });
});
