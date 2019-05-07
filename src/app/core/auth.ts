import { loginUser, registerUser } from "../models/user/user.model";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as jwt_decode from "jwt-decode";
import { Router } from "@angular/router";

import { AppConf } from "./conf";

import alertify from "alertifyjs";

@Injectable({ providedIn: "root" })
export class Auth {
  constructor(public router: Router, private http: HttpClient) {}

  private loginUser: loginUser = { username: "", password: "" };
  private registerUser: registerUser = {
    name: "",
    email: "",
    password: "",
    username: ""
  };

  token = "";
  uri = AppConf.server + AppConf.api.users;
  errors;

  isLogged() {
    if (localStorage.getItem("jwtToken") !== null) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem("jwtToken") !== null) {
      const token = JSON.parse(localStorage.getItem("jwtToken"));

      if (token.id === "5ccc441e7820af09449b1d8a") {
        return true;
      } else {
        return false;
      }
    }
  }

  getUserId() {
    if (localStorage.getItem("jwtToken") !== null) {
      const token = JSON.parse(localStorage.getItem("jwtToken"));
      return token.id;
    }
  }

  // Save Token In Local Storage
  saveToken(data, status) {
    var token = this.getDecodedAccessToken(data);
    localStorage.setItem("jwtToken", JSON.stringify(token));
    return status;
  }

  // Decode Token
  getDecodedAccessToken(res) {
    try {
      return jwt_decode(res.token);
    } catch (Error) {
      return Error;
    }
  }

  // Login
  login(username, password) {
    this.loginUser.username = username;
    this.loginUser.password = password;

    console.log(this.loginUser);
    this.http.post(`${this.uri}/login`, this.loginUser).subscribe(
      result => {
        this.saveToken(result, true);
      },
      error => {
        this.errors = error;
        alertify.error("Wrong password or username!");
      },
      () => {
        // No errors, route to home page here
        window.location.href = "http://localhost:4200/";
      }
    );
  }

  // Register
  register(firstName, lastName, email, username, password, confirmPassword) {
    this.registerUser = {
      name: firstName + " " + lastName,
      email,
      username,
      password
    };

    this.http.post(`${this.uri}/register`, this.registerUser).subscribe(res => {
      alertify.success("Your registration is successfull!");
      this.router.navigate(["/user/login"]);
    });
  }

  // Logout

  logout() {
    localStorage.removeItem("jwtToken");
    window.location.href = "http://localhost:4200/";
  }
}
