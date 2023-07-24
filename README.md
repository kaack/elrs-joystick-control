<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
  <h1>ELRS Joystick Control</h1>
</div>
<p align="center">
  <img alt="ELRS Joystick Control Logo" width="500px" height="300px" src="./images/elrs-joystick-control-logo.svg">
</p>

This application allows you to use one or more joysticks to remote control a drone or airplane.
You can use any device that identifies as a gamepad when connected to a computer over USB.
(e.g. XBox Controller, ThrustMaster Warthog, etc)

<p align="center">
  <img alt="ELRS Joystick Control" src="./images/elrs-joystick-control.png" />
</p>

<p align="center">
  <b>THIS APPLICATION IS EXPERIMENTAL (WORK IN PROGRESS)</b>
</p>

## How It Works

The application reads the raw inputs from one or more USB gamepad devices. It takes these
inputs, converts them to Crossfire format (CRSF), and sends them to an RC Transmitter (TX) module.

The TX then sends the control signals over air to the drone.  Both the USB control devices and the
RC Transmitter module must be connected to the same computer where the application is running on.

## Try it out

You can try out the configurator for this application online over at [kaack.github.io/elrs-joystick-control](https://kaack.github.io/elrs-joystick-control?mockBackend=true)

The online Web-UI starts with a mocked backend by default. The mocked backend, emulates most of the functionality
and allows you to try things out without actually installing or running anything in your computer.

When you are ready to actually run the application locally, you access the Web-UI on https://localhost:3000


## How the application talks to the ELRS Transmitter

ELRS TX modules have an I/O pin that is used for receiving radio inputs.

The transmitter module does not really care who is sending data on that pin. It could be an actual device like a
Radio Master TX16S, or it could be this application.

This application uses a serial port to send data to the ELRS TX, and in doing so, pretends to be an RC radio.

## Connecting to the ELRS Transmitter

There are a couple of ways to do this.

### 1) Connecting with an FTDI Adapter


Most computers do not have physical serial ports anymore.
But, you can use a device called an FTDI adapter to emulate a serial port.

On one end, you connect the FTDI adapter to a USB port in your computer. The operating system sees the device
as if it was a virtual serial port.

On the other end, the FTDI adapter has exposed pins for a UART(RX,TX) plus Ground and 5 Volts (VCC) output pins.

To make this work, you must connect the TX pin from the FTDI adapter to the CRSF pin of your ELRS TX module.
You can also power the ELRS TX module using the Ground and 5 Volts output pins.

See diagram below

![FTDI Adapter ELRS Module Wiring](/images/ftdi-elrs-module-wiring.png)


**Warning**: When you do this, your ELRS TX is in a circuit with your computer's motherboard.
Do not connect any external power source (such as a LiPo Battery) to the ELRS TX.
You can potentially destroy your motherboard if the ELRS TX is not designed properly.

### Configuring the FTDI Adapter

First, download and install the official FTDI VCP (Virtual COM Port) drivers from the [FTDI website](https://ftdichip.com/drivers/)

Then, download and install the [FT Prog](https://ftdichip.com/utilities/#ft_prog) tool from their website as well.

Finally, use the FT Prog tool to re-program the FTDI adapter as follows.

See image below

![FT Prog](/images/ft-prog.png)

You have to do this because the ELRS transmitter I/O pin works as an inverted half-duplex UART.

This means:
* **Inverted** - The logical ones and zeros are inverted on the wire. High voltage means 0, low voltage means 1.
* **Half-Duplex UART** - A single pin is used for bidirectional (RX/TX) communication.

So, the FTDI adapter must use the same wire protocol to communicate with the ELRS transmitter.




### 2) Connecting with USB cable

The second and more convenient method is to use a USB cable.

Some ELRS transmitters have a USB port that is used for flashing firmware.
This same USB port can be reconfigured to work as the CRSF I/O pin.

First, download STM32 Virtual COM Port driver, from the [ST Electronics website](https://www.st.com/en/development-tools/stsw-stm32102.html)

Then, access the module's /hardware.html page, and change the CRSF RX/TX pin values.

See image below:

![CRSF Pins](/images/elrs-config-crsf-pins.png)

The correct values to use here depend on the module you have.
For example, in my case, with the BetaFPV 1W Micro module, I had to use pins 3 and 1 so that the
ELRS firmware would treat the USB port as if it was the CRSF serial port.

You can usually tell which pin values to use by looking at the ELRS Backpack/Logging configuration
(in the same hardware.html page).

The ELRS Backpack/Logging section is configured by default to use the USB RX/TX pins.
So, copy+paste these values and disable the backpack functionality.

See image below:

![ELRS Backpack Settings](/images/elrs-config-backpack.png)

Finally, you may need to put your ELRS TX in "Firmware Upgrade" mode for this approach to work.
This is done using the DIP switch on the back of the module. The exact position of the DIP switch varies
from module to module. See the ELRS documentation to determine the proper method for putting the module in "Firmware upgrade" mode.





## How to use the application
When the application starts, it exposes a Web-UI on port 3000, and a gRPC service on port 10000.

For most use-cases, the Web-UI will give you all the functionality you will need. From there you can do things like
configure the inputs and outputs, setup telemetry widgets, and start/stop the radio control link.

Behind the scenes, the Web-UI uses the gRPC service to interact with the application itself.
You can use the gRPC service directly as well, if you want to interact with the application programmatically.


## How to use the Web-UI

When you run the application locally, you can access the Web-UI through a browser over at https://localhost:3000.

The Web-UI has multiple pages, that allow you to configure and manage the application.

### Web-UI Home Page

#### Starting/Stopping Link
From the `Home` page, you can start and stop the link with the ELRS RF transmitter. On the bottom left, click on the
transmitter icon. That will open a dialog where you can start and stop the link.

Starting the link just means that the application will begin writing channel data to the ELRS RF transmitter, and reading telemetry data that
is output by the transmitter. Note that starting/stopping the link is separate from applying inputs/outputs configuration.
If you have not yet applied inputs/outputs configuration, all channel values will be set to 0.

You will need to go to the `Inputs Config` page to create and apply inputs/outputs configuration.

#### Viewing telemetry data

From the `Home` page, you can view the telemetry data live as it's being received by the ELRS RF transmitter.
Telemetry data is only received when the link is active. You can add new telemetry widgets to the home screen, or delete
existing ones. You can also modify various display properties of each telemetry widget by double-clicking on them.

### Web-UI RF Transmitters Page

The `RF Transmitters` page displays a list of all serial ports detected on the computer where the application is running.
The application has no way of knowing if the serial ports are actually ELRS RF transmitters. If you have other devices
connected that also use virtual serial ports, those will show up in this list as well. (e.g. flight controller)

If you click on one of the items in the list, the Web-UI shows the values for all 16 channels associated with the serial port.
This does not mean that the values are actually being sent to the RF transmitter. That only happens when you start the link
from the `Home` page. The channel values you see there are computed live based on inputs/outputs configuration that has been applied.

You will need to go to the `Inputs Config` page to create and apply inputs/outputs configuration.

###  Web-UI Gamepads Page

The `Gamepads` page shows you a list of all gamepad devices that are connected to the computer where the application is running.

If you click on one of the gamepads in the list, the Web-UI shows you a live view of all axes, and button values that gamepad.

### Web-UI Inputs Config Page

The `Input Config` page is where you build the and apply the inputs/outputs configuration.

On the bottom right side, there is menu that let you add nodes for various config items such as gamepads, buttons, axes, channels etc.
There are also nodes that allow you to transform, or even apply logic such as switch-statements, if-else statements.
The idea is for you to build a config where gamepad inputs get mapped to channels for an RF transmitter.

On the left side, there is a menu that lets you apply the config. When you apply the config, the Web-UI constructs a config file
and sends it to the backend application. There is validation that happens both on the Web-UI and the backend to help
you identify errors in your config.

Also, on the left menu (if you expand it), you will find additional functions that such as `Toggle Labels`, and `Toggle values`.

The `Toggle labels` function allows you to show or hide the labels for each of the nodes.


The `Toggle values` function allow you to see the live values for each node in your configuration. This is very useful as it lets you see exactly how the
data flows through the nodes, and how it's transformed.

### Web-UI Settings Page

The `Settings` page lets you modify various aspects of the Web-UI.

* **Connection**
    * **Server URL** (string) - This is the URL where the backend application is running. By default, this is set to the same host, and port that you used to access the Web-UI
* **Mock**
    * **Mock backend server** (toggle) - If you enable this, the Web-UI ignores the **Server URL** property, and uses mocked data to populate the Web-UI.
* **Persistence**
    * **Use local storage** (toggle) - This is enabled by default. It means that the Web-UI stores configuration using your browser's local storage mechanism.
      This is what allows you to close and re-open the page, without losing configuration data. If you turn it off, the data is stored in-memory, and will be lost when you close the page.

### Web-UI About Page

The `About` page has information about the application itself such as the version number, licenses, etc.

## How to use the gRPC service

In order to use the gRPC service, you will need a gRPC client. There are a few of those out there like Postman, or [GRPC-UI](https://github.com/fullstorydev/grpcui/releases).

Here is are some instructions for GRPC-UI

1. Download and extract the GRPC-UI binary from their [GitHub releases](https://github.com/fullstorydev/grpcui/releases).
    * Put the `grpcui` binary somewhere in your path
2. Start the **elrs_joystick_control** application (by default it listens on port 10000)
    ```shell
    $ elrs_joystick_control
     gRPC server listenting on port 10000
    ```
3. Start GRPC-UI like this
    ```shell
    $ grpcui -plaintext localhost:10000
     gRPC Web UI available at http://127.0.0.1:53885/
    ```

From GRPC-UI, you can call the methods exposed by the application's gRPC service. The following main methods are available:

* **setConfig** - Receives (and validates) a JSON file containing the full configuration, and stores it in memory
* **getConfig** - Retrieves the full configuration from memory, and sends it as a JSON file

* **startLink** - starts the link with the RF transmitter
* **stopMixer** - stops the link with the RF transmitter

* **startHttp** - Starts the Web-UI HTTP server
* **stopHTTP** - Stops the Web-UI HTTP server

* **getGamepads** - Returns a list of raw input devices connected (joysticks, gamepads, etc)
* **getTransmitters** - Returns a list of available serial ports

There are also a few other data streaming methods available:

* **getEvalStream** - Starts a data stream with the values for all inputs/outputs as they are config is evaluated live
* **getTransmitterStream** - Starts a data stream with the values of all 16 channels as they are received live by the RF transmitter.
* **getGamepadStream** - Starts a data stream with the values of all axes, and buttons as they are output by a gamepad
* **getTelemetryStream** - Starts a data stream with the values of all telemetry frames that are output by the ELRS TX
* **getLinkStream** - Starts a data stream with values for link stats such as count of sent/received frames, and errors.



## Config: Core Concepts

In order to understand the config, you have to grasp two core concepts:

1. Gamepads output values in **RAW** format (for buttons and axes)
    * A **RAW** value is a signed 16-bit integer number, ranging from `-32768` to `32767`.
2. ELRS RF transmitters expect values in **CRSF** format (for RC channels)
    * A **CRSF** value is an unsigned 11-bit integer, ranging from `0` to `1984`.


The conversion between **RAW** and **CRSF** is a uniform linear transformation.
That is, the larger **RAW** range is scaled down to the smaller **CRSF** range.

Your job when building the config, **IS NOT** to tell application how to convert from **RAW** to **CRSF**.
The application itself will do that for you at the very end when the RC channel data is written to the ELRS transmitter.

Your job when building the config, **IS** to tell the application which axes, and which buttons map to which to RC channels.

Having said that, you should still know the basic mappings that happen at the minimum, center, and maximum values.

* **Minimum** - `-32768` **RAW**  maps to `0` **CRSF** (which is also `1000` **PWM**)
* **Center** - `0` **RAW** maps to `992` **CRSF** (which is also `1500` **PWM**)
* **Maximum** - `32768` **RAW** maps to `1984` **CRSF** (which is also `2000` **PWM**)


## Config: File format
The configuration is basically a JSON document that specifies the mapping between gamepads (inputs), and and an RF transmitter (output).
At a high level it looks like this:

```json
{
  "config": {
    "input_output_map": {}
  }
}
```

The **input_output_map** config JSON can get complex very quickly.
You should not build this JSON document manually. Instead, use the Web-UI to create the configuration
as a graph and send it to the application. Behind, the scenes, the Web-UI converts the graph
into the **input_output_map** config JSON.

If you are still curious, you can take a look at the schema for the config over at [schema.yaml](/pkg/config/schema.yaml).
There are a lot of comments in the schema explaining each node in the config does.




## Supported Operating Systems

I have only flown with this application in Windows so far, so that's what I can vouch for. In any case, below you can
find instructions for building the application binary on both Windows and Linux.

## Compiling on Windows (x86_64)

If you want to compile the application in your own Windows machine, you can do so using Docker with Windows Containers.
There is a pre-built Windows docker image that has all the build tools, and pre-requisites installed. Follow these
steps to build the application:

* Install [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) for Windows


* Switch Docker to use [Windows Containers](https://docs.docker.com/desktop/faqs/windowsfaqs/#how-do-i-switch-between-windows-and-linux-containers)


* Pull the builder image
  ```
  docker pull oneeyefpv/windows-amd64-builder
  ```


* Clone this repo to your local machine
  ```
  git clone https://github.com/kaack/elrs-joystick-control.git
  ```


* Switch to the `elrs-joystick-control` directory
  ```
   cd elrs-joystick-control
  ```


* Create a docker container from the builder image, and connect to it
  ```
  docker run --rm -it -m 4096m -v %cd%:C:\app oneeyefpv/windows-amd64-builder /s /c
  ```


* From within the container, build the `elrs-joystick-control.exe` binary executable
  ```
  cd app
  go generate ./... 
  go build -tags static -o elrs-joystick-control.exe .\cmd\elrs-joystick-control\.
  ```


* Exit the container
  ```
  exit
  ```
  The binary executable should be on the root of the repo now.

## Compiling on Linux (x86_64)


* Install [Docker Engine](https://docs.docker.com/desktop/install/linux-install/) for Linux


* Pull the builder image
  ```
  docker pull oneeyefpv/linux-amd64-builder
  ```


* Clone this repo to your local machine
  ```
  git clone https://github.com/kaack/elrs-joystick-control.git
  ```


* Switch to the `elrs-joystick-control` directory
  ```
   cd elrs-joystick-control
  ```


* Create a docker container from the builder image, and connect to it
  ```
  docker run --rm -it -m 4096m -v `pwd`:/app oneeyefpv/linux-amd64-builder bash
  ```


* From within the container, build the `elrs-joystick-control` binary executable
  ```
  cd app
  go generate ./... 
  go build -trimpath -tags static --ldflags '-s -w' -o elrs-joystick-control ./cmd/elrs-joystick-control/.
  ```


* Exit the container
  ```
  exit
  ```
  The binary executable should be on the root of the repo now.