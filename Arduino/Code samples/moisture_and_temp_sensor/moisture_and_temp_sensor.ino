// Libraries
#include <OneWire.h> 
#include <DallasTemperature.h>

// Data wire is plugged into pin 2 on the Arduino 
#define ONE_WIRE_BUS 2 

// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS); 

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

void setup(void) 
{ 
 // start serial port 
 Serial.begin(9600); 
 Serial.println("Dallas Temperature IC Control Library Demo"); 
 // Start up the library 
 sensors.begin(); 
}

void loop(void)
{ 
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus 

  Serial.print(" Requesting temperatures..."); 
  // Send the command to get temperature readings 
  sensors.requestTemperatures(); 
  Serial.println("DONE"); 

  // print out the moisture sensor value
  Serial.println(sensorValue);
  // delay in between reads for stability
  delay(1);
  // print out the temperature value
  Serial.print("Temperature is: "); 
  Serial.print(sensors.getTempCByIndex(0)); // Why "byIndex"?  
   // You can have more than one DS18B20 on the same bus.  
   // 0 refers to the first IC on the wire 
   delay(1000); 
} 
