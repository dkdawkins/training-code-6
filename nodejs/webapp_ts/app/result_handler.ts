export class ResultHandler {
  pass(element: HTMLImageElement, data: any): void {
    element.setAttribute('src', data);  //element can be renamed to anything
  }

  fail(data: any): void {
    console.error(data);
  }
}