import {FlexboxLayout} from "tns-core-modules/ui/layouts/flexbox-layout";
import { View, Property } from "tns-core-modules/ui/core/view";

let builder = require('tns-core-modules/ui/builder');

export const textProperty = new Property<CenteredLabel, string>({name: 'text', defaultValue: ''});

export class CenteredLabel extends FlexboxLayout {
    constructor() {
        super();

        // let innerComponent = builder.load(__dirname + '/centered-label.xml') as View;
        let innerComponent = builder.parse(<string>require(__dirname + '/centered-label.xml')) as View;
        innerComponent.bindingContext = this;

        this.addChild(innerComponent);
    }

    public text: any;
}

textProperty.register(CenteredLabel);
