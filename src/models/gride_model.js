class GrideModels{
    constructor(id, title,description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
const grideData = [
  new GrideModels(1,'This is a title','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'),
  new GrideModels(2,'This is a title','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'),
  new GrideModels(3,'This is a title','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'),
  new GrideModels(4,'This is a title','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'),
  new GrideModels(5,'This is a title','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'),
];
module.exports = {
  grideData
};