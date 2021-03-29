import 'package:flutter/material.dart';
import 'package:nobars/MovieScreen/MovieCard.dart';
import 'package:nobars/MovieScreen/Products.dart';
import 'package:nobars/MovieScreen/categories.dart';
import 'package:nobars/const.dart';

class MovieBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
          child: Text(
            "Now Airing",
            style: Theme.of(context)
                .textTheme
                .headline5
                .copyWith(fontWeight: FontWeight.bold),
          ),
        ),
        Categories(),
        Expanded(
            child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: kDefaultPaddin),
          child: GridView.builder(
              itemCount: products.length,
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisSpacing: kDefaultPaddin,
                crossAxisSpacing: kDefaultPaddin,
                childAspectRatio: 0.75,
              ),
              itemBuilder: (context, index) => MovieCard(
                  product: products[index],
                  press: () => Navigator.push(
                      context, MaterialPageRoute(builder: (context) => null)))),
        ))
      ],
    );
  }
}
