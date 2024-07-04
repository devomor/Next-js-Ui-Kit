class NavbarModels{
    constructor(id, nav_name,route) {
    this.id = id;
    this.nav_name = nav_name;
    this.route = route;
  }
}

const navbardata = [
  new NavbarModels(1,'NavBar','/nav'),
  new NavbarModels(2,'Footer','/footer'),
  new NavbarModels(3,'Gride','/gride'),
  new NavbarModels(4,'Slider','/slider'),
];
module.exports = {
  navbardata,
};