const openMenu = (nav, active) => {
  nav.classList.add(active);
};
const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

const slideMenu = (
setting
) => {
    const   {openBtn, menu, classActiveMenu, closeTrigger, closeCross} = setting;
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);
  const navigationCloseCross = document.querySelector(closeCross);

  burgerBtn.addEventListener("click", () => {
    openMenu(navigation, classActiveMenu);
  });

  navigationClose.forEach((item) => {
    item.addEventListener("click", function () {
      closeMenu(navigation, classActiveMenu);
    });
  });
  navigationCloseCross.addEventListener("click", () => {
    closeMenu(navigation, classActiveMenu);
  });
};

export default slideMenu;
