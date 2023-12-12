//#include <ArduinoJson.h>


// // project variables
// int a0Val = 0;
// int d2Val = 0;
// int d2ClickCount = 0;

// int prevD2Val = 0;

// void sendData() {
//   StaticJsonDocument<128> resJson;
//   JsonObject data = resJson.createNestedObject("data");
//   JsonObject A0 = data.createNestedObject("A0");
//   JsonObject D2 = data.createNestedObject("D2");

//   A0["value"] = a0Val;
//   D2["isPressed"] = d2Val;
//   D2["count"] = d2ClickCount;

//   String resTxt = "";
//   serializeJson(resJson, resTxt);

//   Serial.println(resTxt);
// }

void setup() {
  // Serial setup
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  Serial.begin(9600);
//   while (!Serial) {}
}

void loop() {
  int d0 = digitalRead(2); 
  int d1 = digitalRead(3);
  //Serial.println(String(d0) + " " + d1);
  if(Serial.available() > 0) {
    int inByte = Serial.read(); 
    if(inByte == 10) {
      Serial.println(String(d0) + " " + d1);
    }
    //if(inByte == 18) {
      //digitalWrite(D7); 
    //}
  }
    delay(10); 
  
  
  

}

