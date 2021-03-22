import 'package:flutter/material.dart';
import 'package:nobars/Body.dart';
import 'package:nobars/const.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter',
        theme: ThemeData(
            primaryColor: kPrimaryColor, scaffoldBackgroundColor: Colors.white),
        home: Body());
  }
}
