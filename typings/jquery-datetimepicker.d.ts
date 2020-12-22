interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
    datetimepicker(args: any): JQuery<TElement>;
}

interface JQueryStatic<TElement extends Node = HTMLElement> {
    datetimepicker: any;
}
