// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");

function Basic_Alarm(alarmMessage){
  return alarmMessage;
}

console.log(Basic_Alarm("My alarm!"));

function myAlarm(time){
  if (time === undefined) {
    time = new Date()
    time = `${time.getHours()}:${time.getMinutes()}`;
  }
  return `Hey, Sean, wake up! It's ${time}`
}

function Mom_Alarm(time){
  if (time === undefined) {
    time = new Date()
    time = `${time.getHours()}:${time.getMinutes()}`;
  }
  return `Hey, Mom, wake up! It's ${time}`
}

function familyAlarm(time, name){
  if (time === undefined) {
    time = new Date();
  }
  if (name === undefined) {
    name = "Todd Howard"
  }
  return `Hey, ${name}, wake up! It's ${time.getHours()}:${time.getMinutes()}`
}

function Important_Alarm(time, name, message){
  if (time === undefined) {
  time = new Date();
}
  if (name === undefined) {
    name = "Todd Howard"
  }
  if (message === undefined){
    return `Hey, ${name}, wake up! It's ${time.getHours()}:${time.getMinutes()}`;
  } else {
    return message;
  }
}

function Snooze_Alarm(hour, minute, name, message, snooze){
  if (hour === undefined) {
  hour = new Date().getHours();
  }
  if (minute === undefined) {
  minute = new Date().getMinutes();
  }
  let origHour = timeCorrect(hour);
  let origMinute = timeCorrect(minute);
  if (name === undefined) {
    name = "Todd Howard"
  }
  if (snooze !== undefined){
    if (minute + snooze > 59){
      hour = hour + Math.floor((minute+snooze)/60);
      if (hour >= 24){
        hour = hour - 24;
      }
      hour = timeCorrect(hour);
      minute = (minute+snooze)%60;
      minute = timeCorrect(minute);
    } else {
      minute = minute + snooze;
    }
    hour = timeCorrect(hour);
    let time = `${hour}:${minute}`;
    return `The alarm for ${origHour}:${origMinute} has been changed to ${time}`;
  }
  else if (message === undefined){
    return `Hey, ${name}, wake up! It's ${origHour}:${origMinute}`;
  } else {
    return message;
  }
}

function timeCorrect(input){
  if (input < 10) {
    return "0" + input;
  } else {
    return input
  }
}

//Extension

function extensAlarm(times){
  for (var i = 1; i < times; i++) {
    console.log(`Wake up! It's ${time}!`)
  }
}
