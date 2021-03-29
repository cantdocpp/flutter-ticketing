class Product {
  final String image, title, type, pg;
  final int id;
  Product({
    this.id,
    this.image,
    this.title,
    this.type,
    this.pg,
  });
}

List<Product> products = [
  Product(
    id: 1,
    title: "CEK TOKO SEBELAH",
    type: "2D",
    pg: "SU",
    image: "assets/images/movie_1.jpg",
  ),
  Product(
    id: 2,
    title: "THE WAR WITH GRANDPA",
    type: "2D",
    pg: "17+",
    image: "assets/images/movie_2.jpg",
  ),
  Product(
    id: 3,
    title: "RASUK 2",
    type: "2D",
    pg: "17+",
    image: "assets/images/movie_3.jpg",
  ),
  Product(
    id: 4,
    title: "THE DARKEST MINDS",
    type: "2D",
    pg: "PG-13",
    image: "assets/images/movie_4.jpg",
  ),
];
