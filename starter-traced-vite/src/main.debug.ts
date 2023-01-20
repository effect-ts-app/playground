import { runtimeDebug } from "@effect/io/Debug"

runtimeDebug.traceExecutionLogEnabled = true;
runtimeDebug.minumumLogLevel = "Debug";

import("./main.js");
