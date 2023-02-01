import { runtimeDebug } from "@effect/io/Debug"

runtimeDebug.tracingEnabled = true;
runtimeDebug.minumumLogLevel = "Debug";

import("./main.js");
