export class ResultHandler {
    pass(element, data) {
        element.setAttribute('src', data); //element can be renamed to anything
    }
    fail(data) {
        console.error(data);
    }
}
//# sourceMappingURL=result_handler.js.map