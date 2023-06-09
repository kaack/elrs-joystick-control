# ELRS Joystick Control

This application allows you to use one or more joysticks to remote control a drone or airplane.
You can use any device that identifies as a gamepad when connected to a computer over USB. 
(e.g. XBox Controller, ThrustMaster Warthog, etc)

![ELRS Joystick Control](/images/elrs-joystick-control.png)

<div align="center"><b>THIS APPLICATION IS EXPERIMENTAL (WORK IN PROGRESS)</b></div>

# How It Works

The application reads the raw inputs from one or more USB gamepad devices. It takes these
inputs and sends them to an RC Transmitter (TX) module. The TX then sends the control signals over air to the drone.

Both the USB control devices and the RC Transmitter module must be connected to the same computer where the
application is running on.

# How the application talks to the ELRS Transmitter 

ELRS TX modules have an I/O pin that is used for receiving radio inputs.

The transmitter module does not really care who is sending data on that pin. It could be an actual device like a
Radio Master TX16S, or it could be this application.

So, this application uses a serial port to send data to the ELRS TX, and in doing so, pretends to be an RC radio.

# Connecting to the ERLS Transmitter 

There are a couple of ways to do this. 

## 1) Connecting with an FTDI Adapter


Most computers do not have physical serial ports anymore.
But, you can use a device called an FTDI adapter to emulate a serial port.

On one end, you connect this device to your computer through a USB port. The operating system sees the device
as if it was a virtual serial port.

On the other end, the device has exposed pins for a UART(RX,TX) plus Ground and 5 Volts (VCC) output pins. 

To make this work, you must connect the TX pin from the FTDI adapter to the CRSF pin of your ELRS TX module.
You can also power the ELRS TX module using the Ground and 5 Volts output pins.

See images below:

![FTDI USB to Serial Adapter](/images/ftdi-usb-to-serial-adapter.png)

![BetaFPV ELRS 1W TX](/images/betafpv_1w_micro_backside.png)


**Warning**: When you do this, your ELRS TX is in a circuit with your computer's motherboard.
Do not connect any external power source (such as a LiPo Battery) to the ELRS TX.
You can potentially destroy your motherboard if the ELRS TX is not designed properly.

## Configuring the FTDI Adapter

The ELRS transmitter I/O pin works as an inverted half-duplex UART. 

This means:
 * **Inverted** - The logical ones and zeros are inverted on the wire. High voltage means 0, low voltage means 1. 
 * **Half-Duplex UART** - A single pin is used for bidirectional (RX/TX) communication.

Because of this, the FTDI adapter itself needs to be configured to work in this way as well. 
Otherwise, it will send the ones and zeroes incorrectly on the wire.

