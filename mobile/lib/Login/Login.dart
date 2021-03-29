import 'package:flutter/material.dart';
import 'package:nobars/Login/LoginBody.dart';

class Login extends StatelessWidget {
  final Widget child;
  const Login({Key key, @required this.child}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LoginBody(),
    );
  }
}
