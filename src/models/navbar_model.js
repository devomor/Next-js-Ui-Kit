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
  new NavbarModels(5,'Counter App','/counter'),
  new NavbarModels(6,'Timer App','/timer'),
  new NavbarModels(7,'Api fetch','/productlist'),
  new NavbarModels(8,'SignUp','/signup'),
];
module.exports = {
  navbardata,
};