The FTDI adapter can usually be re-programmed using a utility called [FT Prog](https://ftdichip.com/utilities/#ft_prog)

See image below

![FT Prog](/images/ft-prog.png)


## 2) Connecting with USB cable

The second and more convenient method is to use a USB cable.

Some ELRS transmitters have a USB port that is used for flashing firmware. 
This same USB port can be reconfigured to work as the CRSF serial port. 

To do this, you will need to access the module's /hardware.html page, and change the CRSF RX/TX pin values. 

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

**NOTE**: You may also need to put your ELRS TX in "Firmware Upgrade" mode for this approach to work.




# How to use the application
When the application starts, it exposes a gRPC server with several services. 
Two of those services (`setConfig`, `getConfig`) are used for setting, and getting the current configuration. 

Currently, this is the only way to apply configuration (in the future, there will be a bespoke web based UI)

For now, you can use a gRPC client like [GRPC-UI](https://github.com/fullstorydev/grpcui/releases) 
to interact with the application. 

Here is are some instructions for how to do this:

1. Download and extract the GRPC-UI binary from their GitHub releases.
    1. (put the `grpcui` binary somewhere in your path)
2. Start the elrs_joystick_control application (by default it listens on port 10000)  
    ```shell
    $ elrs_joystick_control
     gRPC server listenting on port 10000
    ```
3. Start GRPC-UI like this
    ```shell
    $ grpcui -plaintext localhost:10000
     gRPC Web UI available at http://127.0.0.1:53885/
    ```
From the gRPC Web UI, then you can send commands to the ELRS Joystick Control application. 

The following RPC services are available:  
  * **setConfig** - Receives a JSON file containing the full configuration, and stores it in memory
  * **getConfig** - Retrieves the full configuration from memory, and sends it as a JSON file
  * **startMixer** - Begins the applications mixer loop (reading USB inputs, and writing to the TX module)
  * **stopMixer** - Stops the application's mixer loop
  * **getRawInputDevices** - Returns a list of raw input devices connected (joysticks, gamepads, etc)
  * **getSerialPorts** - Returns a list of available serial ports 

# Config: File format
The configuration is basically a JSON file that specifies the following information:
  * The (COM) serial port used by the ELRS transmitter (`external_rf_port_name`)
  * The raw input devices (gamepads, joysticks, etc) (`raw_input_devices_map`)
  * The mixer settings for reading and modifying raw input values (`inputs_mixer_map`)
  * The mapping between RC channels and mixer outputs (`channels_inputs_map`)


# Config: External RF

In order for the application to communicate with an ELRS transmitter module, it needs to know which serial COM port
to use. You can specify the COM port name like this:

```json
{
  "config": {
    "external_rf_port_name": "COM16"
  }
}
```

You can get a list of all available serial ports by calling the gRPC service `getSerialPorts`.


# Config: Raw Input Devices

The `raw_input_devices_map` JSON object tells the application which devices will be used by the input mixer.

You can get a list of attached devices by calling the gRPC service `getRawInputDevices`.


```json
{
  "config": {
    "raw_input_devices_map": {
      "left": {
        "id": "89eca7",
        "name": "LEFT VPC Stick WarBRD"
      },
      "right": {
        "id": "0dfada",
        "name": "RIGHT VPC Stick WarBRD"
      }
    }
  }
}
```



# Config: Mixer

The `inputs_mixer_map` JSON object tells the application how to configure the inputs mixer.

The job of the input mixer is to transform device raw input values into values that can be assigned to RC channels.

e.g. 

```json
{
  "config": {
    "inputs_mixer_map": {}
  }
}
```

## Config: Mixer: Read raw axes and buttons values

Here is an example of reading a button, and an axis from the `left` joystick. 

```json
{
  "config": {
    "inputs_mixer_map": {
      "lAxis0": {
        "type": "raw",
        "raw": {
          "input_device": "left",
          "input_type": "axis",
          "input_number": 0
        }
      },
      "lTrigger": {
        "type": "raw",
        "raw": {
          "input_device": "left",
          "input_type": "button",
          "input_number": 0
        }
      }
    }
  }
}
```

Notice we are specifying 3 values.  
  * **input_device** - Points to a raw device from the `raw_input_devices_map` JSON Object (using its JSON key)
  * **input_type** - This can be either `axis` or `button`
  * **input_number** - This is the index number for the specified axis, or button of the raw input device.

## Config: Mixer: Scaling raw input axis values

Typically, the axis values coming from raw input devices are in a range from -32768 to 32768.
These values cannot be used directly for an RC channel. To use them, we need to scale them to the range
of values that work with the CRSFv3 protocol (i.e. from 0 to 1984).

Below is an example for scaling an axis to use as the "pitch" (elevator)

```json
{
  "config": {
    "inputs_mixer_map": {
      "rAxis1": {
        "type": "raw",
        "raw": {
          "input_device": "right",
          "input_type": "axis",
          "input_number": 0
        }
      },
      "pitch": {
        "type": "linear",
        "linear": {
          "input": {
            "type": "read",
            "read": {
              "source": "rAxis1"
            }
          },
          "input_min": -32768,
          "input_max": 32768,
          "input_invert": true,
          "output_min": 0,
          "output_max": 1984,
          "output_invert": false
        }
      }
    }
  }
}
```

## Config: Mixer: Mapping raw input button values

Joystick buttons usually have raw values 0 and 1 depending on whether the button is pressed or not.
These values cannot be assigned directly to RC channels. Instead, they have to be mapped.


The example below shows how to map a momentary button so that it can be used for pre-arming.
In this example, the `prearm` input will change between 0 and 1984 when the lTrigger button changes between 0 and 1 respectively.


```json
{
  "config": {
    "inputs_mixer_map": {
      "lTrigger": {
        "type": "raw",
        "raw": {
          "input_device": "left",
          "input_type": "button",
          "input_number": 0
        }
      },
      "prearm": {
        "type": "map",
        "map": {
          "input_key": {
            "type": "read",
            "read": {
              "source": "lTrigger"
            }
          },
          "output_default": 0,
          "output_map": {
            "0": 0,
            "1": 1984
          }
        }
      }
    }
  }
}
```


## Config: Mixer: Using momentary buttons as sticky switches

Most joysticks only have momentary buttons, axes, and sliders (which are also axes). These are not useful for
functionality that requires two or three position switches. One such example is arming a drone.

We can use the mixer `switch` construct (with `output_sticky: true`) to emulate multi-position switch.

In the example below, we are using two individual momentary buttons to emulate a two-position switch for arming.

* if `button1` is pressed, the `arm` input will have a value of 0.
* if `button2` is pressed, the `arm` input will have a value of 1984


```json
{
  "config": {
    "inputs_mixer_map": {
      "button1": {
        "type": "raw",
        "raw": {
          "input_device": "left",
          "input_type": "button",
          "input_number": 0
        }
      },
      "button2": {
        "type": "raw",
        "raw": {
          "input_device": "right",
          "input_type": "button",
          "input_number": 0
        }
      },
      "arm": {
        "type": "switch",
        "switch": {
          "output_sticky": true,
          "output_default": 0,
          "output_cases": [
            {
              "type": "case",
              "case": {
                "output": 0,
                "condition": {
                  "type": "read",
                  "read": {
                    "source": "button1"
                  }
                }
              }
            },
            {
              "type": "case",
              "case": {
                "output": 1984,
                "condition": {
                  "type": "read",
                  "read": {
                    "source": "button2"
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
}
```


## Config: Mixer: Extra custom operations

The previous examples you have seen how use the `raw`, `map`, `switch`, `case`, and `read` mixer constructs.

Below is a list of additional mixer constructs you can use for more complex scenarios:


  * `and` - outputs one value if all input params are truthy, otherwise outputs another value
  * `or` - outputs one value if at least one input param is truthy, otherwise outputs another value
  * `eq` - outputs one value if all input params are equal, otherwise outputs another value
  * `gte`- outputs one value if the first input param is `>=` to the rest, otherwise outputs another value
  * `lte` - outputs one value if the first input param is `<=` to the rest, otherwise outputs another value
  * `lt` - outputs one value if the first input param is '<' the rest, otherwise outputs another value
  * `gt` - outputs one value if the first input param is '>' the rest, otherwise outputs another value,
  * `value` - outputs the given hardcoded value

Take a look at the [schema.json](/pkg/config/schema.json) file for the full definition of all these constructs.


# Config: RC Channels
Once you have created the `inputs_mixer_map`, you can then use the `channels_inputs_map` JSON object to assign 
specific inputs to RC channels. e.g.

```json 
{
  "config": {
    "channels_inputs_map": {
      "0": "roll",
      "1": "pitch",
      "2": "throttle",
      "3": "yaw",
      "4": "arm",
      "5": "pre",
      "6": "mode"
    }
  }
}
```

* The key is the RC channel number (max 16 channels). 
* The value is the name of the input that will be assigned to the channel. 

# Supported Operating Systems

I have only tested this application in Windows so far, so that's what I can vouch for. But, the code is written such 
that it uses cross-platform libraries. So in theory, you should be able to compile it and run it in a Linux machine 
as well.

# Compiling on Windows


  * Install GoLang SDK
    * Add Go's SDK /bin to your path env var
      * `C:\Users\your_user\sdk\go1.20.3\bin`
    * Set GOROOT env var (this is where Go SDK is installed)
      * `GOROOT=C:\Users\your_user\sdk\go1.20.3` 
    * Set GOPATH env var (this is where Go's third party packages are installed)
      * `GOPATH=C:\Users\your_user\go`
      

  * Download and extract mingw zip file somewhere on your hard drive  
    Prebuilt mingw binaries are available over at the [mingw GitHub repo](https://github.com/niXman/mingw-builds-binaries/releases)  
    Make sure to choose the win32 binary for your architecture (x64_64 is 64bit, i686 is 32bit)  
    
    * Add the MingGW /bin and /include directories to your path
      * `C:\mingw64\bin`
      * `C:\mingw64\include`

  * Download the [SDL2 runtime for mingw](https://github.com/libsdl-org/SDL/releases) zip file and extract it somewhere on your hard drive
    * Locate to the appropriate directory for your architecture (x64 is 64bit, i686 is 32bit)
    * Copy the SDL2's /bin and /include directories over the ones in the mingw installation  
      (the idea is to merge SDL2's /bin and /include dirs with those from mingw)


* Run the Go Build Command from the root of the repo 
  * `go build -tags static -o elrs_joystick_control.exe cmd\elrs-joystick-control\main.go` 


# Compiling on Linux (x86_64)


  * Install GoLang SDK
    ```bash
    curl -sflO https://dl.google.com/go/go1.20.5.linux-amd64.tar.gz

    mkdir -p $HOME/go-sdk
    tar -xzvf go1.20.5.linux-amd64.tar.gz -C $HOME/go-sdk

    mkdir -p $HOME/go

    export PATH=$HOME/go-sdk/go/bin:$PATH
    export GOROOT=$HOME/go-sdk/go
    export GOPATH=$HOME/go
    ```
      
  * Install SDL2
    ```bash
    sudo apt-get install libsdl2-2.0-0 libsdl2-dev
    ```
   
* Run the Go Build Command from the root of the repo 
  ```bash
  go build -tags static -o elrs_joystick_control cmd\elrs-joystick-control\main.go
  ``` 
