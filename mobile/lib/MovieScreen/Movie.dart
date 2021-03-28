import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:nobars/MovieScreen/MovieBody.dart';
import 'package:nobars/const.dart';

class Movie extends StatelessWidget {
  final Widget child;
  const Movie({Key key, @required this.child}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(),
      body: MovieBody(),
    );
  }

  AppBar buildAppBar() {
    return AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: SvgPicture.asset(
            "assets/icons/left-arrow.svg",
            color: kPrimaryColor,
          ),
          onPressed: () {},
        ));
  }
}
