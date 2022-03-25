import React from "react";
import { combineReducers, createStore } from "redux";
import {  FootballStars,FootballPlayersReducer } from "./FootballPlayers";

const store = createStore(FootballPlayersReducer, FootballStars);

export default store;