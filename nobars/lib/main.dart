import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        body: Container(
          height: 298,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/home.jpg"),
          )
        ),
        child: Align(
          alignment: Alignment.centerLeft, 
          child: Text('Welcome, \n Anggito' , style: TextStyle( fontSize: 30 , color: Colors.white),
        )
        )
      ),
    ));
  }
}