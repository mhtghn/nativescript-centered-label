import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./centered-label.directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class CenteredLabelModule { }

registerElement("CenteredLabel", () => require("../").CenteredLabel);
