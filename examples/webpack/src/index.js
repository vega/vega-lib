import { Debug as LoglevelDebug, parse, View } from "vega-lib";

import spec from "./specs/wordcloud.vg.json";

const runtime = parse(spec);
const renderType = "svg";

const view = new View(runtime, {
  logLevel: LoglevelDebug,
  renderer: renderType
});

view
  .initialize(document.getElementById("canvas"))
  .hover()
  .runAsync();
